/**
 * A component that handles updating the render components on entities that are rendering via PIXI. Calls 'handle-render on children entities every tick. Also initializes handlers for mouse events on the layer level.
 *
 * @namespace platypus.components
 * @class HandlerRender
 * @uses platypus.Component
 */
/*global include, platypus */
(function () {
    'use strict';
    
    var Container = include('PIXI.Container'),
        Data = include('platypus.Data'),
        Interactive = include('platypus.components.Interactive'),
        Vector = include('platypus.Vector');

    return platypus.createComponentClass({

        id: "HandlerRender",

        properties: {
            /**
             * Defines whether the entity will respond to touch and click events. Setting this value will create an Interactive component on this entity with these properties. For example:
             *
             *  "interactive": {
             *      "hover": false,
             *      "hitArea": {
             *          "x": 10,
             *          "y": 10,
             *          "width": 40,
             *          "height": 40
             *      }
             *  }
             *
             * @property interactive
             * @type Boolean|Object
             * @default false
             * @since 0.9.1
             */
            interactive: false,

            /**
             * This property's functionality is now provided by the `interactive` property.
             *
             * @property acceptInput
             * @type Object
             * @default null
             * @deprecated since 0.9.1
             */
            acceptInput: null
        },

        constructor: function () {
            var definition = null;

            this.container = new Container();

            // The following appends necessary information to displayed objects to allow them to receive touches and clicks
            if (this.acceptInput) {
                platypus.debug.warn('Entity "' + this.owner.type + '": HandlerRender "acceptInput" property has been deprecated since 0.9.1 in favor of the "interactive" property which adds an "Interactive" component to the entity to handle input.');
                this.interactive = this.interactive || this.acceptInput;
            }

            if (this.interactive) {
                definition = Data.setUp(
                    'container', this.container,
                    'hitArea', this.interactive.hitArea,
                    'hover', this.interactive.hover
                );
                this.owner.addComponent(new Interactive(this.owner, definition));
                definition.recycle();
            }

            this.renderMessage = Data.setUp(
                'delta', 0,
                'container', this.container
            );
        },

        events: {
            /**
             * Once the entity is loaded, this component triggers "render-world" to notify other components about the entities' display container.
             *
             * @method 'load'
             */
            "load": function () {
                /**
                 * Once the entity is loaded, this component triggers "render-world" to notify other components about the entities' display container.
                 *
                 * @event 'render-world'
                 * @param data {Object}
                 * @param data.world {PIXI.Container} Contains entities to be rendered.
                 */
                this.owner.triggerEvent('render-world', {
                    world: this.container
                });

                /**
                 * This event is triggered once HandlerRender is ready to handle interactivity.
                 *
                 * @event 'input-on'
                 */
                this.owner.triggerEvent('input-on');
            },

            /**
             * Called when a new entity has been added to the parent and should be considered for addition to the handler. Entities are sent a reference the Container that we're rendering to, so they can add their display objects to it and the delta from the lastest tick.
             *
             * @method 'child-entity-added'
             * @param entity {platypus.Entity} The entity added to the parent.
             */
            "child-entity-added": function (entity) {
                /**
                 * Triggered on an entity added to the parent.
                 *
                 * @event 'handle-render-load'
                 * @param data {Object}
                 * @param data.delta {Number} The delta time for this tick.
                 * @param data.container {PIXI.Container} The display Container the entities display objects should be added to.
                 */
                entity.triggerEvent('handle-render-load', this.renderMessage);
            },

            /**
             * Pauses the children of this render Container. If a pause time is not provided. It remains paused until 'unpause-render' is called.
             *
             * @method 'pause-render'
             * @param [data] {Object}
             * @param data.time {Number} How long to pause.
             */
            "pause-render": function (timeData) {
                if (timeData && timeData.time) {
                    this.paused = timeData.time;
                } else {
                    this.paused = -1;
                }
                if (this.owner.triggerEventOnChildren) {
                    /**
                     * Notifies children entities that rendering updates have been paused.
                     *
                     * @event 'render-paused'
                     * @since 0.8.4
                     */
                    this.owner.triggerEventOnChildren('render-paused');
                }
            },

            /**
             * Unpauses the children of this render Container.
             *
             * @method 'unpause-render'
             */
            "unpause-render": function () {
                this.paused = 0;
                if (this.owner.triggerEventOnChildren) {
                    /**
                     * Notifies children entities that rendering updates have been unpaused.
                     *
                     * @event 'render-unpaused'
                     * @since 0.8.4
                     */
                    this.owner.triggerEventOnChildren('render-unpaused');
                }
            },

            /**
             * Sends a 'handle-render' message to all the children in the Container. The children in the Container are also paused/unpaused if needed and sorted according to their z value.
             *
             * @method 'tick'
             * @param tick {Object} An object containing tick data.
             */
            "tick": (function () {
                var sort = function (a, b) {
                    return a.z - b.z;
                };

                return function (tick) {
                    var x = 0,
                        child   = null,
                        message = this.renderMessage;

                    message.delta = tick.delta;

                    if (this.paused > 0) {
                        this.paused -= tick.delta;
                        if (this.paused <= 0) {
                            this.paused = 0;
                        }
                    }

                    if (this.owner.triggerEventOnChildren) {
                        /**
                         * Triggered every tick on the children entities.
                         *
                         * @event 'handle-render'
                         * @param data {Object}
                         * @param data.delta {Number} The delta time for this tick.
                         * @param data.container {PIXI.Container} The display Container the entities display objects should be added to.
                         */
                        this.owner.triggerEventOnChildren('handle-render', message);
                    }

                    if (this.container) {
                        x = this.container.children.length;
                        while (x--) {
                            child = this.container.children[x];

                            if (child.visible) {
                                if (child.paused && !this.paused) {
                                    child.paused = false;
                                } else if (this.paused) {
                                    child.paused = true;
                                }
                            }
                        }

                        if (this.container.reorder) {
                            this.container.reorder = false;
                            this.container.children.sort(sort);
                        }

                    }
                };
            }())
        },
        methods: {
            destroy: function () {
                this.container = null;
                this.renderMessage.recycle();
            }
        },

        publicMethods: {
            windowToWorld: function (windowVector, withOffset, vector) {
                var worldVector = vector || Vector.setUp();
                
                worldVector.x = windowVector.x * this.worldPerWindowUnitWidth;
                worldVector.y = windowVector.y * this.worldPerWindowUnitHeight;
                
                if (withOffset !== false) {
                    worldVector.x -= this.viewport.x * this.worldPerWindowUnitWidth;
                    worldVector.y -= this.viewport.y * this.worldPerWindowUnitHeight;
                }

                return worldVector;
            },
            
            worldToWindow: function (worldVector, withOffset, vector) {
                var windowVector = vector || Vector.setUp();

                windowVector.x = worldVector.x * this.windowPerWorldUnitWidth;
                windowVector.y = worldVector.y * this.windowPerWorldUnitHeight;
                
                if (withOffset !== false) {
                    windowVector.x += this.viewport.x;
                    windowVector.y += this.viewport.y;
                }

                return windowVector;
            }
        }
    });
}());
