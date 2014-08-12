/**
 * Main application
 */
define([
    "jquery", "app/app", "app/router"
],
function($, App, appRouter){
    App.Router = appRouter;
    App.start();
});