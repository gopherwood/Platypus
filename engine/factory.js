/**
 * The component factory takes in component definitions and creates component classes that can be used to create components by entities.  It adds properties and methods that are common to all components so that component definitions can focus on unique properties and methods.
 * 
 * To create an extended component class, use the following syntax:
 * 
 *      platformer.createComponentClass(componentDefinition, prototype);
 * 
 *  * `componentDefinition` is list of key/value pairs that describe the component's behavior.
 *  * `prototype` is an optional prototype that this component extends.
 * See [component-template.js]("component-template"%20Component.html) for an example componentDefinition that can be sent into this component class factory.
 * 
 * @class Component
 * @static
 */
(function (ns){
	"use strict";
	
	var setupProperty = function(property, component, owner){
		Object.defineProperty(component, property, {
		    get: function(){
		        return owner[property];
		    },
		    set: function(value){
		    	owner[property] = value;
		    },
		    enumerable: true
		});
	};
		
	ns.components = {};
	
	ns.createComponentClass = function(componentDefinition, Prototype){
		var	component = function(owner, definition){
			var prop = null,
			func     = null,
			name     = '';
			
			// if prototype provided, set up its properties here.
			if(Prototype){
				Prototype.call(this);
			}
			
			this.owner = owner;
			this.listener = {
				events: [],
				messages: []
			};
			this.publicMethods = {};
			this.type = componentDefinition.id;
			
			// Set up properties, prioritizing component settings, entity settings, and finally defaults.
			if(componentDefinition.properties){
				for(prop in componentDefinition.properties){
					if(typeof definition[prop] !== 'undefined'){
						this[prop] = definition[prop];
					} else if(typeof this.owner[prop] !== 'undefined') {
						this[prop] = this.owner[prop];
					} else {
						this[prop] = componentDefinition.properties[prop];
					}
				}
			}
			
			// These component properties are equivalent with `entity.property`
			if(componentDefinition.publicProperties){
				for(prop in componentDefinition.publicProperties){
					setupProperty(prop, this, owner);
					if(typeof definition[prop] !== 'undefined'){
						this[prop] = definition[prop];
					} else if(typeof this.owner[prop] !== 'undefined') {
						this[prop] = this.owner[prop];
					} else {
						this[prop] = componentDefinition.publicProperties[prop];
					}
				}
			}
			
			if(componentDefinition.events){
				for(func in componentDefinition.events){
					this.addEventListener(func, componentDefinition.events[func]);
					if(definition.aliases){
						for (var alias in definition.aliases){
							if(definition.aliases[alias] === func){
								this.addEventListener(alias, componentDefinition.events[func]);
							}
						}
					}
				}
			}
			
			if(componentDefinition.publicMethods){
				for(func in componentDefinition.publicMethods){
					name = func;
					if(definition.aliases){
						for (var alias in definition.aliases){
							if(definition.aliases[alias] === func){
								name = alias;
							}
						}
					}
					this.addMethod(name, componentDefinition.publicMethods[func]);
				}
			}
						
			if (this.constructor){
				this.constructor(definition);
			}
		},
		func  = null,
		proto = component.prototype;
		
		if(Prototype){ //absorb template prototype if it exists.
			proto = component.prototype = new Prototype();
		}
		
		// Have to copy rather than replace so definition is not corrupted
		proto.constructor = componentDefinition.constructor;

		if (componentDefinition.methods) for(func in componentDefinition.methods){
			if(func === 'destroy'){
				proto['___' + func] = componentDefinition.methods[func];
			} else {
				proto[func] = componentDefinition.methods[func];
			}
		}
		if (componentDefinition.publicMethods) for(func in componentDefinition.publicMethods){
			proto[func] = componentDefinition.publicMethods[func];
		}
		
		/**
		 * Returns a string formatted as `[component componentType]`.
		 * 
		 * @method toString
		 * @return {String}
		 */
		proto.toString = function(){
			return "[component " + this.type + "]";
		};

		/**
		 * This method cleans up listeners and methods that this component added to the entity. It should never be called by the component itself. Call this.owner.removeComponent(this) instead.
		 * 
		 * @method destroy
		 */
		proto.destroy = function(){
			
			// Handle component's destroy method before removing messaging and methods.
			if(this.___destroy){
				this.___destroy();
			}
			
			// Now remove event listeners and methods.
			for(func in this.publicMethods){
				this.removeMethod(func);
			}
			this.removeEventListeners();
		};
		
		/**
		 * This method removes multiple event listeners from the entity.
		 * 
		 * @method removeEventListeners
		 * @param [listeners] {Array} The list of listeners to remove. If not supplied, all event listeners are removed.
		 */
		proto.removeEventListeners = function(listeners){
			var events = null,
			messages = null;
			
			if(!listeners){
				events   = this.listener.events;
				messages = this.listener.messages;
				for(var i = 0; i < events.length; i++){
					this.removeEventListener(events[i], messages[i]);
				}
			} else {
				events   = listeners;
				for(var i = 0; i < events.length; i++){
					this.removeEventListener(events[i]);
				}
			}
		};
		
		/**
		 * This method adds an event listener to the entity.
		 * 
		 * @method addEventListener
		 * @param event {String} The event that this component should listen for.
		 * @param callback {Function} The handler for the event.
		 */
		proto.addEventListener = function(event, callback){
			this.listener.events.push(event);
			this.listener.messages.push(callback);
			this.owner.bind(event, callback, this);
		};
		
		/**
		 * This method adds a method to the entity.
		 * 
		 * @method addMethod
		 * @param name {String} The name of the method. For example, if name is "turnYellow", the method is accessible on the entity as `entity.turnYellow()`.
		 * @param func {Function} The function describing the method.
		 */
		proto.addMethod = function(name, func){
			var self = this;
			
			if(this.owner[name]){
				console.warn(this.owner.type + ': Entity already has a method called "' + name + '". Method not added.');
			} else {
				this.owner[name] = function(){
					return func.apply(self, arguments);
				};
				this.publicMethods[name] = func;
			}
		};
	
		/**
		 * This method removes an event listener from the entity.
		 * 
		 * @method removeEventListener
		 * @param event {String} The event for which to remove a listener.
		 * @param callback {Function} The listener to remove. If not supplied, all event listeners for the provided event are removed.
		 */
		proto.removeEventListener = function(event, callback){
			var events = this.listener.events,
			messages   = this.listener.messages;
			for(var i = 0; i < events.length; i++){
				if((events[i] === event) && (!callback || (messages[i] === callback))){
					this.owner.unbind(event, messages[i], this);
				}
			}
		};
		
		/**
		 * This method removes a method from the entity.
		 * 
		 * @method removeMethod
		 * @param name {String} The name of the method to be removed.
		 */
		proto.removeMethod = function(name){
			if(!this.owner[name]){
				console.warn(this.owner.type + ': Entity does not have a method called "' + name + '".');
			} else {
				delete this.owner[name];
			}
			delete this.publicMethods[name];
		};

		ns.components[componentDefinition.id] = component;
	};
})(platformer);