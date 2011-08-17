(function() {
  
  RoboMobile.views.about_view = Ext.extend(Ext.Panel, {
    layout: 'card',
	html: 'Open source project',
    initComponent: function() {
      this.style = 'background: #5078a4';
		this.dockedItems = [{
	        xtype: 'toolbar',
	        title: 'About'
	      }];
      RoboMobile.views.about_view.superclass.initComponent.call(this);
    }
  });

  Ext.reg('about-view', RoboMobile.views.about_view);
  
})();