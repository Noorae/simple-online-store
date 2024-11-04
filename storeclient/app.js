/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'storeClient.Application',

    name: 'storeClient',

    requires: [
        // This will automatically load all classes in the storeClient namespace
        // so that application classes do not need to require each other.
        'storeClient.*'
    ],

    // The name of the initial view to create.
    mainView: 'storeClient.view.main.Main'
});
