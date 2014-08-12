/**
 * Model for inspection objects
 */
define([
    'jquery', 'backbone',

    'objects/models/nameValuePair',
    'objects/models/address',
    'objects/models/contact'
    'objects/models/recordId',
    'objects/models/recordType'
],
function ($, Backbone, NVP, Address, Contact, RecordId, RecordType) {
    return Backbone.Model.extend({
        idAttribute: "id",
        defaults: {
            id: "",
            recordId: new RecordId(),
            recordType: new RecordType(),
            address: new Address(),
            addressTypeFlag: new NVP(),
            groupName: new NVP(),
            contact: new Contact(),
            contactId: "",
            contactFirstName: "",
            contactMiddleName: "",
            contactLastName: "",
            category: "",
            commentDisplay: "",
            commentPublicVisible: {}, // fill with string objects
            completedAMPM: "",
            completedDate: null,
            completedTime: "",
            startMilage: 0.0,
            endMilage: 0.0,
            totalMilage: 0.0,
            endTime: null,
            estimatedEndTime: "",
            estimatedStartTime: "",
            gisAreaName: "",
            grade: "",
            inspectorFullName: "",
            inspectorId: "",
            isAutoAssign: "",
            latitude: 0.0,
            longitude: 0.0
            majorViolation: 0,
            publicVisible: "",
            requestAMPM: "",
            requestComment: "",
            requestDate: null,
            requestTime: "",
            requestorUserId: "",
            requestorFirstName: "",
            requestorMiddleName: "",
            requestorLastName: "",
            requestorPhone: "",
            requestorPhoneIDD: "",
            requiredInspection: "",
            resultComment: "",
            resultType: "",
            scheduleDate: null,
            scheduleStartAMPM: "",
            scheduleStartTime: "",
            scheduleEndAMPM: "",
            scheduleEndTime: "",
            serviceProviderCode: "",
            startTime: null,
            status: new NVP(),
            submitAMPM: "",
            submitDate: null,
            submitTime: "",
            totalScore: 0,
            totalTime: 0.0,
            type: new RecordType(),
            unitNumber: "",
            units: 0.0,
            vehicleId: "",
            // fields below are used for resulting inspections
            contactAddress: new Address(),
            country: new NVP(),
            birthCity: new NVP(),
            birthState: new NVP(),
            driverLicenseState: new NVP(),
            searchable: true,
            createable: true,
            readable: true,
            deletable: true,
            updatable: true
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