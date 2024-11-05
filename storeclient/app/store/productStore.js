Ext.define("storeClient.store.ProductStore", {
    extend: "Ext.data.Store",
    alias: "store.product",
    model: "storeClient.model.Product",

    proxy: {
        type: "ajax",
        url: "http://localhost:8080/api/products",
        reader: {
            type: "json",
            rootProperty: "",
        },
    },
    autoLoad: true, // Disable auto-loading
});
