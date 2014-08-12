/**
 * Defines app routes
 */
define(['backbone', 'marionette', 'app/controller'],
function (Backbone, Marionette, appController) {
    var AppRouter = Marionette.AppRouter.extend({
        appRoutes: {
            "": "permitApply"
        }
    });
    return new AppRouter({controller: appController});
});