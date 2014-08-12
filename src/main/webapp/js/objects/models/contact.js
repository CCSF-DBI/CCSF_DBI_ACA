/**
 * Model for contacts
 */
define([
    'jquery', 'backbone',

    'objects/models/nameValuePair',
    'objects/models/address'
],
function ($, Backbone, NVP, Address) {
    return Backbone.Model.extend({
        idAttribute: "id",
        defaults: {
            id: "",
            fullName: "",
            firstName: "",
            middleName: "",
            lastName: "",
            organizationName: "",
            businessName: "",
            address: new Address(),
            individualOrOrganization: "",
            referenceContactId: "",
            federalEmployerId: "",
            startDate: null,
            endDate: null,
            birthDate: null,
            birthCity: new NVP(),
            birthState: new NVP(),
            birthRegion: new NVP(),
            gender: new NVP(),
            race: new NVP(),
            status: new NVP(),
            relation: new NVP(),
            country: new NVP(),
            socialSecurityNumber: "",
            salutation: new NVP(),
            suffix: "",
            title: "",
            isPrimary: "",
            state: new NVP(),
            stateIdNumber: "",
            passportNumber: "",
            tradeName: "",
            driverLicenseNumber: "",
            driverLicenseState: new NVP(),
            type: new NVP(),
            email: "",
            postOfficeBox: "",
            phone1: "",
            phone1CountryCode: "",
            phone2: "",
            phone2CountryCode: "",
            phone3: "",
            phone3CountryCode: "",
            fax: "",
            faxCountryCode: "",
            deceasedDate: null,
            comment: "",
            preferredChannel: new NVP(),
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