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
            title: "Home",
            // The following grid shares a store with the classic version's grid as well!
            items: [
                {
                    xtype: "searchfield",
                    width: "100%",
                    margin: "10 0",
                },
                {
                    xtype: "container",
                    reference: "productDisplay",
                    padding: 10,
                    html: "Enter a search term to find a product",
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
                },
            ],
        },
    ],
});
