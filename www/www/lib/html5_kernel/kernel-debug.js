/*
 * Unvired html5_kernel.js version 1.0
 * Dependencies: 1.cordova.js 3.0+  2.cordova.jar 3.0+
 */

//===============================================================DATABASE_PLUGIN====================================================================

cordova.define("cordova/plugin/DatabasePlugin", 
   function(require, exports, module) {
	 var exec = require("cordova/exec");
	
	 var DatabasePlugin = function () {};

	//=========================================INSERT_QUERY================================================
	 /**
	 * Method insert.
	 * @param tableName String
	 * @param fieldObject Object
	 * @param isHeader Boolean
	 * @param insertQueryCallback functionName
	 * returns LID
	 */
	 DatabasePlugin.prototype.insert=function(tableName, fieldObject, isHeader,insertQueryCallback) {

	 var query={"tableName":tableName,
	 "isHeader":isHeader,
	 "fields":fieldObject };
	 cordova.exec(function(result){insertQueryCallback(result);},function(e){console.log(e);}, "DatabasePlugin", "insert", [query]);
	 };
	 
	//=========================================INSERT_DS_QUERY================================================
	 /**
	 * Method insert.
	 * @param dataStructure IDataStructure 
	 * @param insertQueryCallback functionName
	 * returns LID
	 */
	 DatabasePlugin.prototype.insertDS=function(dataStructure,insertQueryCallback) {

	 var query={"tableName":dataStructure.getTABLE_NAME(),
	 "isHeader":dataStructure.isHEADER(),
	 "fields":dataStructure.getFIELDS()};
	 cordova.exec(function(result){insertQueryCallback(result);},function(e){console.log(e);}, "DatabasePlugin", "insert", [query]);
	 };

	 //=========================================INSERT_BE_QUERY================================================
	 /**
	 * @param BEArray Array
	 * @param insertBEQueryCallback functionName
	 */
	 DatabasePlugin.prototype.insertBE=function(BEArray,insertBEQueryCallback) {
	
		 cordova.exec(function(result){insertBEQueryCallback(result);},function(e){console.log(e);}, "DatabasePlugin", "insertBE", BEArray);
	};

	 //============================================SELECT_QUERY================================================
	 /**
	 * Method retrieve.
	 * @param tableName String
	 * @param  whereClause String
	 * @param selectSuccessCallback function name
	 */
	 DatabasePlugin.prototype.select=function(tableName, whereClause, selectSuccessCallback){
	 var query="";
	 if(whereClause=="" || whereClause==null || whereClause==undefined)
	 {
	 query={"tableName":tableName,"whereClause":""};
	 }else{
	 query={"tableName":tableName,"whereClause":whereClause};
	 }
	 cordova.exec(function(result){selectSuccessCallback(result);},function(e){console.log(e);}, "DatabasePlugin", "select", [query]);
	 };
	 
	//============================================SELECT_DS_QUERY================================================
	 /**
	 * Method retrieve.
	 * @param tableName String
	 * @param  whereClause String
	 * @param selectSuccessCallback function name
	 */
	 DatabasePlugin.prototype.selectDS=function(dataStructure, selectSuccessCallback){
	 
	     var query=getQueryStringFromDS(dataStructure);
		 
		 cordova.exec(function(result){
		 if(result.length>0){
		 var ds=getDataStructure(result[0].tableName,result);
		 selectSuccessCallback(ds);
		 }else{
		 selectSuccessCallback(result); 
		 }
		 
	 },function(e){console.log(e);}, "DatabasePlugin", "select", [query]);
	 };

	 //===============================================DELETE_QUERY================================================
	 /**
	 * Method delete.
	 * @param tableName String
	 * @param columnNames Array
	 * @param columnValues Array
	 */
	 DatabasePlugin.prototype.deleteItem=function(tableName,whereClause,deleteQueryCallback){

	 var query="";
	 if(whereClause=="" || whereClause==null || whereClause==undefined)
	 {
	 query={"tableName":tableName,"whereClause":""};
	 }else{
	 query={"tableName":tableName,"whereClause":whereClause};
	 }
	 cordova.exec(function(){deleteQueryCallback();},function(e){console.log(e);}, "DatabasePlugin", "delete", [query]);
	 };
	 
	//===============================================DELETE_DS_QUERY================================================
	 /**
	 * Method delete.
	 * @param dataStructure IDataStructure
	 */
	 DatabasePlugin.prototype.deleteItemDS=function(dataStructure,deleteQueryCallback){

	 var query=getQueryStringFromDS(dataStructure);
	 cordova.exec(function(){deleteQueryCallback();},function(e){console.log(e);}, "DatabasePlugin", "delete", [query]);
	 };

	 //===========================================UPDATE_QUERY=================================================
	 /**
	 * Method retrieve.
	 * @param tableName String
	 * @param setfieldObject Object
	 * @param whereClause String
	 * @param isHeader Boolean
	 */
	 DatabasePlugin.prototype.update=function(tableName, setfieldObject,whereClause,updateQueryCallback){

	// query=this.prepareUpdateQuery(tableName, setfieldObject,whereClause);
	 var query={"tableName":tableName,
		 "fields":setfieldObject,
		 "whereClause":whereClause
	 };
	 cordova.exec(function(result){updateQueryCallback(result);},function(e){console.log(e);}, "DatabasePlugin", "update", [query]);
	 };

	var databasePlugin = new DatabasePlugin();
    module.exports = databasePlugin;		    	
});

