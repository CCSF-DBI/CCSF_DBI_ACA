/**
 * Model for report definitions
 */
define([
    'jquery', 'backbone',

    'objects/models/reportDefinitionParameter'
],
function ($, Backbone, Parameter) {
    return Backbone.Model.extend({
        idAttribute: "id",
        defaults: {
            id: "",
            format: "",
            parameters: {}, // fill with reportDefinitionParameter objects
            name: "",
            description: "",
            servProvCode: ""
        },
        toJSON: function () {
            var json = Backbone.Model.prototype.toJSON.call(this);
            // TODO: add any special field processing here
            return json;
        },
        url: function () {
            //TODO: add url logic
        }
    });
});