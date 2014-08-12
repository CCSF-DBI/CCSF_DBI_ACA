/**
* Model for inspection comments
*/
    define([
        'jquery', 'backbone',

        'objects/models/recordId'
    ],
    function ($, Backbone, RecordId) {
        return Backbone.Model.extend({
        idAttribute: "id",
        defaults: {
            id: "",
            recordId: new RecordId(),
            text: "",
            createdBy: "",
            createdDate: "",
            type: "",
            inspectionId: 0
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