//===============================================================FWSETTINGS_PLUGIN===============================================================
cordova.define("cordova/plugin/FWSettingsPlugin", 
    function(require, exports, module) {
	    var exec = require("cordova/exec");

 	    var FWSettingsPlugin = function () {};
		   
 	   FWSettingsPlugin.prototype.startSettingActivity=function() {

 		  cordova.exec(null, null, "FWSettingsPlugin", "startSettingActivity", []);
 	   };  
		
	    var fWSettingsPlugin = new FWSettingsPlugin();
	    module.exports = fWSettingsPlugin;
});


//=========================================================RUNTIME_PLUGIN=========================================================================
cordova.define("cordova/plugin/RuntimePlugin", 
		 function(require, exports, module) {
		    var exec = require("cordova/exec");

		    var RuntimePlugin = function () {};
				   
		   RuntimePlugin.prototype.shutdownApp = function(str) {
		   cordova.exec(null, null, "RuntimePlugin", "shutdownApp",[str]);
		   };
		   /**
		    * Use this api to get user settings manager. It returns a JSON Object containing URL,USER_ID,PASSWORD.
		    * {"URL":server url,"USER_ID":server user id,"PASSWORD": server password,"COMPANY":company alias}
		    */
		   RuntimePlugin.prototype.userSettingsManager = function(callBack) {
			   cordova.exec(function(result){callBack(result);},function(e){console.log(e);}, "RuntimePlugin", "userSettings",[]);
		  };
		  /*
		   * Write LOG message
		   */
		  RuntimePlugin.prototype.log = function(level, sourceClass, sourceMethod, message) {
			   var logMsg={
			     "level":level,
			     "sourceClass":sourceClass,
			     "sourceMethod":sourceMethod,
			     "message":message
			   } ;
			   cordova.exec(null,function(e){console.log(e);}, "RuntimePlugin", "log",[logMsg]);
		  };
				
		   var runtimePlugin = new RuntimePlugin();
		   module.exports = runtimePlugin;
	});


