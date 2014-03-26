/**
# COMPONENT **handler-box2d**
This component is designed to reside on a layer and creates and maintains the box2d world and sends ticks to objects that use box2d bodies. It also sets up the box2d contact listeners. This is generally used in conjunction with entities containing the collision-box2d component.

**NOTE** This is an in-progress component and doesn't not yet allow users to create all possible box2d configurations.

## Dependencies
- [[Box2dWeb-2.1.a.3.min.js]] - Requires Box2dWeb found here: https://code.google.com/p/box2dweb/downloads/list.

## Messages

### Listens for:
- **child-entity-added** - Listens for the entity-added message to capture references to objects with the 'connect-box2d' event to initialize and send 'handle-box2d' messages to later.
  - @param entity (Object) - The object recently added.
- **tick** - The tick event from the scene. Used to run the box2d World step and to update the entities with box2d bodies in them. 
  - @param resp (Object) - Contains delta, the time that has passed since the last tick.
- **camera-update** - Updated information from the camera used to update the debug camera state.
  - @param cameraInfo (Object) - Information about the camera state.

### Local Broadcasts:
- **local-message-label** - List all messages that are triggered by this component on this entity here.
  - @param message-object-property (type) - under each message label, list message object properties that are optional or required.

### Peer Broadcasts:
- **handle-box2d** - Passing along the tick from the scene to the entities with box2d bodies.
	- @param resp (Object) - The tick from the scene.
- **connect-box2d** - Fired when a new entity with the connect-box2d event is added. This allows it to initialize and add it's body to the world.
	- @param worldData (Object) - Contains worldData.world and worldData.drawScale. World is the Box2d world. Drawscale is the scale of the debugDrawCanvas and is used to map the box2d objects to the correct location in screenspace.
- **begin-contact-[collision type A]-and-[collision type B]** - When a fixture with 'collision type A' begins contact with a fixture of 'collision type B' is fired. The message includes data about the contact.
	- @param collisionData (Object) - Information about the contact. Contains the following:
		contact (b2Contact) - The contact object from the collision.	
    	thisFixture (b2Fixture) - Extracted from the contact object. The fixture belonging to the entity that we're triggering the message on.	
    	otherFixture (b2Fixture) - Extracted from the contact object. The other fixture in the collision.	
- **end-contact-[collision type A]-and-[collision type B]** - When a fixture with 'collision type A' ends contact with a fixture of 'collision type B' is fired. The message includes data about the contact.
	- @param collisionData (Object) - Information about the contact. Contains the following:
		contact (b2Contact) - The contact object from the collision.	
    	thisFixture (b2Fixture) - Extracted from the contact object. The fixture belonging to the entity that we're triggering the message on.	
    	otherFixture (b2Fixture) - Extracted from the contact object. The other fixture in the collision.
- **pre-solve-[collision type A]-and-[collision type B]** - When a fixture in the body with 'collision type A' collides with a fixture of 'collision type B', this message is fired in the pre-solve state of collision resolution. The message includes data about the contact.
	- @param collisionData (Object) - Information about the contact. Contains the following:
		contact (b2Contact) - The contact object from the collision.
    	oldManifold (b2Manifold) - The old contact manifold. 		
    	thisFixture (b2Fixture) - Extracted from the contact object. The fixture belonging to the entity that we're triggering the message on.	
    	otherFixture (b2Fixture) - Extracted from the contact object. The other fixture in the collision.
- **post-solve-[collision type A]-and-[collision type B]** - When a fixture in the body with 'collision type A' collides with a fixture of 'collision type B', this message is received in the post-solve state of collision resolution. The message includes data about the contact.
	- @param collisionData (Object) - Information about the contact. Contains the following:
		contact (b2Contact) - The contact object from the collision.
    	impulse (b2ContactImpulse) - The impulse of the contact.		
    	thisFixture (b2Fixture) - Extracted from the contact object. The fixture belonging to the entity that we're triggering the message on.	
    	otherFixture (b2Fixture) - Extracted from the contact object. The other fixture in the collision.

## JSON Definition
    {
      "type": "name-of-component"
      // List all additional parameters and their possible values here.
    }
*/
(function(){
	var b2Vec2 			= Box2D.Common.Math.b2Vec2,       
		b2BodyDef 		= Box2D.Dynamics.b2BodyDef,       
		b2Body 			= Box2D.Dynamics.b2Body,       
		b2FixtureDef 	= Box2D.Dynamics.b2FixtureDef,       
		b2Fixture 		= Box2D.Dynamics.b2Fixture,       
		b2World 		= Box2D.Dynamics.b2World,       
		b2MassData 		= Box2D.Collision.Shapes.b2MassData,       
		b2PolygonShape 	= Box2D.Collision.Shapes.b2PolygonShape,       
		b2CircleShape 	= Box2D.Collision.Shapes.b2CircleShape,       
		b2DebugDraw 	= Box2D.Dynamics.b2DebugDraw;
	var collisionData = {
		entity: null,
		contact: null,
		thisFixture: null,
		otherFixture: null,
		oldManifold: null,
		impulse: null
    };
	
	return platformer.createComponentClass({	
		id: 'handler-box2d',
		
		constructor: function(definition){
			var gravity = definition.gravity || {x: 0, y: 10};
			var allowSleep = (typeof definition.allowSleep !== 'undefined') ? definition.allowSleep : true;
			this.simulationFrequency = 	definition.simulationFrequency 	|| 1 / platformer.game.settings.global.fps || 1/ 60;
			this.velocityIterations = 	definition.velocityIterations 	|| 10;
			this.positionIterations = 	definition.positionIterations 	|| 10;
			this.entities = []; //All the entities that have a body in the simulation.
			
			var defFlags = 0;
			if (definition.debugCanvas && definition.debugCanvas.flags) {
				if (definition.debugCanvas.flags.e_aabbBit) {
					defFlags |= b2DebugDraw.e_aabbBit;
				}
				if (definition.debugCanvas.flags.e_centerOfMassBit) {
					defFlags |= b2DebugDraw.e_centerOfMassBit;
				}
				if (definition.debugCanvas.flags.e_centerOfMassBit) {
					defFlags |= b2DebugDraw.e_controllerBit;
				}
				if (definition.debugCanvas.flags.e_jointBit) {
					defFlags |= b2DebugDraw.e_jointBit;
				}
				if (definition.debugCanvas.flags.e_pairBit) {
					defFlags |= b2DebugDraw.e_pairBit;
				}
				if (definition.debugCanvas.flags.e_shapeBit) {
					defFlags |= b2DebugDraw.e_shapeBit;
				}
			}
			
			if (typeof definition.debugCanvas === 'undefined') {
				definition.debugCanvas = {};
			}
			var debugCanvasSettings = {
					id: 			definition.debugCanvas.id					|| 'box2D-debug-canvas',
					drawScale: 		definition.debugCanvas.drawScale			|| 30.0,
					fillAlpha: 		(typeof definition.debugCanvas.fillAlpha !== 'undefined') ? definition.debugCanvas.fillAlpha : 0.3,
					lineThickness: 	definition.debugCanvas.lineThickness 		|| 1,
					flags: 			(definition.debugCanvas.flags) ? defFlags : (b2DebugDraw.e_shapeBit | b2DebugDraw.e_jointBit) 
			};
			
			this.world = new b2World(
								    	new b2Vec2(gravity.x, gravity.y),
								    	allowSleep
							    	);
			
			var listener = new Box2D.Dynamics.b2ContactListener();
		    listener.BeginContact = function(contact) {
		    	var fixtureA = contact.GetFixtureA();
		    	var fixtureB = contact.GetFixtureB();
		    	var fixtureAType = fixtureA.GetUserData().collisionType;
		    	var fixtureBType = fixtureB.GetUserData().collisionType;
		    	var entityA = fixtureA.GetBody().GetUserData();
		    	var entityB = fixtureB.GetBody().GetUserData();
		    	
		    	collisionData.contact 		= contact;
		    	collisionData.oldManifold 	= null;
		    	collisionData.impulse 		= null;
		    	collisionData.thisFixture 	= fixtureA;
		    	collisionData.otherFixture 	= fixtureB;
		    	collisionData.entity        = entityB;
		    	entityA.triggerEvent('begin-contact-' + fixtureAType + '-and-' + fixtureBType, collisionData);
		    	collisionData.thisFixture 	= fixtureB;
		    	collisionData.otherFixture 	= fixtureA;
		    	collisionData.entity        = entityA;
		    	entityB.triggerEvent('begin-contact-' + fixtureBType + '-and-' + fixtureAType, collisionData);
		    };
		    listener.EndContact = function(contact) {
		    	var fixtureA = contact.GetFixtureA();
		    	var fixtureB = contact.GetFixtureB();
		    	var fixtureAType = fixtureA.GetUserData().collisionType;
		    	var fixtureBType = fixtureB.GetUserData().collisionType;
		    	var entityA = fixtureA.GetBody().GetUserData();
		    	var entityB = fixtureB.GetBody().GetUserData();
		    	
		    	collisionData.contact 		= contact;
		    	collisionData.oldManifold 	= null;
		    	collisionData.impulse 		= null;
		    	collisionData.thisFixture 	= fixtureA;
		    	collisionData.otherFixture 	= fixtureB;
		    	collisionData.entity        = entityB;
		    	entityA.triggerEvent('end-contact-' + fixtureAType + '-and-' + fixtureBType, collisionData);
		    	collisionData.thisFixture 	= fixtureB;
		    	collisionData.otherFixture 	= fixtureA;
		    	collisionData.entity        = entityA;
		    	entityB.triggerEvent('end-contact-' + fixtureBType + '-and-' + fixtureAType, collisionData);
		    };
		    listener.PreSolve = function(contact, oldManifold) {
		    	var fixtureA = contact.GetFixtureA();
		    	var fixtureB = contact.GetFixtureB();
		    	var fixtureAType = fixtureA.GetUserData().collisionType;
		    	var fixtureBType = fixtureB.GetUserData().collisionType;
		    	var entityA = fixtureA.GetBody().GetUserData();
		    	var entityB = fixtureB.GetBody().GetUserData();
		    	
		    	collisionData.contact		= contact;
		    	collisionData.oldManifold 	= oldManifold;
		    	collisionData.impulse 		= null;
		    	collisionData.thisFixture 	= fixtureA;
		    	collisionData.otherFixture 	= fixtureB;
		    	collisionData.entity        = entityB;
		    	entityA.triggerEvent('pre-solve-' + fixtureAType + '-and-' + fixtureBType, collisionData);
		    	collisionData.thisFixture 	= fixtureB;
		    	collisionData.otherFixture 	= fixtureA;
		    	collisionData.entity        = entityA;
		    	entityB.triggerEvent('pre-solve-' + fixtureBType + '-and-' + fixtureAType, collisionData);
		    };
		    listener.PostSolve = function(contact, impulse) {
		    	var fixtureA = contact.GetFixtureA();
		    	var fixtureB = contact.GetFixtureB();
		    	var fixtureAType = fixtureA.GetUserData().collisionType;
		    	var fixtureBType = fixtureB.GetUserData().collisionType;
		    	var entityA = fixtureA.GetBody().GetUserData();
		    	var entityB = fixtureB.GetBody().GetUserData();
		    	
		    	collisionData.contact 		= contact;
		    	collisionData.oldManifold 	= null;
		    	collisionData.impulse 		= impulse;
		    	collisionData.thisFixture 	= fixtureA;
		    	collisionData.otherFixture 	= fixtureB;
		    	collisionData.entity        = entityB;
		    	entityA.triggerEvent('post-solve-' + fixtureAType + '-and-' + fixtureBType, collisionData);
		    	collisionData.thisFixture 	= fixtureB;
		    	collisionData.otherFixture 	= fixtureA;
		    	collisionData.entity        = entityA;
		    	entityB.triggerEvent('post-solve-' + fixtureBType + '-and-' + fixtureAType, collisionData);
		    };
		    this.world.SetContactListener(listener);
		     
			//setup debug canvas
		    this.debugCanvas = document.createElement('canvas');
		    this.debugCanvas.id = debugCanvasSettings.id;
		    this.ctx = this.debugCanvas.getContext('2d');
		   	
		    this.owner.rootElement.appendChild(this.debugCanvas);
		    
		    //setup debug draw
			this.debugDraw = new b2DebugDraw();
			this.debugDraw.SetSprite(document.getElementById(debugCanvasSettings.id).getContext("2d"));
			this.debugDraw.SetDrawScale(debugCanvasSettings.drawScale);
			this.debugDraw.SetFillAlpha(debugCanvasSettings.fillAlpha);
			this.debugDraw.SetLineThickness(debugCanvasSettings.lineThickness);
			this.debugDraw.SetFlags(debugCanvasSettings.flags);
			this.world.SetDebugDraw(this.debugDraw);
		},

		events: {// These are messages that this component listens for
			"child-entity-added": function(entity){
				var messageIds = entity.getMessageIds(); 
				var worldData  = { "world": this.world, "drawScale": this.debugDraw.GetDrawScale()};
				
				for (var x = 0; x < messageIds.length; x++)
				{
					if (messageIds[x] == 'connect-box2D'){
						this.entities.push(entity);
						entity.trigger('connect-box2D', worldData);
						break;
					}
				}
			},
			"tick": function(resp) {
				this.world.Step(
									this.simulationFrequency,
					               	this.velocityIterations,
					              	this.positionIterations
				         		);
				this.world.DrawDebugData();
				this.world.ClearForces();
				for (var x = 0; x < this.entities.length; x++){
					this.entities[x].triggerEvent('handle-box2d', resp);
				}
			},
			"camera-update": function(cameraInfo){
				if(platformer.game.settings.debug) {
					var dpr = (window.devicePixelRatio || 1);
					
					this.debugCanvas.width  = this.debugCanvas.offsetWidth * dpr;
					this.debugCanvas.height = this.debugCanvas.offsetHeight * dpr;
					
					this.ctx.restore();
					this.ctx.save();
					this.ctx.translate(-cameraInfo.viewportLeft * cameraInfo.scaleX * dpr, -cameraInfo.viewportTop * cameraInfo.scaleY * dpr);
					this.ctx.scale(cameraInfo.scaleX * dpr, cameraInfo.scaleY * dpr);
				}
			}
		},
		
		methods: {// These are methods that are called by this component.
			destroy: function() {
				this.world = null;
				this.debugCanvas.parentNode.removeChild(this.debugCanvas);
				this.debugCanvas = null;
				this.debugDraw = null;
				this.ctx = null;
				this.entities = [];
			}
		},
		
		publicMethods: {// These are methods that are available on the entity.
			
		}
	});
})();
