/**
# COMPONENT **CollisionFilter**
This component will listen for a particular collision message and, depending on a given entity.state attribute, retrigger the collision as another collision message.

## Dependencies:
- [[Collision-Basic]] (on entity) - This component listens for a particular collision event triggered by the CollisionBasic component.

### Listens for:
- **animation-complete** - On receiving this message, the component match the animation id with its animation id setting and destroy the entity if they match.
  - @param animationId (string) - animation id for the animation that just finished.

## JSON Definition:
    {
      "type": "chaff",
      
      "state": "allergic",
      // The entity state that should cause the following list of collisions to trigger events. If this state is not true, no events are triggered.
      
      "collisions": {
      // One or more collision events for which to listen.
        
        "hitting-flowers": "sneeze",
        // Listen for "hitting-flowers", and if the entity is "allergic", trigger a "sneeze" event.
        
        "in-the-weeds": "cough"
        // Another collision event that triggers "cough" if the entity is "allergic".
      }
    }
*/
/*global platypus */
(function () {
    "use strict";

    var collidePos = function (entity, state, event) {
            return function (collInfo) {
                if (entity.state[state]) {
                    entity.trigger(event, collInfo);
                }
            };
        },
        collideNeg = function (entity, state, event) {
            return function (collInfo) {
                if (!entity.state[state]) {
                    entity.trigger(event, collInfo);
                }
            };
        };
    
    return platypus.createComponentClass({
        id: 'CollisionFilter',
        constructor: function (definition) {
            var event = null,
                state = definition.state;
            
            if (definition.collisions) {
                if (state[0] === '!') {
                    state = state.substring(1);
                    for (event in definition.collisions) {
                        if (definition.collisions.hasOwnProperty(event)) {
                            this.addEventListener(event, collideNeg(this.owner, state, definition.collisions[event]));
                        }
                    }
                } else {
                    for (event in definition.collisions) {
                        if (definition.collisions.hasOwnProperty(event)) {
                            this.addEventListener(event, collidePos(this.owner, state, definition.collisions[event]));
                        }
                    }
                }
            }
        }
    });
}());