//===========================================================SYNCENGINE_PLUGIN====================================================================
 cordova.define("cordova/plugin/SyncEnginePlugin", 
	function(require, exports, module) {
	var exec = require("cordova/exec");

	var SyncEnginePlugin = function () {};
	
	SyncEnginePlugin.prototype.submitDataInAsyncMode=function(requestType,BEObj,customData,beName,processAgentFunctionName,callBack) {
		var query ={
		"requestType": requestType,
		"BE": BEObj == null? "" : BEObj,
		"customData":customData == null? "" : customData,
		"beName": beName,
		"processAgentFunctionName":processAgentFunctionName,
		};
		cordova.exec(function(result){callBack();},function(e){console.log(e);}, "SyncEnginePlugin", "submitDataInAsyncMode", [query]);
	};
	
	SyncEnginePlugin.prototype.submitDataInSyncMode=function(requestType,BEObj,customData,processAgentFunctionName,autoSave,sendDataInSyncModeCallback) {
	
		var query ={
		"customData":customData == null? "" : customData,
		"BE" : BEObj == null? "" : BEObj,
		"requestType": requestType,
		"autoSave":autoSave,
		"processAgentFunctionName":processAgentFunctionName
		};
		cordova.exec(function(result){
			
			if(result.TYPE=="E"){
				sendDataInSyncModeCallback(result);
			}else{
				//if S parse DATA and get INFO MESSAGE or BE or both
			    console.log("SYNC RESPONSE :"+JSON.stringify(result));
				var resp=parseServerResponse(result.DATA);
				sendDataInSyncModeCallback(resp);
			}
			},function(e){console.log(e);}, "SyncEnginePlugin", "submitDataInSyncMode", [query]);
		};
	
	//=================================GET_MESSAGES_IN_BACKGROUND=============================================

	SyncEnginePlugin.prototype.getMessagesInBackground=function(callBack) {
	var query ="";
	cordova.exec(function(){callBack();},function(e){console.log(e);}, "SyncEnginePlugin", "getMessagesInBackground", [query]);
	};
	//=================================GENERATE_MESSAGE_IBXML=================================================
	/**
	* Method generateIBXML.
	* @param headerDataStructure String
	* @param itemDataStructureArray  Array String
	* @param generateMessageCallBack function
	*/
	SyncEnginePlugin.prototype.generateIBXML=function(headerName,headerDataStructure,itemName,itemDataStructures,generateMessageCallBack) {
	var query ={
	"HEADER_TABLE_NAME":headerName,
	"HEADER":headerDataStructure,
	"ITEM_TABLE_NAME":itemName,
	"ITEMS":itemDataStructures
	};
	cordova.exec(function(result){generateMessageCallBack(result);},function(e){console.log(e);}, "SyncEnginePlugin", "generateIbxml", [query]);
	};
	
	//================================================REGISTER_LISTENERS============================================
	/*
	 * Call this to function to register listeners for data sending and data receiving respectively...
	 */
	SyncEnginePlugin.prototype.registerNotificationListener=function(receiverCallback) {

		  cordova.exec(function(result){receiverCallback(result);},function(e){console.log(e);}, "SyncEnginePlugin", "registerNotificationListener", []);
	 };
	 SyncEnginePlugin.prototype.unRegisterNotificationListener=function(receiverCallback) {

		  cordova.exec(function(result){receiverCallback(result);},function(e){console.log(e);}, "SyncEnginePlugin", "unRegisterNotificationListener", []);
	 };
	 
	//==================================================REST_API_CALL======================================================================
	 /*
	  * Takes two params
	  * param1:  api name without server url(i.e https://192.168.98.226:8443/UNI/) e.g API/Login
	  * param2: JSON object key/value pairs of post parameters e.g. { "unviredId":"Tarak", "password":"indience", "company":"unvired"};
	  */
	 SyncEnginePlugin.prototype.makeRestApiCall=function(apiName,param,restApiCallBack) {
		var query ={
			"api":apiName,
			"param":param
		};
		cordova.exec(function(result){restApiCallBack(result);},function(e){console.log(e);}, "SyncEnginePlugin", "restApiCall", [query]);
	 }; 

	var syncEnginePlugin = new SyncEnginePlugin();
	module.exports = syncEnginePlugin;
});



//=====================================================GENERATE_QUERY_STRING_FROM_DATASTRUCTURE==================================================
function getQueryStringFromDS(dataStructure){

	 var query="";
	 var fields=dataStructure.getFIELDS();
	 
	 var qString="";
	 var firstelement=true;
	 
	 for(var prop in fields){

	 if(fields[prop]!=""){
	 
		 if(!firstelement){
			 qString+=" AND "; 
	     }else{
		 firstelement=false;
	     }
		 qString+=prop+"='"+fields[prop]+"'";
	 }
	 }
	 
	 if(qString=="" || qString==null || qString==undefined)
	 {
	 query={"tableName":dataStructure.getTABLE_NAME(),"whereClause":""};
	 }else{
	 query={"tableName":dataStructure.getTABLE_NAME(),"whereClause":qString};
	 }
	 
	 return query;
}

