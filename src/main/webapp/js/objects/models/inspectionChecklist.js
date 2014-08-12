/**
 * Model for inspection checklist objects
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
            customId: "",
            checklistDesc: "",
            checklistStatus: "",
            guideType: new NVP(),
            serviceProviderCode: "",
            inspectionId: "",
            defaultOrderBy: "",
            group: "",
            items: {} // fill with inspectionChecklistItem objects
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