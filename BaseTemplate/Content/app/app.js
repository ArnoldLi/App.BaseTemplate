define(['angular',
        'ng-deps',
        'router',
        'controller-broker',
        'service-broker',

        'indexController',
   

], function (ng) {
    var app = ng.module('App', ['ngRoute'
                                   , 'app.controllers'
                                   , 'app.services'
                                   , 'app.providers'
    ]);

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
        .when('/', {
            templateUrl: 'Content/app/views/main.html',
            controller: 'indexController'
        })
        
        .otherwise({
            redirecTo: '/'
        })

        ;
    }]);

    return app;
});