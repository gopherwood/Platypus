/**
# COMPONENT **name-of-component**
Summarize the purpose of this component here.

## Dependencies
- [[Required-Component]] - List other components that this component requires to function properly on an entity.

## Messages

### Listens for:
- **received-message-label** - List all messages that this component responds to here.
  - @param message-object-property (type) - under each message label, list message object properties that are optional or required.

### Local Broadcasts:
- **local-message-label** - List all messages that are triggered by this component on this entity here.
  - @param message-object-property (type) - under each message label, list message object properties that are optional or required.

### Peer Broadcasts:
- **peer-message-label** - List all messages that are triggered by this component on other entities here.
  - @param message-object-property (type) - under each message label, list message object properties that are optional or required.

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
			/*
			var fixDef = new b2FixtureDef;
			fixDef.density = 1.0;
			fixDef.friction = 0.5;
			fixDef.restitution = 0.2;
			 
			var bodyDef = new b2BodyDef;
			 
			//create ground
			bodyDef.type = b2Body.b2_staticBody;
			bodyDef.position.x = 10.66;
			bodyDef.position.y = 13;
			fixDef.shape = new b2PolygonShape;
			fixDef.shape.SetAsBox(10, 0.5);
			this.world.CreateBody(bodyDef).CreateFixture(fixDef);
			 
			//create some objects
			bodyDef.type = b2Body.b2_dynamicBody;
			for(var i = 0; i < 10; ++i) {
			    if(Math.random() > 0.5) {
			       fixDef.shape = new b2PolygonShape;
			       fixDef.shape.SetAsBox(
						        		   Math.random() + 0.1, //half width
						        		   Math.random() + 0.1 //half height
			   						);
			    } else {
			    	fixDef.shape = new b2CircleShape(
									              Math.random() + 0.1 //radius
										           );
			    }
			    bodyDef.position.x = Math.random() * 10;
			    bodyDef.position.y = Math.random() * 10;
			    this.world.CreateBody(bodyDef).CreateFixture(fixDef);
			}
			*/
		     
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
					this.entities[x].triggerEvent('handle-box2d');
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
