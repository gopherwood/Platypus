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
      "type": "counter"
    }
*/

(function(){
	return platformer.createComponentClass({
		id: 'counter',
		constructor: function(definition){
			this.count = 0;
			this.total = 0;
			this.showTotal = definition.showTotal || false;
			this.output = {
			    text: ''
			};
		},
		events: {
			"change-total": function(total){
				this.total = total;
				if(this.total){
					this.output.text = this.count + "/" + this.total;
				} else {
					this.output.text = '' + this.count;
				}
				this.owner.trigger('update-content', this.output);
			},
			"change-count": function(count){
				this.count = count;
				if(this.total){
					this.output.text = this.count + "/" + this.total;
				} else {
					this.output.text = '' + this.count;
				}
				this.owner.trigger('update-content', this.output);
			},
			"increment-count": function(){
				this.count++;
				if(this.total){
					this.output.text = this.count + "/" + this.total;
				} else {
					this.output.text = '' + this.count;
				}
				this.owner.trigger('update-content', this.output);
			}
		}
	});
})();
