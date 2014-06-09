(function (define, console) {
    "use strict";

    define([], function () {

        var prepareLogToConsole = function (consoleLogType, verb) {

            var log = function (message) {
                try
                {
                    console[consoleLogType](message + (verb ? " " + verb : ""));
                }
                catch (e)
                {

                }
            }

            return log;
        }

        var $log = {
            log: prepareLogToConsole("log"),
            info: prepareLogToConsole("info"),
            warn: prepareLogToConsole("warn"),
            error: prepareLogToConsole("error"),
            start: prepareLogToConsole("info", "start"),
            end: prepareLogToConsole("info", "end")
        };

        return $log;
    });
})(define, window.console);