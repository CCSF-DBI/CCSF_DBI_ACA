/**
 * Model for Contact custom form fields
 */
define([
    'jquery', 'backbone'
],
function ($, Backbone) {
    return Backbone.Model.extend({
        defaults: {
            id: "",
            text: "",
            isReadOnly: "", // 'Y' or 'N'
            fieldType: "",
            maxLength: 0,
            isRequired: "", // 'Y' or 'N'
            drillDown {}, // fill with drillDown objects
            displayOrder: 0,
            options: {} // NVPs
        }
    });
});