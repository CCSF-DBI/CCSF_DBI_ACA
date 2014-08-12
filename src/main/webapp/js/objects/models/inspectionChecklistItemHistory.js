/**
 * Model for inspection checklist item history objects
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
            status: "",
            inspectionType: "",
            checklistItemId: 0,
            comments: "",
            updatedDate: null, // "2014-01-01"
            score: 0,
            majorViolation: new NVP(),
            updatedBy: ""
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