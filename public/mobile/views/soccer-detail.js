(function() {
  
  RoboMobile.views.soccer_detail = Ext.extend(Ext.Panel, {
    initComponent: function() {
      this.layout = 'fit';
      // Push through simple links:
      this.dockedItems = [{
        xtype: 'navigationbar',
        title: 'Detail'
      }];
      this.style = 'background: #5078a4'
      RoboMobile.views.soccer_detail.superclass.initComponent.call(this);
    }
  });

  Ext.reg('soccer-detail', RoboMobile.views.soccer_detail);
  
})();