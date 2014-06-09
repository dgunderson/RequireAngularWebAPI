(function () {

    "use strict";

    require.config(
            {
                appDir: '',
                baseUrl: '/App',
                paths:
                {
                    'angular': 'Scripts/_Dependencies/angular',
                    'ngRoute': 'Scripts/_Dependencies/angular-route',
                    'logger' : 'Scripts/Logger'
                },
                shim:
                {
                    'angular':
                        {
                            exports: 'angular'
                        },
                    'ngRoute':
                        {
                            deps: ['angular'],
                            exports: 'ngRoute'
                        }
                }
            });


    require(["Scripts/Main"], function (app) {
        // Application has bootstrapped and started...
    });

})(require);
