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

    function oneSignalLogin(externalId, jwtToken) {
        return new Promise(function (resolve, reject) {
            var _a;
            if (isOneSignalScriptFailed) {
                reject(new Error('OneSignal script failed to load.'));
                return;
            }
            (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push(function (oneSignal) {
                oneSignal.login(externalId, jwtToken)
                    .then(function () { return resolve(); })
                    .catch(function (error) { return reject(error); });
            });
        });
    }
    function oneSignalLogout() {
        return new Promise(function (resolve, reject) {
            var _a;
            if (isOneSignalScriptFailed) {
                reject(new Error('OneSignal script failed to load.'));
                return;
            }
            (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push(function (oneSignal) {
                oneSignal.logout()
                    .then(function () { return resolve(); })
                    .catch(function (error) { return reject(error); });
            });
        });
    }
    function oneSignalSetConsentGiven(consent) {
        return new Promise(function (resolve, reject) {
            var _a;
            if (isOneSignalScriptFailed) {
                reject(new Error('OneSignal script failed to load.'));
                return;
            }
            (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push(function (oneSignal) {
                oneSignal.setConsentGiven(consent)
                    .then(function () { return resolve(); })
                    .catch(function (error) { return reject(error); });
            });
        });
    }
    function oneSignalSetConsentRequired(requiresConsent) {
        return new Promise(function (resolve, reject) {
            var _a;
            if (isOneSignalScriptFailed) {
                reject(new Error('OneSignal script failed to load.'));
                return;
            }
            (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push(function (oneSignal) {
                oneSignal.setConsentRequired(requiresConsent)
                    .then(function () { return resolve(); })
                    .catch(function (error) { return reject(error); });
            });
        });
    }
    function slidedownPromptPush(options) {
        return new Promise(function (resolve, reject) {
            var _a;
            if (isOneSignalScriptFailed) {
                reject(new Error('OneSignal script failed to load.'));
                return;
            }
            (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push(function (oneSignal) {
                oneSignal.Slidedown.promptPush(options)
                    .then(function () { return resolve(); })
                    .catch(function (error) { return reject(error); });
            });
        });
    }
    function slidedownPromptPushCategories(options) {
        return new Promise(function (resolve, reject) {
            var _a;
            if (isOneSignalScriptFailed) {
                reject(new Error('OneSignal script failed to load.'));
                return;
            }
            (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push(function (oneSignal) {
                oneSignal.Slidedown.promptPushCategories(options)
                    .then(function () { return resolve(); })
                    .catch(function (error) { return reject(error); });
            });
        });
    }
    function slidedownPromptSms(options) {
        return new Promise(function (resolve, reject) {
            var _a;
            if (isOneSignalScriptFailed) {
                reject(new Error('OneSignal script failed to load.'));
                return;
            }
            (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push(function (oneSignal) {
                oneSignal.Slidedown.promptSms(options)
                    .then(function () { return resolve(); })
                    .catch(function (error) { return reject(error); });
            });
        });
    }
    function slidedownPromptEmail(options) {
        return new Promise(function (resolve, reject) {
            var _a;
            if (isOneSignalScriptFailed) {
                reject(new Error('OneSignal script failed to load.'));
                return;
            }
            (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push(function (oneSignal) {
                oneSignal.Slidedown.promptEmail(options)
                    .then(function () { return resolve(); })
                    .catch(function (error) { return reject(error); });
            });
        });
    }
    function slidedownPromptSmsAndEmail(options) {
        return new Promise(function (resolve, reject) {
            var _a;
            if (isOneSignalScriptFailed) {
                reject(new Error('OneSignal script failed to load.'));
                return;
            }
            (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push(function (oneSignal) {
                oneSignal.Slidedown.promptSmsAndEmail(options)
                    .then(function () { return resolve(); })
                    .catch(function (error) { return reject(error); });
            });
        });
    }
    function slidedownAddEventListener(event, listener) {
        var _a;
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push(function (oneSignal) {
            oneSignal.Slidedown.addEventListener(event, listener);
        });
    }
    function slidedownRemoveEventListener(event, listener) {
        var _a;
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push(function (oneSignal) {
            oneSignal.Slidedown.removeEventListener(event, listener);
        });
    }
    function notificationsSetDefaultUrl(url) {
        return new Promise(function (resolve, reject) {
            var _a;
            if (isOneSignalScriptFailed) {
                reject(new Error('OneSignal script failed to load.'));
                return;
            }
            (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push(function (oneSignal) {
                oneSignal.Notifications.setDefaultUrl(url)
                    .then(function () { return resolve(); })
                    .catch(function (error) { return reject(error); });
            });
        });
    }
    function notificationsSetDefaultTitle(title) {
        return new Promise(function (resolve, reject) {
            var _a;
            if (isOneSignalScriptFailed) {
                reject(new Error('OneSignal script failed to load.'));
                return;
            }
            (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push(function (oneSignal) {
                oneSignal.Notifications.setDefaultTitle(title)
                    .then(function () { return resolve(); })
                    .catch(function (error) { return reject(error); });
            });
        });
    }
    function notificationsRequestPermission() {
        return new Promise(function (resolve, reject) {
            var _a;
            if (isOneSignalScriptFailed) {
                reject(new Error('OneSignal script failed to load.'));
                return;
            }
            (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push(function (oneSignal) {
                oneSignal.Notifications.requestPermission()
                    .then(function (result) { return resolve(result); })
                    .catch(function (error) { return reject(error); });
            });
        });
    }
    function notificationsAddEventListener(event, listener) {
        var _a;
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push(function (oneSignal) {
            oneSignal.Notifications.addEventListener(event, listener);
        });
    }
    function notificationsRemoveEventListener(event, listener) {
        var _a;
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push(function (oneSignal) {
            oneSignal.Notifications.removeEventListener(event, listener);
        });
    }
    function sessionSendOutcome(outcomeName, outcomeWeight) {
        return new Promise(function (resolve, reject) {
            var _a;
            if (isOneSignalScriptFailed) {
                reject(new Error('OneSignal script failed to load.'));
                return;
            }
            (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push(function (oneSignal) {
                oneSignal.Session.sendOutcome(outcomeName, outcomeWeight)
                    .then(function () { return resolve(); })
                    .catch(function (error) { return reject(error); });
            });
        });
    }
    function sessionSendUniqueOutcome(outcomeName) {
        return new Promise(function (resolve, reject) {
            var _a;
            if (isOneSignalScriptFailed) {
                reject(new Error('OneSignal script failed to load.'));
                return;
            }
            (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push(function (oneSignal) {
                oneSignal.Session.sendUniqueOutcome(outcomeName)
                    .then(function () { return resolve(); })
                    .catch(function (error) { return reject(error); });
            });
        });
    }
    function userAddAlias(label, id) {
        var _a;
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push(function (oneSignal) {
            oneSignal.User.addAlias(label, id);
        });
    }
    function userAddAliases(aliases) {
        var _a;
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push(function (oneSignal) {
            oneSignal.User.addAliases(aliases);
        });
    }
    function userRemoveAlias(label) {
        var _a;
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push(function (oneSignal) {
            oneSignal.User.removeAlias(label);
        });
    }
    function userRemoveAliases(labels) {
        var _a;
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push(function (oneSignal) {
            oneSignal.User.removeAliases(labels);
        });
    }
    function userAddEmail(email) {
        var _a;
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push(function (oneSignal) {
            oneSignal.User.addEmail(email);
        });
    }
    function userRemoveEmail(email) {
        var _a;
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push(function (oneSignal) {
            oneSignal.User.removeEmail(email);
        });
    }
    function userAddSms(smsNumber) {
        var _a;
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push(function (oneSignal) {
            oneSignal.User.addSms(smsNumber);
        });
    }
    function userRemoveSms(smsNumber) {
        var _a;
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push(function (oneSignal) {
            oneSignal.User.removeSms(smsNumber);
        });
    }
    function userAddTag(key, value) {
        var _a;
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push(function (oneSignal) {
            oneSignal.User.addTag(key, value);
        });
    }
    function userAddTags(tags) {
        var _a;
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push(function (oneSignal) {
            oneSignal.User.addTags(tags);
        });
    }
    function userRemoveTag(key) {
        var _a;
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push(function (oneSignal) {
            oneSignal.User.removeTag(key);
        });
    }
    function userRemoveTags(keys) {
        var _a;
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push(function (oneSignal) {
            oneSignal.User.removeTags(keys);
        });
    }
    // @ts-expect-error - return non-Promise type despite needing to await OneSignalDeferred
    function userGetTags() {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var retVal;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, ((_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push(function (oneSignal) {
                            retVal = oneSignal.User.getTags();
                        }))];
                    case 1:
                        _d.sent();
                        // @ts-ignore
                        return [2 /*return*/, retVal];
                }
            });
        });
    }
    function userAddEventListener(event, listener) {
        var _a;
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push(function (oneSignal) {
            oneSignal.User.addEventListener(event, listener);
        });
    }
    function userRemoveEventListener(event, listener) {
        var _a;
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push(function (oneSignal) {
            oneSignal.User.removeEventListener(event, listener);
        });
    }
    function userSetLanguage(language) {
        var _a;
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push(function (oneSignal) {
            oneSignal.User.setLanguage(language);
        });
    }
    // @ts-expect-error - return non-Promise type despite needing to await OneSignalDeferred
    function userGetLanguage() {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var retVal;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, ((_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push(function (oneSignal) {
                            retVal = oneSignal.User.getLanguage();
                        }))];
                    case 1:
                        _d.sent();
                        // @ts-ignore
                        return [2 /*return*/, retVal];
                }
            });
        });
    }
    function userTrackEvent(name, properties) {
        var _a;
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push(function (oneSignal) {
            oneSignal.User.trackEvent(name, properties);
        });
    }
    function pushSubscriptionOptIn() {
        return new Promise(function (resolve, reject) {
            var _a;
            if (isOneSignalScriptFailed) {
                reject(new Error('OneSignal script failed to load.'));
                return;
            }
            (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push(function (oneSignal) {
                oneSignal.User.PushSubscription.optIn()
                    .then(function () { return resolve(); })
                    .catch(function (error) { return reject(error); });
            });
        });
    }
    function pushSubscriptionOptOut() {
        return new Promise(function (resolve, reject) {
            var _a;
            if (isOneSignalScriptFailed) {
                reject(new Error('OneSignal script failed to load.'));
                return;
            }
            (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push(function (oneSignal) {
                oneSignal.User.PushSubscription.optOut()
                    .then(function () { return resolve(); })
                    .catch(function (error) { return reject(error); });
            });
        });
    }
    function pushSubscriptionAddEventListener(event, listener) {
        var _a;
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push(function (oneSignal) {
            oneSignal.User.PushSubscription.addEventListener(event, listener);
        });
    }
    function pushSubscriptionRemoveEventListener(event, listener) {
        var _a;
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push(function (oneSignal) {
            oneSignal.User.PushSubscription.removeEventListener(event, listener);
        });
    }
    function debugSetLogLevel(logLevel) {
        var _a;
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push(function (oneSignal) {
            oneSignal.Debug.setLogLevel(logLevel);
        });
    }
    var PushSubscriptionNamespace = {
        get id() { var _a, _b, _c; return (_c = (_b = (_a = window.OneSignal) === null || _a === void 0 ? void 0 : _a.User) === null || _b === void 0 ? void 0 : _b.PushSubscription) === null || _c === void 0 ? void 0 : _c.id; },
        get token() { var _a, _b, _c; return (_c = (_b = (_a = window.OneSignal) === null || _a === void 0 ? void 0 : _a.User) === null || _b === void 0 ? void 0 : _b.PushSubscription) === null || _c === void 0 ? void 0 : _c.token; },
        get optedIn() { var _a, _b, _c; return (_c = (_b = (_a = window.OneSignal) === null || _a === void 0 ? void 0 : _a.User) === null || _b === void 0 ? void 0 : _b.PushSubscription) === null || _c === void 0 ? void 0 : _c.optedIn; },
        optIn: pushSubscriptionOptIn,
        optOut: pushSubscriptionOptOut,
        addEventListener: pushSubscriptionAddEventListener,
        removeEventListener: pushSubscriptionRemoveEventListener,
    };
    var UserNamespace = {
        get onesignalId() { var _a, _b; return (_b = (_a = window.OneSignal) === null || _a === void 0 ? void 0 : _a.User) === null || _b === void 0 ? void 0 : _b.onesignalId; },
        get externalId() { var _a, _b; return (_b = (_a = window.OneSignal) === null || _a === void 0 ? void 0 : _a.User) === null || _b === void 0 ? void 0 : _b.externalId; },
        addAlias: userAddAlias,
        addAliases: userAddAliases,
        removeAlias: userRemoveAlias,
        removeAliases: userRemoveAliases,
        addEmail: userAddEmail,
        removeEmail: userRemoveEmail,
        addSms: userAddSms,
        removeSms: userRemoveSms,
        addTag: userAddTag,
        addTags: userAddTags,
        removeTag: userRemoveTag,
        removeTags: userRemoveTags,
        getTags: userGetTags,
        addEventListener: userAddEventListener,
        removeEventListener: userRemoveEventListener,
        setLanguage: userSetLanguage,
        getLanguage: userGetLanguage,
        trackEvent: userTrackEvent,
        PushSubscription: PushSubscriptionNamespace,
    };
    var SessionNamespace = {
        sendOutcome: sessionSendOutcome,
        sendUniqueOutcome: sessionSendUniqueOutcome,
    };
    var DebugNamespace = {
        setLogLevel: debugSetLogLevel,
    };
    var SlidedownNamespace = {
        promptPush: slidedownPromptPush,
        promptPushCategories: slidedownPromptPushCategories,
        promptSms: slidedownPromptSms,
        promptEmail: slidedownPromptEmail,
        promptSmsAndEmail: slidedownPromptSmsAndEmail,
        addEventListener: slidedownAddEventListener,
        removeEventListener: slidedownRemoveEventListener,
    };
    var NotificationsNamespace = {
        get permissionNative() { var _a, _b, _c; return (_c = (_b = (_a = window.OneSignal) === null || _a === void 0 ? void 0 : _a.Notifications) === null || _b === void 0 ? void 0 : _b.permissionNative) !== null && _c !== void 0 ? _c : 'default'; },
        get permission() { var _a, _b, _c; return (_c = (_b = (_a = window.OneSignal) === null || _a === void 0 ? void 0 : _a.Notifications) === null || _b === void 0 ? void 0 : _b.permission) !== null && _c !== void 0 ? _c : false; },
        setDefaultUrl: notificationsSetDefaultUrl,
        setDefaultTitle: notificationsSetDefaultTitle,
        isPushSupported: isPushSupported,
        requestPermission: notificationsRequestPermission,
        addEventListener: notificationsAddEventListener,
        removeEventListener: notificationsRemoveEventListener,
    };
    /**
     * @PublicApi
     */
    function isPushSupported() {
        return isPushNotificationsSupported();
    }
    var ONESIGNAL_SDK_ID = 'onesignal-sdk';
    var ONE_SIGNAL_SCRIPT_SRC = 'https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js';
    // true if the script is successfully loaded from CDN.
    var isOneSignalInitialized = false;
    // true if the script fails to load from CDN. A separate flag is necessary
    // to disambiguate between a CDN load failure and a delayed call to
    // OneSignal#init.
    var isOneSignalScriptFailed = false;
    if (typeof window !== 'undefined') {
        window.OneSignalDeferred = window.OneSignalDeferred || [];
        addSDKScript();
    }
    /**
     * The following code is copied directly from the native SDK source file BrowserSupportsPush.ts
     * S T A R T
     */
    // Checks if the browser supports push notifications by checking if specific
    //   classes and properties on them exist
    function isPushNotificationsSupported() {
        return supportsVapidPush() || supportsSafariPush();
    }
    function isMacOSSafariInIframe() {
        // Fallback detection for Safari on macOS in an iframe context
        return (window.top !== window && // isContextIframe
            navigator.vendor === 'Apple Computer, Inc.' && // isSafari
            navigator.platform === 'MacIntel'); // isMacOS
    }
    function supportsSafariPush() {
        return ((window.safari && typeof window.safari.pushNotification !== 'undefined') ||
            isMacOSSafariInIframe());
    }
    // Does the browser support the standard Push API
    function supportsVapidPush() {
        return (typeof PushSubscriptionOptions !== 'undefined' &&
            PushSubscriptionOptions.prototype.hasOwnProperty('applicationServerKey'));
    }
    /* E N D */
    function handleOnError() {
        isOneSignalScriptFailed = true;
    }
    function addSDKScript() {
        var script = document.createElement('script');
        script.id = ONESIGNAL_SDK_ID;
        script.defer = true;
        script.src = ONE_SIGNAL_SCRIPT_SRC;
        // Always resolve whether or not the script is successfully initialized.
        // This is important for users who may block cdn.onesignal.com w/ adblock.
        script.onerror = function () {
            handleOnError();
        };
        document.head.appendChild(script);
    }
    var OneSignal = /** @class */ (function () {
        function OneSignal() {
            this.User = UserNamespace;
            this.Session = SessionNamespace;
            this.Debug = DebugNamespace;
            this.Slidedown = SlidedownNamespace;
            this.Notifications = NotificationsNamespace;
            this.login = oneSignalLogin;
            this.logout = oneSignalLogout;
            this.setConsentGiven = oneSignalSetConsentGiven;
            this.setConsentRequired = oneSignalSetConsentRequired;
        }
        /* P U B L I C */
        /**
         * @PublicApi
         */
        OneSignal.prototype.init = function (options) {
            var _a;
            if (isOneSignalInitialized) {
                return Promise.reject("OneSignal is already initialized.");
            }
            if (!options || !options.appId) {
                return Promise.reject('You need to provide your OneSignal appId.');
            }
            if (!document) {
                return Promise.reject("Document is not defined.");
            }
            // Handle both disabled and disable keys for welcome notification
            if (((_a = options.welcomeNotification) === null || _a === void 0 ? void 0 : _a.disabled) !== undefined) {
                options.welcomeNotification.disable = options.welcomeNotification.disabled;
            }
            return new Promise(function (resolve, reject) {
                var _a;
                (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push(function (oneSignal) {
                    oneSignal
                        .init(options)
                        .then(function () {
                        isOneSignalInitialized = true;
                        resolve();
                    })
                        .catch(reject);
                });
            });
        };
        return OneSignal;
    }());
    OneSignal.ɵprov = i0__namespace.ɵɵdefineInjectable({ factory: function OneSignal_Factory() { return new OneSignal(); }, token: OneSignal, providedIn: "root" });
    OneSignal.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
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
