/**
 * Model for record renewal info
 */
define([
    'jquery', 'backbone',

    'objects/models/nameValuePair'
],
function ($, Backbone, NVP) {
    return Backbone.Model.extend({
        idAttribute: "id",
        defaults: {
            expirationCode: "",
            expirationUnit: "",
            expirationStatus: new NVP(),
            expirationDate: null, // "2014-01-01 12:00:00"
            expirationPeriodInterval: 0,
            gracePeriodInterval: 0,
            renewalFeeCode: "",
            renewalFeeFunction: "",
            penaltyFeeCode: "",
            penaltyFeeFunction: "",
            penaltyPeriodNumber: 0,
            penaltyPeriodInterval 0,
            payPeriodGroup: ""
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