Ext.define("storeClient.view.main.ProductGrid", {
    extend: "Ext.grid.Panel",
    xtype: "productgrid",

    title: "Sweets",
    store: {
        type: "product",
    },

    columns: [
        { text: "Name", dataIndex: "productName", flex: 1 },
        { text: "Description", dataIndex: "productDescription", flex: 2 },
        { text: "Weight (g)", dataIndex: "product_weight", flex: 1 },
        { text: "Calories (kcal)", dataIndex: "productKcal", flex: 1 },
    ],

    listeners: {
        show: function (grid) {
            grid.getStore().load();
        },
    },
});
