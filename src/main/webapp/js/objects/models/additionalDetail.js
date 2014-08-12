/**
 * Model for record additional details
 */
define([
    'jquery', 'backbone',

    'objects/models/nameValuePair',
    'objects/models/recordId'
],
function ($, Backbone, NVP, RecordId) {
    return Backbone.Model.extend({
        defaults: {
            recordId: new RecordId(),
            buildingCount: 0,
            houseUnit: 0,
            estimatedValue: 0,
            constructionType: new NVP(),
            publicOwned: ""
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