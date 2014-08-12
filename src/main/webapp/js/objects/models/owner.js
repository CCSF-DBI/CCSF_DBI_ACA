/**
 * Model for owner objects
 */
define([
    'jquery', 'backbone',

    'objects/models/nameValuePair',
    'objects/models/address',
    'objects/models/recordId'
],
function ($, Backbone, NVP, Address, RecordId) {
    return Backbone.Model.extend({
        idAttribute: "id",
        defaults: {
            id: "",
            recordId: new RecordId()
            status: new NVP(),
            isPrimary: "",
            refOwnerId: 0.0,
            firstName: "",
            middleName: "",
            lastName: "",
            fullName: "",
            title: "",
            type: "",
            taxId: "",
            email: "",
            phone: "",
            fax: "",
            address: new Address(),
            mailAddress: new Address()
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