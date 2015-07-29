/**
 * This component checks for collisions between entities which typically have either a [[Collision-Tiles]] component for tile maps or a [[Collision-Basic]] component for other entities. It uses `EntityContainer` component messages if triggered to add to its collision list and also listens for explicit add/remove messages (useful in the absence of an `EntityContainer` component).
 * 
 * @class "HandlerCollision" Component
 * @uses Component
 */
 
// Requires: ["../collision-shape.js", "../aabb.js", "../vector.js", "../collision-data-container.js"]
/*global platypus */
/*jslint plusplus:true */
(function () {
    "use strict";
    
    //set here to make them reusable objects
    
    /**
     * When an entity collides with an entity of a listed collision-type, this message is triggered on the entity. * is the other entity's collision-type.
     * 
     * @event 'hit-by-*'
     * @param collision {Object}
     * @param collision.entity {Entity} The entity with which the collision occurred.
     * @param collision.type {String} The collision type of the other entity.
     * @param collision.shape {CollisionShape} This is the shape of the other entity that caused the collision.
     * @param collision.x {number} Returns -1, 0, or 1 indicating on which side of this entity the collision occurred: left, neither, or right respectively.
     * @param collision.y {number} Returns -1, 0, or 1 indicating on which side of this entity the collision occurred: top, neither, or bottom respectively.
     */
    var triggerMessage = {
            entity: null,
            type:   null,
            x: 0,
            y: 0,
            hitType: null,
            myType: null
        },
        entityCollisionDataContainer = new platypus.CollisionDataContainer(),
        isAABBCollision = function (boxX, boxY) {
            if ((boxX.left       >=  boxY.right)  ||
                    (boxX.right  <=  boxY.left)   ||
                    (boxX.top    >=  boxY.bottom) ||
                    (boxX.bottom <=  boxY.top)) {
                return false;
            }
            return true;
        },
        shapeCollision = function (shapeA, shapeB) {
            var distSquared      = 0,
                radiiSquared     = 0,
                circle           = null,
                rect             = null,
                shapeDistanceX   = 0,
                shapeDistanceY   = 0,
                rectAabb         = null,
                cornerDistanceSq = 0;
            
            if (shapeA.type === 'rectangle' && shapeB.type === 'rectangle') {
                return true;
            } else if (shapeA.type === 'circle' && shapeB.type === 'circle') {
                distSquared = Math.pow((shapeA.x - shapeB.x), 2) + Math.pow((shapeA.y - shapeB.y), 2);
                radiiSquared = Math.pow((shapeA.radius + shapeB.radius), 2);
                if (distSquared <= radiiSquared) {
                    return true;
                }
            } else if ((shapeA.type === 'circle' && shapeB.type === 'rectangle') || (shapeA.type === 'rectangle' && shapeB.type === 'circle')) {
                if (shapeA.type === 'circle') {
                    circle = shapeA;
                    rect = shapeB;
                } else {
                    circle = shapeB;
                    rect = shapeA;
                }
                rectAabb = rect.getAABB();

                shapeDistanceX = Math.abs(circle.x - rect.x);
                shapeDistanceY = Math.abs(circle.y - rect.y);

                if (shapeDistanceX >= (rectAabb.halfWidth + circle.radius)) { return false; }
                if (shapeDistanceY >= (rectAabb.halfHeight + circle.radius)) { return false; }

                if (shapeDistanceX < (rectAabb.halfWidth)) { return true; }
                if (shapeDistanceY < (rectAabb.halfHeight)) { return true; }

                cornerDistanceSq = Math.pow((shapeDistanceX - rectAabb.halfWidth), 2) + Math.pow((shapeDistanceY - rectAabb.halfHeight), 2);
                if (cornerDistanceSq < Math.pow(circle.radius, 2)) {
                    return true;
                }
            }
            return false;
        };
    
    return platypus.createComponentClass({
        id: 'HandlerCollision',
        
        constructor: function (definition) {
            this.entitiesByType = {};
            this.entitiesByTypeLive = {};
            this.allEntities = [];
            this.solidEntitiesLive = [];
            this.softEntitiesLive = [];
            this.allEntitiesLive = [];
            this.groupsLive = [];
            this.nonColliders = [];
            
            this.terrain = undefined;
            this.aabb     = new platypus.AABB(this.owner.x, this.owner.y);
            this.prevAABB = new platypus.AABB(this.owner.x, this.owner.y);
            this.owner.previousX = this.owner.previousX || this.owner.x;
            this.owner.previousY = this.owner.previousY || this.owner.y;
            
            this.updateLiveList = true;
            this.cameraLogicAABB = new platypus.AABB(0, 0);
            this.cameraCollisionAABB = new platypus.AABB(0, 0);
            
            this.timeElapsed = {
                name: 'Col',
                time: 0
            };
        },
        
        events: {
            /**
             * On receiving this message, the component checks the entity to determine whether it listens for collision messages. If so, the entity is added to the collision group.
             * 
             * @method 'child-entity-added'
             * @param entity {Entity} The entity to be added.
             */
            "child-entity-added": function (entity) {
                if (!entity.collideOff) {
                    this.addCollisionEntity(entity);
                }
            },
            
            /**
             * On receiving this message, the component checks the entity to determine whether it listens for collision messages. If so, the entity is added to the collision group.
             * 
             * @method 'add-collision-entity'
             * @param entity {Entity} The entity to be added.
             */
            "add-collision-entity": function (entity) {
                this.addCollisionEntity(entity);
            },
            
            /**
             * On receiving this message, the component looks for the entity in its collision group and removes it.
             * 
             * @method 'child-entity-removed'
             * @param message ([[Entity]] object) - The entity to be removed.
             */
            "child-entity-removed": function (entity) {
                this.removeCollisionEntity(entity);
            },
            
            /**
             * On receiving this message, the component looks for the entity in its collision group and removes it.
             * 
             * @method 'remove-collision-entity'
             * @param message ([[Entity]] object) - The entity to be removed.
             */
            "remove-collision-entity": function (entity) {
                this.removeCollisionEntity(entity);
            },
            
            /**
             * This message causes the component to go through the entities and check for collisions.
             * 
             * @method 'check-collision-group'
             * @param options {Object}
             * @param [options.camera] {Object} Specifies a region in which to check for collisions. Expects the camera object to contain the following properties: top, left, width, height, and buffer.
             */
            "check-collision-group": function (resp) {
                var time = new Date().getTime(); //TODO: TML - Why create this in here?
                
                if (resp.camera) {
                    this.checkCamera(resp.camera);
                }/*
                if (resp.movers) {
                    this.checkMovers(resp.camera, resp.movers);
                }*/

                this.timeElapsed.name = 'Col-Cam';
                this.timeElapsed.time = new Date().getTime() - time;
                platypus.game.currentScene.trigger('time-elapsed', this.timeElapsed);
                time += this.timeElapsed.time;

                this.prepareCollisions(resp);

                this.timeElapsed.name = 'Col-Prep';
                this.timeElapsed.time = new Date().getTime() - time;
                platypus.game.currentScene.trigger('time-elapsed', this.timeElapsed);
                time += this.timeElapsed.time;

                this.checkGroupCollisions();

                this.timeElapsed.name = 'Col-Group';
                this.timeElapsed.time = new Date().getTime() - time;
                platypus.game.currentScene.trigger('time-elapsed', this.timeElapsed);
                time += this.timeElapsed.time;

                this.checkSolidCollisions();

                this.timeElapsed.name = 'Col-Solid';
                this.timeElapsed.time = new Date().getTime() - time;
                platypus.game.currentScene.trigger('time-elapsed', this.timeElapsed);
                time += this.timeElapsed.time;

                this.resolveNonCollisions(resp);

                this.timeElapsed.name = 'Col-None';
                this.timeElapsed.time = new Date().getTime() - time;
                platypus.game.currentScene.trigger('time-elapsed', this.timeElapsed);
                time += this.timeElapsed.time;

                this.checkSoftCollisions(resp);

                this.timeElapsed.name = 'Col-Soft';
                this.timeElapsed.time = new Date().getTime() - time;
                platypus.game.currentScene.trigger('time-elapsed', this.timeElapsed);
                time += this.timeElapsed.time;
            }
        },
        
        methods: {
            addCollisionEntity: function (entity) {
                var i     = 0,
                    types = entity.collisionTypes;
                
                if ((entity.type === 'tile-layer') || (entity.type === 'collision-layer')) { //TODO: probably should have these reference a required function on the obj, rather than an explicit type list since new collision entity map types could be created - DDD
                    this.terrain = entity;
                    this.updateLiveList = true;
                } else {
                    if (types) {
                        for (i = 0; i < types.length; i++) {
                            if (!this.entitiesByType[types[i]]) {
                                this.entitiesByType[types[i]] = [];
                                this.entitiesByTypeLive[types[i]] = [];
                            }
                            this.entitiesByType[types[i]][this.entitiesByType[types[i]].length] = entity;
                        }
                        if (!entity.immobile) {
                            this.allEntities[this.allEntities.length] = entity;
                            this.updateLiveList = true;
                        }
                    }
                }
            },

            removeCollisionEntity: function (entity) {
                var x     = 0,
                    i     = 0,
                    j     = 0,
                    types = entity.collisionTypes;

                if (types) {
                    for (i = 0; i < types.length; i++) {
                        for (x in this.entitiesByType[types[i]]) {
                            if (this.entitiesByType[types[i]][x] === entity) {
                                this.entitiesByType[types[i]].splice(x, 1);
                                break;
                            }
                        }
                    }
                    
                    if (!entity.immobile) {
                        for (j = 0; j < this.allEntities.length; j++) {
                            if (this.allEntities[j] === entity) {
                                this.allEntities.splice(j, 1);
                                break;
                            }
                        }
                        this.updateLiveList = true;
                    }
                }
            },
            
            checkCamera: (function () {
                var groupSortBySize = function (a, b) {
                    return a.collisionGroup.getAllEntities() - b.collisionGroup.getAllEntities();
                };
                return function (camera, movers) {
                    var i        = 0,
                        j        = 0,
                        length   = 0,
                        list     = null,
                        all      = null,
                        softs    = null,
                        solids   = null,
                        groups   = null,
                        width    = camera.width,
                        height   = camera.height,
                        x        = camera.left + width  / 2,
                        y        = camera.top  + height / 2,
                        buffer   = camera.buffer,
                        entities      = null,
                        entity        = null,
                        check         = isAABBCollision,
                        aabbLogic     = this.cameraLogicAABB,
                        aabbCollision = this.cameraCollisionAABB,
                        types = null;
                    
                    // store buffered size since the actual width x height is not used below.
                    width  += buffer * 2;
                    height += buffer * 2;
                    
                    if (this.updateLiveList || !aabbLogic.matches(x, y, width, height)) {
                        
                        aabbLogic.setAll(x, y, width, height);
                        
                        // Removing this line since it allows logic to run without collision turned on. Not certain why, but can turn this back on and trace down the issue if optimization is necessary. - DDD 12/31/2014
                        //if (this.updateLiveList || !aabbCollision.contains(aabbLogic)) { //if the camera has not moved beyond the original buffer, we do not continue these calculations
                        this.updateLiveList = false;

                        all = this.allEntitiesLive;
                        all.length = 0;

                        solids = this.solidEntitiesLive;
                        solids.length = 0;

                        softs = this.softEntitiesLive;
                        softs.length = 0;

                        groups = this.groupsLive;
                        groups.length = 0;

                        length = this.allEntities.length;// console.log(length);
                        for (i = 0; i < length; i++) {
                            entity = this.allEntities[i];
                            if (entity.alwaysOn || entity.checkCollision || check(entity.getAABB(), aabbLogic)) {
                                entity.checkCollision = false;  //TML - This should be here. I think. :)
                                all[all.length] = entity;

                                types = entity.collisionTypes;
                                if (entity !== this.owner) {
                                    for (j = 0; j < types.length; j++) {
                                        if (entity.solidCollisions[types[j]].length) {
                                            solids[solids.length] = entity;
                                            break;
                                        }
                                    }
                                }
                                for (j = 0; j < types.length; j++) {
                                    if (entity.softCollisions[types[j]].length) {
                                        softs[softs.length] = entity;
                                        break;
                                    }
                                }

                                if (entity.collisionGroup) {
                                    groups.push(entity);
                                }
                            }
                        }

                        groups.sort(groupSortBySize);

                        // add buffer again to capture stationary entities along the border that may be collided against 
                        aabbCollision.setAll(x, y, width + buffer * 2, height + buffer * 2);

                        for (i in this.entitiesByType) {
                            if (this.entitiesByType.hasOwnProperty(i)) {
                                entities = this.entitiesByType[i];
                                list = this.entitiesByTypeLive[i];
                                list.length = 0;
                                length = entities.length;
                                for (j = 0; j < length; j++) {
                                    entity = entities[j];
                                    if (entity.alwaysOn  || check(entity.getAABB(), aabbCollision)) {
                                        list[list.length] = entity;
                                    }
                                }
                            }
                        }
                        //}
                    }
                };
            }()),
            
            prepareCollisions: function (resp) {
                var x      = 0,
                    entity = null;
                
                this.nonColliders.length = 0;
                
                /**
                 * This message is triggered on collision entities to make sure their axis-aligned bounding box is prepared for collision testing.
                 * 
                 * @event 'prepare-for-collision'
                 * @param tick {Object} Object containing information about the current logic step.
                 */
                for (x = this.allEntitiesLive.length - 1; x > -1; x--) {
                    entity = this.allEntitiesLive[x];
                    entity.triggerEvent('prepare-for-collision', resp);
                    if (!entity.collides) {
                        this.nonColliders.push(entity);
                    }
                }
            },
            
            resolveNonCollisions: function (resp) {
                var x      = 0,
                    entity = null,
                    xy     = {
                        position: new platypus.Vector(),
                        relative: false
                    };
                
                /**
                 * This message is triggered on an entity that has been repositioned due to a solid collision.
                 * 
                 * @event 'relocate-entity'
                 * @param object {Object}
                 * @param object.position {Vector} The relocated position of the entity.
                 */
                for (x = this.nonColliders.length - 1; x > -1; x--) {
                    entity = this.nonColliders[x];
                    xy.position.set(entity.position);
                    entity.trigger('relocate-entity', xy);
                }
            },
            
            checkGroupCollisions:  (function () {
                var triggerCollisionMessages = function (entity, otherEntity, thisType, thatType, x, y, hitType, vector) {
                    
                    triggerMessage.entity    = otherEntity;
                    triggerMessage.myType    = thisType;
                    triggerMessage.type      = thatType;
                    triggerMessage.x         = x;
                    triggerMessage.y         = y;
                    triggerMessage.direction = vector;
                    triggerMessage.hitType   = hitType;
                    entity.triggerEvent('hit-by-' + thatType, triggerMessage);
                    
                    if (otherEntity) {
                        triggerMessage.entity    = entity;
                        triggerMessage.type      = thisType;
                        triggerMessage.myType    = thatType;
                        triggerMessage.x         = -x;
                        triggerMessage.y         = -y;
                        triggerMessage.direction = vector.getInverse();
                        triggerMessage.hitType   = hitType;
                        otherEntity.triggerEvent('hit-by-' + thisType, triggerMessage);
                    }

                };

                return function () {
                    var x           = 0,
                        i           = 0,
                        entities    = this.groupsLive,
                        fmi         = new platypus.Vector(),
                        messageData = null;
                    
                    for (x = entities.length - 1; x > -1; x--) {
                        if (entities[x].collisionGroup.getSize() > 1) {
                            entityCollisionDataContainer.reset();
                            fmi.set(0, 0, 0);
                            fmi = this.checkSolidEntityCollision(entities[x], entities[x].collisionGroup, entityCollisionDataContainer, fmi);
                            
                            for (i = 0; i < entityCollisionDataContainer.xCount; i++) {
                                messageData = entityCollisionDataContainer.getXEntry(i);
                                triggerCollisionMessages(messageData.thisShape.owner, messageData.thatShape.owner, messageData.thisShape.collisionType, messageData.thatShape.collisionType, messageData.direction, 0, 'solid', messageData.vector);
                            }
                            
                            for (i = 0; i < entityCollisionDataContainer.yCount; i++) {
                                messageData = entityCollisionDataContainer.getYEntry(i);
                                triggerCollisionMessages(messageData.thisShape.owner, messageData.thatShape.owner, messageData.thisShape.collisionType, messageData.thatShape.collisionType, 0, messageData.direction, 'solid', messageData.vector);
                            }
                        }
                    }
                };
            }()),
            
            checkSolidCollisions: (function () {
                var triggerCollisionMessages = function (entity, otherEntity, thisType, thatType, x, y, hitType, vector) {
                    
                    triggerMessage.entity    = otherEntity;
                    triggerMessage.myType    = thisType;
                    triggerMessage.type      = thatType;
                    triggerMessage.x         = x;
                    triggerMessage.y         = y;
                    triggerMessage.direction = vector;
                    triggerMessage.hitType   = hitType;
                    entity.triggerEvent('hit-by-' + thatType, triggerMessage);
                    
                    if (otherEntity) {
                        triggerMessage.entity    = entity;
                        triggerMessage.type      = thisType;
                        triggerMessage.myType    = thatType;
                        triggerMessage.x         = -x;
                        triggerMessage.y         = -y;
                        triggerMessage.direction = vector.getInverse();
                        triggerMessage.hitType   = hitType;
                        otherEntity.triggerEvent('hit-by-' + thisType, triggerMessage);
                    }

                };

                return function () {
                    var x           = 0,
                        i           = 0,
                        messageData = null,
                        entities    = this.solidEntitiesLive,
                        fmi         = new platypus.Vector();
                    
                    for (x = entities.length - 1; x > -1; x--) {
                        entityCollisionDataContainer.reset();
                        fmi.set(0, 0, 0);
                        fmi = this.checkSolidEntityCollision(entities[x], entities[x], entityCollisionDataContainer, fmi);
                        
                        for (i = 0; i < entityCollisionDataContainer.xCount; i++) {
                            messageData = entityCollisionDataContainer.getXEntry(i);
                            triggerCollisionMessages(messageData.thisShape.owner, messageData.thatShape.owner, messageData.thisShape.collisionType, messageData.thatShape.collisionType, messageData.direction, 0, 'solid', messageData.vector);
                        }
                        
                        for (i = 0; i < entityCollisionDataContainer.yCount; i++) {
                            messageData = entityCollisionDataContainer.getYEntry(i);
                            triggerCollisionMessages(messageData.thisShape.owner, messageData.thatShape.owner, messageData.thisShape.collisionType, messageData.thatShape.collisionType, 0, messageData.direction, 'solid', messageData.vector);
                        }
                    }
                };
            }()),
            
            checkSolidEntityCollision: function (ent, entityOrGroup, collisionDataCollection, xyInfo) {
                var steps             = 0,
                    step              = 0,
                    i                 = 0,
                    finalMovementInfo = xyInfo,
                    entityDeltaX      = ent.x - ent.previousX,
                    entityDeltaY      = ent.y - ent.previousY,
                    aabb              = null,
                    dX                = 0,
                    dY                = 0,
                    sW                = Infinity,
                    sH                = Infinity,
                    collisionTypes    = entityOrGroup.getCollisionTypes(),
                    ignoredEntities   = false;
                
                if (entityOrGroup.getSolidEntities) {
                    ignoredEntities = entityOrGroup.getSolidEntities();
                }
                
                finalMovementInfo.set(ent.position);

                if (entityDeltaX || entityDeltaY) {
                    
                    if (ent.bullet) {
                        for (i = 0; i < collisionTypes.length; i++) {
                            aabb = entityOrGroup.getAABB(collisionTypes[i]);
                            sW = Math.min(sW, aabb.width);
                            sH = Math.min(sH, aabb.height);
                        }

                        //Stepping to catch really fast entities - this is not perfect, but should prevent the majority of fallthrough cases.
                        steps = Math.ceil(Math.max(Math.abs(entityDeltaX) / sW, Math.abs(entityDeltaY) / sH));
                        steps = Math.min(steps, 100); //Prevent memory overflow if things move exponentially far.
                        dX    = entityDeltaX / steps;
                        dY    = entityDeltaY / steps;
                    } else {
                        steps = 1;
                        dX    = entityDeltaX;
                        dY    = entityDeltaY;
                    }
                    
                    for (step = 0; step < steps; step++) {
                        entityOrGroup.prepareCollision(ent.previousX + dX, ent.previousY + dY);

                        finalMovementInfo.set(ent.position);
                        
                        finalMovementInfo = this.processCollisionStep(ent, entityOrGroup, ignoredEntities, collisionDataCollection, finalMovementInfo, dX, dY, collisionTypes);
                        
                        
                        if ((finalMovementInfo.x === ent.previousX) && (finalMovementInfo.y === ent.previousY)) {
                            entityOrGroup.relocateEntity(finalMovementInfo, collisionDataCollection);
                            //No more movement so we bail!
                            break;
                        } else {
                            entityOrGroup.relocateEntity(finalMovementInfo, collisionDataCollection);
                        }
                    }
                }
                
                return finalMovementInfo;
            },
            
            processCollisionStep: (function () {
                var sweepAABB     = new platypus.AABB(),
                    includeEntity = function (thisEntity, aabb, otherEntity, otherCollisionType, ignoredEntities) {
                        var i         = 0,
                            otherAABB = otherEntity.getAABB(otherCollisionType);
                        
                        if (otherEntity === thisEntity) {
                            return false;
                        } else if (otherEntity.jumpThrough && (aabb.bottom > otherAABB.top)) {
                            return false;
                        } else if (thisEntity.jumpThrough  && (otherAABB.bottom > aabb.top)) { // This will allow platforms to hit something solid sideways if it runs into them from the side even though originally they were above the top. - DDD
                            return false;
                        } else if (ignoredEntities) {
                            for (i = 0; i < ignoredEntities.length; i++) {
                                if (otherEntity === ignoredEntities[i]) {
                                    return false;
                                }
                            }
                        }
                        return true;
                    };

                return function (ent, entityOrGroup, ignoredEntities, collisionDataCollection, finalMovementInfo, entityDeltaX, entityDeltaY, collisionTypes) {
                    var i = 0,
                        y = 0,
                        z = 0,
                        q = 0,
                        potentialCollision       = false,
                        potentialCollidingShapes = [],
                        previousAABB             = null,
                        currentAABB              = null,
                        collisionType            = null,
                        otherEntity              = null,
                        otherCollisionType       = '',
                        otherShapes              = null,
                        entitiesByTypeLive       = this.getWorldEntities(),
                        otherEntities            = null,
                        terrain                  = this.getWorldTerrain(),
                        solidCollisions          = entityOrGroup.getSolidCollisions();
                    
//                    if (!entityOrGroup.jumpThrough || (entityDeltaY >= 0)) { //TODO: Need to extend jumpthrough to handle different directions and forward motion - DDD
    
                    for (i = 0; i < collisionTypes.length; i++) {
                        //Sweep the full movement of each collision type
                        potentialCollidingShapes[i] = [];
                        collisionType = collisionTypes[i];
                        previousAABB = entityOrGroup.getPreviousAABB(collisionType);
                        currentAABB = entityOrGroup.getAABB(collisionType);

                        sweepAABB.reset();
                        sweepAABB.include(currentAABB);
                        sweepAABB.include(previousAABB);

                        for (y = 0; y < solidCollisions[collisionType].length; y++) {
                            otherCollisionType = solidCollisions[collisionType][y];

                            if (entitiesByTypeLive[otherCollisionType]) {
                                otherEntities = entitiesByTypeLive[otherCollisionType];

                                for (z = 0; z < otherEntities.length; z++) {

                                    //Chop out all the special case entities we don't want to check against.
                                    otherEntity = otherEntities[z];

                                    //Do our sweep check against the AABB of the other object and add potentially colliding shapes to our list.
                                    if (includeEntity(ent, previousAABB, otherEntity, otherCollisionType, ignoredEntities) && (isAABBCollision(sweepAABB, otherEntity.getAABB(otherCollisionType)))) {
                                        otherShapes = otherEntity.getShapes(otherCollisionType);

                                        for (q = 0; q < otherShapes.length; q++) {
                                            //Push the shapes on the end!
                                            potentialCollidingShapes[i].push(otherShapes[q]);
                                        }
                                        potentialCollision = true;
                                    }
                                }
                            } else if (terrain && (otherCollisionType === 'tiles')) {
                                //Do our sweep check against the tiles and add potentially colliding shapes to our list.
                                otherShapes = terrain.getTileShapes(sweepAABB, previousAABB);
                                for (q = 0; q < otherShapes.length; q++) {
                                    //Push the shapes on the end!
                                    potentialCollidingShapes[i].push(otherShapes[q]);
                                    potentialCollision = true;
                                }
                            }
                        }
                    }

                    if (potentialCollision) {
                        finalMovementInfo = this.resolveCollisionPosition(ent, entityOrGroup, finalMovementInfo, potentialCollidingShapes, collisionDataCollection, collisionTypes, entityDeltaX, entityDeltaY);
                    }
    
//                    }
                    
                    return finalMovementInfo;
                };
            }()),
            
            resolveCollisionPosition: (function () {
                var collisionData = new platypus.CollisionData();
                
                return function (ent, entityOrGroup, finalMovementInfo, potentialCollidingShapes, collisionDataCollection, collisionTypes, entityDeltaX, entityDeltaY) {
                    var j = 0;
                    
                    if (entityDeltaX !== 0) {
                        for (j = 0; j < collisionTypes.length; j++) {
                            //Move each collision type in X to find the min X movement
                            collisionData.clear();
                            collisionData = this.findMinAxisMovement(ent, entityOrGroup, collisionTypes[j], 'x', potentialCollidingShapes[j], collisionData);
                            
                            if (collisionData.occurred) {
                                collisionDataCollection.tryToAddX(collisionData);
                            }
                        }
                    }
                    
                    if (collisionDataCollection.xCount > 0) {
                        collisionData.copy(collisionDataCollection.getXEntry(0));
                        finalMovementInfo.x = ent.previousX + collisionData.deltaMovement * collisionData.direction;
                    } else {
                        finalMovementInfo.x = ent.x;
                    }
                    
                    // This moves the previous position of everything so that the check in Y can begin.
                    entityOrGroup.movePreviousX(finalMovementInfo.x);
                    
                    if (entityDeltaY !== 0) {
                        for (j = 0; j < collisionTypes.length; j++) {
                            //Move each collision type in Y to find the min Y movement
                            collisionData.clear();
                            collisionData = this.findMinAxisMovement(ent, entityOrGroup, collisionTypes[j], 'y', potentialCollidingShapes[j], collisionData);
                            
                            if (collisionData.occurred) {
                                collisionDataCollection.tryToAddY(collisionData);
                            }
                        }
                    }
                    
                    if (collisionDataCollection.yCount > 0) {
                        collisionData.copy(collisionDataCollection.getYEntry(0));
                        finalMovementInfo.y = ent.previousY + collisionData.deltaMovement * collisionData.direction;
                    } else {
                        finalMovementInfo.y = ent.y;
                    }
                    
                    return finalMovementInfo;
                };
            }()),
            
            findMinAxisMovement: (function () {
                var shapeCollisionData = new platypus.CollisionData();
                
                return function (ent, entityOrGroup, collisionType, axis, potentialCollidingShapes, bestCollisionData) {
                    //Loop through my shapes of this type vs the colliding shapes and do precise collision returning the shortest movement in axis direction
                    var i          = 0,
                        shapes     = entityOrGroup.getShapes(collisionType),
                        prevShapes = entityOrGroup.getPrevShapes(collisionType);
                    
                    for (i = 0; i < shapes.length; i++) {
                        shapeCollisionData.clear();
                        shapeCollisionData = this.findMinShapeMovementCollision(prevShapes[i], shapes[i], axis, potentialCollidingShapes, shapeCollisionData);
                        
                        if (shapeCollisionData.occurred && !bestCollisionData.occurred) {
                            //if a collision occurred and we haven't already have a collision.
                            bestCollisionData.copy(shapeCollisionData);
                        } else if (shapeCollisionData.occurred && bestCollisionData.occurred && (shapeCollisionData.deltaMovement < bestCollisionData.deltaMovement)) {
                            //if a collision occurred and the diff is smaller than our best diff.
                            bestCollisionData.copy(shapeCollisionData);
                        }
                    }
                    
                    return bestCollisionData;
                };
            }()),
            
            /**
             * Find the earliest point at which this shape collides with one of the potential colliding shapes along this axis.
             * For example, cycles through shapes a, b, and c to find the earliest position:
             * 
             *    O---->   [b]  [a]     [c]
             *    
             *    Returns collision location for:
             *    
             *            O[b]
             * 
             */
            findMinShapeMovementCollision: (function () {

                var storeCollisionData = function (collisionData, direction, position, initial, thisShape, thatShape, vector) {
                        collisionData.occurred = true;
                        collisionData.direction = direction;
                        collisionData.position = position;
                        collisionData.deltaMovement = Math.abs(position - initial);
                        collisionData.aABB = thatShape.getAABB();
                        collisionData.thisShape = thisShape;
                        collisionData.thatShape = thatShape;
                        collisionData.vector = vector.copy();
                    },
                    findAxisCollisionPosition = (function () {
                        var v = new platypus.Vector(),
                            returnInfo = {
                                position: 0,
                                contactVector: v
                            },
                            getMovementDistance = function (currentDistance, minimumDistance) {
                                return Math.sqrt(Math.pow(minimumDistance, 2) - Math.pow(currentDistance, 2));
                            },
                            getCorner = function (circlePos, rectanglePos, half) {
                                var diff = circlePos - rectanglePos;
                                return diff - (diff / Math.abs(diff)) * half;
                            },
                            getOffsetForAABB = function (axis, thisAABB, thatAABB) {
                                if (axis === 'x') {
                                    return thatAABB.halfWidth + thisAABB.halfWidth;
                                } else if (axis === 'y') {
                                    return thatAABB.halfHeight + thisAABB.halfHeight;
                                }
                            },
                            getOffsetForCircleVsAABB = function (axis, circle, rect, moving, direction) {
                                var newAxisPosition = 0;

                                if (axis === 'x') {
                                    if (circle.y >= rect.aABB.top && circle.y <= rect.aABB.bottom) {
                                        return rect.aABB.halfWidth + circle.radius;
                                    } else {
                                        v.y = getCorner(circle.y, rect.y, rect.aABB.halfHeight);
                                        newAxisPosition = rect.aABB.halfWidth + getMovementDistance(v.y, circle.radius);
                                        if (moving === circle) {
                                            v.x = -getCorner(circle.x - direction * newAxisPosition, rect.x, rect.aABB.halfWidth) / 2;
                                            v.y = -v.y;
                                        } else {
                                            v.x = getCorner(circle.x, rect.x - direction * newAxisPosition, rect.aABB.halfWidth) / 2;
                                        }
                                        v.normalize();
                                        return newAxisPosition;
                                    }
                                } else if (axis === 'y') {
                                    if (circle.x >= rect.aABB.left && circle.x <= rect.aABB.right) {
                                        return rect.aABB.halfHeight + circle.radius;
                                    } else {
                                        v.x = getCorner(circle.x, rect.x, rect.aABB.halfWidth);
                                        newAxisPosition = rect.aABB.halfHeight + getMovementDistance(v.x, circle.radius);
                                        if (moving === circle) {
                                            v.x = -v.x;
                                            v.y = -getCorner(circle.y - direction * newAxisPosition, rect.y, rect.aABB.halfWidth) / 2;
                                        } else {
                                            v.y = getCorner(circle.y, rect.y - direction * newAxisPosition, rect.aABB.halfWidth) / 2;
                                        }
                                        v.normalize();
                                        return newAxisPosition;
                                    }
                                }
                            },
                            getOffsetForCircles = function (axis, thisShape, thatShape) {
                                if (axis === 'x') {
                                    return getMovementDistance(thisShape.y - thatShape.y, thisShape.radius + thatShape.radius);
                                } else if (axis === 'y') {
                                    return getMovementDistance(thisShape.x - thatShape.x, thisShape.radius + thatShape.radius);
                                }
                            };

                        return function (axis, direction, thisShape, thatShape) {
                            //Returns the value of the axis at which point thisShape collides with thatShape

                            if (thisShape.type === 'rectangle') {
                                if (thatShape.type === 'rectangle') {
                                    returnInfo.position = thatShape[axis] - direction * getOffsetForAABB(axis, thisShape.getAABB(), thatShape.getAABB());
                                    v.x = 0;
                                    v.y = 0;
                                    v[axis] = direction;
                                    return returnInfo;
                                } else if (thatShape.type === 'circle') {
                                    v.x = 0;
                                    v.y = 0;
                                    v[axis] = direction;
                                    returnInfo.position = thatShape[axis] - direction * getOffsetForCircleVsAABB(axis, thatShape, thisShape, thisShape, direction);
                                    return returnInfo;
                                }
                            } else if (thisShape.type === 'circle') {
                                if (thatShape.type === 'rectangle') {
                                    v.x = 0;
                                    v.y = 0;
                                    v[axis] = direction;
                                    returnInfo.position = thatShape[axis] - direction * getOffsetForCircleVsAABB(axis, thisShape, thatShape, thisShape, direction);
                                    return returnInfo;
                                } else if (thatShape.type === 'circle') {
                                    returnInfo.position = thatShape[axis] - direction * getOffsetForCircles(axis, thisShape, thatShape);
                                    v.x = thatShape.x - thisShape.x;
                                    v.y = thatShape.y - thisShape.y;
                                    v[axis] = thatShape[axis] - returnInfo.position;
                                    v.normalize();
                                    return returnInfo;
                                }
                            }
                        };
                    }());
                
                return function (prevShape, currentShape, axis, potentialCollidingShapes, collisionData) {
                    var i = 0,
                        initialPoint    = prevShape[axis],
                        goalPoint       = currentShape[axis],
                        translatedShape = prevShape,
                        direction       = ((initialPoint < goalPoint) ? 1 : -1),
                        position        = goalPoint,
                        collisionInfo   = null,
                        finalPosition   = goalPoint;
                    
                    if (initialPoint !== goalPoint) {
                        if (axis === 'x') {
                            translatedShape.moveX(goalPoint);
                        } else if (axis === 'y') {
                            translatedShape.moveY(goalPoint);
                        }
                        
                        for (i = 0; i < potentialCollidingShapes.length; i++) {
                            position = goalPoint;
                            if (isAABBCollision(translatedShape.getAABB(), potentialCollidingShapes[i].getAABB())) { //TML - Could potentially shove this back into the rectangle shape check, but I'll leave it here.
                                if (shapeCollision(translatedShape, potentialCollidingShapes[i])) {
                                    collisionInfo = findAxisCollisionPosition(axis, direction, translatedShape, potentialCollidingShapes[i]);
                                    position = collisionInfo.position;
                                    
                                    if (direction > 0) {
                                        if (position < finalPosition) {
                                            if (position < initialPoint) { // Reality check: I think this is necessary due to floating point inaccuracies. - DDD
                                                position = initialPoint;
                                            }
                                            finalPosition = position;
                                            storeCollisionData(collisionData, direction, finalPosition, initialPoint, currentShape, potentialCollidingShapes[i], collisionInfo.contactVector);
                                        }
                                    } else {
                                        if (position > finalPosition) {
                                            if (position > initialPoint) { // Reality check: I think this is necessary due to floating point inaccuracies. - DDD
                                                position = initialPoint;
                                            }
                                            finalPosition = position;
                                            storeCollisionData(collisionData, direction, finalPosition, initialPoint, currentShape, potentialCollidingShapes[i], collisionInfo.contactVector);
                                        }
                                    }
                                }
                            }
                        }
                    }
                    return collisionData;
                };
            }()),
            
            checkSoftCollisions: function (resp) {
                var x = 0,
                    trigger = function (ent) {
                        return function (collision) {
                            ent.trigger('hit-by-' + collision.type, collision);
                        };
                    };

                for (x = 0; x < this.softEntitiesLive.length; x++) {
                    this.checkEntityForSoftCollisions(this.softEntitiesLive[x], this.getWorldEntities(), trigger(this.softEntitiesLive[x]));
                }
            },
            
            checkEntityForSoftCollisions: function (ent, entitiesByTypeLive, callback) {
                var otherEntity = null,
                    message = triggerMessage,
                    i   = 0,
                    j    = 0,
                    k    = 0,
                    y   = 0,
                    z   = 0,
                    checkAABBCollision = isAABBCollision,
                    softCollisions = null,
                    otherEntities  = null,
                    otherCollisionType = null,
                    shapes = null,
                    otherShapes = null,
                    collisionFound = false;

                message.x = 0;
                message.y = 0;

                for (i = 0; i < ent.collisionTypes.length; i++) {
                    softCollisions = ent.softCollisions[ent.collisionTypes[i]];
                    for (y = 0; y < softCollisions.length; y++) {
                        otherCollisionType = softCollisions[y];
                        otherEntities = entitiesByTypeLive[otherCollisionType];
                        if (otherEntities) {
                            for (z = 0; z < otherEntities.length; z++) {
                                collisionFound = false;
                                otherEntity = otherEntities[z];
                                if ((otherEntity !== ent) && (checkAABBCollision(ent.getAABB(ent.collisionTypes[i]), otherEntity.getAABB(otherCollisionType)))) {
                                    shapes = ent.getShapes(ent.collisionTypes[i]);
                                    otherShapes = otherEntity.getShapes(otherCollisionType);
                                    for (j = 0; j < shapes.length; j++) {
                                        for (k = 0; k < otherShapes.length; k++) {
                                            if (shapeCollision(shapes[j], otherShapes[k])) {
                                                //TML - We're only reporting the first shape we hit even though there may be multiple that we could be hitting.
                                                message.entity  = otherEntity;
                                                message.type    = otherCollisionType;
                                                message.myType  = ent.collisionTypes[i];
                                                message.shape   = otherShapes[k];
                                                message.hitType = 'soft';
                                                
                                                callback(message);
                                                
                                                collisionFound = true;
                                            }
                                            if (collisionFound) {
                                                break;
                                            }
                                        }
                                        if (collisionFound) {
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            
            destroy: function () {
                var key = '';
                
                this.allEntities.length = 0;
                this.allEntitiesLive.length = 0;
                this.softEntitiesLive.length = 0;
                this.solidEntitiesLive.length = 0;
                for (key in this.entitiesByType) {
                    if (this.entitiesByType.hasOwnProperty(key)) {
                        this.entitiesByType[key].length = 0;
                    }
                }
            }
        },
        
        publicMethods: {
            /**
             * This method returns an object containing world entities grouped by collision type.
             * 
             * @method getWorldEntities
             * @return {Object} A list of key/value pairs where the keys are collision types and the values are arrays of entities of that type.
             */
            getWorldEntities: function () {
                return this.entitiesByTypeLive;
            },
            
            /**
             * This method returns an entity representing the collision map of the world.
             * 
             * @method getWorldTerrain
             * @return {Entity} - An entity describing the collision map of the world. This entity typically includes a `CollisionTiles` component.
             */
            getWorldTerrain: function () {
                return this.terrain;
            },
            
            /**
             * This method returns a list of collision objects describing soft collisions between an entity and a list of other entities.
             * 
             * @method getEntityCollisions
             * @param entity {Entity} The entity to test against the world.
             * @param [entities] {Array} The list of entities to check against. By default this is all the entities in the world.
             * @return collisions {Array} This is a list of collision objects describing the soft collisions.
             */
            getEntityCollisions: function (entity, entities) {
                var collisions = [];
                
                this.checkEntityForSoftCollisions(entity, entities || this.entitiesByTypeLive, function (collision) {
                    var i    = '',
                        save = {};
                    
                    for (i in collision) {
                        if (collision.hasOwnProperty(i)) {
                            save[i] = collision[i];
                        }
                    }
                    collisions.push(save);
                });
                
                return collisions;
            }
        }
    });
}());
