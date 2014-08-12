/**
 * Application definition, initializers and setup.
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'marionette',

    'app/events',
    'app/layout',
    'modules/permitApply/permitApplyMod',

    'objects/models/userSession',
    'objects/collections/contacts'
],
function ($, _, Backbone, Handlebars, Marionette, appEvents, AppLayout, PermitApplyMod, UserSession, Contacts) {
    var App = new Marionette.Application();
    /**
     * Define application modules here
     */
    App.module("permitApply", {moduleClass: PermitApplyMod});

    /**
     * App paths and events
     */
    App.root = "/";
    App.Events = appEvents;
    App.accelaApiURL = "https://apis.accela.com/v4";
    App.accelaAppId = "635419107836704291";
    App.accelaAppSecret = "a5a70a476823465ba3690e92e7851da9";
    App.accelaTestToken = "";

    // get Accela authentication token
    $.ajaxSetup({
        headers: {"Access-Control-Allow-Origin": "*"}
        /*
        headers: {
            "response_type": "code",
            "client_id": App.accelaAppId,
            "redirect_uri": "http://localhost:8080/",
            "environment": "TEST",
            "agency_name": "ccsf",
            "scope": "get_contacts",
            "state": new Date().getTime()
        }
        */
    });

    console.info("Starting authentication...");
    var now = new Date().getTime();
    $.ajax({
        url: "https://auth.accela.com/oauth2/authorize",
        data: {
            "response_type": "code",
            "client_id": App.accelaAppId,
            "redirect_uri": "apis.accela.com",
            "environment": "TEST",
            "agency_name": "ISLANDTON",
            "scope": "get_contacts",
            "state": now
        },
        //username: "",
        dataType: "text",
        success: function () {
            console.info("SUCCESS!");
        },
        error: function(e) {
            var msg = "";
            for (i in e) {
                msg+= i + ": " + e[i] + "\n";
            }
            console.error("Authentication failed: " + msg);
        },
        async: true
    });

    /**
     * Add the main region, it will hold the page layout and all sub-regions
     */
    App.addRegions({
        regionMain: '#mainAppRegion'
    });

    /**
     * Set up an initialization chain for the application.
     * ---------------------------------------------------
     * 1) Initialize shared collections and models.
     * 2) Initialize the layout of the application.
     */
    App.addInitializer(function () {
        var self = this;
        self.initModelsAndCollections(function () {
            self.initAppLayout();

            // TODO: add Analytics
            // Analytics.initUser(App.Models.userSession);

            /**
             * Start the history for navigation after initialization.
             */
            Backbone.history.start({root: App.root});
        });
    });

    App.initModelsAndCollections = function (callback) {
        console.info("App: Initializing models and collections");
        App.Models = {};
        App.Collections = {};

        /**
         * Load the userSession object
         */
        App.Models.userSession = new UserSession({
            id: "",
            userId: "",
            email: "michael.s.taylor@sfgov.org",
            password: "Drink14me!",
            authenticationToken: ""
        });

        /**
         * Load the collection of contacts
         */
        App.Collections.contacts = new Contacts([], {/*parameters*/});

        /**
         * Fetch the collections
         */
        App.Collections.contacts.fetch({
            success: function () {
                console.info("Contacts fetched");
                if (typeof callback == "function") {
                    callback();
                }
            },
            error: function () {
                console.error("Contacts failed to fetch");
            }
        });
    };

    /**
     * Main initializing function sets up the basic layour and its regions
     */
    App.initAppLayout = function () {
        /**
         * Inject the main layout into the main region of the page.
         */
        App.layout = new AppLayout({app: App});
        App.regionMain.show(App.layout);
        App.layout.bindDocumentEvents();
    };
    return App;
});