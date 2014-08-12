/**
 * Model for parcel objects
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
            status: new NVP(),
            parcel: "",
            parcelNumber: "",
            parcelArea: "",
            block: "",
            lot: "",
            tract: "",
            censusTract: "",
            range: "",
            page: "",
            subdivision: new NVP(),
            councilDistrict: "",
            supervisorDistrict: "",
            improvedValue: 0.0,
            landValue: 0.0,
            exemptionValue: 0,
            isPrimary: "",
            township: "",
            section: 0,
            gisSequenceNumber: 0,
            mapReferenceInfo: "",
            mapNumber: "",
            planArea: "",
            book: "",
            legalDescription: ""
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