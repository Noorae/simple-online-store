/**
 * This class is the view model for the Main view of the application.
 */
Ext.define("storeClient.view.main.MainModel", {
    extend: "Ext.app.ViewModel",
    alias: "viewmodel.main",

    data: {
        name: "storeClient",
        productName: "",
        productDescription: "",
        productWeight: "",
        productKcal: "",
        productImage: "",
    },
    //TODO - add data, formulas and/or methods to support your view
});
