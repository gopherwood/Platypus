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
		defaultDensity  	= 1,
		defaultFriction 	= 0.5,
		defaultRestitution 	= 0.2;
	return platformer.createComponentClass({
		id: 'collision-box2d', 
		
		constructor: function(definition){
			this.def = definition;
			this.body = null;
			this.world = null;
			this.drawScale = 1;
			/*
			 body: {
			 	type: X,
			 	position: {x: 0, y: 0},
			 	fixtureDefinition: {
			 		density: 0,
			 		friction: 0,
			 		restitution: 0
			 	},
			 	shapes: [
			 		{
			 			fixtureDefinition: {},
			 			radius: 3,
			 			points: [
			 				{x: 0, y: 0},
			 				{x: 0, y: 0}
			 			],
			 			halfWidth: 0,
			 			halfHeight: 0
			 		}
			 	]
			 }
			*/
			
		},

		events: {// These are messages that this component listens for
			
			"connect-box2D": function(worldData) {
				this.world = worldData.world;
				this.drawScale = worldData.drawScale;
				this.body = null;
				var bodyDef = new b2BodyDef;
				var fixDef  = new b2FixtureDef;
				var bodyFixDef = null;
				var shapeFixDef = null;
				var shapeDef = null;
				var vectors = null;
				var vector = null;
				if(this.def.body) {
					//bodyDef = new b2BodyDef;
				
					if (this.def.body.type == 'static') {
						bodyDef.type = b2Body.b2_staticBody;
					} else if (this.def.body.type == 'kinematic') {
						bodyDef.type = b2Body.b2_kinematicBody;
					} else {
						//default to dynamic
						bodyDef.type = b2Body.b2_dynamicBody;
					}
					
					//TODO: Positions from TILED probably need to be scaled....
					if (this.def.body.position) {
						bodyDef.position.x = (this.owner.x || this.def.body.position.x || 0) / this.drawScale;
						bodyDef.position.y = (this.owner.y || this.def.body.position.y || 0) / this.drawScale;
					} else {
						bodyDef.position.x = (this.owner.x || 0) / this.drawScale;
						bodyDef.position.y = (this.owner.y || 0) / this.drawScale;
					}
					this.owner.x = bodyDef.position.x;
					this.owner.y = bodyDef.position.y;
					
					this.body = this.world.CreateBody(bodyDef);
					
					if (!this.def.body.fixtureDefinition) {
						this.def.body.fixtureDefinition = {};
					}
					bodyFixDef = this.def.body.fixtureDefinition;
					
					for (var x = 0; x < this.def.body.shapes.length; x++) {
						shapeDef = this.def.body.shapes[x];
						
						if (!shapeDef.fixtureDefinition) {
							shapeDef.fixtureDefinition = {};
						}
						shapeFixDef = shapeDef.fixtureDefinition;
						
						if (typeof shapeFixDef.density !== 'undefined') {
							fixDef.density = shapeFixDef.density;
						} else if (bodyFixDef.density !== 'undefined') {
							fixDef.density = bodyFixDef.density;
						} else {
							fixDef.density = defaultDensity;
						}			
						
						if (typeof shapeFixDef.friction !== 'undefined') {
							fixDef.friction = shapeFixDef.friction;
						} else if (typeof bodyFixDef.friction !== 'undefined') {
							fixDef.friction = bodyFixDef.friction;
						} else {
							fixDef.friction = defaultFriction;
						}
						
						if (typeof shapeFixDef.restitution !== 'undefined') {
							fixDef.restitution = shapeFixDef.restitution;
						} else if (typeof bodyFixDef.restitution !== 'undefined') {
							fixDef.friction = bodyFixDef.restitution;
						} else {
							fixDef.friction = defaultRestitution;
						}
						
						if(shapeDef.radius) {
							fixDef.shape = new b2CircleShape(shapeDef.radius / this.drawScale);
						} else if (shapeDef.points) {
			                vectors = [];
							for (var c = 0; c < shapeDef.points.length; c++) {
								vector = new b2Vec2();
								vector.Set(points[c].x / this.drawScale, points[c].y / this.drawScale);
								vectors[c] = vector;
							}
							fixDef.shape = new b2PolygonShape;
							fixDef.shape.SetAsArray(vecs, vecs.length);
						} else if (shapeDef.halfWidth && shapeDef.halfHeight) {
							fixDef.shape = new b2PolygonShape;
							fixDef.shape.SetAsBox(shapeDef.halfWidth / this.drawScale, shapeDef.halfHeight / this.drawScale);
						}
						
						this.body.CreateFixture(fixDef);
					}
				}
			},
			"handle-box2d": function() {
				var pos = this.body.GetPosition();
				var angle = this.body.GetAngle();
				this.owner.x = pos.x * this.drawScale;
				this.owner.y = pos.y * this.drawScale;
				this.owner.orientation = angle;
			}
		},
		
		
		methods: {// These are methods that are called by this component.
			destroy: function() {
				this.def = null;
				this.world = null;
			}
		},
		
		publicMethods: {// These are methods that are available on the entity.
			
		}
	});
})();
