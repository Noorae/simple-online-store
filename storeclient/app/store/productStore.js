Ext.define("storeClient.store.ProductStore", {
    extend: "Ext.data.Store",
    alias: "store.product",
    model: "storeClient.model.Product",

    proxy: {
        type: "ajax",
        url: "https://simple-online-store-demo.onrender.com/api/products",
        reader: {
            type: "json",
            rootProperty: "",
        },
    },
    autoLoad: true, // Disable auto-loading
});
