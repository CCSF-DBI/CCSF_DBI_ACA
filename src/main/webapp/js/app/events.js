/**
 * Global event aggregator instance.
 */
define(['backbone', 'marionette'], function (Backbone, Marionette) {
    var appEvents = _.extend({}, Backbone.Events);
    return appEvents;
});