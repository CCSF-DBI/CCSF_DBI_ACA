/**
 * Model for recordId objects
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
            id: 0,
            recordId: new RecordId(),
            version: new NVP(),
            paymentPeriod: new NVP(),
            balanceDue: 0.0,
            schedule: new NVP(),
            code: new NVP(),
            description: new NVP(),
            unit: new NVP(),
            status: "",
            allocation: 0,
            invoiceNumber: "",
            quantity: 0,
            assessDate: null,
            amount: 0.0,
            userDefinedField1: "",
            userDefinedField2: "",
            userDefinedField3: "",
            userDefinedField4: "",
            account1: "",
            account2: "",
            account3: "",
            notes: "",
            subgroup: ""
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