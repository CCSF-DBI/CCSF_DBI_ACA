/**
 * Model for custom table rows
 */
define([
    'jquery', 'backbone'
],
function ($, Backbone) {
    return Backbone.Model.extend({
        defaults: {
            id: "",
            action: "",
            fields: {} // fill with NVPs
        }
    });
});