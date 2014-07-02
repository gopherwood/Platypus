/**
# COMPONENT **collision-box2d**
This component creates and maintains a box2D body updating the entity position and orientation to match the body's behavior.

**NOTE** Box2D has it's own coordinate system that must be scaled to match the screen coordinate system. To simplify the definition, all linear distances should be entered in screen coordinates. These are automatically scaled to Box2D coordinates.
**NOTE** This is an in-progress component and doesn't not yet allow users to create all possible box2d body configurations.

## Dependencies
- [[handler-box2d]] - Requires handler-box2d to initialize the bodies and send 'handle-box2d' messages.
- [[Box2dWeb-2.1.a.3.min.js]] - Requires Box2dWeb found here: https://code.google.com/p/box2dweb/downloads/list.

## Messages

### Listens for:
- **connect-box2D** - Sent from handler-box2D, this message passes the world so that this component can create its body and add it to the world.
  - @param worldData (Object) - Contains worldData.world and worldData.drawScale. World is the Box2d world. Drawscale is the scale of the debugDrawCanvas and is used to map the box2d objects to the correct location in screenspace.
- **handle-box2d** - The Tick message from handler-box2d. This message is used to update the entity data to match the position and orientation of the box2d body.
  - @param worldData (Object) - The tick data from the scene.
- **begin-contact-[my collision type]-and-[other collision type]** - When a fixture in the body with 'my-collision-type' begins contact with a fixture of 'other-collision-type', this message is received and re-triggered as a new message according to the component definition. The collisionData is passed along in the new message.
  - @param collisionData (Object) - Information about the collision. Contains the following:
		contact (b2Contact) - The contact object from the collision.	
    	thisFixture (b2Fixture) - Extracted from the contact object. This is the fixture belonging to this entity.	
    	otherFixture (b2Fixture) - Extracted from the contact object. This is the fixture belonging to the other entity.	
- **end-contact-[my collision type]-and-[other collision type]** - When a fixture in the body with 'my-collision-type' ends contact with a fixture of 'other-collision-type', this message is received and re-triggered as a new message according to the component definition. The collisionData is passed along in the new message.
  - @param collisionData (Object) - Information about the collision. Contains the following:
		contact (b2Contact) - The contact object from the collision.	
    	thisFixture (b2Fixture) - Extracted from the contact object. This is the fixture belonging to this entity.	
    	otherFixture (b2Fixture) - Extracted from the contact object. This is the fixture belonging to the other entity.
- **pre-solve-[my collision type]-and-[other collision type]** - When a fixture in the body with 'my-collision-type' collides with a fixture of 'other-collision-type', this message is received in the pre-solve state of collision resolution and re-triggered as a new message according to the component definition. The collisionData is passed along in the new message.
  - @param collisionData (Object) - Information about the collision. Contains the following:
		contact (b2Contact) - The contact object from the collision.
    	oldManifold (b2Manifold) - The old contact manifold. 		
    	thisFixture (b2Fixture) - Extracted from the contact object. This is the fixture belonging to this entity.	
    	otherFixture (b2Fixture) - Extracted from the contact object. This is the fixture belonging to the other entity.
- **post-solve-[my collision type]-and-[other collision type]** - When a fixture in the body with 'my-collision-type' collides with a fixture of 'other-collision-type', this message is received in the post-solve state of collision resolution and re-triggered as a new message according to the component definition. The collisionData is passed along in the new message.
  - @param collisionData (Object) - Information about the collision. Contains the following:
		contact (b2Contact) - The contact object from the collision.
    	impulse (b2ContactImpulse) - The impulse of the contact.		
    	thisFixture (b2Fixture) - Extracted from the contact object. This is the fixture belonging to this entity.	
    	otherFixture (b2Fixture) - Extracted from the contact object. This is the fixture belonging to the other entity.

### Local Broadcasts:
- **[Message specified in definition]** - On receiving a 'begin-contact-', 'end-contact-', 'pre-solve-', or 'post-solve-' message, custom messages are triggered on the entity corresponding with the component definition.
  - @param collisionData (Object) - The nature of the information contained within depends on which contact message ('begin-contact-', 'end-contact-', 'pre-solve-', or 'post-solve-') this was redirected from. 
- **box2d-body-initialized** - Called when the box2d body has been created and added to the world.
  - @param body (Object) - The Box2d body object.
## JSON Definition
    {
        "type": "collision-box2d",
        
        "body": {
        //Required. The definition of the box2d body.
        	"type": "dynamic", //Optional. The of box2d body. This can be static, kinematic, or dynamic. Defaults to dynamic.
        	"angularDamping": 0.02, //A damping value on the angular velocity. Defaults to 0.
        	"defaultFixtureData": {
        	//Optional. A set of default parameters for all the fixtures on this body. These parameters are overriden by parameters on the individual fixture definitions. The defaultFixtureData CANNOT include shapes.
        		"density": 		1, //Optional. The density of the fixture. Defaults to 1.
        		"friction": 	0.5, //Optional. The friction of the surface of the fixture. Defaults to 0.5.
        		"restitution": 	0.2, //Optional. How bounce the ficture is. Defaults to 0.2.
        		"filter":	{
        		//Optional. The collision filter for the fixture. Allows you to define what fixtures this fixture will collide with. For specifics on the behavior of the parameters within, read the manual: http://www.box2d.org/manual.pdf
    				"categoryBits": 0x0001, //Optional. Defaults to 0x0001.
    				"groupIndex": 1,	//Optional. Defaults to 0.
        			"maskBits": 0xFFFF	//Optional. Defaults to 0xFFFF.
    			},
    			"isSensor": false, //Optional. Whether the fixture behaves as a sensor or not.
    			"userData": {
    			//Optional. This is where users can attach game specific data to the bodies.
    				"collisionType": "weirdness"
    				//Optional. collisionType is a reserved word in the userData for our implementation of box2d. This is used to define the 'type' of collision that occurs so that the correct collision response function can be fired. Defaults to the entity type.
    			}
        	},
        	"fixtureDefinitions": [
        	//Required. The definitions of the fixture(s) that make up the body. Other than the shape definition, the rest of the parameters here are explained above in the defaultFixtureData.
        		{
        			"density": 		1,
        			"friction": 	0.5,
        			"restitution": 	0.2,
        			"filter":	{
        				"categoryBits": 0x0001,
        				"groupIndex": 1,
            			"maskBits": 0xFFFF
        			},
        			"isSensor": false,
        			"userData": {
        				"collisionType": "kebab"
        			},
        			"shape": {
        			//Required. Defines the shape of the fixture. 
        				//You can define shapes as rectangles, circles or polygons. Below is how to define a rectangle.
            			"halfWidth": 15, //Required if you're defining a rectangle. This is half the width of the rectangle. 
            			"halfHeight": 15 //Required if you're defining a rectangle. This is half the height of the rectangle.
        				"x": 2, //Optional - offset of body's center. Both x and y default to 0.
        				"y": 8, //Optional - offset of body's center. Both x and y default to 0.
        				"angle": 1.57 //Optional - The angle of the orientation of the box
        			}
        		},{
        			"density": 		2,
        			"friction": 	2.5,
        			"restitution": 	0.1,
        			"shape": {
        				//You can define shapes as rectangles, circles or polygons. Below is how to define a polygon.
            			"points" : [
            				//Required if you are defining a polygon. A collection of points that make up the polygon. Points should be defined in clockwise order. Polygons cannot be concave and can have as few as 3 or as many as 8 points.
            				{"x": 15, "y": -15}, //Required if you are defining a polygon. Specifies one point that makes up the polygon.  
            				{"x": 25, "y": 0},
            				{"x": 15, "y": 15}
            			]
        			}
        		},{
        			"density": 		3,
        			"shape": {
        				//You can define shapes as rectangles, circles or polygons. Below is how to define a circle.
        				"radius": 10, //Required if you are defining a circle.
        				"x": 2, //Optional offset from body's center. Both x and y default to 0.
        				"y": 8 //Optional offset from body's center. Both x and y default to 0.
        			}
        		}
        	]
        },
        "resolution": {
        //Optional. A specification of collision type and collision state combinations and the resolution events to fire in each combination.
        	"default":{
        	//Optional. The parameter name specifies the collision type we are specifying resolutions for. 'default' maps to the entity type. The entity type is the default type for all fixtures on an entity. 
            	"beginContact": {
            	//Optional. The collision state when the messages will be fired. This can be 'beginContact', 'endContact', 'preSolve', or 'postSolve'.
            		"static-round-peg": "say-something-round", //Optional. The parameter name is the collision type of the fixture on the other body that we want to respond to. The value is the message to fire under these circumstances.
					"static-square-peg": "say-something-square"
            	}
            },
            "kebab":{
            //Optional. 'kebab' is an example of a user-defined collision type. 
            	"beginContact": {
            		"static-square-peg": "super-bounce",
            		"static-round-peg": "bounce"
            	}
            }
        },
        "joints": [
        //Optional. An array of joints definitions.
        	{
        		"type": "revolute", //Required. The type of box2d joint to create. Can be 'distance', 'friction', 'gear', 'line', 'mouse', 'prismatic', 'pulley', 'revolute', or 'weld'. Only 'revolute', 'prismatic', and 'distance' are currently implemented.
        		"object": {
        			//Required. The definition of the object we are joining to.
        			"type": "static-round-peg", //Required. The type of object.
        			"properties": {
        				//Optional. The object properties.
        			},
        			"offset": {"x": 25, "y":0} //The offset of the new object from the position of this entity. Defaults to 0,0.
        		}, 
        		"localAnchorA": {"x": 25, "y": 0}, //Optional. The position of the localAnchor on this body. Defaults to 0,0.
        		"localAnchorB": {"x": 0, "y": 0}, //Optional. The position of the localAnchor on the body we are joining to. Defaults to 0,0.
        		"referenceAngle": 0, //Optional. The other body angle minus this body's angle in the reference state. Defaults to 0.
        		"collideConnected": false, //Optional. whether the joined bodies collide. Defaults to false.
        		"enableLimit": false, //Optional. Whether or not to limit the angle the bodies can rotate. Defaults to false.
        		"lowerAngle": 0, //Optional. The lower angle for the joint limit in radians.
        		"upperAngle": 0, //Optional. The upper angle for the joint limit in radians.
        		"enableMotor": false, //Optional. Whether or not the joint should behave as a motor. Defaults to false.
        		"maxMotorTorque": 0, //Optional. The max amount of torque the motor will use to achieve the desired speed.
        		"motorSpeed": 0, //Optional. The desired motor speed in radians per second.
        		"userData": {
        		//Optional. This is where users can attach game specific data to the joint.
        			"color": "pink"
        		}
        	},
        	{
        		"type": "prismatic", //Required. The type of box2d joint to create. Can be 'distance', 'friction', 'gear', 'line', 'mouse', 'prismatic', 'pulley', 'revolute', or 'weld'. Only 'revolute', 'prismatic', and 'distance' are currently implemented.
        		"object": {
        			//Required. The definition of the object we are joining to.
        			"type": "static-round-peg", //Required. The type of object.
        			"properties": {
        				//Optional. The object properties.
        			},
        			"offset": {"x": 25, "y":0} //The offset of the new object from the position of this entity. Defaults to 0,0.
        		}, 
        		"localAnchorA": {"x": 25, "y": 0}, //Optional. The position of the localAnchor on this body. Defaults to 0,0.
        		"localAnchorB": {"x": 0, "y": 0}, //Optional. The position of the localAnchor on the body we are joining to. Defaults to 0,0.
        		"localAxisA": {"x": 0, "y": 1}, //Optional. The axis on which the join moves. Defaults to 0,0.
        		"referenceAngle": 0, //Optional. The other body angle minus this body's angle in the reference state. Defaults to 0.
        		"collideConnected": false, //Optional. whether the joined bodies collide. Defaults to false.
        		"enableLimit": false, //Optional. Whether or not to limit the angle the bodies can rotate. Defaults to false.
        		"lowerTranslation": 0, //Optional. The lower translation for the joint limit in meters.
        		"upperTranslation": 0, //Optional. The upper translation for the joint limit in meters.
        		"enableMotor": false, //Optional. Whether or not the joint should behave as a motor. Defaults to false.
        		"maxMotorForce": 0, //Optional. The max amount of force the motor will use to achieve the desired speed.
        		"motorSpeed": 0, //Optional. The desired motor speed in radians per second.
        		"userData": {
        		//Optional. This is where users can attach game specific data to the joint.
        			"color": "pink"
        		}
        	},
        	{
        		"type": "distance", //Required. The type of box2d joint to create. Can be 'distance', 'friction', 'gear', 'line', 'mouse', 'prismatic', 'pulley', 'revolute', or 'weld'. Only 'revolute', 'prismatic', and 'distance' are currently implemented.
        		"object": {
        			//Required. The definition of the object we are joining to.
        			"type": "static-round-peg", //Required. The type of object.
        			"properties": {
        				//Optional. The object properties.
        			},
        			"offset": {"x": 25, "y":0} //The offset of the new object from the position of this entity. Defaults to 0,0.
        		}, 
        		"localAnchorA": {"x": 25, "y": 0}, //Optional. The position of the localAnchor on this body. Defaults to 0,0.
        		"localAnchorB": {"x": 0, "y": 0}, //Optional. The position of the localAnchor on the body we are joining to. Defaults to 0,0.
        		"collideConnected": false, //Optional. whether the joined bodies collide. Defaults to false.
        		"length": 10, //Optional. The natrual length between the anchor points. Defaults to 0.
        		"dampingRatio": .25, //Optional. The damping ratio of the joint. 0 = no damping, 1 = critical damping. Defaults to 0.5.
        		"frequencyHz": 30, //Optional. The mass-spring-damper frequency in Hertz. Defaults to 10.
        		"userData": {
        		//Optional. This is where users can attach game specific data to the joint.
        			"color": "pink"
        		}
        	}	
        ]

    }
    
Requires: ["../Box2dWeb-2.1.a.3.min.js"]
*/
(function(){
	var b2Vec2 				= Box2D.Common.Math.b2Vec2,       
		b2BodyDef 			= Box2D.Dynamics.b2BodyDef,       
		b2Body 				= Box2D.Dynamics.b2Body,       
		b2FixtureDef 		= Box2D.Dynamics.b2FixtureDef,       
		b2Fixture 			= Box2D.Dynamics.b2Fixture,       
		b2World 			= Box2D.Dynamics.b2World,       
		b2MassData 			= Box2D.Collision.Shapes.b2MassData,       
		b2PolygonShape 		= Box2D.Collision.Shapes.b2PolygonShape,       
		b2CircleShape 		= Box2D.Collision.Shapes.b2CircleShape,       
		b2DebugDraw 		= Box2D.Dynamics.b2DebugDraw,
		b2FilterData		= Box2D.Dynamics.b2FilterData,
		b2RevoluteJointDef	= Box2D.Dynamics.Joints.b2RevoluteJointDef,
		b2PrismaticJointDef	= Box2D.Dynamics.Joints.b2PrismaticJointDef,
		b2DistanceJointDef	= Box2D.Dynamics.Joints.b2DistanceJointDef,
		defaultDensity  	= 1,
		defaultFriction 	= 0.5,
		defaultRestitution 	= 0.2;
	
	var entityBroadcast = function(event){
		if(typeof event === 'string'){
			return function(value){
				this.owner.triggerEvent(event, value);
			};
		} else if(event.length){
			return function(value){
				this.owner.trigger(event, value);
			};
		}
	};
	return platformer.createComponentClass({
		id: 'collision-box2d', 
		
		constructor: function(definition){
			this.def = definition;
			this.owner.body = null;
			this.world = null;
			this.drawScale = 1;
			this.owner.orientation = this.owner.orientation || 0;
			this.connectedEntities = [];
			var resolutionCalls = null;
			var collisionType = null;
			
			var resolution = this.owner.resolution || definition.resolution || null;
			
			if(resolution) {
				for (var x in resolution) {
					collisionType = x;
					if (collisionType == 'default') {
						collisionType = this.owner.type;
					}
					for (var y in resolution[x]) {
						if(y == 'beginContact') {
							resolutionCalls = resolution[x][y];
							for (var z in resolutionCalls) {
								this.addEventListener('begin-contact-' + collisionType + '-and-' + z, entityBroadcast(resolutionCalls[z]));
							}
						}
						if(y == 'endContact') {
							resolutionCalls = resolution[x][y];
							for (var z in resolutionCalls) {
								this.addEventListener('end-contact-' + collisionType + '-and-' + z, entityBroadcast(resolutionCalls[z]));
							}
						}
						if(y == 'preSolve') {
							resolutionCalls = resolution[x][y];
							for (var z in resolutionCalls) {
								this.addEventListener('pre-solve-' + collisionType + '-and-' + z, entityBroadcast(resolutionCalls[z]));
							}
						}
						if(y == 'postSolve') {
							resolutionCalls = resolution[x][y];
							for (var z in resolutionCalls) {
								this.addEventListener('post-solve-' + collisionType + '-and-' + z, entityBroadcast(resolutionCalls[z]));
							}
						}
					}
				}	
			}
		},

		events: {// These are messages that this component listens for
			
			"connect-box2D": function(worldData) {
				this.world = worldData.world;
				this.drawScale = worldData.drawScale;
				this.owner.body = null;
				var bodyDef = new b2BodyDef();
				var fixDef  = new b2FixtureDef();
				var entity = null;
				var vectors = null;
				var vector = null;
				var filter = new b2FilterData();
				var joints = [];
				var jointData = null;
				var specificFixDefs = null;				
				
				if(this.def.body) {
					//bodyDef = new b2BodyDef;
					bodyDef.userData = {};
					bodyDef.userData.entity = this.owner;
					if (this.def.body.type == 'static') {
						bodyDef.type = b2Body.b2_staticBody;
					} else if (this.def.body.type == 'kinematic') {
						bodyDef.type = b2Body.b2_kinematicBody;
					} else {
						//default to dynamic
						bodyDef.type = b2Body.b2_dynamicBody;
					}
					
					if (typeof this.def.body.active !== 'undefined') {
						bodyDef.active = this.def.body.active;
					}
					if (typeof this.def.body.allowSleep !== 'undefined') {
						bodyDef.allowSleep = this.def.body.allowSleep;
					}
					if (typeof this.def.body.angle !== 'undefined') {
						bodyDef.angle = this.def.body.angle;
					}
					if (typeof this.def.body.angularDamping !== 'undefined') {
						bodyDef.angularDamping = this.def.body.angularDamping;
					}
					if (typeof this.def.body.angularVelocity !== 'undefined') {
						bodyDef.angularVelocity = this.def.body.angularVelocity;
					}
					if (typeof this.def.body.awake !== 'undefined') {
						bodyDef.awake = this.def.body.awake;
					}
					if (typeof this.def.body.bullet !== 'undefined') {
						bodyDef.bullet = this.def.body.bullet;
					}
					if (typeof this.def.body.fixedRotation !== 'undefined') {
						bodyDef.fixedRotation = this.def.body.fixedRotation;
					}
					if (typeof this.def.body.inertiaScale !== 'undefined') {
						bodyDef.inertiaScale = this.def.body.inertiaScale;
					}
					if (typeof this.def.body.linearDamping !== 'undefined') {
						bodyDef.linearDamping = this.def.body.linearDamping;
					}
					
					//TODO: Positions from TILED probably need to be scaled....
					if (this.def.body.position) {
						bodyDef.position.x = (this.owner.x || this.def.body.position.x || 0) / this.drawScale;
						bodyDef.position.y = (this.owner.y || this.def.body.position.y || 0) / this.drawScale;
					} else {
						bodyDef.position.x = (this.owner.x || 0) / this.drawScale;
						bodyDef.position.y = (this.owner.y || 0) / this.drawScale;
					}
					this.owner.x = bodyDef.position.x * this.drawScale;
					this.owner.y = bodyDef.position.y * this.drawScale;
					this.owner.body = this.world.CreateBody(bodyDef);
					
					if(!this.owner.body){
						console.warn('Unable to create Box2D Body for "' + this.owner.type + '".');
						return;
					}
					
					//setUser
					
					if (this.def.body.defaultFixtureData) {
						defaultFixData = this.def.body.defaultFixtureData;
					} else {
						defaultFixData = {};
					}
					
					specificFixDefs = this.def.body.fixtureDefinitions; 
					if (!specificFixDefs && this.owner.polygon) {
						//If there are no fixture definitions, but the owner does have a polygon, we process that and use the generic fixture definition data.
						specificFixDefs = [];
						this.processPolygon(specificFixDefs, this.owner.polygon);
					} 
					
					for (var x = 0; x < specificFixDefs.length; x++) {
						def = specificFixDefs[x];
						
						if (typeof def.density !== 'undefined') {
							fixDef.density = def.density;
						} else if (defaultFixData.density !== 'undefined') {
							fixDef.density = defaultFixData.density;
						} else {
							fixDef.density = defaultDensity;
						}			
						
						if (typeof def.friction !== 'undefined') {
							fixDef.friction = def.friction;
						} else if (typeof defaultFixData.friction !== 'undefined') {
							fixDef.friction = defaultFixData.friction;
						} else {
							fixDef.friction = defaultFriction;
						}
						
						if (typeof def.restitution !== 'undefined') {
							fixDef.restitution = def.restitution;
						} else if (typeof defaultFixData.restitution !== 'undefined') {
							fixDef.restitution = defaultFixData.restitution;
						} else {
							fixDef.restitution = defaultRestitution;
						}
						
						if(def.filter && typeof def.filter.categoryBits !== 'undefined') {
							filter.categoryBits = def.filter.categoryBits;
						} else if (defaultFixData.filter && typeof defaultFixData.filter.categoryBits !== 'undefined') {
							filter.categoryBits = defaultFixData.filter.categoryBits;
						} else {
							filter.categoryBits = 0x0001;
						}
						
						if(def.filter && typeof def.filter.groupIndex !== 'undefined') {
							filter.groupIndex = def.filter.groupIndex;
						} else if (defaultFixData.filter && typeof defaultFixData.filter.groupIndex !== 'undefined') {
							filter.groupIndex = defaultFixData.filter.groupIndex;
						} else {
							filter.groupIndex = 0;
						}
						
						if(def.filter && typeof def.filter.maskBits !== 'undefined') {
							filter.maskBits = def.filter.maskBits;
						} else if (defaultFixData.filter && typeof defaultFixData.filter.maskBits !== 'undefined') {
							filter.maskBits = defaultFixData.filter.maskBits;
						} else {
							filter.maskBits = 0xFFFF;
						}
						fixDef.filter = filter;
						
						if (typeof def.isSensor !== 'undefined') {
							fixDef.isSensor = def.isSensor;
						} else if (typeof defaultFixData.isSensor !== 'undefined') {
							fixDef.isSensor = defaultFixData.isSensor;
						} else {
							fixDef.isSensor = false;
						}
						
						fixDef.userData = {};
						fixDef.userData.collisionType = this.owner.type;
						if (typeof def.userData !== 'undefined') {
							for (var t in def.userData) {
								fixDef.userData[t] = def.userData[t];
							}
							//fixDef.userData = def.userData;
						} else if (typeof defaultFixData.userData !== 'undefined') {
							for (var t in defaultFixData.userData) {
								fixDef.userData[t] = defaultFixData.userData[t];
							}
							//fixDef.userData = defaultFixData.userData;
						}
						
						if(def.shape.radius) {
							fixDef.shape = new b2CircleShape(def.shape.radius / this.drawScale);
							if(def.shape.x || def.shape.y){
								fixDef.shape.SetLocalPosition(new b2Vec2((def.shape.x || 0) / this.drawScale, (def.shape.y || 0) / this.drawScale));
							}
						} else if (def.shape.points) {
			                vectors = [];
							for (var c = 0; c < def.shape.points.length; c++) {
								vector = new b2Vec2();
								vector.Set(def.shape.points[c].x / this.drawScale, def.shape.points[c].y / this.drawScale);
								vectors[c] = vector;
							}
							fixDef.shape = new b2PolygonShape();
							if (vectors.length == 2) {
								//If we only have two points, it's an edge, not a polygon.
								fixDef.shape.SetAsEdge(vectors[0], vectors[1]);
							} else {
								fixDef.shape.SetAsArray(vectors, vectors.length);
							}
						} else if (def.shape.halfWidth && def.shape.halfHeight) {
							fixDef.shape = new b2PolygonShape();
							fixDef.shape.SetAsOrientedBox(def.shape.halfWidth / this.drawScale, def.shape.halfHeight / this.drawScale, new b2Vec2((def.shape.x || 0) / this.drawScale, (def.shape.y || 0) / this.drawScale), (def.shape.angle || 0));
						}
						this.owner.body.CreateFixture(fixDef);
					}
				}
				
				
				var entDef = null;
				var entityProperties = {};
				if (this.def.connectedEntities) {
					
					for (var x = 0; x < this.def.connectedEntities.length; x++) {
						entDef = this.def.connectedEntities[x];
						
						entityProperties = {};
						for(var x in entDef.properties) {
							entityProperties[x] = entDef.properties[x];
						}
						if (entDef.offset) {
							entityProperties.x = this.owner.x + entDef.offset.x;
							entityProperties.y = this.owner.y + entDef.offset.y;
						}
						if (entDef.joinId) {
							entityProperties.joinId = entDef.joinId;
						}
						entity = new platformer.Entity(platformer.game.settings.entities[entDef.type], {
							properties: entityProperties
						});
						this.owner.triggerEvent('entity-created', entity);
						this.owner.parent.addEntity(entity);
						this.connectedEntities.push(entity);
					}
				}
				
				if (this.owner.joints) {
					joints = this.owner.joints;
				} else if (this.def.joints) {
					joints = this.def.joints;
				}
				
				for(var x = 0; x < joints.length; x++) {
					jointData = joints[x];

					if (jointData.type == 'distance') {
						this.createDistanceJoint(jointData);
					} else if (jointData.type == 'friction') {
						console.warn(jointData.type + ' joints are not implemented at this point');
					} else if (jointData.type == 'gear') {
						console.warn(jointData.type + ' joints are not implemented at this point');
					} else if (jointData.type == 'line') {
						console.warn(jointData.type + ' joints are not implemented at this point');
					} else if (jointData.type == 'mouse') {
						console.warn(jointData.type + ' joints are not implemented at this point');
					} else if (jointData.type == 'prismatic') {
						this.createPrismaticJoint(jointData);
					} else if (jointData.type == 'pulley') {
						console.warn(jointData.type + ' joints are not implemented at this point');
					} else if (jointData.type == 'revolute') {
						this.createRevoluteJoint(jointData);
					} else if (jointData.type == 'weld') {
						console.warn(jointData.type + ' joints are not implemented at this point');
					}
				}
				
				this.owner.triggerEvent('box2d-body-initialized', this.owner.body);
			},
			"handle-box2d-pre-step": function(resp) {
				this.matchBodyToEntity();
			},
			"handle-box2d": function(resp) {
				this.matchEntityToBody();
			},
			"add-collision-listener": function(specification) {
				/*
				 * NOT TESTED AND I'M NOT SURE IT'S WORTH KEEPING.
				 * 
				 * TODO: Document this!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
					specification.when
					specification.thisType
					specification.otherType
					specification.message
				*/
				var spec = specification;
				var thisType = spec.thisType || this.owner.type;
				
				if(spec.when == 'beginContact') {
					this.addEventListener('begin-contact-' + thisType + '-and-' + spec.otherType, entityBroadcast(spec.message));
				}
				if(spec.when == 'endContact') {
					this.addEventListener('end-contact-' + thisType + '-and-' + spec.otherType, entityBroadcast(spec.message));
				}
				if(spec.when == 'preSolve') {
					this.addEventListener('pre-solve-' + thisType + '-and-' + spec.otherType, entityBroadcast(spec.message));
				}
				if(spec.when == 'postSolve') {
					this.addEventListener('post-solve-' + thisType + '-and-' + spec.otherType, entityBroadcast(spec.message));
				}
			}
		},
		
		methods: {// These are methods that are called by this component.
			destroy: function() {
				//this.owner.body.SetUserData(null);
				this.owner.parent.triggerEvent('body-removed', this.owner.body);
				this.owner.body = null;
				this.world = null;
				this.def = null;
				for(var i = 0; i < this.connectedEntities.length; i++){
					this.owner.parent.removeEntity(this.connectedEntities[i]);
				}
				this.connectedEntities.length = 0;
			},
            findConnectedByJoinId: function(joinId) {
				var ent = null;
				for (var x = 0; x < this.connectedEntities.length; x++) {
					if (this.connectedEntities[x].joinId == joinId) {
						ent = this.connectedEntities[x];
						break;
					}
				}
				return ent;
			},
			processPolygon: function(fixDefs, points) {
				//Creating Edges
				for (var x = 0; x < points.length; x++) {
					fixDefs[x] = {"shape": {"points": [ ]}};
					if (x == points.length - 1){
						fixDefs[x].shape.points[0] = {"x": points[x].x, 		"y": points[x].y};
						fixDefs[x].shape.points[1] = {"x": points[0].x, 		"y": points[0].y};
					} else {
						fixDefs[x].shape.points[0] = {"x": points[x].x, 		"y": points[x].y};
						fixDefs[x].shape.points[1] = {"x": points[x + 1].x, 	"y": points[x + 1].y};
					}
				}
			},			
			createRevoluteJoint: function(jointData) {
				var jointDef = null;
				
				var anchorA = new b2Vec2(0,0);
				var anchorB = new b2Vec2(0,0);
				var offset = null;
				var entityProperties = null;
				var entityA = null;
				var entityB = null;
				var joint = null;
				
				if (jointData.join && (jointData.join.A || jointData.join.B)) {
					if (jointData.join.A) {
						entityA = this.findConnectedByJoinId(jointData.join.A);
						if (!entityA) {
							console.warn('join.A: Invalid joinId');
						}
					} else {
						entityA = this.owner;
					}
					
					if (jointData.join.B) {
						entityB = this.findConnectedByJoinId(jointData.join.B);
						if (!entityB) {
							console.warn('join.B: Invalid joinId');
						}
					} else {
						entityB = this.owner;
					}
					
				} else {
					console.warn('Joint lacks appropriate join configurations. Does not specify entities to join');
				}
				
				
				jointDef = new b2RevoluteJointDef();
				
				jointDef.bodyA = entityA.body;
				jointDef.bodyB = entityB.body;
				
				if (jointData.localAnchorA) {
					anchorA.Set(jointData.localAnchorA.x / this.drawScale, jointData.localAnchorA.y / this.drawScale);
					jointDef.localAnchorA = anchorA;
				}
				if (jointData.localAnchorB) {
					anchorB.Set(jointData.localAnchorB.x / this.drawScale, jointData.localAnchorB.y / this.drawScale);
					jointDef.localAnchorB = anchorB;
				}
				
				if (typeof jointData.referenceAngle !== "undefined") {
					jointDef.referenceAngle = jointData.referenceAngle;
				}
				
				if (jointData.collideConnected) {
					jointDef.collideConnected = true;
				}
				
				if (jointData.enableLimit) {
					jointDef.enableLimit = true;
				}
				
				if (typeof jointData.lowerAngle !== "undefined") {
					jointDef.lowerAngle = jointData.lowerAngle;
				}
				
				if (typeof jointData.upperAngle !== "undefined") {
					jointDef.upperAngle = jointData.upperAngle;
				}
				
				if (jointData.enableMotor) {
					jointDef.enableMotor = true;
				}
				
				if (typeof jointData.maxMotorTorque !== "undefined") {
					jointDef.maxMotorTorque = jointData.maxMotorTorque;
				}
				
				if (typeof jointData.motorSpeed !== "undefined") {
					jointDef.motorSpeed = jointData.motorSpeed;
				}
				
				jointDef.userData = {};
				if (jointData.userData) {
					for (var t in jointData.userData) {
						jointDef.userData[t] = jointData.userData[t];
					}
				}
				
				joint = this.world.CreateJoint(jointDef);
				
				entityA.triggerEvent('joint-attached', joint);
				entityB.triggerEvent('joint-attached', joint);
				
				
			},
			createPrismaticJoint: function(jointData) {
				var jointDef = null;
				var entityA = null;
				var entityB = null;
				var anchorA = new b2Vec2(0,0);
				var anchorB = new b2Vec2(0,0);
				var localAxisA = new b2Vec2(0,0);
				var offset = null;
				var entityProperties = null;
				
				var joint = null;
				
				if (jointData.join && (jointData.join.A || jointData.join.B)) {
					if (jointData.join.A) {
						entityA = this.findConnectedByJoinId(jointData.join.A);
						if (!entityA) {
							console.warn('join.A: Invalid joinId');
						}
					} else {
						entityA = this.owner;
					}
					
					if (jointData.join.B) {
						entityB = this.findConnectedByJoinId(jointData.join.B);
						if (!entityB) {
							console.warn('join.B: Invalid joinId');
						}
					} else {
						entityB = this.owner;
					}
					
				} else {
					console.warn('Joint lacks appropriate join configurations. Does not specify entities to join');
				}
				
				
				jointDef = new b2PrismaticJointDef();
				
				jointDef.bodyA = entityA.body;
				jointDef.bodyB = entityB.body;
				
				if (jointData.collideConnected) {
					jointDef.collideConnected = true;
				}
				
				if (jointData.localAnchorA) {
					anchorA.Set(jointData.localAnchorA.x / this.drawScale, jointData.localAnchorA.y / this.drawScale);
					jointDef.localAnchorA = anchorA;
				}
				if (jointData.localAnchorB) {
					anchorB.Set(jointData.localAnchorB.x / this.drawScale, jointData.localAnchorB.y / this.drawScale);
					jointDef.localAnchorB = anchorB;
				}
				
				if (jointData.localAxisA) {
					localAxisA.Set(jointData.localAxisA.x, jointData.localAxisA.y);
					jointDef.localAxisA = localAxisA;
				}
				
				if (typeof jointData.referenceAngle !== "undefined") {
					jointDef.referenceAngle = jointData.referenceAngle;
				}
				
				if (jointData.enableLimit) {
					jointDef.enableLimit = true;
				}
				
				if (typeof jointData.lowerTranslation !== "undefined") {
					jointDef.lowerTranslation = jointData.lowerTranslation / this.drawScale;
				}
				
				if (typeof jointData.upperTranslation !== "undefined") {
					jointDef.upperTranslation = jointData.upperTranslation / this.drawScale;
				}
				
				if (jointData.enableMotor) {
					jointDef.enableMotor = true;
				}
				
				if (typeof jointData.maxMotorForce !== "undefined") {
					jointDef.maxMotorForce = jointData.maxMotorForce; //TODO: Should this be scaled by the drawScale????
				}
				
				if (typeof jointData.motorSpeed !== "undefined") {
					jointDef.motorSpeed = jointData.motorSpeed; //TODO: Should this be scaled by the drawScale????
				}
				
				jointDef.userData = {};
				if (jointData.userData) {
					for (var t in jointData.userData) {
						jointDef.userData[t] = jointData.userData[t];
					}
				}
				
				joint = this.world.CreateJoint(jointDef);
				
				entityA.triggerEvent('joint-attached', joint);
				entityB.triggerEvent('joint-attached', joint);
				
			},
			createDistanceJoint: function(jointData) {
				var jointDef = null;
				var anchorA = new b2Vec2(0,0);
				var anchorB = new b2Vec2(0,0);
				var offset = null;
				var entityProperties = null;
				var entityA = null;
				var entityB = null;
				var joint = null;
				
				if (jointData.join && (jointData.join.A || jointData.join.B)) {
					if (jointData.join.A) {
						entityA = this.findConnectedByJoinId(jointData.join.A);
						if (!entityA) {
							console.warn('join.A: Invalid joinId');
						}
					} else {
						entityA = this.owner;
					}
					
					if (jointData.join.B) {
						entityB = this.findConnectedByJoinId(jointData.join.B);
						if (!entityB) {
							console.warn('join.B: Invalid joinId');
						}
					} else {
						entityB = this.owner;
					}
					
				} else {
					console.warn('Joint lacks appropriate join configurations. Does not specify entities to join');
				}
				
				jointDef = new b2DistanceJointDef();
				
				jointDef.bodyA = entityA.body;
				jointDef.bodyB = entityB.body;
				
				if (jointData.collideConnected) {
					jointDef.collideConnected = true;
				}
				
				if (jointData.localAnchorA) {
					anchorA.Set(jointData.localAnchorA.x / this.drawScale, jointData.localAnchorA.y / this.drawScale);
					jointDef.localAnchorA = anchorA;
				}
				if (jointData.localAnchorB) {
					anchorB.Set(jointData.localAnchorB.x / this.drawScale, jointData.localAnchorB.y / this.drawScale);
					jointDef.localAnchorB = anchorB;
				}
				
				jointDef.length = jointData.length || 0;
				
				if (typeof jointData.dampingRatio != 'undefined') {
					jointDef.dampingRatio = jointData.dampingRatio;
				} else {
					jointData.dampingRatio = 0.5;
				}
				
				if (typeof jointData.frequencyHz != 'undefined') {
					jointDef.frequencyHz = jointData.frequencyHz;
				} else {
					jointDef.frequencyHz = 10;
				}
				
				jointDef.userData = {};
				if (jointData.userData) {
					for (var t in jointData.userData) {
						jointDef.userData[t] = jointData.userData[t];
					}
				}
				
				joint = this.world.CreateJoint(jointDef);
				
				entityA.triggerEvent('joint-attached', joint);
				entityB.triggerEvent('joint-attached', joint);
			}
		},
		
		publicMethods: {// These are methods that are available on the entity.
			matchEntityToBody: function(position, orientation){ // Updates entity's position to reflect the Box2D position
				var pos = position || this.owner.body.GetPosition();
				var angle = orientation || this.owner.body.GetAngle();
				this.owner.x = pos.x * this.drawScale;
				this.owner.y = pos.y * this.drawScale;
				this.owner.orientation = angle;
			},
			
			matchBodyToEntity: function(){
				var bodyPos = this.owner.body.GetPosition();
				var pos = null;
				if (this.owner.x / this.drawScale != bodyPos.x || this.owner.y / this.drawScale != bodyPos.y || this.owner.orientation != this.owner.body.GetAngle()) {
					pos = new b2Vec2(this.owner.x / this.drawScale, this.owner.y / this.drawScale);
					this.owner.body.SetPosition(pos);
					this.owner.body.SetAngle(this.owner.orientation);
				}
			}
		}
	});
})();
