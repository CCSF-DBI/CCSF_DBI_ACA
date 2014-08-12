/**
 * Model for record documents
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
            category: new NVP(),
            group: new NVP(),
            description: "",
            serviceProviderCode: "",
            source: "",
            entityType: "",
            entityId: "",
            statusDate: null,
            virtualFolders: "",
            uploadedBy:"",
            uploadedDate: null,
            modifiedBy: "",
            modifiedDate: null,
            department: "",
            fileName: "",
            type: "",
            size: 0.0
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