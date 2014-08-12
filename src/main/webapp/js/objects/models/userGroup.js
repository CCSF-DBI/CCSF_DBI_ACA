/**
* Model for user groups
*/
define([
    'jquery', 'backbone'
],
function ($, Backbone) {
    return Backbone.Model.extend({
        idAttribute: "id",
        defaults: {
            id: "",
            name: "",
            moduleName: ""
        }
    });
});