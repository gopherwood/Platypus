(function(){
	return platformer.createComponentClass({

		id: "code-view",
		
		constructor: function(definition){
		},
		
		events:{
			"scene-live": function(info){
				this.source = platformer.game.settings.scenes[platformer.game.currentScene.id].layers[0].components[2].entities;
				
				if(this.source.length > 1){
					this.source = JSON.stringify(this.source, null, 4);
				} else {
					this.source = JSON.stringify(this.source[0], null, 4);
				}
				
				this.owner.triggerEvent('update-content', this.source);
			}
		}
	});
})();
