/**
 * Model for drill-down children fields
 */
define([
    'jquery', 'backbone'
],
function ($, Backbone) {
    return Backbone.Model.extend({
        defaults: {
            id: "",
            drillId: 0
        }
    });
});