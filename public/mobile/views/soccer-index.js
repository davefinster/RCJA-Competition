(function() {
  RoboMobile.views.soccer_index = Ext.extend(Ext.Panel, {
    initComponent: function() {
      this.dockedItems = [{
        xtype: 'toolbar',
        title: 'Home'
      }];
      this.style = 'background: #5078a4'
		this.layout = 'fit';
      RoboMobile.views.soccer_index.superclass.initComponent.call(this);
	
	RoboMobile.stores.SoccerGameStore.load();
	
	var list = new Ext.List({
	    itemTpl : '{name}',
	    indexBar: true,
	    store: RoboMobile.stores.SoccerGameStore,
		listeners: {
			itemtap: function(table, index, item, e){
				Ext.dispatch({
					controller: 'navigation',
					action: 'push',
					to: {
						controller: 'soccer',
						action: 'detail',
					    historyUrl: 'soccer/detail/' + RoboMobile.stores.SoccerGameStore.getAt(index).data.id,
						soccerGameID: RoboMobile.stores.SoccerGameStore.getAt(index).data.id
					}
				});
			}
		}
	});
	this.add(list);
    }
  });

  Ext.reg('soccer-index', RoboMobile.views.soccer_index);
  
})();