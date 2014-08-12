/**
 * Model for drill-down fields
 */
define([
    'jquery', 'backbone'
],
function ($, Backbone) {
    return Backbone.Model.extend({
        defaults: {
            isRoot: true,
            children: {} // fill with drillDownChild objects
        }
    });
});