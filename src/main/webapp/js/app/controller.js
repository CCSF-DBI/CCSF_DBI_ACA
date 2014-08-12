/**
 * Main app controller
 */
define(['jquery', 'backbone', 'marionette', 'app/app'],
function ($, Backbone, Marionette, App) {
    var stoppableModules = ['permitApply'];

    var _stopAllExcept = function (exceptMods) {
        $.each(stoppableModules, function (i, modKey) {
            if (exceptMods.indexOf(modKey) == -1) {
                App.module(modKey).stop();
            }
        });
    };

    var AppController = Marionette.Controller.extend ({
        initialize: function () {
            console.info("Controller: initializing...");
            var self = this;
            // add specific initialization
            console.info("Controller: initialized.");
        },

        homeView: function () {
            console.info("Controller: homeView");
            App.Events.trigger("app:navigateTo", {step: "homeView"});
            //_stopAllExcept(['homeView']);

        },

        permitApply: function () {
            console.info("Controller: permitApply");
            App.Events.trigger("app:navigateTo", {step: "permitApply"});
            _stopAllExcept(["permitApply"]);

            // TODO: add any subviews and manipulate
            var mainAppRegion = App.regionMain.currentView.mainContentRegion
        }
    });
    return new AppController();
});