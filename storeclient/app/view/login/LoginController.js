Ext.define("storeClient.view.login.LoginController", {
    extend: "Ext.app.ViewController",
    alias: "controller.login",

    onLoginClick: function () {
        const form = this.lookupReference("form");

        if (form.isValid()) {
            const formData = form.getValues();

            Ext.Ajax.request({
                url: "http://localhost:8080/api/users/login",
                method: "POST",
                jsonData: formData,

                success: (response) => {
                    const responseMessage = response.responseText.trim();

                    if (responseMessage === "Login was successful!") {
                        localStorage.setItem("TutorialLoggedIn", true);
                        this.getView().destroy();

                        Ext.create({
                            xtype: "app-main",
                        });
                    } else {
                        Ext.Msg.alert(
                            "Login Failed",
                            responseMessage || "Invalid email or password."
                        );
                    }
                },

                failure: () => {
                    Ext.Msg.alert("Error", "Login failed. Please try again.");
                },
            });
        }
    },
});
