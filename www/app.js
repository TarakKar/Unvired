Ext.application({
    name: "Sample",
    models: [],
    stores: [],
    controllers: ["Controller"],
    views: ["Viewport","Customerlist","Search"],

    launch: function () {

         var mainView = {
             xtype: "mainView"
         };
		 var search = {
            	 xtype: "search" 
         };
         Ext.Viewport.add([mainView,search]);
		
	    if (Ext.os.is('Android')) {
	    	
	    }
		
    }
});