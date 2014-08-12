/**
* Model for agencies
*/
define([
    'jquery', 'backbone'
],
function ($, Backbone, NVP) {
    return Backbone.Model.extend({
        idAttribute: "id",
        defaults: {
            id: "",
            name: "",
            serviceProviderCode: "",
            enabled: true,
            display: "",
            hostedACA: true,
            iconName: ""
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