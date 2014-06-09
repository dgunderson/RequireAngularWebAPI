(function (define) {
    "use strict";

    define([
            "angular",
            "Scripts/Modules/RouteModule",
            "Scripts/Modules/HomeModule",
            "logger",
        ],
        function (angular, RouteManager, HomeModule, logger) {
            
            logger.start("Main");

            var appName = "TestApp";

            var app = angular.module(appName, ["ngRoute", HomeModule]).config(RouteManager);

            logger.info("execute angular bootstrap");

            angular.bootstrap(document.getElementsByTagName("body")[0], [appName]);

            logger.end("Main");

            return app;
        });
})(define);