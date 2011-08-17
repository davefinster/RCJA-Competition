(function() {
  
  var View = Ext.extend(Ext.Panel, {
    layout: 'card',
    initComponent: function() {
      this.style = 'background: #5078a4'
      View.superclass.initComponent.call(this);
    }
  });

  Ext.reg('soccer-view', View);
  
})();