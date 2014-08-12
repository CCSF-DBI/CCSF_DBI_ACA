/**
 * Collection for retrieving Addresses from the Accela Construct API v.4
 */
define([
    'jquery', 'backbone',

    'objects/models/address'
],
function ($, Backbone, Address) {
return Backbone.Collection.extend({
        model: Address,

        initialize: function (models, options) {
            var collection = this;
            collection.searchParams = null;
            collection.totalRecordCount = 0;
        },

        url: function () {
            var collection = this;
            var url = "https://apis.accela.com/v4/contacts?offset=0&limit=25";
            return url;
        },
        parse: function (response) {
            if (response.body) {
                return response.body;
            }
            return response;
        }
    });
});