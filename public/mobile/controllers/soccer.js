Ext.regController('soccer', {
  
  index: function(options) {
		console.log(options);
		
		var pushed = (options.navigation !== 'pop');
		var animation = {type: 'slide', reverse: !pushed};
		
		if(this.application.viewport.items.items.length > 0){
			this.application.viewport.setActiveItem(this.application.viewport.items.items[0]);
		}
		var just_appear = false;
		if(this.application.soccer_index == null){
			just_appear = true;
			this.application.soccer_index = Ext.create({xtype:'soccer-index'});
		}
		var container = this.application.viewport.getActiveItem();
		if(container.items.indexOf(this.application.soccer_index) == -1){
			container.add(this.application.soccer_index);
		}
		if(just_appear){
			this.application.viewport.getActiveItem().setActiveItem(this.application.soccer_index);
		}else{
			this.application.viewport.getActiveItem().setActiveItem(this.application.soccer_index, animation);
		}
  },

	detail: function(options){
		var pushed = (options.navigation !== 'pop');
		var animation = {type: 'slide', reverse: !pushed};
		if(this.application.viewport.items.items.length > 0){
			this.application.viewport.setActiveItem(this.application.viewport.items.items[0]);
		}
		if(this.application.soccer_detail == null){
			this.application.soccer_detail = Ext.create({xtype:'soccer-detail'});
		}
		var container = this.application.viewport.getActiveItem();
		if(container.items.indexOf(this.application.soccer_detail) == -1){
			container.add(this.application.soccer_detail);
		}
		this.application.viewport.getActiveItem().setActiveItem(this.application.soccer_detail, animation);
		RoboMobile.stores.SoccerGameStore.getById(options.soccerGameID);
		
	}
  
});