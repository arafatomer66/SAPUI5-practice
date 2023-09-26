sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
  ],
  (Controller, MessageToast, JSONModel) => {
    "use strict";

    return Controller.extend("sap.ui.demo.walkthrough.App", {
      onInit: function () {
        var oData = {
          recipient: {
            name: "Ui5",
          },
        };

        var oModel = new JSONModel(oData);
        this.getView().setModel(oModel);
      },

      onShowHello: function () {
        MessageToast.show("Hellow There!");
      },
    });
  }
);
