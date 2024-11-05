Ext.define("storeClient.view.main.Main", {
    extend: "Ext.tab.Panel",
    xtype: "app-main",

    requires: [
        "Ext.plugin.Viewport",
        "Ext.window.MessageBox",

        "storeClient.view.main.MainController",
        "storeClient.view.main.MainModel",
        "storeClient.view.main.List",
    ],

    controller: "main",
    viewModel: "main",
    plugins: "viewport",

    ui: "navigation",

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: "stretchmax",
        },
        title: {
            bind: {
                text: "{name}",
            },
            flex: 0,
        },
        iconCls: "fa-th-list",
        items: [
            {
                xtype: "button",
                text: "Logout",
                margin: "10 0",
                handler: "onClickButton",
            },
        ],
    },

    tabBar: {
        flex: 1,
        layout: {
            align: "stretch",
            overflowHandler: "none",
        },
    },

    responsiveConfig: {
        tall: {
            headerPosition: "top",
        },
        wide: {
            headerPosition: "left",
        },
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: "responsive",
            responsiveConfig: {
                wide: {
                    iconAlign: "left",
                    textAlign: "left",
                },
                tall: {
                    iconAlign: "top",
                    textAlign: "center",
                    width: 120,
                },
            },
        },
    },

    items: [
        {
            title: "Search",

            items: [
                {
                    xtype: "textfield",
                    reference: "gtinSearchField",
                    fieldLabel: "Search with GTIN code",
                    width: "80%",
                    margin: "10 0",
                },
                {
                    xtype: "button",
                    text: "Search",
                    handler: "onSearchProduct",
                },
                {
                    xtype: "panel",
                    reference: "productDisplayPanel",
                    hidden: true,
                    items: [
                        {
                            xtype: "displayfield",
                            fieldLabel: "Name",
                            bind: "{productName}",
                        },
                        {
                            xtype: "displayfield",
                            fieldLabel: "Description",
                            bind: "{productDescription}",
                        },
                        {
                            xtype: "displayfield",
                            fieldLabel: "Weight",
                            bind: "{productWeight}",
                        },
                        {
                            xtype: "displayfield",
                            fieldLabel: "Calories",
                            bind: "{productKcal}",
                        },
                        {
                            xtype: "image",
                            bind: { src: "{productImage}" },
                            width: 200,
                            height: "auto",
                            alt: "Product Image",
                            style: {
                                maxWidth: "400px", // Maximum width or height to control size within layout
                                maxHeight: "400px",
                                objectFit: "contain", // This maintains the aspect ratio without stretching
                            },
                        },
                    ],
                },
            ],
        },
        {
            title: "Products",
            items: [
                {
                    xtype: "productgrid",
                    flex: 1,
                    width: "100%",
                    listeners: {
                        activate: "onProductsTabActivate",
                    },
                },
            ],
        },
    ],
});
