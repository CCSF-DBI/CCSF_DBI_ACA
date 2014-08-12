/**
 * Model for inspection types
 */
define([
    'jquery', 'backbone',

    'objects/models/nameValuePair',
    'objects/models/department'
],
function ($, Backbone, NVP, Department) {
    return Backbone.Model.extend({
        idAttribute: "id",
        defaults: {
            id: "",
            allowFailChecklistItems: "",
            allowMultiInspections: "",
            carryoverFlag: "",
            defaultDepartment: new Department(),
            flowEnabledFlag: "",
            grade: "",
            group: "",
            groupName: new NVP(),
            guideGroup: new NVP(),
            hasCancelPermission: "",
            hasFlowFlag: "",
            hasNextInspectionAdvance: "",
            hasReschedulePermission: "",
            hasSchdulePermission: "", // mis-spelled in the API reference
            inspectionEditable: "",
            isAutoAssign: "",
            isRequired: "",
            maxPoints: 0.0,
            priority: "",
            publicVisible: "",
            referenceNumber: "",
            resultGroup: "",
            text: "",
            totalScore: 0,
            totalScoreOption: "",
            unitNumber: "",
            units: 0.0,
            value: ""
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