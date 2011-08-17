(function() {
  var Viewport = Ext.extend(Ext.TabPanel, {
    fullscreen: true,
	cardSwitchAnimation: false,
    id: 'viewport',
    layout: 'card',
	tabBar: {
		dock: 'bottom',
		ui: 'light',
		layout: {
			pack: 'center'
		}
	},
	items: [{
		iconCls: 'info',
		xtype: 'soccer-view',
		title: 'Soccer'
	},
	{
		iconCls: 'info',
		xtype: 'about-view',
		title: 'About'
	}]
  });
  
  Ext.reg('viewport', Viewport);
  
})();