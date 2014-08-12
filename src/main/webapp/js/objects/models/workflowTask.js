/**
* Model for workflow tasks
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
            statusDate: null,
            isActive: "",
            isCompleted: "",
            description: "",
            comment: "",
            commentDisplay: "",
            dispositionNote: "",
            commentPublicVisible: {}, // fill with string objects
            assignEmailDisplay: "",
            assignedDate: null,
            assignedUser: new NVP(),
            assignedToDepartment: new NVP,
            currentTaskId: "",
            nextTaskId: "",
            processCode: "",
            estimatedDueDate: null,
            dueDate: null,
            actionbyUser: new NVP(),
            actionbyDepartment: new NVP(),
            trackStartDate: null,
            billable: "",
            estimatedHours: 0.0,
            hoursSpent: 0.0,
            daysDue: 0,
            inPossessionTime: 0.0,
            overtime: "",
            startTime: null, // GMT string "2014-01-0112:10:10"
            endTime: null, // GMT string "2014-01-0112:10:10"
            approval: "",
            serviceProviderCode: ""
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