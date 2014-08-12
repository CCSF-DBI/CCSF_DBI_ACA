/**
* Model for department staff user profiles
*/
define([
    'jquery', 'backbone',

    'objects/models/userGroup',
    'objects/models/department'
],
function ($, Backbone, UserGroup, Department) {
    return Backbone.Model.extend({
        idAttribute: "id",
        defaults: {
            id: "",
            userGroups: {}, // fill with userGroup objects
            employeeId: "",
            cashierId: "",
            serviceProviderCode: "",
            firstName: "",
            middleName: "",
            lastName: "",
            nameSuffix: "",
            fullName: "",
            initial: "",
            title: "",
            phone: "",
            phoneAreaCode: "",
            phoneNumber: "",
            postalCode:""
            email: "",
            value: "",
            department: new Department(),
            loginName: ""
            password: "",
            streetAddress: "",
            city: "",
            state: "",
            countryCode: "",
        }
    });
});