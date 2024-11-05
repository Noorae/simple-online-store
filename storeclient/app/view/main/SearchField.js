Ext.define("storeClient.view.main.SearchField", {
    extend: "Ext.form.field.Text",
    xtype: "searchfield",

    emptyText: "Search Products...",
    listeners: {
        change: function (field, newValue) {
            const store = Ext.getStore("product");
            store.filter("name", newValue);
        },
    },
});
