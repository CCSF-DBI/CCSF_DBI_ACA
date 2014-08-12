/**
 * The model for all records
 */
define([
    'jquery', 'backbone',

    'objects/models/nameValuePair',
    'objects/models/recordType'
    'objects/models/renewalInfo'
],
function ($, Backbone, NVP, RecordType, RenewalInfo) {
    return Backbone.Model.extend({
        idAttribute: "id",
        defaults: {
            id: "",
            recordClass: "",
            name: "",
            description: "",
            trackingId: 0,
            customId: "",
            type: new RecordType(),
            referenceNumber: 0,
            createdBy: "",
            createdDate: null,
            currentStatus: "",
            status: new NVP(),
            statusReason: new NVP(),
            severity: new NVP(),
            priority: new NVP(),
            constructionType: new NVP(),
            module: "",
            numberOfBuildings: 0,
            housingUnits: 0,
            publicOwned: true,
            estimatedCostPerUnit: 0.0,
            costPerUnit: 0.0,
            estimatedProductionUnit: 0.0,
            actualProductionUnit: 0.0,
            jobValue: 0.0,
            estimatedTotalJobCost: 0.0
            totalJobCost: 0.0,
            undistributedCost: 0.0,
            inPossessionTime: 0.0,
            overallApplicationTime: 0.0,
            serviceProviderCode: "",
            shortNotes: "",
            initiatedProduct: "",
            // Users / Departments
            assignedUser: "",
            assignedToDepartment: "",
            assignedDate: null,
            completeUser: "",
            completedByUser: "",
            completedByDepartment: "",
            completeDate: null,
            completedDate: null,
            closedByUser: "",
            closedByDepartment: "",
            closedDate: null,
            // Dates
            dateLastModified: null,
            firstIssuedDate: null,
            estimatedDueDate: null,
            openedDate: null,
            reportedChannel: new NVP(),
            reportedType: new NVP(),
            reportedDate: null,
            scheduledDate: null,
            statusDate: null,
            // Inspections
            inspections: {},
            documents: {},
            inspectorDepartment: "",
            inspectorName: "",
            inspectorId: "",
            // Enforcement
            enforceDepartment: "",
            enforceUserId: "",
            enforceUser: "",
            offenseWitnessed: true,
            isOffenseWitnessed: true,
            infraction: true,
            isInfraction: true,
            misdemeanor: true,
            defendantSignature: true,
            isDefendantSignature: true,
            booking: true,
            isBooking: true,
            appearanceDayOfWeek: "",
            appearanceDate: null, //GMT string "2014-01-05T16:00:00Z"
            // Address / Parcel / Owner
            addresses: {},
            parcels: {},
            owners: {},
            GIS: null,
            contacts: {},
            professionals: {},
            comments: {},
            // Fees & Payments
            fees: {},
            totalFee: 0.0,
            payments: {},
            totalPay: 0.0,
            balance: 0.0,
            // Workflow
            workflow: {},
            // Renewal Info - used when Finalizing a record
            renewalInfo: new RenewalInfo()
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