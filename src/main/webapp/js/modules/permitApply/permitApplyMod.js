/**
 * Permit Apply Module:
 * ============================
 * This module contains all the logic required
 * for applying for a permit.
 */
define([
    'jquery', 'marionette', 'handlebars',
    'text!templates/modules/permitApply/permitApplyLayout.htm',
    'app/events',
    'modules/permitApply/permitApplyLayout',

    'objects/models/userSession'
],
function ($, Marionette, Handlebars, templateHTML, appEvents, PermitApplyLayout, UserSession) {
    return Marionette.Module.extend({
        initialize: function (options, moduleName, app) {
            var mod = this;
            mod.App = app;
            mod.startWithParent = false;
            mod.layout = new PermitApplyLayout({module: mod});
        },

        onStart: function (options) {
            console.info("permitApplyMod: starting module...");
            var mod = this;
            console.info("permitApplyMod: started.");
        },
        onStop: function (options) {
            console.info("permitApplyMod: stopping module...");
            var mod = this;
            // stop any sub modules here
            console.info("permitApplyMod: stopped.");
        }
    });
});