require.config({
    baseUrl: 'Content/app',
    paths: {
        'jquery': 'lib/jquery-2.1.4.min',
        'toastr': 'lib/toastr.min',

        'angular': 'angular/angular.min',
        'angular-route': 'angular/angular-route.min',
        'angular-resource': 'angular/angular-resource.min',
        'angular-ui': 'ng-bootstrap/ui-bootstrap-tpls-0.14.2.min',
        'domReady': 'lib/domReady',
        'router': 'providers/router',
        'controller-broker': 'controllers/controller.broker',
        'service-broker': 'services/service.broker',

        'indexController': 'controllers/indexController'


    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-route': {
            deps: ['angular']
        },
        'angular-resource': {
            deps: ['angular']
        },
        'angular-ui': {
            deps: ['angular']
        },
        'jquery': {
            exports: '$'
        },
        'toastr': {
            exports: 'toastr',
            deps: ['jquery']
        },
        'ng-deps': ['angular-route', 'angular-resource', 'angular-ui']
    }
});

define(['require', 'angular', 'app']
      , function (require, ng) {
          require(['domReady!'], function (document) {
              ng.bootstrap(document, ['App']);
          });
      });
