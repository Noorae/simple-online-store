Ext.define("storeClient.store.ProductStore", {
    extend: "Ext.data.Store",
    alias: "store.product",

    fields: ["name", "price", "quantity"],

    data: [
        { name: "Chocolate Bar", price: 2.5, quantity: 50 },
        { name: "Gummy Bears", price: 1.5, quantity: 100 },
        { name: "Lollipop", price: 0.5, quantity: 200 },
        // Add more candy products as needed
    ],
});
