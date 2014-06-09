(function (define) {
    "use strict";
    
    define(["logger"], function (logger) {
        
        logger.start("HomeController");

        var HomeController = function () {
            var vm = this;

            vm.WelcomeMessage = "Hello World!";
        };

        return [HomeController];
    })
})(define);