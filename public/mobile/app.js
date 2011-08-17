Ext.regApplication({
  name: 'RoboMobile',
  launch: function() {
    this.viewport = Ext.create({xtype:'viewport'});
    Ext.redirect('navigation/push/soccer/index');
  }
});