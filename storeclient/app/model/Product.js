Ext.define("storeClient.model.Product", {
    extend: "Ext.data.Model",
    fields: [
        { name: "id", type: "int" },
        { name: "productName", type: "string" },
        { name: "productDescription", type: "string" },
        { name: "product_weight", type: "float" },
        { name: "productKcal", type: "string" },
        { name: "gtinCode", type: "int" },
        { name: "productImage", type: "string" },
    ],
});
