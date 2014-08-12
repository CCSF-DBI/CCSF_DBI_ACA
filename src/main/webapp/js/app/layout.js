/**
 * Main layout view controller
 */
define([
    'jquery', 'backbone', 'marionette',
    'text!templates/app/layout.htm',
    'app/events',
    'app/regionTypes/modalRegion'
],
function ($, Backbone, Marionette, layoutHTML, appEvents, ModalRegion) {
    return Marionette.LayoutView.extend({
        template: Handlebars.compile(layoutHTML),

        initialize: function () {
            var layout = this;
            layout.App = layout.options.app;
        },

        /**
         * Define app regions
         */
        regions: {
            mainContentRegion: "#mainContentRegion",
            sideNavRegion: "#sideNavRegion",
            modalRegion: {
                selector: "#modalRegion",
                regionType: ModalRegion
            }
        },

        /**
         * Page events
         */
        events: {

        },

        /**
         * Custom methods
         */
        bindDocumentEvents: function () {
            return true;
        }
    });
});