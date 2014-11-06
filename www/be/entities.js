
function INPUT_CUSTOMER(){
	//Array to hold items.
	this.items=[];
	
	this.fields={
		USER:"",
TELEPHONE:"",
SALES_ORGANIZATION_RES:"",
PARVW:"",
PARTNER:"",
OOB_SCENARIO:"",
MAX_HITS:"",
EMAIL:"",
DIVISION_RES:"",
DISTR_CHAN_RES:"",
CUSTOMER_NUMBER:"",

	};
	
	
	this.setUSER=function(USER){
		this.fields.USER=USER;
	};
	
	this.getUSER=function(){
		return this.fields.USER;
	};	

	this.setTELEPHONE=function(TELEPHONE){
		this.fields.TELEPHONE=TELEPHONE;
	};
	
	this.getTELEPHONE=function(){
		return this.fields.TELEPHONE;
	};	

	this.setSALES_ORGANIZATION_RES=function(SALES_ORGANIZATION_RES){
		this.fields.SALES_ORGANIZATION_RES=SALES_ORGANIZATION_RES;
	};
	
	this.getSALES_ORGANIZATION_RES=function(){
		return this.fields.SALES_ORGANIZATION_RES;
	};	

	this.setPARVW=function(PARVW){
		this.fields.PARVW=PARVW;
	};
	
	this.getPARVW=function(){
		return this.fields.PARVW;
	};	

	this.setPARTNER=function(PARTNER){
		this.fields.PARTNER=PARTNER;
	};
	
	this.getPARTNER=function(){
		return this.fields.PARTNER;
	};	

	this.setOOB_SCENARIO=function(OOB_SCENARIO){
		this.fields.OOB_SCENARIO=OOB_SCENARIO;
	};
	
	this.getOOB_SCENARIO=function(){
		return this.fields.OOB_SCENARIO;
	};	

	this.setMAX_HITS=function(MAX_HITS){
		this.fields.MAX_HITS=MAX_HITS;
	};
	
	this.getMAX_HITS=function(){
		return this.fields.MAX_HITS;
	};	

	this.setEMAIL=function(EMAIL){
		this.fields.EMAIL=EMAIL;
	};
	
	this.getEMAIL=function(){
		return this.fields.EMAIL;
	};	

	this.setDIVISION_RES=function(DIVISION_RES){
		this.fields.DIVISION_RES=DIVISION_RES;
	};
	
	this.getDIVISION_RES=function(){
		return this.fields.DIVISION_RES;
	};	

	this.setDISTR_CHAN_RES=function(DISTR_CHAN_RES){
		this.fields.DISTR_CHAN_RES=DISTR_CHAN_RES;
	};
	
	this.getDISTR_CHAN_RES=function(){
		return this.fields.DISTR_CHAN_RES;
	};	

	this.setCUSTOMER_NUMBER=function(CUSTOMER_NUMBER){
		this.fields.CUSTOMER_NUMBER=CUSTOMER_NUMBER;
	};
	
	this.getCUSTOMER_NUMBER=function(){
		return this.fields.CUSTOMER_NUMBER;
	};	

	
	this.getFIELDS=function(){
		return this.fields;
	};
	   
	this.getTABLE_NAME=function(){
		return "INPUT_CUSTOMER";
	};

	this.getITEMS=function(){
		return this.items;
	};

	this.addITEM=function(item){
    	this.items.push(item);
    };	
};	

