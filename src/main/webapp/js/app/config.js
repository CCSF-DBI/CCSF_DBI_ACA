/**
 * Stores all common configuration for the application.
 * External libraries, dependency related ordering, etc.
 */
require.config({
    urlArgs: "0.0.1",
    baseUrl: "/js",
    paths: {
        "angular": "https://ajax.googleapis.com/ajax/libs/angularjs/1.2.21/angular.min.js",
        "jquery": "https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min",
        "jqueryui": "https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.0/jquery-ui.min",
        "jquerymobile": "https://ajax.googleapis.com/ajax/libs/jquerymobile/1.4.3/jquery.mobile.min",
        "jqueryform": "lib/jquery.form.min",
        "jquerysuccinct": "lib/jquery.succinct.min",
        "jquerycookie": "lib/jquery.cookie",
        "underscore": "lib/underscore-v1.6.0.min",
        "backbone": "lib/backbone-v1.1.2.min",
        "marionette": "lib/marionette-v2.0.3.min",
        "handlebars": "lib/handlebars-v1.3.0",
        "modernizr": "lib/modernizr-2.6.2.min",
        "webfont": "https://ajax.googleapis.com/ajax/libs/webfont/1.5.3/webfont",
        "jsonlite": "lib/jsonlite",
        "async": "lib/require/plugins/require.async-v0.0.1",
        "text": "lib/require/plugins/require.text-v2.0.12",
        "i18n": "lib/require/plugins/require.i18n-v2.0.4",
        "templates": "../templates",
        "lib": "lib",
        "modules": "modules",
        //"utils": "modules/utils",
        "objects": "objects",
        //"models": "/objects/models",
        //"collections": "objects/collections",
        //"views": "objects/views"
    },
    'shim': {
        'jqueryui': {
            'deps': ['jquery']
        },
        'jquerymobile': {
            'deps': ['jquery']
        },
        'jqueryform': {
            'deps': ['jquery']
        },
        'jquerysuccint': {
            'deps': ['jquery']
        },
        'underscore': {
            'exports': '_'
        },
        'backbone': {
            'deps': ['jquery', 'underscore'],
            'exports': 'Backbone'
        },
        'marionette': {
            'deps': ['jquery', 'underscore', 'backbone'],
            'exports': 'Backbone.Marionette'
        },
        'handlebars': {
            'exports': 'Handlebars'
        }
    }
});