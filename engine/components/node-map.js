/**
# COMPONENT **node-map**
This component sets up a node-map to be used by the [[node-resident]] component on this entity's child entities.

## Dependencies
- [[entity-container]] - This component expects the entity to have an `entity-container` component so it knows when `node-resident` children are added.

## Messages

### Listens for:
- **add-node** - Expects a node definition to create a node in the node-map.
  - @param definition.nodeId (string or array) - This value becomes the id of the Node. Arrays are joined using "|" to create the id string.
  - @param definition.type (string) - This determines the type of the node.
  - @param definition.x (number) - Sets the x axis position of the node.
  - @param definition.y (number) - Sets the y axis position of the node.
  - @param definition.z (number) - Sets the z axis position of the node.
  - @param definition.neighbors (object) - A list of key/value pairs where the keys are directions from the node and values are node ids. For example: {"west": "node12"}.
- **child-entity-added** - Checks the child entity for a nodeId and if found adds the child to the corresponding node.
  - @param entity (Entity) - The entity that may be placed on a node.

## JSON Definition
    {
      "type": "node-map",
      
      "node": "node-entity",
      // Optional. Whether generated map nodes should be of a particular entity type. Defaults to a generic non-entity node.
      
      "map": [
      // Optional. An array of node definitions to create the node-map.
        
        {
          "nodeId": "node1",
          // A string or array that becomes the id of the Node. Arrays are joined using "|" to create the id string.
          
          "type": "path",
          // A string that determines the type of the node.
          
          "x": 0,
          // Sets the x axis position of the node.
          
          "y": 0,
          // Sets the y axis position of the node.
          
          "z": 0,
          // Sets the z axis position of the node.

          "neighbors": {
          // A list of key/value pairs where the keys are directions from the node and values are node ids.
            
            "west": "node0",
            "east": "node2"
          }
        }
      ]
    }
*/
(function(){
	// This is a basic node object, but can be replaced by entities having a `node` component if more functionality is needed.
	var Node = function(definition, map){
		if(definition.nodeId){
			if(typeof definition.nodeId === 'string'){
				this.nodeId = definition.nodeId;
			} else if (Array.isArray(definition.nodeId)) {
				this.nodeId = definition.nodeId.join('|');
			} else {
				this.nodeId = '' + Math.random();
			}
		} else {
			this.nodeId = '' + Math.random();
		}
		
		this.isNode = true;
		this.map = map;
		this.contains = [];
		this.type = definition.type || '';
		this.x = definition.x || 0;
		this.y = definition.y || 0;
		this.z = definition.z || 0;
		
		this.neighbors = definition.neighbors || {};
	},
	proto = Node.prototype;
	
	proto.getNode = function(desc){
		var neighbor = null;
		
		if(this.neighbors[desc]){
			neighbor = this.neighbors[desc];
			if(neighbor.isNode){
				return neighbor;
			} else if(typeof neighbor === 'string'){
				neighbor = this.map.getNode(neighbor);
				if(neighbor){
					this.neighbors[desc] = neighbor;
					return neighbor;
				}
			} else if (Array.isArray(neighbor)) {
				neighbor = this.map.getNode(neighbor.join('|'));
				if(neighbor){
					this.neighbors[desc] = neighbor;
					return neighbor;
				}
			}
			return null;
		} else {
			return null;
		}
	};

	proto.addToNode = function(entity){
		for(var i = 0; i < this.contains.length; i++){
			if(this.contains[i] === entity){
				return false;
			}
		}
		this.contains.push(entity);
		return entity;
	};
	
	proto.removeFromNode = function(entity){
		for(var i = 0; i < this.contains.length; i++){
			if(this.contains[i] === entity){
				return this.contains.splice(i,1)[0];
			}
		}
		return false;
	};
	
	return platformer.createComponentClass({
		id: 'node-map',
		
		constructor: function(definition){
			this.map = null;
			this.nodeEntity = null;
			
			if(definition.node){
				this.nodeEntity = platformer.game.settings.entities[definition.node];
			}

			this.setupMap = definition.map || null;
		},

		events: {
			"load": (function(){
				var createNodeMap = function(map, self){
					var i = 0,
					nodes = [];
					
					for(; i < map.length; i++){
						nodes.push(self.createNode(map[i]));
					}
					
					return nodes;
				};
				
				return function(definition){
					var i = 0,
					map   = null;
					
					if(this.setupMap){
						map = this.setupMap;
						this.setupMap = null;
						
						if(Array.isArray(map)){
							this.map = createNodeMap(map, this);
						} else {
							this.map = [];
							switch(map.type){
							case "line":
								map = createNodeMap(this.generateLineMap(map.nodes || 2, map.originX || 0, map.originY || 0, map.destinationX || 0, map.destinationY || 0), this);
								break;
							case "grid":
								map = createNodeMap(this.generateCartesianMap(map.rows || 1, map.columns || 1, map.width || 1, map.height || 1), this);
								break;
							case "hexagon":
								map = createNodeMap(this.generateHexagonMap(map.radius, map.width, map.height, map.vertical), this);
								break;
							}
							if(!this.nodeEntity){ // entity nodes are added to this.map via messaging, but generic Nodes must be added via this route.
								this.map = map;
							}
						}
					}
				};
			})(),
			"add-node": function(nodeDefinition){
				if(nodeDefinition.isNode){// if it's already a node, put it on the map.
					nodeDefinition.map = this;
					this.map.push(nodeDefinition);
				} else {
					this.map.push(this.createNode(nodeDefinition));
				}
			},
			"child-entity-added": function(entity){
				if(entity.isNode){        // a node
					this.owner.triggerEvent('add-node', entity);
				} else if(entity.nodeId){ // a node-resident
					entity.node = this.getNode(entity.nodeId);
					entity.trigger('on-node', entity.node);
				}
			},
			"rotate": (function(){
				var rotateCoordinates = function(obj, sin, cos){
					var x = obj.x || 0,
					y     = obj.y || 0;
					
					obj.x = x * cos - y * sin;
					obj.y = x * sin + y * cos;
				};
				
				return function(options){
					var i  = 0,
					j      = 0,
					map    = this.map,
	/*				oX     = options.x || 0, //TODO: change rotation origin
					oY     = options.y || 0,
					oZ     = options.z || 0,*/
					rotate = options.rotation || 0,
					sin    = Math.sin(rotate),
					cos    = Math.cos(rotate);
					
					if(rotate){
						for(; i < map.length; i++){
							rotateCoordinates(map[i], sin, cos);
							if(map[i].contains.length){
								for(j = 0; j < map[i].contains.length; j++){
									rotateCoordinates(map[i].contains[j], sin, cos); //TODO: may need to incorporate x, y offsets for entities at a node.
								}
							}
						}
					}
				};
			})()
		},
		
		methods: {
			createNode: function(definition){
				if(this.nodeEntity){
					definition.map = this;
					return this.owner.addEntity(new platformer.Entity(this.nodeEntity, {
						properties: definition
					}));
				} else {
					return new Node(definition, this);
				}
			},
			
			generateLineMap: function(nodes, oX, oY, dX, dY){
				var i  = 0,
				node   = null,
				nodeId = '',
				length = 0,
				map    = [],
				x      = oX,
				y      = oY,
				stepX  = 0,
				stepY  = 0,
				arr    = null;
				
				if(Array.isArray(nodes)){
					length = nodes.length;
					arr    = true;
				} else {
					length = nodes;
				}

				stepX  = (dX - oX) / ((length - 1) || 1);
				stepY  = (dY - oY) / ((length - 1) || 1);
				
				if(arr) {
					for (; i < length; i++){
						node = nodes[i];
						nodeId = node.nodeId || ('node-' + i);
						node = {
							nodeId: nodeId,
							type:   node.type,
							x:      x,
							y:      y,
							neighbors: {}
						};
						if(map[i - 1]) {
							node.neighbors['left'] = map[i - 1].nodeId;
							map[i - 1].neighbors['right'] = node.nodeId;
						}
						
						map.push(node);
						
						x += stepX;
						y += stepY;
					}
				} else {
					for (; i < length; i++){
						node = {
							nodeId: 'node-' + i,
							type:   '',
							x:      x,
							y:      y,
							neighbors: {}
						};
						if(map[i - 1]) {
							node.neighbors['left'] = map[i - 1].nodeId;
							map[i - 1].neighbors['right'] = node.nodeId;
						}
						
						map.push(node);
						
						x += stepX;
						y += stepY;
					}
				}
				
				return map;
			},
			
			generateCartesianMap: function(rows, columns, width, height){
				var i   = 0,
				x       = 0,
				y       = 0,
				node    = null,
				map     = [];
				
				width  = width  || 1;
				height = height || 1;
				
				for (y = 0; y < rows; y++){
					for (x = 0; x < columns; x++){
						node = {
							nodeId: 'node-(' + x + ',' + y + ')',
							x:      x * width,
							y:      y * height,
							neighbors: {}
						};
						if(map[i - 1]) {
							node.neighbors['west'] = map[i - 1].nodeId;
							map[i - 1].neighbors['east'] = node.nodeId;
						}
						if(map[i - nodes[y].length]) {
							node.neighbors['north'] = map[i - 1].nodeId;
							map[i - 1].neighbors['south'] = node.nodeId;
						}
						
						map.push(node);
						i += 1;
					}
				}
				
				return map;
			},
			
			generateHexagonMap: (function(){
				var neighbors = [[+1, -1], [ 0, -1], [-1,  0], [-1, +1], [ 0, +1], [+1,  0]],
				directions = ['k', 'm', 'n', 'h', 'u', 'i'],
				getX = function(direction, radius, edge){
					return (neighbors[direction][0] * radius + neighbors[(direction + 2) % 6][0] * edge);
				},
				getY = function(direction, radius, edge){
					return (neighbors[direction][1] * radius + neighbors[(direction + 2) % 6][1] * edge);
				},
				getZ = function(x, y){
					return -(x + y);
				},
				getWorldX = function(x, y, z, width, vertical){
					if(vertical){
						return x * width * 0.75;
					} else {
						return (x - y) * width * 0.5;
					}
				},
				getWorldY = function(x, y, z, height, vertical){
					if(vertical){
						return (z - y) * height * 0.5;
					} else {
						return z * height * 0.75;
					}
				};
				
				return function(size, width, height, vertical){
					var i   = 0,
					x       = 0,
					y       = 0,
					z       = 0,
					nx      = 0,
					ny      = 0,
					nz      = 0,
					tx      = 0,
					ty      = 0,
					tz      = 0,
					nnode   = null,
					node    = null,
					nodeId  = '',
					map     = [],
					refMap  = {};
					
					width  = width  || 1;
					height = height || 1;
					
					if(vertical) {
						tx =  width  * 0.75;
						ty = -height * 0.5;
						tz =  height * 0.5;
					} else {
						tx =  width  * 0.5;
						ty = -width  * 0.5;
						tz =  height * 0.75;
					}
					
					node = {
						nodeId: 'node-(0,0,0)',
						x:      getWorldX(x, y, z, width, vertical),
						y:      getWorldY(x, y, z, height, vertical),
						z:      getWorldY(x, y, z, height, vertical),
						neighbors: {}
					};
					map.push(node);
					for (var direction = 0; direction < 6; direction++) {
					    for (var radius = 1; radius < size; radius++) {
					        for (var edge = 0; edge < radius; edge++) {
					        	x = getX(direction, radius, edge);
					        	y = getY(direction, radius, edge);
					        	z = getZ(x, y);
					        	nodeId = 'node-(' + x + ',' + y + ',' + z + ')';
								node = {
									nodeId: nodeId,
									x:      getWorldX(x, y, z, width, vertical),
									y:      getWorldY(x, y, z, height, vertical),
									z:      getWorldY(x, y, z, height, vertical),
									neighbors: {}
								};
								for (i = 0; i < 6; i++){
									nx = x + neighbors[i][0];
									ny = y + neighbors[i][1];
									nz = getZ(nx, ny);
									nnode = refMap['node-(' + nx + ',' + ny + ',' + nz + ')'];
									if(nnode) {
										node.neighbors[directions[i]] = nnode.nodeId;
										nnode.neighbors[directions[(+i + 3) % 6]] = node.nodeId;
									}
								}
								
								refMap[nodeId] = node;
								map.push(node);
								i += 1;
					        }
					    }
					}

					return map;
				};
			})(),
			
			getNode: function(){
				var i   = 0,
				id      = '',
				divider = '',
				args    = arguments;
				
				if(args.length === 1){
					if(typeof args[0] !== 'string'){
						if(args[0].isNode){
							return args[0];
						} else if(args[0].length){
							args = args[0];
						}
					}
				}
				
				for (i = 0; i < args.length; i++){
					id += divider + args[i];
					divider = '|';
				}
				for (i = 0; i < this.map.length; i++){
					if(this.map[i].nodeId === id){
						return this.map[i];
					}
				}
				return null;
			}
		},
		
		publicMethods: {
			getClosestNode: (function(){
				var sqr = function(x, y, z){
					return x * x + y * y + z * z;
				};
				
				return function(gx, gy, gz){
					var i = 0,
					x     = gx || 0,
					y     = gy || 0,
					z     = gz || 0,//(-x - y), //temp - transform for hexagon grid
					node  = null,
					closest = null,
					distance = Infinity,
					squares  = 0;
					
					for (; i < this.map.length; i++){
						node = this.map[i];
						squares = sqr(x - (node.x || 0), y - (node.y || 0), z - (node.z || 0));
						if((squares < distance) && (!node.contains.length)){
							distance = squares;
							closest  = node;
						}
					}
					
					return closest;
				};
			})()
		}
	});
})();