function CUSTOMERS_RESULTS_HEADER(){
	//Array to hold items.
	this.items=[];
	
	this.fields={
		ADDR_TYPE:"",
KUNNR:"",
PARNR:"",
NAME:"",
FIRSTNAME:"",
STREET:"",
CITY1:"",
MC_NAME:"",
MC_FIRSTNAME:"",
SORT1:"",
SORT2:"",
MC_CITY1:"",
POST_CODE1:"",
MC_STREET:"",
HOUSE_NUM1:"",
COUNTRY:"",
REGION:"",
NAME_L_LNG:"",
NAME_F_LNG:"",
CITY1_LNG:"",
STREET_LNG:"",
POST_CODE2:"",
PO_BOX:"",

	};
	
	
	this.setADDR_TYPE=function(ADDR_TYPE){
		this.fields.ADDR_TYPE=ADDR_TYPE;
	};
	
	this.getADDR_TYPE=function(){
		return this.fields.ADDR_TYPE;
	};	

	this.setKUNNR=function(KUNNR){
		this.fields.KUNNR=KUNNR;
	};
	
	this.getKUNNR=function(){
		return this.fields.KUNNR;
	};	

	this.setPARNR=function(PARNR){
		this.fields.PARNR=PARNR;
	};
	
	this.getPARNR=function(){
		return this.fields.PARNR;
	};	

	this.setNAME=function(NAME){
		this.fields.NAME=NAME;
	};
	
	this.getNAME=function(){
		return this.fields.NAME;
	};	

	this.setFIRSTNAME=function(FIRSTNAME){
		this.fields.FIRSTNAME=FIRSTNAME;
	};
	
	this.getFIRSTNAME=function(){
		return this.fields.FIRSTNAME;
	};	

	this.setSTREET=function(STREET){
		this.fields.STREET=STREET;
	};
	
	this.getSTREET=function(){
		return this.fields.STREET;
	};	

	this.setCITY1=function(CITY1){
		this.fields.CITY1=CITY1;
	};
	
	this.getCITY1=function(){
		return this.fields.CITY1;
	};	

	this.setMC_NAME=function(MC_NAME){
		this.fields.MC_NAME=MC_NAME;
	};
	
	this.getMC_NAME=function(){
		return this.fields.MC_NAME;
	};	

	this.setMC_FIRSTNAME=function(MC_FIRSTNAME){
		this.fields.MC_FIRSTNAME=MC_FIRSTNAME;
	};
	
	this.getMC_FIRSTNAME=function(){
		return this.fields.MC_FIRSTNAME;
	};	

	this.setSORT1=function(SORT1){
		this.fields.SORT1=SORT1;
	};
	
	this.getSORT1=function(){
		return this.fields.SORT1;
	};	

	this.setSORT2=function(SORT2){
		this.fields.SORT2=SORT2;
	};
	
	this.getSORT2=function(){
		return this.fields.SORT2;
	};	

	this.setMC_CITY1=function(MC_CITY1){
		this.fields.MC_CITY1=MC_CITY1;
	};
	
	this.getMC_CITY1=function(){
		return this.fields.MC_CITY1;
	};	

	this.setPOST_CODE1=function(POST_CODE1){
		this.fields.POST_CODE1=POST_CODE1;
	};
	
	this.getPOST_CODE1=function(){
		return this.fields.POST_CODE1;
	};	

	this.setMC_STREET=function(MC_STREET){
		this.fields.MC_STREET=MC_STREET;
	};
	
	this.getMC_STREET=function(){
		return this.fields.MC_STREET;
	};	

	this.setHOUSE_NUM1=function(HOUSE_NUM1){
		this.fields.HOUSE_NUM1=HOUSE_NUM1;
	};
	
	this.getHOUSE_NUM1=function(){
		return this.fields.HOUSE_NUM1;
	};	

	this.setCOUNTRY=function(COUNTRY){
		this.fields.COUNTRY=COUNTRY;
	};
	
	this.getCOUNTRY=function(){
		return this.fields.COUNTRY;
	};	

	this.setREGION=function(REGION){
		this.fields.REGION=REGION;
	};
	
	this.getREGION=function(){
		return this.fields.REGION;
	};	

	this.setNAME_L_LNG=function(NAME_L_LNG){
		this.fields.NAME_L_LNG=NAME_L_LNG;
	};
	
	this.getNAME_L_LNG=function(){
		return this.fields.NAME_L_LNG;
	};	

	this.setNAME_F_LNG=function(NAME_F_LNG){
		this.fields.NAME_F_LNG=NAME_F_LNG;
	};
	
	this.getNAME_F_LNG=function(){
		return this.fields.NAME_F_LNG;
	};	

	this.setCITY1_LNG=function(CITY1_LNG){
		this.fields.CITY1_LNG=CITY1_LNG;
	};
	
	this.getCITY1_LNG=function(){
		return this.fields.CITY1_LNG;
	};	

	this.setSTREET_LNG=function(STREET_LNG){
		this.fields.STREET_LNG=STREET_LNG;
	};
	
	this.getSTREET_LNG=function(){
		return this.fields.STREET_LNG;
	};	

	this.setPOST_CODE2=function(POST_CODE2){
		this.fields.POST_CODE2=POST_CODE2;
	};
	
	this.getPOST_CODE2=function(){
		return this.fields.POST_CODE2;
	};	

	this.setPO_BOX=function(PO_BOX){
		this.fields.PO_BOX=PO_BOX;
	};
	
	this.getPO_BOX=function(){
		return this.fields.PO_BOX;
	};	

	
	this.getFIELDS=function(){
		return this.fields;
	};
	
	this.getITEMS=function(){
		return this.items;
	};

	this.addITEM=function(item){
    	this.items.push(item);
    };
    
	this.getTABLE_NAME=function(){
		return "CUSTOMERS_RESULTS_HEADER";
	};
	
	this.isHEADER=function(){
		return true;
	};    	
};	

function getStructureInstance(tableName) {

	if(tableName=="CUSTOMERS_RESULTS_HEADER") {
		return new CUSTOMERS_RESULTS_HEADER();
	}

	if(tableName=="INPUT_CUSTOMER") {
		return new INPUT_CUSTOMER();
	}
	

};

function getXML(object){
    var keys=Object.keys(object.fields);
	var xml="<?xml version='1.0' encoding='UTF-8'?>"+
	        "<"+object.constructor.name+">";
	for(var i=0;i<keys.length;i++){
	  xml+="<"+keys[i]+">"+object.fields[keys[i]]+"</"+keys[i]+">";
	}
	for(var i=0;i<object.items.length;i++){
	 var item=object.items[i];
	 xml+='<item name="'+item.constructor.name+'">';
	 var ikeys=Object.keys(item.fields);
	 for(var j=0;j<ikeys.length;j++){
	 xml+="<"+ikeys[j]+">"+item.fields[ikeys[j]]+"</"+ikeys[j]+">";
	 }
	 xml+="</item>";
	}
	xml+="</"+object.constructor.name+">";
	return xml;
};
