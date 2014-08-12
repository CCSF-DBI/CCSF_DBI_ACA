/**
 * Model for record Approval Conditions
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
            name: "",
            appliedbyUser: new NVP(),
            appliedbyDepartment: new NVP(),
            appliedDate: null,
            actionbyUser: new NVP(),
            actionbyDepartment: new NVP(),
            resolutionAction: "",
            isIncludeNameInNotice: true,
            isIncludeShortCommentsInNotice: true,
            displayNoticeInAgency: true,
            displayNoticeInCitizens: true,
            displayNoticeInCitizensFee: true,
            expirationDate: null,
            shortComments: "",
            longComments: "",
            publicDisplayMessage: "",
            displayOrder: 0,
            group: new NVP(),
            severity: new NVP(),
            priority: new NVP(),
            inheritable: new NVP(),
            effectiveDate: null,
            type: new NVP(),
            status: new NVP(),
            statusDate: null,
            statusType: "",
            activeStatus: new NVP(),
            conditionOfApproval: "",
            serviceProviderCode: "",
            additionalInformation: "",
            inspectionId: 0
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