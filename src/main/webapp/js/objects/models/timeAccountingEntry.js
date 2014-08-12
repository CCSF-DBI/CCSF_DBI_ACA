/**
* Model for time accounting entries
*/
define([
    'jquery', 'backbone',

    'objects/models/nameValuePair',
    'objects/models/recordId'
],
function ($, Backbone, NVP, RecordId) {
    return Backbone.Model.extend({
        idAttribute: "id",
        defaults: {
            id: "",
            recordId: new RecordId(),
            userId: "",
            group: new NVP(),
            type: new NVP(),
            startTime: null, // "2014-01-01"
            endTime: null, // "2014-01-01"
            entityId: "",
            entityType: "",
            duration: "",
            billable: "",
            totalMinutes: 0,
            rate: 0.0, // 1234.5678
            percent: 0.0, // 1234.5678
            cost: 0.0, // 1234.5678
            serviceProviderCode: "",
            createdBy: "",
            createdDate: null
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