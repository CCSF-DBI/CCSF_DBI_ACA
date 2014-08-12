/**
 * Model for NVPs (multiuse)
 */
define([
    'jquery', 'backbone'
],
function ($, Backbone) {
    return Backbone.Model.extend({
        defaults: {
            text: "",
            value: ""
        }
    });
});