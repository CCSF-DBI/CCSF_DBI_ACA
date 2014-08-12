/**
 * Model for location (GIS) objects
 */
define([
    'jquery', 'backbone',

    'objects/models/gisObject',
    'objects/models/geometryPoint'
],
function ($, Backbone, GISObject, GeometryPoint) {
    return Backbone.Model.extend({
        idAttribute: "id",
        defaults: {
            id: "",
            gisObject: new GISObject(),
            geometryPoint: new GeometryPoint()
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