/**
 * Model for custom tables
 */
define([
    'jquery', 'backbone'
],
function ($, Backbone) {
    return Backbone.Model.extend({
        defaults: {
            id: "",
            rows: {} // fill with customTableRow objects
        }
    });
});