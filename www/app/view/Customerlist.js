var l = function (string) {
	   return string.toLocaleString();
	};

	Ext.define("Sample.view.Customerlist", {
	    extend: "Ext.form.Panel",
	    alias: "widget.customerlist",
	    config: {
	        layout: {
	            type: 'fit'
	        }
	    },
	    initialize: function () {
	    
	    	  this.callParent(arguments);

	          var newButton = {
	              xtype: "button",
	              ui: 'action',
	              iconCls: 'search',
				  iconMask: true,
	              handler: this.onSearchMenuButtonTap,
	              align: 'right',
				  name: 'nav_btn',
	              scope: this,
	              align: 'left'
	          };
	          
	          var settingsButton = {
		              xtype: "button",
		              ui: 'action',
		              iconCls: 'settings',
					  iconMask: true,
		              handler: this.onSettingsButtonTap,
		              align: 'right',
					  name: 'nav_btn',
		              scope: this,
		              align: 'right'
		          };
	          
	          var topToolbar = {
	              xtype: "titlebar",
	              docked: "top",
	              layout: {
	                  type: 'hbox',
	              },
	              title: l("woklistTitle"),
	          
	              items: [settingsButton,newButton],
	             
	          };

	          //WorkList List...
	          var Customerlist = Ext.create('Ext.List', {
	        	  
	      	 	id: 'Customerlist',
	      	 	height: '100%',
				cls: 'workList',
				disableSelection: true,
				autoDestroy: true,
				emptyText: '',
				grouped: true,
				store: {
	      	        fields: ['firstName','personNo'],
	      	        grouper: {
	                  groupFn: function(record) {
	                  return record.get('lastName');
	                  }
			        },
	      	        data: []
	      	    },
	      	  itemTpl: '<div class="item-header"><div>{firstName}</div> <n\> <div>{personNo}</div>',
	      	});

	        this.add([topToolbar, Customerlist]);
	    	
	    },
	    onSearchMenuButtonTap: function()
	    {
	    	this.fireEvent("searchCustomerButtonCommand");
	    },
	    onSettingsButtonTap:function()
	    {
	    	this.fireEvent("settingsButtonCommand");
	    }
	});