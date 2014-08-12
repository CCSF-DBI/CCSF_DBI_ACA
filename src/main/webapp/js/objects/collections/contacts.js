/**
 * Collection of contacts
 */
define([
    'jquery', 'backbone',
    'objects/models/contact'
],
function ($, Backbone, Contact) {
    return Backbone.Collection.extend({
        model: Contact,

        initialize: function (models, options) {
            var collection = this;
            collection.searchParams = null;
            collection.totalRecordCount = 0;
        },

        url: function () {
            var collection = this;
            var scope = "get_contacts";
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