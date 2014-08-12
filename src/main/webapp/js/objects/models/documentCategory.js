/**
 * Model for document categories
 */
define([
    'jquery', 'backbone',

    'objects/models/nameValuePair'
],
function ($, Backbone, NVP) {
    return Backbone.Model.extend({
        idAttribute: "id",
        defaults: {
            id: "",
            group: new NVP(),
            groups: {}, // fill with NVPs
            text: "",
            value: "",
            uploadable: true,
            downloadable: true,
            deleteable: true
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