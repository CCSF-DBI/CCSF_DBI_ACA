/**
 * Model for related record (child) details
 */
define([
    'jquery', 'backbone',

    'objects/models/nameValuePair',
    'objects/models/recordType'
],
function ($, Backbone, NVP, RecordType) {
    return Backbone.Model.extend({
        defaults: {
            id: "",
            type: new RecordType(),
            trackingId: 0,
            customId: "",
            relationship: "",
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