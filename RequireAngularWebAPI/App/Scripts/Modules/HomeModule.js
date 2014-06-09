(function (define) {

    "use strict";

    define([
        "logger",
        "angular",
        "Scripts/Controllers/HomeController"
    ], function (logger, angular, HomeController) {
        
        logger.start("HomeModule");

        var moduleName = "TestApp.Home";

        angular.module(moduleName, [])
            .controller("HomeController", HomeController);

        logger.end("HomeModule");

        return moduleName;
    });

})(define);