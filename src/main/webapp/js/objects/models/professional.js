/**
 * Model for professional objects
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
            isPrimary: "",
            salutation: new NVP(),
            firstName: "",
            middleName: "",
            lastName: "",
            fullName: "",
            suffix: "",
            gender: new NVP(),
            socialSecurityNumber: ""
            title: "",
            email: "",
            businessName: "",
            businessName2: ""
            postOfficeBox: "",
            addressLine1: "",
            addressLine2: "",
            addressLine3: "",
            city: "",
            state: new NVP(),
            postalCode: "",
            country: new NVP(),
            phone1: "",
            phone2: "",
            phone3: "",
            fax: "",
            federalEmployerId: "",
            birthDate: null,
            comment: "",
            businessLicense: "",
            licenseType: new NVP(),
            licenseNumber: "",
            referenceLicenseId: "",
            licensingBoard: new NVP(),
            originalIssueDate: null,
            lastRenewalDate: null,
            expirationDate: null,
            serviceProviderCode: ""
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