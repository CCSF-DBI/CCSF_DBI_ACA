/**
 * Model for record record conditions
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
            id: 0
            recordId: new RecordId(),
            name: "",
            appliedbyDepartment: new NVP(),
            appliedbyUser: new NVP(),
            appliedDate: null,
            actionByDepartment: new NVP(),
            actionByUser: new NVP(),
            resolutionAction: "",
            isIncludeNameInNotice: true,
            isIncludeShortCommentsInNotice: true,
            displayNoticeInAgency: true,
            displayNoticeInCitizensFee: true,
            displayNoticeInCitizens: true,
            activeStatus: new NVP(),
            effectiveDate: null,
            expirationDate: null,
            longComments: "",
            shortComments: "",
            publicDisplayMessage: "",
            displayOrder: 0,
            group: new NVP(),
            severity: new NVP(),
            priority: new NVP(),
            status: new NVP(),
            statusDate: null,
            statusType: "",
            type: new NVP(),
            inheritable: new NVP(),
            conditionOfApproval: "",
            serviceProviderCode: "",
            additionalInformation: "",
            inspectionId: 0,
            manipulationDate: null, // "2014-01-01"
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