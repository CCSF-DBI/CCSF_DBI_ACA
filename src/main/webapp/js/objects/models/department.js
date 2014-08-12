/**
 * Model for recordId objects
 */
define([
    'jquery', 'backbone'
],
function ($, Backbone) {
    return Backbone.Model.extend({
        idAttribute: "id",
        defaults: {
            id: "",
            agency: "",
            bureau: "",
            division: "",
            group: "",
            office: "",
            section: "",
            text: "",
            value: "",
            serviceProviderCode: ""
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