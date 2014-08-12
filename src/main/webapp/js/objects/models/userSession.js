/**
 * User Session model
 */
define(['backbone'],
function() {
    return Backbone.Model.extend({
        defaults: {
            id: "",
            userId: "",
            firstName: "",
            lastName: "",
            email: "",
            role: "",
            address: {},
            latitude: null,
            longitude: null,
            password: "",
            oldPassword: ""
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