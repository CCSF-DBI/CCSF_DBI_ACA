/**
 * Model for inspection checklist item objects
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
            status: new NVP(),
            comment: new NVP(),
            isMajorViolation: ""
            serviceProviderCode: "",
            checklist: "",
            checklistId: 0,
            score: 0,
            checklistItem: new NVP(),
            isCritical: "",
            customId: "",
            displayOrder: 0
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