(function(){
  var platformer = {};

  PBS = this.PBS || {};
  PBS.KIDS = this.PBS.KIDS || {};
  PBS.KIDS.platformer = platformer;

platformer.settings = {"global":{"autoLoad":true,"initialScene":"load","fps":60,"rootElement":"root","aspectRatio":1.333,"nativeAssetResolution":960,"resizeFont":true},"aspects":[{"ogg":["firefox","opera","chrome"],"m4aCombined":["android","silk","ipod","ipad","iphone"],"mp3":["msie","safari","trident"]}],"assets":{"walk":{"id":"walk","src":{"ogg":"a/walk.ogg","mp3":"a/walk.mp3","m4aCombined":{"assetId":"combined","src":"a/combined.m4a","data":{"offset":3200,"length":330}}}},"jump":{"id":"jump","src":{"ogg":"a/jump.ogg","mp3":"a/jump.mp3","m4aCombined":{"assetId":"combined","src":"a/combined.m4a","data":{"offset":1500,"length":250}}}},"buttons":{"id":"buttons","src":"i/buttons.png"},"mookie":{"id":"mookie","src":"i/mookie.png","data":{"rows":4,"columns":4}},"sprites":{"id":"sprites","src":"i/game-sprites.png","data":{"rows":4,"columns":4}},"tiles":{"id":"tiles","src":"i/tiles.png","data":{"rows":2,"columns":2}},"title-screen":{"id":"title-screen","src":"i/title-screen.png"},"objects":{"id":"objects","src":"i/objects.png","data":{"rows":1,"columns":4}},"entities":{"id":"entities","src":"i/entities.png","data":{"rows":2,"columns":2}}},"includes":{"CreateJS":{"id":"CreateJS","src":"http://code.createjs.com/createjs-2013.09.25.min.js"},"Box2d":{"id":"Box2d","src":"../game/Box2dWeb-2.1.a.3.min.js"},"Browser":{"id":"Browser","src":"../engine/browser.js"},"Main":{"id":"Main","src":"../engine/main.js"},"ButtonCSS":{"id":"ButtonCSS","src":"../game/css/button.css"},"MainCSS":{"id":"MainCSS","src":"../game/css/main.css"},"GameCSS":{"id":"GameCSS","src":"../game/css/game.css"},"GUI CSS":{"id":"GUI CSS","src":"../game/css/gui.css"},"FullScreenCSS":{"id":"FullScreenCSS","src":"../game/css/fullscreen.css"}},"classes":{"Game":{"id":"Game","src":"../engine/game.js"},"ComponentFactory":{"id":"ComponentFactory","src":"../engine/factory.js"},"Entity":{"id":"Entity","src":"../engine/entity.js"},"Scene":{"id":"Scene","src":"../engine/scene.js"},"Collision-Shape":{"id":"Collision-Shape","src":"../engine/collision-shape.js"},"Collision-Data-Container":{"id":"Collision-Data-Container","src":"../engine/collision-data-container.js"},"AABB":{"id":"AABB","src":"../engine/aabb.js"},"Vector2D":{"id":"Vector2D","src":"../engine/vector2D.js"}},"components":{"asset-loader":{"id":"asset-loader","src":"../engine/components/asset-loader.js"},"enable-ios-audio":{"id":"enable-ios-audio","src":"../engine/components/enable-ios-audio.js"},"handler-collision":{"id":"handler-collision","src":"../engine/components/handler-collision.js"},"handler-box2d":{"id":"handler-box2d","src":"../engine/components/handler-box2d.js"},"handler-controller":{"id":"handler-controller","src":"../engine/components/handler-controller.js"},"tiled-loader":{"id":"tiled-loader","src":"../engine/components/tiled-loader.js"},"handler-render-createjs":{"id":"handler-render-createjs","src":"../engine/components/handler-render-createjs.js"},"handler-render-dom":{"id":"handler-render-dom","src":"../engine/components/handler-render-dom.js"},"handler-ai":{"id":"handler-ai","src":"../engine/components/handler-ai.js"},"handler-logic":{"id":"handler-logic","src":"../engine/components/handler-logic.js"},"camera":{"id":"camera","src":"../engine/components/camera.js"},"collision-group":{"id":"collision-group","src":"../engine/components/collision-group.js"},"audio":{"id":"audio","src":"../engine/components/audio.js"},"broadcast-events":{"id":"broadcast-events","src":"../engine/components/broadcast-events.js"},"change-scene":{"id":"change-scene","src":"../engine/components/change-scene.js"},"dom-element":{"id":"dom-element","src":"../engine/components/dom-element.js"},"entity-container":{"id":"entity-container","src":"../engine/components/entity-container.js"},"entity-controller":{"id":"entity-controller","src":"../engine/components/entity-controller.js"},"fullscreen":{"id":"fullscreen","src":"../engine/components/fullscreen.js"},"render-debug":{"id":"render-debug","src":"../engine/components/render-debug.js"},"render-tiles":{"id":"render-tiles","src":"../engine/components/render-tiles.js"},"render-animation":{"id":"render-animation","src":"../engine/components/render-animation.js"},"render-image":{"id":"render-image","src":"../engine/components/render-image.js"},"logic-button":{"id":"logic-button","src":"../engine/components/logic-button.js"},"logic-directional-movement":{"id":"logic-directional-movement","src":"../engine/components/logic-directional-movement.js"},"logic-gravity":{"id":"logic-gravity","src":"../engine/components/logic-gravity.js"},"logic-jump":{"id":"logic-jump","src":"../engine/components/logic-jump.js"},"counter":{"id":"counter","src":"../engine/components/counter.js"},"logic-timer":{"id":"logic-timer","src":"../engine/components/logic-timer.js"},"logic-portal":{"id":"logic-portal","src":"../engine/components/logic-portal.js"},"collision-basic":{"id":"collision-basic","src":"../engine/components/collision-basic.js"},"collision-tiles":{"id":"collision-tiles","src":"../engine/components/collision-tiles.js"},"collision-box2d":{"id":"collision-box2d","src":"../engine/components/collision-box2d.js"},"logic-fps-counter":{"id":"logic-fps-counter","src":"../engine/components/logic-fps-counter.js"},"render-gui":{"id":"render-gui","src":"../game/components/render-gui.js"},"render-counter":{"id":"render-counter","src":"../game/components/render-counter.js"},"render-clock":{"id":"render-clock","src":"../game/components/render-clock.js"},"logic-hero":{"id":"logic-hero","src":"../game/components/logic-hero.js"},"logic-gui":{"id":"logic-gui","src":"../game/components/logic-gui.js"}},"entities":{"action-layer":{"id":"action-layer","components":[{"type":"handler-controller"},{"type":"handler-ai"},{"type":"handler-logic"},{"type":"handler-box2d"},{"type":"camera","width":640},{"type":"handler-render-createjs","autoClear":true},{"type":"entity-container"},{"type":"tiled-loader","level":"level-1","entityPositionX":"center","entityPositionY":"center"}]},"desktop-interface-layer":{"id":"desktop-interface-layer","filter":{"excludes":["mobile"]},"components":[{"type":"handler-logic"},{"type":"handler-render-dom"},{"type":"entity-container","entities":[{"type":"button-mute"},{"type":"button-fullscreen"},{"type":"button-play"},{"type":"gui"},{"type":"fps-counter"}],"childEvents":["time-elapsed"]}]},"multitouch-interface-layer":{"id":"multitouch-interface-layer","filter":{"includes":["mobile","multitouch"]},"components":[{"type":"handler-logic"},{"type":"handler-render-dom"},{"type":"entity-container","entities":[{"type":"button-fullscreen"},{"type":"button-jump"},{"type":"button-pickaxe"},{"type":"button-left"},{"type":"button-right"},{"type":"gui"},{"type":"fps-counter"}],"childEvents":["gui-gem-collected","time-elapsed"]}]},"touch-interface-layer":{"id":"touch-interface-layer","filter":{"includes":["mobile","touch"],"excludes":["multitouch"]},"components":[{"type":"handler-logic"},{"type":"handler-render-dom"},{"type":"entity-container","entities":[{"type":"button-fullscreen"},{"type":"button-jump-left"},{"type":"button-jump-right"},{"type":"button-jump","properties":{"className":"game-button jump-center-button"}},{"type":"button-left"},{"type":"button-right"},{"type":"gui"},{"type":"fps-counter"}],"childEvents":["time-elapsed"]}]},"tile-layer":{"id":"tile-layer","components":[{"type":"render-tiles","spriteSheet":"import","imageMap":"import"},{"type":"collision-tiles","collisionMap":"import"}]},"render-layer":{"id":"render-layer","components":[{"type":"render-tiles","spriteSheet":"import","imageMap":"import"}]},"collision-layer":{"id":"collision-layer","components":[{"type":"collision-tiles","collisionMap":"import"}]},"button-fullscreen":{"id":"button-fullscreen","components":[{"type":"dom-element","element":"div","className":"button-fullscreen","onmouseup":"toggle-fullscreen","ontouchend":"toggle-fullscreen"},{"type":"fullscreen"}]},"button-jump":{"id":"button-jump","components":[{"type":"dom-element","element":"div","className":"game-button jump-button","onmousedown":"start-jump","ontouchstart":"start-jump","onmouseup":"stop-jump","ontouchend":"stop-jump","ontouchcancel":"stop-jump"},{"type":"broadcast-events","events":{"start-jump":"button-jump:down","stop-jump":"button-jump:up"}}]},"button-jump-left":{"id":"button-jump-left","components":[{"type":"dom-element","element":"div","className":"game-button jump-left-button","onmousedown":"start-jump","ontouchstart":"start-jump","onmouseup":"stop-jump","ontouchend":"stop-jump","ontouchcancel":"stop-jump"},{"type":"broadcast-events","events":{"start-jump":["button-jump:down","button-left:down"],"stop-jump":["button-jump:up","button-left:up"]}}]},"button-jump-right":{"id":"button-jump-right","components":[{"type":"dom-element","element":"div","className":"game-button jump-right-button","onmousedown":"start-jump","ontouchstart":"start-jump","onmouseup":"stop-jump","ontouchend":"stop-jump","ontouchcancel":"stop-jump"},{"type":"broadcast-events","events":{"start-jump":["button-jump:down","button-right:down"],"stop-jump":["button-jump:up","button-right:up"]}}]},"button-left":{"id":"button-left","components":[{"type":"dom-element","element":"div","className":"game-button go-left-button","onmousedown":"start-move","ontouchstart":"start-move","onmouseup":"stop-move","ontouchend":"stop-move","ontouchcancel":"stop-move"},{"type":"broadcast-events","events":{"start-move":"button-left:down","stop-move":"button-left:up"}}]},"button-play-game":{"id":"button-play-game","components":[{"type":"dom-element","element":"div","innerHTML":"Play Game","className":"menu-button","onmouseup":"new-scene","ontouchend":"new-scene"},{"type":"change-scene","scene":"scene-level-1","transition":"fade-to-black"}]},"button-right":{"id":"button-right","components":[{"type":"dom-element","element":"div","className":"game-button go-right-button","onmousedown":"start-move","ontouchstart":"start-move","onmouseup":"stop-move","ontouchend":"stop-move","ontouchcancel":"stop-move"},{"type":"broadcast-events","events":{"start-move":"button-right:down","stop-move":"button-right:up"}}]},"button-mute":{"id":"button-mute","components":[{"type":"logic-button","toggle":true,"state":"pressed"},{"type":"dom-element","element":"div","className":"game-button mute-button","updateClassName":true,"onmouseup":["audio-mute-toggle","mouseup"],"ontouchend":["audio-mute-toggle","mouseup"]},{"type":"audio"}],"properties":{"x":10,"y":10,"z":400,"width":400,"height":400}},"hero":{"id":"hero","components":[{"type":"entity-controller","controlMap":{"button-jump":"jump","key:z":"jump","key:space":"jump","key:up-arrow":"jump","key:w":"jump","key:left-arrow":"go-left","key:a":"go-left","button-left":"go-left","key:right-arrow":"go-right","key:d":"go-right","button-right":"go-right"}},{"type":"logic-gravity"},{"type":"logic-jump"},{"type":"logic-hero"},{"type":"logic-directional-movement","speed":2},{"type":"collision-basic","collisionType":"hero","solidCollisions":{"block":"hit-solid","dirt":"hit-solid","tiles":"hit-solid"}},{"type":"render-animation","mirror":"true","animationMap":{"falling":"jumping","moving":"walking","default":"standing"},"spriteSheet":{"framerate":15,"images":["mookie"],"frames":{"width":65,"height":83,"regY":82,"regX":33},"animations":{"standing":[2],"walking":{"frames":[3,0,1,2]},"jumping":{"frames":[0]}}}},{"type":"audio","audioMap":{"ground, moving":{"sound":"walk","loop":5000},"just-jumped":"jump"}}],"properties":{"alwaysOn":true,"z":200,"width":80,"height":240,"camera":"forward"}},"block":{"id":"block","components":[{"type":"logic-gravity"},{"type":"logic-pushable"},{"type":"collision-basic","collisionType":"block","solidCollisions":{"block":"hit-solid","dirt":"hit-solid","hero":["push-entity","hit-solid"],"tiles":"hit-solid","beetle":"hit-solid","briar":"hit-solid"}},{"type":"render-image","image":"sprites","source":{"width":72,"height":72,"y":432,"x":144},"regX":36,"regY":72}],"properties":{"z":50,"width":220,"height":240}},"progress-bar":{"id":"progress-bar","components":[{"type":"dom-element","element":"div","className":"progress-bar","innerHTML":"Loading..."},{"type":"entity-container","entities":[{"id":"container","components":[{"type":"change-scene","scene":"menu","message":"complete"},{"type":"asset-loader","useXHR":false}]}]}]},"level-portal":{"id":"level-portal","components":[{"type":"logic-portal"},{"type":"collision-basic","collisionType":"portal","immobile":true,"softCollisions":{"hero":"occupied-portal"}},{"type":"change-scene","transition":"fade-to-black"}],"properties":{"z":0}},"title-screen":{"id":"title-screen","components":[{"type":"dom-element","element":"div","className":"title-screen"}]},"gui":{"id":"gui","components":[{"type":"logic-gui"},{"type":"entity-container","entities":[{}],"childEvents":["handle-logic","handle-render","handle-render-load"]}]},"fps-counter":{"id":"fps-counter","components":[{"type":"logic-fps-counter"},{"type":"dom-element","className":"fps-counter","style":{"position":"absolute","left":"0.5em","top":"0.5em","color":"white","fontSize":"2em","fontWeight":"bold","fontFamily":"Arial","pointerEvents":"none","zIndex":11}}]},"ball":{"id":"ball","components":[{"type":"logic-gravity"},{"type":"collision-basic","collisionType":"ball","solidCollisions":{"ball":"hit-solid","hero":"hit-solid","tiles":"hit-solid"},"shapeType":"circle"},{"type":"render-debug"}],"properties":{"z":50,"width":240,"height":240}},"fancy-box":{"id":"fancy-box","components":[{"type":"collision-box2d","body":{"type":"dynamic","fixtureDefinition":{"density":1,"friction":0.5,"restitution":0.2},"shapes":[{"halfWidth":15,"halfHeight":15}]}},{"type":"render-image","image":"entities","source":{"width":30,"height":30,"y":0,"x":0},"regX":15,"regY":15,"rotate":true}],"properties":{}},"static-square-peg":{"id":"static-square-peg","components":[{"type":"collision-box2d","body":{"type":"static","fixtureDefinition":{"density":1,"friction":0.5,"restitution":0.2},"shapes":[{"halfWidth":15,"halfHeight":15}]}},{"type":"render-image","image":"entities","source":{"width":30,"height":30,"y":30,"x":0},"regX":15,"regY":15,"rotate":true}],"properties":{}},"static-round-peg":{"id":"static-round-peg","components":[{"type":"collision-box2d","body":{"type":"static","fixtureDefinition":{"density":1,"friction":0.5,"restitution":0.2},"shapes":[{"radius":10}]}},{"type":"render-image","image":"entities","source":{"width":30,"height":30,"y":0,"x":30},"regX":15,"regY":15,"rotate":true}],"properties":{}}},"scenes":{"load":{"layers":[{"id":"load-layer","components":[{"type":"handler-logic"},{"type":"handler-render-dom"},{"type":"entity-container","entities":[{"type":"title-screen"},{"type":"progress-bar"}],"childEvents":["link-entity"]}]}],"id":"load"},"menu":{"layers":[{"id":"menu-layer","components":[{"type":"handler-logic"},{"type":"handler-render-dom"},{"type":"handler-controller"},{"type":"entity-container","entities":[{"type":"title-screen"},{"type":"button-play-game"}]}]},{"id":"enable-ios-audio-layer","filter":{"includes":["iOS"]},"components":[{"type":"enable-ios-audio","audioId":"combined"}]}],"id":"menu"},"scene-level-1":{"layers":[{"type":"action-layer"}],"id":"scene-level-1"}},"levels":{"level-1":{"height":16,"layers":[{"data":[5,8,6,7,7,5,5,5,8,7,7,7,8,5,7,6,6,7,8,8,5,5,5,8,6,7,7,5,5,5,8,7,7,7,8,5,7,6,6,7,8,8,5,5,5,8,6,7,7,5,5,5,8,7,7,7,8,5,7,6,6,7,8,8,5,5,5,8,6,7,7,5,5,5,8,7,7,7,8,5,7,6,6,7,8,8,5,5,5,8,6,7,7,5,5,5,8,7,7,7,8,5,7,6,6,7,8,8,5,5,5,8,6,7,7,5,5,5,8,7,7,7,8,5,7,6,6,7,8,8,5,5,5,8,6,7,7,5,5,5,8,7,7,7,8,5,7,6,6,7,8,8,5,5,5,8,6,7,7,5,5,5,8,7,7,7,8,5,7,6,6,7,8,8,5,5,5,8,6,7,7,5,5,5,8,7,7,7,8,5,7,6,6,7,8,8,5,5,5,8,6,7,7,5,5,5,8,7,7,7,8,5,7,6,6,7,8,8,5,5,5,8,6,7,7,5,5,5,8,7,7,7,8,5,7,6,6,7,8,8,5,5,5,8,6,7,7,5,5,5,8,7,7,7,8,5,7,6,6,7,8,8,5,5,5,8,6,7,7,5,5,5,8,7,7,7,8,5,7,6,6,7,8,8,5,5,5,8,6,7,7,5,5,5,8,7,7,7,8,5,7,6,6,7,8,8,5,5,5,8,6,7,7,5,5,5,8,7,7,7,8,5,7,6,6,7,8,8,5,5,5,8,6,7,7,5,5,5,8,7,7,7,8,5,7,6,6,7,8,8,5,5],"height":16,"name":"background","opacity":1,"type":"tilelayer","visible":true,"width":22,"x":0,"y":0},{"height":16,"name":"entities","objects":[{"gid":2,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":133,"y":183},{"gid":2,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":224,"y":213},{"gid":2,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":258,"y":289},{"gid":2,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":225,"y":371},{"gid":2,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":336,"y":181},{"gid":3,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":390,"y":300},{"gid":3,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":466,"y":245},{"gid":3,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":45,"y":302},{"gid":3,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":114,"y":391},{"gid":3,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":175,"y":467},{"gid":3,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":305,"y":449},{"gid":1,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":60,"y":60},{"gid":1,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":150,"y":90},{"gid":1,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":240,"y":90},{"gid":1,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":222,"y":34},{"gid":1,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":334,"y":61},{"gid":1,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":447,"y":60}],"opacity":1,"type":"objectgroup","visible":true,"width":22,"x":0,"y":0}],"orientation":"orthogonal","properties":{},"tileheight":30,"tilesets":[{"firstgid":1,"image":"../game/images/entities.png","imageheight":60,"imagewidth":60,"margin":0,"name":"entities","properties":{},"spacing":0,"tileheight":30,"tileproperties":{"0":{"entity":"fancy-box"},"1":{"entity":"static-round-peg"},"2":{"entity":"static-square-peg"}},"tilewidth":30},{"firstgid":5,"image":"../game/images/tiles.png","imageheight":60,"imagewidth":60,"margin":0,"name":"tiles","properties":{},"spacing":0,"tileheight":30,"tilewidth":30}],"tilewidth":30,"version":1,"width":22,"id":"level-1"}},"debug":true};

/*--------------------------------------------------
 *   Box2d - ../game/Box2dWeb-2.1.a.3.min.js
 */
var Box2D={};
(function(F,G){function K(){}if(!(Object.prototype.defineProperty instanceof Function)&&Object.prototype.__defineGetter__ instanceof Function&&Object.prototype.__defineSetter__ instanceof Function)Object.defineProperty=function(y,w,A){A.get instanceof Function&&y.__defineGetter__(w,A.get);A.set instanceof Function&&y.__defineSetter__(w,A.set)};F.inherit=function(y,w){K.prototype=w.prototype;y.prototype=new K;y.prototype.constructor=y};F.generateCallback=function(y,w){return function(){w.apply(y,arguments)}};
F.NVector=function(y){if(y===G)y=0;for(var w=Array(y||0),A=0;A<y;++A)w[A]=0;return w};F.is=function(y,w){if(y===null)return false;if(w instanceof Function&&y instanceof w)return true;if(y.constructor.__implements!=G&&y.constructor.__implements[w])return true;return false};F.parseUInt=function(y){return Math.abs(parseInt(y))}})(Box2D);var Vector=Array,Vector_a2j_Number=Box2D.NVector;if(typeof Box2D==="undefined")Box2D={};if(typeof Box2D.Collision==="undefined")Box2D.Collision={};
if(typeof Box2D.Collision.Shapes==="undefined")Box2D.Collision.Shapes={};if(typeof Box2D.Common==="undefined")Box2D.Common={};if(typeof Box2D.Common.Math==="undefined")Box2D.Common.Math={};if(typeof Box2D.Dynamics==="undefined")Box2D.Dynamics={};if(typeof Box2D.Dynamics.Contacts==="undefined")Box2D.Dynamics.Contacts={};if(typeof Box2D.Dynamics.Controllers==="undefined")Box2D.Dynamics.Controllers={};if(typeof Box2D.Dynamics.Joints==="undefined")Box2D.Dynamics.Joints={};
(function(){function F(){F.b2AABB.apply(this,arguments)}function G(){G.b2Bound.apply(this,arguments)}function K(){K.b2BoundValues.apply(this,arguments);this.constructor===K&&this.b2BoundValues.apply(this,arguments)}function y(){y.b2Collision.apply(this,arguments)}function w(){w.b2ContactID.apply(this,arguments);this.constructor===w&&this.b2ContactID.apply(this,arguments)}function A(){A.b2ContactPoint.apply(this,arguments)}function U(){U.b2Distance.apply(this,arguments)}function p(){p.b2DistanceInput.apply(this,
arguments)}function B(){B.b2DistanceOutput.apply(this,arguments)}function Q(){Q.b2DistanceProxy.apply(this,arguments)}function V(){V.b2DynamicTree.apply(this,arguments);this.constructor===V&&this.b2DynamicTree.apply(this,arguments)}function M(){M.b2DynamicTreeBroadPhase.apply(this,arguments)}function L(){L.b2DynamicTreeNode.apply(this,arguments)}function I(){I.b2DynamicTreePair.apply(this,arguments)}function W(){W.b2Manifold.apply(this,arguments);this.constructor===W&&this.b2Manifold.apply(this,arguments)}
function Y(){Y.b2ManifoldPoint.apply(this,arguments);this.constructor===Y&&this.b2ManifoldPoint.apply(this,arguments)}function k(){k.b2Point.apply(this,arguments)}function z(){z.b2RayCastInput.apply(this,arguments);this.constructor===z&&this.b2RayCastInput.apply(this,arguments)}function u(){u.b2RayCastOutput.apply(this,arguments)}function D(){D.b2Segment.apply(this,arguments)}function H(){H.b2SeparationFunction.apply(this,arguments)}function O(){O.b2Simplex.apply(this,arguments);this.constructor===
O&&this.b2Simplex.apply(this,arguments)}function E(){E.b2SimplexCache.apply(this,arguments)}function R(){R.b2SimplexVertex.apply(this,arguments)}function N(){N.b2TimeOfImpact.apply(this,arguments)}function S(){S.b2TOIInput.apply(this,arguments)}function aa(){aa.b2WorldManifold.apply(this,arguments);this.constructor===aa&&this.b2WorldManifold.apply(this,arguments)}function Z(){Z.ClipVertex.apply(this,arguments)}function d(){d.Features.apply(this,arguments)}function h(){h.b2CircleShape.apply(this,arguments);
this.constructor===h&&this.b2CircleShape.apply(this,arguments)}function l(){l.b2EdgeChainDef.apply(this,arguments);this.constructor===l&&this.b2EdgeChainDef.apply(this,arguments)}function j(){j.b2EdgeShape.apply(this,arguments);this.constructor===j&&this.b2EdgeShape.apply(this,arguments)}function o(){o.b2MassData.apply(this,arguments)}function q(){q.b2PolygonShape.apply(this,arguments);this.constructor===q&&this.b2PolygonShape.apply(this,arguments)}function n(){n.b2Shape.apply(this,arguments);this.constructor===
n&&this.b2Shape.apply(this,arguments)}function a(){a.b2Color.apply(this,arguments);this.constructor===a&&this.b2Color.apply(this,arguments)}function c(){c.b2Settings.apply(this,arguments)}function g(){g.b2Mat22.apply(this,arguments);this.constructor===g&&this.b2Mat22.apply(this,arguments)}function b(){b.b2Mat33.apply(this,arguments);this.constructor===b&&this.b2Mat33.apply(this,arguments)}function e(){e.b2Math.apply(this,arguments)}function f(){f.b2Sweep.apply(this,arguments)}function m(){m.b2Transform.apply(this,
arguments);this.constructor===m&&this.b2Transform.apply(this,arguments)}function r(){r.b2Vec2.apply(this,arguments);this.constructor===r&&this.b2Vec2.apply(this,arguments)}function s(){s.b2Vec3.apply(this,arguments);this.constructor===s&&this.b2Vec3.apply(this,arguments)}function v(){v.b2Body.apply(this,arguments);this.constructor===v&&this.b2Body.apply(this,arguments)}function t(){t.b2BodyDef.apply(this,arguments);this.constructor===t&&this.b2BodyDef.apply(this,arguments)}function x(){x.b2ContactFilter.apply(this,
arguments)}function C(){C.b2ContactImpulse.apply(this,arguments)}function J(){J.b2ContactListener.apply(this,arguments)}function T(){T.b2ContactManager.apply(this,arguments);this.constructor===T&&this.b2ContactManager.apply(this,arguments)}function P(){P.b2DebugDraw.apply(this,arguments);this.constructor===P&&this.b2DebugDraw.apply(this,arguments)}function X(){X.b2DestructionListener.apply(this,arguments)}function $(){$.b2FilterData.apply(this,arguments)}function ba(){ba.b2Fixture.apply(this,arguments);
this.constructor===ba&&this.b2Fixture.apply(this,arguments)}function ca(){ca.b2FixtureDef.apply(this,arguments);this.constructor===ca&&this.b2FixtureDef.apply(this,arguments)}function da(){da.b2Island.apply(this,arguments);this.constructor===da&&this.b2Island.apply(this,arguments)}function Fa(){Fa.b2TimeStep.apply(this,arguments)}function ea(){ea.b2World.apply(this,arguments);this.constructor===ea&&this.b2World.apply(this,arguments)}function Ga(){Ga.b2CircleContact.apply(this,arguments)}function fa(){fa.b2Contact.apply(this,
arguments);this.constructor===fa&&this.b2Contact.apply(this,arguments)}function ga(){ga.b2ContactConstraint.apply(this,arguments);this.constructor===ga&&this.b2ContactConstraint.apply(this,arguments)}function Ha(){Ha.b2ContactConstraintPoint.apply(this,arguments)}function Ia(){Ia.b2ContactEdge.apply(this,arguments)}function ha(){ha.b2ContactFactory.apply(this,arguments);this.constructor===ha&&this.b2ContactFactory.apply(this,arguments)}function Ja(){Ja.b2ContactRegister.apply(this,arguments)}function Ka(){Ka.b2ContactResult.apply(this,
arguments)}function ia(){ia.b2ContactSolver.apply(this,arguments);this.constructor===ia&&this.b2ContactSolver.apply(this,arguments)}function La(){La.b2EdgeAndCircleContact.apply(this,arguments)}function ja(){ja.b2NullContact.apply(this,arguments);this.constructor===ja&&this.b2NullContact.apply(this,arguments)}function Ma(){Ma.b2PolyAndCircleContact.apply(this,arguments)}function Na(){Na.b2PolyAndEdgeContact.apply(this,arguments)}function Oa(){Oa.b2PolygonContact.apply(this,arguments)}function ka(){ka.b2PositionSolverManifold.apply(this,
arguments);this.constructor===ka&&this.b2PositionSolverManifold.apply(this,arguments)}function Pa(){Pa.b2BuoyancyController.apply(this,arguments)}function Qa(){Qa.b2ConstantAccelController.apply(this,arguments)}function Ra(){Ra.b2ConstantForceController.apply(this,arguments)}function Sa(){Sa.b2Controller.apply(this,arguments)}function Ta(){Ta.b2ControllerEdge.apply(this,arguments)}function Ua(){Ua.b2GravityController.apply(this,arguments)}function Va(){Va.b2TensorDampingController.apply(this,arguments)}
function la(){la.b2DistanceJoint.apply(this,arguments);this.constructor===la&&this.b2DistanceJoint.apply(this,arguments)}function ma(){ma.b2DistanceJointDef.apply(this,arguments);this.constructor===ma&&this.b2DistanceJointDef.apply(this,arguments)}function na(){na.b2FrictionJoint.apply(this,arguments);this.constructor===na&&this.b2FrictionJoint.apply(this,arguments)}function oa(){oa.b2FrictionJointDef.apply(this,arguments);this.constructor===oa&&this.b2FrictionJointDef.apply(this,arguments)}function pa(){pa.b2GearJoint.apply(this,
arguments);this.constructor===pa&&this.b2GearJoint.apply(this,arguments)}function qa(){qa.b2GearJointDef.apply(this,arguments);this.constructor===qa&&this.b2GearJointDef.apply(this,arguments)}function Wa(){Wa.b2Jacobian.apply(this,arguments)}function ra(){ra.b2Joint.apply(this,arguments);this.constructor===ra&&this.b2Joint.apply(this,arguments)}function sa(){sa.b2JointDef.apply(this,arguments);this.constructor===sa&&this.b2JointDef.apply(this,arguments)}function Xa(){Xa.b2JointEdge.apply(this,arguments)}
function ta(){ta.b2LineJoint.apply(this,arguments);this.constructor===ta&&this.b2LineJoint.apply(this,arguments)}function ua(){ua.b2LineJointDef.apply(this,arguments);this.constructor===ua&&this.b2LineJointDef.apply(this,arguments)}function va(){va.b2MouseJoint.apply(this,arguments);this.constructor===va&&this.b2MouseJoint.apply(this,arguments)}function wa(){wa.b2MouseJointDef.apply(this,arguments);this.constructor===wa&&this.b2MouseJointDef.apply(this,arguments)}function xa(){xa.b2PrismaticJoint.apply(this,
arguments);this.constructor===xa&&this.b2PrismaticJoint.apply(this,arguments)}function ya(){ya.b2PrismaticJointDef.apply(this,arguments);this.constructor===ya&&this.b2PrismaticJointDef.apply(this,arguments)}function za(){za.b2PulleyJoint.apply(this,arguments);this.constructor===za&&this.b2PulleyJoint.apply(this,arguments)}function Aa(){Aa.b2PulleyJointDef.apply(this,arguments);this.constructor===Aa&&this.b2PulleyJointDef.apply(this,arguments)}function Ba(){Ba.b2RevoluteJoint.apply(this,arguments);
this.constructor===Ba&&this.b2RevoluteJoint.apply(this,arguments)}function Ca(){Ca.b2RevoluteJointDef.apply(this,arguments);this.constructor===Ca&&this.b2RevoluteJointDef.apply(this,arguments)}function Da(){Da.b2WeldJoint.apply(this,arguments);this.constructor===Da&&this.b2WeldJoint.apply(this,arguments)}function Ea(){Ea.b2WeldJointDef.apply(this,arguments);this.constructor===Ea&&this.b2WeldJointDef.apply(this,arguments)}Box2D.Collision.IBroadPhase="Box2D.Collision.IBroadPhase";Box2D.Collision.b2AABB=
F;Box2D.Collision.b2Bound=G;Box2D.Collision.b2BoundValues=K;Box2D.Collision.b2Collision=y;Box2D.Collision.b2ContactID=w;Box2D.Collision.b2ContactPoint=A;Box2D.Collision.b2Distance=U;Box2D.Collision.b2DistanceInput=p;Box2D.Collision.b2DistanceOutput=B;Box2D.Collision.b2DistanceProxy=Q;Box2D.Collision.b2DynamicTree=V;Box2D.Collision.b2DynamicTreeBroadPhase=M;Box2D.Collision.b2DynamicTreeNode=L;Box2D.Collision.b2DynamicTreePair=I;Box2D.Collision.b2Manifold=W;Box2D.Collision.b2ManifoldPoint=Y;Box2D.Collision.b2Point=
k;Box2D.Collision.b2RayCastInput=z;Box2D.Collision.b2RayCastOutput=u;Box2D.Collision.b2Segment=D;Box2D.Collision.b2SeparationFunction=H;Box2D.Collision.b2Simplex=O;Box2D.Collision.b2SimplexCache=E;Box2D.Collision.b2SimplexVertex=R;Box2D.Collision.b2TimeOfImpact=N;Box2D.Collision.b2TOIInput=S;Box2D.Collision.b2WorldManifold=aa;Box2D.Collision.ClipVertex=Z;Box2D.Collision.Features=d;Box2D.Collision.Shapes.b2CircleShape=h;Box2D.Collision.Shapes.b2EdgeChainDef=l;Box2D.Collision.Shapes.b2EdgeShape=j;Box2D.Collision.Shapes.b2MassData=
o;Box2D.Collision.Shapes.b2PolygonShape=q;Box2D.Collision.Shapes.b2Shape=n;Box2D.Common.b2internal="Box2D.Common.b2internal";Box2D.Common.b2Color=a;Box2D.Common.b2Settings=c;Box2D.Common.Math.b2Mat22=g;Box2D.Common.Math.b2Mat33=b;Box2D.Common.Math.b2Math=e;Box2D.Common.Math.b2Sweep=f;Box2D.Common.Math.b2Transform=m;Box2D.Common.Math.b2Vec2=r;Box2D.Common.Math.b2Vec3=s;Box2D.Dynamics.b2Body=v;Box2D.Dynamics.b2BodyDef=t;Box2D.Dynamics.b2ContactFilter=x;Box2D.Dynamics.b2ContactImpulse=C;Box2D.Dynamics.b2ContactListener=
J;Box2D.Dynamics.b2ContactManager=T;Box2D.Dynamics.b2DebugDraw=P;Box2D.Dynamics.b2DestructionListener=X;Box2D.Dynamics.b2FilterData=$;Box2D.Dynamics.b2Fixture=ba;Box2D.Dynamics.b2FixtureDef=ca;Box2D.Dynamics.b2Island=da;Box2D.Dynamics.b2TimeStep=Fa;Box2D.Dynamics.b2World=ea;Box2D.Dynamics.Contacts.b2CircleContact=Ga;Box2D.Dynamics.Contacts.b2Contact=fa;Box2D.Dynamics.Contacts.b2ContactConstraint=ga;Box2D.Dynamics.Contacts.b2ContactConstraintPoint=Ha;Box2D.Dynamics.Contacts.b2ContactEdge=Ia;Box2D.Dynamics.Contacts.b2ContactFactory=
ha;Box2D.Dynamics.Contacts.b2ContactRegister=Ja;Box2D.Dynamics.Contacts.b2ContactResult=Ka;Box2D.Dynamics.Contacts.b2ContactSolver=ia;Box2D.Dynamics.Contacts.b2EdgeAndCircleContact=La;Box2D.Dynamics.Contacts.b2NullContact=ja;Box2D.Dynamics.Contacts.b2PolyAndCircleContact=Ma;Box2D.Dynamics.Contacts.b2PolyAndEdgeContact=Na;Box2D.Dynamics.Contacts.b2PolygonContact=Oa;Box2D.Dynamics.Contacts.b2PositionSolverManifold=ka;Box2D.Dynamics.Controllers.b2BuoyancyController=Pa;Box2D.Dynamics.Controllers.b2ConstantAccelController=
Qa;Box2D.Dynamics.Controllers.b2ConstantForceController=Ra;Box2D.Dynamics.Controllers.b2Controller=Sa;Box2D.Dynamics.Controllers.b2ControllerEdge=Ta;Box2D.Dynamics.Controllers.b2GravityController=Ua;Box2D.Dynamics.Controllers.b2TensorDampingController=Va;Box2D.Dynamics.Joints.b2DistanceJoint=la;Box2D.Dynamics.Joints.b2DistanceJointDef=ma;Box2D.Dynamics.Joints.b2FrictionJoint=na;Box2D.Dynamics.Joints.b2FrictionJointDef=oa;Box2D.Dynamics.Joints.b2GearJoint=pa;Box2D.Dynamics.Joints.b2GearJointDef=qa;
Box2D.Dynamics.Joints.b2Jacobian=Wa;Box2D.Dynamics.Joints.b2Joint=ra;Box2D.Dynamics.Joints.b2JointDef=sa;Box2D.Dynamics.Joints.b2JointEdge=Xa;Box2D.Dynamics.Joints.b2LineJoint=ta;Box2D.Dynamics.Joints.b2LineJointDef=ua;Box2D.Dynamics.Joints.b2MouseJoint=va;Box2D.Dynamics.Joints.b2MouseJointDef=wa;Box2D.Dynamics.Joints.b2PrismaticJoint=xa;Box2D.Dynamics.Joints.b2PrismaticJointDef=ya;Box2D.Dynamics.Joints.b2PulleyJoint=za;Box2D.Dynamics.Joints.b2PulleyJointDef=Aa;Box2D.Dynamics.Joints.b2RevoluteJoint=
Ba;Box2D.Dynamics.Joints.b2RevoluteJointDef=Ca;Box2D.Dynamics.Joints.b2WeldJoint=Da;Box2D.Dynamics.Joints.b2WeldJointDef=Ea})();Box2D.postDefs=[];
(function(){var F=Box2D.Collision.Shapes.b2CircleShape,G=Box2D.Collision.Shapes.b2PolygonShape,K=Box2D.Collision.Shapes.b2Shape,y=Box2D.Common.b2Settings,w=Box2D.Common.Math.b2Math,A=Box2D.Common.Math.b2Sweep,U=Box2D.Common.Math.b2Transform,p=Box2D.Common.Math.b2Vec2,B=Box2D.Collision.b2AABB,Q=Box2D.Collision.b2Bound,V=Box2D.Collision.b2BoundValues,M=Box2D.Collision.b2Collision,L=Box2D.Collision.b2ContactID,I=Box2D.Collision.b2ContactPoint,W=Box2D.Collision.b2Distance,Y=Box2D.Collision.b2DistanceInput,
k=Box2D.Collision.b2DistanceOutput,z=Box2D.Collision.b2DistanceProxy,u=Box2D.Collision.b2DynamicTree,D=Box2D.Collision.b2DynamicTreeBroadPhase,H=Box2D.Collision.b2DynamicTreeNode,O=Box2D.Collision.b2DynamicTreePair,E=Box2D.Collision.b2Manifold,R=Box2D.Collision.b2ManifoldPoint,N=Box2D.Collision.b2Point,S=Box2D.Collision.b2RayCastInput,aa=Box2D.Collision.b2RayCastOutput,Z=Box2D.Collision.b2Segment,d=Box2D.Collision.b2SeparationFunction,h=Box2D.Collision.b2Simplex,l=Box2D.Collision.b2SimplexCache,j=
Box2D.Collision.b2SimplexVertex,o=Box2D.Collision.b2TimeOfImpact,q=Box2D.Collision.b2TOIInput,n=Box2D.Collision.b2WorldManifold,a=Box2D.Collision.ClipVertex,c=Box2D.Collision.Features,g=Box2D.Collision.IBroadPhase;B.b2AABB=function(){this.lowerBound=new p;this.upperBound=new p};B.prototype.IsValid=function(){var b=this.upperBound.y-this.lowerBound.y;return b=(b=this.upperBound.x-this.lowerBound.x>=0&&b>=0)&&this.lowerBound.IsValid()&&this.upperBound.IsValid()};B.prototype.GetCenter=function(){return new p((this.lowerBound.x+
this.upperBound.x)/2,(this.lowerBound.y+this.upperBound.y)/2)};B.prototype.GetExtents=function(){return new p((this.upperBound.x-this.lowerBound.x)/2,(this.upperBound.y-this.lowerBound.y)/2)};B.prototype.Contains=function(b){var e=true;return e=(e=(e=(e=e&&this.lowerBound.x<=b.lowerBound.x)&&this.lowerBound.y<=b.lowerBound.y)&&b.upperBound.x<=this.upperBound.x)&&b.upperBound.y<=this.upperBound.y};B.prototype.RayCast=function(b,e){var f=-Number.MAX_VALUE,m=Number.MAX_VALUE,r=e.p1.x,s=e.p1.y,v=e.p2.x-
e.p1.x,t=e.p2.y-e.p1.y,x=Math.abs(t),C=b.normal,J=0,T=0,P=J=0;P=0;if(Math.abs(v)<Number.MIN_VALUE){if(r<this.lowerBound.x||this.upperBound.x<r)return false}else{J=1/v;T=(this.lowerBound.x-r)*J;J=(this.upperBound.x-r)*J;P=-1;if(T>J){P=T;T=J;J=P;P=1}if(T>f){C.x=P;C.y=0;f=T}m=Math.min(m,J);if(f>m)return false}if(x<Number.MIN_VALUE){if(s<this.lowerBound.y||this.upperBound.y<s)return false}else{J=1/t;T=(this.lowerBound.y-s)*J;J=(this.upperBound.y-s)*J;P=-1;if(T>J){P=T;T=J;J=P;P=1}if(T>f){C.y=P;C.x=0;f=
T}m=Math.min(m,J);if(f>m)return false}b.fraction=f;return true};B.prototype.TestOverlap=function(b){var e=b.lowerBound.y-this.upperBound.y,f=this.lowerBound.y-b.upperBound.y;if(b.lowerBound.x-this.upperBound.x>0||e>0)return false;if(this.lowerBound.x-b.upperBound.x>0||f>0)return false;return true};B.Combine=function(b,e){var f=new B;f.Combine(b,e);return f};B.prototype.Combine=function(b,e){this.lowerBound.x=Math.min(b.lowerBound.x,e.lowerBound.x);this.lowerBound.y=Math.min(b.lowerBound.y,e.lowerBound.y);
this.upperBound.x=Math.max(b.upperBound.x,e.upperBound.x);this.upperBound.y=Math.max(b.upperBound.y,e.upperBound.y)};Q.b2Bound=function(){};Q.prototype.IsLower=function(){return(this.value&1)==0};Q.prototype.IsUpper=function(){return(this.value&1)==1};Q.prototype.Swap=function(b){var e=this.value,f=this.proxy,m=this.stabbingCount;this.value=b.value;this.proxy=b.proxy;this.stabbingCount=b.stabbingCount;b.value=e;b.proxy=f;b.stabbingCount=m};V.b2BoundValues=function(){};V.prototype.b2BoundValues=function(){this.lowerValues=
new Vector_a2j_Number;this.lowerValues[0]=0;this.lowerValues[1]=0;this.upperValues=new Vector_a2j_Number;this.upperValues[0]=0;this.upperValues[1]=0};M.b2Collision=function(){};M.ClipSegmentToLine=function(b,e,f,m){if(m===undefined)m=0;var r,s=0;r=e[0];var v=r.v;r=e[1];var t=r.v,x=f.x*v.x+f.y*v.y-m;r=f.x*t.x+f.y*t.y-m;x<=0&&b[s++].Set(e[0]);r<=0&&b[s++].Set(e[1]);if(x*r<0){f=x/(x-r);r=b[s];r=r.v;r.x=v.x+f*(t.x-v.x);r.y=v.y+f*(t.y-v.y);r=b[s];r.id=(x>0?e[0]:e[1]).id;++s}return s};M.EdgeSeparation=
function(b,e,f,m,r){if(f===undefined)f=0;parseInt(b.m_vertexCount);var s=b.m_vertices;b=b.m_normals;var v=parseInt(m.m_vertexCount),t=m.m_vertices,x,C;x=e.R;C=b[f];b=x.col1.x*C.x+x.col2.x*C.y;m=x.col1.y*C.x+x.col2.y*C.y;x=r.R;var J=x.col1.x*b+x.col1.y*m;x=x.col2.x*b+x.col2.y*m;for(var T=0,P=Number.MAX_VALUE,X=0;X<v;++X){C=t[X];C=C.x*J+C.y*x;if(C<P){P=C;T=X}}C=s[f];x=e.R;f=e.position.x+(x.col1.x*C.x+x.col2.x*C.y);e=e.position.y+(x.col1.y*C.x+x.col2.y*C.y);C=t[T];x=r.R;s=r.position.x+(x.col1.x*C.x+
x.col2.x*C.y);r=r.position.y+(x.col1.y*C.x+x.col2.y*C.y);s-=f;r-=e;return s*b+r*m};M.FindMaxSeparation=function(b,e,f,m,r){var s=parseInt(e.m_vertexCount),v=e.m_normals,t,x;x=r.R;t=m.m_centroid;var C=r.position.x+(x.col1.x*t.x+x.col2.x*t.y),J=r.position.y+(x.col1.y*t.x+x.col2.y*t.y);x=f.R;t=e.m_centroid;C-=f.position.x+(x.col1.x*t.x+x.col2.x*t.y);J-=f.position.y+(x.col1.y*t.x+x.col2.y*t.y);x=C*f.R.col1.x+J*f.R.col1.y;J=C*f.R.col2.x+J*f.R.col2.y;C=0;for(var T=-Number.MAX_VALUE,P=0;P<s;++P){t=v[P];
t=t.x*x+t.y*J;if(t>T){T=t;C=P}}v=M.EdgeSeparation(e,f,C,m,r);t=parseInt(C-1>=0?C-1:s-1);x=M.EdgeSeparation(e,f,t,m,r);J=parseInt(C+1<s?C+1:0);T=M.EdgeSeparation(e,f,J,m,r);var X=P=0,$=0;if(x>v&&x>T){$=-1;P=t;X=x}else if(T>v){$=1;P=J;X=T}else{b[0]=C;return v}for(;;){C=$==-1?P-1>=0?P-1:s-1:P+1<s?P+1:0;v=M.EdgeSeparation(e,f,C,m,r);if(v>X){P=C;X=v}else break}b[0]=P;return X};M.FindIncidentEdge=function(b,e,f,m,r,s){if(m===undefined)m=0;parseInt(e.m_vertexCount);var v=e.m_normals,t=parseInt(r.m_vertexCount);
e=r.m_vertices;r=r.m_normals;var x;x=f.R;f=v[m];v=x.col1.x*f.x+x.col2.x*f.y;var C=x.col1.y*f.x+x.col2.y*f.y;x=s.R;f=x.col1.x*v+x.col1.y*C;C=x.col2.x*v+x.col2.y*C;v=f;x=0;for(var J=Number.MAX_VALUE,T=0;T<t;++T){f=r[T];f=v*f.x+C*f.y;if(f<J){J=f;x=T}}r=parseInt(x);v=parseInt(r+1<t?r+1:0);t=b[0];f=e[r];x=s.R;t.v.x=s.position.x+(x.col1.x*f.x+x.col2.x*f.y);t.v.y=s.position.y+(x.col1.y*f.x+x.col2.y*f.y);t.id.features.referenceEdge=m;t.id.features.incidentEdge=r;t.id.features.incidentVertex=0;t=b[1];f=e[v];
x=s.R;t.v.x=s.position.x+(x.col1.x*f.x+x.col2.x*f.y);t.v.y=s.position.y+(x.col1.y*f.x+x.col2.y*f.y);t.id.features.referenceEdge=m;t.id.features.incidentEdge=v;t.id.features.incidentVertex=1};M.MakeClipPointVector=function(){var b=new Vector(2);b[0]=new a;b[1]=new a;return b};M.CollidePolygons=function(b,e,f,m,r){var s;b.m_pointCount=0;var v=e.m_radius+m.m_radius;s=0;M.s_edgeAO[0]=s;var t=M.FindMaxSeparation(M.s_edgeAO,e,f,m,r);s=M.s_edgeAO[0];if(!(t>v)){var x=0;M.s_edgeBO[0]=x;var C=M.FindMaxSeparation(M.s_edgeBO,
m,r,e,f);x=M.s_edgeBO[0];if(!(C>v)){var J=0,T=0;if(C>0.98*t+0.0010){t=m;m=e;e=r;f=f;J=x;b.m_type=E.e_faceB;T=1}else{t=e;m=m;e=f;f=r;J=s;b.m_type=E.e_faceA;T=0}s=M.s_incidentEdge;M.FindIncidentEdge(s,t,e,J,m,f);x=parseInt(t.m_vertexCount);r=t.m_vertices;t=r[J];var P;P=J+1<x?r[parseInt(J+1)]:r[0];J=M.s_localTangent;J.Set(P.x-t.x,P.y-t.y);J.Normalize();r=M.s_localNormal;r.x=J.y;r.y=-J.x;m=M.s_planePoint;m.Set(0.5*(t.x+P.x),0.5*(t.y+P.y));C=M.s_tangent;x=e.R;C.x=x.col1.x*J.x+x.col2.x*J.y;C.y=x.col1.y*
J.x+x.col2.y*J.y;var X=M.s_tangent2;X.x=-C.x;X.y=-C.y;J=M.s_normal;J.x=C.y;J.y=-C.x;var $=M.s_v11,ba=M.s_v12;$.x=e.position.x+(x.col1.x*t.x+x.col2.x*t.y);$.y=e.position.y+(x.col1.y*t.x+x.col2.y*t.y);ba.x=e.position.x+(x.col1.x*P.x+x.col2.x*P.y);ba.y=e.position.y+(x.col1.y*P.x+x.col2.y*P.y);e=J.x*$.x+J.y*$.y;x=C.x*ba.x+C.y*ba.y+v;P=M.s_clipPoints1;t=M.s_clipPoints2;ba=0;ba=M.ClipSegmentToLine(P,s,X,-C.x*$.x-C.y*$.y+v);if(!(ba<2)){ba=M.ClipSegmentToLine(t,P,C,x);if(!(ba<2)){b.m_localPlaneNormal.SetV(r);
b.m_localPoint.SetV(m);for(m=r=0;m<y.b2_maxManifoldPoints;++m){s=t[m];if(J.x*s.v.x+J.y*s.v.y-e<=v){C=b.m_points[r];x=f.R;X=s.v.x-f.position.x;$=s.v.y-f.position.y;C.m_localPoint.x=X*x.col1.x+$*x.col1.y;C.m_localPoint.y=X*x.col2.x+$*x.col2.y;C.m_id.Set(s.id);C.m_id.features.flip=T;++r}}b.m_pointCount=r}}}}};M.CollideCircles=function(b,e,f,m,r){b.m_pointCount=0;var s,v;s=f.R;v=e.m_p;var t=f.position.x+(s.col1.x*v.x+s.col2.x*v.y);f=f.position.y+(s.col1.y*v.x+s.col2.y*v.y);s=r.R;v=m.m_p;t=r.position.x+
(s.col1.x*v.x+s.col2.x*v.y)-t;r=r.position.y+(s.col1.y*v.x+s.col2.y*v.y)-f;s=e.m_radius+m.m_radius;if(!(t*t+r*r>s*s)){b.m_type=E.e_circles;b.m_localPoint.SetV(e.m_p);b.m_localPlaneNormal.SetZero();b.m_pointCount=1;b.m_points[0].m_localPoint.SetV(m.m_p);b.m_points[0].m_id.key=0}};M.CollidePolygonAndCircle=function(b,e,f,m,r){var s=b.m_pointCount=0,v=0,t,x;x=r.R;t=m.m_p;var C=r.position.y+(x.col1.y*t.x+x.col2.y*t.y);s=r.position.x+(x.col1.x*t.x+x.col2.x*t.y)-f.position.x;v=C-f.position.y;x=f.R;f=s*
x.col1.x+v*x.col1.y;x=s*x.col2.x+v*x.col2.y;var J=0;C=-Number.MAX_VALUE;r=e.m_radius+m.m_radius;var T=parseInt(e.m_vertexCount),P=e.m_vertices;e=e.m_normals;for(var X=0;X<T;++X){t=P[X];s=f-t.x;v=x-t.y;t=e[X];s=t.x*s+t.y*v;if(s>r)return;if(s>C){C=s;J=X}}s=parseInt(J);v=parseInt(s+1<T?s+1:0);t=P[s];P=P[v];if(C<Number.MIN_VALUE){b.m_pointCount=1;b.m_type=E.e_faceA;b.m_localPlaneNormal.SetV(e[J]);b.m_localPoint.x=0.5*(t.x+P.x);b.m_localPoint.y=0.5*(t.y+P.y)}else{C=(f-P.x)*(t.x-P.x)+(x-P.y)*(t.y-P.y);
if((f-t.x)*(P.x-t.x)+(x-t.y)*(P.y-t.y)<=0){if((f-t.x)*(f-t.x)+(x-t.y)*(x-t.y)>r*r)return;b.m_pointCount=1;b.m_type=E.e_faceA;b.m_localPlaneNormal.x=f-t.x;b.m_localPlaneNormal.y=x-t.y;b.m_localPlaneNormal.Normalize();b.m_localPoint.SetV(t)}else if(C<=0){if((f-P.x)*(f-P.x)+(x-P.y)*(x-P.y)>r*r)return;b.m_pointCount=1;b.m_type=E.e_faceA;b.m_localPlaneNormal.x=f-P.x;b.m_localPlaneNormal.y=x-P.y;b.m_localPlaneNormal.Normalize();b.m_localPoint.SetV(P)}else{J=0.5*(t.x+P.x);t=0.5*(t.y+P.y);C=(f-J)*e[s].x+
(x-t)*e[s].y;if(C>r)return;b.m_pointCount=1;b.m_type=E.e_faceA;b.m_localPlaneNormal.x=e[s].x;b.m_localPlaneNormal.y=e[s].y;b.m_localPlaneNormal.Normalize();b.m_localPoint.Set(J,t)}}b.m_points[0].m_localPoint.SetV(m.m_p);b.m_points[0].m_id.key=0};M.TestOverlap=function(b,e){var f=e.lowerBound,m=b.upperBound,r=f.x-m.x,s=f.y-m.y;f=b.lowerBound;m=e.upperBound;var v=f.y-m.y;if(r>0||s>0)return false;if(f.x-m.x>0||v>0)return false;return true};Box2D.postDefs.push(function(){Box2D.Collision.b2Collision.s_incidentEdge=
M.MakeClipPointVector();Box2D.Collision.b2Collision.s_clipPoints1=M.MakeClipPointVector();Box2D.Collision.b2Collision.s_clipPoints2=M.MakeClipPointVector();Box2D.Collision.b2Collision.s_edgeAO=new Vector_a2j_Number(1);Box2D.Collision.b2Collision.s_edgeBO=new Vector_a2j_Number(1);Box2D.Collision.b2Collision.s_localTangent=new p;Box2D.Collision.b2Collision.s_localNormal=new p;Box2D.Collision.b2Collision.s_planePoint=new p;Box2D.Collision.b2Collision.s_normal=new p;Box2D.Collision.b2Collision.s_tangent=
new p;Box2D.Collision.b2Collision.s_tangent2=new p;Box2D.Collision.b2Collision.s_v11=new p;Box2D.Collision.b2Collision.s_v12=new p;Box2D.Collision.b2Collision.b2CollidePolyTempVec=new p;Box2D.Collision.b2Collision.b2_nullFeature=255});L.b2ContactID=function(){this.features=new c};L.prototype.b2ContactID=function(){this.features._m_id=this};L.prototype.Set=function(b){this.key=b._key};L.prototype.Copy=function(){var b=new L;b.key=this.key;return b};Object.defineProperty(L.prototype,"key",{enumerable:false,
configurable:true,get:function(){return this._key}});Object.defineProperty(L.prototype,"key",{enumerable:false,configurable:true,set:function(b){if(b===undefined)b=0;this._key=b;this.features._referenceEdge=this._key&255;this.features._incidentEdge=(this._key&65280)>>8&255;this.features._incidentVertex=(this._key&16711680)>>16&255;this.features._flip=(this._key&4278190080)>>24&255}});I.b2ContactPoint=function(){this.position=new p;this.velocity=new p;this.normal=new p;this.id=new L};W.b2Distance=
function(){};W.Distance=function(b,e,f){++W.b2_gjkCalls;var m=f.proxyA,r=f.proxyB,s=f.transformA,v=f.transformB,t=W.s_simplex;t.ReadCache(e,m,s,r,v);var x=t.m_vertices,C=W.s_saveA,J=W.s_saveB,T=0;t.GetClosestPoint().LengthSquared();for(var P=0,X,$=0;$<20;){T=t.m_count;for(P=0;P<T;P++){C[P]=x[P].indexA;J[P]=x[P].indexB}switch(t.m_count){case 1:break;case 2:t.Solve2();break;case 3:t.Solve3();break;default:y.b2Assert(false)}if(t.m_count==3)break;X=t.GetClosestPoint();X.LengthSquared();P=t.GetSearchDirection();
if(P.LengthSquared()<Number.MIN_VALUE*Number.MIN_VALUE)break;X=x[t.m_count];X.indexA=m.GetSupport(w.MulTMV(s.R,P.GetNegative()));X.wA=w.MulX(s,m.GetVertex(X.indexA));X.indexB=r.GetSupport(w.MulTMV(v.R,P));X.wB=w.MulX(v,r.GetVertex(X.indexB));X.w=w.SubtractVV(X.wB,X.wA);++$;++W.b2_gjkIters;var ba=false;for(P=0;P<T;P++)if(X.indexA==C[P]&&X.indexB==J[P]){ba=true;break}if(ba)break;++t.m_count}W.b2_gjkMaxIters=w.Max(W.b2_gjkMaxIters,$);t.GetWitnessPoints(b.pointA,b.pointB);b.distance=w.SubtractVV(b.pointA,
b.pointB).Length();b.iterations=$;t.WriteCache(e);if(f.useRadii){e=m.m_radius;r=r.m_radius;if(b.distance>e+r&&b.distance>Number.MIN_VALUE){b.distance-=e+r;f=w.SubtractVV(b.pointB,b.pointA);f.Normalize();b.pointA.x+=e*f.x;b.pointA.y+=e*f.y;b.pointB.x-=r*f.x;b.pointB.y-=r*f.y}else{X=new p;X.x=0.5*(b.pointA.x+b.pointB.x);X.y=0.5*(b.pointA.y+b.pointB.y);b.pointA.x=b.pointB.x=X.x;b.pointA.y=b.pointB.y=X.y;b.distance=0}}};Box2D.postDefs.push(function(){Box2D.Collision.b2Distance.s_simplex=new h;Box2D.Collision.b2Distance.s_saveA=
new Vector_a2j_Number(3);Box2D.Collision.b2Distance.s_saveB=new Vector_a2j_Number(3)});Y.b2DistanceInput=function(){};k.b2DistanceOutput=function(){this.pointA=new p;this.pointB=new p};z.b2DistanceProxy=function(){};z.prototype.Set=function(b){switch(b.GetType()){case K.e_circleShape:b=b instanceof F?b:null;this.m_vertices=new Vector(1,true);this.m_vertices[0]=b.m_p;this.m_count=1;this.m_radius=b.m_radius;break;case K.e_polygonShape:b=b instanceof G?b:null;this.m_vertices=b.m_vertices;this.m_count=
b.m_vertexCount;this.m_radius=b.m_radius;break;default:y.b2Assert(false)}};z.prototype.GetSupport=function(b){for(var e=0,f=this.m_vertices[0].x*b.x+this.m_vertices[0].y*b.y,m=1;m<this.m_count;++m){var r=this.m_vertices[m].x*b.x+this.m_vertices[m].y*b.y;if(r>f){e=m;f=r}}return e};z.prototype.GetSupportVertex=function(b){for(var e=0,f=this.m_vertices[0].x*b.x+this.m_vertices[0].y*b.y,m=1;m<this.m_count;++m){var r=this.m_vertices[m].x*b.x+this.m_vertices[m].y*b.y;if(r>f){e=m;f=r}}return this.m_vertices[e]};
z.prototype.GetVertexCount=function(){return this.m_count};z.prototype.GetVertex=function(b){if(b===undefined)b=0;y.b2Assert(0<=b&&b<this.m_count);return this.m_vertices[b]};u.b2DynamicTree=function(){};u.prototype.b2DynamicTree=function(){this.m_freeList=this.m_root=null;this.m_insertionCount=this.m_path=0};u.prototype.CreateProxy=function(b,e){var f=this.AllocateNode(),m=y.b2_aabbExtension,r=y.b2_aabbExtension;f.aabb.lowerBound.x=b.lowerBound.x-m;f.aabb.lowerBound.y=b.lowerBound.y-r;f.aabb.upperBound.x=
b.upperBound.x+m;f.aabb.upperBound.y=b.upperBound.y+r;f.userData=e;this.InsertLeaf(f);return f};u.prototype.DestroyProxy=function(b){this.RemoveLeaf(b);this.FreeNode(b)};u.prototype.MoveProxy=function(b,e,f){y.b2Assert(b.IsLeaf());if(b.aabb.Contains(e))return false;this.RemoveLeaf(b);var m=y.b2_aabbExtension+y.b2_aabbMultiplier*(f.x>0?f.x:-f.x);f=y.b2_aabbExtension+y.b2_aabbMultiplier*(f.y>0?f.y:-f.y);b.aabb.lowerBound.x=e.lowerBound.x-m;b.aabb.lowerBound.y=e.lowerBound.y-f;b.aabb.upperBound.x=e.upperBound.x+
m;b.aabb.upperBound.y=e.upperBound.y+f;this.InsertLeaf(b);return true};u.prototype.Rebalance=function(b){if(b===undefined)b=0;if(this.m_root!=null)for(var e=0;e<b;e++){for(var f=this.m_root,m=0;f.IsLeaf()==false;){f=this.m_path>>m&1?f.child2:f.child1;m=m+1&31}++this.m_path;this.RemoveLeaf(f);this.InsertLeaf(f)}};u.prototype.GetFatAABB=function(b){return b.aabb};u.prototype.GetUserData=function(b){return b.userData};u.prototype.Query=function(b,e){if(this.m_root!=null){var f=new Vector,m=0;for(f[m++]=
this.m_root;m>0;){var r=f[--m];if(r.aabb.TestOverlap(e))if(r.IsLeaf()){if(!b(r))break}else{f[m++]=r.child1;f[m++]=r.child2}}}};u.prototype.RayCast=function(b,e){if(this.m_root!=null){var f=e.p1,m=e.p2,r=w.SubtractVV(f,m);r.Normalize();r=w.CrossFV(1,r);var s=w.AbsV(r),v=e.maxFraction,t=new B,x=0,C=0;x=f.x+v*(m.x-f.x);C=f.y+v*(m.y-f.y);t.lowerBound.x=Math.min(f.x,x);t.lowerBound.y=Math.min(f.y,C);t.upperBound.x=Math.max(f.x,x);t.upperBound.y=Math.max(f.y,C);var J=new Vector,T=0;for(J[T++]=this.m_root;T>
0;){v=J[--T];if(v.aabb.TestOverlap(t)!=false){x=v.aabb.GetCenter();C=v.aabb.GetExtents();if(!(Math.abs(r.x*(f.x-x.x)+r.y*(f.y-x.y))-s.x*C.x-s.y*C.y>0))if(v.IsLeaf()){x=new S;x.p1=e.p1;x.p2=e.p2;x.maxFraction=e.maxFraction;v=b(x,v);if(v==0)break;if(v>0){x=f.x+v*(m.x-f.x);C=f.y+v*(m.y-f.y);t.lowerBound.x=Math.min(f.x,x);t.lowerBound.y=Math.min(f.y,C);t.upperBound.x=Math.max(f.x,x);t.upperBound.y=Math.max(f.y,C)}}else{J[T++]=v.child1;J[T++]=v.child2}}}}};u.prototype.AllocateNode=function(){if(this.m_freeList){var b=
this.m_freeList;this.m_freeList=b.parent;b.parent=null;b.child1=null;b.child2=null;return b}return new H};u.prototype.FreeNode=function(b){b.parent=this.m_freeList;this.m_freeList=b};u.prototype.InsertLeaf=function(b){++this.m_insertionCount;if(this.m_root==null){this.m_root=b;this.m_root.parent=null}else{var e=b.aabb.GetCenter(),f=this.m_root;if(f.IsLeaf()==false){do{var m=f.child1;f=f.child2;f=Math.abs((m.aabb.lowerBound.x+m.aabb.upperBound.x)/2-e.x)+Math.abs((m.aabb.lowerBound.y+m.aabb.upperBound.y)/
2-e.y)<Math.abs((f.aabb.lowerBound.x+f.aabb.upperBound.x)/2-e.x)+Math.abs((f.aabb.lowerBound.y+f.aabb.upperBound.y)/2-e.y)?m:f}while(f.IsLeaf()==false)}e=f.parent;m=this.AllocateNode();m.parent=e;m.userData=null;m.aabb.Combine(b.aabb,f.aabb);if(e){if(f.parent.child1==f)e.child1=m;else e.child2=m;m.child1=f;m.child2=b;f.parent=m;b.parent=m;do{if(e.aabb.Contains(m.aabb))break;e.aabb.Combine(e.child1.aabb,e.child2.aabb);m=e;e=e.parent}while(e)}else{m.child1=f;m.child2=b;f.parent=m;this.m_root=b.parent=
m}}};u.prototype.RemoveLeaf=function(b){if(b==this.m_root)this.m_root=null;else{var e=b.parent,f=e.parent;b=e.child1==b?e.child2:e.child1;if(f){if(f.child1==e)f.child1=b;else f.child2=b;b.parent=f;for(this.FreeNode(e);f;){e=f.aabb;f.aabb=B.Combine(f.child1.aabb,f.child2.aabb);if(e.Contains(f.aabb))break;f=f.parent}}else{this.m_root=b;b.parent=null;this.FreeNode(e)}}};D.b2DynamicTreeBroadPhase=function(){this.m_tree=new u;this.m_moveBuffer=new Vector;this.m_pairBuffer=new Vector;this.m_pairCount=0};
D.prototype.CreateProxy=function(b,e){var f=this.m_tree.CreateProxy(b,e);++this.m_proxyCount;this.BufferMove(f);return f};D.prototype.DestroyProxy=function(b){this.UnBufferMove(b);--this.m_proxyCount;this.m_tree.DestroyProxy(b)};D.prototype.MoveProxy=function(b,e,f){this.m_tree.MoveProxy(b,e,f)&&this.BufferMove(b)};D.prototype.TestOverlap=function(b,e){var f=this.m_tree.GetFatAABB(b),m=this.m_tree.GetFatAABB(e);return f.TestOverlap(m)};D.prototype.GetUserData=function(b){return this.m_tree.GetUserData(b)};
D.prototype.GetFatAABB=function(b){return this.m_tree.GetFatAABB(b)};D.prototype.GetProxyCount=function(){return this.m_proxyCount};D.prototype.UpdatePairs=function(b){var e=this;var f=e.m_pairCount=0,m;for(f=0;f<e.m_moveBuffer.length;++f){m=e.m_moveBuffer[f];var r=e.m_tree.GetFatAABB(m);e.m_tree.Query(function(t){if(t==m)return true;if(e.m_pairCount==e.m_pairBuffer.length)e.m_pairBuffer[e.m_pairCount]=new O;var x=e.m_pairBuffer[e.m_pairCount];x.proxyA=t<m?t:m;x.proxyB=t>=m?t:m;++e.m_pairCount;return true},
r)}for(f=e.m_moveBuffer.length=0;f<e.m_pairCount;){r=e.m_pairBuffer[f];var s=e.m_tree.GetUserData(r.proxyA),v=e.m_tree.GetUserData(r.proxyB);b(s,v);for(++f;f<e.m_pairCount;){s=e.m_pairBuffer[f];if(s.proxyA!=r.proxyA||s.proxyB!=r.proxyB)break;++f}}};D.prototype.Query=function(b,e){this.m_tree.Query(b,e)};D.prototype.RayCast=function(b,e){this.m_tree.RayCast(b,e)};D.prototype.Validate=function(){};D.prototype.Rebalance=function(b){if(b===undefined)b=0;this.m_tree.Rebalance(b)};D.prototype.BufferMove=
function(b){this.m_moveBuffer[this.m_moveBuffer.length]=b};D.prototype.UnBufferMove=function(b){this.m_moveBuffer.splice(parseInt(this.m_moveBuffer.indexOf(b)),1)};D.prototype.ComparePairs=function(){return 0};D.__implements={};D.__implements[g]=true;H.b2DynamicTreeNode=function(){this.aabb=new B};H.prototype.IsLeaf=function(){return this.child1==null};O.b2DynamicTreePair=function(){};E.b2Manifold=function(){this.m_pointCount=0};E.prototype.b2Manifold=function(){this.m_points=new Vector(y.b2_maxManifoldPoints);
for(var b=0;b<y.b2_maxManifoldPoints;b++)this.m_points[b]=new R;this.m_localPlaneNormal=new p;this.m_localPoint=new p};E.prototype.Reset=function(){for(var b=0;b<y.b2_maxManifoldPoints;b++)(this.m_points[b]instanceof R?this.m_points[b]:null).Reset();this.m_localPlaneNormal.SetZero();this.m_localPoint.SetZero();this.m_pointCount=this.m_type=0};E.prototype.Set=function(b){this.m_pointCount=b.m_pointCount;for(var e=0;e<y.b2_maxManifoldPoints;e++)(this.m_points[e]instanceof R?this.m_points[e]:null).Set(b.m_points[e]);
this.m_localPlaneNormal.SetV(b.m_localPlaneNormal);this.m_localPoint.SetV(b.m_localPoint);this.m_type=b.m_type};E.prototype.Copy=function(){var b=new E;b.Set(this);return b};Box2D.postDefs.push(function(){Box2D.Collision.b2Manifold.e_circles=1;Box2D.Collision.b2Manifold.e_faceA=2;Box2D.Collision.b2Manifold.e_faceB=4});R.b2ManifoldPoint=function(){this.m_localPoint=new p;this.m_id=new L};R.prototype.b2ManifoldPoint=function(){this.Reset()};R.prototype.Reset=function(){this.m_localPoint.SetZero();this.m_tangentImpulse=
this.m_normalImpulse=0;this.m_id.key=0};R.prototype.Set=function(b){this.m_localPoint.SetV(b.m_localPoint);this.m_normalImpulse=b.m_normalImpulse;this.m_tangentImpulse=b.m_tangentImpulse;this.m_id.Set(b.m_id)};N.b2Point=function(){this.p=new p};N.prototype.Support=function(){return this.p};N.prototype.GetFirstVertex=function(){return this.p};S.b2RayCastInput=function(){this.p1=new p;this.p2=new p};S.prototype.b2RayCastInput=function(b,e,f){if(b===undefined)b=null;if(e===undefined)e=null;if(f===undefined)f=
1;b&&this.p1.SetV(b);e&&this.p2.SetV(e);this.maxFraction=f};aa.b2RayCastOutput=function(){this.normal=new p};Z.b2Segment=function(){this.p1=new p;this.p2=new p};Z.prototype.TestSegment=function(b,e,f,m){if(m===undefined)m=0;var r=f.p1,s=f.p2.x-r.x,v=f.p2.y-r.y;f=this.p2.y-this.p1.y;var t=-(this.p2.x-this.p1.x),x=100*Number.MIN_VALUE,C=-(s*f+v*t);if(C>x){var J=r.x-this.p1.x,T=r.y-this.p1.y;r=J*f+T*t;if(0<=r&&r<=m*C){m=-s*T+v*J;if(-x*C<=m&&m<=C*(1+x)){r/=C;m=Math.sqrt(f*f+t*t);f/=m;t/=m;b[0]=r;e.Set(f,
t);return true}}}return false};Z.prototype.Extend=function(b){this.ExtendForward(b);this.ExtendBackward(b)};Z.prototype.ExtendForward=function(b){var e=this.p2.x-this.p1.x,f=this.p2.y-this.p1.y;b=Math.min(e>0?(b.upperBound.x-this.p1.x)/e:e<0?(b.lowerBound.x-this.p1.x)/e:Number.POSITIVE_INFINITY,f>0?(b.upperBound.y-this.p1.y)/f:f<0?(b.lowerBound.y-this.p1.y)/f:Number.POSITIVE_INFINITY);this.p2.x=this.p1.x+e*b;this.p2.y=this.p1.y+f*b};Z.prototype.ExtendBackward=function(b){var e=-this.p2.x+this.p1.x,
f=-this.p2.y+this.p1.y;b=Math.min(e>0?(b.upperBound.x-this.p2.x)/e:e<0?(b.lowerBound.x-this.p2.x)/e:Number.POSITIVE_INFINITY,f>0?(b.upperBound.y-this.p2.y)/f:f<0?(b.lowerBound.y-this.p2.y)/f:Number.POSITIVE_INFINITY);this.p1.x=this.p2.x+e*b;this.p1.y=this.p2.y+f*b};d.b2SeparationFunction=function(){this.m_localPoint=new p;this.m_axis=new p};d.prototype.Initialize=function(b,e,f,m,r){this.m_proxyA=e;this.m_proxyB=m;var s=parseInt(b.count);y.b2Assert(0<s&&s<3);var v,t,x,C,J=C=x=m=e=0,T=0;J=0;if(s==
1){this.m_type=d.e_points;v=this.m_proxyA.GetVertex(b.indexA[0]);t=this.m_proxyB.GetVertex(b.indexB[0]);s=v;b=f.R;e=f.position.x+(b.col1.x*s.x+b.col2.x*s.y);m=f.position.y+(b.col1.y*s.x+b.col2.y*s.y);s=t;b=r.R;x=r.position.x+(b.col1.x*s.x+b.col2.x*s.y);C=r.position.y+(b.col1.y*s.x+b.col2.y*s.y);this.m_axis.x=x-e;this.m_axis.y=C-m;this.m_axis.Normalize()}else{if(b.indexB[0]==b.indexB[1]){this.m_type=d.e_faceA;e=this.m_proxyA.GetVertex(b.indexA[0]);m=this.m_proxyA.GetVertex(b.indexA[1]);t=this.m_proxyB.GetVertex(b.indexB[0]);
this.m_localPoint.x=0.5*(e.x+m.x);this.m_localPoint.y=0.5*(e.y+m.y);this.m_axis=w.CrossVF(w.SubtractVV(m,e),1);this.m_axis.Normalize();s=this.m_axis;b=f.R;J=b.col1.x*s.x+b.col2.x*s.y;T=b.col1.y*s.x+b.col2.y*s.y;s=this.m_localPoint;b=f.R;e=f.position.x+(b.col1.x*s.x+b.col2.x*s.y);m=f.position.y+(b.col1.y*s.x+b.col2.y*s.y);s=t;b=r.R;x=r.position.x+(b.col1.x*s.x+b.col2.x*s.y);C=r.position.y+(b.col1.y*s.x+b.col2.y*s.y);J=(x-e)*J+(C-m)*T}else if(b.indexA[0]==b.indexA[0]){this.m_type=d.e_faceB;x=this.m_proxyB.GetVertex(b.indexB[0]);
C=this.m_proxyB.GetVertex(b.indexB[1]);v=this.m_proxyA.GetVertex(b.indexA[0]);this.m_localPoint.x=0.5*(x.x+C.x);this.m_localPoint.y=0.5*(x.y+C.y);this.m_axis=w.CrossVF(w.SubtractVV(C,x),1);this.m_axis.Normalize();s=this.m_axis;b=r.R;J=b.col1.x*s.x+b.col2.x*s.y;T=b.col1.y*s.x+b.col2.y*s.y;s=this.m_localPoint;b=r.R;x=r.position.x+(b.col1.x*s.x+b.col2.x*s.y);C=r.position.y+(b.col1.y*s.x+b.col2.y*s.y);s=v;b=f.R;e=f.position.x+(b.col1.x*s.x+b.col2.x*s.y);m=f.position.y+(b.col1.y*s.x+b.col2.y*s.y);J=(e-
x)*J+(m-C)*T}else{e=this.m_proxyA.GetVertex(b.indexA[0]);m=this.m_proxyA.GetVertex(b.indexA[1]);x=this.m_proxyB.GetVertex(b.indexB[0]);C=this.m_proxyB.GetVertex(b.indexB[1]);w.MulX(f,v);v=w.MulMV(f.R,w.SubtractVV(m,e));w.MulX(r,t);J=w.MulMV(r.R,w.SubtractVV(C,x));r=v.x*v.x+v.y*v.y;t=J.x*J.x+J.y*J.y;b=w.SubtractVV(J,v);f=v.x*b.x+v.y*b.y;b=J.x*b.x+J.y*b.y;v=v.x*J.x+v.y*J.y;T=r*t-v*v;J=0;if(T!=0)J=w.Clamp((v*b-f*t)/T,0,1);if((v*J+b)/t<0)J=w.Clamp((v-f)/r,0,1);v=new p;v.x=e.x+J*(m.x-e.x);v.y=e.y+J*(m.y-
e.y);t=new p;t.x=x.x+J*(C.x-x.x);t.y=x.y+J*(C.y-x.y);if(J==0||J==1){this.m_type=d.e_faceB;this.m_axis=w.CrossVF(w.SubtractVV(C,x),1);this.m_axis.Normalize();this.m_localPoint=t}else{this.m_type=d.e_faceA;this.m_axis=w.CrossVF(w.SubtractVV(m,e),1);this.m_localPoint=v}}J<0&&this.m_axis.NegativeSelf()}};d.prototype.Evaluate=function(b,e){var f,m,r=0;switch(this.m_type){case d.e_points:f=w.MulTMV(b.R,this.m_axis);m=w.MulTMV(e.R,this.m_axis.GetNegative());f=this.m_proxyA.GetSupportVertex(f);m=this.m_proxyB.GetSupportVertex(m);
f=w.MulX(b,f);m=w.MulX(e,m);return r=(m.x-f.x)*this.m_axis.x+(m.y-f.y)*this.m_axis.y;case d.e_faceA:r=w.MulMV(b.R,this.m_axis);f=w.MulX(b,this.m_localPoint);m=w.MulTMV(e.R,r.GetNegative());m=this.m_proxyB.GetSupportVertex(m);m=w.MulX(e,m);return r=(m.x-f.x)*r.x+(m.y-f.y)*r.y;case d.e_faceB:r=w.MulMV(e.R,this.m_axis);m=w.MulX(e,this.m_localPoint);f=w.MulTMV(b.R,r.GetNegative());f=this.m_proxyA.GetSupportVertex(f);f=w.MulX(b,f);return r=(f.x-m.x)*r.x+(f.y-m.y)*r.y;default:y.b2Assert(false);return 0}};
Box2D.postDefs.push(function(){Box2D.Collision.b2SeparationFunction.e_points=1;Box2D.Collision.b2SeparationFunction.e_faceA=2;Box2D.Collision.b2SeparationFunction.e_faceB=4});h.b2Simplex=function(){this.m_v1=new j;this.m_v2=new j;this.m_v3=new j;this.m_vertices=new Vector(3)};h.prototype.b2Simplex=function(){this.m_vertices[0]=this.m_v1;this.m_vertices[1]=this.m_v2;this.m_vertices[2]=this.m_v3};h.prototype.ReadCache=function(b,e,f,m,r){y.b2Assert(0<=b.count&&b.count<=3);var s,v;this.m_count=b.count;
for(var t=this.m_vertices,x=0;x<this.m_count;x++){var C=t[x];C.indexA=b.indexA[x];C.indexB=b.indexB[x];s=e.GetVertex(C.indexA);v=m.GetVertex(C.indexB);C.wA=w.MulX(f,s);C.wB=w.MulX(r,v);C.w=w.SubtractVV(C.wB,C.wA);C.a=0}if(this.m_count>1){b=b.metric;s=this.GetMetric();if(s<0.5*b||2*b<s||s<Number.MIN_VALUE)this.m_count=0}if(this.m_count==0){C=t[0];C.indexA=0;C.indexB=0;s=e.GetVertex(0);v=m.GetVertex(0);C.wA=w.MulX(f,s);C.wB=w.MulX(r,v);C.w=w.SubtractVV(C.wB,C.wA);this.m_count=1}};h.prototype.WriteCache=
function(b){b.metric=this.GetMetric();b.count=Box2D.parseUInt(this.m_count);for(var e=this.m_vertices,f=0;f<this.m_count;f++){b.indexA[f]=Box2D.parseUInt(e[f].indexA);b.indexB[f]=Box2D.parseUInt(e[f].indexB)}};h.prototype.GetSearchDirection=function(){switch(this.m_count){case 1:return this.m_v1.w.GetNegative();case 2:var b=w.SubtractVV(this.m_v2.w,this.m_v1.w);return w.CrossVV(b,this.m_v1.w.GetNegative())>0?w.CrossFV(1,b):w.CrossVF(b,1);default:y.b2Assert(false);return new p}};h.prototype.GetClosestPoint=
function(){switch(this.m_count){case 0:y.b2Assert(false);return new p;case 1:return this.m_v1.w;case 2:return new p(this.m_v1.a*this.m_v1.w.x+this.m_v2.a*this.m_v2.w.x,this.m_v1.a*this.m_v1.w.y+this.m_v2.a*this.m_v2.w.y);default:y.b2Assert(false);return new p}};h.prototype.GetWitnessPoints=function(b,e){switch(this.m_count){case 0:y.b2Assert(false);break;case 1:b.SetV(this.m_v1.wA);e.SetV(this.m_v1.wB);break;case 2:b.x=this.m_v1.a*this.m_v1.wA.x+this.m_v2.a*this.m_v2.wA.x;b.y=this.m_v1.a*this.m_v1.wA.y+
this.m_v2.a*this.m_v2.wA.y;e.x=this.m_v1.a*this.m_v1.wB.x+this.m_v2.a*this.m_v2.wB.x;e.y=this.m_v1.a*this.m_v1.wB.y+this.m_v2.a*this.m_v2.wB.y;break;case 3:e.x=b.x=this.m_v1.a*this.m_v1.wA.x+this.m_v2.a*this.m_v2.wA.x+this.m_v3.a*this.m_v3.wA.x;e.y=b.y=this.m_v1.a*this.m_v1.wA.y+this.m_v2.a*this.m_v2.wA.y+this.m_v3.a*this.m_v3.wA.y;break;default:y.b2Assert(false)}};h.prototype.GetMetric=function(){switch(this.m_count){case 0:y.b2Assert(false);return 0;case 1:return 0;case 2:return w.SubtractVV(this.m_v1.w,
this.m_v2.w).Length();case 3:return w.CrossVV(w.SubtractVV(this.m_v2.w,this.m_v1.w),w.SubtractVV(this.m_v3.w,this.m_v1.w));default:y.b2Assert(false);return 0}};h.prototype.Solve2=function(){var b=this.m_v1.w,e=this.m_v2.w,f=w.SubtractVV(e,b);b=-(b.x*f.x+b.y*f.y);if(b<=0)this.m_count=this.m_v1.a=1;else{e=e.x*f.x+e.y*f.y;if(e<=0){this.m_count=this.m_v2.a=1;this.m_v1.Set(this.m_v2)}else{f=1/(e+b);this.m_v1.a=e*f;this.m_v2.a=b*f;this.m_count=2}}};h.prototype.Solve3=function(){var b=this.m_v1.w,e=this.m_v2.w,
f=this.m_v3.w,m=w.SubtractVV(e,b),r=w.Dot(b,m),s=w.Dot(e,m);r=-r;var v=w.SubtractVV(f,b),t=w.Dot(b,v),x=w.Dot(f,v);t=-t;var C=w.SubtractVV(f,e),J=w.Dot(e,C);C=w.Dot(f,C);J=-J;v=w.CrossVV(m,v);m=v*w.CrossVV(e,f);f=v*w.CrossVV(f,b);b=v*w.CrossVV(b,e);if(r<=0&&t<=0)this.m_count=this.m_v1.a=1;else if(s>0&&r>0&&b<=0){x=1/(s+r);this.m_v1.a=s*x;this.m_v2.a=r*x;this.m_count=2}else if(x>0&&t>0&&f<=0){s=1/(x+t);this.m_v1.a=x*s;this.m_v3.a=t*s;this.m_count=2;this.m_v2.Set(this.m_v3)}else if(s<=0&&J<=0){this.m_count=
this.m_v2.a=1;this.m_v1.Set(this.m_v2)}else if(x<=0&&C<=0){this.m_count=this.m_v3.a=1;this.m_v1.Set(this.m_v3)}else if(C>0&&J>0&&m<=0){s=1/(C+J);this.m_v2.a=C*s;this.m_v3.a=J*s;this.m_count=2;this.m_v1.Set(this.m_v3)}else{s=1/(m+f+b);this.m_v1.a=m*s;this.m_v2.a=f*s;this.m_v3.a=b*s;this.m_count=3}};l.b2SimplexCache=function(){this.indexA=new Vector_a2j_Number(3);this.indexB=new Vector_a2j_Number(3)};j.b2SimplexVertex=function(){};j.prototype.Set=function(b){this.wA.SetV(b.wA);this.wB.SetV(b.wB);this.w.SetV(b.w);
this.a=b.a;this.indexA=b.indexA;this.indexB=b.indexB};o.b2TimeOfImpact=function(){};o.TimeOfImpact=function(b){++o.b2_toiCalls;var e=b.proxyA,f=b.proxyB,m=b.sweepA,r=b.sweepB;y.b2Assert(m.t0==r.t0);y.b2Assert(1-m.t0>Number.MIN_VALUE);var s=e.m_radius+f.m_radius;b=b.tolerance;var v=0,t=0,x=0;o.s_cache.count=0;for(o.s_distanceInput.useRadii=false;;){m.GetTransform(o.s_xfA,v);r.GetTransform(o.s_xfB,v);o.s_distanceInput.proxyA=e;o.s_distanceInput.proxyB=f;o.s_distanceInput.transformA=o.s_xfA;o.s_distanceInput.transformB=
o.s_xfB;W.Distance(o.s_distanceOutput,o.s_cache,o.s_distanceInput);if(o.s_distanceOutput.distance<=0){v=1;break}o.s_fcn.Initialize(o.s_cache,e,o.s_xfA,f,o.s_xfB);var C=o.s_fcn.Evaluate(o.s_xfA,o.s_xfB);if(C<=0){v=1;break}if(t==0)x=C>s?w.Max(s-b,0.75*s):w.Max(C-b,0.02*s);if(C-x<0.5*b){if(t==0){v=1;break}break}var J=v,T=v,P=1;C=C;m.GetTransform(o.s_xfA,P);r.GetTransform(o.s_xfB,P);var X=o.s_fcn.Evaluate(o.s_xfA,o.s_xfB);if(X>=x){v=1;break}for(var $=0;;){var ba=0;ba=$&1?T+(x-C)*(P-T)/(X-C):0.5*(T+P);
m.GetTransform(o.s_xfA,ba);r.GetTransform(o.s_xfB,ba);var ca=o.s_fcn.Evaluate(o.s_xfA,o.s_xfB);if(w.Abs(ca-x)<0.025*b){J=ba;break}if(ca>x){T=ba;C=ca}else{P=ba;X=ca}++$;++o.b2_toiRootIters;if($==50)break}o.b2_toiMaxRootIters=w.Max(o.b2_toiMaxRootIters,$);if(J<(1+100*Number.MIN_VALUE)*v)break;v=J;t++;++o.b2_toiIters;if(t==1E3)break}o.b2_toiMaxIters=w.Max(o.b2_toiMaxIters,t);return v};Box2D.postDefs.push(function(){Box2D.Collision.b2TimeOfImpact.b2_toiCalls=0;Box2D.Collision.b2TimeOfImpact.b2_toiIters=
0;Box2D.Collision.b2TimeOfImpact.b2_toiMaxIters=0;Box2D.Collision.b2TimeOfImpact.b2_toiRootIters=0;Box2D.Collision.b2TimeOfImpact.b2_toiMaxRootIters=0;Box2D.Collision.b2TimeOfImpact.s_cache=new l;Box2D.Collision.b2TimeOfImpact.s_distanceInput=new Y;Box2D.Collision.b2TimeOfImpact.s_xfA=new U;Box2D.Collision.b2TimeOfImpact.s_xfB=new U;Box2D.Collision.b2TimeOfImpact.s_fcn=new d;Box2D.Collision.b2TimeOfImpact.s_distanceOutput=new k});q.b2TOIInput=function(){this.proxyA=new z;this.proxyB=new z;this.sweepA=
new A;this.sweepB=new A};n.b2WorldManifold=function(){this.m_normal=new p};n.prototype.b2WorldManifold=function(){this.m_points=new Vector(y.b2_maxManifoldPoints);for(var b=0;b<y.b2_maxManifoldPoints;b++)this.m_points[b]=new p};n.prototype.Initialize=function(b,e,f,m,r){if(f===undefined)f=0;if(r===undefined)r=0;if(b.m_pointCount!=0){var s=0,v,t,x=0,C=0,J=0,T=0,P=0;v=0;switch(b.m_type){case E.e_circles:t=e.R;v=b.m_localPoint;s=e.position.x+t.col1.x*v.x+t.col2.x*v.y;e=e.position.y+t.col1.y*v.x+t.col2.y*
v.y;t=m.R;v=b.m_points[0].m_localPoint;b=m.position.x+t.col1.x*v.x+t.col2.x*v.y;m=m.position.y+t.col1.y*v.x+t.col2.y*v.y;v=b-s;t=m-e;x=v*v+t*t;if(x>Number.MIN_VALUE*Number.MIN_VALUE){x=Math.sqrt(x);this.m_normal.x=v/x;this.m_normal.y=t/x}else{this.m_normal.x=1;this.m_normal.y=0}v=e+f*this.m_normal.y;m=m-r*this.m_normal.y;this.m_points[0].x=0.5*(s+f*this.m_normal.x+(b-r*this.m_normal.x));this.m_points[0].y=0.5*(v+m);break;case E.e_faceA:t=e.R;v=b.m_localPlaneNormal;x=t.col1.x*v.x+t.col2.x*v.y;C=t.col1.y*
v.x+t.col2.y*v.y;t=e.R;v=b.m_localPoint;J=e.position.x+t.col1.x*v.x+t.col2.x*v.y;T=e.position.y+t.col1.y*v.x+t.col2.y*v.y;this.m_normal.x=x;this.m_normal.y=C;for(s=0;s<b.m_pointCount;s++){t=m.R;v=b.m_points[s].m_localPoint;P=m.position.x+t.col1.x*v.x+t.col2.x*v.y;v=m.position.y+t.col1.y*v.x+t.col2.y*v.y;this.m_points[s].x=P+0.5*(f-(P-J)*x-(v-T)*C-r)*x;this.m_points[s].y=v+0.5*(f-(P-J)*x-(v-T)*C-r)*C}break;case E.e_faceB:t=m.R;v=b.m_localPlaneNormal;x=t.col1.x*v.x+t.col2.x*v.y;C=t.col1.y*v.x+t.col2.y*
v.y;t=m.R;v=b.m_localPoint;J=m.position.x+t.col1.x*v.x+t.col2.x*v.y;T=m.position.y+t.col1.y*v.x+t.col2.y*v.y;this.m_normal.x=-x;this.m_normal.y=-C;for(s=0;s<b.m_pointCount;s++){t=e.R;v=b.m_points[s].m_localPoint;P=e.position.x+t.col1.x*v.x+t.col2.x*v.y;v=e.position.y+t.col1.y*v.x+t.col2.y*v.y;this.m_points[s].x=P+0.5*(r-(P-J)*x-(v-T)*C-f)*x;this.m_points[s].y=v+0.5*(r-(P-J)*x-(v-T)*C-f)*C}}}};a.ClipVertex=function(){this.v=new p;this.id=new L};a.prototype.Set=function(b){this.v.SetV(b.v);this.id.Set(b.id)};
c.Features=function(){};Object.defineProperty(c.prototype,"referenceEdge",{enumerable:false,configurable:true,get:function(){return this._referenceEdge}});Object.defineProperty(c.prototype,"referenceEdge",{enumerable:false,configurable:true,set:function(b){if(b===undefined)b=0;this._referenceEdge=b;this._m_id._key=this._m_id._key&4294967040|this._referenceEdge&255}});Object.defineProperty(c.prototype,"incidentEdge",{enumerable:false,configurable:true,get:function(){return this._incidentEdge}});Object.defineProperty(c.prototype,
"incidentEdge",{enumerable:false,configurable:true,set:function(b){if(b===undefined)b=0;this._incidentEdge=b;this._m_id._key=this._m_id._key&4294902015|this._incidentEdge<<8&65280}});Object.defineProperty(c.prototype,"incidentVertex",{enumerable:false,configurable:true,get:function(){return this._incidentVertex}});Object.defineProperty(c.prototype,"incidentVertex",{enumerable:false,configurable:true,set:function(b){if(b===undefined)b=0;this._incidentVertex=b;this._m_id._key=this._m_id._key&4278255615|
this._incidentVertex<<16&16711680}});Object.defineProperty(c.prototype,"flip",{enumerable:false,configurable:true,get:function(){return this._flip}});Object.defineProperty(c.prototype,"flip",{enumerable:false,configurable:true,set:function(b){if(b===undefined)b=0;this._flip=b;this._m_id._key=this._m_id._key&16777215|this._flip<<24&4278190080}})})();
(function(){var F=Box2D.Common.b2Settings,G=Box2D.Collision.Shapes.b2CircleShape,K=Box2D.Collision.Shapes.b2EdgeChainDef,y=Box2D.Collision.Shapes.b2EdgeShape,w=Box2D.Collision.Shapes.b2MassData,A=Box2D.Collision.Shapes.b2PolygonShape,U=Box2D.Collision.Shapes.b2Shape,p=Box2D.Common.Math.b2Mat22,B=Box2D.Common.Math.b2Math,Q=Box2D.Common.Math.b2Transform,V=Box2D.Common.Math.b2Vec2,M=Box2D.Collision.b2Distance,L=Box2D.Collision.b2DistanceInput,I=Box2D.Collision.b2DistanceOutput,W=Box2D.Collision.b2DistanceProxy,
Y=Box2D.Collision.b2SimplexCache;Box2D.inherit(G,Box2D.Collision.Shapes.b2Shape);G.prototype.__super=Box2D.Collision.Shapes.b2Shape.prototype;G.b2CircleShape=function(){Box2D.Collision.Shapes.b2Shape.b2Shape.apply(this,arguments);this.m_p=new V};G.prototype.Copy=function(){var k=new G;k.Set(this);return k};G.prototype.Set=function(k){this.__super.Set.call(this,k);if(Box2D.is(k,G))this.m_p.SetV((k instanceof G?k:null).m_p)};G.prototype.TestPoint=function(k,z){var u=k.R,D=k.position.x+(u.col1.x*this.m_p.x+
u.col2.x*this.m_p.y);u=k.position.y+(u.col1.y*this.m_p.x+u.col2.y*this.m_p.y);D=z.x-D;u=z.y-u;return D*D+u*u<=this.m_radius*this.m_radius};G.prototype.RayCast=function(k,z,u){var D=u.R,H=z.p1.x-(u.position.x+(D.col1.x*this.m_p.x+D.col2.x*this.m_p.y));u=z.p1.y-(u.position.y+(D.col1.y*this.m_p.x+D.col2.y*this.m_p.y));D=z.p2.x-z.p1.x;var O=z.p2.y-z.p1.y,E=H*D+u*O,R=D*D+O*O,N=E*E-R*(H*H+u*u-this.m_radius*this.m_radius);if(N<0||R<Number.MIN_VALUE)return false;E=-(E+Math.sqrt(N));if(0<=E&&E<=z.maxFraction*
R){E/=R;k.fraction=E;k.normal.x=H+E*D;k.normal.y=u+E*O;k.normal.Normalize();return true}return false};G.prototype.ComputeAABB=function(k,z){var u=z.R,D=z.position.x+(u.col1.x*this.m_p.x+u.col2.x*this.m_p.y);u=z.position.y+(u.col1.y*this.m_p.x+u.col2.y*this.m_p.y);k.lowerBound.Set(D-this.m_radius,u-this.m_radius);k.upperBound.Set(D+this.m_radius,u+this.m_radius)};G.prototype.ComputeMass=function(k,z){if(z===undefined)z=0;k.mass=z*F.b2_pi*this.m_radius*this.m_radius;k.center.SetV(this.m_p);k.I=k.mass*
(0.5*this.m_radius*this.m_radius+(this.m_p.x*this.m_p.x+this.m_p.y*this.m_p.y))};G.prototype.ComputeSubmergedArea=function(k,z,u,D){if(z===undefined)z=0;u=B.MulX(u,this.m_p);var H=-(B.Dot(k,u)-z);if(H<-this.m_radius+Number.MIN_VALUE)return 0;if(H>this.m_radius){D.SetV(u);return Math.PI*this.m_radius*this.m_radius}z=this.m_radius*this.m_radius;var O=H*H;H=z*(Math.asin(H/this.m_radius)+Math.PI/2)+H*Math.sqrt(z-O);z=-2/3*Math.pow(z-O,1.5)/H;D.x=u.x+k.x*z;D.y=u.y+k.y*z;return H};G.prototype.GetLocalPosition=
function(){return this.m_p};G.prototype.SetLocalPosition=function(k){this.m_p.SetV(k)};G.prototype.GetRadius=function(){return this.m_radius};G.prototype.SetRadius=function(k){if(k===undefined)k=0;this.m_radius=k};G.prototype.b2CircleShape=function(k){if(k===undefined)k=0;this.__super.b2Shape.call(this);this.m_type=U.e_circleShape;this.m_radius=k};K.b2EdgeChainDef=function(){};K.prototype.b2EdgeChainDef=function(){this.vertexCount=0;this.isALoop=true;this.vertices=[]};Box2D.inherit(y,Box2D.Collision.Shapes.b2Shape);
y.prototype.__super=Box2D.Collision.Shapes.b2Shape.prototype;y.b2EdgeShape=function(){Box2D.Collision.Shapes.b2Shape.b2Shape.apply(this,arguments);this.s_supportVec=new V;this.m_v1=new V;this.m_v2=new V;this.m_coreV1=new V;this.m_coreV2=new V;this.m_normal=new V;this.m_direction=new V;this.m_cornerDir1=new V;this.m_cornerDir2=new V};y.prototype.TestPoint=function(){return false};y.prototype.RayCast=function(k,z,u){var D,H=z.p2.x-z.p1.x,O=z.p2.y-z.p1.y;D=u.R;var E=u.position.x+(D.col1.x*this.m_v1.x+
D.col2.x*this.m_v1.y),R=u.position.y+(D.col1.y*this.m_v1.x+D.col2.y*this.m_v1.y),N=u.position.y+(D.col1.y*this.m_v2.x+D.col2.y*this.m_v2.y)-R;u=-(u.position.x+(D.col1.x*this.m_v2.x+D.col2.x*this.m_v2.y)-E);D=100*Number.MIN_VALUE;var S=-(H*N+O*u);if(S>D){E=z.p1.x-E;var aa=z.p1.y-R;R=E*N+aa*u;if(0<=R&&R<=z.maxFraction*S){z=-H*aa+O*E;if(-D*S<=z&&z<=S*(1+D)){R/=S;k.fraction=R;z=Math.sqrt(N*N+u*u);k.normal.x=N/z;k.normal.y=u/z;return true}}}return false};y.prototype.ComputeAABB=function(k,z){var u=z.R,
D=z.position.x+(u.col1.x*this.m_v1.x+u.col2.x*this.m_v1.y),H=z.position.y+(u.col1.y*this.m_v1.x+u.col2.y*this.m_v1.y),O=z.position.x+(u.col1.x*this.m_v2.x+u.col2.x*this.m_v2.y);u=z.position.y+(u.col1.y*this.m_v2.x+u.col2.y*this.m_v2.y);if(D<O){k.lowerBound.x=D;k.upperBound.x=O}else{k.lowerBound.x=O;k.upperBound.x=D}if(H<u){k.lowerBound.y=H;k.upperBound.y=u}else{k.lowerBound.y=u;k.upperBound.y=H}};y.prototype.ComputeMass=function(k){k.mass=0;k.center.SetV(this.m_v1);k.I=0};y.prototype.ComputeSubmergedArea=
function(k,z,u,D){if(z===undefined)z=0;var H=new V(k.x*z,k.y*z),O=B.MulX(u,this.m_v1);u=B.MulX(u,this.m_v2);var E=B.Dot(k,O)-z;k=B.Dot(k,u)-z;if(E>0)if(k>0)return 0;else{O.x=-k/(E-k)*O.x+E/(E-k)*u.x;O.y=-k/(E-k)*O.y+E/(E-k)*u.y}else if(k>0){u.x=-k/(E-k)*O.x+E/(E-k)*u.x;u.y=-k/(E-k)*O.y+E/(E-k)*u.y}D.x=(H.x+O.x+u.x)/3;D.y=(H.y+O.y+u.y)/3;return 0.5*((O.x-H.x)*(u.y-H.y)-(O.y-H.y)*(u.x-H.x))};y.prototype.GetLength=function(){return this.m_length};y.prototype.GetVertex1=function(){return this.m_v1};y.prototype.GetVertex2=
function(){return this.m_v2};y.prototype.GetCoreVertex1=function(){return this.m_coreV1};y.prototype.GetCoreVertex2=function(){return this.m_coreV2};y.prototype.GetNormalVector=function(){return this.m_normal};y.prototype.GetDirectionVector=function(){return this.m_direction};y.prototype.GetCorner1Vector=function(){return this.m_cornerDir1};y.prototype.GetCorner2Vector=function(){return this.m_cornerDir2};y.prototype.Corner1IsConvex=function(){return this.m_cornerConvex1};y.prototype.Corner2IsConvex=
function(){return this.m_cornerConvex2};y.prototype.GetFirstVertex=function(k){var z=k.R;return new V(k.position.x+(z.col1.x*this.m_coreV1.x+z.col2.x*this.m_coreV1.y),k.position.y+(z.col1.y*this.m_coreV1.x+z.col2.y*this.m_coreV1.y))};y.prototype.GetNextEdge=function(){return this.m_nextEdge};y.prototype.GetPrevEdge=function(){return this.m_prevEdge};y.prototype.Support=function(k,z,u){if(z===undefined)z=0;if(u===undefined)u=0;var D=k.R,H=k.position.x+(D.col1.x*this.m_coreV1.x+D.col2.x*this.m_coreV1.y),
O=k.position.y+(D.col1.y*this.m_coreV1.x+D.col2.y*this.m_coreV1.y),E=k.position.x+(D.col1.x*this.m_coreV2.x+D.col2.x*this.m_coreV2.y);k=k.position.y+(D.col1.y*this.m_coreV2.x+D.col2.y*this.m_coreV2.y);if(H*z+O*u>E*z+k*u){this.s_supportVec.x=H;this.s_supportVec.y=O}else{this.s_supportVec.x=E;this.s_supportVec.y=k}return this.s_supportVec};y.prototype.b2EdgeShape=function(k,z){this.__super.b2Shape.call(this);this.m_type=U.e_edgeShape;this.m_nextEdge=this.m_prevEdge=null;this.m_v1=k;this.m_v2=z;this.m_direction.Set(this.m_v2.x-
this.m_v1.x,this.m_v2.y-this.m_v1.y);this.m_length=this.m_direction.Normalize();this.m_normal.Set(this.m_direction.y,-this.m_direction.x);this.m_coreV1.Set(-F.b2_toiSlop*(this.m_normal.x-this.m_direction.x)+this.m_v1.x,-F.b2_toiSlop*(this.m_normal.y-this.m_direction.y)+this.m_v1.y);this.m_coreV2.Set(-F.b2_toiSlop*(this.m_normal.x+this.m_direction.x)+this.m_v2.x,-F.b2_toiSlop*(this.m_normal.y+this.m_direction.y)+this.m_v2.y);this.m_cornerDir1=this.m_normal;this.m_cornerDir2.Set(-this.m_normal.x,-this.m_normal.y)};
y.prototype.SetPrevEdge=function(k,z,u,D){this.m_prevEdge=k;this.m_coreV1=z;this.m_cornerDir1=u;this.m_cornerConvex1=D};y.prototype.SetNextEdge=function(k,z,u,D){this.m_nextEdge=k;this.m_coreV2=z;this.m_cornerDir2=u;this.m_cornerConvex2=D};w.b2MassData=function(){this.mass=0;this.center=new V(0,0);this.I=0};Box2D.inherit(A,Box2D.Collision.Shapes.b2Shape);A.prototype.__super=Box2D.Collision.Shapes.b2Shape.prototype;A.b2PolygonShape=function(){Box2D.Collision.Shapes.b2Shape.b2Shape.apply(this,arguments)};
A.prototype.Copy=function(){var k=new A;k.Set(this);return k};A.prototype.Set=function(k){this.__super.Set.call(this,k);if(Box2D.is(k,A)){k=k instanceof A?k:null;this.m_centroid.SetV(k.m_centroid);this.m_vertexCount=k.m_vertexCount;this.Reserve(this.m_vertexCount);for(var z=0;z<this.m_vertexCount;z++){this.m_vertices[z].SetV(k.m_vertices[z]);this.m_normals[z].SetV(k.m_normals[z])}}};A.prototype.SetAsArray=function(k,z){if(z===undefined)z=0;var u=new Vector,D=0,H;for(D=0;D<k.length;++D){H=k[D];u.push(H)}this.SetAsVector(u,
z)};A.AsArray=function(k,z){if(z===undefined)z=0;var u=new A;u.SetAsArray(k,z);return u};A.prototype.SetAsVector=function(k,z){if(z===undefined)z=0;if(z==0)z=k.length;F.b2Assert(2<=z);this.m_vertexCount=z;this.Reserve(z);var u=0;for(u=0;u<this.m_vertexCount;u++)this.m_vertices[u].SetV(k[u]);for(u=0;u<this.m_vertexCount;++u){var D=parseInt(u),H=parseInt(u+1<this.m_vertexCount?u+1:0);D=B.SubtractVV(this.m_vertices[H],this.m_vertices[D]);F.b2Assert(D.LengthSquared()>Number.MIN_VALUE);this.m_normals[u].SetV(B.CrossVF(D,
1));this.m_normals[u].Normalize()}this.m_centroid=A.ComputeCentroid(this.m_vertices,this.m_vertexCount)};A.AsVector=function(k,z){if(z===undefined)z=0;var u=new A;u.SetAsVector(k,z);return u};A.prototype.SetAsBox=function(k,z){if(k===undefined)k=0;if(z===undefined)z=0;this.m_vertexCount=4;this.Reserve(4);this.m_vertices[0].Set(-k,-z);this.m_vertices[1].Set(k,-z);this.m_vertices[2].Set(k,z);this.m_vertices[3].Set(-k,z);this.m_normals[0].Set(0,-1);this.m_normals[1].Set(1,0);this.m_normals[2].Set(0,
1);this.m_normals[3].Set(-1,0);this.m_centroid.SetZero()};A.AsBox=function(k,z){if(k===undefined)k=0;if(z===undefined)z=0;var u=new A;u.SetAsBox(k,z);return u};A.prototype.SetAsOrientedBox=function(k,z,u,D){if(k===undefined)k=0;if(z===undefined)z=0;if(u===undefined)u=null;if(D===undefined)D=0;this.m_vertexCount=4;this.Reserve(4);this.m_vertices[0].Set(-k,-z);this.m_vertices[1].Set(k,-z);this.m_vertices[2].Set(k,z);this.m_vertices[3].Set(-k,z);this.m_normals[0].Set(0,-1);this.m_normals[1].Set(1,0);
this.m_normals[2].Set(0,1);this.m_normals[3].Set(-1,0);this.m_centroid=u;k=new Q;k.position=u;k.R.Set(D);for(u=0;u<this.m_vertexCount;++u){this.m_vertices[u]=B.MulX(k,this.m_vertices[u]);this.m_normals[u]=B.MulMV(k.R,this.m_normals[u])}};A.AsOrientedBox=function(k,z,u,D){if(k===undefined)k=0;if(z===undefined)z=0;if(u===undefined)u=null;if(D===undefined)D=0;var H=new A;H.SetAsOrientedBox(k,z,u,D);return H};A.prototype.SetAsEdge=function(k,z){this.m_vertexCount=2;this.Reserve(2);this.m_vertices[0].SetV(k);
this.m_vertices[1].SetV(z);this.m_centroid.x=0.5*(k.x+z.x);this.m_centroid.y=0.5*(k.y+z.y);this.m_normals[0]=B.CrossVF(B.SubtractVV(z,k),1);this.m_normals[0].Normalize();this.m_normals[1].x=-this.m_normals[0].x;this.m_normals[1].y=-this.m_normals[0].y};A.AsEdge=function(k,z){var u=new A;u.SetAsEdge(k,z);return u};A.prototype.TestPoint=function(k,z){var u;u=k.R;for(var D=z.x-k.position.x,H=z.y-k.position.y,O=D*u.col1.x+H*u.col1.y,E=D*u.col2.x+H*u.col2.y,R=0;R<this.m_vertexCount;++R){u=this.m_vertices[R];
D=O-u.x;H=E-u.y;u=this.m_normals[R];if(u.x*D+u.y*H>0)return false}return true};A.prototype.RayCast=function(k,z,u){var D=0,H=z.maxFraction,O=0,E=0,R,N;O=z.p1.x-u.position.x;E=z.p1.y-u.position.y;R=u.R;var S=O*R.col1.x+E*R.col1.y,aa=O*R.col2.x+E*R.col2.y;O=z.p2.x-u.position.x;E=z.p2.y-u.position.y;R=u.R;z=O*R.col1.x+E*R.col1.y-S;R=O*R.col2.x+E*R.col2.y-aa;for(var Z=parseInt(-1),d=0;d<this.m_vertexCount;++d){N=this.m_vertices[d];O=N.x-S;E=N.y-aa;N=this.m_normals[d];O=N.x*O+N.y*E;E=N.x*z+N.y*R;if(E==
0){if(O<0)return false}else if(E<0&&O<D*E){D=O/E;Z=d}else if(E>0&&O<H*E)H=O/E;if(H<D-Number.MIN_VALUE)return false}if(Z>=0){k.fraction=D;R=u.R;N=this.m_normals[Z];k.normal.x=R.col1.x*N.x+R.col2.x*N.y;k.normal.y=R.col1.y*N.x+R.col2.y*N.y;return true}return false};A.prototype.ComputeAABB=function(k,z){for(var u=z.R,D=this.m_vertices[0],H=z.position.x+(u.col1.x*D.x+u.col2.x*D.y),O=z.position.y+(u.col1.y*D.x+u.col2.y*D.y),E=H,R=O,N=1;N<this.m_vertexCount;++N){D=this.m_vertices[N];var S=z.position.x+(u.col1.x*
D.x+u.col2.x*D.y);D=z.position.y+(u.col1.y*D.x+u.col2.y*D.y);H=H<S?H:S;O=O<D?O:D;E=E>S?E:S;R=R>D?R:D}k.lowerBound.x=H-this.m_radius;k.lowerBound.y=O-this.m_radius;k.upperBound.x=E+this.m_radius;k.upperBound.y=R+this.m_radius};A.prototype.ComputeMass=function(k,z){if(z===undefined)z=0;if(this.m_vertexCount==2){k.center.x=0.5*(this.m_vertices[0].x+this.m_vertices[1].x);k.center.y=0.5*(this.m_vertices[0].y+this.m_vertices[1].y);k.mass=0;k.I=0}else{for(var u=0,D=0,H=0,O=0,E=1/3,R=0;R<this.m_vertexCount;++R){var N=
this.m_vertices[R],S=R+1<this.m_vertexCount?this.m_vertices[parseInt(R+1)]:this.m_vertices[0],aa=N.x-0,Z=N.y-0,d=S.x-0,h=S.y-0,l=aa*h-Z*d,j=0.5*l;H+=j;u+=j*E*(0+N.x+S.x);D+=j*E*(0+N.y+S.y);N=aa;Z=Z;d=d;h=h;O+=l*(E*(0.25*(N*N+d*N+d*d)+(0*N+0*d))+0+(E*(0.25*(Z*Z+h*Z+h*h)+(0*Z+0*h))+0))}k.mass=z*H;u*=1/H;D*=1/H;k.center.Set(u,D);k.I=z*O}};A.prototype.ComputeSubmergedArea=function(k,z,u,D){if(z===undefined)z=0;var H=B.MulTMV(u.R,k),O=z-B.Dot(k,u.position),E=new Vector_a2j_Number,R=0,N=parseInt(-1);z=
parseInt(-1);var S=false;for(k=k=0;k<this.m_vertexCount;++k){E[k]=B.Dot(H,this.m_vertices[k])-O;var aa=E[k]<-Number.MIN_VALUE;if(k>0)if(aa){if(!S){N=k-1;R++}}else if(S){z=k-1;R++}S=aa}switch(R){case 0:if(S){k=new w;this.ComputeMass(k,1);D.SetV(B.MulX(u,k.center));return k.mass}else return 0;case 1:if(N==-1)N=this.m_vertexCount-1;else z=this.m_vertexCount-1}k=parseInt((N+1)%this.m_vertexCount);H=parseInt((z+1)%this.m_vertexCount);O=(0-E[N])/(E[k]-E[N]);E=(0-E[z])/(E[H]-E[z]);N=new V(this.m_vertices[N].x*
(1-O)+this.m_vertices[k].x*O,this.m_vertices[N].y*(1-O)+this.m_vertices[k].y*O);z=new V(this.m_vertices[z].x*(1-E)+this.m_vertices[H].x*E,this.m_vertices[z].y*(1-E)+this.m_vertices[H].y*E);E=0;O=new V;R=this.m_vertices[k];for(k=k;k!=H;){k=(k+1)%this.m_vertexCount;S=k==H?z:this.m_vertices[k];aa=0.5*((R.x-N.x)*(S.y-N.y)-(R.y-N.y)*(S.x-N.x));E+=aa;O.x+=aa*(N.x+R.x+S.x)/3;O.y+=aa*(N.y+R.y+S.y)/3;R=S}O.Multiply(1/E);D.SetV(B.MulX(u,O));return E};A.prototype.GetVertexCount=function(){return this.m_vertexCount};
A.prototype.GetVertices=function(){return this.m_vertices};A.prototype.GetNormals=function(){return this.m_normals};A.prototype.GetSupport=function(k){for(var z=0,u=this.m_vertices[0].x*k.x+this.m_vertices[0].y*k.y,D=1;D<this.m_vertexCount;++D){var H=this.m_vertices[D].x*k.x+this.m_vertices[D].y*k.y;if(H>u){z=D;u=H}}return z};A.prototype.GetSupportVertex=function(k){for(var z=0,u=this.m_vertices[0].x*k.x+this.m_vertices[0].y*k.y,D=1;D<this.m_vertexCount;++D){var H=this.m_vertices[D].x*k.x+this.m_vertices[D].y*
k.y;if(H>u){z=D;u=H}}return this.m_vertices[z]};A.prototype.Validate=function(){return false};A.prototype.b2PolygonShape=function(){this.__super.b2Shape.call(this);this.m_type=U.e_polygonShape;this.m_centroid=new V;this.m_vertices=new Vector;this.m_normals=new Vector};A.prototype.Reserve=function(k){if(k===undefined)k=0;for(var z=parseInt(this.m_vertices.length);z<k;z++){this.m_vertices[z]=new V;this.m_normals[z]=new V}};A.ComputeCentroid=function(k,z){if(z===undefined)z=0;for(var u=new V,D=0,H=1/
3,O=0;O<z;++O){var E=k[O],R=O+1<z?k[parseInt(O+1)]:k[0],N=0.5*((E.x-0)*(R.y-0)-(E.y-0)*(R.x-0));D+=N;u.x+=N*H*(0+E.x+R.x);u.y+=N*H*(0+E.y+R.y)}u.x*=1/D;u.y*=1/D;return u};A.ComputeOBB=function(k,z,u){if(u===undefined)u=0;var D=0,H=new Vector(u+1);for(D=0;D<u;++D)H[D]=z[D];H[u]=H[0];z=Number.MAX_VALUE;for(D=1;D<=u;++D){var O=H[parseInt(D-1)],E=H[D].x-O.x,R=H[D].y-O.y,N=Math.sqrt(E*E+R*R);E/=N;R/=N;for(var S=-R,aa=E,Z=N=Number.MAX_VALUE,d=-Number.MAX_VALUE,h=-Number.MAX_VALUE,l=0;l<u;++l){var j=H[l].x-
O.x,o=H[l].y-O.y,q=E*j+R*o;j=S*j+aa*o;if(q<N)N=q;if(j<Z)Z=j;if(q>d)d=q;if(j>h)h=j}l=(d-N)*(h-Z);if(l<0.95*z){z=l;k.R.col1.x=E;k.R.col1.y=R;k.R.col2.x=S;k.R.col2.y=aa;E=0.5*(N+d);R=0.5*(Z+h);S=k.R;k.center.x=O.x+(S.col1.x*E+S.col2.x*R);k.center.y=O.y+(S.col1.y*E+S.col2.y*R);k.extents.x=0.5*(d-N);k.extents.y=0.5*(h-Z)}}};Box2D.postDefs.push(function(){Box2D.Collision.Shapes.b2PolygonShape.s_mat=new p});U.b2Shape=function(){};U.prototype.Copy=function(){return null};U.prototype.Set=function(k){this.m_radius=
k.m_radius};U.prototype.GetType=function(){return this.m_type};U.prototype.TestPoint=function(){return false};U.prototype.RayCast=function(){return false};U.prototype.ComputeAABB=function(){};U.prototype.ComputeMass=function(){};U.prototype.ComputeSubmergedArea=function(){return 0};U.TestOverlap=function(k,z,u,D){var H=new L;H.proxyA=new W;H.proxyA.Set(k);H.proxyB=new W;H.proxyB.Set(u);H.transformA=z;H.transformB=D;H.useRadii=true;k=new Y;k.count=0;z=new I;M.Distance(z,k,H);return z.distance<10*Number.MIN_VALUE};
U.prototype.b2Shape=function(){this.m_type=U.e_unknownShape;this.m_radius=F.b2_linearSlop};Box2D.postDefs.push(function(){Box2D.Collision.Shapes.b2Shape.e_unknownShape=parseInt(-1);Box2D.Collision.Shapes.b2Shape.e_circleShape=0;Box2D.Collision.Shapes.b2Shape.e_polygonShape=1;Box2D.Collision.Shapes.b2Shape.e_edgeShape=2;Box2D.Collision.Shapes.b2Shape.e_shapeTypeCount=3;Box2D.Collision.Shapes.b2Shape.e_hitCollide=1;Box2D.Collision.Shapes.b2Shape.e_missCollide=0;Box2D.Collision.Shapes.b2Shape.e_startsInsideCollide=
parseInt(-1)})})();
(function(){var F=Box2D.Common.b2Color,G=Box2D.Common.b2Settings,K=Box2D.Common.Math.b2Math;F.b2Color=function(){this._b=this._g=this._r=0};F.prototype.b2Color=function(y,w,A){if(y===undefined)y=0;if(w===undefined)w=0;if(A===undefined)A=0;this._r=Box2D.parseUInt(255*K.Clamp(y,0,1));this._g=Box2D.parseUInt(255*K.Clamp(w,0,1));this._b=Box2D.parseUInt(255*K.Clamp(A,0,1))};F.prototype.Set=function(y,w,A){if(y===undefined)y=0;if(w===undefined)w=0;if(A===undefined)A=0;this._r=Box2D.parseUInt(255*K.Clamp(y,
0,1));this._g=Box2D.parseUInt(255*K.Clamp(w,0,1));this._b=Box2D.parseUInt(255*K.Clamp(A,0,1))};Object.defineProperty(F.prototype,"r",{enumerable:false,configurable:true,set:function(y){if(y===undefined)y=0;this._r=Box2D.parseUInt(255*K.Clamp(y,0,1))}});Object.defineProperty(F.prototype,"g",{enumerable:false,configurable:true,set:function(y){if(y===undefined)y=0;this._g=Box2D.parseUInt(255*K.Clamp(y,0,1))}});Object.defineProperty(F.prototype,"b",{enumerable:false,configurable:true,set:function(y){if(y===
undefined)y=0;this._b=Box2D.parseUInt(255*K.Clamp(y,0,1))}});Object.defineProperty(F.prototype,"color",{enumerable:false,configurable:true,get:function(){return this._r<<16|this._g<<8|this._b}});G.b2Settings=function(){};G.b2MixFriction=function(y,w){if(y===undefined)y=0;if(w===undefined)w=0;return Math.sqrt(y*w)};G.b2MixRestitution=function(y,w){if(y===undefined)y=0;if(w===undefined)w=0;return y>w?y:w};G.b2Assert=function(y){if(!y)throw"Assertion Failed";};Box2D.postDefs.push(function(){Box2D.Common.b2Settings.VERSION=
"2.1alpha";Box2D.Common.b2Settings.USHRT_MAX=65535;Box2D.Common.b2Settings.b2_pi=Math.PI;Box2D.Common.b2Settings.b2_maxManifoldPoints=2;Box2D.Common.b2Settings.b2_aabbExtension=0.1;Box2D.Common.b2Settings.b2_aabbMultiplier=2;Box2D.Common.b2Settings.b2_polygonRadius=2*G.b2_linearSlop;Box2D.Common.b2Settings.b2_linearSlop=0.0050;Box2D.Common.b2Settings.b2_angularSlop=2/180*G.b2_pi;Box2D.Common.b2Settings.b2_toiSlop=8*G.b2_linearSlop;Box2D.Common.b2Settings.b2_maxTOIContactsPerIsland=32;Box2D.Common.b2Settings.b2_maxTOIJointsPerIsland=
32;Box2D.Common.b2Settings.b2_velocityThreshold=1;Box2D.Common.b2Settings.b2_maxLinearCorrection=0.2;Box2D.Common.b2Settings.b2_maxAngularCorrection=8/180*G.b2_pi;Box2D.Common.b2Settings.b2_maxTranslation=2;Box2D.Common.b2Settings.b2_maxTranslationSquared=G.b2_maxTranslation*G.b2_maxTranslation;Box2D.Common.b2Settings.b2_maxRotation=0.5*G.b2_pi;Box2D.Common.b2Settings.b2_maxRotationSquared=G.b2_maxRotation*G.b2_maxRotation;Box2D.Common.b2Settings.b2_contactBaumgarte=0.2;Box2D.Common.b2Settings.b2_timeToSleep=
0.5;Box2D.Common.b2Settings.b2_linearSleepTolerance=0.01;Box2D.Common.b2Settings.b2_angularSleepTolerance=2/180*G.b2_pi})})();
(function(){var F=Box2D.Common.Math.b2Mat22,G=Box2D.Common.Math.b2Mat33,K=Box2D.Common.Math.b2Math,y=Box2D.Common.Math.b2Sweep,w=Box2D.Common.Math.b2Transform,A=Box2D.Common.Math.b2Vec2,U=Box2D.Common.Math.b2Vec3;F.b2Mat22=function(){this.col1=new A;this.col2=new A};F.prototype.b2Mat22=function(){this.SetIdentity()};F.FromAngle=function(p){if(p===undefined)p=0;var B=new F;B.Set(p);return B};F.FromVV=function(p,B){var Q=new F;Q.SetVV(p,B);return Q};F.prototype.Set=function(p){if(p===undefined)p=0;
var B=Math.cos(p);p=Math.sin(p);this.col1.x=B;this.col2.x=-p;this.col1.y=p;this.col2.y=B};F.prototype.SetVV=function(p,B){this.col1.SetV(p);this.col2.SetV(B)};F.prototype.Copy=function(){var p=new F;p.SetM(this);return p};F.prototype.SetM=function(p){this.col1.SetV(p.col1);this.col2.SetV(p.col2)};F.prototype.AddM=function(p){this.col1.x+=p.col1.x;this.col1.y+=p.col1.y;this.col2.x+=p.col2.x;this.col2.y+=p.col2.y};F.prototype.SetIdentity=function(){this.col1.x=1;this.col2.x=0;this.col1.y=0;this.col2.y=
1};F.prototype.SetZero=function(){this.col1.x=0;this.col2.x=0;this.col1.y=0;this.col2.y=0};F.prototype.GetAngle=function(){return Math.atan2(this.col1.y,this.col1.x)};F.prototype.GetInverse=function(p){var B=this.col1.x,Q=this.col2.x,V=this.col1.y,M=this.col2.y,L=B*M-Q*V;if(L!=0)L=1/L;p.col1.x=L*M;p.col2.x=-L*Q;p.col1.y=-L*V;p.col2.y=L*B;return p};F.prototype.Solve=function(p,B,Q){if(B===undefined)B=0;if(Q===undefined)Q=0;var V=this.col1.x,M=this.col2.x,L=this.col1.y,I=this.col2.y,W=V*I-M*L;if(W!=
0)W=1/W;p.x=W*(I*B-M*Q);p.y=W*(V*Q-L*B);return p};F.prototype.Abs=function(){this.col1.Abs();this.col2.Abs()};G.b2Mat33=function(){this.col1=new U;this.col2=new U;this.col3=new U};G.prototype.b2Mat33=function(p,B,Q){if(p===undefined)p=null;if(B===undefined)B=null;if(Q===undefined)Q=null;if(!p&&!B&&!Q){this.col1.SetZero();this.col2.SetZero();this.col3.SetZero()}else{this.col1.SetV(p);this.col2.SetV(B);this.col3.SetV(Q)}};G.prototype.SetVVV=function(p,B,Q){this.col1.SetV(p);this.col2.SetV(B);this.col3.SetV(Q)};
G.prototype.Copy=function(){return new G(this.col1,this.col2,this.col3)};G.prototype.SetM=function(p){this.col1.SetV(p.col1);this.col2.SetV(p.col2);this.col3.SetV(p.col3)};G.prototype.AddM=function(p){this.col1.x+=p.col1.x;this.col1.y+=p.col1.y;this.col1.z+=p.col1.z;this.col2.x+=p.col2.x;this.col2.y+=p.col2.y;this.col2.z+=p.col2.z;this.col3.x+=p.col3.x;this.col3.y+=p.col3.y;this.col3.z+=p.col3.z};G.prototype.SetIdentity=function(){this.col1.x=1;this.col2.x=0;this.col3.x=0;this.col1.y=0;this.col2.y=
1;this.col3.y=0;this.col1.z=0;this.col2.z=0;this.col3.z=1};G.prototype.SetZero=function(){this.col1.x=0;this.col2.x=0;this.col3.x=0;this.col1.y=0;this.col2.y=0;this.col3.y=0;this.col1.z=0;this.col2.z=0;this.col3.z=0};G.prototype.Solve22=function(p,B,Q){if(B===undefined)B=0;if(Q===undefined)Q=0;var V=this.col1.x,M=this.col2.x,L=this.col1.y,I=this.col2.y,W=V*I-M*L;if(W!=0)W=1/W;p.x=W*(I*B-M*Q);p.y=W*(V*Q-L*B);return p};G.prototype.Solve33=function(p,B,Q,V){if(B===undefined)B=0;if(Q===undefined)Q=0;
if(V===undefined)V=0;var M=this.col1.x,L=this.col1.y,I=this.col1.z,W=this.col2.x,Y=this.col2.y,k=this.col2.z,z=this.col3.x,u=this.col3.y,D=this.col3.z,H=M*(Y*D-k*u)+L*(k*z-W*D)+I*(W*u-Y*z);if(H!=0)H=1/H;p.x=H*(B*(Y*D-k*u)+Q*(k*z-W*D)+V*(W*u-Y*z));p.y=H*(M*(Q*D-V*u)+L*(V*z-B*D)+I*(B*u-Q*z));p.z=H*(M*(Y*V-k*Q)+L*(k*B-W*V)+I*(W*Q-Y*B));return p};K.b2Math=function(){};K.IsValid=function(p){if(p===undefined)p=0;return isFinite(p)};K.Dot=function(p,B){return p.x*B.x+p.y*B.y};K.CrossVV=function(p,B){return p.x*
B.y-p.y*B.x};K.CrossVF=function(p,B){if(B===undefined)B=0;return new A(B*p.y,-B*p.x)};K.CrossFV=function(p,B){if(p===undefined)p=0;return new A(-p*B.y,p*B.x)};K.MulMV=function(p,B){return new A(p.col1.x*B.x+p.col2.x*B.y,p.col1.y*B.x+p.col2.y*B.y)};K.MulTMV=function(p,B){return new A(K.Dot(B,p.col1),K.Dot(B,p.col2))};K.MulX=function(p,B){var Q=K.MulMV(p.R,B);Q.x+=p.position.x;Q.y+=p.position.y;return Q};K.MulXT=function(p,B){var Q=K.SubtractVV(B,p.position),V=Q.x*p.R.col1.x+Q.y*p.R.col1.y;Q.y=Q.x*
p.R.col2.x+Q.y*p.R.col2.y;Q.x=V;return Q};K.AddVV=function(p,B){return new A(p.x+B.x,p.y+B.y)};K.SubtractVV=function(p,B){return new A(p.x-B.x,p.y-B.y)};K.Distance=function(p,B){var Q=p.x-B.x,V=p.y-B.y;return Math.sqrt(Q*Q+V*V)};K.DistanceSquared=function(p,B){var Q=p.x-B.x,V=p.y-B.y;return Q*Q+V*V};K.MulFV=function(p,B){if(p===undefined)p=0;return new A(p*B.x,p*B.y)};K.AddMM=function(p,B){return F.FromVV(K.AddVV(p.col1,B.col1),K.AddVV(p.col2,B.col2))};K.MulMM=function(p,B){return F.FromVV(K.MulMV(p,
B.col1),K.MulMV(p,B.col2))};K.MulTMM=function(p,B){var Q=new A(K.Dot(p.col1,B.col1),K.Dot(p.col2,B.col1)),V=new A(K.Dot(p.col1,B.col2),K.Dot(p.col2,B.col2));return F.FromVV(Q,V)};K.Abs=function(p){if(p===undefined)p=0;return p>0?p:-p};K.AbsV=function(p){return new A(K.Abs(p.x),K.Abs(p.y))};K.AbsM=function(p){return F.FromVV(K.AbsV(p.col1),K.AbsV(p.col2))};K.Min=function(p,B){if(p===undefined)p=0;if(B===undefined)B=0;return p<B?p:B};K.MinV=function(p,B){return new A(K.Min(p.x,B.x),K.Min(p.y,B.y))};
K.Max=function(p,B){if(p===undefined)p=0;if(B===undefined)B=0;return p>B?p:B};K.MaxV=function(p,B){return new A(K.Max(p.x,B.x),K.Max(p.y,B.y))};K.Clamp=function(p,B,Q){if(p===undefined)p=0;if(B===undefined)B=0;if(Q===undefined)Q=0;return p<B?B:p>Q?Q:p};K.ClampV=function(p,B,Q){return K.MaxV(B,K.MinV(p,Q))};K.Swap=function(p,B){var Q=p[0];p[0]=B[0];B[0]=Q};K.Random=function(){return Math.random()*2-1};K.RandomRange=function(p,B){if(p===undefined)p=0;if(B===undefined)B=0;var Q=Math.random();return Q=
(B-p)*Q+p};K.NextPowerOfTwo=function(p){if(p===undefined)p=0;p|=p>>1&2147483647;p|=p>>2&1073741823;p|=p>>4&268435455;p|=p>>8&16777215;p|=p>>16&65535;return p+1};K.IsPowerOfTwo=function(p){if(p===undefined)p=0;return p>0&&(p&p-1)==0};Box2D.postDefs.push(function(){Box2D.Common.Math.b2Math.b2Vec2_zero=new A(0,0);Box2D.Common.Math.b2Math.b2Mat22_identity=F.FromVV(new A(1,0),new A(0,1));Box2D.Common.Math.b2Math.b2Transform_identity=new w(K.b2Vec2_zero,K.b2Mat22_identity)});y.b2Sweep=function(){this.localCenter=
new A;this.c0=new A;this.c=new A};y.prototype.Set=function(p){this.localCenter.SetV(p.localCenter);this.c0.SetV(p.c0);this.c.SetV(p.c);this.a0=p.a0;this.a=p.a;this.t0=p.t0};y.prototype.Copy=function(){var p=new y;p.localCenter.SetV(this.localCenter);p.c0.SetV(this.c0);p.c.SetV(this.c);p.a0=this.a0;p.a=this.a;p.t0=this.t0;return p};y.prototype.GetTransform=function(p,B){if(B===undefined)B=0;p.position.x=(1-B)*this.c0.x+B*this.c.x;p.position.y=(1-B)*this.c0.y+B*this.c.y;p.R.Set((1-B)*this.a0+B*this.a);
var Q=p.R;p.position.x-=Q.col1.x*this.localCenter.x+Q.col2.x*this.localCenter.y;p.position.y-=Q.col1.y*this.localCenter.x+Q.col2.y*this.localCenter.y};y.prototype.Advance=function(p){if(p===undefined)p=0;if(this.t0<p&&1-this.t0>Number.MIN_VALUE){var B=(p-this.t0)/(1-this.t0);this.c0.x=(1-B)*this.c0.x+B*this.c.x;this.c0.y=(1-B)*this.c0.y+B*this.c.y;this.a0=(1-B)*this.a0+B*this.a;this.t0=p}};w.b2Transform=function(){this.position=new A;this.R=new F};w.prototype.b2Transform=function(p,B){if(p===undefined)p=
null;if(B===undefined)B=null;if(p){this.position.SetV(p);this.R.SetM(B)}};w.prototype.Initialize=function(p,B){this.position.SetV(p);this.R.SetM(B)};w.prototype.SetIdentity=function(){this.position.SetZero();this.R.SetIdentity()};w.prototype.Set=function(p){this.position.SetV(p.position);this.R.SetM(p.R)};w.prototype.GetAngle=function(){return Math.atan2(this.R.col1.y,this.R.col1.x)};A.b2Vec2=function(){};A.prototype.b2Vec2=function(p,B){if(p===undefined)p=0;if(B===undefined)B=0;this.x=p;this.y=B};
A.prototype.SetZero=function(){this.y=this.x=0};A.prototype.Set=function(p,B){if(p===undefined)p=0;if(B===undefined)B=0;this.x=p;this.y=B};A.prototype.SetV=function(p){this.x=p.x;this.y=p.y};A.prototype.GetNegative=function(){return new A(-this.x,-this.y)};A.prototype.NegativeSelf=function(){this.x=-this.x;this.y=-this.y};A.Make=function(p,B){if(p===undefined)p=0;if(B===undefined)B=0;return new A(p,B)};A.prototype.Copy=function(){return new A(this.x,this.y)};A.prototype.Add=function(p){this.x+=p.x;
this.y+=p.y};A.prototype.Subtract=function(p){this.x-=p.x;this.y-=p.y};A.prototype.Multiply=function(p){if(p===undefined)p=0;this.x*=p;this.y*=p};A.prototype.MulM=function(p){var B=this.x;this.x=p.col1.x*B+p.col2.x*this.y;this.y=p.col1.y*B+p.col2.y*this.y};A.prototype.MulTM=function(p){var B=K.Dot(this,p.col1);this.y=K.Dot(this,p.col2);this.x=B};A.prototype.CrossVF=function(p){if(p===undefined)p=0;var B=this.x;this.x=p*this.y;this.y=-p*B};A.prototype.CrossFV=function(p){if(p===undefined)p=0;var B=
this.x;this.x=-p*this.y;this.y=p*B};A.prototype.MinV=function(p){this.x=this.x<p.x?this.x:p.x;this.y=this.y<p.y?this.y:p.y};A.prototype.MaxV=function(p){this.x=this.x>p.x?this.x:p.x;this.y=this.y>p.y?this.y:p.y};A.prototype.Abs=function(){if(this.x<0)this.x=-this.x;if(this.y<0)this.y=-this.y};A.prototype.Length=function(){return Math.sqrt(this.x*this.x+this.y*this.y)};A.prototype.LengthSquared=function(){return this.x*this.x+this.y*this.y};A.prototype.Normalize=function(){var p=Math.sqrt(this.x*this.x+
this.y*this.y);if(p<Number.MIN_VALUE)return 0;var B=1/p;this.x*=B;this.y*=B;return p};A.prototype.IsValid=function(){return K.IsValid(this.x)&&K.IsValid(this.y)};U.b2Vec3=function(){};U.prototype.b2Vec3=function(p,B,Q){if(p===undefined)p=0;if(B===undefined)B=0;if(Q===undefined)Q=0;this.x=p;this.y=B;this.z=Q};U.prototype.SetZero=function(){this.x=this.y=this.z=0};U.prototype.Set=function(p,B,Q){if(p===undefined)p=0;if(B===undefined)B=0;if(Q===undefined)Q=0;this.x=p;this.y=B;this.z=Q};U.prototype.SetV=
function(p){this.x=p.x;this.y=p.y;this.z=p.z};U.prototype.GetNegative=function(){return new U(-this.x,-this.y,-this.z)};U.prototype.NegativeSelf=function(){this.x=-this.x;this.y=-this.y;this.z=-this.z};U.prototype.Copy=function(){return new U(this.x,this.y,this.z)};U.prototype.Add=function(p){this.x+=p.x;this.y+=p.y;this.z+=p.z};U.prototype.Subtract=function(p){this.x-=p.x;this.y-=p.y;this.z-=p.z};U.prototype.Multiply=function(p){if(p===undefined)p=0;this.x*=p;this.y*=p;this.z*=p}})();
(function(){var F=Box2D.Common.Math.b2Math,G=Box2D.Common.Math.b2Sweep,K=Box2D.Common.Math.b2Transform,y=Box2D.Common.Math.b2Vec2,w=Box2D.Common.b2Color,A=Box2D.Common.b2Settings,U=Box2D.Collision.b2AABB,p=Box2D.Collision.b2ContactPoint,B=Box2D.Collision.b2DynamicTreeBroadPhase,Q=Box2D.Collision.b2RayCastInput,V=Box2D.Collision.b2RayCastOutput,M=Box2D.Collision.Shapes.b2CircleShape,L=Box2D.Collision.Shapes.b2EdgeShape,I=Box2D.Collision.Shapes.b2MassData,W=Box2D.Collision.Shapes.b2PolygonShape,Y=Box2D.Collision.Shapes.b2Shape,
k=Box2D.Dynamics.b2Body,z=Box2D.Dynamics.b2BodyDef,u=Box2D.Dynamics.b2ContactFilter,D=Box2D.Dynamics.b2ContactImpulse,H=Box2D.Dynamics.b2ContactListener,O=Box2D.Dynamics.b2ContactManager,E=Box2D.Dynamics.b2DebugDraw,R=Box2D.Dynamics.b2DestructionListener,N=Box2D.Dynamics.b2FilterData,S=Box2D.Dynamics.b2Fixture,aa=Box2D.Dynamics.b2FixtureDef,Z=Box2D.Dynamics.b2Island,d=Box2D.Dynamics.b2TimeStep,h=Box2D.Dynamics.b2World,l=Box2D.Dynamics.Contacts.b2Contact,j=Box2D.Dynamics.Contacts.b2ContactFactory,
o=Box2D.Dynamics.Contacts.b2ContactSolver,q=Box2D.Dynamics.Joints.b2Joint,n=Box2D.Dynamics.Joints.b2PulleyJoint;k.b2Body=function(){this.m_xf=new K;this.m_sweep=new G;this.m_linearVelocity=new y;this.m_force=new y};k.prototype.connectEdges=function(a,c,g){if(g===undefined)g=0;var b=Math.atan2(c.GetDirectionVector().y,c.GetDirectionVector().x);g=F.MulFV(Math.tan((b-g)*0.5),c.GetDirectionVector());g=F.SubtractVV(g,c.GetNormalVector());g=F.MulFV(A.b2_toiSlop,g);g=F.AddVV(g,c.GetVertex1());var e=F.AddVV(a.GetDirectionVector(),
c.GetDirectionVector());e.Normalize();var f=F.Dot(a.GetDirectionVector(),c.GetNormalVector())>0;a.SetNextEdge(c,g,e,f);c.SetPrevEdge(a,g,e,f);return b};k.prototype.CreateFixture=function(a){if(this.m_world.IsLocked()==true)return null;var c=new S;c.Create(this,this.m_xf,a);this.m_flags&k.e_activeFlag&&c.CreateProxy(this.m_world.m_contactManager.m_broadPhase,this.m_xf);c.m_next=this.m_fixtureList;this.m_fixtureList=c;++this.m_fixtureCount;c.m_body=this;c.m_density>0&&this.ResetMassData();this.m_world.m_flags|=
h.e_newFixture;return c};k.prototype.CreateFixture2=function(a,c){if(c===undefined)c=0;var g=new aa;g.shape=a;g.density=c;return this.CreateFixture(g)};k.prototype.DestroyFixture=function(a){if(this.m_world.IsLocked()!=true){for(var c=this.m_fixtureList,g=null;c!=null;){if(c==a){if(g)g.m_next=a.m_next;else this.m_fixtureList=a.m_next;break}g=c;c=c.m_next}for(c=this.m_contactList;c;){g=c.contact;c=c.next;var b=g.GetFixtureA(),e=g.GetFixtureB();if(a==b||a==e)this.m_world.m_contactManager.Destroy(g)}this.m_flags&
k.e_activeFlag&&a.DestroyProxy(this.m_world.m_contactManager.m_broadPhase);a.Destroy();a.m_body=null;a.m_next=null;--this.m_fixtureCount;this.ResetMassData()}};k.prototype.SetPositionAndAngle=function(a,c){if(c===undefined)c=0;var g;if(this.m_world.IsLocked()!=true){this.m_xf.R.Set(c);this.m_xf.position.SetV(a);g=this.m_xf.R;var b=this.m_sweep.localCenter;this.m_sweep.c.x=g.col1.x*b.x+g.col2.x*b.y;this.m_sweep.c.y=g.col1.y*b.x+g.col2.y*b.y;this.m_sweep.c.x+=this.m_xf.position.x;this.m_sweep.c.y+=
this.m_xf.position.y;this.m_sweep.c0.SetV(this.m_sweep.c);this.m_sweep.a0=this.m_sweep.a=c;b=this.m_world.m_contactManager.m_broadPhase;for(g=this.m_fixtureList;g;g=g.m_next)g.Synchronize(b,this.m_xf,this.m_xf);this.m_world.m_contactManager.FindNewContacts()}};k.prototype.SetTransform=function(a){this.SetPositionAndAngle(a.position,a.GetAngle())};k.prototype.GetTransform=function(){return this.m_xf};k.prototype.GetPosition=function(){return this.m_xf.position};k.prototype.SetPosition=function(a){this.SetPositionAndAngle(a,
this.GetAngle())};k.prototype.GetAngle=function(){return this.m_sweep.a};k.prototype.SetAngle=function(a){if(a===undefined)a=0;this.SetPositionAndAngle(this.GetPosition(),a)};k.prototype.GetWorldCenter=function(){return this.m_sweep.c};k.prototype.GetLocalCenter=function(){return this.m_sweep.localCenter};k.prototype.SetLinearVelocity=function(a){this.m_type!=k.b2_staticBody&&this.m_linearVelocity.SetV(a)};k.prototype.GetLinearVelocity=function(){return this.m_linearVelocity};k.prototype.SetAngularVelocity=
function(a){if(a===undefined)a=0;if(this.m_type!=k.b2_staticBody)this.m_angularVelocity=a};k.prototype.GetAngularVelocity=function(){return this.m_angularVelocity};k.prototype.GetDefinition=function(){var a=new z;a.type=this.GetType();a.allowSleep=(this.m_flags&k.e_allowSleepFlag)==k.e_allowSleepFlag;a.angle=this.GetAngle();a.angularDamping=this.m_angularDamping;a.angularVelocity=this.m_angularVelocity;a.fixedRotation=(this.m_flags&k.e_fixedRotationFlag)==k.e_fixedRotationFlag;a.bullet=(this.m_flags&
k.e_bulletFlag)==k.e_bulletFlag;a.awake=(this.m_flags&k.e_awakeFlag)==k.e_awakeFlag;a.linearDamping=this.m_linearDamping;a.linearVelocity.SetV(this.GetLinearVelocity());a.position=this.GetPosition();a.userData=this.GetUserData();return a};k.prototype.ApplyForce=function(a,c){if(this.m_type==k.b2_dynamicBody){this.IsAwake()==false&&this.SetAwake(true);this.m_force.x+=a.x;this.m_force.y+=a.y;this.m_torque+=(c.x-this.m_sweep.c.x)*a.y-(c.y-this.m_sweep.c.y)*a.x}};k.prototype.ApplyTorque=function(a){if(a===
undefined)a=0;if(this.m_type==k.b2_dynamicBody){this.IsAwake()==false&&this.SetAwake(true);this.m_torque+=a}};k.prototype.ApplyImpulse=function(a,c){if(this.m_type==k.b2_dynamicBody){this.IsAwake()==false&&this.SetAwake(true);this.m_linearVelocity.x+=this.m_invMass*a.x;this.m_linearVelocity.y+=this.m_invMass*a.y;this.m_angularVelocity+=this.m_invI*((c.x-this.m_sweep.c.x)*a.y-(c.y-this.m_sweep.c.y)*a.x)}};k.prototype.Split=function(a){for(var c=this.GetLinearVelocity().Copy(),g=this.GetAngularVelocity(),
b=this.GetWorldCenter(),e=this.m_world.CreateBody(this.GetDefinition()),f,m=this.m_fixtureList;m;)if(a(m)){var r=m.m_next;if(f)f.m_next=r;else this.m_fixtureList=r;this.m_fixtureCount--;m.m_next=e.m_fixtureList;e.m_fixtureList=m;e.m_fixtureCount++;m.m_body=e;m=r}else{f=m;m=m.m_next}this.ResetMassData();e.ResetMassData();f=this.GetWorldCenter();a=e.GetWorldCenter();f=F.AddVV(c,F.CrossFV(g,F.SubtractVV(f,b)));c=F.AddVV(c,F.CrossFV(g,F.SubtractVV(a,b)));this.SetLinearVelocity(f);e.SetLinearVelocity(c);
this.SetAngularVelocity(g);e.SetAngularVelocity(g);this.SynchronizeFixtures();e.SynchronizeFixtures();return e};k.prototype.Merge=function(a){var c;for(c=a.m_fixtureList;c;){var g=c.m_next;a.m_fixtureCount--;c.m_next=this.m_fixtureList;this.m_fixtureList=c;this.m_fixtureCount++;c.m_body=e;c=g}b.m_fixtureCount=0;var b=this,e=a;b.GetWorldCenter();e.GetWorldCenter();b.GetLinearVelocity().Copy();e.GetLinearVelocity().Copy();b.GetAngularVelocity();e.GetAngularVelocity();b.ResetMassData();this.SynchronizeFixtures()};
k.prototype.GetMass=function(){return this.m_mass};k.prototype.GetInertia=function(){return this.m_I};k.prototype.GetMassData=function(a){a.mass=this.m_mass;a.I=this.m_I;a.center.SetV(this.m_sweep.localCenter)};k.prototype.SetMassData=function(a){A.b2Assert(this.m_world.IsLocked()==false);if(this.m_world.IsLocked()!=true)if(this.m_type==k.b2_dynamicBody){this.m_invI=this.m_I=this.m_invMass=0;this.m_mass=a.mass;if(this.m_mass<=0)this.m_mass=1;this.m_invMass=1/this.m_mass;if(a.I>0&&(this.m_flags&k.e_fixedRotationFlag)==
0){this.m_I=a.I-this.m_mass*(a.center.x*a.center.x+a.center.y*a.center.y);this.m_invI=1/this.m_I}var c=this.m_sweep.c.Copy();this.m_sweep.localCenter.SetV(a.center);this.m_sweep.c0.SetV(F.MulX(this.m_xf,this.m_sweep.localCenter));this.m_sweep.c.SetV(this.m_sweep.c0);this.m_linearVelocity.x+=this.m_angularVelocity*-(this.m_sweep.c.y-c.y);this.m_linearVelocity.y+=this.m_angularVelocity*+(this.m_sweep.c.x-c.x)}};k.prototype.ResetMassData=function(){this.m_invI=this.m_I=this.m_invMass=this.m_mass=0;this.m_sweep.localCenter.SetZero();
if(!(this.m_type==k.b2_staticBody||this.m_type==k.b2_kinematicBody)){for(var a=y.Make(0,0),c=this.m_fixtureList;c;c=c.m_next)if(c.m_density!=0){var g=c.GetMassData();this.m_mass+=g.mass;a.x+=g.center.x*g.mass;a.y+=g.center.y*g.mass;this.m_I+=g.I}if(this.m_mass>0){this.m_invMass=1/this.m_mass;a.x*=this.m_invMass;a.y*=this.m_invMass}else this.m_invMass=this.m_mass=1;if(this.m_I>0&&(this.m_flags&k.e_fixedRotationFlag)==0){this.m_I-=this.m_mass*(a.x*a.x+a.y*a.y);this.m_I*=this.m_inertiaScale;A.b2Assert(this.m_I>
0);this.m_invI=1/this.m_I}else this.m_invI=this.m_I=0;c=this.m_sweep.c.Copy();this.m_sweep.localCenter.SetV(a);this.m_sweep.c0.SetV(F.MulX(this.m_xf,this.m_sweep.localCenter));this.m_sweep.c.SetV(this.m_sweep.c0);this.m_linearVelocity.x+=this.m_angularVelocity*-(this.m_sweep.c.y-c.y);this.m_linearVelocity.y+=this.m_angularVelocity*+(this.m_sweep.c.x-c.x)}};k.prototype.GetWorldPoint=function(a){var c=this.m_xf.R;a=new y(c.col1.x*a.x+c.col2.x*a.y,c.col1.y*a.x+c.col2.y*a.y);a.x+=this.m_xf.position.x;
a.y+=this.m_xf.position.y;return a};k.prototype.GetWorldVector=function(a){return F.MulMV(this.m_xf.R,a)};k.prototype.GetLocalPoint=function(a){return F.MulXT(this.m_xf,a)};k.prototype.GetLocalVector=function(a){return F.MulTMV(this.m_xf.R,a)};k.prototype.GetLinearVelocityFromWorldPoint=function(a){return new y(this.m_linearVelocity.x-this.m_angularVelocity*(a.y-this.m_sweep.c.y),this.m_linearVelocity.y+this.m_angularVelocity*(a.x-this.m_sweep.c.x))};k.prototype.GetLinearVelocityFromLocalPoint=function(a){var c=
this.m_xf.R;a=new y(c.col1.x*a.x+c.col2.x*a.y,c.col1.y*a.x+c.col2.y*a.y);a.x+=this.m_xf.position.x;a.y+=this.m_xf.position.y;return new y(this.m_linearVelocity.x-this.m_angularVelocity*(a.y-this.m_sweep.c.y),this.m_linearVelocity.y+this.m_angularVelocity*(a.x-this.m_sweep.c.x))};k.prototype.GetLinearDamping=function(){return this.m_linearDamping};k.prototype.SetLinearDamping=function(a){if(a===undefined)a=0;this.m_linearDamping=a};k.prototype.GetAngularDamping=function(){return this.m_angularDamping};
k.prototype.SetAngularDamping=function(a){if(a===undefined)a=0;this.m_angularDamping=a};k.prototype.SetType=function(a){if(a===undefined)a=0;if(this.m_type!=a){this.m_type=a;this.ResetMassData();if(this.m_type==k.b2_staticBody){this.m_linearVelocity.SetZero();this.m_angularVelocity=0}this.SetAwake(true);this.m_force.SetZero();this.m_torque=0;for(a=this.m_contactList;a;a=a.next)a.contact.FlagForFiltering()}};k.prototype.GetType=function(){return this.m_type};k.prototype.SetBullet=function(a){if(a)this.m_flags|=
k.e_bulletFlag;else this.m_flags&=~k.e_bulletFlag};k.prototype.IsBullet=function(){return(this.m_flags&k.e_bulletFlag)==k.e_bulletFlag};k.prototype.SetSleepingAllowed=function(a){if(a)this.m_flags|=k.e_allowSleepFlag;else{this.m_flags&=~k.e_allowSleepFlag;this.SetAwake(true)}};k.prototype.SetAwake=function(a){if(a){this.m_flags|=k.e_awakeFlag;this.m_sleepTime=0}else{this.m_flags&=~k.e_awakeFlag;this.m_sleepTime=0;this.m_linearVelocity.SetZero();this.m_angularVelocity=0;this.m_force.SetZero();this.m_torque=
0}};k.prototype.IsAwake=function(){return(this.m_flags&k.e_awakeFlag)==k.e_awakeFlag};k.prototype.SetFixedRotation=function(a){if(a)this.m_flags|=k.e_fixedRotationFlag;else this.m_flags&=~k.e_fixedRotationFlag;this.ResetMassData()};k.prototype.IsFixedRotation=function(){return(this.m_flags&k.e_fixedRotationFlag)==k.e_fixedRotationFlag};k.prototype.SetActive=function(a){if(a!=this.IsActive()){var c;if(a){this.m_flags|=k.e_activeFlag;a=this.m_world.m_contactManager.m_broadPhase;for(c=this.m_fixtureList;c;c=
c.m_next)c.CreateProxy(a,this.m_xf)}else{this.m_flags&=~k.e_activeFlag;a=this.m_world.m_contactManager.m_broadPhase;for(c=this.m_fixtureList;c;c=c.m_next)c.DestroyProxy(a);for(a=this.m_contactList;a;){c=a;a=a.next;this.m_world.m_contactManager.Destroy(c.contact)}this.m_contactList=null}}};k.prototype.IsActive=function(){return(this.m_flags&k.e_activeFlag)==k.e_activeFlag};k.prototype.IsSleepingAllowed=function(){return(this.m_flags&k.e_allowSleepFlag)==k.e_allowSleepFlag};k.prototype.GetFixtureList=
function(){return this.m_fixtureList};k.prototype.GetJointList=function(){return this.m_jointList};k.prototype.GetControllerList=function(){return this.m_controllerList};k.prototype.GetContactList=function(){return this.m_contactList};k.prototype.GetNext=function(){return this.m_next};k.prototype.GetUserData=function(){return this.m_userData};k.prototype.SetUserData=function(a){this.m_userData=a};k.prototype.GetWorld=function(){return this.m_world};k.prototype.b2Body=function(a,c){this.m_flags=0;
if(a.bullet)this.m_flags|=k.e_bulletFlag;if(a.fixedRotation)this.m_flags|=k.e_fixedRotationFlag;if(a.allowSleep)this.m_flags|=k.e_allowSleepFlag;if(a.awake)this.m_flags|=k.e_awakeFlag;if(a.active)this.m_flags|=k.e_activeFlag;this.m_world=c;this.m_xf.position.SetV(a.position);this.m_xf.R.Set(a.angle);this.m_sweep.localCenter.SetZero();this.m_sweep.t0=1;this.m_sweep.a0=this.m_sweep.a=a.angle;var g=this.m_xf.R,b=this.m_sweep.localCenter;this.m_sweep.c.x=g.col1.x*b.x+g.col2.x*b.y;this.m_sweep.c.y=g.col1.y*
b.x+g.col2.y*b.y;this.m_sweep.c.x+=this.m_xf.position.x;this.m_sweep.c.y+=this.m_xf.position.y;this.m_sweep.c0.SetV(this.m_sweep.c);this.m_contactList=this.m_controllerList=this.m_jointList=null;this.m_controllerCount=0;this.m_next=this.m_prev=null;this.m_linearVelocity.SetV(a.linearVelocity);this.m_angularVelocity=a.angularVelocity;this.m_linearDamping=a.linearDamping;this.m_angularDamping=a.angularDamping;this.m_force.Set(0,0);this.m_sleepTime=this.m_torque=0;this.m_type=a.type;if(this.m_type==
k.b2_dynamicBody)this.m_invMass=this.m_mass=1;else this.m_invMass=this.m_mass=0;this.m_invI=this.m_I=0;this.m_inertiaScale=a.inertiaScale;this.m_userData=a.userData;this.m_fixtureList=null;this.m_fixtureCount=0};k.prototype.SynchronizeFixtures=function(){var a=k.s_xf1;a.R.Set(this.m_sweep.a0);var c=a.R,g=this.m_sweep.localCenter;a.position.x=this.m_sweep.c0.x-(c.col1.x*g.x+c.col2.x*g.y);a.position.y=this.m_sweep.c0.y-(c.col1.y*g.x+c.col2.y*g.y);g=this.m_world.m_contactManager.m_broadPhase;for(c=this.m_fixtureList;c;c=
c.m_next)c.Synchronize(g,a,this.m_xf)};k.prototype.SynchronizeTransform=function(){this.m_xf.R.Set(this.m_sweep.a);var a=this.m_xf.R,c=this.m_sweep.localCenter;this.m_xf.position.x=this.m_sweep.c.x-(a.col1.x*c.x+a.col2.x*c.y);this.m_xf.position.y=this.m_sweep.c.y-(a.col1.y*c.x+a.col2.y*c.y)};k.prototype.ShouldCollide=function(a){if(this.m_type!=k.b2_dynamicBody&&a.m_type!=k.b2_dynamicBody)return false;for(var c=this.m_jointList;c;c=c.next)if(c.other==a)if(c.joint.m_collideConnected==false)return false;
return true};k.prototype.Advance=function(a){if(a===undefined)a=0;this.m_sweep.Advance(a);this.m_sweep.c.SetV(this.m_sweep.c0);this.m_sweep.a=this.m_sweep.a0;this.SynchronizeTransform()};Box2D.postDefs.push(function(){Box2D.Dynamics.b2Body.s_xf1=new K;Box2D.Dynamics.b2Body.e_islandFlag=1;Box2D.Dynamics.b2Body.e_awakeFlag=2;Box2D.Dynamics.b2Body.e_allowSleepFlag=4;Box2D.Dynamics.b2Body.e_bulletFlag=8;Box2D.Dynamics.b2Body.e_fixedRotationFlag=16;Box2D.Dynamics.b2Body.e_activeFlag=32;Box2D.Dynamics.b2Body.b2_staticBody=
0;Box2D.Dynamics.b2Body.b2_kinematicBody=1;Box2D.Dynamics.b2Body.b2_dynamicBody=2});z.b2BodyDef=function(){this.position=new y;this.linearVelocity=new y};z.prototype.b2BodyDef=function(){this.userData=null;this.position.Set(0,0);this.angle=0;this.linearVelocity.Set(0,0);this.angularDamping=this.linearDamping=this.angularVelocity=0;this.awake=this.allowSleep=true;this.bullet=this.fixedRotation=false;this.type=k.b2_staticBody;this.active=true;this.inertiaScale=1};u.b2ContactFilter=function(){};u.prototype.ShouldCollide=
function(a,c){var g=a.GetFilterData(),b=c.GetFilterData();if(g.groupIndex==b.groupIndex&&g.groupIndex!=0)return g.groupIndex>0;return(g.maskBits&b.categoryBits)!=0&&(g.categoryBits&b.maskBits)!=0};u.prototype.RayCollide=function(a,c){if(!a)return true;return this.ShouldCollide(a instanceof S?a:null,c)};Box2D.postDefs.push(function(){Box2D.Dynamics.b2ContactFilter.b2_defaultFilter=new u});D.b2ContactImpulse=function(){this.normalImpulses=new Vector_a2j_Number(A.b2_maxManifoldPoints);this.tangentImpulses=
new Vector_a2j_Number(A.b2_maxManifoldPoints)};H.b2ContactListener=function(){};H.prototype.BeginContact=function(){};H.prototype.EndContact=function(){};H.prototype.PreSolve=function(){};H.prototype.PostSolve=function(){};Box2D.postDefs.push(function(){Box2D.Dynamics.b2ContactListener.b2_defaultListener=new H});O.b2ContactManager=function(){};O.prototype.b2ContactManager=function(){this.m_world=null;this.m_contactCount=0;this.m_contactFilter=u.b2_defaultFilter;this.m_contactListener=H.b2_defaultListener;
this.m_contactFactory=new j(this.m_allocator);this.m_broadPhase=new B};O.prototype.AddPair=function(a,c){var g=a instanceof S?a:null,b=c instanceof S?c:null,e=g.GetBody(),f=b.GetBody();if(e!=f){for(var m=f.GetContactList();m;){if(m.other==e){var r=m.contact.GetFixtureA(),s=m.contact.GetFixtureB();if(r==g&&s==b)return;if(r==b&&s==g)return}m=m.next}if(f.ShouldCollide(e)!=false)if(this.m_contactFilter.ShouldCollide(g,b)!=false){m=this.m_contactFactory.Create(g,b);g=m.GetFixtureA();b=m.GetFixtureB();
e=g.m_body;f=b.m_body;m.m_prev=null;m.m_next=this.m_world.m_contactList;if(this.m_world.m_contactList!=null)this.m_world.m_contactList.m_prev=m;this.m_world.m_contactList=m;m.m_nodeA.contact=m;m.m_nodeA.other=f;m.m_nodeA.prev=null;m.m_nodeA.next=e.m_contactList;if(e.m_contactList!=null)e.m_contactList.prev=m.m_nodeA;e.m_contactList=m.m_nodeA;m.m_nodeB.contact=m;m.m_nodeB.other=e;m.m_nodeB.prev=null;m.m_nodeB.next=f.m_contactList;if(f.m_contactList!=null)f.m_contactList.prev=m.m_nodeB;f.m_contactList=
m.m_nodeB;++this.m_world.m_contactCount}}};O.prototype.FindNewContacts=function(){this.m_broadPhase.UpdatePairs(Box2D.generateCallback(this,this.AddPair))};O.prototype.Destroy=function(a){var c=a.GetFixtureA(),g=a.GetFixtureB();c=c.GetBody();g=g.GetBody();a.IsTouching()&&this.m_contactListener.EndContact(a);if(a.m_prev)a.m_prev.m_next=a.m_next;if(a.m_next)a.m_next.m_prev=a.m_prev;if(a==this.m_world.m_contactList)this.m_world.m_contactList=a.m_next;if(a.m_nodeA.prev)a.m_nodeA.prev.next=a.m_nodeA.next;
if(a.m_nodeA.next)a.m_nodeA.next.prev=a.m_nodeA.prev;if(a.m_nodeA==c.m_contactList)c.m_contactList=a.m_nodeA.next;if(a.m_nodeB.prev)a.m_nodeB.prev.next=a.m_nodeB.next;if(a.m_nodeB.next)a.m_nodeB.next.prev=a.m_nodeB.prev;if(a.m_nodeB==g.m_contactList)g.m_contactList=a.m_nodeB.next;this.m_contactFactory.Destroy(a);--this.m_contactCount};O.prototype.Collide=function(){for(var a=this.m_world.m_contactList;a;){var c=a.GetFixtureA(),g=a.GetFixtureB(),b=c.GetBody(),e=g.GetBody();if(b.IsAwake()==false&&e.IsAwake()==
false)a=a.GetNext();else{if(a.m_flags&l.e_filterFlag){if(e.ShouldCollide(b)==false){c=a;a=c.GetNext();this.Destroy(c);continue}if(this.m_contactFilter.ShouldCollide(c,g)==false){c=a;a=c.GetNext();this.Destroy(c);continue}a.m_flags&=~l.e_filterFlag}if(this.m_broadPhase.TestOverlap(c.m_proxy,g.m_proxy)==false){c=a;a=c.GetNext();this.Destroy(c)}else{a.Update(this.m_contactListener);a=a.GetNext()}}}};Box2D.postDefs.push(function(){Box2D.Dynamics.b2ContactManager.s_evalCP=new p});E.b2DebugDraw=function(){};
E.prototype.b2DebugDraw=function(){};E.prototype.SetFlags=function(){};E.prototype.GetFlags=function(){};E.prototype.AppendFlags=function(){};E.prototype.ClearFlags=function(){};E.prototype.SetSprite=function(){};E.prototype.GetSprite=function(){};E.prototype.SetDrawScale=function(){};E.prototype.GetDrawScale=function(){};E.prototype.SetLineThickness=function(){};E.prototype.GetLineThickness=function(){};E.prototype.SetAlpha=function(){};E.prototype.GetAlpha=function(){};E.prototype.SetFillAlpha=
function(){};E.prototype.GetFillAlpha=function(){};E.prototype.SetXFormScale=function(){};E.prototype.GetXFormScale=function(){};E.prototype.DrawPolygon=function(){};E.prototype.DrawSolidPolygon=function(){};E.prototype.DrawCircle=function(){};E.prototype.DrawSolidCircle=function(){};E.prototype.DrawSegment=function(){};E.prototype.DrawTransform=function(){};Box2D.postDefs.push(function(){Box2D.Dynamics.b2DebugDraw.e_shapeBit=1;Box2D.Dynamics.b2DebugDraw.e_jointBit=2;Box2D.Dynamics.b2DebugDraw.e_aabbBit=
4;Box2D.Dynamics.b2DebugDraw.e_pairBit=8;Box2D.Dynamics.b2DebugDraw.e_centerOfMassBit=16;Box2D.Dynamics.b2DebugDraw.e_controllerBit=32});R.b2DestructionListener=function(){};R.prototype.SayGoodbyeJoint=function(){};R.prototype.SayGoodbyeFixture=function(){};N.b2FilterData=function(){this.categoryBits=1;this.maskBits=65535;this.groupIndex=0};N.prototype.Copy=function(){var a=new N;a.categoryBits=this.categoryBits;a.maskBits=this.maskBits;a.groupIndex=this.groupIndex;return a};S.b2Fixture=function(){this.m_filter=
new N};S.prototype.GetType=function(){return this.m_shape.GetType()};S.prototype.GetShape=function(){return this.m_shape};S.prototype.SetSensor=function(a){if(this.m_isSensor!=a){this.m_isSensor=a;if(this.m_body!=null)for(a=this.m_body.GetContactList();a;){var c=a.contact,g=c.GetFixtureA(),b=c.GetFixtureB();if(g==this||b==this)c.SetSensor(g.IsSensor()||b.IsSensor());a=a.next}}};S.prototype.IsSensor=function(){return this.m_isSensor};S.prototype.SetFilterData=function(a){this.m_filter=a.Copy();if(!this.m_body)for(a=
this.m_body.GetContactList();a;){var c=a.contact,g=c.GetFixtureA(),b=c.GetFixtureB();if(g==this||b==this)c.FlagForFiltering();a=a.next}};S.prototype.GetFilterData=function(){return this.m_filter.Copy()};S.prototype.GetBody=function(){return this.m_body};S.prototype.GetNext=function(){return this.m_next};S.prototype.GetUserData=function(){return this.m_userData};S.prototype.SetUserData=function(a){this.m_userData=a};S.prototype.TestPoint=function(a){return this.m_shape.TestPoint(this.m_body.GetTransform(),
a)};S.prototype.RayCast=function(a,c){return this.m_shape.RayCast(a,c,this.m_body.GetTransform())};S.prototype.GetMassData=function(a){if(a===undefined)a=null;if(a==null)a=new I;this.m_shape.ComputeMass(a,this.m_density);return a};S.prototype.SetDensity=function(a){if(a===undefined)a=0;this.m_density=a};S.prototype.GetDensity=function(){return this.m_density};S.prototype.GetFriction=function(){return this.m_friction};S.prototype.SetFriction=function(a){if(a===undefined)a=0;this.m_friction=a};S.prototype.GetRestitution=
function(){return this.m_restitution};S.prototype.SetRestitution=function(a){if(a===undefined)a=0;this.m_restitution=a};S.prototype.GetAABB=function(){return this.m_aabb};S.prototype.b2Fixture=function(){this.m_aabb=new U;this.m_shape=this.m_next=this.m_body=this.m_userData=null;this.m_restitution=this.m_friction=this.m_density=0};S.prototype.Create=function(a,c,g){this.m_userData=g.userData;this.m_friction=g.friction;this.m_restitution=g.restitution;this.m_body=a;this.m_next=null;this.m_filter=g.filter.Copy();
this.m_isSensor=g.isSensor;this.m_shape=g.shape.Copy();this.m_density=g.density};S.prototype.Destroy=function(){this.m_shape=null};S.prototype.CreateProxy=function(a,c){this.m_shape.ComputeAABB(this.m_aabb,c);this.m_proxy=a.CreateProxy(this.m_aabb,this)};S.prototype.DestroyProxy=function(a){if(this.m_proxy!=null){a.DestroyProxy(this.m_proxy);this.m_proxy=null}};S.prototype.Synchronize=function(a,c,g){if(this.m_proxy){var b=new U,e=new U;this.m_shape.ComputeAABB(b,c);this.m_shape.ComputeAABB(e,g);
this.m_aabb.Combine(b,e);c=F.SubtractVV(g.position,c.position);a.MoveProxy(this.m_proxy,this.m_aabb,c)}};aa.b2FixtureDef=function(){this.filter=new N};aa.prototype.b2FixtureDef=function(){this.userData=this.shape=null;this.friction=0.2;this.density=this.restitution=0;this.filter.categoryBits=1;this.filter.maskBits=65535;this.filter.groupIndex=0;this.isSensor=false};Z.b2Island=function(){};Z.prototype.b2Island=function(){this.m_bodies=new Vector;this.m_contacts=new Vector;this.m_joints=new Vector};
Z.prototype.Initialize=function(a,c,g,b,e,f){if(a===undefined)a=0;if(c===undefined)c=0;if(g===undefined)g=0;var m=0;this.m_bodyCapacity=a;this.m_contactCapacity=c;this.m_jointCapacity=g;this.m_jointCount=this.m_contactCount=this.m_bodyCount=0;this.m_allocator=b;this.m_listener=e;this.m_contactSolver=f;for(m=this.m_bodies.length;m<a;m++)this.m_bodies[m]=null;for(m=this.m_contacts.length;m<c;m++)this.m_contacts[m]=null;for(m=this.m_joints.length;m<g;m++)this.m_joints[m]=null};Z.prototype.Clear=function(){this.m_jointCount=
this.m_contactCount=this.m_bodyCount=0};Z.prototype.Solve=function(a,c,g){var b=0,e=0,f;for(b=0;b<this.m_bodyCount;++b){e=this.m_bodies[b];if(e.GetType()==k.b2_dynamicBody){e.m_linearVelocity.x+=a.dt*(c.x+e.m_invMass*e.m_force.x);e.m_linearVelocity.y+=a.dt*(c.y+e.m_invMass*e.m_force.y);e.m_angularVelocity+=a.dt*e.m_invI*e.m_torque;e.m_linearVelocity.Multiply(F.Clamp(1-a.dt*e.m_linearDamping,0,1));e.m_angularVelocity*=F.Clamp(1-a.dt*e.m_angularDamping,0,1)}}this.m_contactSolver.Initialize(a,this.m_contacts,
this.m_contactCount,this.m_allocator);c=this.m_contactSolver;c.InitVelocityConstraints(a);for(b=0;b<this.m_jointCount;++b){f=this.m_joints[b];f.InitVelocityConstraints(a)}for(b=0;b<a.velocityIterations;++b){for(e=0;e<this.m_jointCount;++e){f=this.m_joints[e];f.SolveVelocityConstraints(a)}c.SolveVelocityConstraints()}for(b=0;b<this.m_jointCount;++b){f=this.m_joints[b];f.FinalizeVelocityConstraints()}c.FinalizeVelocityConstraints();for(b=0;b<this.m_bodyCount;++b){e=this.m_bodies[b];if(e.GetType()!=
k.b2_staticBody){var m=a.dt*e.m_linearVelocity.x,r=a.dt*e.m_linearVelocity.y;if(m*m+r*r>A.b2_maxTranslationSquared){e.m_linearVelocity.Normalize();e.m_linearVelocity.x*=A.b2_maxTranslation*a.inv_dt;e.m_linearVelocity.y*=A.b2_maxTranslation*a.inv_dt}m=a.dt*e.m_angularVelocity;if(m*m>A.b2_maxRotationSquared)e.m_angularVelocity=e.m_angularVelocity<0?-A.b2_maxRotation*a.inv_dt:A.b2_maxRotation*a.inv_dt;e.m_sweep.c0.SetV(e.m_sweep.c);e.m_sweep.a0=e.m_sweep.a;e.m_sweep.c.x+=a.dt*e.m_linearVelocity.x;e.m_sweep.c.y+=
a.dt*e.m_linearVelocity.y;e.m_sweep.a+=a.dt*e.m_angularVelocity;e.SynchronizeTransform()}}for(b=0;b<a.positionIterations;++b){m=c.SolvePositionConstraints(A.b2_contactBaumgarte);r=true;for(e=0;e<this.m_jointCount;++e){f=this.m_joints[e];f=f.SolvePositionConstraints(A.b2_contactBaumgarte);r=r&&f}if(m&&r)break}this.Report(c.m_constraints);if(g){g=Number.MAX_VALUE;c=A.b2_linearSleepTolerance*A.b2_linearSleepTolerance;m=A.b2_angularSleepTolerance*A.b2_angularSleepTolerance;for(b=0;b<this.m_bodyCount;++b){e=
this.m_bodies[b];if(e.GetType()!=k.b2_staticBody){if((e.m_flags&k.e_allowSleepFlag)==0)g=e.m_sleepTime=0;if((e.m_flags&k.e_allowSleepFlag)==0||e.m_angularVelocity*e.m_angularVelocity>m||F.Dot(e.m_linearVelocity,e.m_linearVelocity)>c)g=e.m_sleepTime=0;else{e.m_sleepTime+=a.dt;g=F.Min(g,e.m_sleepTime)}}}if(g>=A.b2_timeToSleep)for(b=0;b<this.m_bodyCount;++b){e=this.m_bodies[b];e.SetAwake(false)}}};Z.prototype.SolveTOI=function(a){var c=0,g=0;this.m_contactSolver.Initialize(a,this.m_contacts,this.m_contactCount,
this.m_allocator);var b=this.m_contactSolver;for(c=0;c<this.m_jointCount;++c)this.m_joints[c].InitVelocityConstraints(a);for(c=0;c<a.velocityIterations;++c){b.SolveVelocityConstraints();for(g=0;g<this.m_jointCount;++g)this.m_joints[g].SolveVelocityConstraints(a)}for(c=0;c<this.m_bodyCount;++c){g=this.m_bodies[c];if(g.GetType()!=k.b2_staticBody){var e=a.dt*g.m_linearVelocity.x,f=a.dt*g.m_linearVelocity.y;if(e*e+f*f>A.b2_maxTranslationSquared){g.m_linearVelocity.Normalize();g.m_linearVelocity.x*=A.b2_maxTranslation*
a.inv_dt;g.m_linearVelocity.y*=A.b2_maxTranslation*a.inv_dt}e=a.dt*g.m_angularVelocity;if(e*e>A.b2_maxRotationSquared)g.m_angularVelocity=g.m_angularVelocity<0?-A.b2_maxRotation*a.inv_dt:A.b2_maxRotation*a.inv_dt;g.m_sweep.c0.SetV(g.m_sweep.c);g.m_sweep.a0=g.m_sweep.a;g.m_sweep.c.x+=a.dt*g.m_linearVelocity.x;g.m_sweep.c.y+=a.dt*g.m_linearVelocity.y;g.m_sweep.a+=a.dt*g.m_angularVelocity;g.SynchronizeTransform()}}for(c=0;c<a.positionIterations;++c){e=b.SolvePositionConstraints(0.75);f=true;for(g=0;g<
this.m_jointCount;++g){var m=this.m_joints[g].SolvePositionConstraints(A.b2_contactBaumgarte);f=f&&m}if(e&&f)break}this.Report(b.m_constraints)};Z.prototype.Report=function(a){if(this.m_listener!=null)for(var c=0;c<this.m_contactCount;++c){for(var g=this.m_contacts[c],b=a[c],e=0;e<b.pointCount;++e){Z.s_impulse.normalImpulses[e]=b.points[e].normalImpulse;Z.s_impulse.tangentImpulses[e]=b.points[e].tangentImpulse}this.m_listener.PostSolve(g,Z.s_impulse)}};Z.prototype.AddBody=function(a){a.m_islandIndex=
this.m_bodyCount;this.m_bodies[this.m_bodyCount++]=a};Z.prototype.AddContact=function(a){this.m_contacts[this.m_contactCount++]=a};Z.prototype.AddJoint=function(a){this.m_joints[this.m_jointCount++]=a};Box2D.postDefs.push(function(){Box2D.Dynamics.b2Island.s_impulse=new D});d.b2TimeStep=function(){};d.prototype.Set=function(a){this.dt=a.dt;this.inv_dt=a.inv_dt;this.positionIterations=a.positionIterations;this.velocityIterations=a.velocityIterations;this.warmStarting=a.warmStarting};h.b2World=function(){this.s_stack=
new Vector;this.m_contactManager=new O;this.m_contactSolver=new o;this.m_island=new Z};h.prototype.b2World=function(a,c){this.m_controllerList=this.m_jointList=this.m_contactList=this.m_bodyList=this.m_debugDraw=this.m_destructionListener=null;this.m_controllerCount=this.m_jointCount=this.m_contactCount=this.m_bodyCount=0;h.m_warmStarting=true;h.m_continuousPhysics=true;this.m_allowSleep=c;this.m_gravity=a;this.m_inv_dt0=0;this.m_contactManager.m_world=this;this.m_groundBody=this.CreateBody(new z)};
h.prototype.SetDestructionListener=function(a){this.m_destructionListener=a};h.prototype.SetContactFilter=function(a){this.m_contactManager.m_contactFilter=a};h.prototype.SetContactListener=function(a){this.m_contactManager.m_contactListener=a};h.prototype.SetDebugDraw=function(a){this.m_debugDraw=a};h.prototype.SetBroadPhase=function(a){var c=this.m_contactManager.m_broadPhase;this.m_contactManager.m_broadPhase=a;for(var g=this.m_bodyList;g;g=g.m_next)for(var b=g.m_fixtureList;b;b=b.m_next)b.m_proxy=
a.CreateProxy(c.GetFatAABB(b.m_proxy),b)};h.prototype.Validate=function(){this.m_contactManager.m_broadPhase.Validate()};h.prototype.GetProxyCount=function(){return this.m_contactManager.m_broadPhase.GetProxyCount()};h.prototype.CreateBody=function(a){if(this.IsLocked()==true)return null;a=new k(a,this);a.m_prev=null;if(a.m_next=this.m_bodyList)this.m_bodyList.m_prev=a;this.m_bodyList=a;++this.m_bodyCount;return a};h.prototype.DestroyBody=function(a){if(this.IsLocked()!=true){for(var c=a.m_jointList;c;){var g=
c;c=c.next;this.m_destructionListener&&this.m_destructionListener.SayGoodbyeJoint(g.joint);this.DestroyJoint(g.joint)}for(c=a.m_controllerList;c;){g=c;c=c.nextController;g.controller.RemoveBody(a)}for(c=a.m_contactList;c;){g=c;c=c.next;this.m_contactManager.Destroy(g.contact)}a.m_contactList=null;for(c=a.m_fixtureList;c;){g=c;c=c.m_next;this.m_destructionListener&&this.m_destructionListener.SayGoodbyeFixture(g);g.DestroyProxy(this.m_contactManager.m_broadPhase);g.Destroy()}a.m_fixtureList=null;a.m_fixtureCount=
0;if(a.m_prev)a.m_prev.m_next=a.m_next;if(a.m_next)a.m_next.m_prev=a.m_prev;if(a==this.m_bodyList)this.m_bodyList=a.m_next;--this.m_bodyCount}};h.prototype.CreateJoint=function(a){var c=q.Create(a,null);c.m_prev=null;if(c.m_next=this.m_jointList)this.m_jointList.m_prev=c;this.m_jointList=c;++this.m_jointCount;c.m_edgeA.joint=c;c.m_edgeA.other=c.m_bodyB;c.m_edgeA.prev=null;if(c.m_edgeA.next=c.m_bodyA.m_jointList)c.m_bodyA.m_jointList.prev=c.m_edgeA;c.m_bodyA.m_jointList=c.m_edgeA;c.m_edgeB.joint=c;
c.m_edgeB.other=c.m_bodyA;c.m_edgeB.prev=null;if(c.m_edgeB.next=c.m_bodyB.m_jointList)c.m_bodyB.m_jointList.prev=c.m_edgeB;c.m_bodyB.m_jointList=c.m_edgeB;var g=a.bodyA,b=a.bodyB;if(a.collideConnected==false)for(a=b.GetContactList();a;){a.other==g&&a.contact.FlagForFiltering();a=a.next}return c};h.prototype.DestroyJoint=function(a){var c=a.m_collideConnected;if(a.m_prev)a.m_prev.m_next=a.m_next;if(a.m_next)a.m_next.m_prev=a.m_prev;if(a==this.m_jointList)this.m_jointList=a.m_next;var g=a.m_bodyA,b=
a.m_bodyB;g.SetAwake(true);b.SetAwake(true);if(a.m_edgeA.prev)a.m_edgeA.prev.next=a.m_edgeA.next;if(a.m_edgeA.next)a.m_edgeA.next.prev=a.m_edgeA.prev;if(a.m_edgeA==g.m_jointList)g.m_jointList=a.m_edgeA.next;a.m_edgeA.prev=null;a.m_edgeA.next=null;if(a.m_edgeB.prev)a.m_edgeB.prev.next=a.m_edgeB.next;if(a.m_edgeB.next)a.m_edgeB.next.prev=a.m_edgeB.prev;if(a.m_edgeB==b.m_jointList)b.m_jointList=a.m_edgeB.next;a.m_edgeB.prev=null;a.m_edgeB.next=null;q.Destroy(a,null);--this.m_jointCount;if(c==false)for(a=
b.GetContactList();a;){a.other==g&&a.contact.FlagForFiltering();a=a.next}};h.prototype.AddController=function(a){a.m_next=this.m_controllerList;a.m_prev=null;this.m_controllerList=a;a.m_world=this;this.m_controllerCount++;return a};h.prototype.RemoveController=function(a){if(a.m_prev)a.m_prev.m_next=a.m_next;if(a.m_next)a.m_next.m_prev=a.m_prev;if(this.m_controllerList==a)this.m_controllerList=a.m_next;this.m_controllerCount--};h.prototype.CreateController=function(a){if(a.m_world!=this)throw Error("Controller can only be a member of one world");
a.m_next=this.m_controllerList;a.m_prev=null;if(this.m_controllerList)this.m_controllerList.m_prev=a;this.m_controllerList=a;++this.m_controllerCount;a.m_world=this;return a};h.prototype.DestroyController=function(a){a.Clear();if(a.m_next)a.m_next.m_prev=a.m_prev;if(a.m_prev)a.m_prev.m_next=a.m_next;if(a==this.m_controllerList)this.m_controllerList=a.m_next;--this.m_controllerCount};h.prototype.SetWarmStarting=function(a){h.m_warmStarting=a};h.prototype.SetContinuousPhysics=function(a){h.m_continuousPhysics=
a};h.prototype.GetBodyCount=function(){return this.m_bodyCount};h.prototype.GetJointCount=function(){return this.m_jointCount};h.prototype.GetContactCount=function(){return this.m_contactCount};h.prototype.SetGravity=function(a){this.m_gravity=a};h.prototype.GetGravity=function(){return this.m_gravity};h.prototype.GetGroundBody=function(){return this.m_groundBody};h.prototype.Step=function(a,c,g){if(a===undefined)a=0;if(c===undefined)c=0;if(g===undefined)g=0;if(this.m_flags&h.e_newFixture){this.m_contactManager.FindNewContacts();
this.m_flags&=~h.e_newFixture}this.m_flags|=h.e_locked;var b=h.s_timestep2;b.dt=a;b.velocityIterations=c;b.positionIterations=g;b.inv_dt=a>0?1/a:0;b.dtRatio=this.m_inv_dt0*a;b.warmStarting=h.m_warmStarting;this.m_contactManager.Collide();b.dt>0&&this.Solve(b);h.m_continuousPhysics&&b.dt>0&&this.SolveTOI(b);if(b.dt>0)this.m_inv_dt0=b.inv_dt;this.m_flags&=~h.e_locked};h.prototype.ClearForces=function(){for(var a=this.m_bodyList;a;a=a.m_next){a.m_force.SetZero();a.m_torque=0}};h.prototype.DrawDebugData=
function(){if(this.m_debugDraw!=null){this.m_debugDraw.m_sprite.graphics.clear();var a=this.m_debugDraw.GetFlags(),c,g,b;new y;new y;new y;var e;new U;new U;e=[new y,new y,new y,new y];var f=new w(0,0,0);if(a&E.e_shapeBit)for(c=this.m_bodyList;c;c=c.m_next){e=c.m_xf;for(g=c.GetFixtureList();g;g=g.m_next){b=g.GetShape();if(c.IsActive()==false)f.Set(0.5,0.5,0.3);else if(c.GetType()==k.b2_staticBody)f.Set(0.5,0.9,0.5);else if(c.GetType()==k.b2_kinematicBody)f.Set(0.5,0.5,0.9);else c.IsAwake()==false?
f.Set(0.6,0.6,0.6):f.Set(0.9,0.7,0.7);this.DrawShape(b,e,f)}}if(a&E.e_jointBit)for(c=this.m_jointList;c;c=c.m_next)this.DrawJoint(c);if(a&E.e_controllerBit)for(c=this.m_controllerList;c;c=c.m_next)c.Draw(this.m_debugDraw);if(a&E.e_pairBit){f.Set(0.3,0.9,0.9);for(c=this.m_contactManager.m_contactList;c;c=c.GetNext()){b=c.GetFixtureA();g=c.GetFixtureB();b=b.GetAABB().GetCenter();g=g.GetAABB().GetCenter();this.m_debugDraw.DrawSegment(b,g,f)}}if(a&E.e_aabbBit){b=this.m_contactManager.m_broadPhase;e=[new y,
new y,new y,new y];for(c=this.m_bodyList;c;c=c.GetNext())if(c.IsActive()!=false)for(g=c.GetFixtureList();g;g=g.GetNext()){var m=b.GetFatAABB(g.m_proxy);e[0].Set(m.lowerBound.x,m.lowerBound.y);e[1].Set(m.upperBound.x,m.lowerBound.y);e[2].Set(m.upperBound.x,m.upperBound.y);e[3].Set(m.lowerBound.x,m.upperBound.y);this.m_debugDraw.DrawPolygon(e,4,f)}}if(a&E.e_centerOfMassBit)for(c=this.m_bodyList;c;c=c.m_next){e=h.s_xf;e.R=c.m_xf.R;e.position=c.GetWorldCenter();this.m_debugDraw.DrawTransform(e)}}};h.prototype.QueryAABB=
function(a,c){var g=this.m_contactManager.m_broadPhase;g.Query(function(b){return a(g.GetUserData(b))},c)};h.prototype.QueryShape=function(a,c,g){if(g===undefined)g=null;if(g==null){g=new K;g.SetIdentity()}var b=this.m_contactManager.m_broadPhase,e=new U;c.ComputeAABB(e,g);b.Query(function(f){f=b.GetUserData(f)instanceof S?b.GetUserData(f):null;if(Y.TestOverlap(c,g,f.GetShape(),f.GetBody().GetTransform()))return a(f);return true},e)};h.prototype.QueryPoint=function(a,c){var g=this.m_contactManager.m_broadPhase,
b=new U;b.lowerBound.Set(c.x-A.b2_linearSlop,c.y-A.b2_linearSlop);b.upperBound.Set(c.x+A.b2_linearSlop,c.y+A.b2_linearSlop);g.Query(function(e){e=g.GetUserData(e)instanceof S?g.GetUserData(e):null;if(e.TestPoint(c))return a(e);return true},b)};h.prototype.RayCast=function(a,c,g){var b=this.m_contactManager.m_broadPhase,e=new V,f=new Q(c,g);b.RayCast(function(m,r){var s=b.GetUserData(r);s=s instanceof S?s:null;if(s.RayCast(e,m)){var v=e.fraction,t=new y((1-v)*c.x+v*g.x,(1-v)*c.y+v*g.y);return a(s,
t,e.normal,v)}return m.maxFraction},f)};h.prototype.RayCastOne=function(a,c){var g;this.RayCast(function(b,e,f,m){if(m===undefined)m=0;g=b;return m},a,c);return g};h.prototype.RayCastAll=function(a,c){var g=new Vector;this.RayCast(function(b){g[g.length]=b;return 1},a,c);return g};h.prototype.GetBodyList=function(){return this.m_bodyList};h.prototype.GetJointList=function(){return this.m_jointList};h.prototype.GetContactList=function(){return this.m_contactList};h.prototype.IsLocked=function(){return(this.m_flags&
h.e_locked)>0};h.prototype.Solve=function(a){for(var c,g=this.m_controllerList;g;g=g.m_next)g.Step(a);g=this.m_island;g.Initialize(this.m_bodyCount,this.m_contactCount,this.m_jointCount,null,this.m_contactManager.m_contactListener,this.m_contactSolver);for(c=this.m_bodyList;c;c=c.m_next)c.m_flags&=~k.e_islandFlag;for(var b=this.m_contactList;b;b=b.m_next)b.m_flags&=~l.e_islandFlag;for(b=this.m_jointList;b;b=b.m_next)b.m_islandFlag=false;parseInt(this.m_bodyCount);b=this.s_stack;for(var e=this.m_bodyList;e;e=
e.m_next)if(!(e.m_flags&k.e_islandFlag))if(!(e.IsAwake()==false||e.IsActive()==false))if(e.GetType()!=k.b2_staticBody){g.Clear();var f=0;b[f++]=e;for(e.m_flags|=k.e_islandFlag;f>0;){c=b[--f];g.AddBody(c);c.IsAwake()==false&&c.SetAwake(true);if(c.GetType()!=k.b2_staticBody){for(var m,r=c.m_contactList;r;r=r.next)if(!(r.contact.m_flags&l.e_islandFlag))if(!(r.contact.IsSensor()==true||r.contact.IsEnabled()==false||r.contact.IsTouching()==false)){g.AddContact(r.contact);r.contact.m_flags|=l.e_islandFlag;
m=r.other;if(!(m.m_flags&k.e_islandFlag)){b[f++]=m;m.m_flags|=k.e_islandFlag}}for(c=c.m_jointList;c;c=c.next)if(c.joint.m_islandFlag!=true){m=c.other;if(m.IsActive()!=false){g.AddJoint(c.joint);c.joint.m_islandFlag=true;if(!(m.m_flags&k.e_islandFlag)){b[f++]=m;m.m_flags|=k.e_islandFlag}}}}}g.Solve(a,this.m_gravity,this.m_allowSleep);for(f=0;f<g.m_bodyCount;++f){c=g.m_bodies[f];if(c.GetType()==k.b2_staticBody)c.m_flags&=~k.e_islandFlag}}for(f=0;f<b.length;++f){if(!b[f])break;b[f]=null}for(c=this.m_bodyList;c;c=
c.m_next)c.IsAwake()==false||c.IsActive()==false||c.GetType()!=k.b2_staticBody&&c.SynchronizeFixtures();this.m_contactManager.FindNewContacts()};h.prototype.SolveTOI=function(a){var c,g,b,e=this.m_island;e.Initialize(this.m_bodyCount,A.b2_maxTOIContactsPerIsland,A.b2_maxTOIJointsPerIsland,null,this.m_contactManager.m_contactListener,this.m_contactSolver);var f=h.s_queue;for(c=this.m_bodyList;c;c=c.m_next){c.m_flags&=~k.e_islandFlag;c.m_sweep.t0=0}for(b=this.m_contactList;b;b=b.m_next)b.m_flags&=~(l.e_toiFlag|
l.e_islandFlag);for(b=this.m_jointList;b;b=b.m_next)b.m_islandFlag=false;for(;;){var m=null,r=1;for(b=this.m_contactList;b;b=b.m_next)if(!(b.IsSensor()==true||b.IsEnabled()==false||b.IsContinuous()==false)){c=1;if(b.m_flags&l.e_toiFlag)c=b.m_toi;else{c=b.m_fixtureA;g=b.m_fixtureB;c=c.m_body;g=g.m_body;if((c.GetType()!=k.b2_dynamicBody||c.IsAwake()==false)&&(g.GetType()!=k.b2_dynamicBody||g.IsAwake()==false))continue;var s=c.m_sweep.t0;if(c.m_sweep.t0<g.m_sweep.t0){s=g.m_sweep.t0;c.m_sweep.Advance(s)}else if(g.m_sweep.t0<
c.m_sweep.t0){s=c.m_sweep.t0;g.m_sweep.Advance(s)}c=b.ComputeTOI(c.m_sweep,g.m_sweep);A.b2Assert(0<=c&&c<=1);if(c>0&&c<1){c=(1-c)*s+c;if(c>1)c=1}b.m_toi=c;b.m_flags|=l.e_toiFlag}if(Number.MIN_VALUE<c&&c<r){m=b;r=c}}if(m==null||1-100*Number.MIN_VALUE<r)break;c=m.m_fixtureA;g=m.m_fixtureB;c=c.m_body;g=g.m_body;h.s_backupA.Set(c.m_sweep);h.s_backupB.Set(g.m_sweep);c.Advance(r);g.Advance(r);m.Update(this.m_contactManager.m_contactListener);m.m_flags&=~l.e_toiFlag;if(m.IsSensor()==true||m.IsEnabled()==
false){c.m_sweep.Set(h.s_backupA);g.m_sweep.Set(h.s_backupB);c.SynchronizeTransform();g.SynchronizeTransform()}else if(m.IsTouching()!=false){c=c;if(c.GetType()!=k.b2_dynamicBody)c=g;e.Clear();m=b=0;f[b+m++]=c;for(c.m_flags|=k.e_islandFlag;m>0;){c=f[b++];--m;e.AddBody(c);c.IsAwake()==false&&c.SetAwake(true);if(c.GetType()==k.b2_dynamicBody){for(g=c.m_contactList;g;g=g.next){if(e.m_contactCount==e.m_contactCapacity)break;if(!(g.contact.m_flags&l.e_islandFlag))if(!(g.contact.IsSensor()==true||g.contact.IsEnabled()==
false||g.contact.IsTouching()==false)){e.AddContact(g.contact);g.contact.m_flags|=l.e_islandFlag;s=g.other;if(!(s.m_flags&k.e_islandFlag)){if(s.GetType()!=k.b2_staticBody){s.Advance(r);s.SetAwake(true)}f[b+m]=s;++m;s.m_flags|=k.e_islandFlag}}}for(c=c.m_jointList;c;c=c.next)if(e.m_jointCount!=e.m_jointCapacity)if(c.joint.m_islandFlag!=true){s=c.other;if(s.IsActive()!=false){e.AddJoint(c.joint);c.joint.m_islandFlag=true;if(!(s.m_flags&k.e_islandFlag)){if(s.GetType()!=k.b2_staticBody){s.Advance(r);s.SetAwake(true)}f[b+
m]=s;++m;s.m_flags|=k.e_islandFlag}}}}}b=h.s_timestep;b.warmStarting=false;b.dt=(1-r)*a.dt;b.inv_dt=1/b.dt;b.dtRatio=0;b.velocityIterations=a.velocityIterations;b.positionIterations=a.positionIterations;e.SolveTOI(b);for(r=r=0;r<e.m_bodyCount;++r){c=e.m_bodies[r];c.m_flags&=~k.e_islandFlag;if(c.IsAwake()!=false)if(c.GetType()==k.b2_dynamicBody){c.SynchronizeFixtures();for(g=c.m_contactList;g;g=g.next)g.contact.m_flags&=~l.e_toiFlag}}for(r=0;r<e.m_contactCount;++r){b=e.m_contacts[r];b.m_flags&=~(l.e_toiFlag|
l.e_islandFlag)}for(r=0;r<e.m_jointCount;++r){b=e.m_joints[r];b.m_islandFlag=false}this.m_contactManager.FindNewContacts()}}};h.prototype.DrawJoint=function(a){var c=a.GetBodyA(),g=a.GetBodyB(),b=c.m_xf.position,e=g.m_xf.position,f=a.GetAnchorA(),m=a.GetAnchorB(),r=h.s_jointColor;switch(a.m_type){case q.e_distanceJoint:this.m_debugDraw.DrawSegment(f,m,r);break;case q.e_pulleyJoint:c=a instanceof n?a:null;a=c.GetGroundAnchorA();c=c.GetGroundAnchorB();this.m_debugDraw.DrawSegment(a,f,r);this.m_debugDraw.DrawSegment(c,
m,r);this.m_debugDraw.DrawSegment(a,c,r);break;case q.e_mouseJoint:this.m_debugDraw.DrawSegment(f,m,r);break;default:c!=this.m_groundBody&&this.m_debugDraw.DrawSegment(b,f,r);this.m_debugDraw.DrawSegment(f,m,r);g!=this.m_groundBody&&this.m_debugDraw.DrawSegment(e,m,r)}};h.prototype.DrawShape=function(a,c,g){switch(a.m_type){case Y.e_circleShape:var b=a instanceof M?a:null;this.m_debugDraw.DrawSolidCircle(F.MulX(c,b.m_p),b.m_radius,c.R.col1,g);break;case Y.e_polygonShape:b=0;b=a instanceof W?a:null;
a=parseInt(b.GetVertexCount());var e=b.GetVertices(),f=new Vector(a);for(b=0;b<a;++b)f[b]=F.MulX(c,e[b]);this.m_debugDraw.DrawSolidPolygon(f,a,g);break;case Y.e_edgeShape:b=a instanceof L?a:null;this.m_debugDraw.DrawSegment(F.MulX(c,b.GetVertex1()),F.MulX(c,b.GetVertex2()),g)}};Box2D.postDefs.push(function(){Box2D.Dynamics.b2World.s_timestep2=new d;Box2D.Dynamics.b2World.s_xf=new K;Box2D.Dynamics.b2World.s_backupA=new G;Box2D.Dynamics.b2World.s_backupB=new G;Box2D.Dynamics.b2World.s_timestep=new d;
Box2D.Dynamics.b2World.s_queue=new Vector;Box2D.Dynamics.b2World.s_jointColor=new w(0.5,0.8,0.8);Box2D.Dynamics.b2World.e_newFixture=1;Box2D.Dynamics.b2World.e_locked=2})})();
(function(){var F=Box2D.Collision.Shapes.b2CircleShape,G=Box2D.Collision.Shapes.b2EdgeShape,K=Box2D.Collision.Shapes.b2PolygonShape,y=Box2D.Collision.Shapes.b2Shape,w=Box2D.Dynamics.Contacts.b2CircleContact,A=Box2D.Dynamics.Contacts.b2Contact,U=Box2D.Dynamics.Contacts.b2ContactConstraint,p=Box2D.Dynamics.Contacts.b2ContactConstraintPoint,B=Box2D.Dynamics.Contacts.b2ContactEdge,Q=Box2D.Dynamics.Contacts.b2ContactFactory,V=Box2D.Dynamics.Contacts.b2ContactRegister,M=Box2D.Dynamics.Contacts.b2ContactResult,
L=Box2D.Dynamics.Contacts.b2ContactSolver,I=Box2D.Dynamics.Contacts.b2EdgeAndCircleContact,W=Box2D.Dynamics.Contacts.b2NullContact,Y=Box2D.Dynamics.Contacts.b2PolyAndCircleContact,k=Box2D.Dynamics.Contacts.b2PolyAndEdgeContact,z=Box2D.Dynamics.Contacts.b2PolygonContact,u=Box2D.Dynamics.Contacts.b2PositionSolverManifold,D=Box2D.Dynamics.b2Body,H=Box2D.Dynamics.b2TimeStep,O=Box2D.Common.b2Settings,E=Box2D.Common.Math.b2Mat22,R=Box2D.Common.Math.b2Math,N=Box2D.Common.Math.b2Vec2,S=Box2D.Collision.b2Collision,
aa=Box2D.Collision.b2ContactID,Z=Box2D.Collision.b2Manifold,d=Box2D.Collision.b2TimeOfImpact,h=Box2D.Collision.b2TOIInput,l=Box2D.Collision.b2WorldManifold;Box2D.inherit(w,Box2D.Dynamics.Contacts.b2Contact);w.prototype.__super=Box2D.Dynamics.Contacts.b2Contact.prototype;w.b2CircleContact=function(){Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this,arguments)};w.Create=function(){return new w};w.Destroy=function(){};w.prototype.Reset=function(j,o){this.__super.Reset.call(this,j,o)};w.prototype.Evaluate=
function(){var j=this.m_fixtureA.GetBody(),o=this.m_fixtureB.GetBody();S.CollideCircles(this.m_manifold,this.m_fixtureA.GetShape()instanceof F?this.m_fixtureA.GetShape():null,j.m_xf,this.m_fixtureB.GetShape()instanceof F?this.m_fixtureB.GetShape():null,o.m_xf)};A.b2Contact=function(){this.m_nodeA=new B;this.m_nodeB=new B;this.m_manifold=new Z;this.m_oldManifold=new Z};A.prototype.GetManifold=function(){return this.m_manifold};A.prototype.GetWorldManifold=function(j){var o=this.m_fixtureA.GetBody(),
q=this.m_fixtureB.GetBody(),n=this.m_fixtureA.GetShape(),a=this.m_fixtureB.GetShape();j.Initialize(this.m_manifold,o.GetTransform(),n.m_radius,q.GetTransform(),a.m_radius)};A.prototype.IsTouching=function(){return(this.m_flags&A.e_touchingFlag)==A.e_touchingFlag};A.prototype.IsContinuous=function(){return(this.m_flags&A.e_continuousFlag)==A.e_continuousFlag};A.prototype.SetSensor=function(j){if(j)this.m_flags|=A.e_sensorFlag;else this.m_flags&=~A.e_sensorFlag};A.prototype.IsSensor=function(){return(this.m_flags&
A.e_sensorFlag)==A.e_sensorFlag};A.prototype.SetEnabled=function(j){if(j)this.m_flags|=A.e_enabledFlag;else this.m_flags&=~A.e_enabledFlag};A.prototype.IsEnabled=function(){return(this.m_flags&A.e_enabledFlag)==A.e_enabledFlag};A.prototype.GetNext=function(){return this.m_next};A.prototype.GetFixtureA=function(){return this.m_fixtureA};A.prototype.GetFixtureB=function(){return this.m_fixtureB};A.prototype.FlagForFiltering=function(){this.m_flags|=A.e_filterFlag};A.prototype.b2Contact=function(){};
A.prototype.Reset=function(j,o){if(j===undefined)j=null;if(o===undefined)o=null;this.m_flags=A.e_enabledFlag;if(!j||!o)this.m_fixtureB=this.m_fixtureA=null;else{if(j.IsSensor()||o.IsSensor())this.m_flags|=A.e_sensorFlag;var q=j.GetBody(),n=o.GetBody();if(q.GetType()!=D.b2_dynamicBody||q.IsBullet()||n.GetType()!=D.b2_dynamicBody||n.IsBullet())this.m_flags|=A.e_continuousFlag;this.m_fixtureA=j;this.m_fixtureB=o;this.m_manifold.m_pointCount=0;this.m_next=this.m_prev=null;this.m_nodeA.contact=null;this.m_nodeA.prev=
null;this.m_nodeA.next=null;this.m_nodeA.other=null;this.m_nodeB.contact=null;this.m_nodeB.prev=null;this.m_nodeB.next=null;this.m_nodeB.other=null}};A.prototype.Update=function(j){var o=this.m_oldManifold;this.m_oldManifold=this.m_manifold;this.m_manifold=o;this.m_flags|=A.e_enabledFlag;var q=false;o=(this.m_flags&A.e_touchingFlag)==A.e_touchingFlag;var n=this.m_fixtureA.m_body,a=this.m_fixtureB.m_body,c=this.m_fixtureA.m_aabb.TestOverlap(this.m_fixtureB.m_aabb);if(this.m_flags&A.e_sensorFlag){if(c){q=
this.m_fixtureA.GetShape();c=this.m_fixtureB.GetShape();n=n.GetTransform();a=a.GetTransform();q=y.TestOverlap(q,n,c,a)}this.m_manifold.m_pointCount=0}else{if(n.GetType()!=D.b2_dynamicBody||n.IsBullet()||a.GetType()!=D.b2_dynamicBody||a.IsBullet())this.m_flags|=A.e_continuousFlag;else this.m_flags&=~A.e_continuousFlag;if(c){this.Evaluate();q=this.m_manifold.m_pointCount>0;for(c=0;c<this.m_manifold.m_pointCount;++c){var g=this.m_manifold.m_points[c];g.m_normalImpulse=0;g.m_tangentImpulse=0;for(var b=
g.m_id,e=0;e<this.m_oldManifold.m_pointCount;++e){var f=this.m_oldManifold.m_points[e];if(f.m_id.key==b.key){g.m_normalImpulse=f.m_normalImpulse;g.m_tangentImpulse=f.m_tangentImpulse;break}}}}else this.m_manifold.m_pointCount=0;if(q!=o){n.SetAwake(true);a.SetAwake(true)}}if(q)this.m_flags|=A.e_touchingFlag;else this.m_flags&=~A.e_touchingFlag;o==false&&q==true&&j.BeginContact(this);o==true&&q==false&&j.EndContact(this);(this.m_flags&A.e_sensorFlag)==0&&j.PreSolve(this,this.m_oldManifold)};A.prototype.Evaluate=
function(){};A.prototype.ComputeTOI=function(j,o){A.s_input.proxyA.Set(this.m_fixtureA.GetShape());A.s_input.proxyB.Set(this.m_fixtureB.GetShape());A.s_input.sweepA=j;A.s_input.sweepB=o;A.s_input.tolerance=O.b2_linearSlop;return d.TimeOfImpact(A.s_input)};Box2D.postDefs.push(function(){Box2D.Dynamics.Contacts.b2Contact.e_sensorFlag=1;Box2D.Dynamics.Contacts.b2Contact.e_continuousFlag=2;Box2D.Dynamics.Contacts.b2Contact.e_islandFlag=4;Box2D.Dynamics.Contacts.b2Contact.e_toiFlag=8;Box2D.Dynamics.Contacts.b2Contact.e_touchingFlag=
16;Box2D.Dynamics.Contacts.b2Contact.e_enabledFlag=32;Box2D.Dynamics.Contacts.b2Contact.e_filterFlag=64;Box2D.Dynamics.Contacts.b2Contact.s_input=new h});U.b2ContactConstraint=function(){this.localPlaneNormal=new N;this.localPoint=new N;this.normal=new N;this.normalMass=new E;this.K=new E};U.prototype.b2ContactConstraint=function(){this.points=new Vector(O.b2_maxManifoldPoints);for(var j=0;j<O.b2_maxManifoldPoints;j++)this.points[j]=new p};p.b2ContactConstraintPoint=function(){this.localPoint=new N;
this.rA=new N;this.rB=new N};B.b2ContactEdge=function(){};Q.b2ContactFactory=function(){};Q.prototype.b2ContactFactory=function(j){this.m_allocator=j;this.InitializeRegisters()};Q.prototype.AddType=function(j,o,q,n){if(q===undefined)q=0;if(n===undefined)n=0;this.m_registers[q][n].createFcn=j;this.m_registers[q][n].destroyFcn=o;this.m_registers[q][n].primary=true;if(q!=n){this.m_registers[n][q].createFcn=j;this.m_registers[n][q].destroyFcn=o;this.m_registers[n][q].primary=false}};Q.prototype.InitializeRegisters=
function(){this.m_registers=new Vector(y.e_shapeTypeCount);for(var j=0;j<y.e_shapeTypeCount;j++){this.m_registers[j]=new Vector(y.e_shapeTypeCount);for(var o=0;o<y.e_shapeTypeCount;o++)this.m_registers[j][o]=new V}this.AddType(w.Create,w.Destroy,y.e_circleShape,y.e_circleShape);this.AddType(Y.Create,Y.Destroy,y.e_polygonShape,y.e_circleShape);this.AddType(z.Create,z.Destroy,y.e_polygonShape,y.e_polygonShape);this.AddType(I.Create,I.Destroy,y.e_edgeShape,y.e_circleShape);this.AddType(k.Create,k.Destroy,
y.e_polygonShape,y.e_edgeShape)};Q.prototype.Create=function(j,o){var q=parseInt(j.GetType()),n=parseInt(o.GetType());q=this.m_registers[q][n];if(q.pool){n=q.pool;q.pool=n.m_next;q.poolCount--;n.Reset(j,o);return n}n=q.createFcn;if(n!=null){if(q.primary){n=n(this.m_allocator);n.Reset(j,o)}else{n=n(this.m_allocator);n.Reset(o,j)}return n}else return null};Q.prototype.Destroy=function(j){if(j.m_manifold.m_pointCount>0){j.m_fixtureA.m_body.SetAwake(true);j.m_fixtureB.m_body.SetAwake(true)}var o=parseInt(j.m_fixtureA.GetType()),
q=parseInt(j.m_fixtureB.GetType());o=this.m_registers[o][q];o.poolCount++;j.m_next=o.pool;o.pool=j;o=o.destroyFcn;o(j,this.m_allocator)};V.b2ContactRegister=function(){};M.b2ContactResult=function(){this.position=new N;this.normal=new N;this.id=new aa};L.b2ContactSolver=function(){this.m_step=new H;this.m_constraints=new Vector};L.prototype.b2ContactSolver=function(){};L.prototype.Initialize=function(j,o,q,n){if(q===undefined)q=0;var a;this.m_step.Set(j);this.m_allocator=n;j=0;for(this.m_constraintCount=
q;this.m_constraints.length<this.m_constraintCount;)this.m_constraints[this.m_constraints.length]=new U;for(j=0;j<q;++j){a=o[j];n=a.m_fixtureA;var c=a.m_fixtureB,g=n.m_shape.m_radius,b=c.m_shape.m_radius,e=n.m_body,f=c.m_body,m=a.GetManifold(),r=O.b2MixFriction(n.GetFriction(),c.GetFriction()),s=O.b2MixRestitution(n.GetRestitution(),c.GetRestitution()),v=e.m_linearVelocity.x,t=e.m_linearVelocity.y,x=f.m_linearVelocity.x,C=f.m_linearVelocity.y,J=e.m_angularVelocity,T=f.m_angularVelocity;O.b2Assert(m.m_pointCount>
0);L.s_worldManifold.Initialize(m,e.m_xf,g,f.m_xf,b);c=L.s_worldManifold.m_normal.x;a=L.s_worldManifold.m_normal.y;n=this.m_constraints[j];n.bodyA=e;n.bodyB=f;n.manifold=m;n.normal.x=c;n.normal.y=a;n.pointCount=m.m_pointCount;n.friction=r;n.restitution=s;n.localPlaneNormal.x=m.m_localPlaneNormal.x;n.localPlaneNormal.y=m.m_localPlaneNormal.y;n.localPoint.x=m.m_localPoint.x;n.localPoint.y=m.m_localPoint.y;n.radius=g+b;n.type=m.m_type;for(g=0;g<n.pointCount;++g){r=m.m_points[g];b=n.points[g];b.normalImpulse=
r.m_normalImpulse;b.tangentImpulse=r.m_tangentImpulse;b.localPoint.SetV(r.m_localPoint);r=b.rA.x=L.s_worldManifold.m_points[g].x-e.m_sweep.c.x;s=b.rA.y=L.s_worldManifold.m_points[g].y-e.m_sweep.c.y;var P=b.rB.x=L.s_worldManifold.m_points[g].x-f.m_sweep.c.x,X=b.rB.y=L.s_worldManifold.m_points[g].y-f.m_sweep.c.y,$=r*a-s*c,ba=P*a-X*c;$*=$;ba*=ba;b.normalMass=1/(e.m_invMass+f.m_invMass+e.m_invI*$+f.m_invI*ba);var ca=e.m_mass*e.m_invMass+f.m_mass*f.m_invMass;ca+=e.m_mass*e.m_invI*$+f.m_mass*f.m_invI*ba;
b.equalizedMass=1/ca;ba=a;ca=-c;$=r*ca-s*ba;ba=P*ca-X*ba;$*=$;ba*=ba;b.tangentMass=1/(e.m_invMass+f.m_invMass+e.m_invI*$+f.m_invI*ba);b.velocityBias=0;r=n.normal.x*(x+-T*X-v- -J*s)+n.normal.y*(C+T*P-t-J*r);if(r<-O.b2_velocityThreshold)b.velocityBias+=-n.restitution*r}if(n.pointCount==2){C=n.points[0];x=n.points[1];m=e.m_invMass;e=e.m_invI;v=f.m_invMass;f=f.m_invI;t=C.rA.x*a-C.rA.y*c;C=C.rB.x*a-C.rB.y*c;J=x.rA.x*a-x.rA.y*c;x=x.rB.x*a-x.rB.y*c;c=m+v+e*t*t+f*C*C;a=m+v+e*J*J+f*x*x;f=m+v+e*t*J+f*C*x;if(c*
c<100*(c*a-f*f)){n.K.col1.Set(c,f);n.K.col2.Set(f,a);n.K.GetInverse(n.normalMass)}else n.pointCount=1}}};L.prototype.InitVelocityConstraints=function(j){for(var o=0;o<this.m_constraintCount;++o){var q=this.m_constraints[o],n=q.bodyA,a=q.bodyB,c=n.m_invMass,g=n.m_invI,b=a.m_invMass,e=a.m_invI,f=q.normal.x,m=q.normal.y,r=m,s=-f,v=0,t=0;if(j.warmStarting){t=q.pointCount;for(v=0;v<t;++v){var x=q.points[v];x.normalImpulse*=j.dtRatio;x.tangentImpulse*=j.dtRatio;var C=x.normalImpulse*f+x.tangentImpulse*
r,J=x.normalImpulse*m+x.tangentImpulse*s;n.m_angularVelocity-=g*(x.rA.x*J-x.rA.y*C);n.m_linearVelocity.x-=c*C;n.m_linearVelocity.y-=c*J;a.m_angularVelocity+=e*(x.rB.x*J-x.rB.y*C);a.m_linearVelocity.x+=b*C;a.m_linearVelocity.y+=b*J}}else{t=q.pointCount;for(v=0;v<t;++v){n=q.points[v];n.normalImpulse=0;n.tangentImpulse=0}}}};L.prototype.SolveVelocityConstraints=function(){for(var j=0,o,q=0,n=0,a=0,c=n=n=q=q=0,g=q=q=0,b=q=a=0,e=0,f,m=0;m<this.m_constraintCount;++m){a=this.m_constraints[m];var r=a.bodyA,
s=a.bodyB,v=r.m_angularVelocity,t=s.m_angularVelocity,x=r.m_linearVelocity,C=s.m_linearVelocity,J=r.m_invMass,T=r.m_invI,P=s.m_invMass,X=s.m_invI;b=a.normal.x;var $=e=a.normal.y;f=-b;g=a.friction;for(j=0;j<a.pointCount;j++){o=a.points[j];q=C.x-t*o.rB.y-x.x+v*o.rA.y;n=C.y+t*o.rB.x-x.y-v*o.rA.x;q=q*$+n*f;q=o.tangentMass*-q;n=g*o.normalImpulse;n=R.Clamp(o.tangentImpulse+q,-n,n);q=n-o.tangentImpulse;c=q*$;q=q*f;x.x-=J*c;x.y-=J*q;v-=T*(o.rA.x*q-o.rA.y*c);C.x+=P*c;C.y+=P*q;t+=X*(o.rB.x*q-o.rB.y*c);o.tangentImpulse=
n}parseInt(a.pointCount);if(a.pointCount==1){o=a.points[0];q=C.x+-t*o.rB.y-x.x- -v*o.rA.y;n=C.y+t*o.rB.x-x.y-v*o.rA.x;a=q*b+n*e;q=-o.normalMass*(a-o.velocityBias);n=o.normalImpulse+q;n=n>0?n:0;q=n-o.normalImpulse;c=q*b;q=q*e;x.x-=J*c;x.y-=J*q;v-=T*(o.rA.x*q-o.rA.y*c);C.x+=P*c;C.y+=P*q;t+=X*(o.rB.x*q-o.rB.y*c);o.normalImpulse=n}else{o=a.points[0];j=a.points[1];q=o.normalImpulse;g=j.normalImpulse;var ba=(C.x-t*o.rB.y-x.x+v*o.rA.y)*b+(C.y+t*o.rB.x-x.y-v*o.rA.x)*e,ca=(C.x-t*j.rB.y-x.x+v*j.rA.y)*b+(C.y+
t*j.rB.x-x.y-v*j.rA.x)*e;n=ba-o.velocityBias;c=ca-j.velocityBias;f=a.K;n-=f.col1.x*q+f.col2.x*g;for(c-=f.col1.y*q+f.col2.y*g;;){f=a.normalMass;$=-(f.col1.x*n+f.col2.x*c);f=-(f.col1.y*n+f.col2.y*c);if($>=0&&f>=0){q=$-q;g=f-g;a=q*b;q=q*e;b=g*b;e=g*e;x.x-=J*(a+b);x.y-=J*(q+e);v-=T*(o.rA.x*q-o.rA.y*a+j.rA.x*e-j.rA.y*b);C.x+=P*(a+b);C.y+=P*(q+e);t+=X*(o.rB.x*q-o.rB.y*a+j.rB.x*e-j.rB.y*b);o.normalImpulse=$;j.normalImpulse=f;break}$=-o.normalMass*n;f=0;ca=a.K.col1.y*$+c;if($>=0&&ca>=0){q=$-q;g=f-g;a=q*b;
q=q*e;b=g*b;e=g*e;x.x-=J*(a+b);x.y-=J*(q+e);v-=T*(o.rA.x*q-o.rA.y*a+j.rA.x*e-j.rA.y*b);C.x+=P*(a+b);C.y+=P*(q+e);t+=X*(o.rB.x*q-o.rB.y*a+j.rB.x*e-j.rB.y*b);o.normalImpulse=$;j.normalImpulse=f;break}$=0;f=-j.normalMass*c;ba=a.K.col2.x*f+n;if(f>=0&&ba>=0){q=$-q;g=f-g;a=q*b;q=q*e;b=g*b;e=g*e;x.x-=J*(a+b);x.y-=J*(q+e);v-=T*(o.rA.x*q-o.rA.y*a+j.rA.x*e-j.rA.y*b);C.x+=P*(a+b);C.y+=P*(q+e);t+=X*(o.rB.x*q-o.rB.y*a+j.rB.x*e-j.rB.y*b);o.normalImpulse=$;j.normalImpulse=f;break}f=$=0;ba=n;ca=c;if(ba>=0&&ca>=0){q=
$-q;g=f-g;a=q*b;q=q*e;b=g*b;e=g*e;x.x-=J*(a+b);x.y-=J*(q+e);v-=T*(o.rA.x*q-o.rA.y*a+j.rA.x*e-j.rA.y*b);C.x+=P*(a+b);C.y+=P*(q+e);t+=X*(o.rB.x*q-o.rB.y*a+j.rB.x*e-j.rB.y*b);o.normalImpulse=$;j.normalImpulse=f;break}break}}r.m_angularVelocity=v;s.m_angularVelocity=t}};L.prototype.FinalizeVelocityConstraints=function(){for(var j=0;j<this.m_constraintCount;++j)for(var o=this.m_constraints[j],q=o.manifold,n=0;n<o.pointCount;++n){var a=q.m_points[n],c=o.points[n];a.m_normalImpulse=c.normalImpulse;a.m_tangentImpulse=
c.tangentImpulse}};L.prototype.SolvePositionConstraints=function(j){if(j===undefined)j=0;for(var o=0,q=0;q<this.m_constraintCount;q++){var n=this.m_constraints[q],a=n.bodyA,c=n.bodyB,g=a.m_mass*a.m_invMass,b=a.m_mass*a.m_invI,e=c.m_mass*c.m_invMass,f=c.m_mass*c.m_invI;L.s_psm.Initialize(n);for(var m=L.s_psm.m_normal,r=0;r<n.pointCount;r++){var s=n.points[r],v=L.s_psm.m_points[r],t=L.s_psm.m_separations[r],x=v.x-a.m_sweep.c.x,C=v.y-a.m_sweep.c.y,J=v.x-c.m_sweep.c.x;v=v.y-c.m_sweep.c.y;o=o<t?o:t;t=
R.Clamp(j*(t+O.b2_linearSlop),-O.b2_maxLinearCorrection,0);t=-s.equalizedMass*t;s=t*m.x;t=t*m.y;a.m_sweep.c.x-=g*s;a.m_sweep.c.y-=g*t;a.m_sweep.a-=b*(x*t-C*s);a.SynchronizeTransform();c.m_sweep.c.x+=e*s;c.m_sweep.c.y+=e*t;c.m_sweep.a+=f*(J*t-v*s);c.SynchronizeTransform()}}return o>-1.5*O.b2_linearSlop};Box2D.postDefs.push(function(){Box2D.Dynamics.Contacts.b2ContactSolver.s_worldManifold=new l;Box2D.Dynamics.Contacts.b2ContactSolver.s_psm=new u});Box2D.inherit(I,Box2D.Dynamics.Contacts.b2Contact);
I.prototype.__super=Box2D.Dynamics.Contacts.b2Contact.prototype;I.b2EdgeAndCircleContact=function(){Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this,arguments)};I.Create=function(){return new I};I.Destroy=function(){};I.prototype.Reset=function(j,o){this.__super.Reset.call(this,j,o)};I.prototype.Evaluate=function(){var j=this.m_fixtureA.GetBody(),o=this.m_fixtureB.GetBody();this.b2CollideEdgeAndCircle(this.m_manifold,this.m_fixtureA.GetShape()instanceof G?this.m_fixtureA.GetShape():null,j.m_xf,
this.m_fixtureB.GetShape()instanceof F?this.m_fixtureB.GetShape():null,o.m_xf)};I.prototype.b2CollideEdgeAndCircle=function(){};Box2D.inherit(W,Box2D.Dynamics.Contacts.b2Contact);W.prototype.__super=Box2D.Dynamics.Contacts.b2Contact.prototype;W.b2NullContact=function(){Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this,arguments)};W.prototype.b2NullContact=function(){this.__super.b2Contact.call(this)};W.prototype.Evaluate=function(){};Box2D.inherit(Y,Box2D.Dynamics.Contacts.b2Contact);Y.prototype.__super=
Box2D.Dynamics.Contacts.b2Contact.prototype;Y.b2PolyAndCircleContact=function(){Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this,arguments)};Y.Create=function(){return new Y};Y.Destroy=function(){};Y.prototype.Reset=function(j,o){this.__super.Reset.call(this,j,o);O.b2Assert(j.GetType()==y.e_polygonShape);O.b2Assert(o.GetType()==y.e_circleShape)};Y.prototype.Evaluate=function(){var j=this.m_fixtureA.m_body,o=this.m_fixtureB.m_body;S.CollidePolygonAndCircle(this.m_manifold,this.m_fixtureA.GetShape()instanceof
K?this.m_fixtureA.GetShape():null,j.m_xf,this.m_fixtureB.GetShape()instanceof F?this.m_fixtureB.GetShape():null,o.m_xf)};Box2D.inherit(k,Box2D.Dynamics.Contacts.b2Contact);k.prototype.__super=Box2D.Dynamics.Contacts.b2Contact.prototype;k.b2PolyAndEdgeContact=function(){Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this,arguments)};k.Create=function(){return new k};k.Destroy=function(){};k.prototype.Reset=function(j,o){this.__super.Reset.call(this,j,o);O.b2Assert(j.GetType()==y.e_polygonShape);
O.b2Assert(o.GetType()==y.e_edgeShape)};k.prototype.Evaluate=function(){var j=this.m_fixtureA.GetBody(),o=this.m_fixtureB.GetBody();this.b2CollidePolyAndEdge(this.m_manifold,this.m_fixtureA.GetShape()instanceof K?this.m_fixtureA.GetShape():null,j.m_xf,this.m_fixtureB.GetShape()instanceof G?this.m_fixtureB.GetShape():null,o.m_xf)};k.prototype.b2CollidePolyAndEdge=function(){};Box2D.inherit(z,Box2D.Dynamics.Contacts.b2Contact);z.prototype.__super=Box2D.Dynamics.Contacts.b2Contact.prototype;z.b2PolygonContact=
function(){Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this,arguments)};z.Create=function(){return new z};z.Destroy=function(){};z.prototype.Reset=function(j,o){this.__super.Reset.call(this,j,o)};z.prototype.Evaluate=function(){var j=this.m_fixtureA.GetBody(),o=this.m_fixtureB.GetBody();S.CollidePolygons(this.m_manifold,this.m_fixtureA.GetShape()instanceof K?this.m_fixtureA.GetShape():null,j.m_xf,this.m_fixtureB.GetShape()instanceof K?this.m_fixtureB.GetShape():null,o.m_xf)};u.b2PositionSolverManifold=
function(){};u.prototype.b2PositionSolverManifold=function(){this.m_normal=new N;this.m_separations=new Vector_a2j_Number(O.b2_maxManifoldPoints);this.m_points=new Vector(O.b2_maxManifoldPoints);for(var j=0;j<O.b2_maxManifoldPoints;j++)this.m_points[j]=new N};u.prototype.Initialize=function(j){O.b2Assert(j.pointCount>0);var o=0,q=0,n=0,a,c=0,g=0;switch(j.type){case Z.e_circles:a=j.bodyA.m_xf.R;n=j.localPoint;o=j.bodyA.m_xf.position.x+(a.col1.x*n.x+a.col2.x*n.y);q=j.bodyA.m_xf.position.y+(a.col1.y*
n.x+a.col2.y*n.y);a=j.bodyB.m_xf.R;n=j.points[0].localPoint;c=j.bodyB.m_xf.position.x+(a.col1.x*n.x+a.col2.x*n.y);a=j.bodyB.m_xf.position.y+(a.col1.y*n.x+a.col2.y*n.y);n=c-o;g=a-q;var b=n*n+g*g;if(b>Number.MIN_VALUE*Number.MIN_VALUE){b=Math.sqrt(b);this.m_normal.x=n/b;this.m_normal.y=g/b}else{this.m_normal.x=1;this.m_normal.y=0}this.m_points[0].x=0.5*(o+c);this.m_points[0].y=0.5*(q+a);this.m_separations[0]=n*this.m_normal.x+g*this.m_normal.y-j.radius;break;case Z.e_faceA:a=j.bodyA.m_xf.R;n=j.localPlaneNormal;
this.m_normal.x=a.col1.x*n.x+a.col2.x*n.y;this.m_normal.y=a.col1.y*n.x+a.col2.y*n.y;a=j.bodyA.m_xf.R;n=j.localPoint;c=j.bodyA.m_xf.position.x+(a.col1.x*n.x+a.col2.x*n.y);g=j.bodyA.m_xf.position.y+(a.col1.y*n.x+a.col2.y*n.y);a=j.bodyB.m_xf.R;for(o=0;o<j.pointCount;++o){n=j.points[o].localPoint;q=j.bodyB.m_xf.position.x+(a.col1.x*n.x+a.col2.x*n.y);n=j.bodyB.m_xf.position.y+(a.col1.y*n.x+a.col2.y*n.y);this.m_separations[o]=(q-c)*this.m_normal.x+(n-g)*this.m_normal.y-j.radius;this.m_points[o].x=q;this.m_points[o].y=
n}break;case Z.e_faceB:a=j.bodyB.m_xf.R;n=j.localPlaneNormal;this.m_normal.x=a.col1.x*n.x+a.col2.x*n.y;this.m_normal.y=a.col1.y*n.x+a.col2.y*n.y;a=j.bodyB.m_xf.R;n=j.localPoint;c=j.bodyB.m_xf.position.x+(a.col1.x*n.x+a.col2.x*n.y);g=j.bodyB.m_xf.position.y+(a.col1.y*n.x+a.col2.y*n.y);a=j.bodyA.m_xf.R;for(o=0;o<j.pointCount;++o){n=j.points[o].localPoint;q=j.bodyA.m_xf.position.x+(a.col1.x*n.x+a.col2.x*n.y);n=j.bodyA.m_xf.position.y+(a.col1.y*n.x+a.col2.y*n.y);this.m_separations[o]=(q-c)*this.m_normal.x+
(n-g)*this.m_normal.y-j.radius;this.m_points[o].Set(q,n)}this.m_normal.x*=-1;this.m_normal.y*=-1}};Box2D.postDefs.push(function(){Box2D.Dynamics.Contacts.b2PositionSolverManifold.circlePointA=new N;Box2D.Dynamics.Contacts.b2PositionSolverManifold.circlePointB=new N})})();
(function(){var F=Box2D.Common.Math.b2Mat22,G=Box2D.Common.Math.b2Math,K=Box2D.Common.Math.b2Vec2,y=Box2D.Common.b2Color,w=Box2D.Dynamics.Controllers.b2BuoyancyController,A=Box2D.Dynamics.Controllers.b2ConstantAccelController,U=Box2D.Dynamics.Controllers.b2ConstantForceController,p=Box2D.Dynamics.Controllers.b2Controller,B=Box2D.Dynamics.Controllers.b2ControllerEdge,Q=Box2D.Dynamics.Controllers.b2GravityController,V=Box2D.Dynamics.Controllers.b2TensorDampingController;Box2D.inherit(w,Box2D.Dynamics.Controllers.b2Controller);
w.prototype.__super=Box2D.Dynamics.Controllers.b2Controller.prototype;w.b2BuoyancyController=function(){Box2D.Dynamics.Controllers.b2Controller.b2Controller.apply(this,arguments);this.normal=new K(0,-1);this.density=this.offset=0;this.velocity=new K(0,0);this.linearDrag=2;this.angularDrag=1;this.useDensity=false;this.useWorldGravity=true;this.gravity=null};w.prototype.Step=function(){if(this.m_bodyList){if(this.useWorldGravity)this.gravity=this.GetWorld().GetGravity().Copy();for(var M=this.m_bodyList;M;M=
M.nextBody){var L=M.body;if(L.IsAwake()!=false){for(var I=new K,W=new K,Y=0,k=0,z=L.GetFixtureList();z;z=z.GetNext()){var u=new K,D=z.GetShape().ComputeSubmergedArea(this.normal,this.offset,L.GetTransform(),u);Y+=D;I.x+=D*u.x;I.y+=D*u.y;var H=0;H=1;k+=D*H;W.x+=D*u.x*H;W.y+=D*u.y*H}I.x/=Y;I.y/=Y;W.x/=k;W.y/=k;if(!(Y<Number.MIN_VALUE)){k=this.gravity.GetNegative();k.Multiply(this.density*Y);L.ApplyForce(k,W);W=L.GetLinearVelocityFromWorldPoint(I);W.Subtract(this.velocity);W.Multiply(-this.linearDrag*
Y);L.ApplyForce(W,I);L.ApplyTorque(-L.GetInertia()/L.GetMass()*Y*L.GetAngularVelocity()*this.angularDrag)}}}}};w.prototype.Draw=function(M){var L=new K,I=new K;L.x=this.normal.x*this.offset+this.normal.y*1E3;L.y=this.normal.y*this.offset-this.normal.x*1E3;I.x=this.normal.x*this.offset-this.normal.y*1E3;I.y=this.normal.y*this.offset+this.normal.x*1E3;var W=new y(0,0,1);M.DrawSegment(L,I,W)};Box2D.inherit(A,Box2D.Dynamics.Controllers.b2Controller);A.prototype.__super=Box2D.Dynamics.Controllers.b2Controller.prototype;
A.b2ConstantAccelController=function(){Box2D.Dynamics.Controllers.b2Controller.b2Controller.apply(this,arguments);this.A=new K(0,0)};A.prototype.Step=function(M){M=new K(this.A.x*M.dt,this.A.y*M.dt);for(var L=this.m_bodyList;L;L=L.nextBody){var I=L.body;I.IsAwake()&&I.SetLinearVelocity(new K(I.GetLinearVelocity().x+M.x,I.GetLinearVelocity().y+M.y))}};Box2D.inherit(U,Box2D.Dynamics.Controllers.b2Controller);U.prototype.__super=Box2D.Dynamics.Controllers.b2Controller.prototype;U.b2ConstantForceController=
function(){Box2D.Dynamics.Controllers.b2Controller.b2Controller.apply(this,arguments);this.F=new K(0,0)};U.prototype.Step=function(){for(var M=this.m_bodyList;M;M=M.nextBody){var L=M.body;L.IsAwake()&&L.ApplyForce(this.F,L.GetWorldCenter())}};p.b2Controller=function(){};p.prototype.Step=function(){};p.prototype.Draw=function(){};p.prototype.AddBody=function(M){var L=new B;L.controller=this;L.body=M;L.nextBody=this.m_bodyList;L.prevBody=null;this.m_bodyList=L;if(L.nextBody)L.nextBody.prevBody=L;this.m_bodyCount++;
L.nextController=M.m_controllerList;L.prevController=null;M.m_controllerList=L;if(L.nextController)L.nextController.prevController=L;M.m_controllerCount++};p.prototype.RemoveBody=function(M){for(var L=M.m_controllerList;L&&L.controller!=this;)L=L.nextController;if(L.prevBody)L.prevBody.nextBody=L.nextBody;if(L.nextBody)L.nextBody.prevBody=L.prevBody;if(L.nextController)L.nextController.prevController=L.prevController;if(L.prevController)L.prevController.nextController=L.nextController;if(this.m_bodyList==
L)this.m_bodyList=L.nextBody;if(M.m_controllerList==L)M.m_controllerList=L.nextController;M.m_controllerCount--;this.m_bodyCount--};p.prototype.Clear=function(){for(;this.m_bodyList;)this.RemoveBody(this.m_bodyList.body)};p.prototype.GetNext=function(){return this.m_next};p.prototype.GetWorld=function(){return this.m_world};p.prototype.GetBodyList=function(){return this.m_bodyList};B.b2ControllerEdge=function(){};Box2D.inherit(Q,Box2D.Dynamics.Controllers.b2Controller);Q.prototype.__super=Box2D.Dynamics.Controllers.b2Controller.prototype;
Q.b2GravityController=function(){Box2D.Dynamics.Controllers.b2Controller.b2Controller.apply(this,arguments);this.G=1;this.invSqr=true};Q.prototype.Step=function(){var M=null,L=null,I=null,W=0,Y=null,k=null,z=null,u=0,D=0,H=0;u=null;if(this.invSqr)for(M=this.m_bodyList;M;M=M.nextBody){L=M.body;I=L.GetWorldCenter();W=L.GetMass();for(Y=this.m_bodyList;Y!=M;Y=Y.nextBody){k=Y.body;z=k.GetWorldCenter();u=z.x-I.x;D=z.y-I.y;H=u*u+D*D;if(!(H<Number.MIN_VALUE)){u=new K(u,D);u.Multiply(this.G/H/Math.sqrt(H)*
W*k.GetMass());L.IsAwake()&&L.ApplyForce(u,I);u.Multiply(-1);k.IsAwake()&&k.ApplyForce(u,z)}}}else for(M=this.m_bodyList;M;M=M.nextBody){L=M.body;I=L.GetWorldCenter();W=L.GetMass();for(Y=this.m_bodyList;Y!=M;Y=Y.nextBody){k=Y.body;z=k.GetWorldCenter();u=z.x-I.x;D=z.y-I.y;H=u*u+D*D;if(!(H<Number.MIN_VALUE)){u=new K(u,D);u.Multiply(this.G/H*W*k.GetMass());L.IsAwake()&&L.ApplyForce(u,I);u.Multiply(-1);k.IsAwake()&&k.ApplyForce(u,z)}}}};Box2D.inherit(V,Box2D.Dynamics.Controllers.b2Controller);V.prototype.__super=
Box2D.Dynamics.Controllers.b2Controller.prototype;V.b2TensorDampingController=function(){Box2D.Dynamics.Controllers.b2Controller.b2Controller.apply(this,arguments);this.T=new F;this.maxTimestep=0};V.prototype.SetAxisAligned=function(M,L){if(M===undefined)M=0;if(L===undefined)L=0;this.T.col1.x=-M;this.T.col1.y=0;this.T.col2.x=0;this.T.col2.y=-L;this.maxTimestep=M>0||L>0?1/Math.max(M,L):0};V.prototype.Step=function(M){M=M.dt;if(!(M<=Number.MIN_VALUE)){if(M>this.maxTimestep&&this.maxTimestep>0)M=this.maxTimestep;
for(var L=this.m_bodyList;L;L=L.nextBody){var I=L.body;if(I.IsAwake()){var W=I.GetWorldVector(G.MulMV(this.T,I.GetLocalVector(I.GetLinearVelocity())));I.SetLinearVelocity(new K(I.GetLinearVelocity().x+W.x*M,I.GetLinearVelocity().y+W.y*M))}}}}})();
(function(){var F=Box2D.Common.b2Settings,G=Box2D.Common.Math.b2Mat22,K=Box2D.Common.Math.b2Mat33,y=Box2D.Common.Math.b2Math,w=Box2D.Common.Math.b2Vec2,A=Box2D.Common.Math.b2Vec3,U=Box2D.Dynamics.Joints.b2DistanceJoint,p=Box2D.Dynamics.Joints.b2DistanceJointDef,B=Box2D.Dynamics.Joints.b2FrictionJoint,Q=Box2D.Dynamics.Joints.b2FrictionJointDef,V=Box2D.Dynamics.Joints.b2GearJoint,M=Box2D.Dynamics.Joints.b2GearJointDef,L=Box2D.Dynamics.Joints.b2Jacobian,I=Box2D.Dynamics.Joints.b2Joint,W=Box2D.Dynamics.Joints.b2JointDef,
Y=Box2D.Dynamics.Joints.b2JointEdge,k=Box2D.Dynamics.Joints.b2LineJoint,z=Box2D.Dynamics.Joints.b2LineJointDef,u=Box2D.Dynamics.Joints.b2MouseJoint,D=Box2D.Dynamics.Joints.b2MouseJointDef,H=Box2D.Dynamics.Joints.b2PrismaticJoint,O=Box2D.Dynamics.Joints.b2PrismaticJointDef,E=Box2D.Dynamics.Joints.b2PulleyJoint,R=Box2D.Dynamics.Joints.b2PulleyJointDef,N=Box2D.Dynamics.Joints.b2RevoluteJoint,S=Box2D.Dynamics.Joints.b2RevoluteJointDef,aa=Box2D.Dynamics.Joints.b2WeldJoint,Z=Box2D.Dynamics.Joints.b2WeldJointDef;
Box2D.inherit(U,Box2D.Dynamics.Joints.b2Joint);U.prototype.__super=Box2D.Dynamics.Joints.b2Joint.prototype;U.b2DistanceJoint=function(){Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this,arguments);this.m_localAnchor1=new w;this.m_localAnchor2=new w;this.m_u=new w};U.prototype.GetAnchorA=function(){return this.m_bodyA.GetWorldPoint(this.m_localAnchor1)};U.prototype.GetAnchorB=function(){return this.m_bodyB.GetWorldPoint(this.m_localAnchor2)};U.prototype.GetReactionForce=function(d){if(d===undefined)d=
0;return new w(d*this.m_impulse*this.m_u.x,d*this.m_impulse*this.m_u.y)};U.prototype.GetReactionTorque=function(){return 0};U.prototype.GetLength=function(){return this.m_length};U.prototype.SetLength=function(d){if(d===undefined)d=0;this.m_length=d};U.prototype.GetFrequency=function(){return this.m_frequencyHz};U.prototype.SetFrequency=function(d){if(d===undefined)d=0;this.m_frequencyHz=d};U.prototype.GetDampingRatio=function(){return this.m_dampingRatio};U.prototype.SetDampingRatio=function(d){if(d===
undefined)d=0;this.m_dampingRatio=d};U.prototype.b2DistanceJoint=function(d){this.__super.b2Joint.call(this,d);this.m_localAnchor1.SetV(d.localAnchorA);this.m_localAnchor2.SetV(d.localAnchorB);this.m_length=d.length;this.m_frequencyHz=d.frequencyHz;this.m_dampingRatio=d.dampingRatio;this.m_bias=this.m_gamma=this.m_impulse=0};U.prototype.InitVelocityConstraints=function(d){var h,l=0,j=this.m_bodyA,o=this.m_bodyB;h=j.m_xf.R;var q=this.m_localAnchor1.x-j.m_sweep.localCenter.x,n=this.m_localAnchor1.y-
j.m_sweep.localCenter.y;l=h.col1.x*q+h.col2.x*n;n=h.col1.y*q+h.col2.y*n;q=l;h=o.m_xf.R;var a=this.m_localAnchor2.x-o.m_sweep.localCenter.x,c=this.m_localAnchor2.y-o.m_sweep.localCenter.y;l=h.col1.x*a+h.col2.x*c;c=h.col1.y*a+h.col2.y*c;a=l;this.m_u.x=o.m_sweep.c.x+a-j.m_sweep.c.x-q;this.m_u.y=o.m_sweep.c.y+c-j.m_sweep.c.y-n;l=Math.sqrt(this.m_u.x*this.m_u.x+this.m_u.y*this.m_u.y);l>F.b2_linearSlop?this.m_u.Multiply(1/l):this.m_u.SetZero();h=q*this.m_u.y-n*this.m_u.x;var g=a*this.m_u.y-c*this.m_u.x;
h=j.m_invMass+j.m_invI*h*h+o.m_invMass+o.m_invI*g*g;this.m_mass=h!=0?1/h:0;if(this.m_frequencyHz>0){l=l-this.m_length;g=2*Math.PI*this.m_frequencyHz;var b=this.m_mass*g*g;this.m_gamma=d.dt*(2*this.m_mass*this.m_dampingRatio*g+d.dt*b);this.m_gamma=this.m_gamma!=0?1/this.m_gamma:0;this.m_bias=l*d.dt*b*this.m_gamma;this.m_mass=h+this.m_gamma;this.m_mass=this.m_mass!=0?1/this.m_mass:0}if(d.warmStarting){this.m_impulse*=d.dtRatio;d=this.m_impulse*this.m_u.x;h=this.m_impulse*this.m_u.y;j.m_linearVelocity.x-=
j.m_invMass*d;j.m_linearVelocity.y-=j.m_invMass*h;j.m_angularVelocity-=j.m_invI*(q*h-n*d);o.m_linearVelocity.x+=o.m_invMass*d;o.m_linearVelocity.y+=o.m_invMass*h;o.m_angularVelocity+=o.m_invI*(a*h-c*d)}else this.m_impulse=0};U.prototype.SolveVelocityConstraints=function(){var d,h=this.m_bodyA,l=this.m_bodyB;d=h.m_xf.R;var j=this.m_localAnchor1.x-h.m_sweep.localCenter.x,o=this.m_localAnchor1.y-h.m_sweep.localCenter.y,q=d.col1.x*j+d.col2.x*o;o=d.col1.y*j+d.col2.y*o;j=q;d=l.m_xf.R;var n=this.m_localAnchor2.x-
l.m_sweep.localCenter.x,a=this.m_localAnchor2.y-l.m_sweep.localCenter.y;q=d.col1.x*n+d.col2.x*a;a=d.col1.y*n+d.col2.y*a;n=q;q=-this.m_mass*(this.m_u.x*(l.m_linearVelocity.x+-l.m_angularVelocity*a-(h.m_linearVelocity.x+-h.m_angularVelocity*o))+this.m_u.y*(l.m_linearVelocity.y+l.m_angularVelocity*n-(h.m_linearVelocity.y+h.m_angularVelocity*j))+this.m_bias+this.m_gamma*this.m_impulse);this.m_impulse+=q;d=q*this.m_u.x;q=q*this.m_u.y;h.m_linearVelocity.x-=h.m_invMass*d;h.m_linearVelocity.y-=h.m_invMass*
q;h.m_angularVelocity-=h.m_invI*(j*q-o*d);l.m_linearVelocity.x+=l.m_invMass*d;l.m_linearVelocity.y+=l.m_invMass*q;l.m_angularVelocity+=l.m_invI*(n*q-a*d)};U.prototype.SolvePositionConstraints=function(){var d;if(this.m_frequencyHz>0)return true;var h=this.m_bodyA,l=this.m_bodyB;d=h.m_xf.R;var j=this.m_localAnchor1.x-h.m_sweep.localCenter.x,o=this.m_localAnchor1.y-h.m_sweep.localCenter.y,q=d.col1.x*j+d.col2.x*o;o=d.col1.y*j+d.col2.y*o;j=q;d=l.m_xf.R;var n=this.m_localAnchor2.x-l.m_sweep.localCenter.x,
a=this.m_localAnchor2.y-l.m_sweep.localCenter.y;q=d.col1.x*n+d.col2.x*a;a=d.col1.y*n+d.col2.y*a;n=q;q=l.m_sweep.c.x+n-h.m_sweep.c.x-j;var c=l.m_sweep.c.y+a-h.m_sweep.c.y-o;d=Math.sqrt(q*q+c*c);q/=d;c/=d;d=d-this.m_length;d=y.Clamp(d,-F.b2_maxLinearCorrection,F.b2_maxLinearCorrection);var g=-this.m_mass*d;this.m_u.Set(q,c);q=g*this.m_u.x;c=g*this.m_u.y;h.m_sweep.c.x-=h.m_invMass*q;h.m_sweep.c.y-=h.m_invMass*c;h.m_sweep.a-=h.m_invI*(j*c-o*q);l.m_sweep.c.x+=l.m_invMass*q;l.m_sweep.c.y+=l.m_invMass*c;
l.m_sweep.a+=l.m_invI*(n*c-a*q);h.SynchronizeTransform();l.SynchronizeTransform();return y.Abs(d)<F.b2_linearSlop};Box2D.inherit(p,Box2D.Dynamics.Joints.b2JointDef);p.prototype.__super=Box2D.Dynamics.Joints.b2JointDef.prototype;p.b2DistanceJointDef=function(){Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this,arguments);this.localAnchorA=new w;this.localAnchorB=new w};p.prototype.b2DistanceJointDef=function(){this.__super.b2JointDef.call(this);this.type=I.e_distanceJoint;this.length=1;this.dampingRatio=
this.frequencyHz=0};p.prototype.Initialize=function(d,h,l,j){this.bodyA=d;this.bodyB=h;this.localAnchorA.SetV(this.bodyA.GetLocalPoint(l));this.localAnchorB.SetV(this.bodyB.GetLocalPoint(j));d=j.x-l.x;l=j.y-l.y;this.length=Math.sqrt(d*d+l*l);this.dampingRatio=this.frequencyHz=0};Box2D.inherit(B,Box2D.Dynamics.Joints.b2Joint);B.prototype.__super=Box2D.Dynamics.Joints.b2Joint.prototype;B.b2FrictionJoint=function(){Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this,arguments);this.m_localAnchorA=new w;
this.m_localAnchorB=new w;this.m_linearMass=new G;this.m_linearImpulse=new w};B.prototype.GetAnchorA=function(){return this.m_bodyA.GetWorldPoint(this.m_localAnchorA)};B.prototype.GetAnchorB=function(){return this.m_bodyB.GetWorldPoint(this.m_localAnchorB)};B.prototype.GetReactionForce=function(d){if(d===undefined)d=0;return new w(d*this.m_linearImpulse.x,d*this.m_linearImpulse.y)};B.prototype.GetReactionTorque=function(d){if(d===undefined)d=0;return d*this.m_angularImpulse};B.prototype.SetMaxForce=
function(d){if(d===undefined)d=0;this.m_maxForce=d};B.prototype.GetMaxForce=function(){return this.m_maxForce};B.prototype.SetMaxTorque=function(d){if(d===undefined)d=0;this.m_maxTorque=d};B.prototype.GetMaxTorque=function(){return this.m_maxTorque};B.prototype.b2FrictionJoint=function(d){this.__super.b2Joint.call(this,d);this.m_localAnchorA.SetV(d.localAnchorA);this.m_localAnchorB.SetV(d.localAnchorB);this.m_linearMass.SetZero();this.m_angularMass=0;this.m_linearImpulse.SetZero();this.m_angularImpulse=
0;this.m_maxForce=d.maxForce;this.m_maxTorque=d.maxTorque};B.prototype.InitVelocityConstraints=function(d){var h,l=0,j=this.m_bodyA,o=this.m_bodyB;h=j.m_xf.R;var q=this.m_localAnchorA.x-j.m_sweep.localCenter.x,n=this.m_localAnchorA.y-j.m_sweep.localCenter.y;l=h.col1.x*q+h.col2.x*n;n=h.col1.y*q+h.col2.y*n;q=l;h=o.m_xf.R;var a=this.m_localAnchorB.x-o.m_sweep.localCenter.x,c=this.m_localAnchorB.y-o.m_sweep.localCenter.y;l=h.col1.x*a+h.col2.x*c;c=h.col1.y*a+h.col2.y*c;a=l;h=j.m_invMass;l=o.m_invMass;
var g=j.m_invI,b=o.m_invI,e=new G;e.col1.x=h+l;e.col2.x=0;e.col1.y=0;e.col2.y=h+l;e.col1.x+=g*n*n;e.col2.x+=-g*q*n;e.col1.y+=-g*q*n;e.col2.y+=g*q*q;e.col1.x+=b*c*c;e.col2.x+=-b*a*c;e.col1.y+=-b*a*c;e.col2.y+=b*a*a;e.GetInverse(this.m_linearMass);this.m_angularMass=g+b;if(this.m_angularMass>0)this.m_angularMass=1/this.m_angularMass;if(d.warmStarting){this.m_linearImpulse.x*=d.dtRatio;this.m_linearImpulse.y*=d.dtRatio;this.m_angularImpulse*=d.dtRatio;d=this.m_linearImpulse;j.m_linearVelocity.x-=h*d.x;
j.m_linearVelocity.y-=h*d.y;j.m_angularVelocity-=g*(q*d.y-n*d.x+this.m_angularImpulse);o.m_linearVelocity.x+=l*d.x;o.m_linearVelocity.y+=l*d.y;o.m_angularVelocity+=b*(a*d.y-c*d.x+this.m_angularImpulse)}else{this.m_linearImpulse.SetZero();this.m_angularImpulse=0}};B.prototype.SolveVelocityConstraints=function(d){var h,l=0,j=this.m_bodyA,o=this.m_bodyB,q=j.m_linearVelocity,n=j.m_angularVelocity,a=o.m_linearVelocity,c=o.m_angularVelocity,g=j.m_invMass,b=o.m_invMass,e=j.m_invI,f=o.m_invI;h=j.m_xf.R;var m=
this.m_localAnchorA.x-j.m_sweep.localCenter.x,r=this.m_localAnchorA.y-j.m_sweep.localCenter.y;l=h.col1.x*m+h.col2.x*r;r=h.col1.y*m+h.col2.y*r;m=l;h=o.m_xf.R;var s=this.m_localAnchorB.x-o.m_sweep.localCenter.x,v=this.m_localAnchorB.y-o.m_sweep.localCenter.y;l=h.col1.x*s+h.col2.x*v;v=h.col1.y*s+h.col2.y*v;s=l;h=0;l=-this.m_angularMass*(c-n);var t=this.m_angularImpulse;h=d.dt*this.m_maxTorque;this.m_angularImpulse=y.Clamp(this.m_angularImpulse+l,-h,h);l=this.m_angularImpulse-t;n-=e*l;c+=f*l;h=y.MulMV(this.m_linearMass,
new w(-(a.x-c*v-q.x+n*r),-(a.y+c*s-q.y-n*m)));l=this.m_linearImpulse.Copy();this.m_linearImpulse.Add(h);h=d.dt*this.m_maxForce;if(this.m_linearImpulse.LengthSquared()>h*h){this.m_linearImpulse.Normalize();this.m_linearImpulse.Multiply(h)}h=y.SubtractVV(this.m_linearImpulse,l);q.x-=g*h.x;q.y-=g*h.y;n-=e*(m*h.y-r*h.x);a.x+=b*h.x;a.y+=b*h.y;c+=f*(s*h.y-v*h.x);j.m_angularVelocity=n;o.m_angularVelocity=c};B.prototype.SolvePositionConstraints=function(){return true};Box2D.inherit(Q,Box2D.Dynamics.Joints.b2JointDef);
Q.prototype.__super=Box2D.Dynamics.Joints.b2JointDef.prototype;Q.b2FrictionJointDef=function(){Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this,arguments);this.localAnchorA=new w;this.localAnchorB=new w};Q.prototype.b2FrictionJointDef=function(){this.__super.b2JointDef.call(this);this.type=I.e_frictionJoint;this.maxTorque=this.maxForce=0};Q.prototype.Initialize=function(d,h,l){this.bodyA=d;this.bodyB=h;this.localAnchorA.SetV(this.bodyA.GetLocalPoint(l));this.localAnchorB.SetV(this.bodyB.GetLocalPoint(l))};
Box2D.inherit(V,Box2D.Dynamics.Joints.b2Joint);V.prototype.__super=Box2D.Dynamics.Joints.b2Joint.prototype;V.b2GearJoint=function(){Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this,arguments);this.m_groundAnchor1=new w;this.m_groundAnchor2=new w;this.m_localAnchor1=new w;this.m_localAnchor2=new w;this.m_J=new L};V.prototype.GetAnchorA=function(){return this.m_bodyA.GetWorldPoint(this.m_localAnchor1)};V.prototype.GetAnchorB=function(){return this.m_bodyB.GetWorldPoint(this.m_localAnchor2)};V.prototype.GetReactionForce=
function(d){if(d===undefined)d=0;return new w(d*this.m_impulse*this.m_J.linearB.x,d*this.m_impulse*this.m_J.linearB.y)};V.prototype.GetReactionTorque=function(d){if(d===undefined)d=0;var h=this.m_bodyB.m_xf.R,l=this.m_localAnchor1.x-this.m_bodyB.m_sweep.localCenter.x,j=this.m_localAnchor1.y-this.m_bodyB.m_sweep.localCenter.y,o=h.col1.x*l+h.col2.x*j;j=h.col1.y*l+h.col2.y*j;l=o;return d*(this.m_impulse*this.m_J.angularB-l*this.m_impulse*this.m_J.linearB.y+j*this.m_impulse*this.m_J.linearB.x)};V.prototype.GetRatio=
function(){return this.m_ratio};V.prototype.SetRatio=function(d){if(d===undefined)d=0;this.m_ratio=d};V.prototype.b2GearJoint=function(d){this.__super.b2Joint.call(this,d);var h=parseInt(d.joint1.m_type),l=parseInt(d.joint2.m_type);this.m_prismatic2=this.m_revolute2=this.m_prismatic1=this.m_revolute1=null;var j=0,o=0;this.m_ground1=d.joint1.GetBodyA();this.m_bodyA=d.joint1.GetBodyB();if(h==I.e_revoluteJoint){this.m_revolute1=d.joint1 instanceof N?d.joint1:null;this.m_groundAnchor1.SetV(this.m_revolute1.m_localAnchor1);
this.m_localAnchor1.SetV(this.m_revolute1.m_localAnchor2);j=this.m_revolute1.GetJointAngle()}else{this.m_prismatic1=d.joint1 instanceof H?d.joint1:null;this.m_groundAnchor1.SetV(this.m_prismatic1.m_localAnchor1);this.m_localAnchor1.SetV(this.m_prismatic1.m_localAnchor2);j=this.m_prismatic1.GetJointTranslation()}this.m_ground2=d.joint2.GetBodyA();this.m_bodyB=d.joint2.GetBodyB();if(l==I.e_revoluteJoint){this.m_revolute2=d.joint2 instanceof N?d.joint2:null;this.m_groundAnchor2.SetV(this.m_revolute2.m_localAnchor1);
this.m_localAnchor2.SetV(this.m_revolute2.m_localAnchor2);o=this.m_revolute2.GetJointAngle()}else{this.m_prismatic2=d.joint2 instanceof H?d.joint2:null;this.m_groundAnchor2.SetV(this.m_prismatic2.m_localAnchor1);this.m_localAnchor2.SetV(this.m_prismatic2.m_localAnchor2);o=this.m_prismatic2.GetJointTranslation()}this.m_ratio=d.ratio;this.m_constant=j+this.m_ratio*o;this.m_impulse=0};V.prototype.InitVelocityConstraints=function(d){var h=this.m_ground1,l=this.m_ground2,j=this.m_bodyA,o=this.m_bodyB,
q=0,n=0,a=0,c=0,g=a=0,b=0;this.m_J.SetZero();if(this.m_revolute1){this.m_J.angularA=-1;b+=j.m_invI}else{h=h.m_xf.R;n=this.m_prismatic1.m_localXAxis1;q=h.col1.x*n.x+h.col2.x*n.y;n=h.col1.y*n.x+h.col2.y*n.y;h=j.m_xf.R;a=this.m_localAnchor1.x-j.m_sweep.localCenter.x;c=this.m_localAnchor1.y-j.m_sweep.localCenter.y;g=h.col1.x*a+h.col2.x*c;c=h.col1.y*a+h.col2.y*c;a=g;a=a*n-c*q;this.m_J.linearA.Set(-q,-n);this.m_J.angularA=-a;b+=j.m_invMass+j.m_invI*a*a}if(this.m_revolute2){this.m_J.angularB=-this.m_ratio;
b+=this.m_ratio*this.m_ratio*o.m_invI}else{h=l.m_xf.R;n=this.m_prismatic2.m_localXAxis1;q=h.col1.x*n.x+h.col2.x*n.y;n=h.col1.y*n.x+h.col2.y*n.y;h=o.m_xf.R;a=this.m_localAnchor2.x-o.m_sweep.localCenter.x;c=this.m_localAnchor2.y-o.m_sweep.localCenter.y;g=h.col1.x*a+h.col2.x*c;c=h.col1.y*a+h.col2.y*c;a=g;a=a*n-c*q;this.m_J.linearB.Set(-this.m_ratio*q,-this.m_ratio*n);this.m_J.angularB=-this.m_ratio*a;b+=this.m_ratio*this.m_ratio*(o.m_invMass+o.m_invI*a*a)}this.m_mass=b>0?1/b:0;if(d.warmStarting){j.m_linearVelocity.x+=
j.m_invMass*this.m_impulse*this.m_J.linearA.x;j.m_linearVelocity.y+=j.m_invMass*this.m_impulse*this.m_J.linearA.y;j.m_angularVelocity+=j.m_invI*this.m_impulse*this.m_J.angularA;o.m_linearVelocity.x+=o.m_invMass*this.m_impulse*this.m_J.linearB.x;o.m_linearVelocity.y+=o.m_invMass*this.m_impulse*this.m_J.linearB.y;o.m_angularVelocity+=o.m_invI*this.m_impulse*this.m_J.angularB}else this.m_impulse=0};V.prototype.SolveVelocityConstraints=function(){var d=this.m_bodyA,h=this.m_bodyB,l=-this.m_mass*this.m_J.Compute(d.m_linearVelocity,
d.m_angularVelocity,h.m_linearVelocity,h.m_angularVelocity);this.m_impulse+=l;d.m_linearVelocity.x+=d.m_invMass*l*this.m_J.linearA.x;d.m_linearVelocity.y+=d.m_invMass*l*this.m_J.linearA.y;d.m_angularVelocity+=d.m_invI*l*this.m_J.angularA;h.m_linearVelocity.x+=h.m_invMass*l*this.m_J.linearB.x;h.m_linearVelocity.y+=h.m_invMass*l*this.m_J.linearB.y;h.m_angularVelocity+=h.m_invI*l*this.m_J.angularB};V.prototype.SolvePositionConstraints=function(){var d=this.m_bodyA,h=this.m_bodyB,l=0,j=0;l=this.m_revolute1?
this.m_revolute1.GetJointAngle():this.m_prismatic1.GetJointTranslation();j=this.m_revolute2?this.m_revolute2.GetJointAngle():this.m_prismatic2.GetJointTranslation();l=-this.m_mass*(this.m_constant-(l+this.m_ratio*j));d.m_sweep.c.x+=d.m_invMass*l*this.m_J.linearA.x;d.m_sweep.c.y+=d.m_invMass*l*this.m_J.linearA.y;d.m_sweep.a+=d.m_invI*l*this.m_J.angularA;h.m_sweep.c.x+=h.m_invMass*l*this.m_J.linearB.x;h.m_sweep.c.y+=h.m_invMass*l*this.m_J.linearB.y;h.m_sweep.a+=h.m_invI*l*this.m_J.angularB;d.SynchronizeTransform();
h.SynchronizeTransform();return 0<F.b2_linearSlop};Box2D.inherit(M,Box2D.Dynamics.Joints.b2JointDef);M.prototype.__super=Box2D.Dynamics.Joints.b2JointDef.prototype;M.b2GearJointDef=function(){Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this,arguments)};M.prototype.b2GearJointDef=function(){this.__super.b2JointDef.call(this);this.type=I.e_gearJoint;this.joint2=this.joint1=null;this.ratio=1};L.b2Jacobian=function(){this.linearA=new w;this.linearB=new w};L.prototype.SetZero=function(){this.linearA.SetZero();
this.angularA=0;this.linearB.SetZero();this.angularB=0};L.prototype.Set=function(d,h,l,j){if(h===undefined)h=0;if(j===undefined)j=0;this.linearA.SetV(d);this.angularA=h;this.linearB.SetV(l);this.angularB=j};L.prototype.Compute=function(d,h,l,j){if(h===undefined)h=0;if(j===undefined)j=0;return this.linearA.x*d.x+this.linearA.y*d.y+this.angularA*h+(this.linearB.x*l.x+this.linearB.y*l.y)+this.angularB*j};I.b2Joint=function(){this.m_edgeA=new Y;this.m_edgeB=new Y;this.m_localCenterA=new w;this.m_localCenterB=
new w};I.prototype.GetType=function(){return this.m_type};I.prototype.GetAnchorA=function(){return null};I.prototype.GetAnchorB=function(){return null};I.prototype.GetReactionForce=function(){return null};I.prototype.GetReactionTorque=function(){return 0};I.prototype.GetBodyA=function(){return this.m_bodyA};I.prototype.GetBodyB=function(){return this.m_bodyB};I.prototype.GetNext=function(){return this.m_next};I.prototype.GetUserData=function(){return this.m_userData};I.prototype.SetUserData=function(d){this.m_userData=
d};I.prototype.IsActive=function(){return this.m_bodyA.IsActive()&&this.m_bodyB.IsActive()};I.Create=function(d){var h=null;switch(d.type){case I.e_distanceJoint:h=new U(d instanceof p?d:null);break;case I.e_mouseJoint:h=new u(d instanceof D?d:null);break;case I.e_prismaticJoint:h=new H(d instanceof O?d:null);break;case I.e_revoluteJoint:h=new N(d instanceof S?d:null);break;case I.e_pulleyJoint:h=new E(d instanceof R?d:null);break;case I.e_gearJoint:h=new V(d instanceof M?d:null);break;case I.e_lineJoint:h=
new k(d instanceof z?d:null);break;case I.e_weldJoint:h=new aa(d instanceof Z?d:null);break;case I.e_frictionJoint:h=new B(d instanceof Q?d:null)}return h};I.Destroy=function(){};I.prototype.b2Joint=function(d){F.b2Assert(d.bodyA!=d.bodyB);this.m_type=d.type;this.m_next=this.m_prev=null;this.m_bodyA=d.bodyA;this.m_bodyB=d.bodyB;this.m_collideConnected=d.collideConnected;this.m_islandFlag=false;this.m_userData=d.userData};I.prototype.InitVelocityConstraints=function(){};I.prototype.SolveVelocityConstraints=
function(){};I.prototype.FinalizeVelocityConstraints=function(){};I.prototype.SolvePositionConstraints=function(){return false};Box2D.postDefs.push(function(){Box2D.Dynamics.Joints.b2Joint.e_unknownJoint=0;Box2D.Dynamics.Joints.b2Joint.e_revoluteJoint=1;Box2D.Dynamics.Joints.b2Joint.e_prismaticJoint=2;Box2D.Dynamics.Joints.b2Joint.e_distanceJoint=3;Box2D.Dynamics.Joints.b2Joint.e_pulleyJoint=4;Box2D.Dynamics.Joints.b2Joint.e_mouseJoint=5;Box2D.Dynamics.Joints.b2Joint.e_gearJoint=6;Box2D.Dynamics.Joints.b2Joint.e_lineJoint=
7;Box2D.Dynamics.Joints.b2Joint.e_weldJoint=8;Box2D.Dynamics.Joints.b2Joint.e_frictionJoint=9;Box2D.Dynamics.Joints.b2Joint.e_inactiveLimit=0;Box2D.Dynamics.Joints.b2Joint.e_atLowerLimit=1;Box2D.Dynamics.Joints.b2Joint.e_atUpperLimit=2;Box2D.Dynamics.Joints.b2Joint.e_equalLimits=3});W.b2JointDef=function(){};W.prototype.b2JointDef=function(){this.type=I.e_unknownJoint;this.bodyB=this.bodyA=this.userData=null;this.collideConnected=false};Y.b2JointEdge=function(){};Box2D.inherit(k,Box2D.Dynamics.Joints.b2Joint);
k.prototype.__super=Box2D.Dynamics.Joints.b2Joint.prototype;k.b2LineJoint=function(){Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this,arguments);this.m_localAnchor1=new w;this.m_localAnchor2=new w;this.m_localXAxis1=new w;this.m_localYAxis1=new w;this.m_axis=new w;this.m_perp=new w;this.m_K=new G;this.m_impulse=new w};k.prototype.GetAnchorA=function(){return this.m_bodyA.GetWorldPoint(this.m_localAnchor1)};k.prototype.GetAnchorB=function(){return this.m_bodyB.GetWorldPoint(this.m_localAnchor2)};k.prototype.GetReactionForce=
function(d){if(d===undefined)d=0;return new w(d*(this.m_impulse.x*this.m_perp.x+(this.m_motorImpulse+this.m_impulse.y)*this.m_axis.x),d*(this.m_impulse.x*this.m_perp.y+(this.m_motorImpulse+this.m_impulse.y)*this.m_axis.y))};k.prototype.GetReactionTorque=function(d){if(d===undefined)d=0;return d*this.m_impulse.y};k.prototype.GetJointTranslation=function(){var d=this.m_bodyA,h=this.m_bodyB,l=d.GetWorldPoint(this.m_localAnchor1),j=h.GetWorldPoint(this.m_localAnchor2);h=j.x-l.x;l=j.y-l.y;d=d.GetWorldVector(this.m_localXAxis1);
return d.x*h+d.y*l};k.prototype.GetJointSpeed=function(){var d=this.m_bodyA,h=this.m_bodyB,l;l=d.m_xf.R;var j=this.m_localAnchor1.x-d.m_sweep.localCenter.x,o=this.m_localAnchor1.y-d.m_sweep.localCenter.y,q=l.col1.x*j+l.col2.x*o;o=l.col1.y*j+l.col2.y*o;j=q;l=h.m_xf.R;var n=this.m_localAnchor2.x-h.m_sweep.localCenter.x,a=this.m_localAnchor2.y-h.m_sweep.localCenter.y;q=l.col1.x*n+l.col2.x*a;a=l.col1.y*n+l.col2.y*a;n=q;l=h.m_sweep.c.x+n-(d.m_sweep.c.x+j);q=h.m_sweep.c.y+a-(d.m_sweep.c.y+o);var c=d.GetWorldVector(this.m_localXAxis1),
g=d.m_linearVelocity,b=h.m_linearVelocity;d=d.m_angularVelocity;h=h.m_angularVelocity;return l*-d*c.y+q*d*c.x+(c.x*(b.x+-h*a-g.x- -d*o)+c.y*(b.y+h*n-g.y-d*j))};k.prototype.IsLimitEnabled=function(){return this.m_enableLimit};k.prototype.EnableLimit=function(d){this.m_bodyA.SetAwake(true);this.m_bodyB.SetAwake(true);this.m_enableLimit=d};k.prototype.GetLowerLimit=function(){return this.m_lowerTranslation};k.prototype.GetUpperLimit=function(){return this.m_upperTranslation};k.prototype.SetLimits=function(d,
h){if(d===undefined)d=0;if(h===undefined)h=0;this.m_bodyA.SetAwake(true);this.m_bodyB.SetAwake(true);this.m_lowerTranslation=d;this.m_upperTranslation=h};k.prototype.IsMotorEnabled=function(){return this.m_enableMotor};k.prototype.EnableMotor=function(d){this.m_bodyA.SetAwake(true);this.m_bodyB.SetAwake(true);this.m_enableMotor=d};k.prototype.SetMotorSpeed=function(d){if(d===undefined)d=0;this.m_bodyA.SetAwake(true);this.m_bodyB.SetAwake(true);this.m_motorSpeed=d};k.prototype.GetMotorSpeed=function(){return this.m_motorSpeed};
k.prototype.SetMaxMotorForce=function(d){if(d===undefined)d=0;this.m_bodyA.SetAwake(true);this.m_bodyB.SetAwake(true);this.m_maxMotorForce=d};k.prototype.GetMaxMotorForce=function(){return this.m_maxMotorForce};k.prototype.GetMotorForce=function(){return this.m_motorImpulse};k.prototype.b2LineJoint=function(d){this.__super.b2Joint.call(this,d);this.m_localAnchor1.SetV(d.localAnchorA);this.m_localAnchor2.SetV(d.localAnchorB);this.m_localXAxis1.SetV(d.localAxisA);this.m_localYAxis1.x=-this.m_localXAxis1.y;
this.m_localYAxis1.y=this.m_localXAxis1.x;this.m_impulse.SetZero();this.m_motorImpulse=this.m_motorMass=0;this.m_lowerTranslation=d.lowerTranslation;this.m_upperTranslation=d.upperTranslation;this.m_maxMotorForce=d.maxMotorForce;this.m_motorSpeed=d.motorSpeed;this.m_enableLimit=d.enableLimit;this.m_enableMotor=d.enableMotor;this.m_limitState=I.e_inactiveLimit;this.m_axis.SetZero();this.m_perp.SetZero()};k.prototype.InitVelocityConstraints=function(d){var h=this.m_bodyA,l=this.m_bodyB,j,o=0;this.m_localCenterA.SetV(h.GetLocalCenter());
this.m_localCenterB.SetV(l.GetLocalCenter());var q=h.GetTransform();l.GetTransform();j=h.m_xf.R;var n=this.m_localAnchor1.x-this.m_localCenterA.x,a=this.m_localAnchor1.y-this.m_localCenterA.y;o=j.col1.x*n+j.col2.x*a;a=j.col1.y*n+j.col2.y*a;n=o;j=l.m_xf.R;var c=this.m_localAnchor2.x-this.m_localCenterB.x,g=this.m_localAnchor2.y-this.m_localCenterB.y;o=j.col1.x*c+j.col2.x*g;g=j.col1.y*c+j.col2.y*g;c=o;j=l.m_sweep.c.x+c-h.m_sweep.c.x-n;o=l.m_sweep.c.y+g-h.m_sweep.c.y-a;this.m_invMassA=h.m_invMass;this.m_invMassB=
l.m_invMass;this.m_invIA=h.m_invI;this.m_invIB=l.m_invI;this.m_axis.SetV(y.MulMV(q.R,this.m_localXAxis1));this.m_a1=(j+n)*this.m_axis.y-(o+a)*this.m_axis.x;this.m_a2=c*this.m_axis.y-g*this.m_axis.x;this.m_motorMass=this.m_invMassA+this.m_invMassB+this.m_invIA*this.m_a1*this.m_a1+this.m_invIB*this.m_a2*this.m_a2;this.m_motorMass=this.m_motorMass>Number.MIN_VALUE?1/this.m_motorMass:0;this.m_perp.SetV(y.MulMV(q.R,this.m_localYAxis1));this.m_s1=(j+n)*this.m_perp.y-(o+a)*this.m_perp.x;this.m_s2=c*this.m_perp.y-
g*this.m_perp.x;q=this.m_invMassA;n=this.m_invMassB;a=this.m_invIA;c=this.m_invIB;this.m_K.col1.x=q+n+a*this.m_s1*this.m_s1+c*this.m_s2*this.m_s2;this.m_K.col1.y=a*this.m_s1*this.m_a1+c*this.m_s2*this.m_a2;this.m_K.col2.x=this.m_K.col1.y;this.m_K.col2.y=q+n+a*this.m_a1*this.m_a1+c*this.m_a2*this.m_a2;if(this.m_enableLimit){j=this.m_axis.x*j+this.m_axis.y*o;if(y.Abs(this.m_upperTranslation-this.m_lowerTranslation)<2*F.b2_linearSlop)this.m_limitState=I.e_equalLimits;else if(j<=this.m_lowerTranslation){if(this.m_limitState!=
I.e_atLowerLimit){this.m_limitState=I.e_atLowerLimit;this.m_impulse.y=0}}else if(j>=this.m_upperTranslation){if(this.m_limitState!=I.e_atUpperLimit){this.m_limitState=I.e_atUpperLimit;this.m_impulse.y=0}}else{this.m_limitState=I.e_inactiveLimit;this.m_impulse.y=0}}else this.m_limitState=I.e_inactiveLimit;if(this.m_enableMotor==false)this.m_motorImpulse=0;if(d.warmStarting){this.m_impulse.x*=d.dtRatio;this.m_impulse.y*=d.dtRatio;this.m_motorImpulse*=d.dtRatio;d=this.m_impulse.x*this.m_perp.x+(this.m_motorImpulse+
this.m_impulse.y)*this.m_axis.x;j=this.m_impulse.x*this.m_perp.y+(this.m_motorImpulse+this.m_impulse.y)*this.m_axis.y;o=this.m_impulse.x*this.m_s1+(this.m_motorImpulse+this.m_impulse.y)*this.m_a1;q=this.m_impulse.x*this.m_s2+(this.m_motorImpulse+this.m_impulse.y)*this.m_a2;h.m_linearVelocity.x-=this.m_invMassA*d;h.m_linearVelocity.y-=this.m_invMassA*j;h.m_angularVelocity-=this.m_invIA*o;l.m_linearVelocity.x+=this.m_invMassB*d;l.m_linearVelocity.y+=this.m_invMassB*j;l.m_angularVelocity+=this.m_invIB*
q}else{this.m_impulse.SetZero();this.m_motorImpulse=0}};k.prototype.SolveVelocityConstraints=function(d){var h=this.m_bodyA,l=this.m_bodyB,j=h.m_linearVelocity,o=h.m_angularVelocity,q=l.m_linearVelocity,n=l.m_angularVelocity,a=0,c=0,g=0,b=0;if(this.m_enableMotor&&this.m_limitState!=I.e_equalLimits){b=this.m_motorMass*(this.m_motorSpeed-(this.m_axis.x*(q.x-j.x)+this.m_axis.y*(q.y-j.y)+this.m_a2*n-this.m_a1*o));a=this.m_motorImpulse;c=d.dt*this.m_maxMotorForce;this.m_motorImpulse=y.Clamp(this.m_motorImpulse+
b,-c,c);b=this.m_motorImpulse-a;a=b*this.m_axis.x;c=b*this.m_axis.y;g=b*this.m_a1;b=b*this.m_a2;j.x-=this.m_invMassA*a;j.y-=this.m_invMassA*c;o-=this.m_invIA*g;q.x+=this.m_invMassB*a;q.y+=this.m_invMassB*c;n+=this.m_invIB*b}c=this.m_perp.x*(q.x-j.x)+this.m_perp.y*(q.y-j.y)+this.m_s2*n-this.m_s1*o;if(this.m_enableLimit&&this.m_limitState!=I.e_inactiveLimit){g=this.m_axis.x*(q.x-j.x)+this.m_axis.y*(q.y-j.y)+this.m_a2*n-this.m_a1*o;a=this.m_impulse.Copy();d=this.m_K.Solve(new w,-c,-g);this.m_impulse.Add(d);
if(this.m_limitState==I.e_atLowerLimit)this.m_impulse.y=y.Max(this.m_impulse.y,0);else if(this.m_limitState==I.e_atUpperLimit)this.m_impulse.y=y.Min(this.m_impulse.y,0);c=-c-(this.m_impulse.y-a.y)*this.m_K.col2.x;g=0;g=this.m_K.col1.x!=0?c/this.m_K.col1.x+a.x:a.x;this.m_impulse.x=g;d.x=this.m_impulse.x-a.x;d.y=this.m_impulse.y-a.y;a=d.x*this.m_perp.x+d.y*this.m_axis.x;c=d.x*this.m_perp.y+d.y*this.m_axis.y;g=d.x*this.m_s1+d.y*this.m_a1;b=d.x*this.m_s2+d.y*this.m_a2}else{d=0;d=this.m_K.col1.x!=0?-c/
this.m_K.col1.x:0;this.m_impulse.x+=d;a=d*this.m_perp.x;c=d*this.m_perp.y;g=d*this.m_s1;b=d*this.m_s2}j.x-=this.m_invMassA*a;j.y-=this.m_invMassA*c;o-=this.m_invIA*g;q.x+=this.m_invMassB*a;q.y+=this.m_invMassB*c;n+=this.m_invIB*b;h.m_linearVelocity.SetV(j);h.m_angularVelocity=o;l.m_linearVelocity.SetV(q);l.m_angularVelocity=n};k.prototype.SolvePositionConstraints=function(){var d=this.m_bodyA,h=this.m_bodyB,l=d.m_sweep.c,j=d.m_sweep.a,o=h.m_sweep.c,q=h.m_sweep.a,n,a=0,c=0,g=0,b=0,e=n=0,f=0;c=false;
var m=0,r=G.FromAngle(j);g=G.FromAngle(q);n=r;f=this.m_localAnchor1.x-this.m_localCenterA.x;var s=this.m_localAnchor1.y-this.m_localCenterA.y;a=n.col1.x*f+n.col2.x*s;s=n.col1.y*f+n.col2.y*s;f=a;n=g;g=this.m_localAnchor2.x-this.m_localCenterB.x;b=this.m_localAnchor2.y-this.m_localCenterB.y;a=n.col1.x*g+n.col2.x*b;b=n.col1.y*g+n.col2.y*b;g=a;n=o.x+g-l.x-f;a=o.y+b-l.y-s;if(this.m_enableLimit){this.m_axis=y.MulMV(r,this.m_localXAxis1);this.m_a1=(n+f)*this.m_axis.y-(a+s)*this.m_axis.x;this.m_a2=g*this.m_axis.y-
b*this.m_axis.x;var v=this.m_axis.x*n+this.m_axis.y*a;if(y.Abs(this.m_upperTranslation-this.m_lowerTranslation)<2*F.b2_linearSlop){m=y.Clamp(v,-F.b2_maxLinearCorrection,F.b2_maxLinearCorrection);e=y.Abs(v);c=true}else if(v<=this.m_lowerTranslation){m=y.Clamp(v-this.m_lowerTranslation+F.b2_linearSlop,-F.b2_maxLinearCorrection,0);e=this.m_lowerTranslation-v;c=true}else if(v>=this.m_upperTranslation){m=y.Clamp(v-this.m_upperTranslation+F.b2_linearSlop,0,F.b2_maxLinearCorrection);e=v-this.m_upperTranslation;
c=true}}this.m_perp=y.MulMV(r,this.m_localYAxis1);this.m_s1=(n+f)*this.m_perp.y-(a+s)*this.m_perp.x;this.m_s2=g*this.m_perp.y-b*this.m_perp.x;r=new w;s=this.m_perp.x*n+this.m_perp.y*a;e=y.Max(e,y.Abs(s));f=0;if(c){c=this.m_invMassA;g=this.m_invMassB;b=this.m_invIA;n=this.m_invIB;this.m_K.col1.x=c+g+b*this.m_s1*this.m_s1+n*this.m_s2*this.m_s2;this.m_K.col1.y=b*this.m_s1*this.m_a1+n*this.m_s2*this.m_a2;this.m_K.col2.x=this.m_K.col1.y;this.m_K.col2.y=c+g+b*this.m_a1*this.m_a1+n*this.m_a2*this.m_a2;this.m_K.Solve(r,
-s,-m)}else{c=this.m_invMassA;g=this.m_invMassB;b=this.m_invIA;n=this.m_invIB;m=c+g+b*this.m_s1*this.m_s1+n*this.m_s2*this.m_s2;c=0;c=m!=0?-s/m:0;r.x=c;r.y=0}m=r.x*this.m_perp.x+r.y*this.m_axis.x;c=r.x*this.m_perp.y+r.y*this.m_axis.y;s=r.x*this.m_s1+r.y*this.m_a1;r=r.x*this.m_s2+r.y*this.m_a2;l.x-=this.m_invMassA*m;l.y-=this.m_invMassA*c;j-=this.m_invIA*s;o.x+=this.m_invMassB*m;o.y+=this.m_invMassB*c;q+=this.m_invIB*r;d.m_sweep.a=j;h.m_sweep.a=q;d.SynchronizeTransform();h.SynchronizeTransform();return e<=
F.b2_linearSlop&&f<=F.b2_angularSlop};Box2D.inherit(z,Box2D.Dynamics.Joints.b2JointDef);z.prototype.__super=Box2D.Dynamics.Joints.b2JointDef.prototype;z.b2LineJointDef=function(){Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this,arguments);this.localAnchorA=new w;this.localAnchorB=new w;this.localAxisA=new w};z.prototype.b2LineJointDef=function(){this.__super.b2JointDef.call(this);this.type=I.e_lineJoint;this.localAxisA.Set(1,0);this.enableLimit=false;this.upperTranslation=this.lowerTranslation=
0;this.enableMotor=false;this.motorSpeed=this.maxMotorForce=0};z.prototype.Initialize=function(d,h,l,j){this.bodyA=d;this.bodyB=h;this.localAnchorA=this.bodyA.GetLocalPoint(l);this.localAnchorB=this.bodyB.GetLocalPoint(l);this.localAxisA=this.bodyA.GetLocalVector(j)};Box2D.inherit(u,Box2D.Dynamics.Joints.b2Joint);u.prototype.__super=Box2D.Dynamics.Joints.b2Joint.prototype;u.b2MouseJoint=function(){Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this,arguments);this.K=new G;this.K1=new G;this.K2=new G;
this.m_localAnchor=new w;this.m_target=new w;this.m_impulse=new w;this.m_mass=new G;this.m_C=new w};u.prototype.GetAnchorA=function(){return this.m_target};u.prototype.GetAnchorB=function(){return this.m_bodyB.GetWorldPoint(this.m_localAnchor)};u.prototype.GetReactionForce=function(d){if(d===undefined)d=0;return new w(d*this.m_impulse.x,d*this.m_impulse.y)};u.prototype.GetReactionTorque=function(){return 0};u.prototype.GetTarget=function(){return this.m_target};u.prototype.SetTarget=function(d){this.m_bodyB.IsAwake()==
false&&this.m_bodyB.SetAwake(true);this.m_target=d};u.prototype.GetMaxForce=function(){return this.m_maxForce};u.prototype.SetMaxForce=function(d){if(d===undefined)d=0;this.m_maxForce=d};u.prototype.GetFrequency=function(){return this.m_frequencyHz};u.prototype.SetFrequency=function(d){if(d===undefined)d=0;this.m_frequencyHz=d};u.prototype.GetDampingRatio=function(){return this.m_dampingRatio};u.prototype.SetDampingRatio=function(d){if(d===undefined)d=0;this.m_dampingRatio=d};u.prototype.b2MouseJoint=
function(d){this.__super.b2Joint.call(this,d);this.m_target.SetV(d.target);var h=this.m_target.x-this.m_bodyB.m_xf.position.x,l=this.m_target.y-this.m_bodyB.m_xf.position.y,j=this.m_bodyB.m_xf.R;this.m_localAnchor.x=h*j.col1.x+l*j.col1.y;this.m_localAnchor.y=h*j.col2.x+l*j.col2.y;this.m_maxForce=d.maxForce;this.m_impulse.SetZero();this.m_frequencyHz=d.frequencyHz;this.m_dampingRatio=d.dampingRatio;this.m_gamma=this.m_beta=0};u.prototype.InitVelocityConstraints=function(d){var h=this.m_bodyB,l=h.GetMass(),
j=2*Math.PI*this.m_frequencyHz,o=l*j*j;this.m_gamma=d.dt*(2*l*this.m_dampingRatio*j+d.dt*o);this.m_gamma=this.m_gamma!=0?1/this.m_gamma:0;this.m_beta=d.dt*o*this.m_gamma;o=h.m_xf.R;l=this.m_localAnchor.x-h.m_sweep.localCenter.x;j=this.m_localAnchor.y-h.m_sweep.localCenter.y;var q=o.col1.x*l+o.col2.x*j;j=o.col1.y*l+o.col2.y*j;l=q;o=h.m_invMass;q=h.m_invI;this.K1.col1.x=o;this.K1.col2.x=0;this.K1.col1.y=0;this.K1.col2.y=o;this.K2.col1.x=q*j*j;this.K2.col2.x=-q*l*j;this.K2.col1.y=-q*l*j;this.K2.col2.y=
q*l*l;this.K.SetM(this.K1);this.K.AddM(this.K2);this.K.col1.x+=this.m_gamma;this.K.col2.y+=this.m_gamma;this.K.GetInverse(this.m_mass);this.m_C.x=h.m_sweep.c.x+l-this.m_target.x;this.m_C.y=h.m_sweep.c.y+j-this.m_target.y;h.m_angularVelocity*=0.98;this.m_impulse.x*=d.dtRatio;this.m_impulse.y*=d.dtRatio;h.m_linearVelocity.x+=o*this.m_impulse.x;h.m_linearVelocity.y+=o*this.m_impulse.y;h.m_angularVelocity+=q*(l*this.m_impulse.y-j*this.m_impulse.x)};u.prototype.SolveVelocityConstraints=function(d){var h=
this.m_bodyB,l,j=0,o=0;l=h.m_xf.R;var q=this.m_localAnchor.x-h.m_sweep.localCenter.x,n=this.m_localAnchor.y-h.m_sweep.localCenter.y;j=l.col1.x*q+l.col2.x*n;n=l.col1.y*q+l.col2.y*n;q=j;j=h.m_linearVelocity.x+-h.m_angularVelocity*n;var a=h.m_linearVelocity.y+h.m_angularVelocity*q;l=this.m_mass;j=j+this.m_beta*this.m_C.x+this.m_gamma*this.m_impulse.x;o=a+this.m_beta*this.m_C.y+this.m_gamma*this.m_impulse.y;a=-(l.col1.x*j+l.col2.x*o);o=-(l.col1.y*j+l.col2.y*o);l=this.m_impulse.x;j=this.m_impulse.y;this.m_impulse.x+=
a;this.m_impulse.y+=o;d=d.dt*this.m_maxForce;this.m_impulse.LengthSquared()>d*d&&this.m_impulse.Multiply(d/this.m_impulse.Length());a=this.m_impulse.x-l;o=this.m_impulse.y-j;h.m_linearVelocity.x+=h.m_invMass*a;h.m_linearVelocity.y+=h.m_invMass*o;h.m_angularVelocity+=h.m_invI*(q*o-n*a)};u.prototype.SolvePositionConstraints=function(){return true};Box2D.inherit(D,Box2D.Dynamics.Joints.b2JointDef);D.prototype.__super=Box2D.Dynamics.Joints.b2JointDef.prototype;D.b2MouseJointDef=function(){Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this,
arguments);this.target=new w};D.prototype.b2MouseJointDef=function(){this.__super.b2JointDef.call(this);this.type=I.e_mouseJoint;this.maxForce=0;this.frequencyHz=5;this.dampingRatio=0.7};Box2D.inherit(H,Box2D.Dynamics.Joints.b2Joint);H.prototype.__super=Box2D.Dynamics.Joints.b2Joint.prototype;H.b2PrismaticJoint=function(){Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this,arguments);this.m_localAnchor1=new w;this.m_localAnchor2=new w;this.m_localXAxis1=new w;this.m_localYAxis1=new w;this.m_axis=new w;
this.m_perp=new w;this.m_K=new K;this.m_impulse=new A};H.prototype.GetAnchorA=function(){return this.m_bodyA.GetWorldPoint(this.m_localAnchor1)};H.prototype.GetAnchorB=function(){return this.m_bodyB.GetWorldPoint(this.m_localAnchor2)};H.prototype.GetReactionForce=function(d){if(d===undefined)d=0;return new w(d*(this.m_impulse.x*this.m_perp.x+(this.m_motorImpulse+this.m_impulse.z)*this.m_axis.x),d*(this.m_impulse.x*this.m_perp.y+(this.m_motorImpulse+this.m_impulse.z)*this.m_axis.y))};H.prototype.GetReactionTorque=
function(d){if(d===undefined)d=0;return d*this.m_impulse.y};H.prototype.GetJointTranslation=function(){var d=this.m_bodyA,h=this.m_bodyB,l=d.GetWorldPoint(this.m_localAnchor1),j=h.GetWorldPoint(this.m_localAnchor2);h=j.x-l.x;l=j.y-l.y;d=d.GetWorldVector(this.m_localXAxis1);return d.x*h+d.y*l};H.prototype.GetJointSpeed=function(){var d=this.m_bodyA,h=this.m_bodyB,l;l=d.m_xf.R;var j=this.m_localAnchor1.x-d.m_sweep.localCenter.x,o=this.m_localAnchor1.y-d.m_sweep.localCenter.y,q=l.col1.x*j+l.col2.x*o;
o=l.col1.y*j+l.col2.y*o;j=q;l=h.m_xf.R;var n=this.m_localAnchor2.x-h.m_sweep.localCenter.x,a=this.m_localAnchor2.y-h.m_sweep.localCenter.y;q=l.col1.x*n+l.col2.x*a;a=l.col1.y*n+l.col2.y*a;n=q;l=h.m_sweep.c.x+n-(d.m_sweep.c.x+j);q=h.m_sweep.c.y+a-(d.m_sweep.c.y+o);var c=d.GetWorldVector(this.m_localXAxis1),g=d.m_linearVelocity,b=h.m_linearVelocity;d=d.m_angularVelocity;h=h.m_angularVelocity;return l*-d*c.y+q*d*c.x+(c.x*(b.x+-h*a-g.x- -d*o)+c.y*(b.y+h*n-g.y-d*j))};H.prototype.IsLimitEnabled=function(){return this.m_enableLimit};
H.prototype.EnableLimit=function(d){this.m_bodyA.SetAwake(true);this.m_bodyB.SetAwake(true);this.m_enableLimit=d};H.prototype.GetLowerLimit=function(){return this.m_lowerTranslation};H.prototype.GetUpperLimit=function(){return this.m_upperTranslation};H.prototype.SetLimits=function(d,h){if(d===undefined)d=0;if(h===undefined)h=0;this.m_bodyA.SetAwake(true);this.m_bodyB.SetAwake(true);this.m_lowerTranslation=d;this.m_upperTranslation=h};H.prototype.IsMotorEnabled=function(){return this.m_enableMotor};
H.prototype.EnableMotor=function(d){this.m_bodyA.SetAwake(true);this.m_bodyB.SetAwake(true);this.m_enableMotor=d};H.prototype.SetMotorSpeed=function(d){if(d===undefined)d=0;this.m_bodyA.SetAwake(true);this.m_bodyB.SetAwake(true);this.m_motorSpeed=d};H.prototype.GetMotorSpeed=function(){return this.m_motorSpeed};H.prototype.SetMaxMotorForce=function(d){if(d===undefined)d=0;this.m_bodyA.SetAwake(true);this.m_bodyB.SetAwake(true);this.m_maxMotorForce=d};H.prototype.GetMotorForce=function(){return this.m_motorImpulse};
H.prototype.b2PrismaticJoint=function(d){this.__super.b2Joint.call(this,d);this.m_localAnchor1.SetV(d.localAnchorA);this.m_localAnchor2.SetV(d.localAnchorB);this.m_localXAxis1.SetV(d.localAxisA);this.m_localYAxis1.x=-this.m_localXAxis1.y;this.m_localYAxis1.y=this.m_localXAxis1.x;this.m_refAngle=d.referenceAngle;this.m_impulse.SetZero();this.m_motorImpulse=this.m_motorMass=0;this.m_lowerTranslation=d.lowerTranslation;this.m_upperTranslation=d.upperTranslation;this.m_maxMotorForce=d.maxMotorForce;this.m_motorSpeed=
d.motorSpeed;this.m_enableLimit=d.enableLimit;this.m_enableMotor=d.enableMotor;this.m_limitState=I.e_inactiveLimit;this.m_axis.SetZero();this.m_perp.SetZero()};H.prototype.InitVelocityConstraints=function(d){var h=this.m_bodyA,l=this.m_bodyB,j,o=0;this.m_localCenterA.SetV(h.GetLocalCenter());this.m_localCenterB.SetV(l.GetLocalCenter());var q=h.GetTransform();l.GetTransform();j=h.m_xf.R;var n=this.m_localAnchor1.x-this.m_localCenterA.x,a=this.m_localAnchor1.y-this.m_localCenterA.y;o=j.col1.x*n+j.col2.x*
a;a=j.col1.y*n+j.col2.y*a;n=o;j=l.m_xf.R;var c=this.m_localAnchor2.x-this.m_localCenterB.x,g=this.m_localAnchor2.y-this.m_localCenterB.y;o=j.col1.x*c+j.col2.x*g;g=j.col1.y*c+j.col2.y*g;c=o;j=l.m_sweep.c.x+c-h.m_sweep.c.x-n;o=l.m_sweep.c.y+g-h.m_sweep.c.y-a;this.m_invMassA=h.m_invMass;this.m_invMassB=l.m_invMass;this.m_invIA=h.m_invI;this.m_invIB=l.m_invI;this.m_axis.SetV(y.MulMV(q.R,this.m_localXAxis1));this.m_a1=(j+n)*this.m_axis.y-(o+a)*this.m_axis.x;this.m_a2=c*this.m_axis.y-g*this.m_axis.x;this.m_motorMass=
this.m_invMassA+this.m_invMassB+this.m_invIA*this.m_a1*this.m_a1+this.m_invIB*this.m_a2*this.m_a2;if(this.m_motorMass>Number.MIN_VALUE)this.m_motorMass=1/this.m_motorMass;this.m_perp.SetV(y.MulMV(q.R,this.m_localYAxis1));this.m_s1=(j+n)*this.m_perp.y-(o+a)*this.m_perp.x;this.m_s2=c*this.m_perp.y-g*this.m_perp.x;q=this.m_invMassA;n=this.m_invMassB;a=this.m_invIA;c=this.m_invIB;this.m_K.col1.x=q+n+a*this.m_s1*this.m_s1+c*this.m_s2*this.m_s2;this.m_K.col1.y=a*this.m_s1+c*this.m_s2;this.m_K.col1.z=a*
this.m_s1*this.m_a1+c*this.m_s2*this.m_a2;this.m_K.col2.x=this.m_K.col1.y;this.m_K.col2.y=a+c;this.m_K.col2.z=a*this.m_a1+c*this.m_a2;this.m_K.col3.x=this.m_K.col1.z;this.m_K.col3.y=this.m_K.col2.z;this.m_K.col3.z=q+n+a*this.m_a1*this.m_a1+c*this.m_a2*this.m_a2;if(this.m_enableLimit){j=this.m_axis.x*j+this.m_axis.y*o;if(y.Abs(this.m_upperTranslation-this.m_lowerTranslation)<2*F.b2_linearSlop)this.m_limitState=I.e_equalLimits;else if(j<=this.m_lowerTranslation){if(this.m_limitState!=I.e_atLowerLimit){this.m_limitState=
I.e_atLowerLimit;this.m_impulse.z=0}}else if(j>=this.m_upperTranslation){if(this.m_limitState!=I.e_atUpperLimit){this.m_limitState=I.e_atUpperLimit;this.m_impulse.z=0}}else{this.m_limitState=I.e_inactiveLimit;this.m_impulse.z=0}}else this.m_limitState=I.e_inactiveLimit;if(this.m_enableMotor==false)this.m_motorImpulse=0;if(d.warmStarting){this.m_impulse.x*=d.dtRatio;this.m_impulse.y*=d.dtRatio;this.m_motorImpulse*=d.dtRatio;d=this.m_impulse.x*this.m_perp.x+(this.m_motorImpulse+this.m_impulse.z)*this.m_axis.x;
j=this.m_impulse.x*this.m_perp.y+(this.m_motorImpulse+this.m_impulse.z)*this.m_axis.y;o=this.m_impulse.x*this.m_s1+this.m_impulse.y+(this.m_motorImpulse+this.m_impulse.z)*this.m_a1;q=this.m_impulse.x*this.m_s2+this.m_impulse.y+(this.m_motorImpulse+this.m_impulse.z)*this.m_a2;h.m_linearVelocity.x-=this.m_invMassA*d;h.m_linearVelocity.y-=this.m_invMassA*j;h.m_angularVelocity-=this.m_invIA*o;l.m_linearVelocity.x+=this.m_invMassB*d;l.m_linearVelocity.y+=this.m_invMassB*j;l.m_angularVelocity+=this.m_invIB*
q}else{this.m_impulse.SetZero();this.m_motorImpulse=0}};H.prototype.SolveVelocityConstraints=function(d){var h=this.m_bodyA,l=this.m_bodyB,j=h.m_linearVelocity,o=h.m_angularVelocity,q=l.m_linearVelocity,n=l.m_angularVelocity,a=0,c=0,g=0,b=0;if(this.m_enableMotor&&this.m_limitState!=I.e_equalLimits){b=this.m_motorMass*(this.m_motorSpeed-(this.m_axis.x*(q.x-j.x)+this.m_axis.y*(q.y-j.y)+this.m_a2*n-this.m_a1*o));a=this.m_motorImpulse;d=d.dt*this.m_maxMotorForce;this.m_motorImpulse=y.Clamp(this.m_motorImpulse+
b,-d,d);b=this.m_motorImpulse-a;a=b*this.m_axis.x;c=b*this.m_axis.y;g=b*this.m_a1;b=b*this.m_a2;j.x-=this.m_invMassA*a;j.y-=this.m_invMassA*c;o-=this.m_invIA*g;q.x+=this.m_invMassB*a;q.y+=this.m_invMassB*c;n+=this.m_invIB*b}g=this.m_perp.x*(q.x-j.x)+this.m_perp.y*(q.y-j.y)+this.m_s2*n-this.m_s1*o;c=n-o;if(this.m_enableLimit&&this.m_limitState!=I.e_inactiveLimit){d=this.m_axis.x*(q.x-j.x)+this.m_axis.y*(q.y-j.y)+this.m_a2*n-this.m_a1*o;a=this.m_impulse.Copy();d=this.m_K.Solve33(new A,-g,-c,-d);this.m_impulse.Add(d);
if(this.m_limitState==I.e_atLowerLimit)this.m_impulse.z=y.Max(this.m_impulse.z,0);else if(this.m_limitState==I.e_atUpperLimit)this.m_impulse.z=y.Min(this.m_impulse.z,0);g=-g-(this.m_impulse.z-a.z)*this.m_K.col3.x;c=-c-(this.m_impulse.z-a.z)*this.m_K.col3.y;c=this.m_K.Solve22(new w,g,c);c.x+=a.x;c.y+=a.y;this.m_impulse.x=c.x;this.m_impulse.y=c.y;d.x=this.m_impulse.x-a.x;d.y=this.m_impulse.y-a.y;d.z=this.m_impulse.z-a.z;a=d.x*this.m_perp.x+d.z*this.m_axis.x;c=d.x*this.m_perp.y+d.z*this.m_axis.y;g=d.x*
this.m_s1+d.y+d.z*this.m_a1;b=d.x*this.m_s2+d.y+d.z*this.m_a2}else{d=this.m_K.Solve22(new w,-g,-c);this.m_impulse.x+=d.x;this.m_impulse.y+=d.y;a=d.x*this.m_perp.x;c=d.x*this.m_perp.y;g=d.x*this.m_s1+d.y;b=d.x*this.m_s2+d.y}j.x-=this.m_invMassA*a;j.y-=this.m_invMassA*c;o-=this.m_invIA*g;q.x+=this.m_invMassB*a;q.y+=this.m_invMassB*c;n+=this.m_invIB*b;h.m_linearVelocity.SetV(j);h.m_angularVelocity=o;l.m_linearVelocity.SetV(q);l.m_angularVelocity=n};H.prototype.SolvePositionConstraints=function(){var d=
this.m_bodyA,h=this.m_bodyB,l=d.m_sweep.c,j=d.m_sweep.a,o=h.m_sweep.c,q=h.m_sweep.a,n,a=0,c=0,g=0,b=a=n=0,e=0;c=false;var f=0,m=G.FromAngle(j),r=G.FromAngle(q);n=m;e=this.m_localAnchor1.x-this.m_localCenterA.x;var s=this.m_localAnchor1.y-this.m_localCenterA.y;a=n.col1.x*e+n.col2.x*s;s=n.col1.y*e+n.col2.y*s;e=a;n=r;r=this.m_localAnchor2.x-this.m_localCenterB.x;g=this.m_localAnchor2.y-this.m_localCenterB.y;a=n.col1.x*r+n.col2.x*g;g=n.col1.y*r+n.col2.y*g;r=a;n=o.x+r-l.x-e;a=o.y+g-l.y-s;if(this.m_enableLimit){this.m_axis=
y.MulMV(m,this.m_localXAxis1);this.m_a1=(n+e)*this.m_axis.y-(a+s)*this.m_axis.x;this.m_a2=r*this.m_axis.y-g*this.m_axis.x;var v=this.m_axis.x*n+this.m_axis.y*a;if(y.Abs(this.m_upperTranslation-this.m_lowerTranslation)<2*F.b2_linearSlop){f=y.Clamp(v,-F.b2_maxLinearCorrection,F.b2_maxLinearCorrection);b=y.Abs(v);c=true}else if(v<=this.m_lowerTranslation){f=y.Clamp(v-this.m_lowerTranslation+F.b2_linearSlop,-F.b2_maxLinearCorrection,0);b=this.m_lowerTranslation-v;c=true}else if(v>=this.m_upperTranslation){f=
y.Clamp(v-this.m_upperTranslation+F.b2_linearSlop,0,F.b2_maxLinearCorrection);b=v-this.m_upperTranslation;c=true}}this.m_perp=y.MulMV(m,this.m_localYAxis1);this.m_s1=(n+e)*this.m_perp.y-(a+s)*this.m_perp.x;this.m_s2=r*this.m_perp.y-g*this.m_perp.x;m=new A;s=this.m_perp.x*n+this.m_perp.y*a;r=q-j-this.m_refAngle;b=y.Max(b,y.Abs(s));e=y.Abs(r);if(c){c=this.m_invMassA;g=this.m_invMassB;n=this.m_invIA;a=this.m_invIB;this.m_K.col1.x=c+g+n*this.m_s1*this.m_s1+a*this.m_s2*this.m_s2;this.m_K.col1.y=n*this.m_s1+
a*this.m_s2;this.m_K.col1.z=n*this.m_s1*this.m_a1+a*this.m_s2*this.m_a2;this.m_K.col2.x=this.m_K.col1.y;this.m_K.col2.y=n+a;this.m_K.col2.z=n*this.m_a1+a*this.m_a2;this.m_K.col3.x=this.m_K.col1.z;this.m_K.col3.y=this.m_K.col2.z;this.m_K.col3.z=c+g+n*this.m_a1*this.m_a1+a*this.m_a2*this.m_a2;this.m_K.Solve33(m,-s,-r,-f)}else{c=this.m_invMassA;g=this.m_invMassB;n=this.m_invIA;a=this.m_invIB;f=n*this.m_s1+a*this.m_s2;v=n+a;this.m_K.col1.Set(c+g+n*this.m_s1*this.m_s1+a*this.m_s2*this.m_s2,f,0);this.m_K.col2.Set(f,
v,0);f=this.m_K.Solve22(new w,-s,-r);m.x=f.x;m.y=f.y;m.z=0}f=m.x*this.m_perp.x+m.z*this.m_axis.x;c=m.x*this.m_perp.y+m.z*this.m_axis.y;s=m.x*this.m_s1+m.y+m.z*this.m_a1;m=m.x*this.m_s2+m.y+m.z*this.m_a2;l.x-=this.m_invMassA*f;l.y-=this.m_invMassA*c;j-=this.m_invIA*s;o.x+=this.m_invMassB*f;o.y+=this.m_invMassB*c;q+=this.m_invIB*m;d.m_sweep.a=j;h.m_sweep.a=q;d.SynchronizeTransform();h.SynchronizeTransform();return b<=F.b2_linearSlop&&e<=F.b2_angularSlop};Box2D.inherit(O,Box2D.Dynamics.Joints.b2JointDef);
O.prototype.__super=Box2D.Dynamics.Joints.b2JointDef.prototype;O.b2PrismaticJointDef=function(){Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this,arguments);this.localAnchorA=new w;this.localAnchorB=new w;this.localAxisA=new w};O.prototype.b2PrismaticJointDef=function(){this.__super.b2JointDef.call(this);this.type=I.e_prismaticJoint;this.localAxisA.Set(1,0);this.referenceAngle=0;this.enableLimit=false;this.upperTranslation=this.lowerTranslation=0;this.enableMotor=false;this.motorSpeed=this.maxMotorForce=
0};O.prototype.Initialize=function(d,h,l,j){this.bodyA=d;this.bodyB=h;this.localAnchorA=this.bodyA.GetLocalPoint(l);this.localAnchorB=this.bodyB.GetLocalPoint(l);this.localAxisA=this.bodyA.GetLocalVector(j);this.referenceAngle=this.bodyB.GetAngle()-this.bodyA.GetAngle()};Box2D.inherit(E,Box2D.Dynamics.Joints.b2Joint);E.prototype.__super=Box2D.Dynamics.Joints.b2Joint.prototype;E.b2PulleyJoint=function(){Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this,arguments);this.m_groundAnchor1=new w;this.m_groundAnchor2=
new w;this.m_localAnchor1=new w;this.m_localAnchor2=new w;this.m_u1=new w;this.m_u2=new w};E.prototype.GetAnchorA=function(){return this.m_bodyA.GetWorldPoint(this.m_localAnchor1)};E.prototype.GetAnchorB=function(){return this.m_bodyB.GetWorldPoint(this.m_localAnchor2)};E.prototype.GetReactionForce=function(d){if(d===undefined)d=0;return new w(d*this.m_impulse*this.m_u2.x,d*this.m_impulse*this.m_u2.y)};E.prototype.GetReactionTorque=function(){return 0};E.prototype.GetGroundAnchorA=function(){var d=
this.m_ground.m_xf.position.Copy();d.Add(this.m_groundAnchor1);return d};E.prototype.GetGroundAnchorB=function(){var d=this.m_ground.m_xf.position.Copy();d.Add(this.m_groundAnchor2);return d};E.prototype.GetLength1=function(){var d=this.m_bodyA.GetWorldPoint(this.m_localAnchor1),h=d.x-(this.m_ground.m_xf.position.x+this.m_groundAnchor1.x);d=d.y-(this.m_ground.m_xf.position.y+this.m_groundAnchor1.y);return Math.sqrt(h*h+d*d)};E.prototype.GetLength2=function(){var d=this.m_bodyB.GetWorldPoint(this.m_localAnchor2),
h=d.x-(this.m_ground.m_xf.position.x+this.m_groundAnchor2.x);d=d.y-(this.m_ground.m_xf.position.y+this.m_groundAnchor2.y);return Math.sqrt(h*h+d*d)};E.prototype.GetRatio=function(){return this.m_ratio};E.prototype.b2PulleyJoint=function(d){this.__super.b2Joint.call(this,d);this.m_ground=this.m_bodyA.m_world.m_groundBody;this.m_groundAnchor1.x=d.groundAnchorA.x-this.m_ground.m_xf.position.x;this.m_groundAnchor1.y=d.groundAnchorA.y-this.m_ground.m_xf.position.y;this.m_groundAnchor2.x=d.groundAnchorB.x-
this.m_ground.m_xf.position.x;this.m_groundAnchor2.y=d.groundAnchorB.y-this.m_ground.m_xf.position.y;this.m_localAnchor1.SetV(d.localAnchorA);this.m_localAnchor2.SetV(d.localAnchorB);this.m_ratio=d.ratio;this.m_constant=d.lengthA+this.m_ratio*d.lengthB;this.m_maxLength1=y.Min(d.maxLengthA,this.m_constant-this.m_ratio*E.b2_minPulleyLength);this.m_maxLength2=y.Min(d.maxLengthB,(this.m_constant-E.b2_minPulleyLength)/this.m_ratio);this.m_limitImpulse2=this.m_limitImpulse1=this.m_impulse=0};E.prototype.InitVelocityConstraints=
function(d){var h=this.m_bodyA,l=this.m_bodyB,j;j=h.m_xf.R;var o=this.m_localAnchor1.x-h.m_sweep.localCenter.x,q=this.m_localAnchor1.y-h.m_sweep.localCenter.y,n=j.col1.x*o+j.col2.x*q;q=j.col1.y*o+j.col2.y*q;o=n;j=l.m_xf.R;var a=this.m_localAnchor2.x-l.m_sweep.localCenter.x,c=this.m_localAnchor2.y-l.m_sweep.localCenter.y;n=j.col1.x*a+j.col2.x*c;c=j.col1.y*a+j.col2.y*c;a=n;j=l.m_sweep.c.x+a;n=l.m_sweep.c.y+c;var g=this.m_ground.m_xf.position.x+this.m_groundAnchor2.x,b=this.m_ground.m_xf.position.y+
this.m_groundAnchor2.y;this.m_u1.Set(h.m_sweep.c.x+o-(this.m_ground.m_xf.position.x+this.m_groundAnchor1.x),h.m_sweep.c.y+q-(this.m_ground.m_xf.position.y+this.m_groundAnchor1.y));this.m_u2.Set(j-g,n-b);j=this.m_u1.Length();n=this.m_u2.Length();j>F.b2_linearSlop?this.m_u1.Multiply(1/j):this.m_u1.SetZero();n>F.b2_linearSlop?this.m_u2.Multiply(1/n):this.m_u2.SetZero();if(this.m_constant-j-this.m_ratio*n>0){this.m_state=I.e_inactiveLimit;this.m_impulse=0}else this.m_state=I.e_atUpperLimit;if(j<this.m_maxLength1){this.m_limitState1=
I.e_inactiveLimit;this.m_limitImpulse1=0}else this.m_limitState1=I.e_atUpperLimit;if(n<this.m_maxLength2){this.m_limitState2=I.e_inactiveLimit;this.m_limitImpulse2=0}else this.m_limitState2=I.e_atUpperLimit;j=o*this.m_u1.y-q*this.m_u1.x;n=a*this.m_u2.y-c*this.m_u2.x;this.m_limitMass1=h.m_invMass+h.m_invI*j*j;this.m_limitMass2=l.m_invMass+l.m_invI*n*n;this.m_pulleyMass=this.m_limitMass1+this.m_ratio*this.m_ratio*this.m_limitMass2;this.m_limitMass1=1/this.m_limitMass1;this.m_limitMass2=1/this.m_limitMass2;
this.m_pulleyMass=1/this.m_pulleyMass;if(d.warmStarting){this.m_impulse*=d.dtRatio;this.m_limitImpulse1*=d.dtRatio;this.m_limitImpulse2*=d.dtRatio;d=(-this.m_impulse-this.m_limitImpulse1)*this.m_u1.x;j=(-this.m_impulse-this.m_limitImpulse1)*this.m_u1.y;n=(-this.m_ratio*this.m_impulse-this.m_limitImpulse2)*this.m_u2.x;g=(-this.m_ratio*this.m_impulse-this.m_limitImpulse2)*this.m_u2.y;h.m_linearVelocity.x+=h.m_invMass*d;h.m_linearVelocity.y+=h.m_invMass*j;h.m_angularVelocity+=h.m_invI*(o*j-q*d);l.m_linearVelocity.x+=
l.m_invMass*n;l.m_linearVelocity.y+=l.m_invMass*g;l.m_angularVelocity+=l.m_invI*(a*g-c*n)}else this.m_limitImpulse2=this.m_limitImpulse1=this.m_impulse=0};E.prototype.SolveVelocityConstraints=function(){var d=this.m_bodyA,h=this.m_bodyB,l;l=d.m_xf.R;var j=this.m_localAnchor1.x-d.m_sweep.localCenter.x,o=this.m_localAnchor1.y-d.m_sweep.localCenter.y,q=l.col1.x*j+l.col2.x*o;o=l.col1.y*j+l.col2.y*o;j=q;l=h.m_xf.R;var n=this.m_localAnchor2.x-h.m_sweep.localCenter.x,a=this.m_localAnchor2.y-h.m_sweep.localCenter.y;
q=l.col1.x*n+l.col2.x*a;a=l.col1.y*n+l.col2.y*a;n=q;var c=q=l=0,g=0;l=g=l=g=c=q=l=0;if(this.m_state==I.e_atUpperLimit){l=d.m_linearVelocity.x+-d.m_angularVelocity*o;q=d.m_linearVelocity.y+d.m_angularVelocity*j;c=h.m_linearVelocity.x+-h.m_angularVelocity*a;g=h.m_linearVelocity.y+h.m_angularVelocity*n;l=-(this.m_u1.x*l+this.m_u1.y*q)-this.m_ratio*(this.m_u2.x*c+this.m_u2.y*g);g=this.m_pulleyMass*-l;l=this.m_impulse;this.m_impulse=y.Max(0,this.m_impulse+g);g=this.m_impulse-l;l=-g*this.m_u1.x;q=-g*this.m_u1.y;
c=-this.m_ratio*g*this.m_u2.x;g=-this.m_ratio*g*this.m_u2.y;d.m_linearVelocity.x+=d.m_invMass*l;d.m_linearVelocity.y+=d.m_invMass*q;d.m_angularVelocity+=d.m_invI*(j*q-o*l);h.m_linearVelocity.x+=h.m_invMass*c;h.m_linearVelocity.y+=h.m_invMass*g;h.m_angularVelocity+=h.m_invI*(n*g-a*c)}if(this.m_limitState1==I.e_atUpperLimit){l=d.m_linearVelocity.x+-d.m_angularVelocity*o;q=d.m_linearVelocity.y+d.m_angularVelocity*j;l=-(this.m_u1.x*l+this.m_u1.y*q);g=-this.m_limitMass1*l;l=this.m_limitImpulse1;this.m_limitImpulse1=
y.Max(0,this.m_limitImpulse1+g);g=this.m_limitImpulse1-l;l=-g*this.m_u1.x;q=-g*this.m_u1.y;d.m_linearVelocity.x+=d.m_invMass*l;d.m_linearVelocity.y+=d.m_invMass*q;d.m_angularVelocity+=d.m_invI*(j*q-o*l)}if(this.m_limitState2==I.e_atUpperLimit){c=h.m_linearVelocity.x+-h.m_angularVelocity*a;g=h.m_linearVelocity.y+h.m_angularVelocity*n;l=-(this.m_u2.x*c+this.m_u2.y*g);g=-this.m_limitMass2*l;l=this.m_limitImpulse2;this.m_limitImpulse2=y.Max(0,this.m_limitImpulse2+g);g=this.m_limitImpulse2-l;c=-g*this.m_u2.x;
g=-g*this.m_u2.y;h.m_linearVelocity.x+=h.m_invMass*c;h.m_linearVelocity.y+=h.m_invMass*g;h.m_angularVelocity+=h.m_invI*(n*g-a*c)}};E.prototype.SolvePositionConstraints=function(){var d=this.m_bodyA,h=this.m_bodyB,l,j=this.m_ground.m_xf.position.x+this.m_groundAnchor1.x,o=this.m_ground.m_xf.position.y+this.m_groundAnchor1.y,q=this.m_ground.m_xf.position.x+this.m_groundAnchor2.x,n=this.m_ground.m_xf.position.y+this.m_groundAnchor2.y,a=0,c=0,g=0,b=0,e=l=0,f=0,m=0,r=e=m=l=e=l=0;if(this.m_state==I.e_atUpperLimit){l=
d.m_xf.R;a=this.m_localAnchor1.x-d.m_sweep.localCenter.x;c=this.m_localAnchor1.y-d.m_sweep.localCenter.y;e=l.col1.x*a+l.col2.x*c;c=l.col1.y*a+l.col2.y*c;a=e;l=h.m_xf.R;g=this.m_localAnchor2.x-h.m_sweep.localCenter.x;b=this.m_localAnchor2.y-h.m_sweep.localCenter.y;e=l.col1.x*g+l.col2.x*b;b=l.col1.y*g+l.col2.y*b;g=e;l=d.m_sweep.c.x+a;e=d.m_sweep.c.y+c;f=h.m_sweep.c.x+g;m=h.m_sweep.c.y+b;this.m_u1.Set(l-j,e-o);this.m_u2.Set(f-q,m-n);l=this.m_u1.Length();e=this.m_u2.Length();l>F.b2_linearSlop?this.m_u1.Multiply(1/
l):this.m_u1.SetZero();e>F.b2_linearSlop?this.m_u2.Multiply(1/e):this.m_u2.SetZero();l=this.m_constant-l-this.m_ratio*e;r=y.Max(r,-l);l=y.Clamp(l+F.b2_linearSlop,-F.b2_maxLinearCorrection,0);m=-this.m_pulleyMass*l;l=-m*this.m_u1.x;e=-m*this.m_u1.y;f=-this.m_ratio*m*this.m_u2.x;m=-this.m_ratio*m*this.m_u2.y;d.m_sweep.c.x+=d.m_invMass*l;d.m_sweep.c.y+=d.m_invMass*e;d.m_sweep.a+=d.m_invI*(a*e-c*l);h.m_sweep.c.x+=h.m_invMass*f;h.m_sweep.c.y+=h.m_invMass*m;h.m_sweep.a+=h.m_invI*(g*m-b*f);d.SynchronizeTransform();
h.SynchronizeTransform()}if(this.m_limitState1==I.e_atUpperLimit){l=d.m_xf.R;a=this.m_localAnchor1.x-d.m_sweep.localCenter.x;c=this.m_localAnchor1.y-d.m_sweep.localCenter.y;e=l.col1.x*a+l.col2.x*c;c=l.col1.y*a+l.col2.y*c;a=e;l=d.m_sweep.c.x+a;e=d.m_sweep.c.y+c;this.m_u1.Set(l-j,e-o);l=this.m_u1.Length();if(l>F.b2_linearSlop){this.m_u1.x*=1/l;this.m_u1.y*=1/l}else this.m_u1.SetZero();l=this.m_maxLength1-l;r=y.Max(r,-l);l=y.Clamp(l+F.b2_linearSlop,-F.b2_maxLinearCorrection,0);m=-this.m_limitMass1*l;
l=-m*this.m_u1.x;e=-m*this.m_u1.y;d.m_sweep.c.x+=d.m_invMass*l;d.m_sweep.c.y+=d.m_invMass*e;d.m_sweep.a+=d.m_invI*(a*e-c*l);d.SynchronizeTransform()}if(this.m_limitState2==I.e_atUpperLimit){l=h.m_xf.R;g=this.m_localAnchor2.x-h.m_sweep.localCenter.x;b=this.m_localAnchor2.y-h.m_sweep.localCenter.y;e=l.col1.x*g+l.col2.x*b;b=l.col1.y*g+l.col2.y*b;g=e;f=h.m_sweep.c.x+g;m=h.m_sweep.c.y+b;this.m_u2.Set(f-q,m-n);e=this.m_u2.Length();if(e>F.b2_linearSlop){this.m_u2.x*=1/e;this.m_u2.y*=1/e}else this.m_u2.SetZero();
l=this.m_maxLength2-e;r=y.Max(r,-l);l=y.Clamp(l+F.b2_linearSlop,-F.b2_maxLinearCorrection,0);m=-this.m_limitMass2*l;f=-m*this.m_u2.x;m=-m*this.m_u2.y;h.m_sweep.c.x+=h.m_invMass*f;h.m_sweep.c.y+=h.m_invMass*m;h.m_sweep.a+=h.m_invI*(g*m-b*f);h.SynchronizeTransform()}return r<F.b2_linearSlop};Box2D.postDefs.push(function(){Box2D.Dynamics.Joints.b2PulleyJoint.b2_minPulleyLength=2});Box2D.inherit(R,Box2D.Dynamics.Joints.b2JointDef);R.prototype.__super=Box2D.Dynamics.Joints.b2JointDef.prototype;R.b2PulleyJointDef=
function(){Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this,arguments);this.groundAnchorA=new w;this.groundAnchorB=new w;this.localAnchorA=new w;this.localAnchorB=new w};R.prototype.b2PulleyJointDef=function(){this.__super.b2JointDef.call(this);this.type=I.e_pulleyJoint;this.groundAnchorA.Set(-1,1);this.groundAnchorB.Set(1,1);this.localAnchorA.Set(-1,0);this.localAnchorB.Set(1,0);this.maxLengthB=this.lengthB=this.maxLengthA=this.lengthA=0;this.ratio=1;this.collideConnected=true};R.prototype.Initialize=
function(d,h,l,j,o,q,n){if(n===undefined)n=0;this.bodyA=d;this.bodyB=h;this.groundAnchorA.SetV(l);this.groundAnchorB.SetV(j);this.localAnchorA=this.bodyA.GetLocalPoint(o);this.localAnchorB=this.bodyB.GetLocalPoint(q);d=o.x-l.x;l=o.y-l.y;this.lengthA=Math.sqrt(d*d+l*l);l=q.x-j.x;j=q.y-j.y;this.lengthB=Math.sqrt(l*l+j*j);this.ratio=n;n=this.lengthA+this.ratio*this.lengthB;this.maxLengthA=n-this.ratio*E.b2_minPulleyLength;this.maxLengthB=(n-E.b2_minPulleyLength)/this.ratio};Box2D.inherit(N,Box2D.Dynamics.Joints.b2Joint);
N.prototype.__super=Box2D.Dynamics.Joints.b2Joint.prototype;N.b2RevoluteJoint=function(){Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this,arguments);this.K=new G;this.K1=new G;this.K2=new G;this.K3=new G;this.impulse3=new A;this.impulse2=new w;this.reduced=new w;this.m_localAnchor1=new w;this.m_localAnchor2=new w;this.m_impulse=new A;this.m_mass=new K};N.prototype.GetAnchorA=function(){return this.m_bodyA.GetWorldPoint(this.m_localAnchor1)};N.prototype.GetAnchorB=function(){return this.m_bodyB.GetWorldPoint(this.m_localAnchor2)};
N.prototype.GetReactionForce=function(d){if(d===undefined)d=0;return new w(d*this.m_impulse.x,d*this.m_impulse.y)};N.prototype.GetReactionTorque=function(d){if(d===undefined)d=0;return d*this.m_impulse.z};N.prototype.GetJointAngle=function(){return this.m_bodyB.m_sweep.a-this.m_bodyA.m_sweep.a-this.m_referenceAngle};N.prototype.GetJointSpeed=function(){return this.m_bodyB.m_angularVelocity-this.m_bodyA.m_angularVelocity};N.prototype.IsLimitEnabled=function(){return this.m_enableLimit};N.prototype.EnableLimit=
function(d){this.m_enableLimit=d};N.prototype.GetLowerLimit=function(){return this.m_lowerAngle};N.prototype.GetUpperLimit=function(){return this.m_upperAngle};N.prototype.SetLimits=function(d,h){if(d===undefined)d=0;if(h===undefined)h=0;this.m_lowerAngle=d;this.m_upperAngle=h};N.prototype.IsMotorEnabled=function(){this.m_bodyA.SetAwake(true);this.m_bodyB.SetAwake(true);return this.m_enableMotor};N.prototype.EnableMotor=function(d){this.m_enableMotor=d};N.prototype.SetMotorSpeed=function(d){if(d===
undefined)d=0;this.m_bodyA.SetAwake(true);this.m_bodyB.SetAwake(true);this.m_motorSpeed=d};N.prototype.GetMotorSpeed=function(){return this.m_motorSpeed};N.prototype.SetMaxMotorTorque=function(d){if(d===undefined)d=0;this.m_maxMotorTorque=d};N.prototype.GetMotorTorque=function(){return this.m_maxMotorTorque};N.prototype.b2RevoluteJoint=function(d){this.__super.b2Joint.call(this,d);this.m_localAnchor1.SetV(d.localAnchorA);this.m_localAnchor2.SetV(d.localAnchorB);this.m_referenceAngle=d.referenceAngle;
this.m_impulse.SetZero();this.m_motorImpulse=0;this.m_lowerAngle=d.lowerAngle;this.m_upperAngle=d.upperAngle;this.m_maxMotorTorque=d.maxMotorTorque;this.m_motorSpeed=d.motorSpeed;this.m_enableLimit=d.enableLimit;this.m_enableMotor=d.enableMotor;this.m_limitState=I.e_inactiveLimit};N.prototype.InitVelocityConstraints=function(d){var h=this.m_bodyA,l=this.m_bodyB,j,o=0;j=h.m_xf.R;var q=this.m_localAnchor1.x-h.m_sweep.localCenter.x,n=this.m_localAnchor1.y-h.m_sweep.localCenter.y;o=j.col1.x*q+j.col2.x*
n;n=j.col1.y*q+j.col2.y*n;q=o;j=l.m_xf.R;var a=this.m_localAnchor2.x-l.m_sweep.localCenter.x,c=this.m_localAnchor2.y-l.m_sweep.localCenter.y;o=j.col1.x*a+j.col2.x*c;c=j.col1.y*a+j.col2.y*c;a=o;j=h.m_invMass;o=l.m_invMass;var g=h.m_invI,b=l.m_invI;this.m_mass.col1.x=j+o+n*n*g+c*c*b;this.m_mass.col2.x=-n*q*g-c*a*b;this.m_mass.col3.x=-n*g-c*b;this.m_mass.col1.y=this.m_mass.col2.x;this.m_mass.col2.y=j+o+q*q*g+a*a*b;this.m_mass.col3.y=q*g+a*b;this.m_mass.col1.z=this.m_mass.col3.x;this.m_mass.col2.z=this.m_mass.col3.y;
this.m_mass.col3.z=g+b;this.m_motorMass=1/(g+b);if(this.m_enableMotor==false)this.m_motorImpulse=0;if(this.m_enableLimit){var e=l.m_sweep.a-h.m_sweep.a-this.m_referenceAngle;if(y.Abs(this.m_upperAngle-this.m_lowerAngle)<2*F.b2_angularSlop)this.m_limitState=I.e_equalLimits;else if(e<=this.m_lowerAngle){if(this.m_limitState!=I.e_atLowerLimit)this.m_impulse.z=0;this.m_limitState=I.e_atLowerLimit}else if(e>=this.m_upperAngle){if(this.m_limitState!=I.e_atUpperLimit)this.m_impulse.z=0;this.m_limitState=
I.e_atUpperLimit}else{this.m_limitState=I.e_inactiveLimit;this.m_impulse.z=0}}else this.m_limitState=I.e_inactiveLimit;if(d.warmStarting){this.m_impulse.x*=d.dtRatio;this.m_impulse.y*=d.dtRatio;this.m_motorImpulse*=d.dtRatio;d=this.m_impulse.x;e=this.m_impulse.y;h.m_linearVelocity.x-=j*d;h.m_linearVelocity.y-=j*e;h.m_angularVelocity-=g*(q*e-n*d+this.m_motorImpulse+this.m_impulse.z);l.m_linearVelocity.x+=o*d;l.m_linearVelocity.y+=o*e;l.m_angularVelocity+=b*(a*e-c*d+this.m_motorImpulse+this.m_impulse.z)}else{this.m_impulse.SetZero();
this.m_motorImpulse=0}};N.prototype.SolveVelocityConstraints=function(d){var h=this.m_bodyA,l=this.m_bodyB,j=0,o=j=0,q=0,n=0,a=0,c=h.m_linearVelocity,g=h.m_angularVelocity,b=l.m_linearVelocity,e=l.m_angularVelocity,f=h.m_invMass,m=l.m_invMass,r=h.m_invI,s=l.m_invI;if(this.m_enableMotor&&this.m_limitState!=I.e_equalLimits){o=this.m_motorMass*-(e-g-this.m_motorSpeed);q=this.m_motorImpulse;n=d.dt*this.m_maxMotorTorque;this.m_motorImpulse=y.Clamp(this.m_motorImpulse+o,-n,n);o=this.m_motorImpulse-q;g-=
r*o;e+=s*o}if(this.m_enableLimit&&this.m_limitState!=I.e_inactiveLimit){d=h.m_xf.R;o=this.m_localAnchor1.x-h.m_sweep.localCenter.x;q=this.m_localAnchor1.y-h.m_sweep.localCenter.y;j=d.col1.x*o+d.col2.x*q;q=d.col1.y*o+d.col2.y*q;o=j;d=l.m_xf.R;n=this.m_localAnchor2.x-l.m_sweep.localCenter.x;a=this.m_localAnchor2.y-l.m_sweep.localCenter.y;j=d.col1.x*n+d.col2.x*a;a=d.col1.y*n+d.col2.y*a;n=j;d=b.x+-e*a-c.x- -g*q;var v=b.y+e*n-c.y-g*o;this.m_mass.Solve33(this.impulse3,-d,-v,-(e-g));if(this.m_limitState==
I.e_equalLimits)this.m_impulse.Add(this.impulse3);else if(this.m_limitState==I.e_atLowerLimit){j=this.m_impulse.z+this.impulse3.z;if(j<0){this.m_mass.Solve22(this.reduced,-d,-v);this.impulse3.x=this.reduced.x;this.impulse3.y=this.reduced.y;this.impulse3.z=-this.m_impulse.z;this.m_impulse.x+=this.reduced.x;this.m_impulse.y+=this.reduced.y;this.m_impulse.z=0}}else if(this.m_limitState==I.e_atUpperLimit){j=this.m_impulse.z+this.impulse3.z;if(j>0){this.m_mass.Solve22(this.reduced,-d,-v);this.impulse3.x=
this.reduced.x;this.impulse3.y=this.reduced.y;this.impulse3.z=-this.m_impulse.z;this.m_impulse.x+=this.reduced.x;this.m_impulse.y+=this.reduced.y;this.m_impulse.z=0}}c.x-=f*this.impulse3.x;c.y-=f*this.impulse3.y;g-=r*(o*this.impulse3.y-q*this.impulse3.x+this.impulse3.z);b.x+=m*this.impulse3.x;b.y+=m*this.impulse3.y;e+=s*(n*this.impulse3.y-a*this.impulse3.x+this.impulse3.z)}else{d=h.m_xf.R;o=this.m_localAnchor1.x-h.m_sweep.localCenter.x;q=this.m_localAnchor1.y-h.m_sweep.localCenter.y;j=d.col1.x*o+
d.col2.x*q;q=d.col1.y*o+d.col2.y*q;o=j;d=l.m_xf.R;n=this.m_localAnchor2.x-l.m_sweep.localCenter.x;a=this.m_localAnchor2.y-l.m_sweep.localCenter.y;j=d.col1.x*n+d.col2.x*a;a=d.col1.y*n+d.col2.y*a;n=j;this.m_mass.Solve22(this.impulse2,-(b.x+-e*a-c.x- -g*q),-(b.y+e*n-c.y-g*o));this.m_impulse.x+=this.impulse2.x;this.m_impulse.y+=this.impulse2.y;c.x-=f*this.impulse2.x;c.y-=f*this.impulse2.y;g-=r*(o*this.impulse2.y-q*this.impulse2.x);b.x+=m*this.impulse2.x;b.y+=m*this.impulse2.y;e+=s*(n*this.impulse2.y-
a*this.impulse2.x)}h.m_linearVelocity.SetV(c);h.m_angularVelocity=g;l.m_linearVelocity.SetV(b);l.m_angularVelocity=e};N.prototype.SolvePositionConstraints=function(){var d=0,h,l=this.m_bodyA,j=this.m_bodyB,o=0,q=h=0,n=0,a=0;if(this.m_enableLimit&&this.m_limitState!=I.e_inactiveLimit){d=j.m_sweep.a-l.m_sweep.a-this.m_referenceAngle;var c=0;if(this.m_limitState==I.e_equalLimits){d=y.Clamp(d-this.m_lowerAngle,-F.b2_maxAngularCorrection,F.b2_maxAngularCorrection);c=-this.m_motorMass*d;o=y.Abs(d)}else if(this.m_limitState==
I.e_atLowerLimit){d=d-this.m_lowerAngle;o=-d;d=y.Clamp(d+F.b2_angularSlop,-F.b2_maxAngularCorrection,0);c=-this.m_motorMass*d}else if(this.m_limitState==I.e_atUpperLimit){o=d=d-this.m_upperAngle;d=y.Clamp(d-F.b2_angularSlop,0,F.b2_maxAngularCorrection);c=-this.m_motorMass*d}l.m_sweep.a-=l.m_invI*c;j.m_sweep.a+=j.m_invI*c;l.SynchronizeTransform();j.SynchronizeTransform()}h=l.m_xf.R;c=this.m_localAnchor1.x-l.m_sweep.localCenter.x;d=this.m_localAnchor1.y-l.m_sweep.localCenter.y;q=h.col1.x*c+h.col2.x*
d;d=h.col1.y*c+h.col2.y*d;c=q;h=j.m_xf.R;var g=this.m_localAnchor2.x-j.m_sweep.localCenter.x,b=this.m_localAnchor2.y-j.m_sweep.localCenter.y;q=h.col1.x*g+h.col2.x*b;b=h.col1.y*g+h.col2.y*b;g=q;n=j.m_sweep.c.x+g-l.m_sweep.c.x-c;a=j.m_sweep.c.y+b-l.m_sweep.c.y-d;var e=n*n+a*a;h=Math.sqrt(e);q=l.m_invMass;var f=j.m_invMass,m=l.m_invI,r=j.m_invI,s=10*F.b2_linearSlop;if(e>s*s){e=1/(q+f);n=e*-n;a=e*-a;l.m_sweep.c.x-=0.5*q*n;l.m_sweep.c.y-=0.5*q*a;j.m_sweep.c.x+=0.5*f*n;j.m_sweep.c.y+=0.5*f*a;n=j.m_sweep.c.x+
g-l.m_sweep.c.x-c;a=j.m_sweep.c.y+b-l.m_sweep.c.y-d}this.K1.col1.x=q+f;this.K1.col2.x=0;this.K1.col1.y=0;this.K1.col2.y=q+f;this.K2.col1.x=m*d*d;this.K2.col2.x=-m*c*d;this.K2.col1.y=-m*c*d;this.K2.col2.y=m*c*c;this.K3.col1.x=r*b*b;this.K3.col2.x=-r*g*b;this.K3.col1.y=-r*g*b;this.K3.col2.y=r*g*g;this.K.SetM(this.K1);this.K.AddM(this.K2);this.K.AddM(this.K3);this.K.Solve(N.tImpulse,-n,-a);n=N.tImpulse.x;a=N.tImpulse.y;l.m_sweep.c.x-=l.m_invMass*n;l.m_sweep.c.y-=l.m_invMass*a;l.m_sweep.a-=l.m_invI*(c*
a-d*n);j.m_sweep.c.x+=j.m_invMass*n;j.m_sweep.c.y+=j.m_invMass*a;j.m_sweep.a+=j.m_invI*(g*a-b*n);l.SynchronizeTransform();j.SynchronizeTransform();return h<=F.b2_linearSlop&&o<=F.b2_angularSlop};Box2D.postDefs.push(function(){Box2D.Dynamics.Joints.b2RevoluteJoint.tImpulse=new w});Box2D.inherit(S,Box2D.Dynamics.Joints.b2JointDef);S.prototype.__super=Box2D.Dynamics.Joints.b2JointDef.prototype;S.b2RevoluteJointDef=function(){Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this,arguments);this.localAnchorA=
new w;this.localAnchorB=new w};S.prototype.b2RevoluteJointDef=function(){this.__super.b2JointDef.call(this);this.type=I.e_revoluteJoint;this.localAnchorA.Set(0,0);this.localAnchorB.Set(0,0);this.motorSpeed=this.maxMotorTorque=this.upperAngle=this.lowerAngle=this.referenceAngle=0;this.enableMotor=this.enableLimit=false};S.prototype.Initialize=function(d,h,l){this.bodyA=d;this.bodyB=h;this.localAnchorA=this.bodyA.GetLocalPoint(l);this.localAnchorB=this.bodyB.GetLocalPoint(l);this.referenceAngle=this.bodyB.GetAngle()-
this.bodyA.GetAngle()};Box2D.inherit(aa,Box2D.Dynamics.Joints.b2Joint);aa.prototype.__super=Box2D.Dynamics.Joints.b2Joint.prototype;aa.b2WeldJoint=function(){Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this,arguments);this.m_localAnchorA=new w;this.m_localAnchorB=new w;this.m_impulse=new A;this.m_mass=new K};aa.prototype.GetAnchorA=function(){return this.m_bodyA.GetWorldPoint(this.m_localAnchorA)};aa.prototype.GetAnchorB=function(){return this.m_bodyB.GetWorldPoint(this.m_localAnchorB)};aa.prototype.GetReactionForce=
function(d){if(d===undefined)d=0;return new w(d*this.m_impulse.x,d*this.m_impulse.y)};aa.prototype.GetReactionTorque=function(d){if(d===undefined)d=0;return d*this.m_impulse.z};aa.prototype.b2WeldJoint=function(d){this.__super.b2Joint.call(this,d);this.m_localAnchorA.SetV(d.localAnchorA);this.m_localAnchorB.SetV(d.localAnchorB);this.m_referenceAngle=d.referenceAngle;this.m_impulse.SetZero();this.m_mass=new K};aa.prototype.InitVelocityConstraints=function(d){var h,l=0,j=this.m_bodyA,o=this.m_bodyB;
h=j.m_xf.R;var q=this.m_localAnchorA.x-j.m_sweep.localCenter.x,n=this.m_localAnchorA.y-j.m_sweep.localCenter.y;l=h.col1.x*q+h.col2.x*n;n=h.col1.y*q+h.col2.y*n;q=l;h=o.m_xf.R;var a=this.m_localAnchorB.x-o.m_sweep.localCenter.x,c=this.m_localAnchorB.y-o.m_sweep.localCenter.y;l=h.col1.x*a+h.col2.x*c;c=h.col1.y*a+h.col2.y*c;a=l;h=j.m_invMass;l=o.m_invMass;var g=j.m_invI,b=o.m_invI;this.m_mass.col1.x=h+l+n*n*g+c*c*b;this.m_mass.col2.x=-n*q*g-c*a*b;this.m_mass.col3.x=-n*g-c*b;this.m_mass.col1.y=this.m_mass.col2.x;
this.m_mass.col2.y=h+l+q*q*g+a*a*b;this.m_mass.col3.y=q*g+a*b;this.m_mass.col1.z=this.m_mass.col3.x;this.m_mass.col2.z=this.m_mass.col3.y;this.m_mass.col3.z=g+b;if(d.warmStarting){this.m_impulse.x*=d.dtRatio;this.m_impulse.y*=d.dtRatio;this.m_impulse.z*=d.dtRatio;j.m_linearVelocity.x-=h*this.m_impulse.x;j.m_linearVelocity.y-=h*this.m_impulse.y;j.m_angularVelocity-=g*(q*this.m_impulse.y-n*this.m_impulse.x+this.m_impulse.z);o.m_linearVelocity.x+=l*this.m_impulse.x;o.m_linearVelocity.y+=l*this.m_impulse.y;
o.m_angularVelocity+=b*(a*this.m_impulse.y-c*this.m_impulse.x+this.m_impulse.z)}else this.m_impulse.SetZero()};aa.prototype.SolveVelocityConstraints=function(){var d,h=0,l=this.m_bodyA,j=this.m_bodyB,o=l.m_linearVelocity,q=l.m_angularVelocity,n=j.m_linearVelocity,a=j.m_angularVelocity,c=l.m_invMass,g=j.m_invMass,b=l.m_invI,e=j.m_invI;d=l.m_xf.R;var f=this.m_localAnchorA.x-l.m_sweep.localCenter.x,m=this.m_localAnchorA.y-l.m_sweep.localCenter.y;h=d.col1.x*f+d.col2.x*m;m=d.col1.y*f+d.col2.y*m;f=h;d=
j.m_xf.R;var r=this.m_localAnchorB.x-j.m_sweep.localCenter.x,s=this.m_localAnchorB.y-j.m_sweep.localCenter.y;h=d.col1.x*r+d.col2.x*s;s=d.col1.y*r+d.col2.y*s;r=h;d=n.x-a*s-o.x+q*m;h=n.y+a*r-o.y-q*f;var v=a-q,t=new A;this.m_mass.Solve33(t,-d,-h,-v);this.m_impulse.Add(t);o.x-=c*t.x;o.y-=c*t.y;q-=b*(f*t.y-m*t.x+t.z);n.x+=g*t.x;n.y+=g*t.y;a+=e*(r*t.y-s*t.x+t.z);l.m_angularVelocity=q;j.m_angularVelocity=a};aa.prototype.SolvePositionConstraints=function(){var d,h=0,l=this.m_bodyA,j=this.m_bodyB;d=l.m_xf.R;
var o=this.m_localAnchorA.x-l.m_sweep.localCenter.x,q=this.m_localAnchorA.y-l.m_sweep.localCenter.y;h=d.col1.x*o+d.col2.x*q;q=d.col1.y*o+d.col2.y*q;o=h;d=j.m_xf.R;var n=this.m_localAnchorB.x-j.m_sweep.localCenter.x,a=this.m_localAnchorB.y-j.m_sweep.localCenter.y;h=d.col1.x*n+d.col2.x*a;a=d.col1.y*n+d.col2.y*a;n=h;d=l.m_invMass;h=j.m_invMass;var c=l.m_invI,g=j.m_invI,b=j.m_sweep.c.x+n-l.m_sweep.c.x-o,e=j.m_sweep.c.y+a-l.m_sweep.c.y-q,f=j.m_sweep.a-l.m_sweep.a-this.m_referenceAngle,m=10*F.b2_linearSlop,
r=Math.sqrt(b*b+e*e),s=y.Abs(f);if(r>m){c*=1;g*=1}this.m_mass.col1.x=d+h+q*q*c+a*a*g;this.m_mass.col2.x=-q*o*c-a*n*g;this.m_mass.col3.x=-q*c-a*g;this.m_mass.col1.y=this.m_mass.col2.x;this.m_mass.col2.y=d+h+o*o*c+n*n*g;this.m_mass.col3.y=o*c+n*g;this.m_mass.col1.z=this.m_mass.col3.x;this.m_mass.col2.z=this.m_mass.col3.y;this.m_mass.col3.z=c+g;m=new A;this.m_mass.Solve33(m,-b,-e,-f);l.m_sweep.c.x-=d*m.x;l.m_sweep.c.y-=d*m.y;l.m_sweep.a-=c*(o*m.y-q*m.x+m.z);j.m_sweep.c.x+=h*m.x;j.m_sweep.c.y+=h*m.y;
j.m_sweep.a+=g*(n*m.y-a*m.x+m.z);l.SynchronizeTransform();j.SynchronizeTransform();return r<=F.b2_linearSlop&&s<=F.b2_angularSlop};Box2D.inherit(Z,Box2D.Dynamics.Joints.b2JointDef);Z.prototype.__super=Box2D.Dynamics.Joints.b2JointDef.prototype;Z.b2WeldJointDef=function(){Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this,arguments);this.localAnchorA=new w;this.localAnchorB=new w};Z.prototype.b2WeldJointDef=function(){this.__super.b2JointDef.call(this);this.type=I.e_weldJoint;this.referenceAngle=
0};Z.prototype.Initialize=function(d,h,l){this.bodyA=d;this.bodyB=h;this.localAnchorA.SetV(this.bodyA.GetLocalPoint(l));this.localAnchorB.SetV(this.bodyB.GetLocalPoint(l));this.referenceAngle=this.bodyB.GetAngle()-this.bodyA.GetAngle()}})();
(function(){var F=Box2D.Dynamics.b2DebugDraw;F.b2DebugDraw=function(){this.m_xformScale=this.m_fillAlpha=this.m_alpha=this.m_lineThickness=this.m_drawScale=1;var G=this;this.m_sprite={graphics:{clear:function(){G.m_ctx.clearRect(0,0,G.m_ctx.canvas.width,G.m_ctx.canvas.height)}}}};F.prototype._color=function(G,K){return"rgba("+((G&16711680)>>16)+","+((G&65280)>>8)+","+(G&255)+","+K+")"};F.prototype.b2DebugDraw=function(){this.m_drawFlags=0};F.prototype.SetFlags=function(G){if(G===undefined)G=0;this.m_drawFlags=
G};F.prototype.GetFlags=function(){return this.m_drawFlags};F.prototype.AppendFlags=function(G){if(G===undefined)G=0;this.m_drawFlags|=G};F.prototype.ClearFlags=function(G){if(G===undefined)G=0;this.m_drawFlags&=~G};F.prototype.SetSprite=function(G){this.m_ctx=G};F.prototype.GetSprite=function(){return this.m_ctx};F.prototype.SetDrawScale=function(G){if(G===undefined)G=0;this.m_drawScale=G};F.prototype.GetDrawScale=function(){return this.m_drawScale};F.prototype.SetLineThickness=function(G){if(G===
undefined)G=0;this.m_lineThickness=G;this.m_ctx.strokeWidth=G};F.prototype.GetLineThickness=function(){return this.m_lineThickness};F.prototype.SetAlpha=function(G){if(G===undefined)G=0;this.m_alpha=G};F.prototype.GetAlpha=function(){return this.m_alpha};F.prototype.SetFillAlpha=function(G){if(G===undefined)G=0;this.m_fillAlpha=G};F.prototype.GetFillAlpha=function(){return this.m_fillAlpha};F.prototype.SetXFormScale=function(G){if(G===undefined)G=0;this.m_xformScale=G};F.prototype.GetXFormScale=function(){return this.m_xformScale};
F.prototype.DrawPolygon=function(G,K,y){if(K){var w=this.m_ctx,A=this.m_drawScale;w.beginPath();w.strokeStyle=this._color(y.color,this.m_alpha);w.moveTo(G[0].x*A,G[0].y*A);for(y=1;y<K;y++)w.lineTo(G[y].x*A,G[y].y*A);w.lineTo(G[0].x*A,G[0].y*A);w.closePath();w.stroke()}};F.prototype.DrawSolidPolygon=function(G,K,y){if(K){var w=this.m_ctx,A=this.m_drawScale;w.beginPath();w.strokeStyle=this._color(y.color,this.m_alpha);w.fillStyle=this._color(y.color,this.m_fillAlpha);w.moveTo(G[0].x*A,G[0].y*A);for(y=
1;y<K;y++)w.lineTo(G[y].x*A,G[y].y*A);w.lineTo(G[0].x*A,G[0].y*A);w.closePath();w.fill();w.stroke()}};F.prototype.DrawCircle=function(G,K,y){if(K){var w=this.m_ctx,A=this.m_drawScale;w.beginPath();w.strokeStyle=this._color(y.color,this.m_alpha);w.arc(G.x*A,G.y*A,K*A,0,Math.PI*2,true);w.closePath();w.stroke()}};F.prototype.DrawSolidCircle=function(G,K,y,w){if(K){var A=this.m_ctx,U=this.m_drawScale,p=G.x*U,B=G.y*U;A.moveTo(0,0);A.beginPath();A.strokeStyle=this._color(w.color,this.m_alpha);A.fillStyle=
this._color(w.color,this.m_fillAlpha);A.arc(p,B,K*U,0,Math.PI*2,true);A.moveTo(p,B);A.lineTo((G.x+y.x*K)*U,(G.y+y.y*K)*U);A.closePath();A.fill();A.stroke()}};F.prototype.DrawSegment=function(G,K,y){var w=this.m_ctx,A=this.m_drawScale;w.strokeStyle=this._color(y.color,this.m_alpha);w.beginPath();w.moveTo(G.x*A,G.y*A);w.lineTo(K.x*A,K.y*A);w.closePath();w.stroke()};F.prototype.DrawTransform=function(G){var K=this.m_ctx,y=this.m_drawScale;K.beginPath();K.strokeStyle=this._color(16711680,this.m_alpha);
K.moveTo(G.position.x*y,G.position.y*y);K.lineTo((G.position.x+this.m_xformScale*G.R.col1.x)*y,(G.position.y+this.m_xformScale*G.R.col1.y)*y);K.strokeStyle=this._color(65280,this.m_alpha);K.moveTo(G.position.x*y,G.position.y*y);K.lineTo((G.position.x+this.m_xformScale*G.R.col2.x)*y,(G.position.y+this.m_xformScale*G.R.col2.y)*y);K.closePath();K.stroke()}})();var i;for(i=0;i<Box2D.postDefs.length;++i)Box2D.postDefs[i]();delete Box2D.postDefs;


/*--------------------------------------------------
 *   Browser - ../engine/browser.js
 */
/**
# Function
Browser.js is one large function that is used to discover what browser is being used the capabilities of the browser. In addition to browser type, we determine whether it is mobile or desktop, whether it supports multi or single-touch, what type of audio it can play, and whether it supports canvas or not. 
All of this information is added to platformer.settings.supports and used throughout the code, including when determining which layers to display (e.g. adding a button layer for mobile devices), and in audio so that we load and play the correct sound types. 
*/
(function(){
	var uagent   = navigator.userAgent.toLowerCase(),
	    
	    myAudio  = document.createElement('audio'),
	    
	    supports = {
			canvas:      false, // determined below
			touch:       !!('ontouchstart' in window),

			// specific browsers as determined above
			iPod:      (uagent.search('ipod')    > -1),
			iPhone:    (uagent.search('iphone')  > -1),
			iPad:      (uagent.search('ipad')    > -1),
			safari:    (uagent.search('safari')  > -1),
			ie:        (uagent.search('msie')    > -1),
		    firefox:   (uagent.search('firefox') > -1),
			android:   (uagent.search('android') > -1),
			chrome:    (uagent.search('chrome')  > -1),
			silk:      (uagent.search('silk')    > -1),
			iOS:       false, //determined below
			mobile:    false, //determined below
			desktop:   false, //determined below
			multitouch:false, //determined below
			
			// audio support as determined below
			ogg:         true,
			m4a:         true,
			mp3:         true
		},
	    aspects = platformer.settings.aspects,
	    supportsAspects = {},
	    i = 0,
	    j = 0,
	    k = 0,
	    foundAspect = false,
	    listAspects = '';
	
	supports.iOS     = supports.iPod || supports.iPhone  || supports.iPad;
	supports.mobile  = supports.iOS  || supports.android || supports.silk;
	supports.desktop = !supports.mobile;
	
	//Determine multitouch:
	if(supports.touch){
		if (supports.android){
			if(parseInt(uagent.slice(uagent.indexOf("android") + 8)) > 2){
				supports.multitouch = true;
			}
		} else {
			supports.multitouch = true;
		}
	}
	
	// Determine audio support
	if ((myAudio.canPlayType) && !(!!myAudio.canPlayType && "" != myAudio.canPlayType('audio/ogg; codecs="vorbis"'))){
	    supports.ogg = false;
	    if(supports.ie || !(!!myAudio.canPlayType && "" != myAudio.canPlayType('audio/mp4'))){
	    	supports.m4a = false; //make IE use mp3's since it doesn't like the version of m4a made for mobiles
	    }
	}

	// Does the browser support canvas?
	var canvas = document.createElement('canvas');
	try	{
		supports.canvas = !!(canvas.getContext('2d')); // S60
	} catch(e) {
		supports.canvas = !!(canvas.getContext); // IE
	}
	delete canvas;

		//replace settings aspects build array with actual support of aspects
		platformer.settings.aspects = supportsAspects;
	platformer.settings.aspects = {};
	for (i in aspects){
		foundAspect = false;
		listAspects = '';
		for (j in aspects[i]){
			listAspects += ' ' + j;
			for (k in aspects[i][j]){
				if (uagent.search(aspects[i][j][k]) > -1){
					platformer.settings.aspects[j] = true;
					foundAspect = true;
					break;
				}
			}
			if(foundAspect) break;
		}
		if(!foundAspect){
			console.warn('This browser doesn\'t support any of the following: ' + listAspects);
		}
	}

	platformer.settings.supports = supports;

})();


/*--------------------------------------------------
 *   Main - ../engine/main.js
 */
/**
# Main.js
Main.js creates the game object. Main.js is called on the window 'load' event.
*/

// Clean up console logging for MSIE
(function(window){
	if(window && !window.console){
		var console = window.console = {};
		console.log = console.warn = console.error = function(){};
	}
})(window);

window.addEventListener('load', function(){
	// This creates the game once the page is loaded. If the game should not appear on page load, global setting "autoLoad" needs to be set to `false` and game must be created independently.
	if(platformer.settings && platformer.settings.global && (platformer.settings.global.autoLoad !== false)){
		new platformer.classes.game(platformer.settings);
	}
}, false);

platformer.classes = {};

/*--------------------------------------------------
 *   Game - ../engine/game.js
 */
/**
# CLASS game
This class is used to create the `platformer.game` object. The `game` object handles loading [[Scene]]s and transitions between scenes. It also accepts external events and passes them on to the current scene.

## Methods
- **constructor** - Creates an object from the game class.
  - @param definition (object) - Collection of settings from config.json.
  - @param onFinishedLoading (function) - An optional function to run once the game has begun.
- **tick** - Called by the CreateJS ticker. This calls tick on the scene.
  - @param delta (number) - The time passed since the last tick.
- **loadScene** - Loads a scene. If there's a transition, performs the transition.
  - @param sceneId (string) - The scene to load.
  - @param transition (string) - What type of transition to make. Currently there are: 'fade-to-black' and 'instant'
- **loadNextScene** - Sets the currentScene to the specified scene. Called by loadScene, shouldn't be called on its own.
  - @param sceneId (string) - The scene to load.
- **completeSceneTransition** - Ends the transition and destroys the old scene. Called when the scene effect is finished.
- **addEventListener** - Adding event listeners to the specified element and assigning callback functions.
  - @param element (DOM element) - The element to add the eventListener to.
  - @param event (DOM events) - The event to listen for.
  - @param callback (function) - The function to call when the event occurs.
- **destroy** - Destroys the object so that it's ready to garbage collect.

## Helper Function
- **bindEvent** - Returns a function which takes in an event and calls the callback function passing it the eventId and the event.
  - @param eventId (string) - The id of the event we're binding to.
  - @param callback (function) - The function to call.
*/

platformer.classes.game = (function(){
	var bindEvent = function(eventId, callback){return function(event){callback(eventId, event);};};
	var game      = function (definition, onFinishedLoading){
		var innerRootElement = document.createElement('div'),
		outerRootElement = null;

		platformer.game = this; //Make this instance the only Game instance.
		
		this.currentScene = undefined;
		this.loaded    = null;
		this.settings = definition;

		// platform-specific settings should apply if not explicitly changed.
		if(!definition.aspects)    definition.aspects    = platformer.settings.aspects;
		if(!definition.supports)   definition.supports   = platformer.settings.supports;
		if(!definition.classes)    definition.classes    = platformer.settings.classes;
		if(!definition.components) definition.components = platformer.settings.components;
		
		if(document.getElementById(definition.global.rootElement || "root")){
			outerRootElement = document.getElementById(definition.global.rootElement || "root");
		} else {
			outerRootElement = document.createElement('div');
			outerRootElement.id = definition.global.rootElement || "root";
			document.getElementsByTagName('body')[0].appendChild(outerRootElement);
		}
		for (var i in definition.supports){
			if(definition.supports[i]){
				outerRootElement.className += ' supports-' + i;
			}
		}
		
		innerRootElement.id = 'inner-' + outerRootElement.id;
		outerRootElement.appendChild(innerRootElement);
		this.rootElement = innerRootElement;
		this.containerElement = outerRootElement;
		
		this.loadScene(definition.global.initialScene);

		// Send the following events along to the scene to handle as necessary:
		var self = this,
		callback = null;
		
		if(definition.debug){ //If this is a test build, leave in the browser key combinations so debug tools can be opened as expected.
			callback = function(eventId, event){
				self.currentScene.trigger(eventId, event);
			};
		} else { // Otherwise remove default browser behavior for key inputs so that they do not interfere with game-play.
			callback = function(eventId, event){
				self.currentScene.trigger(eventId, event);
				event.preventDefault(); // this may be too aggressive - if problems arise, we may need to limit this to certain key combos that get in the way of game-play. Example: (event.metaKey && event.keyCode == 37) causes an accidental cmd key press to send the browser back a page while playing and hitting the left arrow button.
			};
		}
		
		this.bindings = [];
		this.addEventListener(window, 'keydown', callback);
		this.addEventListener(window, 'keyup',   callback);

		// If aspect ratio of game area should be maintained on resizing, create new callback to handle it
		if(definition.global.aspectRatio){
			callback = function(eventId, event){
				var element = innerRootElement;
				var ratio   = definition.global.aspectRatio;
				var newW    = outerRootElement.offsetWidth;
				var newH    = outerRootElement.offsetHeight;
				if(definition.global.maxWidth && (definition.global.maxWidth < newW)){
					newW = definition.global.maxWidth;
				}
				var bodyRatio = newW / newH;
				if (bodyRatio > ratio)
				{  //Width is too wide
					element.style.height = newH + 'px';
				    newW = newH * ratio;
				    element.style.width = newW + 'px';
				} else {  //Height is too tall
					element.style.width = newW + 'px';
				    newH = newW / ratio;
				    element.style.height = newH + 'px';
				}
				if(definition.global.resizeFont){
					outerRootElement.style.fontSize = Math.round(newW / 100) + 'px';
				}
				element.style.marginTop = '-' + Math.round(newH / 2) + 'px';
				element.style.marginLeft = '-' + Math.round(newW / 2) + 'px';
				element.style.top = '50%';
				element.style.left = '50%';
				self.currentScene.trigger(eventId, event);
			};
			callback('resize');
		} else if(definition.global.resizeFont) {
			callback = function(eventId, event){
				outerRootElement.style.fontSize = parseInt(self.rootElement.offsetWidth / 100) + 'px';
				self.currentScene.trigger(eventId, event);
			};
			callback('resize');
		}
		this.addEventListener(window, 'orientationchange', callback);
		this.addEventListener(window, 'resize',            callback);
		
		if(onFinishedLoading){
			onFinishedLoading(this);
		}

		createjs.Ticker.timingMode = 'raf';
		createjs.Ticker.setFPS(definition.global.fps || 60);
		this.tickWrapper = function(e){
			self.tick(e);
		};
		createjs.Ticker.addEventListener("tick", this.tickWrapper);
	};
	var proto = game.prototype;
	
	proto.tick = function(tickEvent){
		if(this.loadedScene){
			this.loadedScene.trigger('tick', tickEvent);
		}
		if(this.currentScene){
			this.currentScene.trigger('tick', tickEvent);
		}
	};
	
	proto.loadScene = function(sceneId, transition, persistantData, preloading){
		var self = this;
		this.inTransition = true;
		this.leavingScene = this.currentScene;
		
		if(preloading){
			this.loadNextScene(sceneId);
			return;
		}
		
		switch(transition){
		case 'fade-to-black':
			var element = document.createElement('div');
			this.rootElement.appendChild(element);
			element.style.width = '100%';
			element.style.height = '100%';
			element.style.position = 'absolute';
			element.style.zIndex = '12';
			element.style.opacity = '0';
			element.style.background = '#000';
			new createjs.Tween(element.style).to({opacity:0}, 500).to({opacity:1}, 500).call(function(t){
				if(!this.loaded) {
					self.loadNextScene(sceneId, persistantData);
				}
				self.completeSceneTransition(persistantData);
			}).wait(500).to({opacity:0}, 500).call(function(t){
				self.rootElement.removeChild(element);
				element = undefined;
			});
			break;
		case 'instant':
		default:
			if(!this.loaded){
				self.loadNextScene(sceneId, persistantData);
			}
			this.completeSceneTransition(persistantData);
		}
	};
	
	proto.loadNextScene = function(sceneId, persistantData){
		var scene = null;
		
		if(typeof sceneId === 'string'){
			scene = this.settings.scenes[sceneId];
		} else {
			scene = sceneId;
		}
		
		this.loaded = sceneId;
		this.loadedScene = new platformer.classes.scene(scene, this.rootElement);

		console.log('Scene loaded: ' + sceneId); //putting a console log here, because Android seems to hang if I do not. Need to test more Android devices.
		this.loadedScene.trigger('scene-loaded', persistantData);
	};
	
	proto.completeSceneTransition = function(persistantData){
		var sceneId = this.loaded;
		
		this.currentScene = this.loadedScene;
		this.loadedScene  = null;
		
		this.loaded = false;
		this.inTransition = false;
		if(this.leavingScene){
			this.leavingScene.destroy();
			this.leavingScene = false;
		}

		console.log('Scene live: ' + sceneId); //putting a console log here, because Android seems to hang if I do not. Need to test more Android devices.
		this.currentScene.trigger('scene-live', persistantData);
	};
	
	proto.addEventListener = function(element, event, callback){
		this.bindings[event] = {element: element, event: event, callback: bindEvent(event, callback)};
		element.addEventListener(event, this.bindings[event].callback, true);
	};
	
	proto.destroy = function ()
	{
		createjs.Ticker.removeEventListener("tick", this.tickWrapper);
		for (var binding in this.bindings){
			this.bindings[binding].element.removeEventListener(this.bindings[binding].event, this.bindings[binding].callback);
		}
		this.bindings.length = 0;
	};
	
	return game;
})();

/*--------------------------------------------------
 *   ComponentFactory - ../engine/factory.js
 */
/*
 * This file includes a few helper functions to handle component code that is repeated across multiple components.
 * See ec-template.js for an example componentDefinition that can be sent into this component class factory.
 */
(function (ns){
	ns.components = {};
	
	ns.createComponentClass = function(componentDefinition){
		var	createWrapper = function(self, name){
			return function(value, debug){
				self[name](value, debug);
			};
		},
		component = function(owner, definition){
			var func = null,
			alias    = '',
			name     = '',
			wrapped  = null;
			
			this.owner = owner;
			this.listeners = [];
			this.publicMethods = {};
			this.type = componentDefinition.id;
			
			if(componentDefinition.events){
				for(func in componentDefinition.events){
					wrapped = createWrapper(this, func);
					this.addListener(func, wrapped);
					
					if(definition.aliases){
						for (var alias in definition.aliases){
							if(definition.aliases[alias] === func){
								this.addListener(alias, wrapped);
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
		
		// Have to copy rather than replace so definition is not corrupted
		proto.constructor = componentDefinition.constructor;
		if(componentDefinition.events){
			for(func in componentDefinition.events){
				proto[func] = componentDefinition.events[func];
			}
		}
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

		proto.toString = function(){
			return "[component " + this.type + "]";
		};

		// This function should never be called by the component itself. Call this.owner.removeComponent(this) instead.
		proto.destroy = function(){
			for(func in this.publicMethods){
				this.removeMethod(func);
			}

			this.removeListeners(this.listeners);
			if(this.___destroy){
				this.___destroy();
			}
		};
		
		proto.setProperty = function(property, value){
			this[property] = value;
		};

		proto.addListeners = function(messageIds){
			for(var message in messageIds) this.addListener(messageIds[message]);
		};
	
		proto.removeListeners = function(listeners){
			if(!listeners){
				listeners = this.listeners;
			}
			for(var messageId in listeners) this.removeListener(messageId, listeners[messageId]);
		};
		
		proto.addListener = function(messageId, callback){
			var func = callback || createWrapper(this, messageId);
			this.owner.bind(messageId, func);
			this.listeners[messageId] = func;
		};
		
		proto.addMethod = function(name, func){
			var self = this;
			
			if(this.owner[name]){
				console.warn(owner.type + ': Entity already has a method called "' + name + '". Method not added.');
			} else {
				this.owner[name] = function(){
					return func.apply(self, arguments);
				};
				this.publicMethods[name] = func;
			}
		};
	
		proto.removeListener = function(boundMessageId, callback){
			this.owner.unbind(boundMessageId, callback);
		};
		
		proto.removeMethod = function(name){
			if(!this.owner[name]){
				console.warn(owner.type + ': Entity does not have a method called "' + name + '".');
			} else {
				delete this.owner[name];
			}
			delete this.publicMethods[name];
		};

		ns.components[componentDefinition.id] = component;
	};
})(platformer);

/*--------------------------------------------------
 *   Entity - ../engine/entity.js
 */
/**
# CLASS entity
The Entity object acts as a container for components, facilitates communication between components and other game objects, and includes properties set by components to maintain a current state. The entity object serves as the foundation for most of the game objects in the Platformer engine.

## Messages

### Local Broadcasts:
- **load** - The entity triggers `load` on itself once all the properties and components have been attached, notifying the components that all their peer components are ready for messages.

## Methods
- **[constructor]** - Returns a new Entity object based on the definitions provided.
  - @param definition (object) - Base definition for the entity, includes properties and components as shown below under "JSON definition".
  - @param instanceDefinition (object) - Specific instance definition including properties that override the base definition properties.
  - @return entity - returns the new entity made up of the provided components. 
- **addComponent** - Attaches the provided component to the entity.
  - @param component (object) - Must be an object that functions as a [[Component]].
  - @return component - Returns the same object that was submitted.
- **removeComponent** - Removes the mentioned component from the entity.
  - @param component (object) - Must be a [[Component]] attached to the entity.
  - @return component|false - Returns the same object that was submitted if removal was successful; otherwise returns false (the component was not found attached to the entity).
- **bind** - Used by components to bind handler functions to triggered events on the entity. 
  - @param event (string) - This is the message for which the component is listening.
  - @param func (function) - This is the function that will be run when the message is triggered.
- **toString** - Returns a string describing the entity.
  - @return string - Returns the entity type as a string of the form "[entity entity-type]".
- **trigger** - This method is used by both internal components and external entities to trigger messages on this entity. When triggered, entity checks through bound handlers to run component functions as appropriate.
  - @param event (variant) - This is the message(s) to process. This can be a string, an object containing an "event" property (and optionally a "message" property, overriding the value below), or an array of the same.
  - @param value (variant) - This is a message object or other value to pass along to component functions.
  - @param debug (boolean) - This flags whether to output message contents and subscriber information to the console during game development. A "value" object parameter (above) will also set this flag if value.debug is set to true.
  - @return integer - The number of handlers for the triggered message: this is useful for determining whether the entity cares about a given message.
- **triggerEvent** - This method is used by both internal components and external entities to trigger messages on this entity. When triggered, entity checks through bound handlers to run component functions as appropriate.
  - @param event (string) - This is the message to process.
  - @param value (variant) - This is a message object or other value to pass along to component functions.
  - @param debug (boolean) - This flags whether to output message contents and subscriber information to the console during game development. A "value" object parameter (above) will also set this flag if value.debug is set to true.
  - @return integer - The number of handlers for the triggered message: this is useful for determining whether the entity cares about a given message.
- **unbind** - Used by components to unbind handler functions on the entity, typically called when a component is removed from the entity.
  - @param event (string) - This is the message the component is currently listening to.
  - @param func (function) - This is the function that was attached to the message.
- **getMessageIds** - This method returns all the messages that this entity is concerned about.
  - @return Array - An array of strings listing all the messages for which this entity has handlers.
- **destroy** - This method removes all components from the entity.

## JSON Definition:
    {
      "id": "entity-id",
      // "entity-id" becomes `entity.type` once the entity is created.
      
      "components": [
      // This array lists one or more component definition objects
      
        {"type": "example-component"}
        // The component objects must include a "type" property corresponding to a component to load, but may also include additional properties to customize the component in a particular way for this entity.
      ],
      
      "properties": [
      // This array lists properties that will be attached directly to this entity.
      
        "x": 240
        // For example, `x` becomes `entity.x` on the new entity.
      ],
      
      "filters": {
      // Filters are only used by top level entities loaded by the scene and are not used by the entity directly. They determine whether an entity should be loaded on a particular browser according to browser settings.
      
        "includes": ["touch"],
        // Optional. This filter specifies that this entity should be loaded on browsers/devices that support a touch interface. More than one setting can be added to the array.

        "excludes": ["multitouch"]
        // Optional. This filter specifies that this entity should not be loaded on browsers/devices that do not support a multitouch interface. More than one setting can be added to the array.
      }
    }
*/
platformer.classes.entity = (function(){
	var entity = function (definition, instanceDefinition){
		var self             = this,
		index                = undefined,
		componentDefinition  = undefined,
		def                  = definition || {},
		componentDefinitions = def.components || [],
		defaultProperties    = def.properties || {},
		instance             = instanceDefinition || {},
		instanceProperties   = instance.properties || {};
		
		self.components  = [];
		self.messages    = [];
		self.loopCheck   = [];
		self.unbindLater = [];
		self.type = def.id;

		this.setProperty(defaultProperties); // This takes the list of properties in the JSON definition and appends them directly to the object.
		this.setProperty(instanceProperties); // This takes the list of options for this particular instance and appends them directly to the object.
		this.bind('set-property', function(keyValuePairs){
			self.setProperty(keyValuePairs);
		});
		
		if(!self.state){
			self.state = {}; //starts with no state information. This expands with boolean value properties entered by various logic components.
		}
		self.lastState = {}; //This is used to determine if the state of the entity has changed.
		
		for (index in componentDefinitions){
			componentDefinition = componentDefinitions[index];
			if(platformer.components[componentDefinition.type]){
				self.addComponent(new platformer.components[componentDefinition.type](self, componentDefinition));
			} else {
				console.warn("Component '" + componentDefinition.type + "' is not defined.", componentDefinition);
			}
		}
		
		self.trigger('load');
	};
	var proto = entity.prototype;
	
	proto.toString = function(){
		return "[entity " + this.type + "]";
	};
	
	proto.addComponent = function(component){
	    this.components.push(component);
	    return component;
	};
	
	proto.removeComponent = function(component){
	    for (var index in this.components){
		    if(this.components[index] === component){
		    	this.components.splice(index, 1);
		    	component.destroy();
			    return component;
		    }
	    }
	    return false;
	};
	
	proto.bind = function(event, func){
		if(!this.messages[event]) this.messages[event] = [];
		this.messages[event].push(func);
	};
	
	proto.unbind = function(event, func){
		var found = false, j = 0;
		
		if(this.loopCheck.length){
			for(j = 0; j < this.loopCheck.length; j++){
				if(this.loopCheck[j] === event){
					found = true;
					break;
				}
			}
		}
			
		if(found){ //We're currently busy triggering messages like this, so we shouldn't remove message handlers until we're finished.
			this.unbindLater.push({event: event, func: func});
		} else {
			this.safelyUnbind(event, func);
		}
	};

	proto.safelyUnbind = function(event, func){
		if(!this.messages[event]) this.messages[event] = [];
		for (var x in this.messages[event]){
			if(this.messages[event][x] === func){
				this.messages[event].splice(x,1);
				break;
			}
		}
	};
	
	// This handles multiple event structures: "", [], and {}
	proto.trigger = function(events, message, debug){
		var i = 0, count = 0;
		
		if(typeof events === 'string') {
			return this.triggerEvent(events, message, debug);
		} else if (events.length) {
			for (; i < events.length; i++){
				count += this.trigger(events[i], message, debug);
			}
			return count;
		} else if (events.event) {
			return this.triggerEvent(events.event, events.message || message, debug);
		} else {
			console.warn('Event incorrectly formatted: must be string, array, or object containing an "event" property.');
			return 0;
		}
	};
	
	// This handles string events only
	proto.triggerEvent = function(event, value, debug){
		var i = 0, j = 0;
		
		if(this.debug || debug || (value && value.debug)){
			if(this.messages[event] && this.messages[event].length){
				console.log('Entity "' + this.type + '": Event "' + event + '" has ' + this.messages[event].length + ' subscriber' + ((this.messages[event].length>1)?'s':'') + '.', value);
			} else {
				console.warn('Entity "' + this.type + '": Event "' + event + '" has no subscribers.', value);
			}
		}
		for (i = 0; i < this.loopCheck.length; i++){
			if(this.loopCheck[i] === event){
				throw "Endless loop detected for '" + event + "'.";
			}
		}
		i = 0;
		this.loopCheck.push(event);
		if(this.messages[event]){
			for (i = 0; i < this.messages[event].length; i++){
				this.messages[event][i](value, debug);
			}
		}
		this.loopCheck.length = this.loopCheck.length - 1;
		
		if(!this.loopCheck.length && this.unbindLater.length){
			for(j = 0; j < this.unbindLater.length; j++){
				this.safelyUnbind(this.unbindLater[j].event, this.unbindLater[j].func);
			}
			this.unbindLater.length = 0;
		}
		
		return i;
	};
	
	proto.setProperty = function(keyValuePairs){
		var index = '';
		
		for (index in keyValuePairs){ // This takes a list of properties and appends them directly to the object.
			this[index] = keyValuePairs[index];
		}
	};
	
	proto.getMessageIds = function(){
		var events = [];
		for (var event in this.messages){
			events.push(event);
		}
		return events;
	};
	
	proto.destroy = function(){
		for (var x in this.components) {
			this.components[x].destroy();
		}
		this.components.length = 0;
	};
	
	return entity;
})();

/*--------------------------------------------------
 *   Scene - ../engine/scene.js
 */
/**
# CLASS scene
This class is instantiated by [[Game]] and contains one or more entities as layers. Each layer [[Entity]] handles a unique aspect of the scene. For example, one layer might contain the game world, while another layer contains the game interface. Generally there is only a single scene loaded at any given moment.

## Messages

### Child Broadcasts:
- **[Messages specified in definition]** - Listens for messages and on receiving them, re-triggers them on each entity layer.
  - @param message (object) - sends the message object received by the original message.

## Methods
- **[constructor]** - Creates an object from the scene class and passes in a scene definition containing a list of layers to load and a DOM element where the scene will take place.
  - @param definition (object) - Base definition for the scene, including one or more layers with both properties, filters, and components as shown below under "JSON definition".
  - @param rootElement (DOM element) - DOM element where scene displays layers.
  - @return scene - returns the new scene composed of the provided layers.
- **trigger** - This method is used by external objects to trigger messages on the layers as well as internal entities broadcasting messages across the scope of the scene.
  - @param messageId (string) - This is the message to process.
  - @param value (variant) - This is a message object or other value to pass along to component functions.
- **destroy** - This method destroys all the layers in the scene.

## JSON Definition:
    {
      "layers":[
      // Required array listing the entities that should be loaded as scene layers. These can be actual entity JSON definitions as shown in [[Entity]] or references to entities by using the following specification.

        {
          "type": "entity-id",
          // This value maps to an entity definition with a matching "id" value as shown in [[Entity]] and will load that definition.
          
          "properties":{"x": 400}
          // Optional. If properties are passed in this reference, they override the entity definition's properties of the same name.
        }
      ]
    }
*/
platformer.classes.scene = (function(){
	var scene = function(definition, rootElement){
		var layers = definition.layers,
		supportedLayer = true,
		layerDefinition = false,
		properties = false,
		messages = null;
		
		this.storedMessages = [];
		
		this.rootElement = rootElement;
		this.layers = [];
		for(var layer in layers){
			layerDefinition = layers[layer];
			properties = {rootElement: this.rootElement, parent: this};
			if (layerDefinition.properties){
				for(i in layerDefinition.properties){
					properties[i] = layerDefinition.properties[i];
				}
			}

			if(layerDefinition.type){ // this layer should be loaded from an entity definition rather than this instance
				layerDefinition = platformer.game.settings.entities[layerDefinition.type];
			}
			
			supportedLayer = true;
			if(layerDefinition.filter){
				if(layerDefinition.filter.includes){
					supportedLayer = false;
					for(var filter in layerDefinition.filter.includes){
						if(platformer.game.settings.supports[layerDefinition.filter.includes[filter]]){
							supportedLayer = true;
						}
					}
				}
				if(layerDefinition.filter.excludes){
					for(var filter in layerDefinition.filter.excludes){
						if(platformer.game.settings.supports[layerDefinition.filter.excludes[filter]]){
							supportedLayer = false;
						}
					}
				}
			}
			if (supportedLayer){
				this.layers.push(new platformer.classes.entity(layerDefinition, {
					properties: properties
				}));
			}
		}
		// This allows the layer to gather messages that are triggered as it is loading and deliver them to all the layers once all the layers are in place.
		messages = this.storedMessages;
		this.storedMessages = false;
		for(var i = 0; i < messages.length; i++){
			this.trigger(messages[i].message, messages[i].value);
		}
		messages.length = 0;
		
		this.time = new Date().getTime();
		this.timeElapsed = {
			name: '',
			time: 0
		};
	};
	var proto = scene.prototype;
	
	proto.trigger = function(eventId, event){
		var time = 0;
		
		if(this.storedMessages){
			this.storedMessages.push({
				message: eventId,
				value: event
			});
		} else {
			if(eventId === 'tick'){
				time = new Date().getTime();
				this.timeElapsed.name = 'Non-Engine';
				this.timeElapsed.time = time - this.time;
				this.trigger('time-elapsed', this.timeElapsed);
				this.time = time;
			}
			for(var layer in this.layers){
				this.layers[layer].trigger(eventId, event);
			}
			if(eventId === 'tick'){
				time = new Date().getTime();
				this.timeElapsed.name = 'Engine Total';
				this.timeElapsed.time = time - this.time;
				this.trigger('time-elapsed', this.timeElapsed);
				this.time = time;
			}
		}
	};
	
	proto.destroy = function(){
		for(var layer in this.layers){
			this.layers[layer].destroy();
		}
		this.layers.length = 0;
	};
	
	return scene;
})();


/*--------------------------------------------------
 *   Collision-Shape - ../engine/collision-shape.js
 */
/**
# CLASS collision-shape
This class defines a collision shape, which defines the 'space' an entity occupies in the collision system. Currently only rectangle shapes can be created (some code exists for right-triangles and circles, but the precise collision checking needed for these is not in place). Collision shapes include an axis-aligned bounding box (AABB) that tightly wraps the shape. The AABB is used for initial collision checks.

## Fields
- **offset** (number []) - An array of length 2 that holds the x and y offset of the collision shape from the owner entity's location.
- **x** (number) - The x position of the shape. The x is always located in the center of the object.
- **y** (number) - The y position of the shape. The y is always located in the center of the object.
- **prevX** (number) - The previous x position of the shape.
- **prevY** (number) - The previous y position of the shape.
- **type** (string) - The type of shape this is. Currently 'rectangle' is the default and only valid type.
- **subType** (string) - **Not Used** Only used for triangles, specifies which corner the right angle is in. Can be: tl, tr, bl, br.
- **points** (number [][]) - Points describing the shape. These points should describe the shape so that the center of the AABB will be at (0,0). For rectangles and circles you only need two points, a top-left and bottom-right. For triangles, you need three. The first should be the right angle, and it should proceed clockwise from there.
- **aABB** (object) - The AABB for this shape.
- **prevAABB** (object) - The previous location of the AABB for this shape.

## Methods
- **constructor** - Creates an object from the collisionShape class.
  - @param ownerLocation (number []) - An array [x,y] of the position.
  - @param type (string) - The type of shape this is. Currently 'rectangle' is the default and only valid type.
  - @param points (number [][]) - Points describing the shape. These points should describe the shape so that the center of the AABB will be at (0,0). For rectangles and circles you only need two points, a top-left and bottom-right. For triangles, you need three. The first should be the right angle, and it should proceed clockwise from there.
  - @param offset (number []) - An array of length 2 that holds the x and y offset of the shape from the owner's location.
- **update** - Updates the location of the shape and AABB. The position you send should be that of the owner, the offset of the shape is added inside the function.
  - @param ownerX (number) - The x position of the owner.
  - @param ownerY (number) - The y position of the owner.
- **reset** - Resets the location of the shape and AABBs so that the current and previous position are the same. The position you send should be that of the owner, the offset of the shape is added inside the function.
  - @param ownerX (number) - The x position of the owner.
  - @param ownerY (number) - The y position of the owner.
- **getXY** - Returns an array containing the position of the shape.
  - @return number [] - An array [x,y] of the position.
- **getX** - Returns the x position of the shape.
  - @return number - The x position.
- **getY** - Return the y position of the shape.
  - @return number - The y position.
- **getPrevXY** - Returns the previous position of the shape.
  - @return number [] - An array [x,y] of the previous position.
- **getPrevX** - Returns the previous x position of the shape.
  - @return number - The previous x position.
- **getPrevY** - Returns the previous y position of the shape.
  - @return number - The previous x position.
- **getAABB** - Returns the AABB of the shape.
  - @return AABB object - The AABB of the shape.
- **getPreviousAABB** - Returns the previous AABB of the shape.
  - @return AABB object - The previous AABB of the shape.
- **getXOffset** - Returns the x offset of the shape.
  - @return number - The x offset.
- **getYOffset** - Returns the y offset of the shape.
  - @return number - The y offset.
- **destroy** - Destroys the shape so that it can be memory collected safely.
*/

platformer.classes.collisionShape = (function(){
	var collisionShape = function(owner, definition, collisionType){
		var regX = definition.regX,
		regY     = definition.regY;
		
		this.owner = owner;
		this.collisionType = collisionType;
		
		this.width  = definition.width  || definition.radius || 0;
		this.height = definition.height || definition.radius || 0;
		this.radius = definition.radius || 0;
		
		if(typeof regX !== 'number'){
			regX = this.width / 2;
		}
		if(typeof regY !== 'number'){
			regY = this.height / 2;
		}
		this.offsetX = definition.offsetX || ((this.width  / 2) - regX);
		this.offsetY = definition.offsetY || ((this.height / 2) - regY);
		
		if(owner){
			this.x = owner.x + this.offsetX;
			this.y = owner.y + this.offsetY;
		} else {
			this.x = definition.x + this.offsetX;
			this.y = definition.y + this.offsetY;
		}

		this.type = definition.type || 'rectangle';
		this.subType = '';
		this.points = definition.points; //Points should distributed so that the center of the AABB is at (0,0).
		this.aABB = undefined;
		
		var width = 0;
		var height = 0; 
		switch (this.type)
		{
		case 'circle': //need TL and BR points
			width = height = this.radius * 2;
			break;
		case 'rectangle': //need TL and BR points
			width = this.width;
			height = this.height;
			break;
		case 'triangle': //Need three points, start with the right angle corner and go clockwise.
			if (this.points[0][1] == this.points[1][1] && this.points[0][0] == this.points[2][0])
			{
				if (this.points[0][0] < this.points[1][0])
				{
					//TOP LEFT CORNER IS RIGHT
					this.subType = 'tl';
					width = this.points[1][0] - this.points[0][0];
					height = this.points[2][1] - this.points[0][1];
				} else {
					//BOTTOM RIGHT CORNER IS RIGHT
					this.subType = 'br';
					width = this.points[0][0] - this.points[1][0];
					height = this.points[0][1] - this.points[2][1];
				}
				
			} else if (this.points[0][1] == this.points[2][1] && this.points[0][0] == this.points[1][0]) {
				if (this.points[0][1] < this.points[1][1])
				{
					//TOP RIGHT CORNER IS RIGHT
					this.subType = 'tr';
					width = this.points[0][0] - this.points[2][0];
					height = this.points[1][1] - this.points[0][1];
				} else {
					//BOTTOM LEFT CORNER IS RIGHT
					this.subType = 'bl';
					width = this.points[2][0] - this.points[0][0];
					height = this.points[0][1] - this.points[1][1];
				}
			} 
		}
		
		this.aABB     = new platformer.classes.aABB(this.x, this.y, width, height);
	};
	var proto = collisionShape.prototype;
	
	proto.update = function(ownerX, ownerY){
		this.x = ownerX + this.offsetX;
		this.y = ownerY + this.offsetY;
		this.aABB.move(this.x, this.y);
	};
	
	proto.moveX = function(x){
		this.x = x;
		this.aABB.moveX(this.x);
	};
	
	proto.moveY = function(y){
		this.y = y;
		this.aABB.moveY(this.y);
	};
	
	proto.moveXBy = function(deltaX){
		this.x += deltaX;
		this.aABB.moveX(this.x);
	};
	
	proto.moveYBy = function(deltaY){
		this.y += deltaY;
		this.aABB.moveY(this.y);
	};
	
	proto.getXY = function () {
		return [this.x, this.y];
	};
	
	proto.getX = function () {
		return this.x;
	};
	
	proto.getY = function () {
		return this.y;
	};
	
	proto.getAABB = function(){
		return this.aABB;
	};

	proto.getXOffset = function(){
		return this.offsetX;
	};
	
	proto.getYOffset = function(){
		return this.offsetY;
	};
	
	proto.setXWithEntityX = function(entityX){
		this.x = entityX + this.offsetX;
		this.aABB.moveX(this.x);
	};
	
	proto.setYWithEntityY = function(entityY){
		this.y = entityY + this.offsetY;
		this.aABB.moveY(this.y);
	};
	
	proto.destroy = function(){
		this.aABB = undefined;
		this.points = undefined;
	};
	
	return collisionShape;
})();

/*--------------------------------------------------
 *   Collision-Data-Container - ../engine/collision-data-container.js
 */

platformer.classes.collisionData = (function(){
	var collisionData = function (occurred, direction, position, deltaMovement, aABB, thisShape, thatShape, vector){
		this.occurred = occurred || false;
		this.direction = direction || null;
		this.position = position || null;
		this.deltaMovement = deltaMovement || null;
		this.aABB = aABB || null;
		this.thisShape = thisShape || null;
		this.thatShape = thatShape || null;
		this.vector = vector || null;
	};
	var proto = collisionData.prototype;
	
	proto.copy = function (dataToCopy){
		this.occurred 		= dataToCopy.occurred;
		this.direction 		= dataToCopy.direction;
		this.position 		= dataToCopy.position;
		this.deltaMovement 	= dataToCopy.deltaMovement;
		this.aABB 			= dataToCopy.aABB;
		this.thisShape      = dataToCopy.thisShape;
		this.thatShape      = dataToCopy.thatShape;
		this.vector         = dataToCopy.vector;
	};
	proto.clear = function (){
		this.occurred 		   = false;
		this.direction 		   = null;
		this.position 		   = null;
		this.deltaMovement 	   = null;
		this.aABB 			   = null;
		this.thisShape  	   = null;
		this.thatShape  	   = null;
		this.vector            = null;
	};
	return collisionData;
})();

platformer.classes.collisionDataContainer = (function(){
	var collisionDataContainer = function(){
		this.xData = [new platformer.classes.collisionData(), new platformer.classes.collisionData()];
		this.yData = [new platformer.classes.collisionData(), new platformer.classes.collisionData()];
		this.xCount = 0;
		this.yCount = 0;
		this.xDeltaMovement = Infinity;
		this.yDeltaMovement = Infinity;
	};
	var proto = collisionDataContainer.prototype;
	
	proto.getXEntry = function (index) {
		return this.xData[index];
	};
	
	proto.getYEntry = function (index) {
		return this.yData[index];
	};
	
	proto.tryToAddX = function (dataToCopy) {
		if (dataToCopy.deltaMovement < this.xDeltaMovement)
		{
			this.xDeltaMovement = dataToCopy.deltaMovement;
			this.xData[0].copy(dataToCopy);
			this.xCount = 1;
			return true;
		} else if (dataToCopy.deltaMovement == this.xDeltaMovement) {
			this.ensureRoomX();
			this.xData[this.xCount].copy(dataToCopy);
			this.xCount++;
			return true;
		}
		return false;
	};
	
	proto.tryToAddY = function (dataToCopy) {
		if (dataToCopy.deltaMovement < this.yDeltaMovement)
		{
			this.yDeltaMovement = dataToCopy.deltaMovement;
			this.yData[0].copy(dataToCopy);
			this.yCount = 1;
			return true;
		} else if (dataToCopy.deltaMovement == this.yDeltaMovement) {
			this.ensureRoomY();
			this.yData[this.yCount].copy(dataToCopy);
			this.yCount++;
			return true;
		}
		return false;
	};
	
	proto.ensureRoomX = function() {
		var goalLength = this.xData.length * 2;
		if (this.xData.length <= this.xCount)
		{
			for (var j = this.xData.length; j < goalLength; j++)
			{
				this.xData[j] = new platformer.classes.collisionData();
			}
		}
	};
	
	proto.ensureRoomY = function() {
		var goalLength = this.yData.length * 2;
		if (this.yData.length <= this.yCount)
		{
			for (var j = this.yData.length; j < goalLength; j++)
			{
				this.yData[j] = new platformer.classes.collisionData();
			}
		}
	};
	
	proto.reset = function() {
		this.xCount = 0;
		this.yCount = 0;
		this.xDeltaMovement = Infinity;
		this.yDeltaMovement = Infinity;
	};
	
	return collisionDataContainer;
})();

/*--------------------------------------------------
 *   AABB - ../engine/aabb.js
 */
/**
# CLASS aabb
This class defines an axis-aligned bounding box (AABB) which is used during the collision process to determine if two objects are colliding. This is used in a few places including [[Collision-Basic]] and [[Collision-Shape]].

## Fields
- **x** (number) - The x position of the AABB. The x is always located in the center of the object.
- **y** (number) - The y position of the AABB. The y is always located in the center of the object.
- **width** (number) - The width of the AABB.
- **height** (number) - The height of the AABB.
- **halfWidth** (number) - Half the width of the AABB.
- **halfHeight** (number) - Half the height of the AABB.
- **left** (number) - The x-position of the left edge of the AABB.
- **right** (number) - The x-position of the right edge of the AABB.
- **top** (number) - The y-position of the top edge of the AABB.
- **bottom** (number) - The y-position of the bottom edge of the AABB.


## Methods
- **constructor** - Creates an object from the aabb class.
  - @param x (number) - The x position of the AABB. The x is always located in the center of the object.
  - @param y (number) - The y position of the AABB. The y is always located in the center of the object.
  - @param width (number) - The width of the AABB.
  - @param height (number) - The height of the AABB.
  - @return aabb (object) - Returns the new aabb object.
- **setAll** - Sets all of the fields in the AABB.
  - @param x (number) - The x position of the AABB. The x is always located in the center of the object.
  - @param y (number) - The y position of the AABB. The y is always located in the center of the object.
  - @param width (number) - The width of the AABB.
  - @param height (number) - The height of the AABB.
- **reset** - Resets all the values in the AABB so that the AABB can be reused.
- **include** - Changes the size and position of the bounding box so that it contains the current area and the area described in the incoming AABB.
  - @param aabb (object) - The AABB who's area will be included in the area of the current AABB.
- **move** - Moves the AABB to the specified location.
  - @param x (number) - The new x position of the AABB.
  - @param y (number) - The new y position of the AABB.
- **getCopy** - Creates a new AABB with the same fields as this object.
  - @return aabb (object) - Returns the new AABB object.
*/

platformer.classes.aABB = (function(){
	var aABB = function(x, y, width, height){
		this.empty = true;
		this.setAll(x, y, width, height);
	};
	var proto = aABB.prototype;
	
	proto.setAll = function(x, y, width, height){
		this.empty = false;
		this.x = x;
		this.y = y;
		this.width  = width || 0;
		this.height = height || 0;
		this.halfWidth = this.width / 2;
		this.halfHeight = this.height / 2;
		if(typeof x === 'undefined'){
			this.empty = true;
		} else {
			this.left = -this.halfWidth + this.x;
			this.right = this.halfWidth + this.x;
		}
		if(typeof y === 'undefined'){
			this.empty = true;
		} else {
			this.top = -this.halfHeight + this.y;
			this.bottom = this.halfHeight + this.y;
		}
		return this;
	};
	
	proto.set = function(aabb){
		this.empty = aabb.empty;
		this.x = aabb.x;
		this.y = aabb.y;
		this.width  = aabb.width;
		this.height = aabb.height;
		this.halfWidth = aabb.halfWidth;
		this.halfHeight = aabb.halfHeight;
		this.left = aabb.left;
		this.right = aabb.right;
		this.top = aabb.top;
		this.bottom = aabb.bottom;
		return this;
	};
	
	proto.reset = function(){
		this.empty = true;
		return this;
	};
	
	proto.include = function(aabb){
		if(aabb){
			if(this.empty){
				this.set(aabb);
			} else {
				if(this.left > aabb.left){
					this.left = aabb.left;
				}
				if(this.right < aabb.right){
					this.right = aabb.right;
				}
				if(this.top > aabb.top){
					this.top = aabb.top;
				}
				if(this.bottom < aabb.bottom){
					this.bottom = aabb.bottom;
				}
				
				this.width      = this.right  - this.left;
				this.height     = this.bottom - this.top;
				this.halfWidth  = this.width / 2;
				this.halfHeight = this.height / 2;
				this.x          = this.left + this.halfWidth;
				this.y          = this.top  + this.halfHeight;
			}
		}
	};
	
	proto.move = function(x, y){
		this.moveX(x);
		this.moveY(y);
		return this;
	};

	proto.moveX = function(x){
		this.x = x;
		this.left   = -this.halfWidth + this.x;
		this.right  = this.halfWidth + this.x;
		return this;
	};

	proto.moveY = function(y){
		this.y = y;
		this.top    = -this.halfHeight + this.y;
		this.bottom = this.halfHeight + this.y;
		return this;
	};
	
	proto.moveXBy = function(deltaX){
		this.x += deltaX;
		this.left   = -this.halfWidth + this.x;
		this.right  = this.halfWidth + this.x;
		return this;
	};

	proto.moveYBy = function(deltaY){
		this.y += deltaY;
		this.top    = -this.halfHeight + this.y;
		this.bottom = this.halfHeight + this.y;
		return this;
	};

	proto.getCopy = function(){
		return new aABB(this.x, this.y, this.width, this.height);
	};

	proto.matches = function(x, y, width, height){
		return !((this.x !== x) || (this.y !== y) || (this.width !== width) || (this.height !== height));
	};

	proto.contains = function(aabb){
		return !((aabb.top < this.top) || (aabb.bottom > this.bottom) || (aabb.left < this.left) || (aabb.right > this.right));
	};
	
	proto.intersects = function(aabb){
		return !((aabb.bottom < this.top) || (aabb.top > this.bottom) || (aabb.right < this.left) || (aabb.left > this.right));
	};
	
	return aABB;
})();

/*--------------------------------------------------
 *   Vector2D - ../engine/vector2D.js
 */
/**
# CLASS vector2D
This class defines a two-dimensional vector object and a variety of methods for manipulating the vector.

## Properties
- **x** - The x component of the vector.
- **y** - The y component of the vector.

## Methods
- **constructor** - Creates an object from the vector2D class.
  - @param x (number) - The x component of the vector.
  - @param y (number) - The y component of the vector.
- **set** - Sets the x and y component of the vector.
  - @param x (number) - The x component.
  - @param y (number) - The y component.
- **copyValues** - Sets the x and y component of the vector to values of the parameter vector.
  - @param x (number) - The x component.
  - @param y (number) - The y component.
  - @return vector2D - This.
- **setX** - Sets the x component of the vector.
  - @param x (number) - The x component.
  - @return vector2D - This.
- **setY** - Sets the y component of the vector.
  - @param y (number) - The y component.
  - @return vector2D - This.
- **magnitude** - Returns the magnitude of the vector.
  - @return number - The magnitude of the vector.
- **direction** - Returns the direction of the vector.
  - @return number - The direction of the vector.
- **getUnit** - Returns a normalized copy of the vector.
  - @return vector2D - A normalized vector in the same direction as this vector.
- **normalize** - Normalizes the vector.
  - @return vector2D - This.
- **rotate** - Rotates the vector by the given amount.
  - @param angle (number) - The amount to rotate the vector in radians.
  - @return vector2D - This.
- **add** - Adds the given components to this vector.
  - @param x (number) - The x component to add.
  - @param y (number) - The y component to add.
  - @return vector2D - This.
- **addVector** - Adds the given vector to this vector.
  - @param otherVector (vector2D) - The vector to add.
  - @return vector2D - This.
- **subtractVector** - Subtracts the given vector from this vector.
  - @param otherVector (vector2D) - The vector to subtract.  
  - @return vector2D - This.
- **scaleVector** - Scales the vector by the given factor.
  - @param factor (number) - The factor to scale by. 
  - @return vector2D - This.
- **dot** - Finds the dot product of the two vectors.
  - @param otherVector (vector2D) - The other vector. 
  - @return number - The dot product.
- **shortestAngleTo** - Finds the shortest angle between the two vectors .
  - @param otherVector (vector2D) - The other vector. 
  > return number - The angle between this vector and the received vector.     
- **scalarProjection** - Find the scalar value of projecting this vector onto the parameter vector or onto a vector at the specified angle away.
  - @param vectorOrAngle (vector2D or number) - The other vector or the angle between the vectors. 
  > return number - The magnitude of the projection. 
- **copy** - Returns a copy of this vector.
  - @return vector2D - A copy of this vector.
*/

platformer.classes.vector2D = (function(){
	var vector2D = function(x, y){
		this.x = x || 0;
		this.y = y || 0;
	};
	var proto = vector2D.prototype;
	
	proto.set = function(x, y){
		this.x = x;
		this.y = y;
		return this;
	};
	
	proto.copyValues = function(otherVector){
		this.x = otherVector.x;
		this.y = otherVector.y;
		return this;
	};
	
	proto.setX = function(x){
		this.x = x;
		return this;
	};
	
	proto.setY = function(y){
		this.y = y;
		return this;
	};
	
	proto.getX = function(){
		return this.x;
	};
	
	proto.getY = function(){
		return this.y;
	};
	
	proto.magnitude = function(){
		return Math.sqrt( Math.pow(this.x, 2) + Math.pow(this.y, 2));
	};
	
	proto.direction = function(){
		var mag = this.magnitude();
        var angle = 0;

        if (mag != 0){
                angle = Math.acos(this.x / mag);
                if (this.y < 0){
                        angle = (Math.PI * 2) - angle;
                }
        }
        return angle; 
	};
	
	proto.getUnit = function(){
		var mag = this.magnitude();
		if (mag == 0) {
			return new platformer.classes.vector2D(0, 0);
		} else {
			return new platformer.classes.vector2D(this.x / mag, this.y / mag);
		}
	};
	
	proto.getInverse = function(){
		return new platformer.classes.vector2D(-this.x, -this.y);
	};
	
	proto.normalize = function(){
		var mag = this.magnitude();
		if (mag != 0)
		{
			this.x /= mag;
			this.y /= mag;
		}
		return this;
	};
	
	proto.rotate = function(angle){
		var x = this.x;
		var y = this.y;
		this.x = x * Math.cos(angle) - y * Math.sin(angle);
		this.y = x * Math.sin(angle) + y * Math.cos(angle);
		return this;
	};
	
	proto.add = function (x, y){
		this.x += x;
		this.y += y;
		return this;
	};
	
	proto.addVector = function(otherVector){
		this.x += otherVector.x;
		this.y += otherVector.y;
		return this;
	};
	
	proto.subtractVector = function(otherVector){
		this.x -= otherVector.x;
		this.y -= otherVector.y;
		return this;
	};
	
	proto.scale = function(factor) {
		this.x *= factor;
		this.y *= factor;
		return this;
	};
	
	proto.dot = function(otherVector) {
		return this.x * otherVector.x + this.y * otherVector.y;
	};
	
	proto.shortestAngleTo = function(otherVector) {
		return Math.acos(this.dot(otherVector) / (this.magnitude() * otherVector.magnitude()));
	};
	
	proto.scalarProjection = function(vectorOrAngle) {
		var angle = 0;
		var vector = null;
		if (typeof vectorOrAngle == "number")
		{
			angle = vectorOrAngle;
		} else {
			vector = vectorOrAngle;
			angle = this.shortestAngleTo(vector);
		}
		return this.magnitude() * Math.cos(angle);
	};
	
	proto.copy = function() {
		return new vector2D(this.x, this.y);
	};
	
	return vector2D;
})();
platformer.components = {};

/*--------------------------------------------------
 *   asset-loader - ../engine/components/asset-loader.js
 */
/**
# COMPONENT **asset-loader**
This component loads a list of assets, wrapping PreloadJS functionality into a game engine component. Settings and files are pulled from the information provided in config.js, with the expectation that this component will exist on the initial loading screen.

## Dependencies
- [createjs.PreloadJS][link1] - Requires the PreloadJS library to load a list of assets.

## Messages

### Listens for:
- **load** - On receiving this event, the asset loader begins downloading the list of assets.
- **fileload** - This message used to update a progress bar if one has been defined by JSON.
  - @param fraction (Number) - Value of (progress / total) is used to set the width of the progress bar element.

### Local Broadcasts:
- **fileload** - This message is broadcast when an asset has been loaded.
  - @param complete (Boolean) - Whether this is the final asset to be loaded.
  - @param total (Number) - The total number of assets being loaded.
  - @param progress (Number) - The number of assets finished loading.
  - @param fraction (Number) - Value of (progress / total) provided for convenience.
- **complete** - This message is triggered when the asset loader is finished loading assets.

## JSON Definition
    {
      "type": "asset-loader",
      
      "assets": [
      // Optional. A list of assets to load; typically the asset list is pulled directly from the config.json file.
        {"id": "item-1",         "src": "images/item-1.png"},
        {"id": "item-2",         "src": "images/item-2.png"},
        {"id": "item-3",         "src": "images/item-3.png"}
      ]
      
      "progressBar": "progress-bar",
      // Optional. A DOM element id for a DIV that should be updated as assets are loaded.
      
      "useXHR": true
      // Whether to use XHR for asset downloading. The default is `true`.
    }

[link1]: http://www.createjs.com/Docs/PreloadJS/modules/PreloadJS.html

*/
(function(){
	return platformer.createComponentClass({
		id: 'asset-loader',
		
		constructor: function(definition){
			this.useXHR = true;
			
			if(definition.useXHR === false){
				this.useXHR = false;
			}
			
			this.assets = definition.assets || platformer.game.settings.assets;
			
			this.progressBar = definition.progressBar || false;
			
			this.message = {
				complete: false,
				total: 0,
				progress: 0,
				fraction: 0
			};
		},

		events: {// These are messages that this component listens for
		    "load": function(){
		    	var self = this,
		    	checkPush = function(asset, list){
		    		var i = 0,
		    		found = false;
		    		for(i in list){
		    			if(list[i].id === asset.id){
		    				found = true;
		    				break;
		    			}
		    		}
		    		if(!found){
		    			list.push(asset);
		    		}
		    	},
		    	loader     = new createjs.LoadQueue(this.useXHR),
		    	loadAssets = [],
		    	optimizeImages = platformer.game.settings.global.nativeAssetResolution || 0, //assets designed for this resolution
		    	scale = platformer.game.settings.scale = optimizeImages?Math.min(1, Math.max(window.screen.width, window.screen.height) * (window.devicePixelRatio || 1) / optimizeImages):1,
//		    	scale = platformer.game.settings.scale = optimizeImages?Math.min(1, Math.max(window.innerWidth, window.innerHeight) * window.devicePixelRatio / optimizeImages):1,
		    	scaleImage = function(img, columns, rows){
		    		var r          = rows    || 1,
		    		c              = columns || 1,
		    		imgWidth       = Math.ceil((img.width  / c) * scale) * c,
		    		imgHeight      = Math.ceil((img.height / r) * scale) * r,
		    		element        = document.createElement('canvas'),
		    		ctx            = element.getContext('2d');
		    		element.width  = imgWidth;
		    		element.height = imgHeight;
		    		element.scaleX = imgWidth  / img.width;
		    		element.scaleY = imgHeight / img.height;
		    		ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, imgWidth, imgHeight);
		    		return element;
		    	};
		    	
		    	loader.addEventListener('fileload', function (event) {
		    		var item = event.item,
		    		data     = item.data,
		    		result   = item.tag;
		    		
		    		if(event.item.type == "image"){
		    			if(optimizeImages && (scale !== 1)){
		    				if(data){
		    					result = scaleImage(result, data.columns, data.rows);
		    				} else {
		    					result = scaleImage(result);
		    				}
		    			}
		    		}
		    		
		    		platformer.assets[event.item.id] = result;
		    		
		    		self.message.progress += 1;
		    		self.message.fraction = self.message.progress/self.message.total;
		    		if(self.message.progress === self.message.total){
		    			self.message.complete = true;
		    		}
	    			self.owner.trigger('fileload', self.message);
		    	});
		    	
		    	loader.addEventListener('complete', function (event) {
	    			self.owner.trigger('complete');
		    	});
		    	
		    	for(var i in this.assets){
		    		if(typeof this.assets[i].src === 'string'){
		    			checkPush(this.assets[i], loadAssets);
		    		} else {
		    			for(var j in this.assets[i].src){
		    				if(platformer.game.settings.aspects[j] && this.assets[i].src[j]){
		    					if(typeof this.assets[i].src[j] === 'string'){
		    						this.assets[i].src  = this.assets[i].src[j];
		    						checkPush(this.assets[i], loadAssets);
		    					} else {
		    						this.assets[i].data    = this.assets[i].src[j].data || this.assets[i].data;
		    						this.assets[i].assetId = this.assets[i].src[j].assetId;
		    						this.assets[i].src     = this.assets[i].src[j].src;
		    						checkPush({
		    							id:  this.assets[i].assetId || this.assets[i].id,
		    							src: this.assets[i].src
		    						}, loadAssets);
		    					}
		    					break;
		    				}
		    			}
		    			if(typeof this.assets[i].src !== 'string'){
		    				if(this.assets[i].src['default']){
		    					if(typeof this.assets[i].src['default'] === 'string'){
		    						this.assets[i].src  = this.assets[i].src['default'];
		    						checkPush(this.assets[i], loadAssets);
		    					} else {
		    						this.assets[i].data    = this.assets[i].src['default'].data || this.assets[i].data;
		    						this.assets[i].assetId = this.assets[i].src['default'].assetId;
		    						this.assets[i].src     = this.assets[i].src['default'].src;
		    						checkPush({
		    							id:  this.assets[i].assetId || this.assets[i].id,
		    							src: this.assets[i].src
		    						}, loadAssets);
		    					}
		    				} else {
		    					console.warn('Asset has no valid source for this browser.', this.assets[i]);
		    				}
		    			}
		    		}
		    	}

		    	// Allow iOS 5- to play HTML5 audio using SoundJS by overriding the isSupported check. (Otherwise there is no audio support for iOS 5-.)
		    	createjs.HTMLAudioPlugin.isSupported = function () {
		    		createjs.HTMLAudioPlugin.generateCapabilities();
		    		var t = createjs.HTMLAudioPlugin.tag;
		    		if (t == null || createjs.HTMLAudioPlugin.capabilities == null) {
		    			return false;
		    		}
		    		return true;
		    	};
//		    	createjs.Sound.initializeDefaultPlugins();
		    	createjs.Sound.registerPlugins([createjs.HTMLAudioPlugin]);

		    	self.message.total = loadAssets.length;
		    	loader.installPlugin(createjs.Sound);
		    	loader.loadManifest(loadAssets);
		    	platformer.assets = [];
		    },
		
		    "fileload": function(resp) {
		    	var pb = null;
		    	
		    	if(this.progressBar){
		    		pb = document.getElementById(this.progressBar);
		    		if(pb){
		    			pb = pb.style;
		    			
		    			pb.width = (resp.fraction * 100) + '%';
		    			pb.backgroundSize = ((1 / resp.fraction) * 100) + '%';
		    		}
		    	}
		    }
		}
		
	});
})();


/*--------------------------------------------------
 *   enable-ios-audio - ../engine/components/enable-ios-audio.js
 */
/**
# COMPONENT **enable-ios-audio**
This component enables JavaScript-triggered audio play-back on iOS devices by overlaying an invisible `div` across the game area that, when touched, causes the audio track to play, giving it necessary permissions for further programmatic play-back. Once touched, it removes itself as a component from the entity as well as removes the layer `div` DOM element.

## Dependencies:
- [createjs.SoundJS] [link1] - This component requires the SoundJS library to be included for audio functionality.
- **rootElement** property (on entity) - This component requires a DOM element which it uses to overlay the touchable audio-instantiation layer `div`.

## JSON Definition:
    {
      "type": "enable-ios-audio",
      
      "audioId": "combined"
      // Required. The SoundJS audio id for the audio clip to be enabled for future play-back.
    }

[link1]: http://www.createjs.com/Docs/SoundJS/module_SoundJS.html
*/
platformer.components['enable-ios-audio'] = (function(){
	var iOSAudioEnabled = false,
//	console = {log:function(txt){document.title += txt;}},
	component = function(owner, definition){
		var self = this;
		this.owner = owner;
		
		if(!iOSAudioEnabled){
			this.touchOverlay = document.createElement('div');
			this.touchOverlay.style.width    = '100%';
			this.touchOverlay.style.height   = '100%';
			this.touchOverlay.style.position = 'absolute';
			this.touchOverlay.style.zIndex   = '20';
			this.owner.rootElement.appendChild(this.touchOverlay);
			enableIOSAudio(this.touchOverlay, definition.audioId, function(){
				self.removeComponent();
			});
		} else {
			this.removeComponent();
		}
	},
	enableIOSAudio  = function(element, audioId, functionCallback){
		var callback = false,
	    click        = false;
		
//		document.title = '';
		iOSAudioEnabled = true;
		click = function(e){
			var audio = createjs.Sound.play(audioId),
			forceStop = function () {
			    audio.removeEventListener('succeeded', forceStop);
			    audio.pause();
//			    console.log('g');
			},
			progress  = function () {
			    audio.removeEventListener('ready', progress);
//			    console.log('h');
			    if (callback) callback();
			};
//		    console.log('a');
			
			if(audio.playState !== 'playFailed'){
//			    console.log('b(' + audio.playState + ')');
				audio.stop();
			} else {
//			    console.log('c(' + audio.playState + ')');
				audio.addEventListener('succeeded', forceStop);
			    audio.addEventListener('ready', progress);

			    try {
					audio.play();
//				    console.log('d(' + audio.playState + ')');
			    } catch (e) {
//				    console.log('e');
			    	callback = function () {
					    console.log('i');
			    		callback = false;
			    		audio.play();
			    	};
			    }
			}
			element.removeEventListener('touchstart', click, false);
			if(functionCallback){
//			    console.log('f');
				functionCallback();
			}
		};
		element.addEventListener('touchstart', click, false);
	},
	proto = component.prototype;
	
	proto.removeComponent = function(){
		this.owner.removeComponent(this);
	};
	
	proto.destroy = function(){
		if(this.touchOverlay){
			this.owner.rootElement.removeChild(this.touchOverlay);
		}
		this.touchOverlay = undefined;
	};
	
	return component;
})();


/*--------------------------------------------------
 *   handler-collision - ../engine/components/handler-collision.js
 */
/**
# COMPONENT **handler-collision**
This component checks for collisions between entities which typically have either a [[Collision-Tiles]] component for tile maps or a [[Collision-Basic]] component for other entities. It uses `entity-container` component messages if triggered to add to its collision list and also listens for explicit add/remove messages (useful in the absence of an `entity-container` component).

## Dependencies:
- [[handler-logic]] (on entity) - At the top-most layer, the logic handler triggers `check-collision-group` causing this component to test collisions on all children entities.

## Messages

### Listens for:
- **child-entity-added, add-collision-entity** - On receiving this message, the component checks the entity to determine whether it listens for collision messages. If so, the entity is added to the collision group.
  - @param message ([[Entity]] object) - The entity to be added.
- **child-entity-removed, remove-collision-entity** - On receiving this message, the component looks for the entity in its collision group and removes it.
  - @param message ([[Entity]] object) - The entity to be removed.
- **check-collision-group** - This message causes the component to go through the entities and check for collisions.
  - @param message.camera (object) - Optional. Specifies a region in which to check for collisions. Expects the camera object to contain the following properties: top, left, width, height, and buffer.

### Child Broadcasts
- **prepare-for-collision** - This message is triggered on collision entities to make sure their axis-aligned bounding box is prepared for collision testing.
- **relocate-entity** - This message is triggered on an entity that has been repositioned due to a solid collision.
- **hit-by-[collision-types specified in collision entities' definitions]** - When an entity collides with an entity of a listed collision-type, this message is triggered on the entity.
  - @param message.entity ([[Entity]]) - The entity with which the collision occurred.
  - @param message.type (string) - The collision type of the other entity.
  - @param message.shape ([[CollisionShape]]) - This is the shape of the other entity that caused the collision.
  - @param message.x (number) - Returns -1, 0, or 1 indicating on which side of this entity the collision occurred: left, neither, or right respectively.
  - @param message.y (number) - Returns -1, 0, or 1 indicating on which side of this entity the collision occurred: top, neither, or bottom respectively.

## JSON Definition:
    {
      "type": "handler-collision"
      // This component has no customizable properties.
    }
*/
(function(){
	//set here to make them reusable objects
	var triggerMessage = {
		entity: null,
		type:   null,
		x: 0,
		y: 0,
		hitType: null,
		myType: null
	},
	xyPair = {
		x: 0,
		y: 0,
		relative: false
	},
	clearXYPair = function (pair) {
		pair.x = 0;
		pair.y = 0;
		pair.relative = false;
	},
	entityCollisionDataContainer = new platformer.classes.collisionDataContainer(),
	AABBCollision = function (boxX, boxY){
		if(boxX.left   >=  boxY.right)  return false;
		if(boxX.right  <=  boxY.left)   return false;
		if(boxX.top    >=  boxY.bottom) return false;
		if(boxX.bottom <=  boxY.top)    return false;
		return true;
	},
	shapeCollision = function(shapeA, shapeB){
		var distSquared = 0;
		var radiiSquared = 0;
		var circle = undefined;
		var rect = undefined;
		var shapeDistanceX = 0;
		var shapeDistanceY = 0;
		var rectAabb = undefined;
		var cornerDistanceSq = 0;
		if (shapeA.type == 'rectangle' && shapeB.type == 'rectangle') {
			return true;
		} else if (shapeA.type == 'circle' && shapeB.type == 'circle') {
			distSquared = Math.pow((shapeA.x - shapeB.x), 2) + Math.pow((shapeA.y - shapeB.y), 2);
			radiiSquared = Math.pow((shapeA.radius + shapeB.radius), 2);
			if (distSquared <= radiiSquared)
			{
				return true;
			} 
		} else if (shapeA.type == 'circle' && shapeB.type == 'rectangle' || shapeA.type == 'rectangle' && shapeB.type == 'circle' ) {
			if (shapeA.type == 'circle')
			{
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
	
	return platformer.createComponentClass({
		id: 'handler-collision',
		
		constructor: function(definition){
			this.entitiesByType = {};
			this.entitiesByTypeLive = {};
			this.solidEntities = [];
			this.solidEntitiesLive = [];
			this.softEntities = [];
			this.softEntitiesLive = [];
			this.allEntities = [];
			this.allEntitiesLive = [];
			this.groupsLive = [];
			this.nonColliders = [];
			
			this.terrain = undefined;
			this.aabb     = new platformer.classes.aABB(this.owner.x, this.owner.y);
			this.prevAABB = new platformer.classes.aABB(this.owner.x, this.owner.y);
			this.owner.previousX = this.owner.previousX || this.owner.x;
			this.owner.previousY = this.owner.previousY || this.owner.y;
			
			this.updateLiveList = true;
			this.cameraLogicAABB = new platformer.classes.aABB(0, 0);
			this.cameraCollisionAABB = new platformer.classes.aABB(0, 0);
			
			this.timeElapsed = {
				name: 'Col',
				time: 0
			};
		},
		
		events:{
			"child-entity-added": function(entity){
				this['add-collision-entity'](entity);
			},
			
			"add-collision-entity": function(entity){
				var i = 0,
				types = entity.collisionTypes,
				solid = false,
				soft  = false;
				
				if ((entity.type == 'tile-layer') || (entity.type == 'collision-layer')) { //TODO: probably should have these reference a required function on the obj, rather than an explicit type list since new collision entity map types could be created - DDD
					this.terrain = entity;
					this.updateLiveList = true;
				} else {
					if(types){
						for(; i < types.length; i++){
							if(!this.entitiesByType[types[i]]){
								this.entitiesByType[types[i]] = [];
								this.entitiesByTypeLive[types[i]] = [];
							}
							this.entitiesByType[types[i]][this.entitiesByType[types[i]].length] = entity;
							if(entity.solidCollisions[types[i]].length && !entity.immobile){
								solid = true;
							}
							if(entity.softCollisions[types[i]].length){
								soft = true;
							}
						}
						if(solid && !entity.immobile){
							this.solidEntities[this.solidEntities.length] = entity;
						}
						if(soft){
							this.softEntities[this.softEntities.length] = entity;
						}
//						if(entity.jumpThrough){ // Need to do jumpthrough last, since everything else needs to check against it's original position
							this.allEntities[this.allEntities.length] = entity;
//						} else {
//							this.allEntities.splice(0, 0, entity);
//						}
						this.updateLiveList = true;
					}
				}
			},
			
			"child-entity-removed": function(entity){
				this['remove-collision-entity'](entity);
			},
			
			"remove-collision-entity": function(entity){
				var x = 0,
				i     = 0,
				j	  = 0,
				types = entity.collisionTypes,
				solid = false,
				soft  = false;

				if (types) {
					for(; i < types.length; i++){
						for (x in this.entitiesByType[types[i]]) {
							if(this.entitiesByType[types[i]][x] === entity){
								this.entitiesByType[types[i]].splice(x, 1);
								break;
							}
						}
						if(entity.solidCollisions[types[i]].length){
							solid = true;
						}
						if(entity.softCollisions[types[i]].length){
							soft = true;
						}
					}
					
					if(solid){
						for (x in this.solidEntities) {
							if(this.solidEntities[x] === entity){
								this.solidEntities.splice(x, 1);
								break;
							}
						}
					}
			
					if(soft){
						for (x in this.softEntities) {
							if(this.softEntities[x] === entity){
								this.softEntities.splice(x, 1);
								break;
							}
						}
					}
					
					for (j = 0; j < this.allEntities.length; j++)
					{
						if (this.allEntities[j] === entity)
						{
							this.allEntities.splice(j,1);
							break;
						}
					}
					this.updateLiveList = true;
				}
				
			},
			
			"check-collision-group": function(resp){
				var time = new Date().getTime(); //TODO: TML - Why create this in here?
				
				if(resp.camera){
					this.checkCamera(resp.camera);
				}/*
				if(resp.movers){
					this.checkMovers(resp.camera, resp.movers);
				}*/

				this.timeElapsed.name = 'Col-Cam';
				this.timeElapsed.time = new Date().getTime() - time;
				platformer.game.currentScene.trigger('time-elapsed', this.timeElapsed);
				time += this.timeElapsed.time;

				this.prepareCollisions(resp);

				this.timeElapsed.name = 'Col-Prep';
				this.timeElapsed.time = new Date().getTime() - time;
				platformer.game.currentScene.trigger('time-elapsed', this.timeElapsed);
				time += this.timeElapsed.time;

				this.checkGroupCollisions();

				this.timeElapsed.name = 'Col-Group';
				this.timeElapsed.time = new Date().getTime() - time;
				platformer.game.currentScene.trigger('time-elapsed', this.timeElapsed);
				time += this.timeElapsed.time;

				this.checkSolidCollisions();

				this.timeElapsed.name = 'Col-Solid';
				this.timeElapsed.time = new Date().getTime() - time;
				platformer.game.currentScene.trigger('time-elapsed', this.timeElapsed);
				time += this.timeElapsed.time;

				this.resolveNonCollisions(resp);

				this.timeElapsed.name = 'Col-None';
				this.timeElapsed.time = new Date().getTime() - time;
				platformer.game.currentScene.trigger('time-elapsed', this.timeElapsed);
				time += this.timeElapsed.time;

				this.checkSoftCollisions(resp);

				this.timeElapsed.name = 'Col-Soft';
				this.timeElapsed.time = new Date().getTime() - time;
				platformer.game.currentScene.trigger('time-elapsed', this.timeElapsed);
				time += this.timeElapsed.time;
			}
		},
		
		methods: {
			checkCamera: (function(){
				var groupSortBySize = function(a, b){
					return a.collisionGroup.getAllEntities() - b.collisionGroup.getAllEntities();
				};
				return function(camera, movers){
					var i  = 0,
					j      = 0,
					length = 0,
					list   = null,
					all    = null,
					softs  = null,
					solids = null,
					width  = camera.width,
					height = camera.height,
					x      = camera.left + width  / 2,
					y      = camera.top  + height / 2,
					bufferLeft = camera.bufferLeft,
					bufferRight = camera.bufferRight,
					bufferTop = camera.bufferTop,
					bufferBottom = camera.bufferBottom,
					entities = undefined,
					entity = undefined,
					check  = AABBCollision,
					aabbLogic     = this.cameraLogicAABB,
					aabbCollision = this.cameraCollisionAABB,
					types = null;
					
					// store buffered size since the actual width x height is not used below.
					width += bufferLeft + bufferRight;
					height += bufferTop + bufferBottom;
					
					if(this.updateLiveList || !aabbLogic.matches(x, y, width, height)){
						
						aabbLogic.setAll(x, y, width, height);
						
						if(this.updateLiveList || !aabbCollision.contains(aabbLogic)){ //if the camera has not moved beyond the original buffer, we do not continue these calculations
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
							for (i = 0; i < length; i++){
								entity = this.allEntities[i];
								if(entity.alwaysOn || entity.checkCollision || check(entity.getAABB(), aabbLogic)){
									entity.checkCollision = false;  //TML - This should be here. I think. :)
									all[all.length] = entity;
	
									types = entity.collisionTypes;
									if(entity !== this.owner){
										if(!entity.immobile){
											for (j = 0; j < types.length; j++) {
												if(entity.solidCollisions[types[j]].length){
													solids[solids.length] = entity;
													break;
												}
											}
										}
									}
									for (j = 0; j < types.length; j++) {
										if(entity.softCollisions[types[j]].length){
											softs[softs.length] = entity;
											break;
										}
									}
									
									if(entity.collisionGroup){
										groups.push(entity);
									}
								} 
							}
							
							groups.sort(groupSortBySize);
							
							// add buffer again to capture stationary entities along the border that may be collided against 
							aabbCollision.setAll(x, y, width + bufferLeft + bufferRight, height + bufferTop + bufferBottom);
							
							for (i in this.entitiesByType){
								entities = this.entitiesByType[i];
								list = this.entitiesByTypeLive[i];
								list.length = 0;
								length = entities.length;
								for (j = 0; j < length; j++){
									entity = entities[j];
									if(entity.alwaysOn  || check(entity.getAABB(), aabbCollision)){
										list[list.length] = entity;
									}
								}
							}
						}
					}
				};
			})(),
			
			prepareCollisions: function (resp) {
				var entity = null;
				
				this.nonColliders.length = 0;
				
				for (var x = this.allEntitiesLive.length - 1; x > -1; x--) {
					entity = this.allEntitiesLive[x];
					entity.triggerEvent('prepare-for-collision', resp);
					if(!entity.collides){
						this.nonColliders.push(entity);
					}
				}
			},
			
			resolveNonCollisions: function (resp) {
				var entity = null,
				xy         = xyPair;

				xy.relative = false;
				
				for (var x = this.nonColliders.length - 1; x > -1; x--) {
					entity = this.nonColliders[x];
					xy.x = entity.x;
					xy.y = entity.y;
					entity.trigger('relocate-entity', xy);
				}
			},
			
			checkGroupCollisions:  (function(){
				var triggerCollisionMessages = function(entity, otherEntity, thisType, thatType, x, y, hitType, vector){
					
					triggerMessage.entity = otherEntity;
					triggerMessage.myType = thisType;
					triggerMessage.type   = thatType;
					triggerMessage.x      = x;
					triggerMessage.y      = y;
					triggerMessage.direction = vector;
					triggerMessage.hitType= hitType;
					entity.triggerEvent('hit-by-' + thatType, triggerMessage);
					
					if (otherEntity) {
						triggerMessage.entity = entity;
						triggerMessage.type   = thisType;
						triggerMessage.myType = thatType;
						triggerMessage.x      = -x;
						triggerMessage.y      = -y;
						triggerMessage.direction = vector.getInverse();
						triggerMessage.hitType= hitType;
						otherEntity.triggerEvent('hit-by-' + thisType, triggerMessage);
					}

				};

				return function (){
					var entities = this.groupsLive;
					
					for (var x = entities.length - 1; x > -1; x--){
						if(entities[x].collisionGroup.getSize() > 1){
							entityCollisionDataContainer.reset();
							clearXYPair(xyPair);
							xyPair = this.checkSolidEntityCollision(entities[x], entities[x].collisionGroup, entityCollisionDataContainer, xyPair);
							
							for (var i = 0; i < entityCollisionDataContainer.xCount; i++)
							{
								messageData = entityCollisionDataContainer.getXEntry(i);
								triggerCollisionMessages(messageData.thisShape.owner, messageData.thatShape.owner, messageData.thisShape.collisionType, messageData.thatShape.collisionType, messageData.direction, 0, 'solid', messageData.vector);
							}
							
							for (i = 0; i < entityCollisionDataContainer.yCount; i++)
							{
								messageData = entityCollisionDataContainer.getYEntry(i);
								triggerCollisionMessages(messageData.thisShape.owner, messageData.thatShape.owner, messageData.thisShape.collisionType, messageData.thatShape.collisionType, 0, messageData.direction, 'solid', messageData.vector);
							}
						}
					}
				};
			})(),
			
			checkSolidCollisions: (function(){
				var triggerCollisionMessages = function(entity, otherEntity, thisType, thatType, x, y, hitType, vector){
					
					triggerMessage.entity = otherEntity;
					triggerMessage.myType = thisType;
					triggerMessage.type   = thatType;
					triggerMessage.x      = x;
					triggerMessage.y      = y;
					triggerMessage.direction = vector;
					triggerMessage.hitType= hitType;
					entity.triggerEvent('hit-by-' + thatType, triggerMessage);
					
					if (otherEntity) {
						triggerMessage.entity = entity;
						triggerMessage.type   = thisType;
						triggerMessage.myType = thatType;
						triggerMessage.x      = -x;
						triggerMessage.y      = -y;
						triggerMessage.direction = vector.getInverse();
						triggerMessage.hitType= hitType;
						otherEntity.triggerEvent('hit-by-' + thisType, triggerMessage);
					}

				};

				return function (){
					var messageData = null,
					entities = this.solidEntitiesLive;
					
					for (var x = entities.length - 1; x > -1; x--){
						entityCollisionDataContainer.reset();
						clearXYPair(xyPair);
						xyPair = this.checkSolidEntityCollision(entities[x], entities[x], entityCollisionDataContainer, xyPair);
						
						for (var i = 0; i < entityCollisionDataContainer.xCount; i++)
						{
							messageData = entityCollisionDataContainer.getXEntry(i);
							triggerCollisionMessages(messageData.thisShape.owner, messageData.thatShape.owner, messageData.thisShape.collisionType, messageData.thatShape.collisionType, messageData.direction, 0, 'solid', messageData.vector);
						}
						
						for (i = 0; i < entityCollisionDataContainer.yCount; i++)
						{
							messageData = entityCollisionDataContainer.getYEntry(i);
							triggerCollisionMessages(messageData.thisShape.owner, messageData.thatShape.owner, messageData.thisShape.collisionType, messageData.thatShape.collisionType, 0, messageData.direction, 'solid', messageData.vector);
						}
					}
				};
			})(),
			
			checkSolidEntityCollision: function (ent, entityOrGroup, collisionDataCollection, xyInfo) {
				var steps         = 0,
				step              = 0,
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
				
				if(entityOrGroup.getSolidEntities){
					ignoredEntities = entityOrGroup.getSolidEntities();
				}
				
				finalMovementInfo.x = ent.x;
				finalMovementInfo.y = ent.y;

				if (entityDeltaX || entityDeltaY) {
					
					if(ent.bullet){
						for(var i in collisionTypes){
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
					
					for(step = 0; step < steps; step++){
						entityOrGroup.prepareCollision(ent.previousX + dX, ent.previousY + dY);

						finalMovementInfo.x = ent.x;
						finalMovementInfo.y = ent.y;
						
						finalMovementInfo = this.processCollisionStep(ent, entityOrGroup, ignoredEntities, collisionDataCollection, finalMovementInfo, dX, dY, collisionTypes);
						
						
						if((finalMovementInfo.x === ent.previousX) && (finalMovementInfo.y === ent.previousY)){
							entityOrGroup.relocateEntity(finalMovementInfo.x, finalMovementInfo.y, collisionDataCollection);
							//No more movement so we bail!
							break;
						} else {
							entityOrGroup.relocateEntity(finalMovementInfo.x, finalMovementInfo.y, collisionDataCollection);
						}
					}
				}
				
				return finalMovementInfo;
			},
			
			processCollisionStep: (function(){
				var sweepAABB = new platformer.classes.aABB(),
				includeEntity = function (thisEntity, aabb, otherEntity, otherCollisionType, ignoredEntities) {
					var otherAABB = otherEntity.getAABB(otherCollisionType);
					if (otherEntity === thisEntity){
						return false;
					} else if (otherEntity.jumpThrough && (aabb.bottom > otherAABB.top)) {
						return false;
					} else if (thisEntity.jumpThrough  && (otherAABB.bottom > aabb.top)) { // This will allow platforms to hit something solid sideways if it runs into them from the side even though originally they were above the top. - DDD
						return false;
					} else if(ignoredEntities){
						for (var i = 0; i < ignoredEntities.length; i++) {
							if(otherEntity === ignoredEntities[i]) {
								return false;
							}
						}
					}
					return true;
				};

				return function (ent, entityOrGroup, ignoredEntities, collisionDataCollection, finalMovementInfo, entityDeltaX, entityDeltaY, collisionTypes) {
					var potentialCollision = false;
					var potentialCollidingShapes = [];
					var previousAABB = null;
					var currentAABB = null;
					var collisionType = null;
					
					var otherEntity = null;
					var otherCollisionType = '';
					var otherShapes = null;
					var entitiesByTypeLive = this.getWorldEntities();
					var otherEntities = null;
					var terrain = this.getWorldTerrain(),
					solidCollisions = entityOrGroup.getSolidCollisions();
					
					if(!entityOrGroup.jumpThrough || (entityDeltaY >= 0)){ //TODO: Need to extend jumpthrough to handle different directions and forward motion - DDD
	
						for(var i = 0; i < collisionTypes.length; i++){
							//Sweep the full movement of each collision type
							potentialCollidingShapes[i] = [];
							collisionType = collisionTypes[i];
							previousAABB = entityOrGroup.getPreviousAABB(collisionType);
							currentAABB = entityOrGroup.getAABB(collisionType);
							
							sweepAABB.reset();
							sweepAABB.include(currentAABB);
							sweepAABB.include(previousAABB);
						
							for (var y = 0; y < solidCollisions[collisionType].length; y++) {
								otherCollisionType = solidCollisions[collisionType][y];
	
								if(entitiesByTypeLive[otherCollisionType]){
									otherEntities = entitiesByTypeLive[otherCollisionType];
									
									for(var z = 0; z < otherEntities.length; z++){
										
										//Chop out all the special case entities we don't want to check against.
										otherEntity = otherEntities[z];
										
										//Do our sweep check against the AABB of the other object and add potentially colliding shapes to our list.
										if(includeEntity(ent, previousAABB, otherEntity, otherCollisionType, ignoredEntities) && (AABBCollision(sweepAABB, otherEntity.getAABB(otherCollisionType)))) {
											otherShapes = otherEntity.getShapes(otherCollisionType);
											
											for (var q = 0; q < otherShapes.length; q++) {
												//Push the shapes on the end!
												potentialCollidingShapes[i].push(otherShapes[q]);
											} 
											potentialCollision = true;
										}
									}
								} else if (terrain && (otherCollisionType === 'tiles')) {
									//Do our sweep check against the tiles and add potentially colliding shapes to our list.
									otherShapes = terrain.getTileShapes(sweepAABB, previousAABB);
									for (var q = 0; q < otherShapes.length; q++) {
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
	
					}
					
					return finalMovementInfo;
				};
			})(),
			
			resolveCollisionPosition: (function(){
				var collisionData = new platformer.classes.collisionData();
				
				return function(ent, entityOrGroup, finalMovementInfo, potentialCollidingShapes, collisionDataCollection, collisionTypes, entityDeltaX, entityDeltaY){

					if (entityDeltaX != 0) {
						for(var j = 0; j < collisionTypes.length; j++){
							//Move each collision type in X to find the min X movement
							collisionData.clear();
							collisionData = this.findMinAxisMovement(ent, entityOrGroup, collisionTypes[j], 'x', potentialCollidingShapes[j], collisionData);
							
							if (collisionData.occurred)
							{
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
					
					if (entityDeltaY != 0) {
						for(var j = 0; j < collisionTypes.length; j++){
							//Move each collision type in Y to find the min Y movement
							collisionData.clear();
							collisionData = this.findMinAxisMovement(ent, entityOrGroup, collisionTypes[j], 'y', potentialCollidingShapes[j], collisionData);
							
							if (collisionData.occurred)
							{
								collisionDataCollection.tryToAddY(collisionData);
							}
						}
					}
					
					if (collisionDataCollection.yCount > 0)
					{
						collisionData.copy(collisionDataCollection.getYEntry(0));
						finalMovementInfo.y = ent.previousY + collisionData.deltaMovement * collisionData.direction;
					} else {
						finalMovementInfo.y = ent.y;
					}
					
					return finalMovementInfo;
				};
			})(),
			
			findMinAxisMovement: (function(){
				var shapeCollisionData = new platformer.classes.collisionData();
				
				return function (ent, entityOrGroup, collisionType, axis, potentialCollidingShapes, bestCollisionData) {
					//Loop through my shapes of this type vs the colliding shapes and do precise collision returning the shortest movement in axis direction
					
					var shapes = entityOrGroup.getShapes(collisionType);
					var prevShapes = entityOrGroup.getPrevShapes(collisionType);
					
					for (var i = 0; i < shapes.length; i++) {
						shapeCollisionData.clear();
						shapeCollisionData = this.findMinShapeMovementCollision(prevShapes[i], shapes[i], axis, potentialCollidingShapes, shapeCollisionData);
						
						if (shapeCollisionData.occurred && !bestCollisionData.occurred){
							//if a collision occurred and we haven't already have a collision.
							bestCollisionData.copy(shapeCollisionData);
						} else if (shapeCollisionData.occurred && bestCollisionData.occurred && (shapeCollisionData.deltaMovement < bestCollisionData.deltaMovement)) {
							//if a collision occurred and the diff is smaller than our best diff.
							bestCollisionData.copy(shapeCollisionData);
						}
					}
					
					return bestCollisionData;
				};
			})(),
			
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
			findMinShapeMovementCollision: (function(){

				var storeCollisionData = function(collisionData, direction, position, initial, thisShape, thatShape, vector){
					collisionData.occurred = true;
					collisionData.direction = direction;
					collisionData.position = position;
					collisionData.deltaMovement = Math.abs(position - initial);
					collisionData.aABB = thatShape.getAABB();
					collisionData.thisShape = thisShape;
					collisionData.thatShape = thatShape;
					collisionData.vector = vector.copy();
				},
				findAxisCollisionPosition = (function(){
					var v = new platformer.classes.vector2D(),
					returnInfo = {
						position: 0,
						contactVector: v
					}, 
					getMovementDistance = function(currentDistance, minimumDistance){
						return Math.sqrt(Math.pow(minimumDistance, 2) - Math.pow(currentDistance, 2));
					},
					getCorner = function(circlePos, rectanglePos, half){
						var diff = circlePos - rectanglePos;
						return diff - (diff/Math.abs(diff)) * half;
					},
					getOffsetForAABB = function(axis, thisAABB, thatAABB){
						if (axis === 'x') {
							return thatAABB.halfWidth + thisAABB.halfWidth;
						} else if (axis === 'y') {
							return thatAABB.halfHeight + thisAABB.halfHeight;
						}
					},
					
					getOffsetForCircleVsAABB = function(axis, circle, rect, moving, direction){
						var newAxisPosition = 0;
						
						if (axis === 'x') {
							if (circle.y >= rect.aABB.top && circle.y <= rect.aABB.bottom) {
								return rect.aABB.halfWidth + circle.radius;
							} else {
								v.y = getCorner(circle.y, rect.y, rect.aABB.halfHeight);
								newAxisPosition = rect.aABB.halfWidth + getMovementDistance(v.y, circle.radius);
								if(moving === circle){
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
								if(moving === circle){
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
					getOffsetForCircles = function(axis, thisShape, thatShape){
						if (axis === 'x') {
							return getMovementDistance(thisShape.y - thatShape.y, thisShape.radius + thatShape.radius);
						} else if (axis === 'y') {
							return getMovementDistance(thisShape.x - thatShape.x, thisShape.radius + thatShape.radius);
						}
					};

					return function(axis, direction, thisShape, thatShape){
						//Returns the value of the axis at which point thisShape collides with thatShape
						
						if (thisShape.type == 'rectangle') {
							if(thatShape.type == 'rectangle'){
								returnInfo.position = thatShape[axis] - direction * getOffsetForAABB(axis, thisShape.getAABB(), thatShape.getAABB());
								v.x = 0;
								v.y = 0;
								v[axis] = direction;
								return returnInfo;
							} else if (thatShape.type == 'circle'){
								v.x = 0;
								v.y = 0;
								v[axis] = direction;
								returnInfo.position = thatShape[axis] - direction * getOffsetForCircleVsAABB(axis, thatShape, thisShape, thisShape, direction);
								return returnInfo;
							}
						} else if (thisShape.type == 'circle') {
							if(thatShape.type == 'rectangle'){
								v.x = 0;
								v.y = 0;
								v[axis] = direction;
								returnInfo.position = thatShape[axis] - direction * getOffsetForCircleVsAABB(axis, thisShape, thatShape, thisShape, direction);
								return returnInfo;
							} else if (thatShape.type == 'circle'){
								returnInfo.position = thatShape[axis] - direction * getOffsetForCircles(axis, thisShape, thatShape);
								v.x = thatShape.x - thisShape.x;
								v.y = thatShape.y - thisShape.y;
								v[axis] = thatShape[axis] - returnInfo.position; 
								v.normalize();
								return returnInfo;
							}
						}
					};
				})();
				
				return function (prevShape, currentShape, axis, potentialCollidingShapes, collisionData) {
					var initialPoint = prevShape[axis];
					var goalPoint = currentShape[axis];
					var translatedShape = prevShape;
					var direction = (initialPoint < goalPoint) ? 1 : -1;
					var position = goalPoint;
					var collisionInfo = null;
					var finalPosition = goalPoint;
					
					if (initialPoint != goalPoint) {
						if(axis === 'x') {
							translatedShape.moveX(goalPoint);
						} else if (axis === 'y') {
							translatedShape.moveY(goalPoint);
						}
						
						for (var i = 0; i < potentialCollidingShapes.length; i++) {
							position = goalPoint;
							if(AABBCollision(translatedShape.getAABB(), potentialCollidingShapes[i].getAABB())) { //TML - Could potentially shove this back into the rectangle shape check, but I'll leave it here.
								if (shapeCollision(translatedShape, potentialCollidingShapes[i])) {
									collisionInfo = findAxisCollisionPosition(axis, direction, translatedShape, potentialCollidingShapes[i]);
									position = collisionInfo.position;
									
									if (direction > 0) {
										if (position < finalPosition) {
											if (position < initialPoint){ // Reality check: I think this is necessary due to floating point inaccuracies. - DDD
												position = initialPoint;
											}
											finalPosition = position;
											storeCollisionData(collisionData, direction, finalPosition, initialPoint, currentShape, potentialCollidingShapes[i], collisionInfo.contactVector);
										}
									} else {
										if (position > finalPosition) {
											if (position > initialPoint){ // Reality check: I think this is necessary due to floating point inaccuracies. - DDD
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
			})(),
			
			checkSoftCollisions: function (resp)	{
				var otherEntity = undefined,
				ent = undefined,
				message = triggerMessage,
				i   = 0,
				j	= 0,
				k	= 0,
				x   = 0,
				y   = 0,
				z   = 0,
				checkAABBCollision = AABBCollision,
				softCollisions = null,
				otherEntities  = null,
				otherCollisionType = null,
				shapes = null,
				otherShapes = null,
				collisionFound = false,
				entitiesByTypeLive = this.getWorldEntities();

				message.x = 0;
				message.y = 0;
				
				for(x = 0; x < this.softEntitiesLive.length; x++){
					ent = this.softEntitiesLive[x];
					for (i = 0; i < ent.collisionTypes.length; i++){
						softCollisions = ent.softCollisions[ent.collisionTypes[i]];
						for (y = 0; y < softCollisions.length; y++){
							otherCollisionType = softCollisions[y];
							otherEntities = entitiesByTypeLive[otherCollisionType]; 
							if(otherEntities){
								for(z = 0; z < otherEntities.length; z++){
									collisionFound = false;
									otherEntity = otherEntities[z];
									if((otherEntity !== ent) && (checkAABBCollision(ent.getAABB(ent.collisionTypes[i]), otherEntity.getAABB(otherCollisionType)))) {
										shapes = ent.getShapes(ent.collisionTypes[i]);
										otherShapes = otherEntity.getShapes(otherCollisionType);
										for (j = 0; j < shapes.length; j++)
										{
											for (k = 0; k < otherShapes.length; k++)
											{
												if (shapeCollision(shapes[j], otherShapes[k])) {
													//TML - We're only reporting the first shape we hit even though there may be multiple that we could be hitting.
													message.entity = otherEntity;
													message.type   = otherCollisionType;
													message.myType = ent.collisionTypes[i];
													message.shape  = otherShapes[k];
													message.hitType= 'soft';
													ent.trigger('hit-by-' + otherCollisionType, message);
													message.debug = false;
													
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
				}
			},
			
			destroy: function(){
				this.solidEntities.length = 0;
				this.softEntities.length = 0;
				for (var i in this.entitiesByType){
					this.entitiesByType[i].length = 0;
				}
			}
		},
		
		publicMethods: {
			getWorldEntities: function(){
				return this.entitiesByTypeLive;
			},
			
			getWorldTerrain: function(){
				return this.terrain;
			}
		}
	});
})();

/*--------------------------------------------------
 *   handler-box2d - ../engine/components/handler-box2d.js
 */
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


/*--------------------------------------------------
 *   handler-controller - ../engine/components/handler-controller.js
 */
/**
# COMPONENT **handler-controller**
This component handles capturing and relaying input information to the entities that care about it. It takes mouse, keyboard, and custom input messages. State messages are sent immediately to the entities when they are received, the 'handler-controller' message is sent to demarcate ticks.

## Dependencies
- **Needs a 'tick' or 'check-inputs' call** - This component doesn't need a specific component, but it does require a 'tick' or 'check-inputs' call to function. It's usually used as a component of an action-layer.

## Messages

### Listens for:
- **child-entity-added** - Called when a new entity has been added and should be considered for addition to the handler. If the entity has a 'handle-controller' message id it's added to the list of entities. Once an entity is added to the handler-controller 'controller-load' is called on the entity. If an entity has a control map that includes non-keyboard inputs, we add listeners for those and update functions to alert the entity when they happen. 
  - @param entity (Object) - The entity that is being considered for addition to the handler.
- **tick, check-inputs** - Sends a 'handle-controller' message to all the entities the component is handling. If an entity does not handle the message, it's removed it from the entity list.
  - @param resp (object) - An object containing delta which is the time passed since the last tick. 
- **keydown** - Sends a message to the handled entities 'key:' + the key id + ":down". 
  - @param event (DOM event) - The DOM event that triggered the keydown event. 
 - **keyup** - Sends a message to the handled entities 'key:' + the key id + ":up".
  - @param event (DOM event) - The DOM event that triggered the keyup event. 

### Child Broadcasts:
- **handle-controller** - Sent to entities on each tick to handle whatever they need to regarding controls.
  - @param resp (object) - An object containing a delta variable that is the time that's passed since the last tick.
- **controller-load** - Sent to entities when they are added to the handler-controller.
- **key:keyid:up** - Message sent to an entity when a key goes from down to up.
  - @param event (DOM event) - The DOM event that triggered the keyup event. 
- **key:keyid:down** - Message sent to an entity when a key goes from up to down.
  - @param event (DOM event) - The DOM event that triggered the keydown event. 
- **custom:up and custom:down messages** - Messages created when an entity has a control map with non-keyboard input. The handler creates these message when it adds the entity and then fires them on the entity when the input is received.
  - @param value (object) - A message object sent by the custom message.

## JSON Definition
    {
      "type": "handler-controller",
    }
*/

platformer.components['handler-controller'] = (function(){
	var relayUpDown = function(event, self){
		return function(value){
			if (value.released){
				event += ':up';
			} else if (value.pressed){
				event += ':down';
			}
			for (var x = 0; x < self.entities.length; x++) {
				self.entities[x].trigger(event, value);
			}
		}; 
	};
	var relay = function(event, self){
		return function(value){
			for (var x = 0; x < self.entities.length; x++) {
				self.entities[x].trigger(event, value);
			}
		}; 
	};
	
	var keyMap = { //Note: if this list is changed, be sure to update https://git.pbs.org/html5-platformer-engine/pages/Handler-Controller-Key-List
		kc0:   'unknown',         
		kc8:   'backspace',
		kc9:   'tab',
		kc12:  'numpad-5-shift',
		kc13:  'enter',
		kc16:  'shift',
		kc17:  'ctrl',
		kc18:  'alt',
		kc19:  'pause',
		kc20:  'caps-lock',
		kc27:  'esc',
		kc32:  'space',
		kc33:  'page-up',
		kc34:  'page-down',
		kc35:  'end',
		kc36:  'home',
		kc37:  'left-arrow',
		kc38:  'up-arrow',
		kc39:  'right-arrow',
		kc40:  'down-arrow',
		kc42:  'numpad-multiply',
		kc43:  'numpad-add',
		kc44:  'print-screen',
		kc45:  'insert',
		kc46:  'delete',
		kc47:  'numpad-division',
		kc48:  '0',
		kc49:  '1',
		kc50:  '2',
		kc51:  '3',
		kc52:  '4',
		kc53:  '5',
		kc54:  '6',
		kc55:  '7',
		kc56:  '8',
		kc57:  '9',
		kc59:  'semicolon',
		kc61:  'equals',
		kc65:  'a',
		kc66:  'b',
		kc67:  'c',
		kc68:  'd',
		kc69:  'e',
		kc70:  'f',
		kc71:  'g',
		kc72:  'h',
		kc73:  'i',
		kc74:  'j',
		kc75:  'k',
		kc76:  'l',
		kc77:  'm',
		kc78:  'n',
		kc79:  'o',
		kc80:  'p',
		kc81:  'q',
		kc82:  'r',
		kc83:  's',
		kc84:  't',
		kc85:  'u',
		kc86:  'v',
		kc87:  'w',
		kc88:  'x',
		kc89:  'y',
		kc90:  'z',
		kc91:  'left-windows-start',
		kc92:  'right-windows-start',
		kc93:  'windows-menu',
		kc96:  'back-quote',
		kc106: 'numpad-multiply',
		kc107: 'numpad-add',
		kc109: 'numpad-minus',
		kc110: 'numpad-period',
		kc111: 'numpad-division',
		kc112: 'f1',
		kc113: 'f2',
		kc114: 'f3',
		kc115: 'f4',
		kc116: 'f5',
		kc117: 'f6',
		kc118: 'f7',
		kc119: 'f8',
		kc120: 'f9',
		kc121: 'f10',
		kc122: 'f11',
		kc123: 'f12',
		kc144: 'num-lock',
		kc145: 'scroll-lock',
		kc186: 'semicolon',
		kc187: 'equals',
		kc188: 'comma',
		kc189: 'hyphen',
		kc190: 'period',
		kc191: 'forward-slash',
		kc192: 'back-quote',
		kc219: 'open-bracket',
		kc220: 'back-slash',
		kc221: 'close-bracket',
		kc222: 'quote'
	};
	var component = function(owner, definition){
		this.owner = owner;
		this.entities = [];
		
		// Messages that this component listens for
		this.listeners = [];
		
		this.addListeners(['tick', 'child-entity-added', 'child-entity-updated', 'check-inputs', 'keydown', 'keyup']);
		
		this.timeElapsed = {
				name: 'Controller',
				time: 0
			};
	};
	var proto = component.prototype; 

	proto['keydown'] = function(event){
		for (var x = 0; x < this.entities.length; x++)
		{
			this.entities[x].trigger('key:' + (keyMap['kc' + event.keyCode] || ('key-code-' + event.keyCode)) + ':down', event);
		}
	}; 
	
	proto['keyup'] = function(event){
		for (var x = 0; x < this.entities.length; x++)
		{
			this.entities[x].trigger('key:' + (keyMap['kc' + event.keyCode] || ('key-code-' + event.keyCode)) + ':up', event);
		}
	};
	
	proto['tick'] = proto['check-inputs'] = function(resp){
		var time    = new Date().getTime();

		for (var x = this.entities.length - 1; x > -1; x--)
		{
			if(!this.entities[x].trigger('handle-controller', resp)) {
				this.entities.splice(x, 1);
			}
		}
		
		this.timeElapsed.time = new Date().getTime() - time;
		platformer.game.currentScene.trigger('time-elapsed', this.timeElapsed);
	};

	proto['child-entity-added'] = proto['child-entity-updated'] = function(entity){
		var messageIds = entity.getMessageIds(),
		alreadyHere = false; 
		
		for (var x = 0; x < messageIds.length; x++){
			if (messageIds[x] == 'handle-controller'){
				for (var j = 0; j < this.entities.length; j++){
					if(this.entities[j] == entity){
						alreadyHere = true;
						break;
					}
				}
				
				if(!alreadyHere){
					// Check for custom input messages that should be relayed from scene.
					if(entity.controlMap){
						for(var y in entity.controlMap){
							if((y.indexOf('key:') < 0) && (y.indexOf('mouse:') < 0)){
								if(!this[y]){
									this.addListeners([y, y + ':up', y + ':down']);
									this[y]           = relayUpDown(y,     this);
									this[y + ':up']   = relay(y + ':up',   this);
									this[y + ':down'] = relay(y + ':down', this);
								}
							}
						}
					}
					
					this.entities.push(entity);
					entity.trigger('controller-load');
				}
				break;
			}
		}
	};

	// This function should never be called by the component itself. Call this.owner.removeComponent(this) instead.
	proto.destroy = function(){
		this.removeListeners(this.listeners);
		this.entities.length = 0;
		this.owner = undefined;
	};
	
	/*********************************************************************************************************
	 * The stuff below here will stay the same for all components. It's BORING!
	 *********************************************************************************************************/
	
	proto.addListeners = function(messageIds){
		for(var message in messageIds) this.addListener(messageIds[message]);
	};

	proto.removeListeners = function(listeners){
		for(var messageId in listeners) this.removeListener(messageId, listeners[messageId]);
	};
	
	proto.addListener = function(messageId, callback){
		var self = this,
		func = callback || function(value, debug){
			self[messageId](value, debug);
		};
		this.owner.bind(messageId, func);
		this.listeners[messageId] = func;
	};

	proto.removeListener = function(boundMessageId, callback){
		this.owner.unbind(boundMessageId, callback);
	};
	
	return component;
})();


/*--------------------------------------------------
 *   tiled-loader - ../engine/components/tiled-loader.js
 */
/**
# COMPONENT **tiled-loader**
This component is attached to a top-level entity (loaded by the [[Scene]]) and, once its peer components are loaded, ingests a JSON file exported from the [Tiled map editor] [link1] and creates the tile maps and entities. Once it has finished loading the map, it removes itself from the list of components on the entity.

## Dependencies:
- Component [[entity-container]] (on entity's parent) - This component uses `entity.addEntity()` on the entity, provided by `entity-container`.
- Entity **collision-layer** - Used to create map entities corresponding with Tiled collision layers.
- Entity **render-layer** - Used to create map entities corresponding with Tiled render layers.
- Entity **tile-layer** - Used to create map entities corresponding with Tiled collision and render layers.

## Messages

### Listens for:
- **scene-loaded** - On receiving this message, the component commences loading the Tiled map JSON definition. Once finished, it removes itself from the entity's list of components.
- **load-level** - If `manuallyLoad` is set in the JSON definition, the component will wait for this message before loading the Tiled map JSON definition.
  - @param message.level (string or object) - Required. The level to load.
  - @param message.persistentData (object) - Optional. Information passed from the last scene.

### Local Broadcasts:
- **world-loaded** - Once finished loading the map, this message is triggered on the entity to notify other components of completion.
  - @param message.width (number) - The width of the world in world units.
  - @param message.height (number) - The height of the world in world units.
  - @param message.camera ([[Entity]]) - If a camera property is found on one of the loaded entities, this property will point to the entity on load that a world camera should focus on.

## JSON Definition:
    {
      "type": "tiled-loader",
      
      "level": "level-4",
      // Required. Specifies the JSON level to load.
      
      "unitsPerPixel": 10,
      // Optional. Sets how many world units in width and height correspond to a single pixel in the Tiled map. Default is 1: One pixel is one world unit.
      
      "images": ["spritesheet-1", "spritesheet-2"],
      // Optional. If specified, the referenced images are used as the game spritesheets instead of the images referenced in the Tiled map. This is useful for using different or better quality art from the art used in creating the Tiled map.
      
      "imagesScale": 5,
      // Optional. If images are set above, this property sets the scale of the art relative to world coordinates. Defaults to the value set in "unitsPerPixel".
      
      "zStep": 500,
      // Optional. Adds step number to each additional Tiled layer to maintain z-order. Defaults to 1000.
      
      "separateTiles": true,
      // Optional. Keeps the tile maps in separate render layers. Default is 'false' to for better optimization.
      
      "entityPositionX": "center",
      // Optional. Can be "left", "right", or "center". Defines where entities registered X position should be when spawned. Default is "center".

      "entityPositionY": "center",
      // Optional. Can be "top", "bottom", or "center". Defines where entities registered Y position should be when spawned. Default is "bottom".
      
      "manuallyLoad": true
      // Optional. Whether to wait for a "load-level" event before before loading. Defaults to `false`;
    }

[link1]: http://www.mapeditor.org/
*/
(function(){
	var transformCheck = function(v){
		var a = !!(0x20000000 & v),
		b     = !!(0x40000000 & v),
		c     = !!(0x80000000 & v);
		
		if (a && c){
			return -3;
		} else if (a){
			return -5;
		} else if (b){
			return -4;
		} else {
			return -2;
		}
	};
	
	return platformer.createComponentClass({
		id: 'tiled-loader',
		
		constructor: function(definition){
			this.entities     = [];
			this.layerZ       = 0;
			this.followEntity = false;
			
			this.manuallyLoad  = definition.manuallyLoad || false;
			this.level = this.owner.level || definition.level || null;

			this.unitsPerPixel = this.owner.unitsPerPixel || definition.unitsPerPixel || 1;
			this.images        = this.owner.images        || definition.images        || false;
			this.imagesScale   = this.owner.imagesScale   || definition.imagesScale   || this.unitsPerPixel;
			this.layerZStep    = this.owner.zStep         || definition.zStep         || 1000;
			this.separateTiles = this.owner.separateTiles || definition.separateTiles || false;
			this.entityPositionX = this.owner.entityPositionX || definition.entityPositionX || 'center';
			this.entityPositionY = this.owner.entityPositionY || definition.entityPositionY || 'bottom';
		},
		
		events: {
			"scene-loaded": function(persistentData){
				if (!this.manuallyLoad) {
					this['load-level']({level: this.level || persistentData.level, persistentData: persistentData});
				}
			},
			
			"load-level": function(levelData){
				var level = levelData.level,
				actionLayer = 0,
				layer = false;

				//format level appropriately
				if(typeof level === 'string'){
					level = platformer.game.settings.levels[level];
				}
				
				for(; actionLayer < level.layers.length; actionLayer++){
					layer = this.setupLayer(level.layers[actionLayer], level, layer);
					if (this.separateTiles){
						layer = false;
					}
				}

				this.owner.trigger('world-loaded', {
					width:  level.width  * level.tilewidth  * this.unitsPerPixel,
					height: level.height * level.tileheight * this.unitsPerPixel,
					camera: this.followEntity
				});
				this.owner.removeComponent(this);
			}
		},
		
		methods: {
			setupLayer: function(layer, level, combineRenderLayer){
				var self       = this,
				images         = self.images || [],
				tilesets       = level.tilesets,
				tileWidth      = level.tilewidth,
				tileHeight     = level.tileheight,
				widthOffset    = 0,
				heightOffset   = 0,
				tileTypes      = (tilesets[tilesets.length - 1].imagewidth / tileWidth) * (tilesets[tilesets.length - 1].imageheight / tileHeight) + tilesets[tilesets.length - 1].firstgid,
				x              = 0,
				y              = 0,
				obj            = 0,
				entity         = undefined,
				entityType     = '',
				tileset        = undefined,
				properties     = undefined,
				layerCollides  = true,
				numberProperty = false,
				createLayer = function(entityKind){
					var width      = layer.width,
					height         = layer.height,
					tileDefinition = undefined,
					importAnimation= undefined,
					importCollision= undefined,
					importRender   = undefined,
					renderTiles    = false,
					tileset        = null,
					jumpthroughs   = null,
					index          = 0;
					
					//TODO: a bit of a hack to copy an object instead of overwrite values
					tileDefinition  = JSON.parse(JSON.stringify(platformer.game.settings.entities[entityKind]));

					importAnimation = {};
					importCollision = [];
					importRender    = [];
					
					if(entityKind === 'collision-layer'){
						jumpthroughs = [];
						for (var x = 0; x < tilesets.length; x++){
							tileset = tilesets[x];
							if(tileset.tileproperties){
								for (var y in tileset.tileproperties){
									if(tileset.tileproperties[y].jumpThrough){
										jumpthroughs.push(tileset.firstgid + +y - 1);
									}
								}
							}
						}
					}

					tileDefinition.properties            = tileDefinition.properties || {};
					tileDefinition.properties.width      = tileWidth  * width  * self.unitsPerPixel;
					tileDefinition.properties.height     = tileHeight * height * self.unitsPerPixel;
					tileDefinition.properties.columns    = width;
					tileDefinition.properties.rows       = height;
					tileDefinition.properties.tileWidth  = tileWidth  * self.unitsPerPixel;
					tileDefinition.properties.tileHeight = tileHeight * self.unitsPerPixel;
					tileDefinition.properties.scaleX     = self.imagesScale;
					tileDefinition.properties.scaleY     = self.imagesScale;
					tileDefinition.properties.layerZ     = self.layerZ;
					tileDefinition.properties.z    		 = self.layerZ;
					
					
					for (x = 0; x < tileTypes; x++){
						importAnimation['tile' + x] = x;
					}
					for (x = 0; x < width; x++){
						importCollision[x] = [];
						importRender[x]    = [];
						for (y = 0; y < height; y++){
							index = +layer.data[x + y * width] - 1;
							importRender[x][y] = 'tile' + index;
							if(jumpthroughs){
								for (var z = 0; z < jumpthroughs.length; z++){
									if(jumpthroughs[z] === (0x0fffffff & index)){
										index = transformCheck(index);
									}
									break;
								}
							}
							importCollision[x][y] = index;
						}
					}
					for (x = 0; x < tileDefinition.components.length; x++){
						if(tileDefinition.components[x].type === 'render-tiles'){
							renderTiles = tileDefinition.components[x]; 
						}
						if(tileDefinition.components[x].spriteSheet == 'import'){
							tileDefinition.components[x].spriteSheet = {
								images: images,
								frames: {
									width:  tileWidth * self.unitsPerPixel / self.imagesScale,
									height: tileHeight * self.unitsPerPixel / self.imagesScale//,
//									regX: (tileWidth * self.unitsPerPixel / self.imagesScale) / 2,
			//						regY: (tileHeight * self.unitsPerPixel / self.imagesScale) / 2
								},
								animations: importAnimation
							};
						}
						if(tileDefinition.components[x].collisionMap == 'import'){
							tileDefinition.components[x].collisionMap = importCollision;
						}
						if(tileDefinition.components[x].imageMap == 'import'){
							tileDefinition.components[x].imageMap = importRender;
						}
					}
					self.layerZ += self.layerZStep;
					
					if((entityKind === 'render-layer') && combineRenderLayer){
						combineRenderLayer.trigger('add-tiles', renderTiles);
						return combineRenderLayer; 
					} else {
						return self.owner.addEntity(new platformer.classes.entity(tileDefinition, {properties:{}})); 
					}
				};

				if(images.length == 0){
					for (x = 0; x < tilesets.length; x++){
						if(platformer.assets[tilesets[x].name]){ // Prefer to have name in tiled match image id in game
							images.push(platformer.assets[tilesets[x].name]);
						} else {
							images.push(tilesets[x].image);
						}
					}
				} else {
					images = images.slice(); //so we do not overwrite settings array
					for (x = 0; x < images.length; x++){
						if(platformer.assets[images[x]]){
							images[x] = platformer.assets[images[x]];
						}
					}
				}
				
				if(layer.type == 'tilelayer'){
					// First determine which type of entity this layer should behave as:
					entity = 'render-layer'; // default
					if(layer.properties && layer.properties.entity){
						entity = layer.properties.entity;
					} else { // If not explicitly defined, try using the name of the layer
						switch(layer.name){
						case "collision":
							entity = 'collision-layer';
							break;
						case "action":
							entity = 'tile-layer';
							for (x = 0; x < level.layers.length; x++){
								if(level.layers[x].name === 'collision' || (level.layers[x].properties && level.layers[x].properties.entity === 'collision-layer')){
									layerCollides = false;
								}
							}
							if(!layerCollides){
								entity = 'render-layer';
							}
							break;
						}
					}
					
					if(entity === 'tile-layer'){
						createLayer('collision-layer');
						return createLayer('render-layer', combineRenderLayer);
					} else if (entity === 'collision-layer') {
						createLayer(entity, combineRenderLayer);
					} else {
						return createLayer(entity, combineRenderLayer);
					}
				} else if(layer.type == 'objectgroup'){
					for (obj = 0; obj < layer.objects.length; obj++){
						entity = layer.objects[obj];
						for (x = 0; x < tilesets.length; x++){
							if(tilesets[x].firstgid > entity.gid){
								break;
							} else {
								tileset = tilesets[x];
							}
						}
						
						// Check Tiled data to find this object's type
						entityType = '';
						if(entity.type !== ''){
							entityType = entity.type;
						} else if(entity.name !== ''){
							entityType = entity.name;
						} else if(tileset.tileproperties[entity.gid - tileset.firstgid]){
							if(tileset.tileproperties[entity.gid - tileset.firstgid].entity){
								entityType = tileset.tileproperties[entity.gid - tileset.firstgid].entity;
							} else if (tileset.tileproperties[entity.gid - tileset.firstgid].type){
								entityType = tileset.tileproperties[entity.gid - tileset.firstgid].type;
							}
						}
						
						if(entityType !== ''){
							properties = {};
							//Copy properties from Tiled

							if(tileset.tileproperties && tileset.tileproperties[entity.gid - tileset.firstgid]){
								for (x in tileset.tileproperties[entity.gid - tileset.firstgid]){
									//This is going to assume that if you pass in something that starts with a number, it is a number and converts it to one.
									numberProperty = parseFloat(tileset.tileproperties[entity.gid - tileset.firstgid][x]);
									if (numberProperty == 0 || (!!numberProperty)) {
										properties[x] = numberProperty;
									} else if(tileset.tileproperties[entity.gid - tileset.firstgid][x] == 'true') {
										properties[x] = true;
									} else if(tileset.tileproperties[entity.gid - tileset.firstgid][x] == 'false') {
										properties[x] = false;
									} else {
										properties[x] = tileset.tileproperties[entity.gid - tileset.firstgid][x];
									}
								}
							}
							
							for (x in entity.properties){
								//This is going to assume that if you pass in something that starts with a number, it is a number and converts it to one.
							    numberProperty = parseFloat(entity.properties[x]);
								if (numberProperty == 0 || (!!numberProperty))
								{
									properties[x] = numberProperty;
								} else if(entity.properties[x] == 'true') {
									properties[x] = true;
								} else if(entity.properties[x] == 'false') {
									properties[x] = false;
								} else {
									properties[x] = entity.properties[x];
								}
							}
							widthOffset  = properties.width  = (entity.width  || tileWidth)  * this.unitsPerPixel;
							heightOffset = properties.height = (entity.height || tileHeight) * this.unitsPerPixel;
							if (entityType && platformer.game.settings.entities[entityType] && platformer.game.settings.entities[entityType].properties) {
								properties.width  = platformer.game.settings.entities[entityType].properties.width  || properties.width;
								properties.height = platformer.game.settings.entities[entityType].properties.height || properties.height;
							}

							properties.x = entity.x * this.unitsPerPixel;
							if(this.entityPositionX === 'left'){
								properties.regX = 0;
							} else if(this.entityPositionX === 'center'){
								properties.regX = properties.width / 2;
								properties.x += widthOffset / 2;
							} else if(this.entityPositionX === 'right'){
								properties.regX = properties.width;
								properties.x += widthOffset;
							}

							properties.y = entity.y * this.unitsPerPixel;
							if(typeof entity.gid === 'undefined'){
								properties.y += properties.height;
							}
							if(this.entityPositionY === 'bottom'){
								properties.regY = properties.height;
							} else if(this.entityPositionY === 'center'){
								properties.regY = properties.height / 2;
								properties.y -= heightOffset / 2;
							} else if(this.entityPositionY === 'top'){
								properties.regY = 0;
								properties.y -= heightOffset;
							}

							properties.scaleX = this.imagesScale;//this.unitsPerPixel;
							properties.scaleY = this.imagesScale;//this.unitsPerPixel;
							properties.layerZ = this.layerZ;
							
							//Setting the z value. All values are getting added to the layerZ value.
							if (properties.z) {
								properties.z += this.layerZ;
							} else if (entityType && platformer.game.settings.entities[entityType] && platformer.game.settings.entities[entityType].properties && platformer.game.settings.entities[entityType].properties.z) {
								properties.z = this.layerZ + platformer.game.settings.entities[entityType].properties.z;
							} else {
								properties.z = this.layerZ;
							}
							
							properties.parent = this.owner;
							entity = this.owner.addEntity(new platformer.classes.entity(platformer.game.settings.entities[entityType], {properties:properties}));
							if(entity){
								if(entity.camera){
									this.followEntity = {entity: entity, mode: entity.camera}; //used by camera
								}
							}
						}
					}
					this.layerZ += this.layerZStep;
					return false;
				}
			},
			
			"destroy": function(){
				this.entities.length = 0;
			}
		}
	});
})();


/*--------------------------------------------------
 *   handler-render-createjs - ../engine/components/handler-render-createjs.js
 */
/**
# COMPONENT **handler-render-createjs**
A component that handles updating rendering for components that are rendering via createjs. Each tick it calls all the entities that accept 'handle-render' messages.

## Dependencies
- **Needs a 'tick' or 'render' call** - This component doesn't need a specific component, but it does require a 'tick' or 'render' call to function. It's usually used as a component of an action-layer.
- [createjs.EaselJS][link1] - This component requires the EaselJS library to be included for canvas functionality.

## Messages

### Listens for:
- **child-entity-added** - Called when a new entity has been added to the parent and should be considered for addition to the handler. If the entity has a 'handle-render' or 'handle-render-load' message id it's added to the list of entities. Entities are sent a reference to the stage that we're rendering to, so they can add their display objects to it. 
  - @param entity (Object) - The entity that is being considered for addition to the handler.
- **tick, render** - Sends a 'handle-render' message to all the entities the component is handling. If an entity does not handle the message, it's removed it from the entity list. This function also sorts the display objects in the stage according to their z value. We detect when new objects are added by keeping track of the first element. If it changes the list gets resorted. Finally the whole stage is updated by CreateJS.
  - @param resp (object) - An object containing delta which is the time passed since the last tick. 
- **camera-update** - Called when the camera moves in the world, or if the window is resized. This function sets the canvas size and the stage transform.
  - @param cameraInfo (object) - An object containing the camera information. 

### Local Broadcasts:
- **mousedown** - This component captures this event on the canvas and triggers it on the entity.
  - @param event (event object) - The event from Javascript.
  - @param over (boolean) - Whether the mouse is over the object or not.
  - @param x (number) - The x-location of the mouse in stage coordinates.
  - @param y (number) - The y-location of the mouse in stage coordinates.
  - @param entity ([[Entity]]) - The entity clicked on.  
- **mouseup** - This component captures this event on the canvas and triggers it on the entity.
  - @param event (event object) - The event from Javascript.
  - @param over (boolean) - Whether the mouse is over the object or not.
  - @param x (number) - The x-location of the mouse in stage coordinates.
  - @param y (number) - The y-location of the mouse in stage coordinates.
  - @param entity ([[Entity]]) - The entity clicked on.  
- **mousemove** - This component captures this event on the canvas and triggers it on the entity.
  - @param event (event object) - The event from Javascript.
  - @param over (boolean) - Whether the mouse is over the object or not.
  - @param x (number) - The x-location of the mouse in stage coordinates.
  - @param y (number) - The y-location of the mouse in stage coordinates.
  - @param entity ([[Entity]]) - The entity clicked on.  

### Child Broadcasts:
- **handle-render** - Sent to entities to run their render for the tick.
  - @param object (object) - An object containing a delta variable that is the time that's passed since the last tick.
- **handle-render-load** - Sent to entities when they are added to the handler. Sends along the stage object so the entity can add its display objects. It also sends the parent DOM element of the canvas.
  - @param object.stage ([createjs.Stage][link2]) - The createjs stage object.
  - @param object.parentElement (object) - The DOM parent element of the canvas. 

## JSON Definition
    {
      "type": "handler-render-createjs",
      
      "acceptInput": {
      	//Optional - What types of input the object should take. This component defaults to not accept any input.
      	"touch": false, // Whether to listen for touch events (triggers mouse events)
      	"click": false, // Whether to listen for mouse events
      	"camera": false // Whether camera movement while the mouse (or touch) is triggered should result in a mousemove event
      },
      "autoClear": false, //By default this is set to false. If true the canvas will be cleared each tick.
      
      "buffer" : 12,		//The buffer area around the camera in which entities are rendered. This value changes the buffer in all directions. Defaults to the camera width / 12.
      "bufferWidth" : 12, 	//The buffer area around the camera in which entities are rendered. This value changes the buffer in width only and overrides the buffer value. Defaults to the camera width / 12.
      "bufferHeight" : 12, 	//The buffer area around the camera in which entities are rendered. This value changes the buffer in height only and overrides the buffer value. Defaults to the camera width / 12.
      "bufferLeft" : 12,	//The buffer area around the camera in which entities are rendered. This value changes the buffer at the left of the camera and overrides buffer and bufferWidth. Defaults to the camera width / 12.
      "bufferRight" : 12,	//The buffer area around the camera in which entities are rendered. This value changes the buffer at the right of the camera and overrides buffer and bufferWidth. Defaults to the camera width / 12.
      "bufferTop" : 12,		//The buffer area around the camera in which entities are rendered. This value changes the buffer at the top of the camera and overrides buffer and bufferHeight. Defaults to the camera width / 12.
      "bufferBottom" : 12	//The buffer area around the camera in which entities are rendered. This value changes the buffer at the bottom of the camera and overrides buffer and bufferHeight. Defaults to the camera width / 12.
    }
    
[link1]: http://www.createjs.com/Docs/EaselJS/module_EaselJS.html
[link2]: http://createjs.com/Docs/EaselJS/Stage.html
*/
(function(){

	return platformer.createComponentClass({

		id: "handler-render-createjs",
		
		constructor: function(definition){
			var self = this;
			
			this.entities = [];
			
			this.canvas = this.owner.canvas = document.createElement('canvas');
			this.owner.canvasParent = null;
			if(this.owner.element){
				this.owner.canvasParent = this.owner.element;
				this.owner.element.appendChild(this.canvas);
			} else {
				this.owner.canvasParent = this.owner.rootElement;
				this.owner.rootElement.appendChild(this.canvas);
				this.owner.element = this.canvas; 
			}
			
			this.stage = new createjs.Stage(this.canvas);
			
			if(definition.autoClear !== true){
				this.stage.autoClear = false; //since most tile maps are re-painted every time, the canvas does not require clearing.
			}
			
			// The following appends necessary information to displayed objects to allow them to receive touches and clicks
			if(definition.acceptInput){
				if(definition.acceptInput.click || definition.acceptInput.touch){
					this.setupInput(definition.acceptInput.touch, definition.acceptInput.camera);
				}
			}
			
			this.camera = {
				left: 0,
				top: 0,
				width: 0,
				height: 0,
				bufferLeft: 	definition.bufferLeft 	|| definition.bufferWidth || definition.buffer || -1,
				bufferRight: 	definition.bufferRight 	|| definition.bufferWidth || definition.buffer || -1,
				bufferTop: 		definition.bufferTop 	|| definition.bufferHeight || definition.buffer || -1,
				bufferBottom: 	definition.bufferBottom || definition.bufferHeight || definition.buffer || -1
			};
			
			this.timeElapsed = {
				name: 'Render',
				time: 0
			};
			
			this.renderMessage = {
				delta: 0,
				stage:  this.stage
			};
		},
		
		events:{
			"child-entity-added": function(entity){
				var self = this,
				messageIds = entity.getMessageIds(); 
				
				for (var x = 0; x < messageIds.length; x++)
				{
					if ((messageIds[x] == 'handle-render') || (messageIds[x] == 'handle-render-load')){
						this.entities.push(entity);
						entity.trigger('handle-render-load', {
							stage: self.stage,
							parentElement: self.owner.rootElement
						});
						break;
					}
				}
			},
			"pause-render": function(resp){
				if(resp && resp.time){
					this.paused = resp.time;
				} else {
					this.paused = -1;
				}
			},
			"unpause-render": function(){
				this.paused = 0;
			},
			"tick": (function(){
				var sort = function(a, b) {
					return a.z - b.z;
				};
				
				return function(resp){
					var child = undefined,
					time      = new Date().getTime(),
					message   = this.renderMessage;
					
					message.delta = resp.delta;

					if(this.paused > 0){
						this.paused -= resp.delta;
						if(this.paused < 0){
							this.paused = 0;
						}
					}

					for (var x = this.entities.length - 1; x > -1; x--){
						if(!this.entities[x].trigger('handle-render', message)) {
							this.entities.splice(x, 1);
						}
					}
					if(this.stage){
						for (var x = this.stage.children.length - 1; x > -1; x--){
							child = this.stage.children[x];
							if (child.hidden) {
								if(child.visible) child.visible = false;
							} else if(child.name !== 'entity-managed'){
								if((child.x >= this.camera.x - this.camera.bufferLeft) && (child.x <= this.camera.x + this.camera.width + this.camera.bufferRight) && (child.y >= this.camera.y - this.camera.bufferTop) && (child.y <= this.camera.y + this.camera.height + this.camera.bufferBottom)){
									if(!child.visible) child.visible = true;
								} else {
									if(child.visible) child.visible = false;
								}
							}
							
							if(child.visible){
								if (child.paused && !this.paused){
									child.paused = false;
								} else if (this.paused) {
									child.paused = true;
								}
							}
							
							if(!child.scaleX || !child.scaleY || (this.children && !this.children.length)){
								console.log ('uh oh', child);
//								this.cacheCanvas || this.children.length;
			//					return !!(this.visible && this.alpha > 0 && this.scaleX != 0 && this.scaleY != 0 && hasContent);
							}
						}

						if (this.stage.reorder) {
							this.stage.reorder = false;
							this.stage.sortChildren(sort);
						}
						
						this.timeElapsed.name = 'Render-Prep';
						this.timeElapsed.time = new Date().getTime() - time;
						platformer.game.currentScene.trigger('time-elapsed', this.timeElapsed);
						time += this.timeElapsed.time;

						this.stage.update(resp);
						this.timeElapsed.name = 'Render';
						this.timeElapsed.time = new Date().getTime() - time;
						platformer.game.currentScene.trigger('time-elapsed', this.timeElapsed);
					} 
				};
			})(),
			"camera-update": function(cameraInfo){
				var dpr = (window.devicePixelRatio || 1);
				
				this.camera.x = cameraInfo.viewportLeft;
				this.camera.y = cameraInfo.viewportTop;
				this.camera.width = cameraInfo.viewportWidth;
				this.camera.height = cameraInfo.viewportHeight;
				if(this.camera.bufferLeft == -1) {
					this.camera.bufferLeft = this.camera.width / 12; // sets a default buffer based on the size of the world units if the buffer was not explicitly set.
				}
				if(this.camera.bufferRight == -1) {
					this.camera.bufferRight = this.camera.width / 12; // sets a default buffer based on the size of the world units if the buffer was not explicitly set.
				}
				if(this.camera.bufferTop == -1) {
					this.camera.bufferTop = this.camera.width / 12; // sets a default buffer based on the size of the world units if the buffer was not explicitly set.
				}
				if(this.camera.bufferBottom == -1) {
					this.camera.bufferBottom = this.camera.width / 12; // sets a default buffer based on the size of the world units if the buffer was not explicitly set.
				}
				
				this.canvas.width  = this.canvas.offsetWidth * dpr;
				this.canvas.height = this.canvas.offsetHeight * dpr;
				this.stage.setTransform(-cameraInfo.viewportLeft * cameraInfo.scaleX * dpr, -cameraInfo.viewportTop * cameraInfo.scaleY * dpr, cameraInfo.scaleX * dpr, cameraInfo.scaleY * dpr);
				
				if(this.moveMouse){
					this.moveMouse(cameraInfo);
				}
			}
		},
		methods:{
			setupInput: function(enableTouch, cameraMovementMovesMouse){
				var self = this,
				originalEvent   = null,
				x        = 0,
				y        = 0,
				setXY   = function(event){
					originalEvent = event;
					x  = event.stageX / self.stage.scaleX + self.camera.x;
					y  = event.stageY / self.stage.scaleY + self.camera.y;
				},
				mousedown = function(event) {
					setXY(event);
					self.owner.trigger('mousedown', {
						event: event.nativeEvent,
						x: x,
						y: y,
						entity: self.owner
					});
					
					// This function is used to trigger a move event when the camera moves and the mouse is still triggered.
					if(cameraMovementMovesMouse){
						self.moveMouse = function(){
							setXY(originalEvent);
							self.owner.trigger('mousemove', {
								event: event.nativeEvent,
								x: x,
								y: y,
								entity: self.owner
							});
						};
					}
				},
				mouseup = function(event){
					setXY(event);
					self.owner.trigger('mouseup', {
						event: event.nativeEvent,
						x: x,
						y: y,
						entity: self.owner
					});
					if(cameraMovementMovesMouse){
						self.moveMouse = null;
					}
				},
				mousemove = function(event){
					setXY(event);
					if(event.nativeEvent.which || event.nativeEvent.touches){
						self.owner.trigger('mousemove', {
							event: event.nativeEvent,
							x: x,
							y: y,
							entity: self.owner
						});
					}
				};
				
				if(enableTouch && createjs.Touch.isSupported()){
					createjs.Touch.enable(this.stage);
				}

				this.stage.addEventListener('stagemousedown', mousedown);
				this.stage.addEventListener('stagemouseup', mouseup);
				this.stage.addEventListener('stagemousemove', mousemove);
				
				this.removeStageListeners = function(){
					this.stage.removeEventListener('stagemousedown', mousedown);
					this.stage.removeEventListener('stagemouseup', mouseup);
					this.stage.removeEventListener('stagemousemove', mousemove);
				};
			},
			
			destroy: function(){
				if(this.removeStageListeners){
					this.removeStageListeners();
				}
				this.stage = undefined;
				this.owner.canvasParent.removeChild(this.canvas);
				this.owner.canvasParent = null;
				this.owner.element = null;
				this.canvas = undefined;
				this.entities.length = 0;
			}
		}
	});
})();

/*--------------------------------------------------
 *   handler-render-dom - ../engine/components/handler-render-dom.js
 */
/**
# COMPONENT **handler-render-dom**
A component that handles the rendering of DOM elements. It creates a div element that it then shares with entities to add themselves too. It then alerts these entities when they should load and update their rendering.

## Dependencies
- **Needs a 'tick' or 'render' call** - This component doesn't need a specific component, but it does require a 'tick' or 'render' call to function. It's usually used as a component of an action-layer.

## Messages

### Listens for:
- **child-entity-added** - Called when a new entity has been added and should be considered for addition to the handler. If the entity has a 'handle-render' or 'handle-render-load' message id it's added to the list of entities. Also the 'handle-render-load' message is called immediately.
  - @param entity (Object) - The entity that is being considered for addition to the handler.
- **tick, render** - Sends a 'handle-render' message to all the entities the component is handling. If an entity does not handle the message, it's removed it from the entity list.
  - @param resp (object) - An object containing delta which is the time passed since the last tick. 

### Child Broadcasts:
- **handle-render-load** - Sent to an entity that has been added to the handler. Passes the entity a div element that it can add itself to.
  - @param obj.element (Object) - An object containing a DOM element that the entity should add child elements to.
- **handle-render** - Sent to entities to have them prepare to be rendered.
  - @param object - An object containing a delta variable that is the time that's passed since the last tick.

## JSON Definition
    {
      "type": "handler-render-dom",

      "className": "top-band",
      //Optional. Any standard properties of the element can be set by listing property names and their values. "className" is one example, but other element properties can be specified in the same way.
      
      "onmousedown": "turn-green",
      //Optional. If specified properties begin with "on", it is assumed that the property is an event handler and the listed value is broadcast as a message on the entity where the message object is the event handler's event object.
    }
*/

platformer.components['handler-render-dom'] = (function(){
	var component = function(owner, definition){
		this.owner = owner;
		this.entities = [];
		
		// Messages that this component listens for
		this.listeners = [];
		this.addListeners(['tick', 'child-entity-added', 'render']);
		
		this.element = this.owner.element = document.createElement('div');
		this.owner.rootElement.appendChild(this.element);
		this.owner.element = this.element;

		for(var i in definition){
			if(i === 'style'){
				for(var j in definition[i]){
					this.element.style[j] = definition[i][j]; 
				}
			} else if(i !== 'type'){
				if(i.indexOf('on') === 0){
					this.element[i] = createFunction(definition[i], this.owner);
				} else {
					this.element[i] = definition[i];
				}
			}
		}

	},
	proto = component.prototype; 

	proto['child-entity-added'] = function(entity){
		var self = this,
		messageIds = entity.getMessageIds(); 
		
		for (var x = 0; x < messageIds.length; x++)
		{
			if ((messageIds[x] == 'handle-render') || (messageIds[x] == 'handle-render-load')){
				this.entities.push(entity);
				entity.trigger('handle-render-load', {
					element: self.element
				});
				break;
			}
		}
	};
	
	proto['tick'] = proto['render'] = function(resp){
		for (var x = this.entities.length - 1; x > -1; x--)
		{
			if(!this.entities[x].trigger('handle-render', resp))
			{
				this.entities.splice(x, 1);
			}
			
		}
	};
	
	// This function should never be called by the component itself. Call this.owner.removeComponent(this) instead.
	proto.destroy = function(){
		this.removeListeners(this.listeners);
		this.owner.rootElement.removeChild(this.element);
		this.owner.element = null;
		this.element = undefined;
		this.entities.length = 0;
		this.owner = undefined;
	};
	
	/*********************************************************************************************************
	 * The stuff below here can be left alone. 
	 *********************************************************************************************************/
	
	proto.addListeners = function(messageIds){
		for(var message in messageIds) this.addListener(messageIds[message]);
	};

	proto.removeListeners = function(listeners){
		for(var messageId in listeners) this.removeListener(messageId, listeners[messageId]);
	};
	
	proto.addListener = function(messageId, callback){
		var self = this,
		func = callback || function(value, debug){
			self[messageId](value, debug);
		};
		this.owner.bind(messageId, func);
		this.listeners[messageId] = func;
	};

	proto.removeListener = function(boundMessageId, callback){
		this.owner.unbind(boundMessageId, callback);
	};
	
	return component;
})();


/*--------------------------------------------------
 *   handler-ai - ../engine/components/handler-ai.js
 */
/**
# COMPONENT **handler-ai**
A component that handles updating ai components. Each tick it calls all the entities that accept 'handle-ai' messages.

## Dependencies
- **Needs a 'tick' call** - This component doesn't need a specific component, but it does require a 'tick' call to function. It's usually used as a component of an action-layer.

## Messages

### Listens for:
- **child-entity-added** - Called when a new entity has been added and should be considered for addition to the handler. If the entity has a 'handle-ai' message id it's added to the list of entities. 
  - @param entity (Object) - The entity that is being considered for addition to the handler.
- **tick** - Sends a 'handle-ai' message to all the entities the component is handling. If an entity does not handle the message, it's removed it from the entity list.
  - @param obj (object) - An object containing delta which is the time passed since the last tick. 

### Child Broadcasts:
- **handle-ai** - Sent to entities to run their ai for the tick.
  - @param object - An object containing a delta variable that is the time that's passed since the last tick.

## JSON Definition
    {
      "type": "handler-ai",
    }
*/

platformer.components['handler-ai'] = (function(){
	var component = function(owner, definition){
		this.owner = owner;
		this.entities = [];
		
		// Messages that this component listens for
		this.listeners = [];
		this.addListeners(['child-entity-added', 'tick']);  
		
	};
	var proto = component.prototype; 

	proto['child-entity-added'] = function(entity){
		var self = this,
		messageIds = entity.getMessageIds(); 
		
		for (var x = 0; x < messageIds.length; x++)
		{
			if (messageIds[x] == 'handle-ai')
			{
				this.entities.push(entity);
				break;
			}
		}
	};

	proto['tick'] = function(obj){
		for (var x = this.entities.length - 1; x > -1; x--)
		{
			if(!this.entities[x].trigger('handle-ai', obj))
			{
				this.entities.splice(x, 1);
			}
		}
	};
	
	// This function should never be called by the component itself. Call this.owner.removeComponent(this) instead.
	proto.destroy = function(){
		this.removeListeners(this.listeners);
	};
	
	/*********************************************************************************************************
	 * The stuff below here will stay the same for all components. It's BORING!
	 *********************************************************************************************************/
	
	proto.addListeners = function(messageIds){
		for(var message in messageIds) this.addListener(messageIds[message]);
	};

	proto.removeListeners = function(listeners){
		for(var messageId in listeners) this.removeListener(messageId, listeners[messageId]);
	};
	
	proto.addListener = function(messageId, callback){
		var self = this,
		func = callback || function(value, debug){
			self[messageId](value, debug);
		};
		this.owner.bind(messageId, func);
		this.listeners[messageId] = func;
	};

	proto.removeListener = function(boundMessageId, callback){
		this.owner.unbind(boundMessageId, callback);
	};
	
	return component;
})();


/*--------------------------------------------------
 *   handler-logic - ../engine/components/handler-logic.js
 */
/**
# COMPONENT **handler-logic**
A component that handles updating logic components. Each tick it calls all the entities that accept 'handle-logic' messages.

## Dependencies
- **Needs a 'tick' or 'logic' call** - This component doesn't need a specific component, but it does require a 'tick' or 'logic' call to function. It's usually used as a component of an action-layer.

## Messages

### Listens for:
- **child-entity-added** - Called when a new entity has been added and should be considered for addition to the handler. If the entity has a 'handle-logic' message id it's added to the list of entities. 
  - @param entity (Object) - The entity that is being considered for addition to the handler.
- **tick** - Sends a 'handle-logic' message to all the entities the component is handling. If an entity does not handle the message, it's removed it from the entity list.
  - @param resp (object) - An object containing delta which is the time passed since the last tick. 
- **pause-logic** - `handle-logic` messages cease to be triggered on each tick
  - @param resp.time (number) - If set, this will pause the logic for this number of milliseconds. If not set, logic is paused until an `unpause-logic` message is triggered. 
- **unpause-logic** - `handle-logic` messages begin firing each tick.
- **camera-update** - Changes the active logic area when the camera location changes.
  - @param resp.viewportLeft (number) - The left side of the camera viewport in world units. 
  - @param resp.viewportTop (number) - The top side of the camera viewport in world units. 
  - @param resp.viewportWidth (number) - The width of the camera viewport in world units. 
  - @param resp.viewportHeight (number) - The height of the camera viewport in world units. 

### Child Broadcasts:
- **handle-logic** - Sent to entities to run their logic.
  - @param object - An object containing a delta variable that is the time that's passed since the last tick.

## JSON Definition
    {
      "type": "handler-logic",
      
      "buffer" : 12,		//The buffer area around the camera in which entity logic is active. This value changes the buffer in all directions. Defaults to the camera width / 10.
      "bufferWidth" : 12, 	//The buffer area around the camera in which entity logic is active. This value changes the buffer in width only and overrides the buffer value. Defaults to the camera width / 10.
      "bufferHeight" : 12, 	//The buffer area around the camera in which entity logic is active. This value changes the buffer in height only and overrides the buffer value. Defaults to the camera width / 10.
      "bufferLeft" : 12,	//The buffer area around the camera in which entity logic is active. This value changes the buffer at the left of the camera and overrides buffer and bufferWidth. Defaults to the camera width / 10.
      "bufferRight" : 12,	//The buffer area around the camera in which entity logic is active. This value changes the buffer at the right of the camera and overrides buffer and bufferWidth. Defaults to the camera width / 10.
      "bufferTop" : 12,		//The buffer area around the camera in which entity logic is active. This value changes the buffer at the top of the camera and overrides buffer and bufferHeight. Defaults to the camera width / 10.
      "bufferBottom" : 12	//The buffer area around the camera in which entity logic is active. This value changes the buffer at the bottom of the camera and overrides buffer and bufferHeight. Defaults to the camera width / 10.
    }
*/

(function(){
	var updateState = function(entity){
		var state = null,
		changed   = false;
		
		for (state in entity.state){
			if (entity.state[state] !== entity.lastState[state]){
				entity.lastState[state] = entity.state[state];
				changed = true;
			}
		}
		
		return changed;
	};

	return platformer.createComponentClass({
		id: "handler-logic",
	
		constructor: function(definition){
			this.entities = [];
			this.activeEntities = this.entities;
			
			this.paused = 0;
			this.stepLength    = definition.stepLength || 30;//15;
			this.leftoverTime = 0;
			this.maximumStepsPerTick = 10; //Math.ceil(500 / this.stepLength);
			this.camera = {
				left: 0,
				top: 0,
				width: 0,
				height: 0,
				bufferLeft: 	definition.bufferLeft 	|| definition.bufferWidth || definition.buffer || -1,
				bufferRight: 	definition.bufferRight 	|| definition.bufferWidth || definition.buffer || -1,
				bufferTop: 		definition.bufferTop 	|| definition.bufferHeight || definition.buffer || -1,
				bufferBottom: 	definition.bufferBottom || definition.bufferHeight || definition.buffer || -1,
				active: false
			};
			this.message = {
				delta: this.stepLength,
				tick: null,
				camera: this.camera,
				movers: this.activeEntities
			};
			this.timeElapsed = {
				name: 'Logic',
				time: 0
			};
		},
		
		events:{
			"child-entity-added": function(entity){
				var messageIds = entity.getMessageIds(); 
				
				for (var x = 0; x < messageIds.length; x++)
				{
					if (messageIds[x] == 'handle-logic'){
						this.entities.push(entity);
						this.updateNeeded = this.camera.active;
						break;
					}
				}
			},

			"pause-logic": function(resp){
				if(resp && resp.time){
					this.paused = resp.time;
				} else {
					this.paused = -1;
				}
//				console.log('paused-logic');
			},
			"unpause-logic": function(){
				this.paused = 0;
			},

			"camera-update": function(camera){
				this.camera.left = camera.viewportLeft;
				this.camera.top = camera.viewportTop;
				this.camera.width = camera.viewportWidth;
				this.camera.height = camera.viewportHeight;
				
				if(this.camera.bufferLeft == -1) {
					this.camera.bufferLeft = this.camera.width / 10; // sets a default buffer based on the size of the world units if the buffer was not explicitly set.
				}
				if(this.camera.bufferRight == -1) {
					this.camera.bufferRight = this.camera.width / 10; // sets a default buffer based on the size of the world units if the buffer was not explicitly set.
				}
				if(this.camera.bufferTop == -1) {
					this.camera.bufferTop = this.camera.width / 10; // sets a default buffer based on the size of the world units if the buffer was not explicitly set.
				}
				if(this.camera.bufferBottom == -1) {
					this.camera.bufferBottom = this.camera.width / 10; // sets a default buffer based on the size of the world units if the buffer was not explicitly set.
				}
				
				this.camera.active = true;
				
				this.updateNeeded = true;
			},

			"tick": function(resp){
				var cycles = 0,
				child   = undefined,
				time    = new Date().getTime();
				
				this.leftoverTime += resp.delta;
				cycles = Math.floor(this.leftoverTime / this.stepLength) || 1;
		
				// This makes the frames smoother, but adds variance into the calculations
		//		this.message.delta = this.leftoverTime / cycles;
		//		this.leftoverTime = 0;
				
				// This makes the frames more exact, but varying step numbers between ticks can cause movement to be jerky
				this.message.delta = Math.min(this.leftoverTime, this.stepLength);
				this.leftoverTime = Math.max(this.leftoverTime - (cycles * this.stepLength), 0);
		
				if(this.paused > 0){
					this.paused -= resp.delta;
					if(this.paused < 0){
						this.paused = 0;
					}
				}
				
				if(!this.paused) {
					if(!this.message.tick){
						this.message.tick = resp;
					}
					
					//if(this.updateNeeded){//causes blocks to fall through dirt - not sure the connection here, so leaving out this optimization for now. - DDD
						if(this.activeEntities === this.entities){
							this.message.movers = this.activeEntities = [];
						}
						
						this.activeEntities.length = 0;
						for (var j = this.entities.length - 1; j > -1; j--) {
							child = this.entities[j];
							if(child.alwaysOn || (typeof child.x === 'undefined') || ((child.x >= this.camera.left - this.camera.bufferLeft) && (child.x <= this.camera.left + this.camera.width + this.camera.bufferRight) && (child.y >= this.camera.top - this.camera.bufferTop) && (child.y <= this.camera.top + this.camera.height + this.camera.bufferBottom))){
								this.activeEntities.push(child);
							}
						}
					//}
					
					//Prevents game lockdown when processing takes longer than time alotted.
					cycles = Math.min(cycles, this.maximumStepsPerTick);
					
					for(var i = 0; i < cycles; i++){
						for (var j = this.activeEntities.length - 1; j > -1; j--) {
							child = this.activeEntities[j];
							if(child.triggerEvent('handle-logic', this.message)){
								if(updateState(child)){
									child.trigger('logical-state', child.state);
								}
								child.checkCollision = true;
							} else {
								for (var k = this.entities.length - 1; k > -1; k--) {
								    if(this.entities[k] === this.activeEntities[j]){
								    	this.entities.splice(k, 1);
								    	this.updateNeeded = this.camera.active;
								    	break;
								    }
								}
							}
						}
						
						this.timeElapsed.name = 'Logic';
						this.timeElapsed.time = new Date().getTime() - time;
						platformer.game.currentScene.trigger('time-elapsed', this.timeElapsed);
						time += this.timeElapsed.time;
						
						this.owner.trigger('check-collision-group', this.message); // If a collision group is attached, make sure collision is processed on each logic tick.

						this.timeElapsed.name = 'Collision';
						this.timeElapsed.time = new Date().getTime() - time;
						platformer.game.currentScene.trigger('time-elapsed', this.timeElapsed);
						time += this.timeElapsed.time;
					}
				}
				
				this.timeElapsed.time = new Date().getTime() - time;
				platformer.game.currentScene.trigger('time-elapsed', this.timeElapsed);
			}
		}
	});
})();

/*--------------------------------------------------
 *   camera - ../engine/components/camera.js
 */
/**
# COMPONENT **camera**
This component controls the game camera deciding where and how it should move. The camera also broadcasts messages when the window resizes or its orientation changes.

If either worldWidth and worldHeight is set to 0 it is assumed the world is infinite in that dimension. 

## Dependencies:
- **rootElement** property (on entity) - This component requires a DOM element which it uses as the "window" determining the camera's aspect ratio and size.

## Messages

### Listens for:
- **tick, camera** - On a `tick` or `camera` step message, the camera updates its location according to its current state.
  - @param message.delta - If necessary, the current camera update function may require the length of the tick to adjust movement rate.
- **follow** - On receiving this message, the camera begins following the requested object.
  - @param message.mode (string) - Required. Can be "locked", "forward", "bounding", or "static". "static" suspends following, but the other three settings require that the entity parameter be defined. Also set the bounding area parameters if sending "bounding" as the following method and the movement parameters if sending "forward" as the following method.
  - @param message.entity ([[Entity]]) - The entity that the camera should commence following.
  - @param message.top (number) - The top of a bounding box following an entity.
  - @param message.left (number) - The left of a bounding box following an entity.
  - @param message.width (number) - The width of a bounding box following an entity.
  - @param message.height (number) - The height of a bounding box following an entity.
  - @param message.movementX (number) - Movement multiplier for focusing the camera ahead of a moving entity in the horizontal direction.
  - @param message.movementY (number) - Movement multiplier for focusing the camera ahead of a moving entity in the vertical direction.
  - @param message.offsetX (number) - How far to offset the camera from the entity horizontally.
  - @param message.offsetY (number) - How far to offset the camera from the entity vertically.
  - @param message.time (number) - How many milliseconds to follow the entity.
- **resize, orientationchange** - The camera listens for these events passed along from [[Game]] (who receives them from `window`). It adjusts the camera viewport according to the new size and position of the window.
- **world-loaded** - On receiving this message, the camera updates its world location and size as necessary. An example of this message is triggered by the [[Tiled-Loader]] component.
  - @param message.width (number) - Optional. The width of the loaded world.
  - @param message.height (number) - Optional. The height of the loaded world.
  - @param message.camera ([[Entity]]) - Optional. An entity that the camera should follow in the loaded world.
- **child-entity-added** - If children entities are listening for a `camera-update` message, they are added to an internal list.
  - @param message ([[Entity]]} - Expects an entity as the message object to determine whether to trigger `camera-update` on it.
- **child-entity-removed** - If children are removed from the entity, they are also removed from this component.
  - @param message ([[Entity]]} - Expects an entity as the message object to determine the entity to remove from its list.

### Child Broadcasts:
- **camera-loaded** - On receiving a "world-loaded" message, the camera broadcast the world size to all children in the world.
  - @param message.width (number) - The width of the loaded world.
  - @param message.height (number) - The height of the loaded world.
- **camera-update** - This component fires this message when the position of the camera in the world has changed.
  - @param message.viewportTop (number) - The top of the camera viewport in world coordinates.
  - @param message.viewportLeft (number) - The left of the camera viewport in world coordinates.
  - @param message.viewportWidth (number) - The width of the camera viewport in world coordinates.
  - @param message.viewportHeight (number) - The height of the camera viewport in world coordinates.
  - @param message.scaleX (number) - Number of window pixels that comprise a single world coordinate on the x-axis.
  - @param message.scaleY (number) - Number of window pixels that comprise a single world coordinate on the y-axis.

### Local Broadcasts:
- **camera-stationary** - This event is triggered when the camera stops moving.
- **camera-update** - This component fires this message when the position of the camera in the world has changed or if the window has been resized.
  - @param message.viewportTop (number) - The top of the camera viewport in world coordinates.
  - @param message.viewportLeft (number) - The left of the camera viewport in world coordinates.
  - @param message.viewportWidth (number) - The width of the camera viewport in world coordinates.
  - @param message.viewportHeight (number) - The height of the camera viewport in world coordinates.
  - @param message.scaleX (number) - Number of window pixels that comprise a single world coordinate on the x-axis.
  - @param message.scaleY (number) - Number of window pixels that comprise a single world coordinate on the y-axis.

## JSON Definition:
    {
      "type": "camera",
      
      "top": 100,
      // Optional number specifying top of viewport in world coordinates
      
      "left": 100,
      // Optional number specifying left of viewport in world coordinates
      
      "width": 100,
      // Optional number specifying width of viewport in world coordinates
      
      "height": 100,
      // Optional number specifying height of viewport in world coordinates
      
      "worldWidth": 800,
      // Optional number specifying width of the world in units. Defaults to 0.
      
      "worldHeight": 100,
      // Optional number specifying height of the world in units. Defaults to 0.
      
      "stretch": true,
      // Optional boolean value that determines whether the camera should stretch the world viewport when window is resized. Defaults to false which maintains the proper aspect ratio.
      
      "scaleWidth": 480,
      // Optional. Sets the size in window coordinates at which the world zoom should snap to a larger multiple of pixel size (1,2, 3, etc). This is useful for maintaining a specific game pixel viewport width on pixel art games so pixels use multiples rather than smooth scaling. Default is 0 which causes smooth scaling of the game world in a resizing viewport.
      
      "transitionX": 400,
      // Optional. Sets how quickly the camera should pan to a new position in the horizontal direction. Default is 400.
      
      "transitionY": 400,
      // Optional. Sets how quickly the camera should pan to a new position in the vertical direction. Default is 600.
      
      "threshold": 3
      // Optional. Sets how many units the followed entity can move before the camera will re-center. Default is 1.
    }
*/
(function(){
	var resize = function (self){
		
		//The dimensions of the camera in the window
		self.window.viewportTop = self.element.offsetTop;
		self.window.viewportLeft = self.element.offsetLeft;
		self.window.viewportWidth = self.element.offsetWidth || self.worldWidth;
		self.window.viewportHeight = self.element.offsetHeight || self.worldHeight;

		if(self.scaleWidth){
			self.world.viewportWidth = self.window.viewportWidth / Math.ceil(self.window.viewportWidth / self.scaleWidth);
		}
		
		if(!self.stretch || self.scaleWidth){
			self.world.viewportHeight = self.window.viewportHeight * self.world.viewportWidth / self.window.viewportWidth;
		}
		
		self.worldPerWindowUnitWidth  = self.world.viewportWidth / self.window.viewportWidth;
		self.worldPerWindowUnitHeight = self.world.viewportHeight / self.window.viewportHeight;
		self.windowPerWorldUnitWidth  = self.window.viewportWidth / self.world.viewportWidth;
		self.windowPerWorldUnitHeight = self.window.viewportHeight/ self.world.viewportHeight;
		
		self.viewportUpdate = true;
	};

	return platformer.createComponentClass({
		id: 'camera',
		constructor: function(definition){
			this.entities = [];

			// on resize should the view be stretched or should the world's initial aspect ratio be maintained?
			this.stretch = definition.stretch || false;
			
			this.transitionX = definition.transitionX || definition.transition;
			this.transitionY = definition.transitionY || definition.transition;
			if(isNaN(this.transitionX)){
				this.transitionX = 400;
			}
			if(isNaN(this.transitionY)){
				this.transitionY = 600;
			}

			this.threshold = definition.threshold || 1;
			this.element = null;
	
			//The dimensions of the camera in the window
			this.window = {
				viewportTop:    0,
				viewportLeft:   0,
				viewportWidth:  0,
				viewportHeight: 0
			};
			
			//The dimensions of the camera in the game world
			this.world = {
				viewportWidth:       definition.width       || 0,
				viewportHeight:      definition.height      || 0,
				viewportLeft:        definition.left        || 0,
				viewportTop:         definition.top         || 0
			};
			
			this.message = { //defined here so it can be reused
				viewportWidth:  0,
				viewportHeight: 0,
				viewportLeft:   0,
				viewportTop:    0,
				scaleX: 0,
				scaleY: 0
			};
	
			// on resize should the game snap to certain sizes or should it be fluid?
			// 0 == fluid scaling
			// set the windowWidth multiple that triggers zooming in
			this.scaleWidth = definition.scaleWidth || 0;
			
			//Whether the map has finished loading.
			this.worldIsLoaded = false;
			// The dimensions of the entire world
			this.worldWidth  = definition.worldWidth  || 0;
			this.worldHeight = definition.worldHeight || 0;
			
			this.following = undefined;
			this.state = 'static';//'roaming';
			
			//FOLLOW MODE VARIABLES
			
			//--Bounding
			this.bBBorderX = 0;
			this.bBBorderY = 0;
			this.bBInnerWidth = 0;
			this.bBInnerHeight = 0;
			this.setBoundingArea();
			
			//Forward Follow
			this.lastLeft = this.world.viewportLeft;
			this.lastTop = this.world.viewportTop;
			this.forwardX = 0;
			this.forwardY = 0;
			this.averageOffsetX = 0;
			this.averageOffsetY = 0;
			this.offsetX = 0;
			this.offsetY = 0;
			this.forwardFollower = {
				x: this.lastLeft,
				y: this.lastTop
			};
			
			this.lastFollow = {
				entity: null,
				mode: null,
				offsetX: 0,
				offsetY: 0,
				begin: 0
			};
			
			this.direction = true;
			this.stationary = false;
			
			this.viewportUpdate = false;
		},
		events: {
			"load": function(){
				this.element = this.owner.canvas || this.owner.element || this.owner.rootElement;
				this.resize();
			},
			"child-entity-added": function(entity){
				var messageIds = entity.getMessageIds(); 
				
				for (var x = 0; x < messageIds.length; x++)
				{
					if (messageIds[x] == 'camera-update') {
						this.entities.push(entity);
						this.viewportUpdate = true;
						
						if(this.worldIsLoaded){
							entity.trigger('camera-loaded', {
								width: this.worldWidth,
								height: this.worldHeight
							});
						}

						break;
					}
				}
			},
			"child-entity-removed": function(entity){
				var x = 0;

				for (x in this.entities) {
					if(this.entities[x] === entity){
						this.entities.splice(x, 1);
						break;
					}
				}
			},
			"world-loaded": function(values){
				this.worldIsLoaded = true;
				this.worldWidth   = this.owner.worldWidth  = values.width;
				this.worldHeight  = this.owner.worldHeight = values.height;
				if(values.camera){
					this.follow(values.camera);
				}
				for (var x = this.entities.length - 1; x > -1; x--) {
					this.entities[x].trigger('camera-loaded', values);
				}
			},
			"tick": function(resp){				
				switch (this.state)
				{
				case 'following':
					if (this.followingFunction(this.following, resp.delta)) {
						this.viewportUpdate = true;
					}
					break;
				case 'static':
				default:
					break;
				}
				
				if(this.viewportUpdate){
					this.viewportUpdate = false;
					this.stationary = false;
					
					this.message.viewportLeft   = this.world.viewportLeft;
					this.message.viewportTop    = this.world.viewportTop;
					this.message.viewportWidth  = this.world.viewportWidth;
					this.message.viewportHeight = this.world.viewportHeight;
					this.message.scaleX         = this.windowPerWorldUnitWidth;
					this.message.scaleY         = this.windowPerWorldUnitHeight;
					
					this.owner.trigger('camera-update', this.message);

					
					for (var x = this.entities.length - 1; x > -1; x--)
					{
						if(!this.entities[x].trigger('camera-update', this.message)){
							this.entities.splice(x, 1);
						}
					}
					
				} else if (!this.stationary){
					this.owner.trigger('camera-stationary', this.message);
					this.stationary = true;
				}
				
				if(this.lastFollow.begin){
					if(this.lastFollow.begin < new Date().getTime()){
						this.follow(this.lastFollow);
					}
				}
			},
			"resize": function(){
				resize(this);
			},
			"relocate": function(loc){
				if (this.move(loc.x, loc.y)) {
					this.viewportUpdate = true;
				}
				
			},
			"orientationchange": function(){
				resize(this);
			},
			"follow": function (def){
				if (def.time){ //save current follow
					if(!this.lastFollow.begin){
						this.lastFollow.entity = this.following;
						this.lastFollow.mode   = this.mode;
						this.lastFollow.offsetX = this.offsetX;
						this.lastFollow.offsetY = this.offsetY;
					}
					this.lastFollow.begin  = new Date().getTime() + def.time;
				} else {
					if(this.lastFollow.begin){
						this.lastFollow.begin = 0;
					}
				}
				
				this.mode = def.mode;
				
				switch (def.mode) {
				case 'locked':
					this.state = 'following';
					this.following = def.entity;
					this.followingFunction = this.lockedFollow;
					this.offsetX = def.offsetX || 0;
					this.offsetY = def.offsetY || 0;
					break;
				case 'forward':
					this.state = 'following';
					this.followFocused = false;
					this.following = def.entity;
					this.lastLeft  = def.entity.x;
					this.lastTop   = def.entity.y;
					this.forwardX  = def.movementX || (this.transitionX / 10);
					this.forwardY  = def.movementY || 0;
					this.averageOffsetX = 0;
					this.averageOffsetY = 0;
					this.offsetX = def.offsetX || 0;
					this.offsetY = def.offsetY || 0;
					this.followingFunction = this.forwardFollow;
					break;
				case 'bounding':
					this.state = 'following';
					this.following = def.entity;
					this.offsetX = def.offsetX || 0;
					this.offsetY = def.offsetY || 0;
					this.setBoundingArea(def.top, def.left, def.width, def.height);
					this.followingFunction = this.boundingFollow;
					break;
				case 'static':
				default:
					this.state = 'static';
					this.following = undefined;
					this.followingFunction = undefined;
					break;
				}
				
				if(def.begin){ // get rid of last follow
					def.begin = 0;
				}

			}
		},
		
		methods: {
			move: function (newLeft, newTop){
				var moved = this.moveLeft(newLeft);
				moved = this.moveTop(newTop) || moved;
				return moved;
			},
			
			moveLeft: function (newLeft){
				if(Math.abs(this.world.viewportLeft - newLeft) > this.threshold){
					if (this.worldWidth && this.worldWidth != 0 && this.worldWidth < this.world.viewportWidth){
						this.world.viewportLeft = (this.worldWidth - this.world.viewportWidth) / 2;
					} else if (this.worldWidth && this.worldWidth != 0 && (newLeft + this.world.viewportWidth > this.worldWidth)) {
						this.world.viewportLeft = this.worldWidth - this.world.viewportWidth;
					} else if (this.worldWidth && this.worldWidth != 0 && (newLeft < 0)) {
						this.world.viewportLeft = 0; 
					} else {
						this.world.viewportLeft = newLeft;
					}
					return true;
				}
				return false;
			},
			
			moveTop: function (newTop) {
				if(Math.abs(this.world.viewportTop - newTop) > this.threshold){
					if (this.worldHeight && this.worldHeight != 0 && this.worldHeight < this.world.viewportHeight){
						this.world.viewportTop = (this.worldHeight - this.world.viewportHeight) / 2;
					} else if (this.worldHeight && this.worldHeight != 0 && (newTop + this.world.viewportHeight > this.worldHeight)) {
						this.world.viewportTop = this.worldHeight - this.world.viewportHeight;
					} else if (this.worldHeight && this.worldHeight != 0 && (newTop < 0)) {
						this.world.viewportTop = 0; 
					} else {
						this.world.viewportTop = newTop;
//						console.log(newTop + ',' + this.world.viewportHeight + ',' + this.worldHeight);
					}
					return true;
				}
				return false;
			},
			
			lockedFollow: function (entity, time, slowdown){
				var newLeft = entity.x - (this.world.viewportWidth / 2),
				newTop      = entity.y - (this.world.viewportHeight / 2),
				ratioX      = (this.transitionX?Math.min(time / this.transitionX, 1):1),
				iratioX     = 1 - ratioX,
				ratioY      = (this.transitionY?Math.min(time / this.transitionY, 1):1),
				iratioY     = 1 - ratioY;

				return this.move(ratioX * newLeft + iratioX * this.world.viewportLeft, ratioY * newTop + iratioY * this.world.viewportTop);
			},
			
			forwardFollow: function (entity, time){
				var ff = this.forwardFollower,
				standardizeTimeDistance = 15 / time, //This allows the camera to pan appropriately on slower devices or longer ticks
				moved  = false,
				x = entity.x + this.offsetX,
				y = entity.y + this.offsetY;
				
				if(this.followFocused && (this.lastLeft === x) && (this.lastTop === y)){
//					ff.x = this.world.viewportLeft + (this.world.viewportWidth  / 2); 
//					ff.y = this.world.viewportTop  + (this.world.viewportHeight / 2); 

					return this.lockedFollow(ff, time);
				} else {
					// span over last 10 ticks to prevent jerkiness
					this.averageOffsetX *= 0.9;
					this.averageOffsetY *= 0.9;
					this.averageOffsetX += 0.1 * (x - this.lastLeft) * standardizeTimeDistance;
					this.averageOffsetY += 0.1 * (y - this.lastTop)  * standardizeTimeDistance;

					if (Math.abs(this.averageOffsetX) > (this.world.viewportWidth / (this.forwardX * 2))){
						this.averageOffsetX = 0;
					}
					if (Math.abs(this.averageOffsetY) > (this.world.viewportHeight / (this.forwardY * 2))){
						this.averageOffsetY = 0;
					}
					
					ff.x = this.averageOffsetX * this.forwardX + x;
					ff.y = this.averageOffsetY * this.forwardY + y;
					
					this.lastLeft = x;
					this.lastTop  = y;
					
					moved = this.lockedFollow(ff, time);

					if(!this.followFocused && !moved){
						this.followFocused = true;
					}
					
					return moved;
				}
				
				
			},
			
			setBoundingArea: function (top, left, width, height){
				this.bBBorderY = (typeof top !== 'undefined') ? top : this.world.viewportHeight  * 0.25;
				this.bBBorderX = (typeof left !== 'undefined') ? left : this.world.viewportWidth * 0.4;
				this.bBInnerWidth = (typeof width !== 'undefined') ? width : this.world.viewportWidth - (2 * this.bBBorderX);
				this.bBInnerHeight = (typeof height !== 'undefined') ? height : this.world.viewportHeight - (2 * this.bBBorderY);
			},
			
			boundingFollow: function (entity, time){
				var newLeft = null,
				newTop      = null,
				ratioX      = (this.transitionX?Math.min(time / this.transitionX, 1):1),
				iratioX     = 1 - ratioX,
				ratioY      = (this.transitionY?Math.min(time / this.transitionY, 1):1),
				iratioY     = 1 - ratioY;
				
				if (entity.x > this.world.viewportLeft + this.bBBorderX + this.bBInnerWidth){
					newLeft = entity.x -(this.bBBorderX + this.bBInnerWidth);
				} else if (entity.x < this.world.viewportLeft + this.bBBorderX) {
					newLeft = entity.x - this.bBBorderX;
				}
				
				if (entity.y > this.world.viewportTop + this.bBBorderY + this.bBInnerHeight){
					newTop = entity.y - (this.bBBorderY + this.bBInnerHeight);
				} else if (entity.y < this.world.viewportTop + this.bBBorderY) {
					newTop = entity.y - this.bBBorderY;
				}
				
				if (typeof newLeft !== 'null'){
					newLeft = this.moveLeft(ratioX * newLeft + iratioX * this.world.viewportLeft);
				}
				
				if (typeof newTop !== 'null'){
					newTop = this.moveTop(ratioY * newTop + iratioY * this.world.viewportTop);
				}
				
				return newLeft || newTop;
			},
			
			windowToWorld: function (sCoords){
				var wCoords = [];
				wCoords[0] = Math.round((sCoords[0] - this.window.viewportLeft) * this.worldPerWindowUnitWidth);
				wCoords[1] = Math.round((sCoords[1] - this.window.viewportTop)  * this.worldPerWindowUnitHeight);
				return wCoords; 
			},
			
			worldToWindow: function (wCoords){
				var sCoords = [];
				sCoords[0] = Math.round((wCoords[0] * this.windowPerWorldUnitWidth) + this.window.viewportLeft);
				sCoords[1] = Math.round((wCoords[1] * this.windowPerWorldUnitHeight) + this.window.viewportTop);
				return sCoords;
			},
			
			destroy: function(){
				this.entities.length = 0;
			}
		}
	});
})();


/*--------------------------------------------------
 *   collision-group - ../engine/components/collision-group.js
 */
/**
# COMPONENT **collision-group**
This component groups other entities with this entity for collision checking. This is useful for carrying and moving platforms. It uses `entity-container` component messages if triggered to add to its collision list and also listens for explicit add/remove messages (useful in the absence of an `entity-container` component).

## Dependencies:
- [[handler-collision]] (on entity's parent) - The collision handler uses the methods this component exposes to perform collision for this entity as a group before performing collision on each entity in the group.

## Messages

### Listens for:
- **child-entity-added, add-collision-entity** - On receiving this message, the component checks the entity to determine whether it listens for collision messages. If so, the entity is added to the collision group.
  - @param message ([[Entity]] object) - The entity to be added.
- **child-entity-removed, remove-collision-entity** - On receiving this message, the component looks for the entity in its collision group and removes it.
  - @param message ([[Entity]] object) - The entity to be removed.
- **relocate-entity** - When this message is triggered, the collision group updates its record of the owner's last (x, y) coordinate.

## JSON Definition:
    {
      "type": "collision-group"
      // This component has no customizable properties.
    }
*/
(function(){
	//set here to make them reusable objects
	var appendUniqueItems = function(hostArray, insertArray){
		var i  = 0,
		j      = 0,
		length = hostArray.length,
		found  = false;
		
		for(; i < insertArray.length; i++){
			found = false;
			for(j = 0; j < length; j++){
				if(insertArray[i] === hostArray[j]){
					found = true;
					break;
				}
			}
			if(!found){
				hostArray.push(insertArray[i]);
			}
		}
		
		return hostArray;
	};
	
	return platformer.createComponentClass({
		id: 'collision-group',
		
		constructor: function(definition){
			var self = this;
			
			this.solidEntities = [];
			
			this.terrain = undefined;
			this.aabb     = new platformer.classes.aABB(this.owner.x, this.owner.y);
			this.prevAABB = new platformer.classes.aABB(this.owner.x, this.owner.y);
			this.owner.previousX = this.owner.previousX || this.owner.x;
			this.owner.previousY = this.owner.previousY || this.owner.y;
			
			this.collisionGroup = this.owner.collisionGroup = {
				getAllEntities: function(){
					var count = 0,
					childEntity = null;
					
					for (var x = 0; x < self.solidEntities.length; x++){
						childEntity = self.solidEntities[x];
						if((childEntity !== self.owner) && childEntity.collisionGroup){
							count += childEntity.collisionGroup.getAllEntities();
						} else {
							count += 1;
						}
					}

					return count;
				},
				getSize: function(){
					return self.solidEntities.length;
				},
				getCollisionTypes: function(){
					return self.getCollisionTypes();
				},
				getSolidCollisions: function(){
					return self.getSolidCollisions();
				},
				getAABB: function(collisionType){
					return self.getAABB(collisionType);
				},
				getPreviousAABB: function(collisionType){
					return self.getPreviousAABB(collisionType);
				},
				getShapes: function(collisionType){
					return self.getShapes(collisionType);
				},
				getPrevShapes: function(collisionType){
					return self.getPrevShapes(collisionType);
				},
				prepareCollision: function(x, y){
					return self.prepareCollision(x, y);
				},
				relocateEntity: function(x, y, collisionData){
					return self.relocateEntity(x, y, collisionData);
				},
				movePreviousX: function(x){
					return self.movePreviousX(x);
				},
				getSolidEntities: function(){
					return self.solidEntities;
				},
				jumpThrough: false //TODO: this introduces odd behavior - not sure how to resolve yet. - DDD
			};
		},
		
		events:{
			"child-entity-added": function(entity){
				this['add-collision-entity'](entity);
			},
			
			"add-collision-entity": function(entity){
				var i = 0,
				types = entity.collisionTypes;
				
				if(types){
					for(; i < types.length; i++){
						if(entity.solidCollisions[types[i]].length && !entity.immobile){
							this.solidEntities[this.solidEntities.length] = entity;
						}
					}
					this.updateAABB();
				}
			},
			
			"child-entity-removed": function(entity){
				this['remove-collision-entity'](entity);
			},
			
			"remove-collision-entity": function(entity){
				var x = 0,
				i     = 0,
				types = entity.collisionTypes;

				if (types) {
					for(; i < types.length; i++){
						if(entity.solidCollisions[types[i]].length){
							for (x in this.solidEntities) {
								if(this.solidEntities[x] === entity){
									this.solidEntities.splice(x, 1);
									break;
								}
							}
						}
					}
					this.updateAABB();
				}
				
			},
			
			"relocate-entity": function(resp){
				this.owner.previousX = this.owner.x;
				this.owner.previousY = this.owner.y;
				this.updateAABB();
			}
		},
		
		methods: {
			getCollisionTypes: function(){
				var childEntity = null,
				compiledList = [];
				
				for (var x = 0; x < this.solidEntities.length; x++){
					childEntity = this.solidEntities[x];
					if((childEntity !== this.owner) && childEntity.collisionGroup){
						childEntity = childEntity.collisionGroup;
					}
					compiledList = appendUniqueItems(compiledList, childEntity.getCollisionTypes());
				}
				
				return compiledList;
			},

			getSolidCollisions: function(){
				var childEntity = null,
				compiledList = {},
				entityList = null;
				
				for (var x = 0; x < this.solidEntities.length; x++){
					childEntity = this.solidEntities[x];
					if((childEntity !== this.owner) && childEntity.collisionGroup){
						childEntity = childEntity.collisionGroup;
					}
					entityList = childEntity.getSolidCollisions();
					for (var z in entityList){
						compiledList[z] = appendUniqueItems(compiledList[z] || [], entityList[z]);
					}
				}
				
				return compiledList;
			},
			
			getAABB: function(collisionType){
				var childEntity = null;
				
				if(!collisionType){
					return this.aabb;
				} else {
					var aabb = new platformer.classes.aABB();
					for (var x = 0; x < this.solidEntities.length; x++){
						childEntity = this.solidEntities[x];
						if((childEntity !== this.owner) && childEntity.collisionGroup){
							childEntity = childEntity.collisionGroup;
						}
						
						aabb.include(childEntity.getAABB(collisionType));
					}
					return aabb;
				}
			},

			getPreviousAABB: function(collisionType){
				var childEntity = null;
				
				if(!collisionType){
					return this.prevAABB;
				} else {
					var aabb = new platformer.classes.aABB();
					for (var x = 0; x < this.solidEntities.length; x++){
						childEntity = this.solidEntities[x];
						if((childEntity !== this.owner) && childEntity.collisionGroup){
							childEntity = childEntity.collisionGroup;
						}

						aabb.include(childEntity.getPreviousAABB(collisionType));
					}
					return aabb;
				}
			},
			
			updateAABB: function(){
				this.aabb.reset();
				for (var x = 0; x < this.solidEntities.length; x++){
					this.aabb.include(((this.solidEntities[x] !== this.owner) && this.solidEntities[x].getCollisionGroupAABB)?this.solidEntities[x].getCollisionGroupAABB():this.solidEntities[x].getAABB());
				}
			},
			
			getShapes: function(collisionType){
				var childEntity = null,
				shapes = [],
				newShapes = null;
				
				for (var x = 0; x < this.solidEntities.length; x++){
					childEntity = this.solidEntities[x];
					if((childEntity !== this.owner) && childEntity.collisionGroup){
						childEntity = childEntity.collisionGroup;
					}
					newShapes = childEntity.getShapes(collisionType);
					if(newShapes){
						shapes = shapes.concat(newShapes);
					}
				}
				return shapes;
			},

			getPrevShapes: function(collisionType){
				var childEntity = null,
				shapes = [];
				
				for (var x = 0; x < this.solidEntities.length; x++){
					childEntity = this.solidEntities[x];
					if((childEntity !== this.owner) && childEntity.collisionGroup){
						childEntity = childEntity.collisionGroup;
					}
					newShapes = childEntity.getPrevShapes(collisionType);
					if(newShapes){
						shapes = shapes.concat(newShapes);
					}
				}
				return shapes;
			},
			
			prepareCollision: function(x, y){
				var childEntity = null,
				oX = 0,
				oY = 0;
				
				for (var i = 0; i < this.solidEntities.length; i++){
					childEntity = this.solidEntities[i];
					childEntity.saveDX = childEntity.x - childEntity.previousX;
					childEntity.saveDY = childEntity.y - childEntity.previousY;
					oX = childEntity.saveOX = this.owner.previousX - childEntity.previousX;
					oY = childEntity.saveOY = this.owner.previousY - childEntity.previousY;
					if((childEntity !== this.owner) && childEntity.collisionGroup){
						childEntity = childEntity.collisionGroup;
					}
					childEntity.prepareCollision(x - oX, y - oY);
				}
			},
			
			movePreviousX: function(x){
				var childEntity = null,
				offset = 0,
				i = 0;
				
				for (; i < this.solidEntities.length; i++){
					childEntity = this.solidEntities[i];
					offset = childEntity.saveOX;
					if((childEntity !== this.owner) && childEntity.collisionGroup){
						childEntity = childEntity.collisionGroup;
					}
					childEntity.movePreviousX(x - offset);
				}
			},
			
			relocateEntity: function(x, y, collisionData){
				var childEntity = null,
				entity = null,
				i = 0;
				
				this.owner.saveDX -= x - this.owner.previousX;
				this.owner.saveDY -= y - this.owner.previousY;

				for(i = 0; i < collisionData.xCount; i++){
					if(collisionData.getXEntry(i).thisShape.owner === this.owner){
						this.owner.saveDX = 0;
						break;
					}
				}
				
				for(i = 0; i < collisionData.yCount; i++){
					if(collisionData.getYEntry(i).thisShape.owner === this.owner){
						this.owner.saveDY = 0;
						break;
					}
				}
				
				for (var i = 0; i < this.solidEntities.length; i++){
					childEntity = entity = this.solidEntities[i];
					if((childEntity !== this.owner) && childEntity.collisionGroup){
						childEntity = childEntity.collisionGroup;
					}
					childEntity.relocateEntity(x - entity.saveOX, y - entity.saveOY, collisionData);
					entity.x += entity.saveDX;
					entity.y += entity.saveDY;
					if(entity !== this.owner){
						entity.x += this.owner.saveDX;
						entity.y += this.owner.saveDY;
					}
				}
			},

			destroy: function(){
				this.solidEntities.length = 0;
			}
		},
		
		publicMethods: {
			getCollisionGroupAABB: function(){
				return this.getAABB();
			},
			
			getWorldEntities: function(){
				return this.owner.parent.getWorldEntities();
			},
			
			getWorldTerrain: function(){
				return this.owner.parent.getWorldTerrain();
			}
		}
	});
})();

/*--------------------------------------------------
 *   audio - ../engine/components/audio.js
 */
/**
# COMPONENT **audio**
This component plays audio. Audio is played in one of two ways, by triggering specific messages defined in the audio component definition or using an audio map which plays sounds when the entity enters specified states (like render-animation).

## Dependencies:
- [createjs.SoundJS] [link1] - This component requires the SoundJS library to be included for audio functionality.
- [[handler-render-createjs]] (on entity's parent) - This component listens for a render "tick" message in order to stop audio clips that have a play length set.

## Messages

### Listens for:
- **handle-render** - On each `handle-render` message, this component checks its list of playing audio clips and stops any clips whose play length has been reached.
  - @param message.delta (number) - uses the value of delta (time since last `handle-render`) to track progess of the audio clip and stop clip if play length has been reached.
- **audio-mute-toggle** - On receiving this message, the audio will mute if unmuted, and unmute if muted.
  - @param message (string) - If a message is included, a string is expected that specifies an audio id, and that particular sound instance is toggled. Otherwise all audio is toggled from mute to unmute or vice versa.
- **audio-mute** - On receiving this message all audio will mute, or a particular sound instance will mute if an id is specified.
  - @param message (string) - If a message is included, a string is expected that specifies an audio id, and that particular sound instance is muted.
- **audio-unmute** - On receiving this message all audio will unmute, or a particular sound instance will unmute if an id is specified.
  - @param message (string) - If a message is included, a string is expected that specifies an audio id, and that particular sound instance is unmuted.
- **audio-stop** - On receiving this message all audio will stop playing.
- **logical-state** - This component listens for logical state changes and tests the current state of the entity against the audio map. If a match is found, the matching audio clip is played.
  - @param message (object) - Required. Lists various states of the entity as boolean values. For example: {jumping: false, walking: true}. This component retains its own list of states and updates them as `logical-state` messages are received, allowing multiple logical components to broadcast state messages.
- **[Messages specified in definition]** - Listens for additional messages and on receiving them, begins playing corresponding audio clips. Audio play message can optionally include several parameters, many of which correspond with [SoundJS play parameters] [link2].
  - @param message.interrupt (string) - Optional. Can be "any", "early", "late", or "none". Determines how to handle the audio when it's already playing but a new play request is received. Default is "any".
  - @param message.delay (integer) - Optional. Time in milliseconds to wait before playing audio once the message is received. Default is 0.
  - @param message.offset (integer) - Optional. Time in milliseconds determining where in the audio clip to begin playback. Default is 0.
  - @param message.length (integer) - Optional. Time in milliseconds to play audio before stopping it. If 0 or not specified, play continues to the end of the audio clip.
  - @param message.loop (integer) - Optional. Determines how many more times to play the audio clip once it finishes. Set to -1 for an infinite loop. Default is 0.
  - @param message.volume (float) - Optional. Used to specify how loud to play audio on a range from 0 (mute) to 1 (full volume). Default is 1.
  - @param message.pan (float) - Optional. Used to specify the pan of audio on a range of -1 (left) to 1 (right). Default is 0.
  - @param message.next (string) - Optional. Used to specify the next audio clip to play once this one is complete.

## JSON Definition:
    {
      "type": "audio",
      
      "audioMap":{
      // Required. Use the audioMap property object to map messages triggered with audio clips to play. At least one audio mapping should be included for audio to play.
      
        "message-triggered": "audio-id",
        // This simple form is useful to listen for "message-triggered" and play "audio-id" using default audio properties.
        
        "another-message": {
        // To specify audio properties, instead of mapping the message to an audio id string, map it to an object with one or more of the properties shown below. Many of these properties directly correspond to [SoundJS play parameters] (http://www.createjs.com/Docs/SoundJS/SoundJS.html#method_play).
        
          "sound": "another-audio-id",
          // Required. This is the audio clip to play when "another-message" is triggered.
          
          "interrupt": "none",
          // Optional. Can be "any", "early", "late", or "none". Determines how to handle the audio when it's already playing but a new play request is received. Default is "any".
          
          "delay": 500,
          // Optional. Time in milliseconds to wait before playing audio once the message is received. Default is 0.
          
          "offset": 1500,
          // Optional. Time in milliseconds determining where in the audio clip to begin playback. Default is 0.
          
          "length": 2500,
          // Optional. Time in milliseconds to play audio before stopping it. If 0 or not specified, play continues to the end of the audio clip.

          "loop": 4,
          // Optional. Determines how many more times to play the audio clip once it finishes. Set to -1 for an infinite loop. Default is 0.
          
          "volume": 0.75,
          // Optional. Used to specify how loud to play audio on a range from 0 (mute) to 1 (full volume). Default is 1.
          
          "pan": -0.25,
          // Optional. Used to specify the pan of audio on a range of -1 (left) to 1 (right). Default is 0.

          "next": ["audio-id"]
          // Optional. Used to specify a list of audio clips to play once this one is finished.
        }
      }
    }

[link1]: http://www.createjs.com/Docs/SoundJS/module_SoundJS.html
[link2]: http://www.createjs.com/Docs/SoundJS/SoundJS.html#method_play
*/
(function(){
	var defaultSettings = {
		interrupt: createjs.Sound.INTERRUPT_ANY, //INTERRUPT_ANY, INTERRUPT_EARLY, INTERRUPT_LATE, or INTERRUPT_NONE
		delay:     0,
		offset:    0,
		loop:      0,
		volume:    1,
		pan:       0,
		length:    0,
		next:      false,
		events:    false
	},
	stop = {
		stop: true,
		playthrough: true
	},
	sortByTime = function(a,b){
		return a.time - b.time;
	},
	playSound = function(soundDefinition){
		var sound = '',
		attributes = undefined,
		instance = null,
		assets = platformer.game.settings.assets;
		if(typeof soundDefinition === 'string'){
			sound      = soundDefinition;
			attributes = {};
		} else if (soundDefinition.length){
			if(typeof soundDefinition[0] === 'string'){
				sound      = soundDefinition[0];
				attributes = {next: []};
			} else {
				sound      = soundDefinition[0].sound;
				attributes = {};
				for (var property in soundDefinition[0]){
					attributes[property] = soundDefinition[0][property];
				}
				if(attributes.next){
					attributes.next = attributes.next.slice();
				} else {
					attributes.next = [];
				}
			}
			for(var i = 1; i < soundDefinition.length; i++){
				attributes.next.push(soundDefinition[i]);
			}
		} else {
			sound      = soundDefinition.sound;
			attributes = {
				interrupt: soundDefinition.interrupt,
				delay:     soundDefinition.delay,
				offset:    soundDefinition.offset,
				loop:      soundDefinition.loop,
				volume:    soundDefinition.volume,
				pan:       soundDefinition.pan,
				length:    soundDefinition.length,
				next:      soundDefinition.next,
				events:    soundDefinition.events
			};
		}
		if(assets[sound].data){
			for(var item in assets[sound].data){
				attributes[item] = attributes[item] || assets[sound].data[item];
			}
		}
		if(assets[sound].assetId){
			sound = assets[sound].assetId;
		}
		return function(value){
			var self = this,
			audio = undefined,
			next = false,
			events = false,
			offset = defaultSettings.offset,
			length    = 0;
			
			value = value || attributes;
			if(value && value.stop){
				if(instance) {
					if(value.playthrough){
						instance.remainingLoops = 0;
					} else {
						instance.stop();
						self.removeClip(instance);
					}
				}
			} else {
				if(value){
					var interrupt = value.interrupt || attributes.interrupt || defaultSettings.interrupt,
					delay         = value.delay     || attributes.delay  || defaultSettings.delay,
					loop          = value.loop      || attributes.loop   || defaultSettings.loop,
					volume        = (typeof value.volume !== 'undefined')? value.volume: ((typeof attributes.volume !== 'undefined')? attributes.volume: defaultSettings.volume),
					pan           = value.pan       || attributes.pan    || defaultSettings.pan,
					length        = value.length    || attributes.length || defaultSettings.length;
					
					offset        = value.offset    || attributes.offset || defaultSettings.offset;
					next          = value.next      || attributes.next   || defaultSettings.next;
					events        = value.events    || attributes.events || defaultSettings.events;
					
					audio = instance = createjs.Sound.play(sound, interrupt, delay, offset, loop, volume, pan);
					
				} else {
					audio = instance = createjs.Sound.play(sound, defaultSettings.interrupt, defaultSettings.delay, defaultSettings.offset, defaultSettings.loop, defaultSettings.volume, defaultSettings.pan);
				}
				
				if(events){
					audio.sequenceEvents = [];
					for(var i = 0; i < events.length; i++){
						audio.sequenceEvents.push({
							event: events[i].event,
							time: +events[i].time + offset,
							message: events[i].message
						});
					}
					audio.sequenceEvents.sort(sortByTime);
				}

				audio.addEventListener('complete', function(){
					self.onComplete(audio, next);
				});

				if(audio.playState === 'playFailed'){
					if(this.owner.debug){
						console.warn('Unable to play "' + sound + '".', audio);
					}
				} else {
					if(length){ // Length is specified so we need to turn off the sound at some point.
						this.timedAudioClips.push({length: length, progress: 0, audio: audio, next: next});
					}
					this.activeAudioClips.push(audio);
				}
			}
		};
	},
	createTest = function(testStates, audio){
		var states = testStates.replace(/ /g, '').split(',');
		if(testStates === 'default'){
			return function(state){
				return testStates;
			};
		} else {
			return function(state){
				for(var i = 0; i < states.length; i++){
					if(!state[states[i]]){
						return false;
					}
				}
				return testStates;
			};
		}
	};
	
	return platformer.createComponentClass({
		id: 'audio',
			
		constructor: function(definition){
			this.timedAudioClips = [];
			this.activeAudioClips = [];		
	
			this.state = {};
			this.stateChange = false;
			this.currentState = false;
	
			this.forcePlaythrough = this.owner.forcePlaythrough || definition.forcePlaythrough;
			if(typeof this.forcePlaythrough !== 'boolean') {
				this.forcePlaythrough = true;
			}
			
			if(definition.audioMap){
				this.checkStates = [];
				for (var key in definition.audioMap){
					this.addListener(key);
					this[key] = playSound(definition.audioMap[key]);
					this.checkStates.push(createTest(key, definition.audioMap[key]));
				}
			}
		},

		events: {// These are messages that this component listens for
		    "handle-render": function(resp){
				var i     = 0,
				audioClip = undefined;
				newArray  = undefined;
				
				for(i = 0; i < this.activeAudioClips.length; i++){
					this.checkTimeEvents(this.activeAudioClips[i]);
				}
				
				if(this.timedAudioClips.length){
					newArray = this.timedAudioClips;
					this.timedAudioClips = [];
					for (i in newArray){
						audioClip = newArray[i];
						audioClip.progress += resp.delta;
						if(audioClip.progress >= audioClip.length){
							audioClip.audio.stop();
							this.onComplete(audioClip.audio, audioClip.next);
						} else {
							this.timedAudioClips.push(audioClip);
						}
					}
//						this.timedAudioClips = newArray;
				}

				i = 0;
				if(this.stateChange){
					if(this.checkStates){
						if(this.currentState){
							stop.playthrough = this.forcePlaythrough;
							this[this.currentState](stop);
						}
						this.currentState = false;
						for(; i < this.checkStates.length; i++){
							audioClip = this.checkStates[i](this.state);
							if(audioClip){
								this.currentState = audioClip;
								this[this.currentState]();
								break;
							}
						}
					}
					this.stateChange = false;
				}
	 	    },
	 	    
	 		"logical-state": function(state){
	 			for(var i in state){
	 				if(this.state[i] !== state[i]){
	 					this.stateChange = true;
	 					this.state[i] = state[i];
	 				}
	 			}
	 		},
	 	    
	 		"audio-mute-toggle": function(){
	 			createjs.Sound.setMute(!createjs.Sound.getMute());
	 		},
	 	    
	 		"audio-stop": function(){
	 			for (var i in this.activeAudioClips){
	 				this.activeAudioClips[i].stop();
	 			}
	 			this.activeAudioClips.length = 0;
	 			this.timedAudioClips.length = 0;
	 		},
	 	    
	 		"audio-mute": function(){
	 			createjs.Sound.setMute(true);
	 		},
	 	    
	 		"audio-unmute": function(){
	 			createjs.Sound.setMute(false);
	 		}
		},
		
		methods: {
			checkTimeEvents: function(audioClip, finished){
				var currentTime = 0;
				
				if(audioClip.sequenceEvents){
					currentTime = audioClip.getPosition();
					while(audioClip.sequenceEvents.length && (finished || (audioClip.sequenceEvents[0].time <= currentTime))){
						this.owner.trigger(audioClip.sequenceEvents[0].event, audioClip.sequenceEvents[0].message);
						audioClip.sequenceEvents.splice(0,1);
					}
				}
			},
		
			onComplete: function(audioClip, next){
				//clean up active clips
				this.removeClip(audioClip);
				
				this.checkTimeEvents(audioClip, true);
				
				this.owner.triggerEvent('clip-complete');
				
				if(next && next.length){
					if(typeof next === 'string'){
						(playSound(next)).call(this);
					} else {
						var arr = next.slice();
						arr.splice(0,1);
						if(arr.length > 0){
							(playSound(next[0])).call(this, {'next': arr});
						} else {
							(playSound(next[0])).call(this);
						}
					}
				} else {
					this.owner.triggerEvent('sequence-complete');
				}
			},
			
			removeClip: function(audioClip){
				for (var i in this.activeAudioClips){
					if (this.activeAudioClips[i] === audioClip){
						this.activeAudioClips.splice(i,1);
						break;
					}
				}
			},
			
			destroy: function(){
				this['audio-stop']();
			}
		}
	});
})();	


/*--------------------------------------------------
 *   broadcast-events - ../engine/components/broadcast-events.js
 */
/**
# COMPONENT **broadcast-events**
This component listens for specified local entity messages and re-broadcasts them on itself, its parent entity, or at the game level.

**Note:** Make sure that this component is never set up to receive and broadcast identical messages or an infinite loop will result, since it will receive the same message it sent.

## Dependencies:
- [[Entity-Container]] (on entity's parent) - This component can broadcast messages to its parent; `this.parent` is commonly specified by being a member of an entity container.

## Messages

### Listens for:
- **[Messages specified in definition]** - Listens for specified messages and on receiving them, re-triggers them as new messages.
  - @param message (object) - accepts a message object that it will include in the new message to be triggered.

### Local Broadcasts:
- **[Messages specified in definition]** - Listens for specified messages and on receiving them, re-triggers them as new messages on the entity.
  - @param message (object) - sends the message object received by the original message.

### Parent Broadcasts:
- **[Messages specified in definition]** - Listens for specified messages and on receiving them, re-triggers them as new messages on the entity's parent if one exists.
  - @param message (object) - sends the message object received by the original message.

### Game Broadcasts:
- **[Messages specified in definition]** - Listens for specified messages and on receiving them, re-triggers them as new messages at the top game level.
  - @param message (object) - sends the message object received by the original message.

## JSON Definition:
    {
      "type": "broadcast-events",
      
      // One of the following event mappings must be specified: "events", "parentEvents", or "renameEvents".
      
      "events": {
      // Optional: Maps local messages to trigger global game messages. At least one of the following mappings should be included.
        
        "local-message-1": "global-game-message",
        // On receiving "local-message-1", triggers "global-game-message" at the game level.
        
        "local-message-2": ["multiple", "messages", "to-trigger"]
        // On receiving "local-message-2", triggers each message in the array in sequence at the game level.
      }
      
      "parentEvents": {
      // Optional: Maps local messages to trigger messages on the entity's parent. At least one of the following mappings should be included.
        
        "local-message-3": "parent-message",
        // On receiving "local-message-3", triggers "parent-message" on the entity's parent.
        
        "local-message-4": ["multiple", "messages", "to-trigger"]
        // On receiving "local-message-4", triggers each message in the array in sequence on the entity's parent.
      }
      
      "renameEvents": {
      // Optional: Maps local messages to trigger alternative messages on the entity itself. This can be useful as a basic fill-in for a logic component to translate an outgoing message from one component into an incoming message for another. At least one of the following mappings should be included.
        
        "local-message-5": "another-local-message",
        // On receiving "local-message-5", triggers "another-local-message" on the entity itself.
        
        "local-message-6": ["multiple", "messages", "to-trigger"]
        // On receiving "local-message-6", triggers each message in the array in sequence on the entity itself.
      }
    }
*/
platformer.components['broadcast-events'] = (function(){
	var gameBroadcast = function(event){
		if(typeof event === 'string'){
			return function(value, debug){
				platformer.game.currentScene.trigger(event, value, debug);
			};
		} else {
			return function(value, debug){
				for (var e in event){
					platformer.game.currentScene.trigger(event[e], value, debug);
				}
			};
		}
	};
	
	var parentBroadcast = function(event){
		if(typeof event === 'string'){
			return function(value, debug){
				if(this.owner.parent)
				{
					this.owner.parent.trigger(event, value, debug);
				}
				
			};
		} else {
			return function(value, debug){
				for (var e in event){
					this.owner.parent.trigger(event[e], value, debug);
				}
			};
		}
	};
	
	var entityBroadcast = function(event){
		if(typeof event === 'string'){
			return function(value, debug){
				this.owner.trigger(event, value, debug);
			};
		} else {
			return function(value, debug){
				for (var e in event){
					this.owner.trigger(event[e], value, debug);
				}
			};
		}
	};
	
	var component = function(owner, definition){
		this.owner = owner;

		// Messages that this component listens for and then broadcasts to all layers.
		this.listeners = [];
		if(definition.events){
			for(var event in definition.events){
				this[event] = gameBroadcast(definition.events[event]);
				this.addListener(event);
			}
		}
		
		if(definition.parentEvents){
			for(var event in definition.parentEvents){
				this[event] = parentBroadcast(definition.parentEvents[event]);
				this.addListener(event);
			}
		}
		
		// Messages that this component listens for and then triggers on itself as a renamed message - useful as a logic place-holder for simple entities.
		if(definition.renameEvents){
			for(var event in definition.renameEvents){
				this[event] = entityBroadcast(definition.renameEvents[event]);
				this.addListener(event);
			}
		}
	};
	var proto = component.prototype;
	
	// This function should never be called by the component itself. Call this.owner.removeComponent(this) instead.
	proto.destroy = function(){
		this.removeListeners(this.listeners);
	};
	
	/*********************************************************************************************************
	 * The stuff below here will stay the same for all components. It's BORING!
	 *********************************************************************************************************/

	proto.addListeners = function(messageIds){
		for(var message in messageIds) this.addListener(messageIds[message]);
	};

	proto.removeListeners = function(listeners){
		for(var messageId in listeners) this.removeListener(messageId, listeners[messageId]);
	};
	
	proto.addListener = function(messageId, callback){
		var self = this,
		func = callback || function(value, debug){
			self[messageId](value, debug);
		};
		this.owner.bind(messageId, func);
		this.listeners[messageId] = func;
	};

	proto.removeListener = function(boundMessageId, callback){
		this.owner.unbind(boundMessageId, callback);
	};
	
	return component;
})();


/*--------------------------------------------------
 *   change-scene - ../engine/components/change-scene.js
 */
/**
# COMPONENT **change-scene**
This component allows the entity to initiate a change from the current scene to another scene.

## Messages

### Listens for:
- **new-scene** - On receiving this message, a new scene is loaded according to provided parameters or previously determined component settings.
  - @param message.scene (string) - This is a label corresponding with a predefined scene.
  - @param message.transition (string) - This can be "instant" or "fade-to-black". Defaults to an instant transition.
  - @param message.persistentData (object) - Any JavaScript value(s) that should be passed to the next scene via the "scene-loaded" call.
- **set-scene** - On receiving this message, a scene value is stored, waiting for a `new-scene` to make the transition.
  - @param scene (string) - This is a label corresponding with a predefined scene.
- **set-persistent-scene-data** - On receiving this message, persistent data is stored, waiting for a `new-scene` to make the transition.
  - @param persistentData (object) - Any JavaScript value(s) that should be passed to the next scene via the "scene-loaded" call.

## JSON Definition:
    {
      "type": "change-scene",
      
      "scene": "scene-menu",
      // Optional (but must be provided by a "change-scene" parameter if not defined here). This causes the "new-scene" trigger to load this scene.
      
      "transition": "fade-to-black",
      // Optional. This can be "instant" or "fade-to-black". Defaults to an "instant" transition.
      
      "preload": true,
      // Optional. Whether the scene should already be loaded in the background.
      
      "persistentData": {"runningScore": 1400}
      // Optional. An object containing key/value pairs of information that should be passed into the new scene on the new scenes "scene-loaded" call.
    }
*/
(function(){
	return platformer.createComponentClass({
		id: 'change-scene',
		
		constructor: function(definition){
			this.scene = this.owner.scene || definition.scene;
			this.transition = this.owner.transition || definition.transition || 'instant';
			this.persistentData = definition.persistentData || {};
			
			if(definition.message){
				this.addListener(definition.message);
				this[definition.message] = this['new-scene'];
			}
			
			this.preload = definition.preload || false;
		},

		events: {
			"scene-live": function(){
				//Makes sure we're in the current scene before preloading the next one.
				if(this.preload){
					platformer.game.loadScene(this.scene, this.transition, this.persistentData, true);
				}
			},
			"new-scene": function(response){
				var resp   = response || this,
				scene      = resp.scene || this.scene,
				transition = resp.transition || this.transition;
				data 	   = resp.persistentData || this.persistentData;
			
				platformer.game.loadScene(scene, transition, data);
			},
			"set-scene": function(scene){
				this.scene = scene;
			},
			"set-persistent-scene-data": function(dataObj){
				for (var x in dataObj)
				{
					this.persistentData[x] = dataObj[x];    
				}
			}
		}
	});
})();


/*--------------------------------------------------
 *   dom-element - ../engine/components/dom-element.js
 */
/**
# COMPONENT **dom-element**
This component creates a DOM element associated with the entity. In addition to allowing for CSS styling, the element can also perform as a controller accepting click and touch inputs and triggering associated messages on the entity.

## Dependencies:
- [[handler-render-dom]] (on entity's parent) - This component listens for a render "handle-render-load" message with a DOM element to setup and display the element.

## Messages

### Listens for:
- **handle-render-load** - This event provides the parent DOM element that this component will require for displaying its DOM element.
  - @param message.element (DOM element) - Required. Provides the render component with the necessary DOM element parent.
- **handle-render** - On each `handle-render` message, this component checks to see if there has been a change in the state of the entity. If so (and updateClassName is set to true in the JSON definition) it updates its className accordingly.
- **logical-state** - This component listens for logical state changes and updates its local record of states.
  - @param message (object) - Required. Lists various states of the entity as boolean values. For example: {jumping: false, walking: true}. This component retains its own list of states and updates them as `logical-state` messages are received, allowing multiple logical components to broadcast state messages.
- **update-content** - This message updates the innerHTML of the DOM element.
  - @param message (string) - The text that should replace the DOM element's innerHTML.
  - @param message.text (string) - Alternatively an object may be passed in with a text property that should replace the DOM element's innerHTML.
- **set-parent** - This message appends the element to the provided parent element.
  - @param parent (DOM Element) - Required. The DOM Element that this element should be appended to.
- **set-attribute** - This message updates an attribute of the DOM element.
  - @param message.attribute (string) - The attribute that is to be changed.
  - @param message.value (string) - The value the changed attribute should have.
  - @param message (object) - Alternatively, multiple attributes may be changed with a list of key/value pairs where keys match the attributes whose values will be changed.
- **set-style** - This message updates the style of the DOM element.
  - @param message.attribute (string) - The CSS property that is to be changed.
  - @param message.value (string) - The value the changed CSS property should have.
  - @param message (object) - Alternatively, multiple CSS properties may be changed with a list of key/value pairs where keys match the properties whose values will be changed.

### Local Broadcasts:
- **[Messages specified in definition]** - Element event handlers will trigger messages as defined in the JSON definition.
  - @param message (DOM Event object) - When messages are triggered on the entity, the associated message object is the DOM Event object that was provided to the originating DOM Event handler.

## JSON Definition
    {
      "type": "dom-element",

      "element": "div",
      //Required. Sets what type of DOM element should be created.
      
      "innerHTML": "Hi!",
      //Optional. Sets the DOM element's inner text or HTML.
      
      "className": "top-band",
      //Optional. Any standard properties of the element can be set by listing property names and their values. "className" is one example, but other element properties can be specified in the same way.
      
      "updateClassName": true,
      //Optional. Specifies whether the className of the DOM element should be updated to reflect the entity's logical state. This setting will cause the className to equal its setting above followed by a space-delimited list of its `true` valued state names.
      
      "onmousedown": "turn-green",
      //Optional. If specified properties begin with "on", it is assumed that the property is an event handler and the listed value is broadcast as a message on the entity where the message object is the event handler's event object.

      "onmouseup": ["turn-red", "shout"]
      //Optional. In addition to the event syntax above, an Array of strings may be provided, causing multiple messages to be triggered in the order listed.
    }
*/
(function(){
	var createFunction = function(message, entity){
		if(typeof message === 'string'){
			return function(e){
				entity.trigger(message, e);
				e.preventDefault();
			};
		} else if (message.length){
			return function(e){
				for (var i = 0; i < message.length; i++){
					entity.trigger(message[i], e);
				}
				e.preventDefault();
			};
		} else {
			return function(e){
				entity.trigger(message.event, message.message);
				e.preventDefault();
			};
		}
	};
	
	return platformer.createComponentClass({
		id: 'dom-element',
		constructor: function(definition){
			var elementType = definition.element   || 'div';
			
			this.updateClassName = definition.updateClassName || false;
			this.className = '';
			this.states = {};
			this.stateChange = false;
			this.potentialParent = definition.parent;
			this.handleRenderLoadMessage = null;
			
			this.element = document.createElement(elementType);
			if(!this.owner.element){
				this.owner.element = this.element;
			}
			this.element.ondragstart = function() {return false;}; //prevent element dragging by default
			
			for(var i in definition){
				if(i === 'style'){
					for(var j in definition[i]){
						this.element.style[j] = definition[i][j]; 
					}
				} else if(((i !== 'type') || (elementType === 'input')) && (i !== 'element') && (i !== 'parent') && (i !== 'updateClassName') && (i !== 'attributes') && (i !== 'messageMap')){
					if(i.indexOf('on') === 0){
						this.element[i] = createFunction(definition[i], this.owner);
					} else {
						this.element[i] = definition[i];
						if(i == 'className'){
							this.className = definition[i];
						}
					}
				}
			}
			
			if(this.owner.className){
				this.className = this.element.className = this.owner.className;
			}
			if(this.owner.innerHTML){
				this.element.innerHTML = this.owner.innerHTML;
			}
		},
		events:{
			"handle-render-load": (function(){
				var getElementById = function(root, id){
					var i = 0,
					all   = root.getElementsByTagName('*');

					for (; i < all.length; i++) {
					    if(all[i].getAttribute('id') === id){
					    	return all[i];
					    }
					}
					
					return document.getElementById(id);
				};
				
				return function(resp){
					if(resp.element){
						
						if(!this.parentElement){
							if(this.potentialParent){
								this.parentElement = getElementById(resp.element, this.potentialParent);
								this.parentElement.appendChild(this.element);
							} else {
								this.parentElement = resp.element;
								this.parentElement.appendChild(this.element);
							}
						}
			
						if(this.owner.entities){
							var message = this.handleRenderLoadMessage = {};
							for (var item in resp){
								message[item] = resp[item];
							}
							message.element = this.element;
							for (var entity in this.owner.entities){
								this.owner.entities[entity].trigger('handle-render-load', message);
							}
						}
					}
				};
			})(),
			
			"child-entity-added": function(entity){
				if(this.handleRenderLoadMessage){
					entity.trigger("handle-render-load", this.handleRenderLoadMessage);
				}
			},
			
			"set-parent": function(element){
				if(this.parentElement){
					this.parentElement.removeChild(this.element);
				}
				this.parentElement = element;
				this.parentElement.appendChild(this.element);
			},
			
			"handle-render": function(resp){
				var i     = 0,
				className = this.className;
				
				if(this.stateChange && this.updateClassName){
					for(i in this.states){
						if(this.states[i]){
							className += ' ' + i;
						}
					}
					this.element.className = className;
					this.stateChange = false;
				}
			},
			
			"set-attribute": function(resp){
				var attribute = null;
				
				if(resp.attribute){ //Backwards compatibility for {attribute: 'attribute-name', value: 'new-value'} syntax
					this.element.setAttribute(resp.attribute, resp.value);
				} else {
					for (attribute in resp){
						this.element.setAttribute(attribute, resp[attribute]);
					}
				}
			},
			
			"set-style": function(resp){
				var attribute = null;
				
				if(resp.attribute){ //Backwards compatibility for {attribute: 'attribute-name', value: 'new-value'} syntax
					this.element.style[resp.attribute] = resp.value;
				} else {
					for (attribute in resp){
						this.element.style[attribute] = resp[attribute];
					}
				}
			},
			
			"update-content": function(resp){
				var text = resp;
				
				if(text && (typeof text.text === 'string')){
					text = text.text;
				}
				
				if((typeof text === 'string') && (text !== this.element.innerHTML)){
					this.element.innerHTML = text;
				}
			},
		
			"logical-state": function(state){
				for(var i in state){
					if(this.states[i] !== state[i]){
						this.stateChange = true;
						this.states[i] = state[i];
					}
				}
			}
		},
		methods: {
			destroy: function(){
				if(this.parentElement){
					this.parentElement.removeChild(this.element);
					this.parentElement = undefined;
				}
				if(this.owner.element === this.element){
					this.owner.element = undefined;
				}
				this.element = undefined;
			}
		}
	});
})();


/*--------------------------------------------------
 *   entity-container - ../engine/components/entity-container.js
 */
/**
# COMPONENT **entity-container**
This component allows the entity to contain child entities. It will add several methods to the entity to manage adding and removing entities.

## Messages

### Listens for:
- **load** - This component waits until all other entity components are loaded before it begins adding children entities. This allows other entity components to listen to entity-added messages and handle them if necessary.
- **add-entity** - This message will added the given entity to this component's list of entities.
  - @param message ([[Entity]] object) - Required. This is the entity to be added as a child.
- **remove-entity** - On receiving this message, the provided entity will be removed from the list of child entities.
  - @param message ([[Entity]] object) - Required. The entity to remove.
- **[Messages specified in definition]** - Listens for specified messages and on receiving them, re-triggers them on child entities.
  - @param message (object) - accepts a message object that it will include in the new message to be triggered.

### Local Broadcasts:
- **child-entity-added** - This message is triggered when a new entity has been added to the list of children entities.
  - @param message ([[Entity]] object) - The entity that was just added.
- **child-entity-removed** - This message is triggered when an entity has been removed from the list of children entities.
  - @param message ([[Entity]] object) - The entity that was just removed.

### Child Broadcasts:
- **peer-entity-added** - This message is triggered when a new entity has been added to the parent's list of children entities.
  - @param message ([[Entity]] object) - The entity that was just added.
- **peer-entity-removed** - This message is triggered when an entity has been removed from the parent's list of children entities.
  - @param message ([[Entity]] object) - The entity that was just removed.
- **[Messages specified in definition]** - Listens for specified messages and on receiving them, re-triggers them on child entities.
  - @param message (object) - sends the message object received by the original message.

## Methods:
- **addEntity** -  This method will add the provided entity to this component's list of entities.
  - @param entity ([[Entity]] object) - Required. This is the entity to be added as a child.
  - @return entity ([[Entity]] object) - Returns the entity that was just added.
- **removeEntity** - This method will remove the provided entity from the list of child entities.
  - @param message ([[Entity]] object) - Required. The entity to remove.
  - @return entity ([[Entity]] object | false) - Returns the entity that was just removed. If the entity was not foudn as a child, `false` is returned, indicated that the provided entity was not a child of this entity.

## JSON Definition:
    {
      "type": "entity-container",
      
      "entities": [{"type": "hero"}, {"type": "tile"}],
      // Optional. "entities" is an Array listing entity definitions to specify entities that should be added as children when this component loads.
      
      "childEvents": ["tokens-flying", "rules-updated"],
      // Optional. "childEvents" lists messages that are triggered on the entity and should be triggered on the children as well.
      
      "aliases": {
      // Optional. To prevent function name conflicts on the entity, you can provide alternatives here.
      
          "addEntity": "addFruit"
          //This causes entity.addFruit() to be created on the entity rather than the default entity.addEntity().
      }
    }
*/
(function(){
	var childBroadcast = function(event){
		if(typeof event === 'string'){
			return function(value, debug){
				for (var x = 0; x < this.entities.length; x++)
				{
					this.entities[x].trigger(event, value, debug);
				}
			};
		} else {
			return function(value, debug){
				for (var e in event){
					for (var x = 0; x < this.entities.length; x++)
					{
						this.entities[x].trigger(event[e], value, debug);
					}
				}
			};
		}
	};
	
	return platformer.createComponentClass({
		id: 'entity-container',
		
		constructor: function(definition){
			var self = this;
	
			this.entities = [];
			this.definedEntities = definition.entities; //saving for load message
			
			this.owner.entities     = self.entities;
			
			if(definition.childEvents){
				for(var event in definition.childEvents){
					this[definition.childEvents[event]] = childBroadcast(definition.childEvents[event]);
					this.addListener(definition.childEvents[event]);
				}
			}
		},
		
		events:{
			"load": function(){
				// putting this here so all other components will have been loaded and can listen for "entity-added" calls.
				var i    = 0,
				j        = 0,
				k        = 0,
				entities = this.definedEntities,
				definition = null;
				
				this.definedEntities = false;
				
				if(entities){
					for (i = 0; i < entities.length; i++)
					{
						definition = {properties:{parent: this.owner}};
						for (j in entities[i]){
							if (j === 'properties'){
								for (k in entities[i].properties){
									definition.properties[k] = entities[i].properties[k];
								}
							} else {
								definition[j] = entities[i][j];
							}
						}
		
						this.addEntity(new platformer.classes.entity(entities[i].id?entities[i]:platformer.game.settings.entities[entities[i].type], definition));
					}
				}
			},
			
			"add-entity": function (entity) {
				entity.parent = this.owner;
				entity.trigger('adopted');
				for (var x = 0; x < this.entities.length; x++)
				{
					entity.trigger('peer-entity-added', this.entities[x]);
				}
				
				for (var x = 0; x < this.entities.length; x++)
				{
					this.entities[x].trigger('peer-entity-added', entity);
				}
				this.entities.push(entity);
				this.owner.trigger('child-entity-added', entity);
				return entity;
			},
			
			"remove-entity": function (entity) {
				for (var x = 0; x < this.entities.length; x++){
				    if(this.entities[x] === entity){
						for (var y = 0; y < this.entities.length; y++){
							if(x !== y){
								this.entities[y].trigger('peer-entity-removed', entity);
							}
						}
				    	entity.parent = null;
				    	this.entities.splice(x, 1);
						this.owner.trigger('child-entity-removed', entity);
				    	entity.destroy();
					    return entity;
				    }
			    }
			    return false;
			}
		},
		
		methods:{
			destroy: function(){
				for (var i in this.entities){
					this.entities[i].destroy();
				}
				this.entities.length = 0;
			}
		},
		
		publicMethods: {
			addEntity: function(entity){
				return this['add-entity'](entity);
			},
			
			removeEntity: function(entity){
				return this['remove-entity'](entity);
			}
		}
	});
})();


/*--------------------------------------------------
 *   entity-controller - ../engine/components/entity-controller.js
 */
/**
# COMPONENT **entity-controller**
This component listens for input messages triggered on the entity and updates the state of any controller inputs it is listening for. It then broadcasts messages on the entity corresponding to the input it received.

## Dependencies:
- [[Handler-Controller]] (on entity's parent) - This component listens for a controller "tick" message in order to trigger messages regarding the state of its inputs.

## Messages

### Listens for:
- **handle-controller** - On each `handle-controller` message, this component checks its list of actions and if any of their states are currently true or were true on the last call, that action message is triggered.
- **mousedown** - This message triggers a new message on the entity that includes what button on the mouse was pressed: "mouse:left-button:down", "mouse:middle-button:down", or "mouse:right-button:down".
  - @param message.event (DOM Event object) - This event object is passed along with the new message.
- **mouseup** - This message triggers a new message on the entity that includes what button on the mouse was released: "mouse:left-button:up", "mouse:middle-button:up", or "mouse:right-button:up".
  - @param message.event (DOM Event object) - This event object is passed along with the new message.
- **mousemove** - Updates mouse action states with whether the mouse is currently over the entity.
  - @param message.over (boolean) - Whether the mouse is over the input entity.
- **pause-controls** - This message will stop the controller from triggering messages until "unpause-controls" is triggered on the entity.
- **unpause-controls** - This message will allow the controller to trigger messages until "pause-controls" is triggered on the entity.
- **[Messages specified in definition]** - Listens for additional messages and on receiving them, sets the appropriate state and broadcasts the associated message on the next `handle-controller` message. These messages come in pairs and typically have the form of "keyname:up" and "keyname:down" specifying the current state of the input.
  
### Local Broadcasts:
- **mouse:mouse-left:down, mouse:mouse-left:up, mouse:mouse-middle:down, mouse:mouse-middle:up, mouse:mouse-right:down, mouse:mouse-right:up** - This component triggers the state of mouse inputs on the entity if a render component of the entity accepts mouse input (for example [[Render-Animation]]).
  - @param message (DOM Event object) - The original mouse event object is passed along with the control message.
- **north, north-northeast, northeast, east-northeast, east, east-southeast, southeast, south-southeast, south, south-southwest, southwest, west-southwest, west, west-northwest, northwest, north-northwest** - If the soft joystick is enabled on this component, it will broadcast these directional messages if the joystick is in use.
  - @param message (DOM Event object) - Mirrors the mouse event object that moved the joystick.
- **joystick-orientation** - If the soft joystick is enabled on this component, this message will trigger to provide the current orientation of the joystick.
  - @param orientation (number) - A number in radians representing the orientation of the joystick.
- **[Messages specified in definition]** - Broadcasts active states using the JSON-defined message on each `handle-controller` message. Active states include `pressed` being true or `released` being true. If both of these states are false, the message is not broadcasted.
  - @param message.pressed (boolean) - Whether the current input is active.
  - @param message.released (boolean) - Whether the current input was active last tick but is no longer active.
  - @param message.triggered (boolean) - Whether the current input is active but was not active last tick.
  - @param message.over (boolean) - Whether the mouse was over the entity when pressed, released, or triggered. This value is always false for non-mouse input messages.

## JSON Definition:
    {
      "type": "entity-controller",
      
      "paused": true,
      // Optional. Whether input controls should start deactivated. Default is false.
      
      "controlMap":{
      // Required. Use the controlMap property object to map inputs to messages that should be triggered. At least one control mapping should be included. The following are a few examples:
      
        "key:x": "run-left",
        // This causes an "x" keypress to fire "run-left" on the entity. For a full listing of key names, check out the `handler-controller` component.
        
        "button-pressed": "throw-block",
        // custom input messages can be fired on this entity from other entities, allowing for on-screen input buttons to run through the same controller channel as other inputs.
        
        "mouse:left-button"
        // The controller can also handle mouse events on the entity if the entity's render component triggers mouse events on the entity (for example, the `render-animation` component).
      },
	  
	  "joystick":{
	  // Optional. Determines whether this entity should listen for mouse events to trigger directional events. Can be set simply to "true" to accept all joystick defaults
	      
	      "directions": 8,
		  // Optional: 4, 8, or 16. Determines how many directions to broadcast. Default is 4 ("north", "east", "south", and "west").
		  
		  "innerRadius": 30,
		  // Optional. Number determining how far the mouse must be from the entity's position before joystick events should be triggered. Default is 0.
		  
		  "outerRadius": 60
		  // Optional. Number determining how far the mouse can move away from the entity's position before the joystick stops triggering events. Default is Infinity.
	  }
    }
*/
(function(){
	var distance = function(origin, destination){
		var x = destination.x - origin.x,
		y = destination.y - origin.y;
		
		return Math.sqrt(x*x + y*y);
	},
	angle = function(origin, destination, distance){
		var x = destination.x - origin.x,
		y     = destination.y - origin.y,
		a     = 0,
		circle= Math.PI * 2;
		
		if(!distance){
			return a;
		}

		a = Math.acos(x/distance);
		if (y < 0){
			a = circle - a;
		}
		return a;
	},
	directions = [null,null,null,null, //joystick directions
		['east', 'south', 'west', 'north'], null, null, null,
		['east', 'southeast', 'south', 'southwest', 'west', 'northwest', 'north', 'northeast'], null, null, null, null, null, null, null,
		['east', 'east-southeast', 'southeast', 'south-southeast', 'south', 'south-southwest', 'southwest', 'west-southwest', 'west', 'west-northwest', 'northwest', 'north-northwest', 'north', 'north-northeast', 'northeast', 'east-northeast']
	],
	mouseMap = ['left-button', 'middle-button', 'right-button'],
	state = function(event, trigger){
	    this.event = event;
	    this.trigger = trigger;
	    this.filters = false;
		this.current = false;
		this.last    = false;
		this.state   = false;
		this.stateSummary = {
			pressed:   false,
			released:  false,
			triggered: false,
			over:      false
		};
	},
	createUpHandler = function(state){
		if(state.length){
			return function(value){
				for (var i = 0; i < state.length; i++){
					state[i].state = false;
				}
			};
		} else {
			return function(value){
				state.state = false;
			};
		}
	},
	createDownHandler = function(state){
		if(state.length){
			return function(value){
				for (var i = 0; i < state.length; i++){
					state[i].current = true;
					state[i].state   = true;
					if(value && (typeof (value.over) !== 'undefined')) state[i].over = value.over;
				}
			};
		} else {
			return function(value){
				state.current = true;
				state.state   = true;
				if(value && (typeof (value.over) !== 'undefined')) state.over = value.over;
			};
		}
	},
	addActionState = function(actionList, action, trigger, requiredState){
		var actionState = actionList[action]; // If there's already a state storage object for this action, reuse it: there are multiple keys mapped to the same action.
		if(!actionState){                                // Otherwise create a new state storage object
			actionState = actionList[action] = new state(action, trigger);
		}
		if(requiredState){
			actionState.setFilter(requiredState);
		}
		return actionState;
	},
	stateProto = state.prototype;
	
	stateProto.update = function(){
		var i = 0;
		
		if(this.current || this.last){
			this.stateSummary.pressed   = this.current;
			this.stateSummary.released  = !this.current && this.last;
			this.stateSummary.triggered = this.current && !this.last;
			this.stateSummary.over      = this.over;
			if(this.filters){
				for(; i < this.filters.length; i++){
					if(this.stateSummary[this.filters[i]]){
						this.trigger(this.event, this.stateSummary);
					}
				}
			} else {
				this.trigger(this.event, this.stateSummary);
			}
		}
		
		this.last    = this.current;
		this.current = this.state;
	};
	
	stateProto.setFilter = function(filter){
		if(!this.filters){
			this.filters = [filter];
		} else {
			this.filters.push(filter);
		}
		return this;
	};

	stateProto.isPressed = function(){
		return this.current;
	};
	
	stateProto.isTriggered = function(){
		return this.current && !this.last;
	};

	stateProto.isReleased = function(){
		return !this.current && this.last;
	};

	return platformer.createComponentClass({
		id: 'entity-controller',
		
		constructor: function(definition){
			var i       = 0,
			j           = 0,
			k           = 0,
			key         = '',
			actionState = undefined,
			self        = this,
			trigger     = function(event, obj){
				if(!self.paused){
					self.owner.trigger(event, obj);
				}
			};
			
			this.paused = definition.paused || false;
			
			if(definition && definition.controlMap){
				this.owner.controlMap = definition.controlMap; // this is used and expected by the handler-controller to handle messages not covered by key and mouse inputs.
				this.actions  = {};
				for(key in definition.controlMap){
					if(typeof definition.controlMap[key] === 'string'){
						actionState = addActionState(this.actions, definition.controlMap[key], trigger);
					} else {
						actionState = [];
						if(definition.controlMap[key].length){
							for (i = 0; i < definition.controlMap[key].length; i++){
								actionState[i] = addActionState(this.actions, definition.controlMap[key][i], trigger);
							}
						} else {
							k = 0;
							for (j in definition.controlMap[key]){
								if(typeof definition.controlMap[key][j] === 'string'){
									actionState[k] = addActionState(this.actions, definition.controlMap[key][j], trigger, j);
									k += 1;
								} else {
									for (i = 0; i < definition.controlMap[key][j].length; i++){
										actionState[k] = addActionState(this.actions, definition.controlMap[key][j][i], trigger, j);
										k += 1;
									}
								}
							}
						}
					}
					this[key + ':up']   = createUpHandler(actionState);
					this[key + ':down'] = createDownHandler(actionState);
					this.addListener(key + ':up');
					this.addListener(key + ':down');
				}
			}
			
			if(definition.joystick){
				this.joystick = {};
				this.joystick.directions  = definition.joystick.directions  || 4; // 4 = n,e,s,w; 8 = n,ne,e,se,s,sw,w,nw; 16 = n,nne,ene,e...
				this.joystick.handleEdge  = definition.joystick.handleEdge  || false;
				this.joystick.innerRadius = definition.joystick.innerRadius || 0;
				this.joystick.outerRadius = definition.joystick.outerRadius || Infinity;
			}
		},
		
		events:{
			'handle-controller': function(){
				var action    = '';
				
				if(this.actions){
					for (action in this.actions){
						this.actions[action].update();
					}
				}
			},
			
			'mousedown': function(value){
				this.owner.trigger('mouse:' + mouseMap[value.event.button || 0] + ':down', value.event);
				if(this.joystick){
					this.owner.trigger('joystick:down', value.event);
					this.handleJoy(value);
				}
			},
			
			'mouseup': function(value){
				this.owner.trigger('mouse:' + mouseMap[value.event.button || 0] + ':up', value.event);
				if(this.joystick){
					this.owner.trigger('joystick:up', value.event);
					this.handleJoy(value);
				}
			},
			
			'mousemove': function(value){
				if(this.actions['mouse:left-button'] && (this.actions['mouse:left-button'].over !== value.over))     this.actions['mouse:left-button'].over = value.over;
				if(this.actions['mouse:middle-button'] && (this.actions['mouse:middle-button'].over !== value.over)) this.actions['mouse:middle-button'].over = value.over;
				if(this.actions['mouse:right-button'] && (this.actions['mouse:right-button'].over !== value.over))   this.actions['mouse:right-button'].over = value.over;
				if(this.joystick){
					this.handleJoy(value);
				}
			},
			
			'pause-controls': function(){
				this.paused = true;
			},
			
			'unpause-controls': function(){
				this.paused = false;
			}
		},
		
		methods:{
			handleJoy: function(event){
				// The following translate CreateJS mouse and touch events into messages that this controller can handle in a systematic way
				var segment = Math.PI / (this.joystick.directions / 2),
				dist        = distance(this.owner, event),
				orientation = 0,
				direction   = '',
				accuracy    = '';
				
				if((dist > this.joystick.outerRadius) || (dist < this.joystick.innerRadius)){
					return;
				} else if(!this.paused){
					orientation = angle(this.owner, event, dist);
					direction   = directions[this.joystick.directions][Math.floor(((orientation + segment / 2) % (Math.PI * 2)) / segment)];
					
					if(this.joystick.handleEdge){
						segment  = Math.PI / this.joystick.directions;
						accuracy = directions[this.joystick.directions * 2][Math.floor(((orientation + segment / 2) % (Math.PI * 2)) / segment)];
						if(accuracy !== direction){
							this.owner.trigger(accuracy.replace(direction, '').replace('-',''), event);  //There's probably a better way to perform this, but the current method is functional. - DDD
						}
					}
					this.owner.trigger(direction, event);
					this.owner.trigger("joystick-orientation", orientation);
				}
			}
		}
	});
})();


/*--------------------------------------------------
 *   fullscreen - ../engine/components/fullscreen.js
 */
/**
# COMPONENT **fullscreen**
This component listens for "toggle-fullscreen" messages to toggle the game's container to full-screen and back.

Note: This component connects to the browser's fullscreen API if available. It also sets a "full-screen" class on the game container that should be styled in CSS for proper behavior.

## Dependencies:
- [[Render-Animation]] (component on entity) - This component listens for the "animation-complete" event triggered by render-animation.

## Messages:

### Listens for:
- **toggle-fullscreen** - On receiving this message, the component will go fullscreen if not already in fullscreen mode, and vice-versa.

## JSON Definition:
    {
      "type": "fullscreen"
    }
*/

//TODO: Ideally this should be set up to work for any given element, not just the game container. - DDD
(function(){
	var enabled = false,
	element = null,
	turnOffFullScreen = function(){
		enabled = false;
		element.className = element.className.replace(/ full-screen/g, '');
		platformer.game.bindings['resize'].callback();
	},
	toggleFullscreen = function(){
		if(enabled){
			if(document.webkitExitFullscreen){
				document.webkitExitFullscreen();
			} else if (document.mozCancelFullScreen) {
				document.mozCancelFullScreen();
			} else if (document.exitFullscreen) {
				document.exitFullscreen();
			}
			turnOffFullScreen();
		} else {
			enabled = true;
			element.className += ' full-screen';
			if(element.webkitRequestFullscreen){
				if(!platformer.game.settings.supports.safari || platformer.game.settings.supports.chrome){ //Safari doesn't allow all keyboard input in fullscreen which breaks game input - DDD 5/27/2013
					element.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
				}
			} else if (element.mozRequestFullScreen) {
				element.mozRequestFullScreen();
			} else if (element.requestFullscreen) {
				element.requestFullscreen(); // Opera
			}
			platformer.game.bindings['resize'].callback();
		}
	};
	document.addEventListener('fullscreenchange', function(e){
		if(!document.fullscreenElement){
			turnOffFullScreen();
		}
	});
	document.addEventListener('webkitfullscreenchange', function(e){
		if(!document.webkitFullscreenElement){
			turnOffFullScreen();
		}
	});
	document.addEventListener('mozfullscreenchange', function(e){
		if(!document.mozFullScreenElement){
			turnOffFullScreen();
		}
	});
	
	return platformer.createComponentClass({
		id: 'fullscreen',
		constructor: function(definition){
			if (!element) {
				element = platformer.game.containerElement;
			}
		},
		events:{
			"toggle-fullscreen": toggleFullscreen
		}
	});
	
})();


/*--------------------------------------------------
 *   render-debug - ../engine/components/render-debug.js
 */
/**
# COMPONENT **render-debug**
This component is attached to entities that will appear in the game world. It serves two purposes. First, it displays a rectangle that indicates location of the object. By default it uses the specified position and dimensions of the object (in grey), if the object has a collision component it will display the AABB of the collision shape (in pink). If the entity has a [[Logic-Carrier]] component and is/was carrying an object, a green rectangle will be drawn showing the collision group. The render-debug component also allows the user to click on an object and it will print the object in the debug console. 

## Dependencies
- [[handler-render-createjs]] (on entity's parent) - This component listens for a render "handle-render" and "handle-render-load" message to setup and display the content.

## Messages

### Listens for:
- **handle-render** - Repositions the pieces of the component in preparation for rendering
- **handle-render-load** - The visual components are set up and added to the stage. Setting up mouse input stuff. The click-to-print-to-console functionality is set up too. 
  - @param resp.stage ([createjs.Stage][link1]) - This is the stage on which the component will be displayed.

### Local Broadcasts:
- **mousedown** - Render-debug captures this message and uses it and then passes it on to the rest of the object in case it needs to do something else with it.
  - @param event (event object) - The event from Javascript.
  - @param over (boolean) - Whether the mouse is over the object or not.
  - @param x (number) - The x-location of the mouse in stage coordinates.
  - @param y (number) - The y-location of the mouse in stage coordinates.
  - @param entity ([[Entity]]) - The entity clicked on.  
- **mouseup** - Render-debug captures this message and uses it and then passes it on to the rest of the object in case it needs to do something else with it.
  - @param event (event object) - The event from Javascript.
  - @param over (boolean) - Whether the mouse is over the object or not.
  - @param x (number) - The x-location of the mouse in stage coordinates.
  - @param y (number) - The y-location of the mouse in stage coordinates.
  - @param entity ([[Entity]]) - The entity clicked on.  
- **mousemove** - Render-debug captures this message and uses it and then passes it on to the rest of the object in case it needs to do something else with it.
  - @param event (event object) - The event from Javascript.
  - @param over (boolean) - Whether the mouse is over the object or not.
  - @param x (number) - The x-location of the mouse in stage coordinates.
  - @param y (number) - The y-location of the mouse in stage coordinates.
  - @param entity ([[Entity]]) - The entity clicked on.  

## JSON Definition
    {
      "type": "render-debug",
      "acceptInput": {
      	//Optional - What types of input the object should take.
      	"hover": false;
      	"click": false; 
      }, 
      "regX": 0,
      //Optional - The X offset from X position for the displayed shape. If you're using the AABB this is set automatically.
      "regY": 0
      //Optional - The Y offset from Y position for the displayed shape. If you're using the AABB this is set automatically.
    }
    
[link1]: http://createjs.com/Docs/EaselJS/Stage.html
*/

(function(){
	var types = {
		"aabb":      "255,128,255",
		"render":    "128,128,128",
		"collision": "255,0,255",
		"group":     "0,255,0"
	},
	createShape = function(shape, type, width, height, regX, regY, z){
		var newShape = null;
		
		switch(shape){
		case 'rectangle':
			newShape = new createjs.Shape((new createjs.Graphics()).beginFill("rgba(" + types[type] + ",0.1)").setStrokeStyle(3).beginStroke("rgb(" + types[type] + ")").rect(0, 0, width, height));
			regX += width/2;
			regY += height/2;
			break;
		case 'circle':
			regX += width/2;
			regY += width/2;
			newShape = new createjs.Shape((new createjs.Graphics()).beginFill("rgba(" + types[type] + ",0.1)").setStrokeStyle(3).beginStroke("rgb(" + types[type] + ")").drawCircle(width/2, width/2, width));
			break;
		}
		newShape.regX  = regX;
		newShape.regY  = regY;
		newShape.z = z;
		
		return newShape;
	};
	
	return platformer.createComponentClass({
		
		id: 'render-debug', 
		
		constructor: function(definition){
			if(definition.acceptInput){
				this.hover = definition.acceptInput.hover || false;
				this.click = definition.acceptInput.click || false;
			} else {
				this.hover = false;
				this.click = false;
			}
			
			this.regX = definition.regX || 0;
			this.regY = definition.regY || 0;
			this.stage = undefined;
			this.shapes = [];
		},
		
		events: {// These are messages that this component listens for
			"handle-render-load": function(resp){
				var self = this,
				z        = (this.owner.z || 0) + 10000,
				i        = 0,
				j        = 0,
				width    = this.owner.width  = this.owner.width  || 300,
				height   = this.owner.height = this.owner.height || 100,
				over     = false,
				shapes   = null,
				aabb     = null;
				
				this.stage = resp.stage;
				
				if(this.owner.getAABB){
					for(j = 0; j < this.owner.collisionTypes.length; j++){
						aabb   = this.owner.getAABB(this.owner.collisionTypes[j]);
						width  = this.initialWidth  = aabb.width;
						height = this.initialHeight = aabb.height;
						shapes = this.owner.getShapes(this.owner.collisionTypes[j]);
						
						this.shapes.push(createShape('rectangle', 'aabb', width, height, this.owner.x - aabb.x, this.owner.y - aabb.y, z--));
						this.stage.addChild(this.shapes[this.shapes.length - 1]);
						
						for(i = 0; i < shapes.length; i++){
							this.shapes.push(createShape(shapes[i].type, 'collision', shapes[i].radius || shapes[i].width, shapes[i].height, -shapes[i].offsetX, -shapes[i].offsetY, z--));
							this.stage.addChild(this.shapes[this.shapes.length - 1]);
						}
					}
				} else {
					this.shapes.push(createShape('rectangle', 'render', width, height, width/2, height/2, z--));
					this.stage.addChild(this.shapes[0]);
				}
				
				// The following appends necessary information to displayed objects to allow them to receive touches and clicks
				if(this.click && createjs.Touch.isSupported()){
					createjs.Touch.enable(this.stage);
				}
		
				this.shapes[0].onPress     = function(event) {
					if(this.click){
						self.owner.trigger('mousedown', {
							event: event.nativeEvent,
							over: over,
							x: event.stageX,
							y: event.stageY,
							entity: self.owner
						});
						event.onMouseUp = function(event){
							self.owner.trigger('mouseup', {
								event: event.nativeEvent,
								over: over,
								x: event.stageX,
								y: event.stageY,
								entity: self.owner
							});
						};
						event.onMouseMove = function(event){
							self.owner.trigger('mousemove', {
								event: event.nativeEvent,
								over: over,
								x: event.stageX,
								y: event.stageY,
								entity: self.owner
							});
						};
					}
					if(event.nativeEvent.button == 2){
						console.log('This Entity:', self.owner);
					}
				};
				if(this.click){
					this.shapes[0].onMouseOut  = function(){over = false;};
					this.shapes[0].onMouseOver = function(){over = true;};
				}
				if(this.hover){
					this.stage.enableMouseOver();
					this.shapes[0].onMouseOut  = function(event){
						over = false;
						self.owner.trigger('mouseout', {
							event: event.nativeEvent,
							over: over,
							x: event.stageX,
							y: event.stageY,
							entity: self.owner
						});
					};
					this.shapes[0].onMouseOver = function(event){
						over = true;
						self.owner.trigger('mouseover', {
							event: event.nativeEvent,
							over: over,
							x: event.stageX,
							y: event.stageY,
							entity: self.owner
						});
					};
				}
		
				if(!platformer.game.settings.debug){
					this.owner.removeComponent(this);
				}
			},
			
			"handle-render": function(){
				var i = 0;
				
/*				if(this.owner.getAABB){
					var aabb   = this.owner.getAABB();
					this.shapes[0].scaleX = aabb.width / this.initialWidth;
					this.shapes[0].scaleY = aabb.height / this.initialHeight;
				}*/
				
				for(i = 0; i < this.shapes.length; i++){
					this.shapes[i].x = this.owner.x;
					this.shapes[i].y = this.owner.y;
				}
				
				if(this.owner.getCollisionGroupAABB){
					var aabb = this.owner.getCollisionGroupAABB();
					if(!this.groupShape){
						this.groupShape = new createjs.Shape((new createjs.Graphics()).beginFill("rgba(255,255,0,0.2)").rect(0, 0, 1, 1));
						this.groupShape.regX  = 0.5;
						this.groupShape.regY  = 0.5;
						this.groupShape.z     = (this.owner.z || 0) + 10000;
						this.stage.addChild(this.groupShape);
						console.log(aabb);
					}
					this.groupShape.scaleX = aabb.width;
					this.groupShape.scaleY = aabb.height;
					this.groupShape.x      = aabb.x;
					this.groupShape.y      = aabb.y;
				}
			}
		},
		
		methods:{
			destroy: function(){
				var i = 0;
				
				for(i = 0; i < this.shapes.length; i++){
					this.stage.removeChild(this.shapes[i]);
				}
				this.shapes.length = 0;
				this.stage = undefined;
			}
		}
	});
})();


/*--------------------------------------------------
 *   render-tiles - ../engine/components/render-tiles.js
 */
/**
# COMPONENT **render-tiles**
This component handles rendering tile map backgrounds. When rendering the background, this component figures out what tiles are being displayed as caches them so they are rendered as one image rather than individually. As the camera moves, the cache is updated by blitting the relevant part of the old cached image into the new cached image and then rendering the tiles that have shifted into the camera's view into the cache.

## Dependencies:
- [createjs.EaselJS][link1] - This component requires the EaselJS library to be included for canvas functionality.
- [[handler-render-createjs]] (on entity's parent) - This component listens for a render "handle-render-load" message to setup and display the content. This component is removed from the Handler-Render-Createjs list after the first tick because it doesn't possess a handle-render function. Instead it uses the camera-update function to update itself.

## Messages

### Listens for:
- **add-tiles** - This event adds a layer of tiles to render on top of the existing layer of rendered tiles.
  - @param message.imageMap (2d array) - Required. This lists a mapping of tile indexes to be rendered.
- **camera-loaded** - Provides the width and height of the world.
- **camera-update** - Triggered when the camera moves, this function updates which tiles need to be rendered and caches the image.
  - @param camera (object) - Required. Provides information about the camera.
- **handle-render-load** - This event is triggered before `handle-render` and provides the CreateJS stage that this component will require to display. In this case it compiles the array of tiles that make up the map and adds the tilesToRender displayObject to the stage.
  - @param message.stage ([createjs.Stage][link2]) - Required. Provides the render component with the CreateJS drawing [Stage][link2].

## JSON Definition
    {
      "type": "render-animation",
      "spritesheet": 
      //Required - The spritesheet for all the tile images.
      "imageMap" : [],
      //Required - This is a two dimensional array of the spritesheet indexes that describe the map that you're rendering.
	  "scaleX" : 1,
	  //Optional - The x-scale the tilemap is being displayed at. Defaults to 1.
	  "scaleY"  : 1,
	  //Optional - The y-scale the tilemap is being displayed at. Defaults to 1.
	  "tileWidth"  : 32,
	  //Optional - The the width in pixels of a tile. Defaults to 10.
	  "tileHeight"  : 32,
	  //Optional - The the height in pixels of a tile. Defaults to 10.
	  "buffer"  : 32
	  //Optional - The amount of space in pixels around the edge of the camera that we include in the buffered image. Is multiplied by the scaleX to get the actual buffersize. Defaults to the tileWidth.
    }
    
[link1]: http://www.createjs.com/Docs/EaselJS/module_EaselJS.html
[link2]: http://createjs.com/Docs/EaselJS/Stage.html
*/
(function(){
	var initializeCanvasConservation = function(displayObject){ //To make CreateJS Display Object have better canvas conservation.
		var canvas = [document.createElement("canvas"), document.createElement("canvas")],
		current    = 0;
		
		if(!displayObject.___cache){ //make sure this is only set up once
			displayObject.___cache = displayObject.cache;
			
			displayObject.cache = function(x, y, width, height, scale) {
				current = 1 - current;
				this.cacheCanvas = canvas[current];
				this.___cache(x, y, width, height, scale);
			};
		}
		
		return displayObject;
	},
	transform = {
		x: 1,
		y: 1,
		t: -1,
		r: 0
	},
	transformCheck = function(value){
		var v = +(value.substring(4)),
		resp  = transform,
		a = !!(0x20000000 & v),
		b = !!(0x40000000 & v),
		c = !!(0x80000000 & v);
		
		resp.t = 0x0fffffff & v;
		resp.x = 1;
		resp.y = 1;
		resp.r = 0;

		if(a || b || c){
			if(a && b && c){
				resp.x = -1;
				resp.r = 90;
			} else if (a && c){
				resp.r = 90;
			} else if (b && c){
				resp.r = 180;
			} else if (a && b){
				resp.r = 270;
			} else if (a){
				resp.y = -1;
				resp.r = 90;
			} else if (b){
				resp.y = -1;
			} else if (c){
				resp.x = -1;
			}
		}
		return resp;
	};

	return platformer.createComponentClass({
		
		id: 'render-tiles',
		
		constructor: function(definition){
			var x = 0,
			images = definition.spriteSheet.images.slice(),
			spriteSheet = null,
			scaleX = 1,
			scaleY = 1;
			
			if(images[0] && (typeof images[0] === 'string')){
				images = images.slice(); //so we do not overwrite settings array
				for (x = 0; x < images.length; x++){
					if(platformer.assets[images[x]]){
						images[x] = platformer.assets[images[x]];
					}
				}
			}
	
			spriteSheet = {
				images: images,
				frames: definition.spriteSheet.frames,
				animations: definition.spriteSheet.animations
			};
			scaleX = spriteSheet.images[0].scaleX || 1;
			scaleY = spriteSheet.images[0].scaleY || 1;
	
			if((scaleX !== 1) || (scaleY !== 1)){
				spriteSheet.frames = {
					width: spriteSheet.frames.width * scaleX,	
					height: spriteSheet.frames.height * scaleY,	
					regX: spriteSheet.frames.regX * scaleX,	
					regY: spriteSheet.frames.regY * scaleY
				};
			}
	
			this.controllerEvents = undefined;
			this.spriteSheet   = new createjs.SpriteSheet(spriteSheet);
			this.imageMap      = definition.imageMap   || [];
			this.tiles         = {};
			this.tilesToRender = undefined;
			this.scaleX        = ((definition.scaleX || 1) * (this.owner.scaleX || 1)) / scaleX;
			this.scaleY        = ((definition.scaleY || 1) * (this.owner.scaleY || 1)) / scaleY;
			this.tileWidth     = definition.tileWidth  || (this.owner.tileWidth / this.scaleX)  || 10;
			this.tileHeight    = definition.tileHeight || (this.owner.tileHeight / this.scaleY) || 10;
			
			// temp values
			this.worldWidth    = this.tilesWidth    = this.tileWidth;
			this.worldHeight   = this.tilesHeight   = this.tileHeight;
			
			
			var buffer = (definition.buffer || (this.tileWidth * 3 / 4)) * this.scaleX;
			this.camera = {
				x: -buffer - 1, //to force camera update
				y: -buffer - 1,
				buffer: buffer
			};
			this.cache = {
				minX: -1,
				minY: -1,
				maxX: -1,
				maxY: -1
			};
			
			this.doubleBuffer = [null, null];
			this.currentBuffer = 0;
		},

		events: {// These are messages that this component listens for
			"handle-render-load": function(resp){
				var x = 0,
				y     = 0,
				stage = this.stage = resp.stage,
				index = '',
				imgMapDefinition = this.imageMap,
				newImgMap = [];
				
				this.tilesToRender = initializeCanvasConservation(new createjs.Container());
				this.tilesToRender.name = 'entity-managed'; //its visibility is self-managed
				
				for(x = 0; x < imgMapDefinition.length; x++){
					newImgMap[x] = [];
					for (y = 0; y < imgMapDefinition[x].length; y++){
						newImgMap[x][y] = index = imgMapDefinition[x][y];
						if(!this.tiles[index]){
							this.tiles[index] = this.createTile(index);
						}
					}
				}
				this.imageMap = newImgMap;
				
				this.tilesWidth  = x * this.tileWidth;
				this.tilesHeight = y * this.tileHeight;
				
				this.tilesToRender.scaleX = this.scaleX;
				this.tilesToRender.scaleY = this.scaleY;
				this.tilesToRender.z = this.owner.z;
		
				stage.addChild(this.tilesToRender);
			},
	
			"add-tiles": function(definition){
				var x = 0,
				y     = 0,
				map   = definition.imageMap,
				index = '',
				newIndex = 0;
				
				if(map){
					for(x = 0; x < this.imageMap.length; x++){
						for (y = 0; y < this.imageMap[x].length; y++){
							newIndex = map[x][y];
							index = this.imageMap[x][y];
							if(this.tiles[index]){
								delete this.tiles[index];
							}
							index = this.imageMap[x][y] += ' ' + newIndex;
							if(!this.tiles[index]){
								this.tiles[index] = this.createTile(index);
							}
						}
					}
				}
			},

			"camera-loaded": function(dimensions){
				this.worldWidth  = dimensions.width;
				this.worldHeight = dimensions.height;
			},

			"camera-update": function(camera){
				var x  = 0,
				y      = 0,
				buffer = this.camera.buffer,
				cache  = this.cache,
				context= null,
				canvas = null,
				width  = 0,
				height = 0,
				maxX   = 0,
				maxY   = 0,
				minX   = 0,
				minY   = 0,
				camL   = this.convertCamera(camera.viewportLeft, this.worldWidth, this.tilesWidth, camera.viewportWidth),
				camT   = this.convertCamera(camera.viewportTop, this.worldHeight, this.tilesHeight, camera.viewportHeight),
				vpL    = Math.floor(camL / this.tileWidth)  * this.tileWidth,
				vpT    = Math.floor(camT / this.tileHeight) * this.tileHeight,
				tile   = null;
				
				this.tilesToRender.x = camera.viewportLeft - camL;
				this.tilesToRender.y = camera.viewportTop  - camT;
						
				if (((Math.abs(this.camera.x - vpL) > buffer) || (Math.abs(this.camera.y - vpT) > buffer)) && (this.imageMap.length > 0)){
					this.camera.x = vpL;
					this.camera.y = vpT;
					
					//only attempt to draw children that are relevant
					maxX = Math.min(Math.ceil((vpL + camera.viewportWidth + buffer) / (this.tileWidth * this.scaleX)), this.imageMap.length) - 1;
					minX = Math.max(Math.floor((vpL - buffer) / (this.tileWidth * this.scaleX)), 0);
					maxY = Math.min(Math.ceil((vpT + camera.viewportHeight + buffer) / (this.tileHeight * this.scaleY)), this.imageMap[0].length) - 1;
					minY = Math.max(Math.floor((vpT - buffer) / (this.tileHeight * this.scaleY)), 0);
		
					if((maxY > cache.maxY) || (minY < cache.minY) || (maxX > cache.maxX) || (minX < cache.minX)){
						if(this.tilesToRender.cacheCanvas){
							canvas = this.tilesToRender.cacheCanvas;
							this.tilesToRender.uncache();
						}
						
						this.tilesToRender.removeChildAt(0);
						this.tilesToRender.cache(minX * this.tileWidth, minY * this.tileHeight, (maxX - minX + 1) * this.tileWidth, (maxY - minY + 1) * this.tileHeight, 1);
						
						for(x = minX; x <= maxX; x++){
							for (y = minY; y <= maxY; y++){
								if((y > cache.maxY) || (y < cache.minY) || (x > cache.maxX) || (x < cache.minX)){
									tile = this.tiles[this.imageMap[x][y]];
									this.tilesToRender.removeChildAt(0); // Leaves one child in the display object so createjs will render the cached image.
									this.tilesToRender.addChild(tile);
									tile.x = (x + 0.5) * this.tileWidth;
									tile.y = (y + 0.5) * this.tileHeight;
									this.tilesToRender.updateCache('source-over');
								}
							}
						}
		
						if(canvas){
							context = this.tilesToRender.cacheCanvas.getContext('2d');
							width   = (cache.maxX - cache.minX + 1) * this.tileWidth;
							height  = (cache.maxY - cache.minY + 1) * this.tileHeight;
							context.drawImage(canvas, 0, 0, width, height, (cache.minX - minX) * this.tileWidth, (cache.minY - minY) * this.tileHeight, width, height);
							cache.minX = minX;
							cache.minY = minY;
							cache.maxX = maxX;
							cache.maxY = maxY;
						}
					}
				}
			}
		},
	
		methods:{
			convertCamera: function(distance, worldDistance, tileDistance, viewportDistance){
				if((worldDistance / this.scaleX) == tileDistance){
					return distance;
				} else {
					return distance * (tileDistance - viewportDistance) / ((worldDistance / this.scaleX) - viewportDistance);
				}
			},
			
			createTile: function(imageName){
				var i = 1,
				imageArray = imageName.split(' '),
				mergedTile = null,
				tile  = new createjs.Sprite(this.spriteSheet, 0),
				layer = transformCheck(imageArray[0]);
				
				tile.x = 0;
				tile.y = 0;
				tile.regX = this.tileWidth / 2;
				tile.regY = this.tileHeight / 2;
				tile.scaleX = layer.x;
				tile.scaleY = layer.y;
				tile.rotation = layer.r;
				tile.gotoAndStop('tile' + layer.t);
				
				for (; i < imageArray.length; i++){
					if(imageArray[i] !== 'tile-1'){
						if(!mergedTile){
							mergedTile = new createjs.Container();
							mergedTile.addChild(tile);
							mergedTile.cache(-this.tileWidth/2,-this.tileHeight/2,this.tileWidth,this.tileHeight,1);
							
//							document.getElementsByTagName('body')[0].appendChild(mergedTile.cacheCanvas);
//							mergedTile.cacheCanvas.setAttribute('title', imageName + ': ' + mergedTile._cacheOffsetX + 'x' + mergedTile._cacheOffsetY + ', ' + mergedTile.cacheCanvas.width + 'x' + mergedTile.cacheCanvas.height + ', ' + mergedTile._cacheScale + ', ' + mergedTile.cacheID + ', ' + !!mergedTile.filters);
							//console.log(imageName);
						}
						layer = transformCheck(imageArray[i]);
						tile.scaleX = layer.x;
						tile.scaleY = layer.y;
						tile.rotation = layer.r;
						tile.gotoAndStop('tile' + layer.t);
						mergedTile.updateCache('source-over');
					}
				}

				if(mergedTile){
					return mergedTile;
				} else {
					tile.cache(0,0,this.tileWidth,this.tileHeight,1);
					return tile;
				}
			},
			
			destroy: function(){
				this.tilesToRender.removeAllChildren();
				this.stage.removeChild(this.tilesToRender);
				this.imageMap.length = 0;
				this.tiles = undefined;
				this.camera = undefined;
				this.stage = undefined;
				this.tilesToRender = undefined;
			}
		}
	});
})();


/*--------------------------------------------------
 *   render-animation - ../engine/components/render-animation.js
 */
/**
# COMPONENT **render-animation**
This component is attached to entities that will appear in the game world. It renders an animated image. It listens for messages triggered on the entity or changes in the logical state of the entity to play a corresponding animation.

## Dependencies:
- [createjs.EaselJS][link1] - This component requires the EaselJS library to be included for canvas animation functionality.
- [[handler-render-createjs]] (on entity's parent) - This component listens for a render "handle-render" and "handle-render-load" message to setup and display the content.

## Messages

### Listens for:
- **handle-render-load** - This event is triggered when the entity is added to the render handler before 'handle-render' is called. It adds the animation to the Stage and sets up the mouse input if necessary.
  - @param message.stage ([createjs.Stage][link2]) - Required. Provides the render component with the CreateJS drawing [Stage][link2].
- **handle-render** - On each `handle-render` message, this component checks to see if there has been a change in the state of the entity. If so, it updates its animation play-back accordingly.
- **logical-state** - This component listens for logical state changes and tests the current state of the entity against the animation map. If a match is found, the matching animation is played. Has some reserved values used for special functionality.
  - @param message (object) - Required. Lists various states of the entity as boolean values. For example: {jumping: false, walking: true}. This component retains its own list of states and updates them as `logical-state` messages are received, allowing multiple logical components to broadcast state messages. Reserved values: 'orientation' and 'hidden'. Orientation is used to set the angle value in the object, the angle value will be interpreted differently based on what the 'rotate', 'mirror', and 'flip' properties are set to. Hidden determines whether the animation is rendered.
- **pin-me** - If this component has a matching pin location, it will trigger "attach-pin" on the entity with the matching pin location.
  - @param pinId (string) - Required. A string identifying the id of a pin location that the render-animation wants to be pinned to.
- **attach-pin** - On receiving this message, the component checks whether it wants to be pinned, and if so, adds itself to the provided container.
  - @param pinId (string) - Pin Id of the received pin location.
  - @param container ([createjs.Container][link3]) - Container that render-animation should be added to.
- **remove-pin** - On receiving this message, the component checks whether it is pinned, and if so, removes itself from the container.
  - @param pinId (string) - Pin Id of the pin location to remove itself from.
- **hide-animation** - Makes the animation invisible.
- **show-animation** - Makes the animation visible.
- **[Messages specified in definition]** - Listens for additional messages and on receiving them, begins playing the corresponding animations.

### Local Broadcasts:
- **mousedown** - This component captures this event from CreateJS and triggers it on the entity.
  - @param event (event object) - The event from Javascript.
  - @param over (boolean) - Whether the mouse is over the object or not.
  - @param x (number) - The x-location of the mouse in stage coordinates.
  - @param y (number) - The y-location of the mouse in stage coordinates.
  - @param entity ([[Entity]]) - The entity clicked on.  
- **mouseup** - This component captures this event from CreateJS and triggers it on the entity.
  - @param event (event object) - The event from Javascript.
  - @param over (boolean) - Whether the mouse is over the object or not.
  - @param x (number) - The x-location of the mouse in stage coordinates.
  - @param y (number) - The y-location of the mouse in stage coordinates.
  - @param entity ([[Entity]]) - The entity clicked on.  
- **mousemove** - This component captures this event from CreateJS and triggers it on the entity.
  - @param event (event object) - The event from Javascript.
  - @param over (boolean) - Whether the mouse is over the object or not.
  - @param x (number) - The x-location of the mouse in stage coordinates.
  - @param y (number) - The y-location of the mouse in stage coordinates.
  - @param entity ([[Entity]]) - The entity clicked on.  
- **pin-me** - If this component should be pinned to another animation, it will trigger this event in an attempt to initiate the pinning.
  - @param pinId (string) - Required. A string identifying the id of a pin location that this render-animation wants to be pinned to.
- **attach-pin** - This component broadcasts this message if it has a list of pins available for other animations on the entity to attach to.
  - @param pinId (string) - Pin Id of an available pin location.
  - @param container ([createjs.Container][link3]) - Container that the render-animation should be added to.
- **remove-pin** - When preparing to remove itself from an entity, render-animation broadcasts this to all attached animations.
  - @param pinId (string) - Pin Id of the pin location to be removed.

## JSON Definition
    {
      "type": "render-animation",

      "animationMap":{
      //Optional. If the animation sequence will change, this is required. This defines a mapping from either triggered messages or one or more states for which to choose a new animation to play. The list is processed from top to bottom, so the most important actions should be listed first (for example, a jumping animation might take precedence over an idle animation).
      
          "standing": "default-animation"
          // On receiving a "standing" message, or a "logical-state" where message.standing == true, the "default" animation will begin playing.
          
          "ground,moving": "walking",
          // Comma separated values have a special meaning when evaluating "logical-state" messages. The above example will cause the "walking" animation to play ONLY if the entity's state includes both "moving" and "ground" equal to true.
          
          "ground,striking": "swing!",
          // Putting an exclamation after an animation name causes this animation to complete before going to the next animation. This is useful for animations that would look poorly if interrupted.

          "default": "default-animation",
          // Optional. "default" is a special property that matches all states. If none of the above states are valid for the entity, it will use the default animation listed here.
      }  

      "spriteSheet": {
      //Required. Defines an EaselJS sprite sheet to use for rendering. See http://www.createjs.com/Docs/EaselJS/SpriteSheet.html for the full specification.

	      "images": ["example0", "example1"],
	      //Required: An array of ids of the images from the asset list in config.js.
	      
	      "frames": {
	      //Required: The dimensions of the frames on the image and how to offset them around the entity position. The image is automatically cut up into pieces based on the dimensions. 
	      	"width":  100,
			"height": 100,
			"regY":   100,
			"regX":   50
	      },
	      
	      "animations":{
	      //Required: The list of animation ids and the frames that make up that animation. The speed determines how long each frame plays. There are other possible parameters. Additional parameters and formatting info can be found in createJS.
			"default-animation":[2],
			"walking": {"frames": [0, 1, 2], "speed": 4},
			"swing": {"frames": [3, 4, 5], "speed": 4}
		  }
      }
      
      "acceptInput": {
      	//Optional - What types of input the object should take. This component defaults to not accept any input.
      	"hover": false;
      	"click": false; 
      },
      
      "pins": [{
      //Optional. Specifies whether other animations can pin themselves to this animation. This is useful for puppet-like dynamics
      
        "pinId": "head",
        //Required. How this pin location should be referred to by other animations in order to link up.
        
        "x": 15,
        "y": -30,
        //These two values are required unless "frames" is provided below. Defines where the other animation's regX and regY should be pinned to this animation.
        
        "frames": [{"x": 12, "y": -32}, null, {"x": 12}]
        //Alternatively, pin locations can be specified for every frame in this animation by providing an array. If a given index is null or a parameter is undefined, the x/y/z values above are used. If they're not specified, the pinned animation is hidden.
      }],

      "pinTo": "body",
      //Optional. Pin id of another animation on this entity to pin this animation to.
      
      "scaleX": 1,
      //Optional - The X scaling factor for the image. Will default to 1.
      
      "scaleY": 1
      //Optional - The Y scaling factor for the image. Will default to 1.

      "offsetZ": -1
      //Optional - How much the z-index of the animation should be relative to the entity's z-index. Will default to 0.

      "rotate": false,
      //Optional - Whether this object can be rotated. It's rotational angle is set by sending an orientation value in the logical state.
      
      "mirror": true,
      //Optional - Whether this object can be mirrored over X. To mirror it over X set the orientation value in the logical state to be great than 90 but less than 270.
      
      "flip": false,
      //Optional - Whether this object can be flipped over Y. To flip it over Y set the orientation value in the logical state to be great than 180.
      
      "hidden": false
      //Optional - Whether this object is visible or not. To change the hidden value dynamically add a 'hidden' property to the logical state object and set it to true or false.
    }
    
[link1]: http://www.createjs.com/Docs/EaselJS/module_EaselJS.html
[link2]: http://createjs.com/Docs/EaselJS/Stage.html
[link3]: http://createjs.com/Docs/EaselJS/Container.html
*/
(function(){
	var changeState = function(state){
		return function(value){
			//9-23-13 TML - Commenting this line out to allow animation events to take precedence over the currently playing animation even if it's the same animation. This is useful for animations that should restart on key events.
			//				We may eventually want to add more complexity that would allow some animations to be overridden by messages and some not.
			//if(this.currentAnimation !== state){
				if(this.animationFinished || (this.lastState >= -1)){
					this.currentAnimation = state;
					this.lastState = -1;
					this.animationFinished = false;
					this.anim.gotoAndPlay(state);
				} else {
					this.waitingAnimation = state;
					this.waitingState = -1;
				}
			//}
		};
	},
	createTest = function(testStates, animation){
		var states = testStates.replace(/ /g, '').split(',');
		if(testStates === 'default'){
			return function(state){
				return animation;
			};
		} else {
			return function(state){
				for(var i = 0; i < states.length; i++){
					if(!state[states[i]]){
						return false;
					}
				}
				return animation;
			};
		}
	};
	
	return platformer.createComponentClass({
		
		id: 'render-animation',
		
		constructor: function(definition){
			var spriteSheet = {
				framerate: definition.spriteSheet.framerate,
				images: definition.spriteSheet.images.slice(),
				frames: definition.spriteSheet.frames,
				animations: definition.spriteSheet.animations
			},
			self = this,
			x = 0,
			animation = '',
			lastAnimation = '',
			map = definition.animationMap,
			regX = 0,
			regY = 0;
			
			this.rotate = definition.rotate || false;
			this.mirror = definition.mirror || false;
			this.flip   = definition.flip   || false;
			
			if(definition.acceptInput){
				this.hover = definition.acceptInput.hover || false;
				this.click = definition.acceptInput.click || false;
				this.touch = definition.acceptInput.touch || false;
			} else {
				this.hover = false;
				this.click = false;
				this.touch = false;
			}
			
			this.followThroughs = {};
			
			if(!map){ // create animation map if none exists
				map = {};
				for (x in spriteSheet.animations){
					map[x] = x;
				}
			}
			
			this.checkStates = [];
			for(var i in map){
				this.addListener(i);
				animation = map[i];
				
				if(animation[animation.length - 1] === '!'){
					animation = animation.substring(0, animation.length - 1);
					this.followThroughs[animation] = true;
				} else {
					this.followThroughs[animation] = false;
				}
				
				this[i] = changeState(animation);
				this.checkStates.push(createTest(i, animation));
			}
			lastAnimation = animation;
			
			this.stage = undefined;
			for (x = 0; x < spriteSheet.images.length; x++){
				spriteSheet.images[x] = platformer.assets[spriteSheet.images[x]];
			}
			var scaleX = spriteSheet.images[0].scaleX || 1,
			scaleY     = spriteSheet.images[0].scaleY || 1;
			if((scaleX !== 1) || (scaleY !== 1)){
				if(spriteSheet.frames.length){ //frames are an array
					var arr = [];
					regX = [];
					regY = [];
					for (var i = 0; i < spriteSheet.frames.length; i++){
						arr.push([
						  spriteSheet.frames[i][0] * scaleX,
						  spriteSheet.frames[i][1] * scaleY,
						  spriteSheet.frames[i][2] * scaleX,
						  spriteSheet.frames[i][3] * scaleY,
						  spriteSheet.frames[i][4],
						  spriteSheet.frames[i][5] * scaleX,
						  spriteSheet.frames[i][6] * scaleY
						]);
						regX.push(spriteSheet.frames[i][5]);
						regY.push(spriteSheet.frames[i][6]);
					}
					spriteSheet.frames = arr;
				} else {
					regX = spriteSheet.frames.regX;
					regY = spriteSheet.frames.regY;
					spriteSheet.frames = {
						width: spriteSheet.frames.width * scaleX,	
						height: spriteSheet.frames.height * scaleY,	
						regX: spriteSheet.frames.regX * scaleX,	
						regY: spriteSheet.frames.regY * scaleY
					};
				}
			} else {
				if(spriteSheet.frames.length){ //frames are an array
					regX = [];
					regY = [];
					for (var i = 0; i < spriteSheet.frames.length; i++){
						regX.push(spriteSheet.frames[i][5]);
						regY.push(spriteSheet.frames[i][6]);
					}
				} else {
					regX = spriteSheet.frames.regX;
					regY = spriteSheet.frames.regY;
				}
			}

			spriteSheet = new createjs.SpriteSheet(spriteSheet);
			this.anim = new createjs.Sprite(spriteSheet, 0);

			if(definition.pins){
				this.container = new createjs.Container();
				this.container.addChild(this.anim);
				this.anim.z = 0;
				this.addPins(definition.pins, regX, regY);
			} else {
				this.container = this.anim;
			}

			this.pinTo = definition.pinTo || false;
			if(this.pinTo){
				this.owner.trigger('pin-me', this.pinTo);
			}
			
			this.anim.onAnimationEnd = function(animationInstance, lastAnimation){
				self.owner.trigger('animation-ended', lastAnimation);
				if(self.waitingAnimation){
					self.currentAnimation = self.waitingAnimation;
					self.waitingAnimation = false;
					self.lastState = self.waitingState;
					
					self.animationFinished = false;
					self.anim.gotoAndPlay(self.currentAnimation);
				} else {
					self.animationFinished = true;
				}
			};
			this.anim.hidden = definition.hidden   || false;
			this.currentAnimation = map['default'] || lastAnimation;
			this.forcePlaythrough = this.owner.forcePlaythrough || definition.forcePlaythrough || false;

			this.worldScaleX = definition.scaleX;
			this.worldScaleY = definition.scaleY;
			this.imageScaleX = scaleX;
			this.imageScaleY = scaleY;
			this.lastOwnerScaleX = this.owner.scaleX;
			this.lastOwnerScaleY = this.owner.scaleY;
			
			//This applies scaling to the correct objects if container and animation are separate, and applies them both to the animation if the container is also the animation. - DDD
			this.container.scaleX = (this.worldScaleX || 1) * (this.owner.scaleX || 1);
			this.container.scaleY = (this.worldScaleY || 1) * (this.owner.scaleY || 1);
			this.anim.scaleX /= this.imageScaleX;
			this.anim.scaleY /= this.imageScaleY;
			this.scaleX = this.container.scaleX;
			this.scaleY = this.container.scaleY;

			this.skewX = this.owner.skewX || definition.skewX;
			this.skewY = this.owner.skewY || definition.skewY;
			
			this.offsetZ = definition.offsetZ || 0;

			this.state = this.owner.state;
			this.stateChange = false;
			this.lastState = -1;

			this.waitingAnimation = false;
			this.waitingState = 0;
			this.playWaiting = false;
			this.animationFinished = false;
			if(this.currentAnimation){
				this.anim.gotoAndPlay(this.currentAnimation);
			}

			//Check state against entity's prior state to update animation if necessary on instantiation.
			this['logical-state'](this.state);
		},
		
		events: {
			"handle-render-load": function(obj){
				if(!this.pinTo){
					this.stage = obj.stage;
					if(!this.stage){
						return;
					}
					this.stage.addChild(this.container);
					this.addInputs();				
				} else {
					return;
				}
			},
			
			"handle-render": (function(){
				var sort = function(a, b) {
					return a.z - b.z;
				};
				
				return function(resp){
					var testCase = false, i = 0,
					angle = null;
					
					if(!this.stage){
						if(!this.pinTo) { //In case this component was added after handler-render is initiated
							this['handle-render-load'](resp);
							if(!this.stage){
								console.warn('No CreateJS Stage, removing render component from "' + this.owner.type + '".');
								this.owner.removeComponent(this);
								return;
							}
						} else {
							return;
						}
					}
					
					if(this.pinnedTo){
						if(this.pinnedTo.frames && this.pinnedTo.frames[this.pinnedTo.animation.currentFrame]){
							this.container.x = this.pinnedTo.frames[this.pinnedTo.animation.currentFrame].x;
							this.container.y = this.pinnedTo.frames[this.pinnedTo.animation.currentFrame].y;
							if(this.container.z !== this.pinnedTo.frames[this.pinnedTo.animation.currentFrame].z){
								this.stage.reorder = true;
								this.container.z = this.pinnedTo.frames[this.pinnedTo.animation.currentFrame].z;
							}
							this.container.visible = true;
						} else if (this.pinnedTo.defaultPin) {
							this.container.x = this.pinnedTo.defaultPin.x;
							this.container.y = this.pinnedTo.defaultPin.y;
							if(this.container.z !== this.pinnedTo.defaultPin.z){
								this.stage.reorder = true;
								this.container.z = this.pinnedTo.defaultPin.z;
							}
							this.container.visible = true;
						} else {
							this.container.visible = false;
						}
					} else {
						this.container.x = this.owner.x;
						this.container.y = this.owner.y;
						if(this.container.z !== (this.owner.z + this.offsetZ)){
							this.stage.reorder = true;
							this.container.z = (this.owner.z + this.offsetZ);
						}
	
						if(this.owner.opacity || (this.owner.opacity === 0)){
							this.container.alpha = this.owner.opacity;
						}
					}
					
					if(this.container.reorder){
						this.container.reorder = false;
						this.container.sortChildren(sort);
					}
					
					if(this.skewX){
						this.container.skewX = this.skewX;
					}
					if(this.skewY){
						this.container.skewY = this.skewY;
					}
					
					if (this.owner.scaleX != this.lastOwnerScaleX || this.owner.scaleY != this.lastOwnerScaleY) {
						this.container.scaleX = (this.worldScaleX || 1) * (this.owner.scaleX || 1);
						this.container.scaleY = (this.worldScaleY || 1) * (this.owner.scaleY || 1);
						this.anim.scaleX /= this.imageScaleX;
						this.anim.scaleY /= this.imageScaleY;
						this.scaleX = this.container.scaleX;
						this.scaleY = this.container.scaleY;
						
						this.lastOwnerScaleX = this.owner.scaleX;
						this.lastOwnerScaleY = this.owner.scaleY;
					}
			
					//Special case affecting rotation of the animation
					if(this.rotate || this.mirror || this.flip){
						angle = ((this.owner.orientation * 180) / Math.PI + 360) % 360;
						
						if(this.rotate){
							this.container.rotation = angle;
						}
						
						if(this.mirror){
							if((angle > 90) && (angle < 270)){
								this.container.scaleX = -this.scaleX;
							} else {
								this.container.scaleX = this.scaleX;
							}
						}
						
						if(this.flip){
							if(angle > 180){
								this.container.scaleY = this.scaleY;
							} else {
								this.container.scaleY = -this.scaleY;
							}
						}
					}
					
					if(this.stateChange){
						if(this.checkStates){
							for(; i < this.checkStates.length; i++){
								testCase = this.checkStates[i](this.state);
								if(testCase){
									if(this.currentAnimation !== testCase){
										if(!this.followThroughs[this.currentAnimation] && (!this.forcePlaythrough || (this.animationFinished || (this.lastState >= +i)))){
											this.currentAnimation = testCase;
											this.lastState = +i;
											this.animationFinished = false;
											this.anim.gotoAndPlay(testCase);
										} else {
											this.waitingAnimation = testCase;
											this.waitingState = +i;
										}
									} else if(this.waitingAnimation && !this.followThroughs[this.currentAnimation]) {// keep animating this animation since this animation has already overlapped the waiting animation.
										this.waitingAnimation = false;
									}
									break;
								}
							}
						}
						this.stateChange = false;
					}
				};
			})(),
			
			"logical-state": function(state){
				this.stateChange = true;
				if(state['hidden'] !== undefined) {
					this.container.hidden = state['hidden'];
				}
			},
			
			"hide-animation": function(){
				this.container.hidden = true;
			},

			"show-animation": function(){
				this.container.hidden = false;
			},
			
			"pin-me": function(pinId){
				if(this.pins && this.pins[pinId]){
					this.owner.trigger("attach-pin", this.pins[pinId]);
				}
			},
			
			"attach-pin": function(pinInfo){
				if(pinInfo.pinId === this.pinTo){
					this.stage = pinInfo.container;
					this.stage.addChild(this.container);
					this.addInputs();				
					this.pinnedTo = pinInfo;
				}
			},
			
			"remove-pin": function(pinInfo){
				if(pinInfo.pinId === this.pinTo){
					this.stage.removeChild(this.container);
					this.stage = null;
					this.pinnedTo = null;
				}
			}
		},
		
		methods: {
			addInputs: function(){
				var self = this, over = false;
				
				// The following appends necessary information to displayed objects to allow them to receive touches and clicks
				if(this.click || this.touch){
					if(this.touch && createjs.Touch.isSupported()){
						createjs.Touch.enable(this.stage);
					}

					this.anim.addEventListener('mousedown', function(event) {
						self.owner.trigger('mousedown', {
							//debug: true,
							event: event.nativeEvent,
							over: over,
							x: event.stageX,
							y: event.stageY,
							entity: self.owner
						});
						event.addEventListener('mouseup', function(event){
							self.owner.trigger('mouseup', {
								//debug: true,
								event: event.nativeEvent,
								over: over,
								x: event.stageX,
								y: event.stageY,
								entity: self.owner
							});
						});
						event.addEventListener('mousemove', function(event){
							self.owner.trigger('mousemove', {
								event: event.nativeEvent,
								over: over,
								x: event.stageX,
								y: event.stageY,
								entity: self.owner
							});
						});
					});
					this.anim.addEventListener('mouseout', function(){over = false;});
					this.anim.addEventListener('mouseover', function(){over = true;});
				}
				if(this.hover){
					this.stage.enableMouseOver();
					this.anim.addEventListener('mouseout', function(event){
						over = false;
						self.owner.trigger('mouseout', {
							event: event.nativeEvent,
							over: over,
							x: event.stageX,
							y: event.stageY,
							entity: self.owner
						});
					});
					this.anim.addEventListener('mouseover', function(event){
						over = true;
						self.owner.trigger('mouseover', {
							event: event.nativeEvent,
							over: over,
							x: event.stageX,
							y: event.stageY,
							entity: self.owner
						});
					});
				}
			},
			
			addPins: function(pins, regXs, regYs){
				var i = 0, j = 0, pin = null, regX = 0, regY = 0,
				isRegArray = !((typeof regXs === 'number') && (typeof regYs === 'number'));
				
				if(!isRegArray){
					regX = regXs;
					regY = regYs;
				}
				
				this.pinsToRemove = this.pinsToRemove || [];
				
				this.pins = {};
				
				for (; i < pins.length; i++){
					this.pinsToRemove.push(pins[i].pinId);

					if(isRegArray){
						regX = regXs[i];
						regY = regYs[i];
					}
					
					this.pins[pins[i].pinId] = pin = {
						pinId: pins[i].pinId,
						animation: this.anim,
						container: this.container
					};
					if((typeof pins[i].x === 'number') && (typeof pins[i].y === 'number')){
						pin.defaultPin = {
							x: (pins[i].x - regX),
							y: (pins[i].y - regY),
							z: pins[i].z || 0.00000001 //force z to prevent flickering z-order issues.
						};
					}
					
					if(pins[i].frames){
						pin.frames = [];
						for (j = 0; j < pins[i].frames.length; j++){
							if(pins[i].frames[j]){
								if((typeof pins[i].frames[j].x === 'number') && (typeof pins[i].frames[j].y === 'number')){
									pin.frames.push({
										x: (pins[i].frames[j].x - regX),
										y: (pins[i].frames[j].y - regY),
										z: pins[i].frames[j].z || (pin.defaultPin?pin.defaultPin.z:0.00000001)
									});
								} else if (pin.defaultPin) {
									if(typeof pins[i].frames[j].x === 'number'){
										pin.frames.push({
											x: (pins[i].frames[j].x - regX),
											y: pin.defaultPin.y,
											z: pins[i].frames[j].z || pin.defaultPin.z
										});
									} else if(typeof pins[i].frames[j].y === 'number'){
										pin.frames.push({
											x: pin.defaultPin.x,
											y: (pins[i].frames[j].y - regY),
											z: pins[i].frames[j].z || pin.defaultPin.z
										});
									} else {
										pin.frames.push(null);
									} 
								} else {
									pin.frames.push(null);
	 							}
							} else {
								pin.frames.push(null);
							}
						}
					}
					this.owner.trigger('attach-pin', pin);
				}
			},

			removePins: function(){
				var i = 0;
				
				if(this.pins && this.pinsToRemove){
					for (; i < this.pinsToRemove.length; i++){
						this.owner.trigger('remove-pin', this.pins[this.pinsToRemove[i]].pinId);
						delete this.pins[this.pinsToRemove[i]];
					}
					this.pinsToRemove.length = 0;
				}
			},
			
			destroy: function(){
				if (this.stage){
					this.stage.removeChild(this.container);
					this.stage = undefined;
				}
				this.removePins();
				this.followThroughs = null;
				this.anim = undefined;
				this.container = undefined;
			}
		}
	});
})();


/*--------------------------------------------------
 *   render-image - ../engine/components/render-image.js
 */
/**
# COMPONENT **render-image**
This component is attached to entities that will appear in the game world. It renders a static image. It can render a whole image or a portion of a larger images depending on the definition.

## Dependencies
- [createjs.EaselJS][link1] - This component requires the EaselJS library to be included for canvas animation functionality.
- [[handler-render-createjs]] (on entity's parent) - This component listens for a render "handle-render" and "handle-render-load" message to setup and display the content.

## Messages

### Listens for:
- **handle-render** - Repositions the image in preparation for rendering
- **handle-render-load** - The image added to the stage. Setting up the mouse input stuff.
  - @param obj.stage ([createjs.Stage][link2]) - This is the stage on which the component will be displayed.
- **logical-state** - This component listens for logical state changes. Handles orientation of the object and visibility.
  - @param message (object) - Required. Lists parameters and their values. For example: {hidden: false, orientation: 90}. Accepted parameters: 'orientation' and 'hidden'. Orientation is used to set the angle value in the object, the angle value will be interpreted differently based on what the 'rotate', 'mirror', and 'flip' properties are set to. Hidden determines whether the image is rendered.
- **pin-me** - If this component has a matching pin location, it will trigger "attach-pin" on the entity with the matching pin location.
  - @param pinId (string) - Required. A string identifying the id of a pin location that the render-image wants to be pinned to.
- **attach-pin** - On receiving this message, the component checks whether it wants to be pinned, and if so, adds itself to the provided container.
  - @param pinId (string) - Pin Id of the received pin location.
  - @param container ([createjs.Container][link3]) - Container that render-image should be added to.
- **remove-pin** - On receiving this message, the component checks whether it is pinned, and if so, removes itself from the container.
  - @param pinId (string) - Pin Id of the pin location to remove itself from.
- **hide-image** - Makes the image invisible.
- **show-image** - Makes the image visible.

### Local Broadcasts:
- **mousedown** - Render-debug captures this message and uses it and then passes it on to the rest of the object in case it needs to do something else with it.
  - @param event (event object) - The event from Javascript.
  - @param over (boolean) - Whether the mouse is over the object or not.
  - @param x (number) - The x-location of the mouse in stage coordinates.
  - @param y (number) - The y-location of the mouse in stage coordinates.
  - @param entity ([[Entity]]) - The entity clicked on.  
- **mouseup** - Render-debug captures this message and uses it and then passes it on to the rest of the object in case it needs to do something else with it.
  - @param event (event object) - The event from Javascript.
  - @param over (boolean) - Whether the mouse is over the object or not.
  - @param x (number) - The x-location of the mouse in stage coordinates.
  - @param y (number) - The y-location of the mouse in stage coordinates.
  - @param entity ([[Entity]]) - The entity clicked on.  
- **mousemove** - Render-debug captures this message and uses it and then passes it on to the rest of the object in case it needs to do something else with it.
  - @param event (event object) - The event from Javascript.
  - @param over (boolean) - Whether the mouse is over the object or not.
  - @param x (number) - The x-location of the mouse in stage coordinates.
  - @param y (number) - The y-location of the mouse in stage coordinates.
  - @param entity ([[Entity]]) - The entity clicked on.  
- **pin-me** - If this component should be pinned to another image, it will trigger this event in an attempt to initiate the pinning.
  - @param pinId (string) - Required. A string identifying the id of a pin location that this render-image wants to be pinned to.
- **attach-pin** - This component broadcasts this message if it has a list of pins available for other images on the entity to attach to.
  - @param pinId (string) - Pin Id of an available pin location.
  - @param container ([createjs.Container][link3]) - Container that the render-image should be added to.
- **remove-pin** - When preparing to remove itself from an entity, render-image broadcasts this to all attached images.
  - @param pinId (string) - Pin Id of the pin location to be removed.

## JSON Definition
    {
      "type": "render-image",
      
      "image": "example",
      //Required: The id of the image from the asset list in config.js.
      
      "source": {
      //Optional - The portion of the image you are going to use.
		
		"width":  100,
		"height": 100,
		"y": 100,
		"x": 100   
      },
      
      "acceptInput": {
      	//Optional - What types of input the object should take.
      
      	"hover": false,
      	"click": false 
      },
       
      "pins": [{
      //Optional. Specifies whether other rendering components can pin themselves to this component. This is useful for puppet-like dynamics
      
        "pinId": "head",
        //Required. How this pin location should be referred to by other rendering components in order to link up.
        
        "x": 15,
        "y": -30
        //Required. Where the other component's regX and regY should be pinned to this image.
      }],

      "pinTo": "body",
      //Optional. Pin id of another component on this entity to pin this image to.
      
      "regX": 0,
      //Optional - The X offset from X position for the image.
      
      "regY": 0,
      //Optional - The Y offset from Y position for the image.
      
      "scaleX": 1,
      //Optional - The X scaling factor for the image.  Will default to 1.
      
      "scaleY": 1
      //Optional - The Y scaling factor for the image.  Will default to 1.
      
      "offsetZ": -1
      //Optional - How much the z-index of the image should be relative to the entity's z-index. Will default to 0.

      "rotate": false,
      //Optional - Whether this object can be rotated. It's rotational angle is set by sending an orientation value in the logical state.
      
      "mirror": true,
      //Optional - Whether this object can be mirrored over X. To mirror it over X set the orientation value in the logical state to be great than 90 but less than 270.
      
      "flip": false,
      //Optional - Whether this object can be flipped over Y. To flip it over Y set the orientation value in the logical state to be great than 180.
      
      "hidden": false
      //Optional - Whether this object is visible or not. To change the hidden value dynamically add a 'hidden' property to the logical state object and set it to true or false.
    }
    
[link1]: http://www.createjs.com/Docs/EaselJS/module_EaselJS.html
[link2]: http://createjs.com/Docs/EaselJS/Stage.html
[link3]: http://createjs.com/Docs/EaselJS/Container.html
*/
(function(){
	return platformer.createComponentClass({
		
		id: 'render-image',
		
		constructor: function(definition){
			var image = definition.image,
			source    = definition.source;
			
			this.rotate = definition.rotate || false;
			this.mirror = definition.mirror || false;
			this.flip   = definition.flip   || false;
			
			if(definition.acceptInput){
				this.hover = definition.acceptInput.hover || false;
				this.click = definition.acceptInput.click || false;
				this.touch = definition.acceptInput.touch || false;
			} else {
				this.hover = false;
				this.click = false;
				this.touch = false;
			}
			
			this.stage = undefined;
			this.image = new createjs.Bitmap(platformer.assets[image]);
			var scaleX = platformer.assets[image].scaleX || 1,
			scaleY     = platformer.assets[image].scaleY || 1;

			if(definition.pins){
				this.container = new createjs.Container();
				this.container.addChild(this.image);
				this.image.z = 0;
				this.addPins(definition.pins, definition.regX || 0, definition.regY || 0);
			} else {
				this.container = this.image;
			}

			this.pinTo = definition.pinTo || false;
			if(this.pinTo){
				this.owner.trigger('pin-me', this.pinTo);
			}
			
			if(source){
				source.x = source.x || 0;
				source.y = source.y || 0;
				this.image.sourceRect = new createjs.Rectangle(source.x * scaleX, source.y * scaleY, source.width * scaleX, source.height * scaleY);
			}
			this.image.hidden = definition.hidden || false;
			this.image.regX   = (definition.regX || 0) * scaleX;
			this.image.regY   = (definition.regY || 0) * scaleY;
			
			this.worldScaleX = definition.scaleX;
			this.worldScaleY = definition.scaleY;
			this.imageScaleX = scaleX;
			this.imageScaleY = scaleY;
			this.lastOwnerScaleX = this.owner.scaleX;
			this.lastOwnerScaleY = this.owner.scaleY;
			
			//This applies scaling to the correct objects if container and image are separate, and applies them both to the image if the container is also the image. - DDD
			this.container.scaleX = (this.worldScaleX || 1) * (this.owner.scaleX || 1);
			this.container.scaleY = (this.worldScaleY || 1) * (this.owner.scaleY || 1);
			this.image.scaleX /= this.imageScaleX;
			this.image.scaleY /= this.imageScaleY;
			this.scaleX = this.container.scaleX;
			this.scaleY = this.container.scaleY;

			this.skewX = this.owner.skewX || definition.skewX;
			this.skewY = this.owner.skewY || definition.skewY;
			
			this.offsetZ = definition.offsetZ || 0;
		},
		
		events: {
			"handle-render-load": function(obj){
				if(!this.pinTo){
					this.stage = obj.stage;
					if(!this.stage){
						return;
					}
					this.stage.addChild(this.container);
					this.addInputs();				
				} else {
					return;
				}
			},
			
			"handle-render": (function(){
				var sort = function(a, b) {
					return a.z - b.z;
				};
				
				return function(resp){
					var angle = null;
					
					if(!this.stage){
						if(!this.pinTo) { //In case this component was added after handler-render is initiated
							this['handle-render-load'](resp);
							if(!this.stage){
								console.warn('No CreateJS Stage, removing render component from "' + this.owner.type + '".');
								this.owner.removeComponent(this);
								return;
							}
						} else {
							return;
						}
					}
					
					if(this.pinnedTo){
						if(this.pinnedTo.frames && this.pinnedTo.frames[this.pinnedTo.animation.currentFrame]){
							this.container.x = this.pinnedTo.frames[this.pinnedTo.animation.currentFrame].x;
							this.container.y = this.pinnedTo.frames[this.pinnedTo.animation.currentFrame].y;
							if(this.container.z !== this.pinnedTo.frames[this.pinnedTo.animation.currentFrame].z){
								this.stage.reorder = true;
								this.container.z = this.pinnedTo.frames[this.pinnedTo.animation.currentFrame].z;
							}
							this.container.visible = true;
						} else if (this.pinnedTo.defaultPin) {
							this.container.x = this.pinnedTo.defaultPin.x;
							this.container.y = this.pinnedTo.defaultPin.y;
							if(this.container.z !== this.pinnedTo.defaultPin.z){
								this.stage.reorder = true;
								this.container.z = this.pinnedTo.defaultPin.z;
							}
							this.container.visible = true;
						} else {
							this.container.visible = false;
						}
					} else {
						this.container.x = this.owner.x;
						this.container.y = this.owner.y;
						if(this.container.z !== (this.owner.z + this.offsetZ)){
							this.stage.reorder = true;
							this.container.z = (this.owner.z + this.offsetZ);
						}
	
						if(this.owner.opacity || (this.owner.opacity === 0)){
							this.container.alpha = this.owner.opacity;
						}
					}		
					
					if(this.container.reorder){
						this.container.reorder = false;
						this.container.sortChildren(sort);
					}
	
					if(this.skewX){
						this.container.skewX = this.skewX;
					}
					if(this.skewY){
						this.container.skewY = this.skewY;
					}
					
					if (this.owner.scaleX != this.lastOwnerScaleX || this.owner.scaleY != this.lastOwnerScaleY) {
						this.container.scaleX = (this.worldScaleX || 1) * (this.owner.scaleX || 1);
						this.container.scaleY = (this.worldScaleY || 1) * (this.owner.scaleY || 1);
						this.image.scaleX /= this.imageScaleX;
						this.image.scaleY /= this.imageScaleY;
						this.scaleX = this.container.scaleX;
						this.scaleY = this.container.scaleY;
						
						this.lastOwnerScaleX = this.owner.scaleX;
						this.lastOwnerScaleY = this.owner.scaleY;
					}
			
					//Special case affecting rotation of the animation
					if(this.rotate || this.mirror || this.flip){
						angle = ((this.owner.orientation * 180) / Math.PI + 360) % 360;
						
						if(this.rotate){
							this.container.rotation = angle;
						}
						
						if(this.mirror){
							if((angle > 90) && (angle < 270)){
								this.container.scaleX = -this.scaleX;
							} else {
								this.container.scaleX = this.scaleX;
							}
						}
						
						if(this.flip){
							if(angle > 180){
								this.container.scaleY = this.scaleY;
							} else {
								this.container.scaleY = -this.scaleY;
							}
						}
					}
				};
			})(),
			
			"logical-state": function(state){
				if(state['hidden'] !== undefined) {
					this.container.hidden = state['hidden'];
				}
			},
			
			"hide-image": function(){
				this.container.hidden = true;
			},

			"show-image": function(){
				this.container.hidden = false;
			},
			
			"pin-me": function(pinId){
				if(this.pins && this.pins[pinId]){
					this.owner.trigger("attach-pin", this.pins[pinId]);
				}
			},
			
			"attach-pin": function(pinInfo){
				if(pinInfo.pinId === this.pinTo){
					this.stage = pinInfo.container;
					this.stage.addChild(this.container);
					this.addInputs();				
					this.pinnedTo = pinInfo;
				}
			},
			
			"remove-pin": function(pinInfo){
				if(pinInfo.pinId === this.pinTo){
					this.stage.removeChild(this.container);
					this.stage = null;
					this.pinnedTo = null;
				}
			}
		},
		
		methods: {
			addInputs: function(){
				var self = this, over = false;
				
				// The following appends necessary information to displayed objects to allow them to receive touches and clicks
				if(this.click || this.touch){
					if(this.touch && createjs.Touch.isSupported()){
						createjs.Touch.enable(this.stage);
					}

					this.image.addEventListener('mousedown', function(event) {
						self.owner.trigger('mousedown', {
							//debug: true,
							event: event.nativeEvent,
							over: over,
							x: event.stageX,
							y: event.stageY,
							entity: self.owner
						});
						event.addEventListener('mouseup', function(event){
							self.owner.trigger('mouseup', {
								//debug: true,
								event: event.nativeEvent,
								over: over,
								x: event.stageX,
								y: event.stageY,
								entity: self.owner
							});
						});
						event.addEventListener('mousemove', function(event){
							self.owner.trigger('mousemove', {
								event: event.nativeEvent,
								over: over,
								x: event.stageX,
								y: event.stageY,
								entity: self.owner
							});
						});
					});
					this.image.addEventListener('mouseout', function(){over = false;});
					this.image.addEventListener('mouseover', function(){over = true;});
				}
				if(this.hover){
					this.stage.enableMouseOver();
					this.image.addEventListener('mouseout', function(event){
						over = false;
						self.owner.trigger('mouseout', {
							event: event.nativeEvent,
							over: over,
							x: event.stageX,
							y: event.stageY,
							entity: self.owner
						});
					});
					this.image.addEventListener('mouseover', function(event){
						over = true;
						self.owner.trigger('mouseover', {
							event: event.nativeEvent,
							over: over,
							x: event.stageX,
							y: event.stageY,
							entity: self.owner
						});
					});
				}
			},
			
			addPins: function(pins, regX, regY){
				var i = 0, pin = null;
				
				this.pinsToRemove = this.pinsToRemove || [];
				
				this.pins = {};
				
				for (; i < pins.length; i++){
					this.pinsToRemove.push(pins[i].pinId);
					this.pins[pins[i].pinId] = pin = {
						pinId: pins[i].pinId,
						container: this.container,
						defaultPin: {
							x: pins[i].x - regX,
							y: pins[i].y - regY,
							z: pins[i].z || 0.00000001 //force z to prevent flickering z-order issues.
						}
					};
					this.owner.trigger('attach-pin', pin);
				}
			},

			removePins: function(){
				var i = 0;
				
				if(this.pins && this.pinsToRemove){
					for (; i < this.pinsToRemove.length; i++){
						this.owner.trigger('remove-pin', this.pins[this.pinsToRemove[i]].pinId);
						delete this.pins[this.pinsToRemove[i]];
					}
					this.pinsToRemove.length = 0;
				}
			},
			
			destroy: function(){
				if (this.stage){
					this.stage.removeChild(this.container);
					this.stage = undefined;
				}
				this.removePins();
				this.image = undefined;
				this.container = undefined;
			}
		}
	});
})();


/*--------------------------------------------------
 *   logic-button - ../engine/components/logic-button.js
 */
/**
# COMPONENT **logic-button**
This component handles the pressed/released state of a button according to input. It can be set as a toggle button or a simple press-and-release button.

## Dependencies:
- [[handler-logic]] (on entity's parent) - This component listens for a logic tick message to maintain and update its state.

## Messages

### Listens for:
- **handle-logic** - On a `tick` logic message, the component updates its current state and broadcasts its logical state to the entity.
- **pressed** - on receiving this message, the state of the button is set to "pressed".
- **released** - on receiving this message, the state of the button is set to "released".
- **mousedown** - on receiving this message, the state of the button is set to "pressed". Note that this component will not listen for "mousedown" if the component is in toggle mode.
- **mouseup** - on receiving this message, the state of the button is set to "released" unless in toggle mode, in which case it toggles between "pressed" and "released".

### Local Broadcasts:
- **logical-state** - this component will trigger this message with both "pressed" and "released" properties denoting its state. Both of these work in tandem and never equal each other.
  - @param message.pressed (boolean) - whether the button is in a pressed state.
  - @param message.released (boolean) - whether the button is in a released state.

## JSON Definition:
    {
      "type": "logic-button",
      
      "toggle": true,
      // Optional. Determines whether this button should behave as a toggle. Defaults to "false".
      
      "state": "pressed"
      // Optional. Specifies starting state of button; typically only useful for toggle buttons. Defaults to "released".
    }
*/
platformer.components['logic-button'] = (function(){
	var component = function(owner, definition){
		this.owner = owner;
		
		// Messages that this component listens for
		this.listeners = [];
		
		// Create state object to send with messages here so it's not recreated each time.
		this.state = this.owner.state;
		this.state.released = true;
		this.state.pressed  = false;
		this.stateChange = '';

		if(definition.state === 'pressed'){
			this.pressed();
		}

		if(definition.toggle){
			this.toggle = true;
			this.addListener('mouseup');
		} else {
			this.addListeners(['mousedown','mouseup']);
		}
		
		this.addListeners(['handle-logic', 'pressed', 'released']);
	};
	var proto = component.prototype;
	
	proto['mousedown'] = proto['pressed'] = function(){
		this.stateChange = 'pressed';
	};
	
	proto['mouseup'] = function(){
		if(this.toggle){
			if(this.state.pressed){
				this.released();
			} else {
				this.pressed();
			}
		} else {
			this.released();
		}
	};
	
	proto['released'] = function(){
		this.stateChange = 'released';
	};
	
	proto['handle-logic'] = function(resp){
		if(this.state.released && (this.stateChange === 'pressed')){
			this.stateChange = '';
			this.state.pressed = true;
			this.state.released = false;
		}
		if(this.state.pressed && (this.stateChange === 'released')){
			this.stateChange = '';
			this.state.pressed = false;
			this.state.released = true;
		}
	};

	
	// This function should never be called by the component itself. Call this.owner.removeComponent(this) instead.
	proto.destroy = function(){
		this.removeListeners(this.listeners);
		this.state = undefined;
		this.owner = undefined;
	};
	
	/*********************************************************************************************************
	 * The stuff below here will stay the same for all components. It's BORING!
	 *********************************************************************************************************/

	proto.addListeners = function(messageIds){
		for(var message in messageIds) this.addListener(messageIds[message]);
	};

	proto.removeListeners = function(listeners){
		for(var messageId in listeners) this.removeListener(messageId, listeners[messageId]);
	};
	
	proto.addListener = function(messageId, callback){
		var self = this,
		func = callback || function(value, debug){
			self[messageId](value, debug);
		};
		this.owner.bind(messageId, func);
		this.listeners[messageId] = func;
	};

	proto.removeListener = function(boundMessageId, callback){
		this.owner.unbind(boundMessageId, callback);
	};
	
	return component;
})();


/*--------------------------------------------------
 *   logic-directional-movement - ../engine/components/logic-directional-movement.js
 */
/**
# COMPONENT **logic-directional-movement**
This component changes the (x, y) position of an object according to its current speed and heading. It maintains its own heading information independent of other components allowing it to be used simultaneously with other logic components like [[Logic-Pushable]] and [[Logic-Gravity]]. It accepts directional messages that can stand alone, or come from a mapped controller, in which case it checks the `pressed` value of the message before changing its course accordingly.

## Dependencies:
- [[handler-logic]] (on entity's parent) - This component listens for a logic tick message to maintain and update its location.

## Messages

### Listens for:
- **handle-logic** - On a `tick` logic message, the component updates its location according to its current state.
  - @param message.delta - To determine how far to move the entity, the component checks the length of the tick.
- **[directional message]** - Directional messages include `go-down`, `go-south`, `go-down-left`, `go-southwest`, `go-left`, `go-west`, `go-up-left`, `go-northwest`, `go-up`, `go-north`, `go-up-right`, `go-northeast`, `go-right`, `go-east`, `go-down-right`, and `go-southeast`. On receiving one of these messages, the entity adjusts its movement orientation.
  - @param message.pressed (boolean) - Optional. If `message` is included, the component checks the value of `pressed`: true causes movement in the triggered direction, false turns off movement in that direction. Note that if no message is included, the only way to stop movement in a particular direction is to trigger `stop` on the entity before progressing in a new orientation. This allows triggering `up` and `left` in sequence to cause `up-left` movement on the entity.
- **stop** - Stops motion in all directions until movement messages are again received.
  - @param message.pressed (boolean) - Optional. If `message` is included, the component checks the value of `pressed`: a value of false will not stop the entity.

### Local Broadcasts:
- **logical-state** - this component will trigger this message when its movement or direction changes. Note that directions are not mutually exclusive: adjacent directions can both be true, establishing that the entity is facing a diagonal direction.
  - @param message.moving (boolean) - whether the entity is in motion.
  - @param message.left (boolean)   - whether the entity is facing left.
  - @param message.right (boolean)  - whether the entity is facing right.
  - @param message.up (boolean)     - whether the entity is facing up.
  - @param message.down (boolean)   - whether the entity is facing down.

## JSON Definition:
    {
      "type": "logic-directional-movement",
      
      "speed": 4.5
      // Optional. Defines the distance in world units that the entity should be moved per millisecond. Defaults to 0.3.
    }
*/
(function(){
	var processDirection = function(direction){
		return function (state){
			if(state){
				this[direction] = (state.pressed !== false);
//				this.stopped = !state.pressed;
			} else {
				this[direction] = true;
//				this.stopped = false;
			}
		};
	},
	getAngle = function(x, y){
		var m = Math.sqrt(x * x + y * y),
		a     = 0;

		if (m != 0){
			a = Math.acos(x / m);
			if (y < 0){
				a = (Math.PI * 2) - a;
			}
		}
		return a;
	};
	
	return platformer.createComponentClass({
		id: 'logic-directional-movement',
		
		constructor: function(definition){
			var self = this;
			
			this.speed = definition.speed || .3;
			
			this.boost = false;
			this.paused = false;
			
			if(definition.pause || definition.boost){
				if(typeof definition.pause === 'string'){
					this.pausers = [definition.pause];
				} else {
					this.pausers = definition.pause;
				}
				this.addListener('logical-state');
				this['logical-state'] = function(state){
					var paused = false;
					if(definition.pause){
						for(var i = 0; i < self.pausers.length; i++){
							paused = paused || state[self.pausers[i]];
						}
						this.paused = paused;
					}
					
					if(definition.boost){
						if(self.boost){
							if(state[definition.boost] === false){
								self.boost = false;
							}
						} else if(state[definition.boost] === true){
							self.boost = true;
						}
					}
				};
			}

			this.state = this.owner.state;
			this.state.moving = false;
			this.state.left = false;
			this.state.right = false;
			this.state.up = false;
			this.state.down = false;

			this.owner.orientation = 0;
			
			this.moving = false;
			this.left = false;
			this.right = false;
			this.up = false;
			this.down = false;
			this.upLeft = false;
			this.upRight = false;
			this.downLeft = false;
			this.downRight = false;
			this.facing = 'right';
		},
		events:{
			"handle-logic": function(resp){
				var vX    = 0,
				vY        = 0,
				up        = this.up        || this.upLeft || this.downLeft,
				upLeft    = this.upLeft    || (this.up   && this.left),
				left      = this.left      || this.upLeft || this.downLeft,
				downLeft  = this.downLeft  || (this.down && this.left),
				down      = this.down      || this.downLeft || this.downRight,
				downRight = this.downRight || (this.down && this.right),
				right     = this.right     || this.upRight || this.downRight,
				upRight   = this.upRight   || (this.up   && this.right),
				orientation = 0;
				
				if (up && down){
					this.moving = false;
				} else if (left && right) {
					this.moving = false;
				} else if (upLeft) {
					vX = -this.speed / 1.414;
					vY = -this.speed / 1.414;
					this.moving = true;
					this.facing = 'up-left';
				} else if (upRight) {
					vY = -this.speed / 1.414;
					vX =  this.speed / 1.414;
					this.moving = true;
					this.facing = 'up-right';
				} else if (downLeft) {
					vY =  this.speed / 1.414;
					vX = -this.speed / 1.414;
					this.moving = true;
					this.facing = 'down-left';
				} else if (downRight) {
					vY =  this.speed / 1.414;
					vX =  this.speed / 1.414;
					this.moving = true;
					this.facing = 'down-right';
				} else if(left)	{
					vX = -this.speed;
					this.moving = true;
					this.facing = 'left';
				} else if (right) {
					vX =  this.speed;
					this.moving = true;
					this.facing = 'right';
				} else if (up) {
					vY = -this.speed;
					this.moving = true;
					this.facing = 'up';
				} else if (down) {
					vY =  this.speed;
					this.moving = true;
					this.facing = 'down';
				} else {
					this.moving = false;
					
					// This is to retain the entity's direction even if there is no movement. There's probably a better way to do this since this is a bit of a retrofit. - DDD
					switch(this.facing){
					case 'up': up = true; break;
					case 'down': down = true; break;
					case 'left': left = true; break;
					case 'right': right = true; break;
					case 'up-left': up = true; left = true; break;
					case 'up-right': up = true; right = true; break;
					case 'down-left': down = true; left = true; break;
					case 'down-right': right = true; right = true; break;
					}
				}
				
				if(this.moving){
					if(!this.paused){
						if(this.boost) {
							vX *= 1.5;
							vY *= 1.5;
						}

						this.owner.x += (vX * resp.delta);
						this.owner.y += (vY * resp.delta);
					}
					
					orientation = getAngle(vX, vY);
					if(this.owner.orientation !== orientation){
						this.owner.orientation = orientation;
					}
				}
				
				//TODO: possibly remove the separation of this.state.direction and this.direction to just use state?
				if(this.state.moving !== this.moving){
					this.state.moving = this.moving;
				}
				if(this.state.up !== up){
					this.state.up = up;
				}
				if(this.state.right !== right){
					this.state.right = right;
				}
				if(this.state.down !== down){
					this.state.down = down;
				}
				if(this.state.left !== left){
					this.state.left = left;
				}
			},
			
			"go-down": processDirection('down'),
			"go-south": processDirection('down'),
			"go-down-left": processDirection('downLeft'),
			"go-southwest": processDirection('downLeft'),
			"go-left": processDirection('left'),
			"go-west": processDirection('left'),
			"go-up-left": processDirection('upLeft'),
			"go-northwest": processDirection('upLeft'),
			"go-up": processDirection('up'),
			"go-north": processDirection('up'),
			"go-up-right": processDirection('upRight'),
			"go-northeast": processDirection('upRight'),
			"go-right": processDirection('right'),
			"go-east": processDirection('right'),
			"go-down-right": processDirection('downRight'),
			"go-southeast": processDirection('downRight'),

			"stop": function(state){
				if(!state || (state.pressed !== false)){
					this.left = false;
					this.right = false;
					this.up = false;
					this.down = false;
					this.upLeft = false;
					this.upRight = false;
					this.downLeft = false;
					this.downRight = false;
				}
			},
			
			"accelerate": function(velocity) {
				this.speed = velocity;
			}
		}
	});
})();

/*--------------------------------------------------
 *   logic-gravity - ../engine/components/logic-gravity.js
 */
/**
# COMPONENT **logic-gravity**
A component that causes the object to move according to a specified gravity.

## Dependencies
- [[Handler-Logic]] (on entity's parent) - This component listens for a "handle-logic" message. It then moves the entity according to the gravitational forces.
- [[Collision-Basic]] (on entity) - Not required if this object doesn't collide with things. This component listens for the message 'hit-solid' from the collision-basic component.

## Messages

### Listens for:
- **handle-logic** - Accelerates and moves the objects according to the set gravity. Objects will not move faster than the max velocity set. Though max velocity only limits the portion of the velocity maintained by the gravity component.
  - @param resp.delta (number) - The time since the last tick.
- **hit-solid** - Received when we collide with an object that is solid to the entity. We stop the movement in the direction of that object.
  - @param collisionInfo.x (number) - Either 1,0, or -1. 1 if we're colliding with an object on our right. -1 if on our left. 0 if not at all. 
  - @param collisionInfo.y (number) - Either 1,0, or -1. 1 if we're colliding with an object on our bottom. -1 if on our top. 0 if not at all.
- **glide** - Changes the maximum gravitational velocity.
  - @param message.maxVelocity, message.maxVelocityX, message.maxVelocityY (number) - The new maximum velocity the entity should have due to gravity.
  - @param message.duration, message.durationX, message.durationY (number) - Time in milliseconds to make the transition form current velocity to the maximum velocity.
  - @param message.acceleration, message.accelerationX, message.acclerationY (number) - How quickly to transition to new maximum velocity.
- **gravitate** - Changes the gravitational acceleration.
  - @param message.gravity, message.gravityX, message.gravityY (number) - Sets the new gravitational pull on the entity.
- **hover** - Causes gravitational affect on the entity's velocity to cease.
  - @param message.pressed (boolean) - Optional. If `message` is included, the component checks the value of `pressed`: a value of false will not stop gravity.
- **fall** - Causes the gravitational affect on the entity's velocity to continue.
  - @param message.pressed (boolean) - Optional. If `message` is included, the component checks the value of `pressed`: a value of false will not start gravity.
 

## JSON Definition
    {
      "type": "logic-pushable",
      "velocityX" : 0,
      //Optional - The starting x velocity of the entity. Defaults to 0.
	  "velocityY" : 0,
	  //Optional - The starting y velocity of the entity. Defaults to 0.
	  "maxVelocityX" : 3,
	  //Optional - The max x velocity attributed to the entity by gravity. Defaults to 3.
	  "maxVelocityY" : 3, 
	  //Optional - The max y velocity attributed to the entity by gravity. Defaults to 3.
	  "maxVelocity" : 3, 
	  //Optional - The max velocity attributed to the entity by gravity in both x and y. This is superseded by the specific maxVelocityX and maxVelocityY values. Defaults to 3.
	  "xGravity" : 0,
	  //Optional - The gravitational acceleration in units/millisecond that the entity moves in x. Defaults to 0.
	  "yGravity" : .01,
	  //Optional - The gravitational acceleration in units/millisecond that the entity moves in y. Defaults to .01.
	  "gravity" : 0
	  //Optional - The gravitational acceleration in units/millisecond that the entity moves in y. This is superseded by the specific yGravity. Defaults to .01.
    }
*/

(function(){
	return platformer.createComponentClass({
		id: 'logic-gravity',
		
		constructor: function(definition){
			this.vY = definition.gravity || definition.yGravity;
			if(typeof this.vY !== 'number'){
				this.vY = .01;
			}
			this.vX = definition.xGravity || 0;
			
			this.maxVelocity = definition.maxVelocity || 0;
			this.newMaxX = this.maxVelocityX = definition.maxVelocityX || this.maxVelocity;
			this.newMaxY = this.maxVelocityY = definition.maxVelocityY || this.maxVelocity;
			this.accelerationX = 0;
			this.accelerationY = 0;
			this.durationX = 0;
			this.durationY = 0;
			
			if(typeof this.owner.dx !== 'number'){
				this.owner.dx = 0;
			}
			if(typeof this.owner.dy !== 'number'){
				this.owner.dy = 0;
			}
			
			this.state = this.owner.state;
			
			this.hovering = this.state.hovering = this.state.hovering || false;
			this.falling  = this.state.falling  = this.state.falling  || false;
			this.grounded = this.state.grounded = this.state.grounded || !this.falling;
		},
		
		events:{
			"handle-logic": function(resp){
				var delta = resp.delta;
				
				if(!this.hovering){
					if(this.newMaxX !== this.maxVelocityX){
						if(this.durationX - delta > 0){
							this.maxVelocityX += (this.newMaxX - this.maxVelocityX) * (delta / this.durationX);
							this.durationX -= delta;
						} else if(this.accelerationX){
							if(this.newMaxX > this.maxVelocityX){
								if(this.owner.dx > this.maxVelocityX) {
									this.maxVelocityX = this.owner.dx;
								}
								this.maxVelocityX = Math.min(this.maxVelocityX + (this.accelerationX * resp.delta), this.newMaxX);
							} else {
								if(this.owner.dx < this.maxVelocityX) {
									this.maxVelocityX = this.owner.dx;
								}
								this.maxVelocityX = Math.max(this.maxVelocityX - (this.accelerationX * resp.delta), this.newMaxX);
							}
						} else {
							this.maxVelocityX = this.newMaxX;
							this.durationX = 0;
						}
					}
					
					if(this.newMaxY !== this.maxVelocityY){
						if(this.durationY - delta > 0){
							this.maxVelocityY += (this.newMaxY - this.maxVelocityY) * (delta / this.durationY);
							this.durationY -= delta;
						} else if(this.accelerationY){
							if(this.newMaxY > this.maxVelocityY){
								if(this.owner.dy > this.maxVelocityY) {
									this.maxVelocityY = this.owner.dy;
								}
								this.maxVelocityY = Math.min(this.maxVelocityY + (this.accelerationY * resp.delta), this.newMaxY);
							} else {
								if(this.owner.dy < this.maxVelocityY) {
									this.maxVelocityY = this.owner.dy;
								}
								this.maxVelocityY = Math.max(this.maxVelocityY - (this.accelerationY * resp.delta), this.newMaxY);
							}
						} else {
							this.maxVelocityY = this.newMaxY;
							this.durationY = 0;
						}
					}
					
					this.owner.dx += this.vX * delta;
					this.owner.dy += this.vY * delta;
					
					if(this.vX && this.maxVelocityX && (this.owner.dx > this.maxVelocityX)){
						this.owner.dx = this.maxVelocityX;
					}
					if(this.vY && this.maxVelocityY && (this.owner.dy > this.maxVelocityY)){
						this.owner.dy = this.maxVelocityY;
					}
				}
				
				if(this.state.hovering !== this.hovering){
					this.state.hovering = this.hovering;
				}
				if(this.state.falling !== this.falling){
					this.state.falling = this.falling;
				}
				if(this.state.grounded !== this.grounded){
					this.state.grounded = this.grounded;
				}
				this.grounded = false;
				this.falling  = true;
			},
			"hit-solid": function(collisionInfo){
				if(!this.hovering){
					if(((collisionInfo.y > 0) && (this.vY > 0)) || ((collisionInfo.y < 0) && (this.vY < 0))){
						this.owner.dy = 0;
						this.falling = false;
						this.grounded = true;
					} else if(((collisionInfo.x < 0) && (this.vX < 0)) || ((collisionInfo.x > 0) && (this.vX > 0))){
						this.owner.dx = 0;
						this.falling = false;
						this.grounded = true;
					}
				}
				return true;
			},
			"glide": function(resp) {
				var max      = resp.maxVelocity || this.maxVelocity,
				duration     = resp.duration || 0,
				acceleration = resp.acceleration || 0;				
				
				this.durationX = resp.durationX || duration;
				this.durationY = resp.durationY || duration;
				
				this.accelerationX = resp.accelerationX || acceleration;
				this.accelerationY = resp.accelerationY || acceleration;
				
				this.newMaxX = resp.maxVelocityX || max || this.maxVelocityX;
				this.newMaxY = resp.maxVelocityY || max || this.maxVelocityY;
				
				if(!this.durationX && !this.accelerationX){
					this.maxVelocityX = this.newMaxX;
				}
				if(!this.durationY && !this.accelerationY){
					this.maxVelocityY = this.newMaxY;
				}
			},
			"gravitate": function(value) {
				this.vY = value.gravity || value.yGravity || 0;
				this.vX = value.xGravity || 0;
			},
			"hover": function(value){
				this.owner.dx = 0;
				this.owner.dy = 0;
				this.hovering = !value || (value.pressed !== false);
			},
			"fall": function(value){
				this.hovering = !!value && (value.pressed === false);
			}
		},
		
		methods: {
			destroy: function(){
				this.owner.dx = 0;
				this.owner.dy = 0;
			}
		}
	});
})();


/*--------------------------------------------------
 *   logic-jump - ../engine/components/logic-jump.js
 */
/**
# COMPONENT **logic-jump**
This component will cause the entity to jump with a certain amount of acceleration for a certain period of time.

## Dependencies:
- [[handler-logic]] (on entity's parent) - This component listens for a logic tick message to maintain and update its location.

## Messages

### Listens for:
- **handle-logic** - On a `tick` logic message, the component updates its location according to its current state.
- **jump** - On receiving this message, the component causes the entity's position to change according to the preset behavior.
  - @param message.pressed (boolean) - Optional. If `message` is included, the component checks the value of `pressed`: a value of false will not make it jump.
- **[Message specified in definition]** - An alternative message can be specified in the JSON definition that will also cause the jump.
  - @param message.pressed (boolean) - Optional. If `message` is included, the component checks the value of `pressed`: a value of false will not make it jump.
- **hit-solid** - On receiving this message, the component discontinues its jump velocity.
  - @param collisionInfo.x (number) - Either 1,0, or -1. Zeros out the jump velocity if acceleration is in the contrary direction.
  - @param collisionInfo.y (number) - Either 1,0, or -1. Zeros out the jump velocity if acceleration is in the contrary direction.

### Local Broadcasts:
- **just-jumped** - this component will trigger this message when it receives a "jump" message and is able to jump. This is useful for tying in a jump sound.

## JSON Definition:
    {
      "type": "logic-jump",
      
      "message": "do-action",
      // Optional: If specified, this message will cause the entity to jump on this message in addition to "jump".
      
      "accelerationX": 0.2,
      "accelerationY": -0.07,
      // Acceleration of the jump. Defaults to -4 for y, 0 for x.
      
      "time": 500
      // Optional: Time in milliseconds that the jump can continue being powered by the message input; defaults to 0 which causes instantaneous jumping behavior (and thus should have a substantially larger acceleration than applying jump acceleration over time). Defaults to 0.
    }

*/
(function(){
	return platformer.createComponentClass({
		id: 'logic-jump',
		constructor: function(definition){
			if(definition.message){
				this.addListener(definition.message);
				this[definition.message] = this['jump'];
			}
			
			this.aX = this.owner.accelerationX || definition.accelerationX || 0;
			this.aY = this.owner.accelerationY || definition.accelerationY;
			if(typeof this.aY !== 'number'){
				this.aY = -4;
			}
			if(typeof this.owner.dx !== 'number'){
				this.owner.dx = 0;
			}
			if(typeof this.owner.dy !== 'number'){
				this.owner.dy = 0;
			}
			
			this.time = definition.time || 0;
			
			this.jumpLength = 0;
			
			this.jumping = false;
			this.justJumped = false;
			this.grounded = true;
			
			this.state = this.owner.state;
			this.state.jumping    = false;
			this.state.justJumped = false;
		},
		
		events:{
			"handle-logic": function(resp){
				var delta   = resp.delta;
				
				if(this.state.justJumped !== this.justJumped){
					this.state.justJumped = this.justJumped;
				}

				if(this.justJumped){
					this.justJumped = false;
					this.jumpLength = this.time;
					this.owner.triggerEvent("just-jumped");
				}
				
				if(this.state.jumping !== this.jumping){
					this.state.jumping = this.jumping;
				}

				if(this.jumping){
					if(this.time){
						this.owner.dx += this.aX * delta;
						this.owner.dy += this.aY * delta;
						
						this.jumpLength -= delta;
						if(this.jumpLength < 0){
							this.jumping = false;
						}
					} else {
						this.owner.dx = this.aX;
						this.owner.dy = this.aY;

						this.jumping = false;
					}
				}
				
				this.grounded = false;
			},
			
			"jump": function(state){
				var jumping = false;
				
				if(state){
					jumping = (state.pressed !== false);
				} else {
					jumping = true;
				}

				if(!this.jumping && jumping && this.grounded){
					this.justJumped = true;
					this.jumping = true;
				} else if (this.jumping && !jumping) {
					this.jumping = false;
				}
			},
			
			"hit-solid": function(collisionInfo){
				if(!this.justJumped){
					if(collisionInfo.y){
						this.owner.dy = 0;
						if(((collisionInfo.y > 0) && (this.aY < 0)) || ((collisionInfo.y < 0) && (this.aY > 0))){
							this.jumping = false;
							this.grounded = true;
						}
					} else if(collisionInfo.x){
						this.owner.dx = 0;
						if(((collisionInfo.x < 0) && (this.aX > 0)) || ((collisionInfo.x > 0) && (this.aX < 0))){
							this.jumping = false;
							this.grounded = true;
						}
					}
				}
				return true;
			}
		}
	});
})();


/*--------------------------------------------------
 *   counter - ../engine/components/counter.js
 */
/**
# COMPONENT **counter**
A simple component that keeps count of something and sends messages each time the count changes. Can also have a total. When it does it will display 'count / total'.

## Messages

### Listens for:
- **increment-count** - Increments the count by 1.
- **change-count** - Changes the count to the given value.
  - @param data.count (number) - The new count value.
- **change-total** - Changes the total to the given value.
  - @param data.total (number) - The new total value.
- **[increment-count message from definition]** - If the entity has multiple counters, you can define a message specific to each counter that will be translated into a increment-count call within the object.
- **[change-count message from definition]** - If the entity has multiple counters, you can define a message specific to each counter that will be translated into a change-count call within the object.
  - @param data.count (number) - The new count value.
- **[change-total message from definition]** - If the entity has multiple counters, you can define a message specific to each counter that will be translated into a change-total call within the object.
  - @param data.total (number) - The new total value.

### Local Broadcasts:
- **update-content** - A call used to notify other components that the count or total has changed.
  - @param number - The count.
  
## JSON Definition
    {
      "type": "counter",
      
      "countMessage" : "coin-change-count"
      //Optional - An alternate message to change-count. Used in the case that you have two counters on the same entity and want to talk to a specific one.
      
      "incrementMessage" : "coin-increment"
      //Optional - An alternate message to increment-count. Used in the case that you have two counters on the same entity and want to talk to a specific one.

      "totalMessage" : "coin-change-total"
      //Optional - An alternate message to change-total. Used in the case that you have two counters on the same entity and want to talk to a specific one.
    }
*/

platformer.components['counter'] = (function(){
	var component = function(owner, definition){
		this.owner = owner;
		
		// Messages that this component listens for
		this.listeners = [];
		this.addListeners(['increment-count', 'change-count', 'change-total']);
		
		if(definition.incrementMessage)
		{
			this.addListener(definition.incrementMessage);
			this[definition.incrementMessage] = this['increment-count'];
		}
		if(definition.countMessage)
		{
			this.addListener(definition.countMessage);
			this[definition.countMessage] = this['change-count'];
		}
		if(definition.totalMessage)
		{
			this.addListener(definition.totalMessage);
			this[definition.totalMessage] = this['change-total'];
		}
		
		this.count = 0;
		this.total = 0;
		this.showTotal = definition.showTotal || false;
		this.output = {
			    text: ''
			};
	};
	var proto = component.prototype;
	
	proto['change-total'] = function(total){
		this.total = total;
		if(this.total)
		{
			this.output.text = this.count + "/" + this.total;
		} else {
			this.output.text = '' + this.count;
		}
		this.owner.trigger('update-content', this.output);
	};
	
	proto['change-count'] = function(count){
		this.count = count;
		if(this.total)
		{
			this.output.text = this.count + "/" + this.total;
		} else {
			this.output.text = '' + this.count;
		}
		this.owner.trigger('update-content', this.output);
	};
	
	proto['increment-count'] = function(){
		this.count++;
		if(this.total)
		{
			this.output.text = this.count + "/" + this.total;
		} else {
			this.output.text = '' + this.count;
		}
		this.owner.trigger('update-content', this.output);
	};
	
	// This function should never be called by the component itself. Call this.owner.removeComponent(this) instead.
	proto.destroy = function(){
		this.removeListeners(this.listeners);
		this.owner = undefined;
	};
	
	/*********************************************************************************************************
	 * The stuff below here will stay the same for all components. It's BORING!
	 *********************************************************************************************************/

	proto.addListeners = function(messageIds){
		for(var message in messageIds) this.addListener(messageIds[message]);
	};

	proto.removeListeners = function(listeners){
		for(var messageId in listeners) this.removeListener(messageId, listeners[messageId]);
	};
	
	proto.addListener = function(messageId, callback){
		var self = this,
		func = callback || function(value, debug){
			self[messageId](value, debug);
		};
		this.owner.bind(messageId, func);
		this.listeners[messageId] = func;
	};

	proto.removeListener = function(boundMessageId, callback){
		this.owner.unbind(boundMessageId, callback);
	};
	
	return component;
})();


/*--------------------------------------------------
 *   logic-timer - ../engine/components/logic-timer.js
 */
/**
# COMPONENT **logic-timer**
A timer that can used to trigger events. The timer can increment and decrement. It can be an interval timer, going off over and over. Has a max time which it will not exceed by default this is 1 hour.

## Dependencies
- [[Handler-Logic]] (on entity's parent) - This component listens for a "handle-logic" message to update the timer.

## Messages

### Listens for:
- **handle-logic** - Handles the update for the timer. Increments or decrements the current time. If it's hit the max it stops the timer at the max. If it hits the alarm it sets it off. Sends an update message indicating the timer's current time for other components to use.
  - @param data.delta (number) - The time passed since the last tick.
- **set** - Set the time.
  - @param data.time (number) - The new value for the time.
- **start** - Start the timer counting.
- **stop** - Stop the timer counting.

### Local Broadcasts:
- **[alarm message from definition]** - The definition.alarm value from the JSON definition is used as the message id. It's sent when the alarm goes off.
- **[update message from definition]** - The definition.update value from the JSON definition is used as the message id. It's sent every 'handle-logic' tick. 
  - @param message.time (number) - The current time value for the timer.

## JSON Definition
    {
      "type": "logic-timer",
      "time" : 0,
      //Optional - The starting time for the timer. Defaults to 0.
	  "alarmTime" : 10000,
	  //Optional - The time when the alarm will trigger the alarm message. Defaults to undefined, which never triggers the alarm.
	  "isInterval" : false,
	  //Optional - Whether or not the alarm fires at intervals of the alarmTime. Defaults to false.
	  "alarmMessage" : 'ding',
	  //Optional - The message sent when the alarm goes off. Defaults to ''.
	  "updateMessage" : '',
	  //Optional - The message sent when the timer updates. Defaults to ''.
	  "on" : true,
	  //Optional - Whether the alarm starts on. Defaults to true.
	  "isIncrementing" : true,
	  //Optional - Whether the timer is incrementing or decrementing. If the value is false it is decrementing. Defaults to true.
	  "maxTime" : 3600000
	  //Optional - The max value, positive or negative, that the timer will count to. At which it stops counting. Default to 3600000 which equals an hour.
    }
*/
platformer.components['logic-timer'] = (function(){
	var component = function(owner, definition){
		this.owner = owner;
		
		// Messages that this component listens for
		this.listeners = [];
		this.addListeners(['handle-logic', 'set-timer', 'start-timer', 'stop-timer']);
		this.time = this.owner.time || definition.time ||  0;
		this.prevTime = this.time;
		this.alarmTime = this.owner.alarmTime || definition.alarmTime || undefined;
		this.isInterval = this.owner.isInterval || definition.isInterval || false;
		this.alarmMessage =  this.owner.alarmMessage || definition.alarmMessage || '';
		this.updateMessage = this.owner.updateMessage || definition.updateMessage || '';
		this.isOn = this.owner.on || definition.on || true;
		this.isIncrementing = this.owner.isIncrementing || definition.isIncrementing || true;
		this.maxTime = this.owner.maxTime || definition.maxTime || 3600000; //Max time is 1hr by default.
	};
	var proto = component.prototype;
	
	proto['handle-logic'] = function(data){
		if (this.isOn)
		{
			this.prevTime = this.time;
			this.isIncrementing ? this.time += data.delta : this.time -= data.delta;
			if (Math.abs(this.time) > this.maxTime)
			{
				//If the timer hits the max time we turn it off so we don't overflow anything.
				if (this.time > 0)
				{
					this.time = this.maxTime;
				} else if (this.time < 0) {
					this.time = -this.maxTime;
				}
				this['stop-timer']();
			}
			
			if (typeof this.alarmTime !== 'undefined')
			{
				if (this.isInterval)
				{
					if (this.isIncrementing)
					{
						if ( Math.floor(this.time / this.alarmTime) > Math.floor(this.prevTime / this.alarmTime))
						{
							this.owner.trigger(this.alarmMessage);
						}
					} else {
						if ( Math.floor(this.time / this.alarmTime) < Math.floor(this.prevTime / this.alarmTime))
						{
							this.owner.trigger(this.alarmMessage);
						}
					}
				} else {
					if (this.isIncrementing)
					{
						if (this.time > this.alarmTime && this.prevTime < this.alarmTime)
						{
							this.owner.trigger(this.alarmMessage);
						}
					} else {
						if (this.time < this.alarmTime && this.prevTime > this.alarmTime)
						{
							this.owner.trigger(this.alarmMessage);
						}
					}
	 			}
			}
		}
		this.owner.trigger(this.updateMessage, {time: this.time});
	};
	
	proto['set-timer'] = function(data){
		this.time = data.time;
	};
	
	proto['start-timer'] = function(){
		this.isOn = true;
	};
	
	proto['stop-timer'] = function(){
		this.isOn = false;
	};
	
	// This function should never be called by the component itself. Call this.owner.removeComponent(this) instead.
	proto.destroy = function(){
		this.removeListeners(this.listeners);
		this.owner = undefined;
	};
	
	/*********************************************************************************************************
	 * The stuff below here will stay the same for all components. It's BORING!
	 *********************************************************************************************************/

	proto.addListeners = function(messageIds){
		for(var message in messageIds) this.addListener(messageIds[message]);
	};

	proto.removeListeners = function(listeners){
		for(var messageId in listeners) this.removeListener(messageId, listeners[messageId]);
	};
	
	proto.addListener = function(messageId, callback){
		var self = this,
		func = callback || function(value, debug){
			self[messageId](value, debug);
		};
		this.owner.bind(messageId, func);
		this.listeners[messageId] = func;
	};

	proto.removeListener = function(boundMessageId, callback){
		this.owner.unbind(boundMessageId, callback);
	};
	
	return component;
})();


/*--------------------------------------------------
 *   logic-portal - ../engine/components/logic-portal.js
 */
/**
# COMPONENT **logic-portal**
A component which changes the scene when activated. When the portal receives an occupied message it sends the entity in that message notifying it. This message is meant to give the entity a chance to activate the portal in the manner it wants. The portal can also be activated by simply telling it to activate.

## Dependencies
- [[handler-logic]] (on entity's parent) - This component listens for a "handle-logic" message it then checks to see if it should change the scene if the portal is activated.
- [[change-scene]] (on entity) - This component listens for the "new-scene" message that the logic-portal sends and actually handles the scene changing.
- [[collision-basic]] (on entity) - Not required, but if we want the 'occupied-portal' call to fire on collision you'll need to have a collision-basic component on the portal.

## Messages

### Listens for:
- **handle-logic** - Checks to see if we should change scene if the portal is activated.
- **occupied-portal** - This message takes an entity and then sends the entity a 'portal-waiting' message. The idea behind this was that you could use it with collision. When an entity gets in front of the portal the collision sends this message, we then tell the entity that collided to do whatever it needs and then it calls back to activate the portal.
  - @param message.entity (entity Object) - The entity that will receive the 'portal-waiting' message.
- **activate-portal** - This message turns the portal on. The next 'handle-logic' call will cause a change of scene.

### Local Broadcasts:
- **new-scene** - Calls the 'change-scene' component to tell it to change scenes.
  - @param object.destination (string) - The id of the scene that we want to go to.

### Peer Broadcasts:
- **portal-waiting** - Informs another object that the portal is waiting on it to send the activate message.
  - @param entity - This is the portal entity. To be used so that the object can communicate with it directly.

## JSON Definition
    {
      "type": "name-of-component",
      "destination" : "level-2"
      //Required - The destination scene to which the portal will take us. In most cases this will come into the portal from Tiled where you'll set a property on the portal you place.
    }
*/
platformer.components['logic-portal'] = (function(){ //TODO: Change the name of the component!
	var component = function(owner, definition){
		this.owner = owner;
		
		// Messages that this component listens for
		this.listeners = [];

		this.addListeners(['handle-logic', 'occupied-portal', 'activate-portal']);
		this.destination = this.owner.destination || definition.destination;
		this.activated = false;
		this.used = false; 
	};
	var proto = component.prototype;
	
	
	proto['handle-logic'] = function(){
		if (!this.used && this.activated)
		{
			this.owner.trigger("new-scene", {scene: this.destination});
			this.used = true;
		}
	};
	
	proto['occupied-portal'] = function(message){
		var entity = message.entity; 
		entity.trigger('portal-waiting', this.owner);
	};
	
	proto['activate-portal'] = function()
	{
		this.activated = true;
	};
	
	// This function should never be called by the component itself. Call this.owner.removeComponent(this) instead.
	proto.destroy = function(){
		this.removeListeners(this.listeners);
		this.owner = undefined;
	};
	
	/*********************************************************************************************************
	 * The stuff below here will stay the same for all components. It's BORING!
	 *********************************************************************************************************/

	proto.addListeners = function(messageIds){
		for(var message in messageIds) this.addListener(messageIds[message]);
	};

	proto.removeListeners = function(listeners){
		for(var messageId in listeners) this.removeListener(messageId, listeners[messageId]);
	};
	
	proto.addListener = function(messageId, callback){
		var self = this,
		func = callback || function(value, debug){
			self[messageId](value, debug);
		};
		this.owner.bind(messageId, func);
		this.listeners[messageId] = func;
	};

	proto.removeListener = function(boundMessageId, callback){
		this.owner.unbind(boundMessageId, callback);
	};
	
	return component;
})();


/*--------------------------------------------------
 *   collision-basic - ../engine/components/collision-basic.js
 */
/**
# COMPONENT **collision-basic**
This component causes this entity to collide with other entities. It must be part of a collision group and will receive messages when colliding with other entities in the collision group.

Multiple collision components may be added to a single entity if distinct messages should be triggered for certain collision areas on the entity or if the soft collision area is a different shape from the solid collision area. Be aware that too many additional collision areas may adversely affect performance. 

## Dependencies:
- [[handler-collision]] (on entity's parent) - This component listens for 'prepare-for-collision', 'relocate-entity', and 'hit-by' messages, commonly triggered by [[handler-collision]] on the parent entity.

## Messages

### Listens for:
- **collide-on** - On receiving this message, the component triggers `add-collision-entity` on the parent.
- **collide-off** - On receiving this message, the component triggers `remove-collision-entity` on the parent.
- **prepare-for-collision** - Updates the axis-aligned bounding box for this entity in preparation for collision checks.
- **relocate-entity** - This message causes the entity's x,y coordinates to update.
  - @param message.x (number) - Required. The new x coordinate.
  - @param message.y (number) - Required. The new y coordinate.
  - @param message.relative (boolean) - Optional. Determines whether the provided x,y coordinates are relative to the entity's current position. Defaults to `false`.
- **hit-by-[collision-types specified in definition]** - When the entity collides with a listed collision-type, this message is received and re-triggered as a new message according to the component definition.

### Local Broadcasts
- **[Message specified in definition]** - On receiving a 'hit-by' message, custom messages are triggered on the entity corresponding with the component definition.

### Parent Broadcasts
- **add-collision-entity** - On receiving 'collide-on', this message is triggered on the parent.
- **remove-collision-entity** - On receiving 'collide-off', this message is triggered on the parent.

## JSON Definition:
    {
      "type": "collision-basic",
      
      "collisionType": "boulder",
      // Optional. Defines how this entity should be recognized by other colliding entities. Defaults to `none`.
      
      "immobile": true,
      // Optional. Defaults to `false`, but should be set to true if entity doesn't move for better optimization.
      
      "shapes": [{
      //Optional. Defines one or more shapes to create the collision area. Defaults to a single shape with the width, height, regX, and regY properties of the entity if not specified.
      
        "type": "circle",
        // Optional. Defaults to "rectangle".
        
        "offsetX": 0,
        "offsetY": -120,
        // Optional. Specifies the collision shape's position relative to the entity's x,y coordinates. Defaults to 0. Alternatively, can specify regX and regY values, which are determined from the top-right of the collision object.
      }],
      
      //The following five properties are optional and can be specified instead of the more specific `shape` above. 
      "width": 160,
      // Optional. Sets the width of the collision area in world coordinates.
      
      "height": 240,
      // Optional. Sets the height of the collision area in world coordinates.
      
      "radius": 60,
      // Optional. Sets the radius of a circle collision area in world coordinates.
      
      "regX": 80,
      // Optional. Determines the x-axis center of the collision shape.

      "regY": 120,
      // Optional. Determines the y-axis center of the collision shape.
      
      "solidCollisions":{
      // Optional. Determines which collision types this entity should consider solid, meaning this entity should not pass through them.

        "boulder": "",
        // This specifies that this entity should not pass through other "boulder" collision-type entities.
        
        "diamond": "crack-up",
        // This specifies that this entity should not pass through "diamond" collision-type entities, but if it touches one, it triggers a "crack-up" message on the entity.

        "marble": ["flip", "dance", "crawl"]
        // This specifies that this entity should not pass through "marble" collision-type entities, but if it touches one, it triggers all three specified messages on the entity.
      },
      
      "softCollisions":{
      // Optional. Determines which collision types this entity should consider soft, meaning this entity may pass through them, but triggers collision messages on doing so.

        "water": "soaked",
        // This triggers a "soaked" message on the entity when it passes over a "water" collision-type entity.

        "lava": ["burn", "ouch"]
        // This triggers both messages on the entity when it passes over a "lava" collision-type entity.
      }
    }
*/
(function(){
	var twinBroadcast = function(component, funcA, funcB){
		return function (value) {
			funcA.call(component, value);
			funcB.call(component, value);
		  };
	},
	entityBroadcast = function(event, solidOrSoft, collisionType){
		if(typeof event === 'string'){
			return function(value){
				if(value.myType === collisionType){
					if(value.hitType === solidOrSoft){
						this.owner.triggerEvent(event, value);
					}
				}
			};
		} else if(event.length){
			return function(value){
				if(value.myType === collisionType){
					if(value.hitType === solidOrSoft){
						for (var e in event){
							this.owner.triggerEvent(event[e], value);
						}
					}
				}
			};
		} else {
			return function(collisionInfo){
				var dx = collisionInfo.x,
				dy     = collisionInfo.y;
				
				if(collisionInfo.entity && !(dx || dy)){
					dx = collisionInfo.entity.x - this.owner.x;
					dy = collisionInfo.entity.y - this.owner.y;
				}
				
				if(collisionInfo.myType === collisionType){
					if(collisionInfo.hitType === solidOrSoft){
						if((dy > 0) && event['bottom']){
							this.owner.trigger(event['bottom'], collisionInfo);
						}
						if((dy < 0) && event['top']){
							this.owner.trigger(event['top'], collisionInfo);
						}
						if((dx > 0) && event['right']){
							this.owner.trigger(event['right'], collisionInfo);
						}
						if((dx < 0) && event['left']){
							this.owner.trigger(event['left'], collisionInfo);
						}
						if(event['all']){
							this.owner.trigger(event['all'], collisionInfo);
						}
					}
				}
			};
		}
	},
	setupCollisionFunctions = function(self, entity){
		// This allows the same component type to be added multiple times.
		if(!entity.collisionFunctions){
			entity.collisionFunctions = {};
			entity.getAABB = function(collisionType){
				if(!collisionType){
					var aabb = entity.aabb = entity.aabb || new platformer.classes.aABB();
					aabb.reset();
					for(var i in entity.collisionFunctions){
						aabb.include(entity.collisionFunctions[i].getAABB());
					}
					return aabb;
				} else if(entity.collisionFunctions[collisionType]){
					return entity.collisionFunctions[collisionType].getAABB();
				} else {
					return null;
				}
			};

			entity.getPreviousAABB = function(collisionType){
				if(entity.collisionFunctions[collisionType]){
					return entity.collisionFunctions[collisionType].getPreviousAABB();
				} else {
					return null;
				}
			};

			entity.getShapes = function(collisionType){
				if(entity.collisionFunctions[collisionType]){
					return entity.collisionFunctions[collisionType].getShapes();
				} else {
					return null;
				}
			};
			
			entity.getPrevShapes = function(collisionType){
				if(entity.collisionFunctions[collisionType]){
					return entity.collisionFunctions[collisionType].getPrevShapes();
				} else {
					return null;
				}
			};
			
			entity.prepareCollision = function(x, y){
				for(var i in entity.collisionFunctions){
					entity.collisionFunctions[i].prepareCollision(x, y);
				}
			};
			
			entity.relocateEntity = function(x, y){
				entity.triggerEvent('relocate-entity', {x:x, y:y});
			};
			
			entity.movePreviousX = function(x){
				for(var i in entity.collisionFunctions){
					entity.collisionFunctions[i].movePreviousX(x);
				}
			};
			
			entity.getCollisionTypes = function(){
				return entity.collisionTypes;
			};

			entity.getSolidCollisions = function(){
				return entity.solidCollisions;
			};
		}

		entity.collisionFunctions[self.collisionType] = {
			getAABB: function(){
				return self.getAABB();
			},

			getPreviousAABB: function(){
				return self.getPreviousAABB();
			},

			getShapes: function(){
				return self.getShapes();
			},
			
			getPrevShapes: function(){
				return self.getPrevShapes();
			},
			
			prepareCollision: function(x, y){
				self.prepareCollision(x, y);
			},
			
			movePreviousX: function(x){
				self.movePreviousX(x);
			}
		};
		
	};

	return platformer.createComponentClass({
		
		id: 'collision-basic',
		
		constructor: function(definition){
			var x        = 0,
			shapes       = null,
			regX         = definition.regX,
			regY         = definition.regY,
			width        = definition.width,
			height       = definition.height,
			radius       = definition.radius,
			margin       = definition.margin || 0,
			marginLeft   = definition.marginLeft   || margin,
			marginRight  = definition.marginRight  || margin,
			marginTop    = definition.marginTop    || margin,
			marginBottom = definition.marginBottom || margin;
			
			if(isNaN(width)){
				width = this.owner.width;
				if(isNaN(regX)){
					regX = this.owner.regX;
				}
			}
			if(isNaN(height)){
				height = this.owner.height;
				if(isNaN(regY)){
					regY = this.owner.regY;
				}
			}
			if(isNaN(radius)){
				radius = this.owner.radius;
				if(isNaN(regX)){
					regX = this.owner.regX;
				}
				if(isNaN(regY)){
					regY = this.owner.regY;
				}
			}

			this.immobile  = this.owner.immobile = this.owner.immobile || definition.immobile || false;
			this.owner.previousX = this.owner.previousX || this.owner.x;
			this.owner.previousY = this.owner.previousY || this.owner.y;
			
			this.aabb     = new platformer.classes.aABB();
			this.prevAABB = new platformer.classes.aABB();
			
			this.owner.bullet = this.owner.bullet || definition.bullet;

			if(definition.shapes){
				shapes = definition.shapes;
			} else if (definition.shape) {
				shapes = [definition.shape];
			} else {
				if(definition.shapeType === 'circle'){
					radius = radius || (((width || 0) + (height || 0)) / 4);
					shapes = [{
						regX: (isNaN(regX)?radius:regX) - (marginRight - marginLeft) / 2,
						regY: (isNaN(regY)?radius:regY) - (marginBottom - marginTop) / 2,
						radius: radius,
						width:  radius * 2,
						height: radius * 2,
						type: definition.shapeType
					}];
				} else {
					shapes = [{
						regX: (isNaN(regX)?(width  || 0) / 2:regX) - (marginRight  - marginLeft)/2,
						regY: (isNaN(regY)?(height || 0) / 2:regY) - (marginBottom - marginTop )/2,
						points: definition.points,
						width:  (width  || 0) + marginLeft + marginRight,
						height: (height || 0) + marginTop  + marginBottom,
						type: definition.shapeType
					}];
				}
			}
			
			this.collisionType = definition.collisionType || 'none';
			
			this.owner.collisionTypes = this.owner.collisionTypes || [];
			this.owner.collisionTypes.push(this.collisionType);
			
			this.shapes = [];
			this.prevShapes = [];
			this.entities = undefined;
			for (x in shapes){
				this.shapes.push(new platformer.classes.collisionShape(this.owner, shapes[x], this.collisionType));
				this.prevShapes.push(new platformer.classes.collisionShape(this.owner, shapes[x], this.collisionType));
				this.prevAABB.include(this.prevShapes[x].getAABB());
				this.aabb.include(this.shapes[x].getAABB());
			}
			
			
			
			if(definition.jumpThrough){
				this.owner.jumpThrough = true;
			}
			
			setupCollisionFunctions(this, this.owner);
			
			this.owner.solidCollisions = this.owner.solidCollisions || {};
			this.owner.solidCollisions[this.collisionType] = [];
			if(definition.solidCollisions){
				for(var i in definition.solidCollisions){
					this.owner.solidCollisions[this.collisionType].push(i);
					this.owner.collides = true; //informs handler-collision that this entity should be processed in the list of solid colliders.
					if(definition.solidCollisions[i]){
						this.addListener('hit-by-' + i);
						this['hit-by-' + i] = entityBroadcast(definition.solidCollisions[i], 'solid', this.collisionType);
					}
				}
			}
	
			this.owner.softCollisions = this.owner.softCollisions || {};
			this.owner.softCollisions[this.collisionType] = [];
			if(definition.softCollisions){
				for(var i in definition.softCollisions){
					this.owner.softCollisions[this.collisionType].push(i);
					if(definition.softCollisions[i]){
						if(this['hit-by-' + i]) {
							//this['hit-by-' + i + '-solid'] = this['hit-by-' + i];
							//this['hit-by-' + i + '-soft'] = entityBroadcast(definition.softCollisions[i], 'soft');
							this['hit-by-' + i] = twinBroadcast(this, this['hit-by-' + i], entityBroadcast(definition.softCollisions[i], 'soft', this.collisionType));
						} else {
							this.addListener('hit-by-' + i);
							this['hit-by-' + i] = entityBroadcast(definition.softCollisions[i], 'soft', this.collisionType);
						}
					}
				}
			}
		},
		
		events:{
			"collide-on": function(){
				this.owner.parent.trigger('add-collision-entity', this.owner);
			},
			
			"collide-off": function(){
				this.owner.parent.trigger('remove-collision-entity', this.owner);
			},
			
			"handle-logic": function(){
				if(this.owner.movementAbsorbed){
					this.owner.movementAbsorbed = false;
				}
			},
			
			"prepare-for-collision": function(resp){
				var x = this.owner.x,
				y     = this.owner.y;
				
				// absorb velocities from the last logic tick
				if(!this.owner.movementAbsorbed && resp){
					this.owner.movementAbsorbed = true;
					if(this.owner.dx){
						x += this.owner.dx * (resp.delta || 0);
					}
					if(this.owner.dy){
						y += this.owner.dy * (resp.delta || 0);
					}
				}
				
//				this.prepareCollision(x, y);
				this.owner.x = x;
				this.owner.y = y;
			},
			
			"relocate-entity": function(resp){
				if(resp.relative){
					this.owner.x = this.owner.previousX + resp.x;
					this.owner.y = this.owner.previousY + resp.y;
				} else {
					this.owner.x = resp.x;
					this.owner.y = resp.y;
				}

				this.aabb.reset();
				for (var x in this.shapes){
					this.shapes[x].update(this.owner.x, this.owner.y);
					this.aabb.include(this.shapes[x].getAABB());
				}

				this.owner.previousX = this.owner.x;
				this.owner.previousY = this.owner.y;
			}
		},
		
		methods: {
			getAABB: function(){
				return this.aabb;
			},
			
			getPreviousAABB: function(){
				return this.prevAABB;
			},
			
			getShapes: function(){
				return this.shapes;
			},
			
			getPrevShapes: function(){
				return this.prevShapes;
			},
			
			prepareCollision: function(x, y){
				var tempShapes = this.prevShapes;
				
				this.owner.x = x;
				this.owner.y = y;
				
				this.prevShapes = this.shapes;
				this.shapes = tempShapes;
				
				this.prevAABB.set(this.aabb);
				this.aabb.reset();
				
				// update shapes
				for (var x = 0; x < this.shapes.length; x++){
					this.shapes[x].update(this.owner.x, this.owner.y);
					this.aabb.include(this.shapes[x].getAABB());
				}
			},
			
			movePreviousX: function(x){
				this.prevAABB.moveX(x);
				for(var k = 0; k < this.prevShapes.length; k++) {
					this.prevShapes[k].setXWithEntityX(x);
				}
			}
		}
	});
})();
	


/*--------------------------------------------------
 *   collision-tiles - ../engine/components/collision-tiles.js
 */
/**
# COMPONENT **collision-tiles**
This component causes the tile-map to collide with other entities. It must be part of a collision group and will cause "hit-by-tile" messages to fire on colliding entities.

## Dependencies:
- [[handler-collision]] (on entity's parent) - This component handles the collision state of the map for the [[handler-collision]] component on the parent entity.
- [[Collision-Shape]] object - This component uses collisionShape objects to expose individual tiles to the collision group.

## Methods

- **getTiles** - Returns all the collision tiles within the provided axis-aligned bounding box.
  - @param aabb ([[Aabb]]) - The axis-aligned bounding box for which tiles should be returned.
  - @return tiles (Array of objects) - Each returned object provides the shape [[collisionShape]] of the tile and the grid coordinates of the returned tile.
- **getAABB** - Returns the axis-aligned bounding box of the entire map.
  - @return aabb (object) - The returned object provides the top, left, width, and height of the collision map.
- **isTile** - Confirms whether a particular map grid coordinate contains a tile.
  - @param x (number) - Integer specifying the row of tiles in the collision map to check.
  - @param y (number) - Integer specifying the column of tiles in the collision map to check.
  - @return isTile (boolean) - Returns `true` if the coordinate contains a collision tile, `false` if it does not.

## JSON Definition:
    {
      "type": "collision-tiles",
      
      "collisionMap": [[-1,-1,-1], [1,-1,-1], [1,1,1]],
      // Required. A 2D array describing the tile-map with off (-1) and on (!-1) states. Numbers > -1 are solid and numbers -2, -3, -4, and -5 provide for jumpthrough tiles with the solid side being top, right, bottom, and left respectively.
      
      "tileWidth": 240,
      // Optional. The width of tiles in world coordinates. Defaults to 10.
      
      "tileHeight": 240,
      // Optional. The height of tiles in world coordinates. Defaults to 10.
    }
*/
(function(){
	var storedTiles = [],
	storedTileIndex = 0,
	serveTiles = [];

	return platformer.createComponentClass({
		id: 'collision-tiles',
		
		constructor: function(definition){
			this.collisionMap   = definition.collisionMap  || [];
			this.tileWidth      = definition.tileWidth  || this.owner.tileWidth  || 10;
			this.tileHeight     = definition.tileHeight || this.owner.tileHeight || 10;
			this.tileHalfWidth  = this.tileWidth  / 2;
			this.tileHalfHeight = this.tileHeight / 2;
		},
		
		methods:{
			getShape: function(prevAABB, x, y){
				var shape = null;
				
				if(storedTileIndex < storedTiles.length){
					shape = storedTiles[storedTileIndex];
					storedTileIndex += 1;
					shape.update(x * this.tileWidth + this.tileHalfWidth, y * this.tileHeight + this.tileHalfHeight);
				} else {
					storedTiles.push(new platformer.classes.collisionShape(null, {
						x:      x * this.tileWidth  + this.tileHalfWidth,
						y:      y * this.tileHeight + this.tileHalfHeight,
						type:   'rectangle',
						width:  this.tileWidth,
						height: this.tileHeight
					}, 'tiles'));
					shape = storedTiles[storedTileIndex];
				}
				
				return shape;
			},
			
			addShape: function(shapes, prevAABB, x, y){
				if (this.collisionMap[x][y] > -1) {
					shapes.push(this.getShape(prevAABB, x, y));
				} else if (this.collisionMap[x][y] < -1) {
					switch(this.collisionMap[x][y]){
					case -2: //Top
						if(prevAABB.bottom <= y * this.tileHeight){
							shapes.push(this.getShape(prevAABB, x, y));
						}
						break;
					case -3: //Right
						if(prevAABB.left >= (x + 1) * this.tileWidth){
							shapes.push(this.getShape(prevAABB, x, y));
						}
						break;
					case -4: //Bottom
						if(prevAABB.top >= (y + 1) * this.tileHeight){
							shapes.push(this.getShape(prevAABB, x, y));
						}
						break;
					case -5: //Left
						if(prevAABB.right <= x * this.tileWidth){
							shapes.push(this.getShape(prevAABB, x, y));
						}
						break;
					}
				}
				return shapes;
			}
		},
		
		publicMethods:{
			getAABB: function(){
				return {
					left: 0,
					top:  0,
					right: this.tileWidth * this.collisionMap.length,
					bottom: this.tileHeight * this.collisionMap.length[0]
				};
			},
			
			isTile: function (x, y) {
				return !((x < 0) || (y < 0) || (x >= this.collisionMap.length) || (y >= this.collisionMap[0].length) || (this.collisionMap[x][y] === -1));
			},
			
			getTileShapes: function(aabb, prevAABB){
				var left = Math.max(Math.floor(aabb.left   / this.tileWidth),  0),
				top      = Math.max(Math.floor(aabb.top    / this.tileHeight), 0),
				right    = Math.min(Math.ceil(aabb.right   / this.tileWidth),  this.collisionMap.length),
				bottom   = Math.min(Math.ceil(aabb.bottom  / this.tileHeight), this.collisionMap[0].length),
				x        = 0,
				y        = 0,
				shapes   = serveTiles;
				
				serveTiles.length = 0;
				storedTileIndex   = 0;
				
				for (x = left; x < right; x++){
					for (y = top; y < bottom; y++){
						this.addShape(shapes, prevAABB, x, y);
					}
				}
				
				return shapes;
			}
		}
	});
})();

/*--------------------------------------------------
 *   collision-box2d - ../engine/components/collision-box2d.js
 */
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


/*--------------------------------------------------
 *   logic-fps-counter - ../engine/components/logic-fps-counter.js
 */
/*
# COMPONENT **logic-fps-counter**
This component renders the avg FPS and other developer defined debug data to the screen. The developer defined values can be used to keep track of how long portions of code are taking to process on average. To do this, send messages to 'time-elapsed' with a 'name' and 'time' value. The name value is the label that you want displayed. The time value should be the time in ms that was spent performing that operation. These values are averaged over a number of ticks. 

## Dependencies:
- [[Handler-Logic]] (on entity) - This component listens for the 'handle-logic' message to update itself.
- [[Dom-Element]] (on entity's) - This component requires a dom element to render the text.
- [[Scene]] - This component receives 'time-elapsed' message from the Scene which are necessary for its functionality.

## Messages

### Listens for:
- **handle-logic** - A call from the [[Handler-Logic]]. This updates the information we're displaying including the FPS counter.
- **time-elapsed** - Called to give the counter the time spent doing a certain operation. The Scene sends a value named 'Engine Total' when a tick has occurs.

### Local Broadcasts:
- **update-content** - Calls the dom element to update the information that should be displayed.
  - @param counter (object) - An object with a 'text' field which contains the html for the names and times that are to be displayed.

## JSON Definition:
    {
		"type": "logic-fps-counter",
		"ticks": 45
		//Optional - The number of ticks across which we average the values. Defaults to 30.
	}
*/

platformer.components['logic-fps-counter'] = (function(){
	var component = function(owner, definition){
		this.owner = owner;
		
		// Messages that this component listens for
		this.listeners = [];
		this.addListeners(['handle-logic', 'time-elapsed']);

		this.counter = {
			text: ''
		};
		this.times = {};
		this.timeElapsed = false;
		this.ticks = definition.ticks || 30; //number of ticks for which to take an average
		this.count = this.ticks;
	};
	var proto = component.prototype;
	
	proto['handle-logic'] = function(){
		if(!platformer.game.settings.debug && this.owner.parent){
			this.owner.parent.removeEntity(this.owner);
		}

		if(this.timeElapsed){ //to make sure we're not including 0's from multiple logic calls between time elapsing.
			this.timeElapsed = false;
			this.count--;
			if(!this.count){
				this.count = this.ticks;
				var text = Math.floor(createjs.Ticker.getMeasuredFPS()) + " FPS<br />";
				for(var name in this.times){
					text += '<br />' + name + ': ' + Math.round(this.times[name] / this.ticks) + 'ms';
					this.times[name] = 0;
				}
				this.counter.text = text;
				this.owner.trigger('update-content', this.counter);
			}
		}
	};
	
	proto['time-elapsed'] = function(value){
		if(value){
			if(value.name){
				if((value.name === 'Engine Total') && !this.timeElapsed){
					this.timeElapsed = true;
				}
				if (!this.times[value.name]){
					this.times[value.name] = 0;
				}
				this.times[value.name] += value.time;
			}
		}
	};
	
	// This function should never be called by the component itself. Call this.owner.removeComponent(this) instead.
	proto.destroy = function(){
		this.counter = undefined;
		this.removeListeners(this.listeners);
	};
	
	/*********************************************************************************************************
	 * The stuff below here will stay the same for all components. It's BORING!
	 *********************************************************************************************************/

	proto.addListeners = function(messageIds){
		for(var message in messageIds) this.addListener(messageIds[message]);
	};

	proto.removeListeners = function(listeners){
		for(var messageId in listeners) this.removeListener(messageId, listeners[messageId]);
	};
	
	proto.addListener = function(messageId, callback){
		var self = this,
		func = callback || function(value, debug){
			self[messageId](value, debug);
		};
		this.owner.bind(messageId, func);
		this.listeners[messageId] = func;
	};

	proto.removeListener = function(boundMessageId, callback){
		this.owner.unbind(boundMessageId, callback);
	};
	
	return component;
})();


/*--------------------------------------------------
 *   render-gui - ../game/components/render-gui.js
 */
platformer.components['render-gui'] = (function(){
	var component = function(owner, definition){
		this.owner = owner;
		
		// Messages that this component listens for
		this.listeners = [];

		this.addListeners(['handle-render', 'handle-render-load']);
		
		this.background = undefined;
		this.stage = undefined;
		
		var spriteSheetSpec = {
			images: definition.spriteSheet.images.slice(),
			frames: definition.spriteSheet.frames,
			animations: definition.spriteSheet.animations
		};
		for (var x = 0; x < spriteSheetSpec.images.length; x++)
		{
			spriteSheetSpec.images[x] = platformer.assets[spriteSheetSpec.images[x]];
		}
		var spriteSheet = new createjs.SpriteSheet(spriteSheetSpec);
		this.background = new createjs.Sprite(spriteSheet, 0);
		this.currentAnimation = 'default';
		this.background.scaleX = this.owner.scaleX || 1;
		this.background.scaleY = this.owner.scaleY || 1;
		if(this.currentAnimation){
			this.background.gotoAndPlay(this.currentAnimation);
		}
	};
	var proto = component.prototype;
	
	proto['handle-render-load'] = function(resp){
		this.stage = resp.stage;
		this.stage.addChild(this.background);
		this.background.x = 200;
		this.background.y = 200;
		this.background.z = this.owner.z;
	};
	
	proto['handle-render'] = function(resp){
		
	};
	
	// This function should never be called by the component itself. Call this.owner.removeComponent(this) instead.
	proto.destroy = function(){
		this.removeListeners(this.listeners);
	};
	
	/*********************************************************************************************************
	 * The stuff below here will stay the same for all components. It's BORING!
	 *********************************************************************************************************/

	proto.addListeners = function(messageIds){
		for(var message in messageIds) this.addListener(messageIds[message]);
	};

	proto.removeListeners = function(listeners){
		for(var messageId in listeners) this.removeListener(messageId, listeners[messageId]);
	};
	
	proto.addListener = function(messageId, callback){
		var self = this,
		func = callback || function(value, debug){
			self[messageId](value, debug);
		};
		this.owner.bind(messageId, func);
		this.listeners[messageId] = func;
	};

	proto.removeListener = function(boundMessageId, callback){
		this.owner.unbind(boundMessageId, callback);
	};
	
	return component;
})();


/*--------------------------------------------------
 *   render-counter - ../game/components/render-counter.js
 */
platformer.components['render-counter'] = (function(){
	var component = function(owner, definition){
		this.owner = owner;
		
		// Messages that this component listens for
		this.listeners = [];

		this.addListeners(['handle-render', 'handle-render-load', 'refresh-count']);
		this.currentValue = 0;
		this.targetValue = 0;
		this.txt = new createjs.Text(this.currentValue.toString());
		this.txt.scaleX = definition.scaleX || this.owner.scaleX || 1;
		this.txt.scaleY = definition.scaleY || this.owner.scaleY || 1;
		this.txt.color = definition.color || '#000';
	};
	var proto = component.prototype;
	
	proto['handle-render-load'] = function(resp){
		//this.stage = resp.stage;
		this.txt.x = this.owner.x;
		this.txt.y = this.owner.y;
		this.txt.z = this.owner.z;
		this.txt.textAlign = "center";
		this.txt.textBaseline = "middle";
		resp.stage.addChild(this.txt);
	};
	
	proto['handle-render'] = function(){
		// Run loading code here
		if (this.currentValue != this.targetValue)
		{
			if (this.currentValue < this.targetValue)
			{
				this.currentValue++;
			}
			if (this.currentValue > this.targetValue)
			{
				this.currentValue--;
			}
			this.txt.text = this.currentValue;
		}
	};
	
	proto['refresh-count'] = function(data){
		this.targetValue = data;
	};
	
	// This function should never be called by the component itself. Call this.owner.removeComponent(this) instead.
	proto.destroy = function(){
		this.removeListeners(this.listeners);
	};
	
	/*********************************************************************************************************
	 * The stuff below here will stay the same for all components. It's BORING!
	 *********************************************************************************************************/

	proto.addListeners = function(messageIds){
		for(var message in messageIds) this.addListener(messageIds[message]);
	};

	proto.removeListeners = function(listeners){
		for(var messageId in listeners) this.removeListener(messageId, listeners[messageId]);
	};
	
	proto.addListener = function(messageId, callback){
		var self = this,
		func = callback || function(value, debug){
			self[messageId](value, debug);
		};
		this.owner.bind(messageId, func);
		this.listeners[messageId] = func;
	};

	proto.removeListener = function(boundMessageId, callback){
		this.owner.unbind(boundMessageId, callback);
	};
	
	return component;
})();


/*--------------------------------------------------
 *   render-clock - ../game/components/render-clock.js
 */
platformer.components['render-clock'] = (function(){
	var component = function(owner, definition){
		this.owner = owner;
		
		// Messages that this component listens for
		this.listeners = [];

		this.addListeners(['handle-render', 'handle-render-load', 'refresh-clock']);
		this.stage = undefined;
		this.currentValue = 0;
		this.targetValue = 0;
		this.txt = new createjs.Text(this.currentValue.toString());
		this.txt.scaleX = definition.scaleX || this.owner.scaleX || 1;
		this.txt.scaleY = definition.scaleY || this.owner.scaleY || 1;
		this.txt.color = definition.color || '#000';
	};
	var proto = component.prototype;
	
	proto['handle-render-load'] = function(resp){
		this.stage = resp.stage;
		this.txt.x = this.owner.x;
		this.txt.y = this.owner.y;
		this.txt.z = this.owner.z;
		this.txt.textAlign = "center";
		this.txt.textBaseline = "middle";
		this.stage.addChild(this.txt);
	};
	
	proto['handle-render'] = function(){
		this.txt.text = Math.floor(this.time / 1000).toString() + 'sec.';
	};
	
	proto['refresh-clock'] = function(data){
		this.time = data.time;
	};
	
	// This function should never be called by the component itself. Call this.owner.removeComponent(this) instead.
	proto.destroy = function(){
		this.stage.removeChild(this.txt);
		this.stage = undefined;
		this.txt = undefined;
		this.removeListeners(this.listeners);
	};
	
	/*********************************************************************************************************
	 * The stuff below here will stay the same for all components. It's BORING!
	 *********************************************************************************************************/

	proto.addListeners = function(messageIds){
		for(var message in messageIds) this.addListener(messageIds[message]);
	};

	proto.removeListeners = function(listeners){
		for(var messageId in listeners) this.removeListener(messageId, listeners[messageId]);
	};
	
	proto.addListener = function(messageId, callback){
		var self = this,
		func = callback || function(value, debug){
			self[messageId](value, debug);
		};
		this.owner.bind(messageId, func);
		this.listeners[messageId] = func;
	};

	proto.removeListener = function(boundMessageId, callback){
		this.owner.unbind(boundMessageId, callback);
	};
	
	return component;
})();


/*--------------------------------------------------
 *   logic-hero - ../game/components/logic-hero.js
 */
(function(){

	return platformer.createComponentClass({

		id: "logic-hero",
		
		constructor: function(definition){
			var state = this.state = this.owner.state;
			state.swing = false;
			state.swingHit = false;
			
			this.teleportDestination = undefined;
			this.justTeleported = false;
		},
		
		events:{
			"handle-logic": function(){			
			},

			"portal-waiting": function (portal) {
				portal.trigger('activate-portal');
			}

		}
	});
})();


/*--------------------------------------------------
 *   logic-gui - ../game/components/logic-gui.js
 */
platformer.components['logic-gui'] = (function(){
	var component = function(owner, definition){
		this.owner = owner;
		
		// Messages that this component listens for
		this.listeners = [];

		this.addListeners(['load']);
	};
	var proto = component.prototype;
	
	proto['load'] = function(resp){
		this.owner.trigger('logical-state', {state: 'default'});
	};
	
	
	// This function should never be called by the component itself. Call this.owner.removeComponent(this) instead.
	proto.destroy = function(){
		this.removeListeners(this.listeners);
	};
	
	/*********************************************************************************************************
	 * The stuff below here will stay the same for all components. It's BORING!
	 *********************************************************************************************************/

	proto.addListeners = function(messageIds){
		for(var message in messageIds) this.addListener(messageIds[message]);
	};

	proto.removeListeners = function(listeners){
		for(var messageId in listeners) this.removeListener(messageId, listeners[messageId]);
	};
	
	proto.addListener = function(messageId, callback){
		var self = this,
		func = callback || function(value, debug){
			self[messageId](value, debug);
		};
		this.owner.bind(messageId, func);
		this.listeners[messageId] = func;
	};

	proto.removeListener = function(boundMessageId, callback){
		this.owner.unbind(boundMessageId, callback);
	};
	
	return component;
})();

})();