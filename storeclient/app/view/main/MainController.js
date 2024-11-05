/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define("storeClient.view.main.MainController", {
    extend: "Ext.app.ViewController",

    alias: "controller.main",

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm("Confirm", "Are you sure?", "onConfirm", this);
    },

    onConfirm: function (choice) {
        if (choice === "yes") {
            //
        }
    },

    onClickButton: function () {
        // Remove the localStorage key/value
        localStorage.removeItem("TutorialLoggedIn");

        // Remove Main View
        this.getView().destroy();

        // Add the Login Window
        Ext.create({
            xtype: "login",
        });
    },

    //search products
    onSearchProduct: function (field, newValue) {
        if (newValue.length > 2) {
            Ext.Ajax.request({
                url: "", //TODO add api endpoint url
                method: "GET",
                params: {
                    query: newValue,
                },
                success: function (response) {
                    const productData = Ext.decode(response.responseText);
                    this.updateProductDisplay(productData);
                },
                failure: function () {
                    Ext.Msg.alert("Error", "Product search failed.");
                },
                scope: this,
            });
        }
    },

    updateProductDisplay: function (productData) {
        const productDisplay = this.lookupReference("productDisplay");
        productDisplay.setHtml(
            `<h3>${productData.name}</h3>
             <p>Weight: ${productData.weight}</p>
             <img src="${productData.imageUrl}" width="100" height="100"/>`
        );
    },
});
