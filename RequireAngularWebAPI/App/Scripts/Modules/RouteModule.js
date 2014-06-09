(function (define) {

    "use strict";

    define([
            "logger",
            "ngRoute",
            "Scripts/Controllers/HomeController"
        ],
        function (logger, HomeController) {

            logger.start("RouteModule");

            var RouteManager = function ($routeProvider) {

                logger.info("RouteManager executed");

                $routeProvider
                    .when("/home", {
                        templateUrl: "/App/Partials/Home.html",
                        controller: "HomeController"
                    })
                    .otherwise({
                        redirectTo: "/home",
                    });
            };

            logger.end("RouteModule");

            return ["$routeProvider", RouteManager];
        });

})(define);