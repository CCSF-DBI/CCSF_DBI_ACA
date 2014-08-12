/**
 * Model for inspection checklist history objects
 */
define([
    'jquery', 'backbone'
],
function ($, Backbone) {
    return Backbone.Model.extend({
        idAttribute: "id",
        defaults: {
            id: "",
            inspectionType: "",
            updatedDate: null, // "2014-01-01"
            checklistId: 0,
            updatedBy: "",
            totalScore: 0,
            majorViolationCount: 0
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