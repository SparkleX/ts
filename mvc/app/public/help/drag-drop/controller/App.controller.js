sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
   "use strict";
   return Controller.extend("c1.app.controller.App", {
	data : [
		{Name : "A"},
		{Name : "B"},
		{Name : "C"},
		{Name : "D"},
	],
	onInit : function () {
		this.oModel = new JSONModel(this.data);
		this.getView().setModel(this.oModel);
	},	   
	onTest : function () {
		var data = this.oModel.getData();
		alert(data.value);
	},
	onReorderItems : function(evt) {

	},
	onDrop: function(oEvent) {
		var sDropPosition = oEvent.getParameter("dropPosition");
		var oDraggedControl = oEvent.getParameter("draggedControl");
		var oDroppedControl = oEvent.getParameter("droppedControl");
		sap.m.MessageToast.show(oDraggedControl.getTitle() + " is dropped");
	}	
   });
});
