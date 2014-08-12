/**
 * Model for payment objects
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
            amount: 0.0,
            amountNotAllocated: 0.0,
            cashierId: "",
            paymentDate: null,
            paymentMethod: "",
            paymentStatus: "",
            receiptId: 0,
            transactionId: 0,
            transactionCode: ""
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