/**
 * The model for all addresses
 */
define([
    'jquery', 'backbone',

    'objects/models/nameValuePair',
    'objects/models/recordId'
],
function ($, Backbone, NVP, RecordId) {
    return Backbone.Model.extend({
        idAttribute: "id",
        //urlRoot: "/v4/addresses/",
        defaults: {
            id: 0,
            refAddressId: 0,
            status: new NVP(),
            streetAddress: "",
            streetStart: 0,
            streetEnd: 0,
            streetName: "",
            streetPrefix: "",
            streetSuffix: new NVP(),
            streetSuffixDirection: new NVP(),
            secondaryStreetNumber: 0,
            secondaryStreet: "",
            description: "",
            addressTypeFlag: new NVP(),
            addressLine1: "",
            addressLine2: "",
            neighborhoodPrefix: "",
            neighborhood: "",
            inspectionDistrict: "",
            inspectionDistrictPrefix: "",
            county: "",
            city: "",
            state: new NVP(),
            postalCode: "",
            country: new NVP(),
            type: new NVP(),
            distance: 0.0,
            houseAlphaStart: "",
            houseAlphaEnd: "",
            houseFractionStart: new NVP(),
            houseFractionEnd: new NVP(),
            xCoordinate: 0.0,
            yCoordinate: 0.0,
            levelStart: "",
            levelEnd: "",
            levelPrefix: "",
            isPrimary: "",
            direction: new NVP(),
            unitType: new NVP(),
            unitStart: "",
            unitEnd: "",
            recordId: new RecordId(),
            serviceProviderCode: "",
            // fields below are used by contact addresses
            addressLine3: "",
            phone: "",
            phoneCountryCode: "",
            fax: "",
            faxCountryCode: "",
            recipient: "",
            effectiveDate: null,
            expirationDate: null
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