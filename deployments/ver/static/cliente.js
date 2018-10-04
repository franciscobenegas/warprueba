/*!   GeneXus Java 15_0_2-109402 on October 3, 2018 23:9:50.35
*/
gx.evt.autoSkip = false;
gx.define('cliente', false, function () {
   this.ServerClass =  "cliente" ;
   this.PackageName =  "com.openshift" ;
   this.setObjectType("web");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.autoRefresh = true;
   this.fullAjax = true;
   this.supportAjaxEvents =  true ;
   this.ajaxSecurityToken =  true ;
   this.SetStandaloneVars=function()
   {
   };
   this.e11071_client=function()
   {
      this.clearMessages();
      this.addMessage("hola mundo cruel...");
      this.refreshOutputs([]);
   };
   this.e13072_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e14072_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12];
   this.GXLastCtrlId =12;
   GXValidFnc[2]={fld:"",grid:0};
   GXValidFnc[3]={fld:"MAINTABLE",grid:0};
   GXValidFnc[4]={fld:"",grid:0};
   GXValidFnc[5]={fld:"",grid:0};
   GXValidFnc[6]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[7]={fld:"",grid:0};
   GXValidFnc[8]={fld:"",grid:0};
   GXValidFnc[9]={fld:"IMAGE1",grid:0};
   GXValidFnc[10]={fld:"",grid:0};
   GXValidFnc[11]={fld:"",grid:0};
   GXValidFnc[12]={fld:"ENVIAR",grid:0};
   this.Events = {"e13072_client": ["ENTER", true] ,"e14072_client": ["CANCEL", true] ,"e11071_client": ["'ENVIAR'", false]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'ENVIAR'"] = [[],[]];
   this.Initialize( );
});
gx.createParentObj(cliente);
