/**
 * Manages regions that hold components used to apply for a permit
 */
define([
    'jquery', 'marionette', 'handlebars',
    'text!templates/modules/permitApply/permitApplyLayout.htm'
],
function ($, Marionette, Handlebars, templateHTML) {
    return Marionette.LayoutView.extend({
        template: Handlebars.compile(templateHTML),
        regions: {
            // TODO: add sub view regions
        },

        initialize: function () {
            var layout = this;
            layout.module = layout.options.module;
            if (!layout.module) {
                console.error("permitApplyLayout requires a module instance.");
            }
        },

        onRender: function () {
            var layout = this;
            layout.delegateEvents();
        },

        events: {
            // TODO: add events here
        }
    });
});