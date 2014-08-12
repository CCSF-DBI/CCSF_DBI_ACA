/**
* Model for inspection grades
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
            group: "",
            grade: new NVP(),
            gradeImage: ""
            minimumMajorViolation: 0,
            maximumMajorViolation: 0,
            minimumScore: 0,
            maximumScore: 0,
            displayOrder: 0,
            result: new NVP()
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