/**
 * Model for record types
 */
define([
    'jquery', 'backbone'
],
function ($, Backbone) {
    return Backbone.Model.extend({
        idAttribute: "id",
        defaults: {
            id: "",
            category: "",
            value: "",
            group: "",
            text: "",
            module: "",
            display: "",
            subType: "",
            type: "",
            // fields below are used by inspection objects
            createable: true,
            deletable: true,
            readable: true,
            searchable: true,
            updateable: true
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