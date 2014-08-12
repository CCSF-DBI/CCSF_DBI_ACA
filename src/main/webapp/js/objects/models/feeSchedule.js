/**
 * Model for fee schedules
 */
define([
    'jquery', 'backbone',

    'objects/models/nameValuePair'
],
function ($, Backbone, NVP) {
    return Backbone.Model.extend({
        defaults: {
            effectDate: null, // "2014-01-0112:00:00"
            expireDate: null, // "2014-01-0112:00:00"
            schedule: new NVP(),
            version: new NVP()
        }
    });
});