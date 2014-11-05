
//Define Framework plugins
var DatabasePlugin = cordova.require("cordova/plugin/DatabasePlugin");
var FWSettingsPlugin = cordova.require("cordova/plugin/FWSettingsPlugin");
var RuntimePlugin = cordova.require("cordova/plugin/RuntimePlugin");
var SyncEnginePlugin = cordova.require("cordova/plugin/SyncEnginePlugin");

Ext.define("Sample.controller.Controller", {
   extend: "Ext.app.Controller",
   config: {
       refs: {
    	customerlist: "customerlist",
       	search: "search",
    	mainView: 'mainView'
	   	},
       control: {
            
    	   customerlist: {
           	searchCustomerButtonCommand: "onSearchCustomerButtonCommand",
            settingsButtonCommand:"onSettingsCommand"
           },
         
           search: {
        	    searchBackCommand: "onGoToCustomerListCommand",
				customerSearchButtonCommand:"onCustomerSearchButtonCommand"
			}
		}
   },
   
   slideLeftTransition: { type: 'slide', direction: 'left' },
   slideRightTransition: { type: 'slide', direction: 'right' },
   
  
   //On search button click, navigate to Search screen
   onSearchCustomerButtonCommand: function()
   {
		Ext.Viewport.animateActiveItem(this.getSearch(), this.slideLeftTransition);
   },
   
   //Open Kernel settings screen
   onSettingsCommand: function(){
	   	FWSettingsPlugin.startSettingActivity();	 
   },
   /*
    * On Customer Search button click download customer from SAP
    * Auto save in database
    * Navigate back to Customer List screen
    * Load all customer from database.
    */
   onCustomerSearchButtonCommand: function(data)
   {
	   Ext.Viewport.animateActiveItem(this.getMainView(), this.slideRightTransition);		
	   
	   Ext.Viewport.setMasked({xtype:'loadmask',message:l('loadingMsg')});
	   
	   console.log("DATA :"+JSON.stringify(data));
	   
	   var customData = data.customData;
	   console.log("Customer search custom data :"+customData);
	   
	   SyncEnginePlugin.submitDataInSyncMode("QUERY",null,customData,"UNVIRED_SAMPLE_SAP_ERP_PA_GET_CUSTOMERS",true,
       function(result){
  		
  		console.log("GET WORKLIST :"+JSON.stringify(result));
  		
  		         if(result.TYPE==="E"){
  		 	    	 Ext.Viewport.setMasked(false);
  			    	 Ext.Msg.alert("",result.MESSAGE);
  			    	
  			     }else{
  			    	 if(result.MESSAGE===""){
  			    		 Ext.Viewport.setMasked(false);
       					 WFController.populateCustomerlistsFromDatabase();
  			    	 }else{
  			    		 Ext.Viewport.setMasked(false);
  			    		 Ext.Msg.alert("",result.MESSAGE);
  			    	 }
  			     }
      });	
   },
  
    onGoToCustomerListCommand: function(){
		Ext.Viewport.animateActiveItem(this.getMainView(), this.slideLeftTransition);
	},
	//Get all customer records from CUSTOMERS_RESULTS_HEADER table
   populateCustomerlistsFromDatabase: function(){
	
	Ext.Viewport.setMasked({xtype:'loadmask',message:l('loadingMsg')});
   	
   	Ext.getCmp('Customerlist').getStore().clearData();
   	
   
   	setTimeout (function(){
   		
   		DatabasePlugin.select("CUSTOMERS_RESULTS_HEADER","",function(result){
   			Ext.Msg.alert("test",result.MESSAGE);
   		if(result.length!=0){
   		
   		for(var i=0;i<result.length;i++){
			
			var fname = result[i].fields.NAME;
			var pno = result[i].fields.KUNNR;
			
			Ext.getCmp('Customerlist').getStore().add({'firstName':fname,'personNo':pno});			
			
		}
		 Ext.Viewport.setMasked(false);
   		
   		}else{
   		 Ext.Viewport.setMasked(false);
   		 Ext.getCmp('Customerlist').setEmptyText('<div class="notes-list-empty-text">'+l('noDocMsg')+'</div>');
   	 }
		});
   	},500);
   },
  
  	//========================================LAUNCH=================================================================
   launch: function () {
   	
	this.populateCustomerlistsFromDatabase();
   	
   	//Register Notification listeners...
   	SyncEnginePlugin.registerNotificationListener(function(result){
   		
   		if(result.TYPE==="DATA_RECEIVE"){
   			
   			if(result.DATA.length>0){
   				this.populateCustomerlistsFromDatabase();
   			}
   		}else if(result.TYPE==="DATA_SEND"){
   			
   			this.populateCustomerlistsFromDatabase();
   	
   		}else if(result.TYPE==="APP_RESET"){
   		
   			RuntimePlugin.shutdownApp();
   	        navigator.app.exitApp();
   		}
   	});
   },
});