//======================================================JSON_TO_BE_CONVERTER======================================================================
//Take INFO MESSAGE ANS BUSINESSENTITY DATA out of response JSONObject
function parseServerResponse(jsonObj){

    if(jsonObj.hasOwnProperty("IndienceMessage")){
       var indienceMessage=jsonObj.IndienceMessage;
		if(indienceMessage && indienceMessage.hasOwnProperty("data")){
    		var data = indienceMessage.data;
        }
    }
	
	if(data && data.hasOwnProperty("Application")){
	 var application =data.Application;
	}
	var msg="" ,beData="";
	
	//Check for INFO MESSAGES
	if(data && data.hasOwnProperty("InfoMessage")){
		var infoMsg=data.InfoMessage;
		
		if(infoMsg instanceof Array){
			for(var i=0;i<infoMsg.length;i++){
			msg+= infoMsg[i].message +" ";
			}
		}else{
			msg=infoMsg.message;
		}
	}
	
	//Check for DATA
	if(application && application.hasOwnProperty("BusinessEntity")){
		var businessEntity=application.BusinessEntity;
		beData=getBEFromJsonObject(businessEntity);
	}
	return {"TYPE":"S","MESSAGE":msg,"DATA":beData};
	
}
//Parse BusinessEntities into array of BES
function getBEFromJsonObject(beList) {
	
	var BE = new Array();
	
	if ( beList && beList != null) {
	//for more than 1 BisinessEntity...
	if(beList instanceof Array){
	for ( var i = 0; i < beList.length; i++) {
	var headerObj = {};
	var iList = new Array();

	// get headers...
	var headerFieldList = beList[i].header.Field;
	var headerName=beList[i].header.name;
	var hfieldObj = {};
	for ( var j = 0; j < headerFieldList.length; j++) {
	hfieldObj[headerFieldList[j].name] = headerFieldList[j].content;
	}
	headerObj["HEADER"] = hfieldObj;
	headerObj["NAME"]=headerName;
	hfieldObj = null;

	// get items...
	var itemList = beList[i].item;
	//for more than 1 item...
	if(itemList instanceof Array){
	for ( var k = 0; k < itemList.length; k++) {
	var ifieldObj = {};
	var itemObj={};
	var itemFieldList = itemList[k].Field;
	var itemName=itemList[k].name;
	for ( var n = 0; n < itemFieldList.length; n++) {
	ifieldObj[itemFieldList[n].name] = itemFieldList[n].content;
	}
	itemObj["ITEM"]=ifieldObj;
	itemObj["NAME"]=itemName;
	iList.push(itemObj);
	ifieldObj = null;
	itemObj=null;
	}
	}
	//for only 1 item...
	else if(itemList instanceof Object){
	var ifieldObj = {};
	var itemObj={};
	var itemFieldList = itemList.Field;
	var itemName=itemList.name;
	for ( var n = 0; n < itemFieldList.length; n++) {
	ifieldObj[itemFieldList[n].name] = itemFieldList[n].content;
	}
	itemObj["ITEM"]=ifieldObj;
	itemObj["NAME"]=itemName;
	iList.push(itemObj);
	ifieldObj = null;
	itemObj=null;
	}
	headerObj["ITEMS"] = iList;
	iList = null;
	BE.push(headerObj);
	}
	}
	//for only 1 BusinessEntity...
	else if(beList instanceof Object){
	var headerObj = {};
	var iList = new Array();

	// get headers...
	var headerFieldList = beList.header.Field;
	var headerName=beList.header.name;
	var hfieldObj = {};
	for ( var j = 0; j < headerFieldList.length; j++) {
	hfieldObj[headerFieldList[j].name] = headerFieldList[j].content;
	}
	headerObj["HEADER"] = hfieldObj;
	headerObj["NAME"]=headerName;
	hfieldObj = null;

	// get items...
	var itemList = beList.item;
	//for more than 1 item...
	if(itemList instanceof Array){
	for ( var k = 0; k < itemList.length; k++) {
	var ifieldObj = {};
	var itemObj={};
	var itemFieldList = itemList[k].Field;
	var itemName=itemList[k].name;
	for ( var n = 0; n < itemFieldList.length; n++) {
	ifieldObj[itemFieldList[n].name] = itemFieldList[n].content;
	}
	itemObj["ITEM"]=ifieldObj;
	itemObj["NAME"]=itemName;
	iList.push(itemObj);
	ifieldObj = null;
	itemObj=null;
	}
	}
	//for 1 item...
	else if(itemList instanceof Object){
	var ifieldObj = {};
	var itemObj={};
	var itemFieldList = itemList.Field;
	var itemName=itemList.name;
	for ( var n = 0; n < itemFieldList.length; n++) {
	ifieldObj[itemFieldList[n].name] = itemFieldList[n].content;
	}
	itemObj["ITEM"]=ifieldObj;
	itemObj["NAME"]=itemName;
	iList.push(itemObj);
	ifieldObj = null;
	itemObj=null;
	}
	headerObj["ITEMS"] = iList;
	iList = null;
	BE.push(headerObj);
	}
	}
	return BE;
	}

//=====================================GET_DATASTRUCTURE================================================

function getDataStructure(tableName,result){

	var dataStructures=[];
	
	for(var i=0;i<result.length;i++){
	
		var dataStructure=getStructureInstance(tableName);
		
		var tableFields=result[i].fields;
		for(var prop in tableFields){
			if(dataStructure.fields[prop]!=undefined){
			dataStructure.fields[prop]=tableFields[prop];
			}
		}
		dataStructures.push(dataStructure);
    }
  return dataStructures;
};