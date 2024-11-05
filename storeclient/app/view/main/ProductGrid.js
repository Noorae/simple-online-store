Ext.define("storeClient.view.main.ProductGrid", {
    extend: "Ext.grid.Panel",
    xtype: "productgrid",

    title: "Candy Products",
    store: {
        type: "product",
    },

    columns: [
        { text: "Name", dataIndex: "name", flex: 1 },
        { text: "Price", dataIndex: "price", flex: 1 },
        { text: "Quantity", dataIndex: "quantity", flex: 1 },
    ],
});
