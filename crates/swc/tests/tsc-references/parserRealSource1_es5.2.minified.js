var TypeScript;
import * as swcHelpers from "@swc/helpers";
!function(TypeScript1) {
    !function(CompilerDiagnostics) {
        var debug = CompilerDiagnostics.debug = !1, diagnosticWriter = CompilerDiagnostics.diagnosticWriter = null;
        function Alert(output) {
            diagnosticWriter && diagnosticWriter.Alert(output);
        }
        CompilerDiagnostics.analysisPass = 0, CompilerDiagnostics.Alert = Alert, CompilerDiagnostics.debugPrint = function(s) {
            debug && Alert(s);
        }, CompilerDiagnostics.assert = function(condition, s) {
            debug && (condition || Alert(s));
        };
    }(TypeScript1.CompilerDiagnostics || (TypeScript1.CompilerDiagnostics = {}));
    var NullLogger = function() {
        "use strict";
        function NullLogger() {
            swcHelpers.classCallCheck(this, NullLogger);
        }
        return swcHelpers.createClass(NullLogger, [
            {
                key: "information",
                value: function() {
                    return !1;
                }
            },
            {
                key: "debug",
                value: function() {
                    return !1;
                }
            },
            {
                key: "warning",
                value: function() {
                    return !1;
                }
            },
            {
                key: "error",
                value: function() {
                    return !1;
                }
            },
            {
                key: "fatal",
                value: function() {
                    return !1;
                }
            },
            {
                key: "log",
                value: function(s) {}
            }
        ]), NullLogger;
    }();
    TypeScript1.NullLogger = NullLogger;
    var LoggerAdapter = function() {
        "use strict";
        function LoggerAdapter(logger) {
            swcHelpers.classCallCheck(this, LoggerAdapter), this.logger = logger, this._information = this.logger.information(), this._debug = this.logger.debug(), this._warning = this.logger.warning(), this._error = this.logger.error(), this._fatal = this.logger.fatal();
        }
        return swcHelpers.createClass(LoggerAdapter, [
            {
                key: "information",
                value: function() {
                    return this._information;
                }
            },
            {
                key: "debug",
                value: function() {
                    return this._debug;
                }
            },
            {
                key: "warning",
                value: function() {
                    return this._warning;
                }
            },
            {
                key: "error",
                value: function() {
                    return this._error;
                }
            },
            {
                key: "fatal",
                value: function() {
                    return this._fatal;
                }
            },
            {
                key: "log",
                value: function(s) {
                    this.logger.log(s);
                }
            }
        ]), LoggerAdapter;
    }();
    TypeScript1.LoggerAdapter = LoggerAdapter;
    var BufferedLogger = function() {
        "use strict";
        function BufferedLogger() {
            swcHelpers.classCallCheck(this, BufferedLogger), this.logContents = [];
        }
        return swcHelpers.createClass(BufferedLogger, [
            {
                key: "information",
                value: function() {
                    return !1;
                }
            },
            {
                key: "debug",
                value: function() {
                    return !1;
                }
            },
            {
                key: "warning",
                value: function() {
                    return !1;
                }
            },
            {
                key: "error",
                value: function() {
                    return !1;
                }
            },
            {
                key: "fatal",
                value: function() {
                    return !1;
                }
            },
            {
                key: "log",
                value: function(s) {
                    this.logContents.push(s);
                }
            }
        ]), BufferedLogger;
    }();
    TypeScript1.BufferedLogger = BufferedLogger, TypeScript1.timeFunction = function(logger, funcDescription, func) {
        var start = +new Date(), result = func(), end = +new Date();
        return logger.log(funcDescription + " completed in " + (end - start) + " msec"), result;
    }, TypeScript1.stringToLiteral = function(value, length) {
        var result = "", addChar = function(index) {
            var ch = value.charCodeAt(index);
            switch(ch){
                case 9:
                    result += "\\t";
                    break;
                case 10:
                    result += "\\n";
                    break;
                case 11:
                    result += "\\v";
                    break;
                case 12:
                    result += "\\f";
                    break;
                case 13:
                    result += "\\r";
                    break;
                case 34:
                    result += "\\\"";
                    break;
                case 39:
                    result += "\\'";
                    break;
                case 92:
                    result += "\\";
                    break;
                default:
                    result += value.charAt(index);
            }
        };
        if (value.length > length) {
            for(var mid = length >> 1, i = 0; i < mid; i++)addChar(i);
            result += "(...)";
            for(var i = value.length - mid; i < value.length; i++)addChar(i);
        } else {
            length = value.length;
            for(var i = 0; i < length; i++)addChar(i);
        }
        return result;
    };
}(TypeScript || (TypeScript = {}));
