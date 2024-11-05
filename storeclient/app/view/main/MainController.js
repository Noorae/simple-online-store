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

    onProductsTabActivate: function (tab) {
        const productGrid = tab.down("productgrid");
        const store = productGrid.getStore();

        if (!store.isLoaded()) {
            store.load();
        }
    },

    //search products
    onSearchProduct: function () {
        const gtin = this.lookupReference("gtinSearchField").getValue();
        const productPanel = this.lookupReference("productDisplayPanel");

        if (!gtin) {
            Ext.Msg.alert("Error", "Please enter a GTIN code.");
            return;
        }

        Ext.Ajax.request({
            url: `http://localhost:8080/api/products/gtin/${gtin}`,
            method: "GET",
            success: (response) => {
                const product = Ext.decode(response.responseText);

                this.getViewModel().set({
                    productName: product.productName,
                    productDescription: product.productDescription,
                    productWeight: product.product_weight + " g",
                    productKcal: product.productKcal,
                    productImage: product.productImage,
                });

                productPanel.setHidden(false);
            },
            failure: () => {
                Ext.Msg.alert("Error", "Product not found or server error.");
                productPanel.setHidden(true);
            },
        });
    },
});
