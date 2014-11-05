Ext.define("Sample.view.Search", {
    extend: "Ext.form.Panel",
    alias: "widget.search",
    config: {
        layout: {
            type: 'fit'
        }
    },
    initialize: function () {
    
    	 this.callParent(arguments);
    	 
    	 var Settings=this;
			  
    	 var selectMenu= Ext.create('Ext.form.Panel', {
    		    fullscreen: true,
				
    		    items: [
						{
							xtype: "titlebar",
				              docked: "top",
				              layout: {
				                  type: 'hbox',
				              },
				              title: 'Customer Search',
						    	items: [
									{
										xtype: 'button',
										text: 'Back',
										handler: function(){
											Settings.fireEvent("searchBackCommand");	
										},
										scope: this
									}
								]
						},
                        {
                            xtype: 'fieldset',
                            title: 'Customer',
                            items: [
                                {
                                    xtype: 'textfield',
                                    label: 'Name',
                                    id: 'name'
                                },
                                {
                                    xtype: 'textfield',
                                    label: 'Number',
                                    id: 'number'
                                }
                            ]
                        },
                        {
                            xtype: 'button',
                            text: 'Search',
                            ui: 'confirm',

                            // The handler is called when the button is tapped
                            handler: function() {
                            	
                            	var customerName = Ext.getCmp('name').getValue();
                            	var customerNumber = Ext.getCmp('number').getValue();
                                
                            	var customData = "<INPUT_CUSTOMER><MAX_HITS/><CUSTOMER_NUMBER>"+customerNumber+"</CUSTOMER_NUMBER><MC_NAME>"+customerName+"</MC_NAME></INPUT_CUSTOMER>";
                            
                            	Settings.fireEvent("customerSearchButtonCommand",{'customData':customData});	
                            }
                        }
                    ]
    		});
			
		  this.add([selectMenu]);
    }

});
