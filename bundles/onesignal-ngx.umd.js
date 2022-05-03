(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('onesignal-ngx', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["onesignal-ngx"] = {}, global.ng.core));
})(this, (function (exports, i0) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                    ar[i] = from[i];
                }
            }
        return to.concat(ar || Array.prototype.slice.call(from));
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    var ONESIGNAL_SDK_ID = 'onesignal-sdk';
    var ONE_SIGNAL_SCRIPT_SRC = 'https://cdn.onesignal.com/sdks/OneSignalSDK.js';
    var ONESIGNAL_NOT_SETUP_ERROR = 'OneSignal is not setup correctly.';
    var MAX_TIMEOUT = 30;
    var OneSignal = /** @class */ (function () {
        function OneSignal() {
            var _this = this;
            this.isOneSignalInitialized = false;
            this.ngOneSignalFunctionQueue = [];
            /* H E L P E R S */
            this.injectScript = function () {
                var script = document.createElement('script');
                script.id = ONESIGNAL_SDK_ID;
                script.src = ONE_SIGNAL_SCRIPT_SRC;
                script.async = true;
                document.head.appendChild(script);
            };
            this.doesOneSignalExist = function () {
                if (window.OneSignal) {
                    return true;
                }
                return false;
            };
            this.processQueuedOneSignalFunctions = function () {
                _this.ngOneSignalFunctionQueue.forEach(function (element) {
                    var _a;
                    var name = element.name, args = element.args, promiseResolver = element.promiseResolver;
                    if (!!promiseResolver) {
                        _this[name].apply(_this, __spread(args)).then(function (result) {
                            promiseResolver(result);
                        });
                    }
                    else {
                        (_a = window.OneSignal)[name].apply(_a, __spread(args));
                    }
                });
            };
            this.setupOneSignalIfMissing = function () {
                if (!_this.doesOneSignalExist()) {
                    window.OneSignal = window.OneSignal || [];
                }
            };
        }
        /* P U B L I C */
        OneSignal.prototype.init = function (options) {
            var _this = this;
            return new Promise(function (resolve) {
                if (_this.isOneSignalInitialized) {
                    return;
                }
                _this.injectScript();
                _this.setupOneSignalIfMissing();
                window.OneSignal.push(function () {
                    window.OneSignal.init(options);
                });
                var timeout = setTimeout(function () {
                    console.error(ONESIGNAL_NOT_SETUP_ERROR);
                }, MAX_TIMEOUT * 1000);
                window.OneSignal.push(function () {
                    clearTimeout(timeout);
                    _this.isOneSignalInitialized = true;
                    _this.processQueuedOneSignalFunctions();
                    resolve();
                });
            });
        };
        OneSignal.prototype.on = function (event, listener) {
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: 'on',
                    args: arguments,
                });
                return;
            }
            window.OneSignal.push(function () {
                window.OneSignal.on(event, listener);
            });
        };
        OneSignal.prototype.off = function (event, listener) {
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: 'off',
                    args: arguments,
                });
                return;
            }
            window.OneSignal.push(function () {
                window.OneSignal.off(event, listener);
            });
        };
        OneSignal.prototype.once = function (event, listener) {
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: 'once',
                    args: arguments,
                });
                return;
            }
            window.OneSignal.push(function () {
                window.OneSignal.once(event, listener);
            });
        };
        OneSignal.prototype.isPushNotificationsEnabled = function (callback) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                if (!_this.doesOneSignalExist()) {
                    _this.ngOneSignalFunctionQueue.push({
                        name: 'isPushNotificationsEnabled',
                        args: arguments,
                        promiseResolver: resolve,
                    });
                    return;
                }
                window.OneSignal.push(function () {
                    window.OneSignal.isPushNotificationsEnabled(callback)
                        .then(function (value) { return resolve(value); })
                        .catch(function (error) { return reject(error); });
                });
            });
        };
        OneSignal.prototype.showHttpPrompt = function (options) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                if (!_this.doesOneSignalExist()) {
                    _this.ngOneSignalFunctionQueue.push({
                        name: 'showHttpPrompt',
                        args: arguments,
                        promiseResolver: resolve,
                    });
                    return;
                }
                window.OneSignal.push(function () {
                    window.OneSignal.showHttpPrompt(options)
                        .then(function (value) { return resolve(value); })
                        .catch(function (error) { return reject(error); });
                });
            });
        };
        OneSignal.prototype.registerForPushNotifications = function (options) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                if (!_this.doesOneSignalExist()) {
                    _this.ngOneSignalFunctionQueue.push({
                        name: 'registerForPushNotifications',
                        args: arguments,
                        promiseResolver: resolve,
                    });
                    return;
                }
                window.OneSignal.push(function () {
                    window.OneSignal.registerForPushNotifications(options)
                        .then(function (value) { return resolve(value); })
                        .catch(function (error) { return reject(error); });
                });
            });
        };
        OneSignal.prototype.setDefaultNotificationUrl = function (url) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                if (!_this.doesOneSignalExist()) {
                    _this.ngOneSignalFunctionQueue.push({
                        name: 'setDefaultNotificationUrl',
                        args: arguments,
                        promiseResolver: resolve,
                    });
                    return;
                }
                window.OneSignal.push(function () {
                    window.OneSignal.setDefaultNotificationUrl(url)
                        .then(function (value) { return resolve(value); })
                        .catch(function (error) { return reject(error); });
                });
            });
        };
        OneSignal.prototype.setDefaultTitle = function (title) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                if (!_this.doesOneSignalExist()) {
                    _this.ngOneSignalFunctionQueue.push({
                        name: 'setDefaultTitle',
                        args: arguments,
                        promiseResolver: resolve,
                    });
                    return;
                }
                window.OneSignal.push(function () {
                    window.OneSignal.setDefaultTitle(title)
                        .then(function (value) { return resolve(value); })
                        .catch(function (error) { return reject(error); });
                });
            });
        };
        OneSignal.prototype.getTags = function (callback) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                if (!_this.doesOneSignalExist()) {
                    _this.ngOneSignalFunctionQueue.push({
                        name: 'getTags',
                        args: arguments,
                        promiseResolver: resolve,
                    });
                    return;
                }
                window.OneSignal.push(function () {
                    window.OneSignal.getTags(callback)
                        .then(function (value) { return resolve(value); })
                        .catch(function (error) { return reject(error); });
                });
            });
        };
        OneSignal.prototype.sendTag = function (key, value, callback) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                if (!_this.doesOneSignalExist()) {
                    _this.ngOneSignalFunctionQueue.push({
                        name: 'sendTag',
                        args: arguments,
                        promiseResolver: resolve,
                    });
                    return;
                }
                window.OneSignal.push(function () {
                    window.OneSignal.sendTag(key, value, callback)
                        .then(function (value) { return resolve(value); })
                        .catch(function (error) { return reject(error); });
                });
            });
        };
        OneSignal.prototype.sendTags = function (tags, callback) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                if (!_this.doesOneSignalExist()) {
                    _this.ngOneSignalFunctionQueue.push({
                        name: 'sendTags',
                        args: arguments,
                        promiseResolver: resolve,
                    });
                    return;
                }
                window.OneSignal.push(function () {
                    window.OneSignal.sendTags(tags, callback)
                        .then(function (value) { return resolve(value); })
                        .catch(function (error) { return reject(error); });
                });
            });
        };
        OneSignal.prototype.deleteTag = function (tag) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                if (!_this.doesOneSignalExist()) {
                    _this.ngOneSignalFunctionQueue.push({
                        name: 'deleteTag',
                        args: arguments,
                        promiseResolver: resolve,
                    });
                    return;
                }
                window.OneSignal.push(function () {
                    window.OneSignal.deleteTag(tag)
                        .then(function (value) { return resolve(value); })
                        .catch(function (error) { return reject(error); });
                });
            });
        };
        OneSignal.prototype.deleteTags = function (tags, callback) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                if (!_this.doesOneSignalExist()) {
                    _this.ngOneSignalFunctionQueue.push({
                        name: 'deleteTags',
                        args: arguments,
                        promiseResolver: resolve,
                    });
                    return;
                }
                window.OneSignal.push(function () {
                    window.OneSignal.deleteTags(tags, callback)
                        .then(function (value) { return resolve(value); })
                        .catch(function (error) { return reject(error); });
                });
            });
        };
        OneSignal.prototype.addListenerForNotificationOpened = function (callback) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                if (!_this.doesOneSignalExist()) {
                    _this.ngOneSignalFunctionQueue.push({
                        name: 'addListenerForNotificationOpened',
                        args: arguments,
                        promiseResolver: resolve,
                    });
                    return;
                }
                window.OneSignal.push(function () {
                    window.OneSignal.addListenerForNotificationOpened(callback)
                        .then(function (value) { return resolve(value); })
                        .catch(function (error) { return reject(error); });
                });
            });
        };
        OneSignal.prototype.setSubscription = function (newSubscription) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                if (!_this.doesOneSignalExist()) {
                    _this.ngOneSignalFunctionQueue.push({
                        name: 'setSubscription',
                        args: arguments,
                        promiseResolver: resolve,
                    });
                    return;
                }
                window.OneSignal.push(function () {
                    window.OneSignal.setSubscription(newSubscription)
                        .then(function (value) { return resolve(value); })
                        .catch(function (error) { return reject(error); });
                });
            });
        };
        OneSignal.prototype.showHttpPermissionRequest = function (options) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                if (!_this.doesOneSignalExist()) {
                    _this.ngOneSignalFunctionQueue.push({
                        name: 'showHttpPermissionRequest',
                        args: arguments,
                        promiseResolver: resolve,
                    });
                    return;
                }
                window.OneSignal.push(function () {
                    window.OneSignal.showHttpPermissionRequest(options)
                        .then(function (value) { return resolve(value); })
                        .catch(function (error) { return reject(error); });
                });
            });
        };
        OneSignal.prototype.showNativePrompt = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                if (!_this.doesOneSignalExist()) {
                    _this.ngOneSignalFunctionQueue.push({
                        name: 'showNativePrompt',
                        args: arguments,
                        promiseResolver: resolve,
                    });
                    return;
                }
                window.OneSignal.push(function () {
                    window.OneSignal.showNativePrompt()
                        .then(function (value) { return resolve(value); })
                        .catch(function (error) { return reject(error); });
                });
            });
        };
        OneSignal.prototype.showSlidedownPrompt = function (options) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                if (!_this.doesOneSignalExist()) {
                    _this.ngOneSignalFunctionQueue.push({
                        name: 'showSlidedownPrompt',
                        args: arguments,
                        promiseResolver: resolve,
                    });
                    return;
                }
                window.OneSignal.push(function () {
                    window.OneSignal.showSlidedownPrompt(options)
                        .then(function (value) { return resolve(value); })
                        .catch(function (error) { return reject(error); });
                });
            });
        };
        OneSignal.prototype.showCategorySlidedown = function (options) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                if (!_this.doesOneSignalExist()) {
                    _this.ngOneSignalFunctionQueue.push({
                        name: 'showCategorySlidedown',
                        args: arguments,
                        promiseResolver: resolve,
                    });
                    return;
                }
                window.OneSignal.push(function () {
                    window.OneSignal.showCategorySlidedown(options)
                        .then(function (value) { return resolve(value); })
                        .catch(function (error) { return reject(error); });
                });
            });
        };
        OneSignal.prototype.showSmsSlidedown = function (options) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                if (!_this.doesOneSignalExist()) {
                    _this.ngOneSignalFunctionQueue.push({
                        name: 'showSmsSlidedown',
                        args: arguments,
                        promiseResolver: resolve,
                    });
                    return;
                }
                window.OneSignal.push(function () {
                    window.OneSignal.showSmsSlidedown(options)
                        .then(function (value) { return resolve(value); })
                        .catch(function (error) { return reject(error); });
                });
            });
        };
        OneSignal.prototype.showEmailSlidedown = function (options) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                if (!_this.doesOneSignalExist()) {
                    _this.ngOneSignalFunctionQueue.push({
                        name: 'showEmailSlidedown',
                        args: arguments,
                        promiseResolver: resolve,
                    });
                    return;
                }
                window.OneSignal.push(function () {
                    window.OneSignal.showEmailSlidedown(options)
                        .then(function (value) { return resolve(value); })
                        .catch(function (error) { return reject(error); });
                });
            });
        };
        OneSignal.prototype.showSmsAndEmailSlidedown = function (options) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                if (!_this.doesOneSignalExist()) {
                    _this.ngOneSignalFunctionQueue.push({
                        name: 'showSmsAndEmailSlidedown',
                        args: arguments,
                        promiseResolver: resolve,
                    });
                    return;
                }
                window.OneSignal.push(function () {
                    window.OneSignal.showSmsAndEmailSlidedown(options)
                        .then(function (value) { return resolve(value); })
                        .catch(function (error) { return reject(error); });
                });
            });
        };
        OneSignal.prototype.getNotificationPermission = function (onComplete) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                if (!_this.doesOneSignalExist()) {
                    _this.ngOneSignalFunctionQueue.push({
                        name: 'getNotificationPermission',
                        args: arguments,
                        promiseResolver: resolve,
                    });
                    return;
                }
                window.OneSignal.push(function () {
                    window.OneSignal.getNotificationPermission(onComplete)
                        .then(function (value) { return resolve(value); })
                        .catch(function (error) { return reject(error); });
                });
            });
        };
        OneSignal.prototype.getUserId = function (callback) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                if (!_this.doesOneSignalExist()) {
                    _this.ngOneSignalFunctionQueue.push({
                        name: 'getUserId',
                        args: arguments,
                        promiseResolver: resolve,
                    });
                    return;
                }
                window.OneSignal.push(function () {
                    window.OneSignal.getUserId(callback)
                        .then(function (value) { return resolve(value); })
                        .catch(function (error) { return reject(error); });
                });
            });
        };
        OneSignal.prototype.getSubscription = function (callback) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                if (!_this.doesOneSignalExist()) {
                    _this.ngOneSignalFunctionQueue.push({
                        name: 'getSubscription',
                        args: arguments,
                        promiseResolver: resolve,
                    });
                    return;
                }
                window.OneSignal.push(function () {
                    window.OneSignal.getSubscription(callback)
                        .then(function (value) { return resolve(value); })
                        .catch(function (error) { return reject(error); });
                });
            });
        };
        OneSignal.prototype.setEmail = function (email, options) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                if (!_this.doesOneSignalExist()) {
                    _this.ngOneSignalFunctionQueue.push({
                        name: 'setEmail',
                        args: arguments,
                        promiseResolver: resolve,
                    });
                    return;
                }
                window.OneSignal.push(function () {
                    window.OneSignal.setEmail(email, options)
                        .then(function (value) { return resolve(value); })
                        .catch(function (error) { return reject(error); });
                });
            });
        };
        OneSignal.prototype.setSMSNumber = function (smsNumber, options) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                if (!_this.doesOneSignalExist()) {
                    _this.ngOneSignalFunctionQueue.push({
                        name: 'setSMSNumber',
                        args: arguments,
                        promiseResolver: resolve,
                    });
                    return;
                }
                window.OneSignal.push(function () {
                    window.OneSignal.setSMSNumber(smsNumber, options)
                        .then(function (value) { return resolve(value); })
                        .catch(function (error) { return reject(error); });
                });
            });
        };
        OneSignal.prototype.logoutEmail = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                if (!_this.doesOneSignalExist()) {
                    _this.ngOneSignalFunctionQueue.push({
                        name: 'logoutEmail',
                        args: arguments,
                        promiseResolver: resolve,
                    });
                    return;
                }
                window.OneSignal.push(function () {
                    window.OneSignal.logoutEmail()
                        .then(function (value) { return resolve(value); })
                        .catch(function (error) { return reject(error); });
                });
            });
        };
        OneSignal.prototype.logoutSMS = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                if (!_this.doesOneSignalExist()) {
                    _this.ngOneSignalFunctionQueue.push({
                        name: 'logoutSMS',
                        args: arguments,
                        promiseResolver: resolve,
                    });
                    return;
                }
                window.OneSignal.push(function () {
                    window.OneSignal.logoutSMS()
                        .then(function (value) { return resolve(value); })
                        .catch(function (error) { return reject(error); });
                });
            });
        };
        OneSignal.prototype.setExternalUserId = function (externalUserId, authHash) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                if (!_this.doesOneSignalExist()) {
                    _this.ngOneSignalFunctionQueue.push({
                        name: 'setExternalUserId',
                        args: arguments,
                        promiseResolver: resolve,
                    });
                    return;
                }
                window.OneSignal.push(function () {
                    window.OneSignal.setExternalUserId(externalUserId, authHash)
                        .then(function (value) { return resolve(value); })
                        .catch(function (error) { return reject(error); });
                });
            });
        };
        OneSignal.prototype.removeExternalUserId = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                if (!_this.doesOneSignalExist()) {
                    _this.ngOneSignalFunctionQueue.push({
                        name: 'removeExternalUserId',
                        args: arguments,
                        promiseResolver: resolve,
                    });
                    return;
                }
                window.OneSignal.push(function () {
                    window.OneSignal.removeExternalUserId()
                        .then(function (value) { return resolve(value); })
                        .catch(function (error) { return reject(error); });
                });
            });
        };
        OneSignal.prototype.getExternalUserId = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                if (!_this.doesOneSignalExist()) {
                    _this.ngOneSignalFunctionQueue.push({
                        name: 'getExternalUserId',
                        args: arguments,
                        promiseResolver: resolve,
                    });
                    return;
                }
                window.OneSignal.push(function () {
                    window.OneSignal.getExternalUserId()
                        .then(function (value) { return resolve(value); })
                        .catch(function (error) { return reject(error); });
                });
            });
        };
        OneSignal.prototype.provideUserConsent = function (consent) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                if (!_this.doesOneSignalExist()) {
                    _this.ngOneSignalFunctionQueue.push({
                        name: 'provideUserConsent',
                        args: arguments,
                        promiseResolver: resolve,
                    });
                    return;
                }
                window.OneSignal.push(function () {
                    window.OneSignal.provideUserConsent(consent)
                        .then(function (value) { return resolve(value); })
                        .catch(function (error) { return reject(error); });
                });
            });
        };
        OneSignal.prototype.getEmailId = function (callback) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                if (!_this.doesOneSignalExist()) {
                    _this.ngOneSignalFunctionQueue.push({
                        name: 'getEmailId',
                        args: arguments,
                        promiseResolver: resolve,
                    });
                    return;
                }
                window.OneSignal.push(function () {
                    window.OneSignal.getEmailId(callback)
                        .then(function (value) { return resolve(value); })
                        .catch(function (error) { return reject(error); });
                });
            });
        };
        OneSignal.prototype.getSMSId = function (callback) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                if (!_this.doesOneSignalExist()) {
                    _this.ngOneSignalFunctionQueue.push({
                        name: 'getSMSId',
                        args: arguments,
                        promiseResolver: resolve,
                    });
                    return;
                }
                window.OneSignal.push(function () {
                    window.OneSignal.getSMSId(callback)
                        .then(function (value) { return resolve(value); })
                        .catch(function (error) { return reject(error); });
                });
            });
        };
        OneSignal.prototype.sendOutcome = function (outcomeName, outcomeWeight) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                if (!_this.doesOneSignalExist()) {
                    _this.ngOneSignalFunctionQueue.push({
                        name: 'sendOutcome',
                        args: arguments,
                        promiseResolver: resolve,
                    });
                    return;
                }
                window.OneSignal.push(function () {
                    window.OneSignal.sendOutcome(outcomeName, outcomeWeight)
                        .then(function (value) { return resolve(value); })
                        .catch(function (error) { return reject(error); });
                });
            });
        };
        return OneSignal;
    }());
    OneSignal.ɵprov = i0__namespace.ɵɵdefineInjectable({ factory: function OneSignal_Factory() { return new OneSignal(); }, token: OneSignal, providedIn: "root" });
    OneSignal.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    OneSignal.ctorParameters = function () { return []; };

    var OnesignalNgxComponent = /** @class */ (function () {
        function OnesignalNgxComponent() {
        }
        OnesignalNgxComponent.prototype.ngOnInit = function () {
        };
        return OnesignalNgxComponent;
    }());
    OnesignalNgxComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'onesignal-onesignal-ngx',
                    template: "\n    <p>\n      onesignal-ngx works!\n    </p>\n  "
                },] }
    ];
    OnesignalNgxComponent.ctorParameters = function () { return []; };

    var OnesignalNgxModule = /** @class */ (function () {
        function OnesignalNgxModule() {
        }
        return OnesignalNgxModule;
    }());
    OnesignalNgxModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [OnesignalNgxComponent],
                    imports: [],
                    exports: [OnesignalNgxComponent]
                },] }
    ];

    /*
     * Public API Surface of onesignal-ngx
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.OneSignal = OneSignal;
    exports.OnesignalNgxComponent = OnesignalNgxComponent;
    exports.OnesignalNgxModule = OnesignalNgxModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=onesignal-ngx.umd.js.map
