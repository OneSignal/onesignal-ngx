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

    function oneSignalLogin(externalId, jwtToken) {
        return new Promise(function (resolve, reject) {
            var _a;
            if (isOneSignalScriptFailed) {
                reject();
            }
            (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push(function (oneSignal) {
                oneSignal.login(externalId, jwtToken)
                    .then(function (value) { return resolve(value); })
                    .catch(function (error) { return reject(error); });
            });
        });
    }
    function oneSignalLogout() {
        return new Promise(function (resolve, reject) {
            var _a;
            if (isOneSignalScriptFailed) {
                reject();
            }
            (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push(function (oneSignal) {
                oneSignal.logout()
                    .then(function (value) { return resolve(value); })
                    .catch(function (error) { return reject(error); });
            });
        });
    }
    function oneSignalSetConsentGiven(consent) {
        return new Promise(function (resolve, reject) {
            var _a;
            if (isOneSignalScriptFailed) {
                reject();
            }
            (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push(function (oneSignal) {
                oneSignal.setConsentGiven(consent)
                    .then(function (value) { return resolve(value); })
                    .catch(function (error) { return reject(error); });
            });
        });
    }
    function oneSignalSetConsentRequired(requiresConsent) {
        return new Promise(function (resolve, reject) {
            var _a;
            if (isOneSignalScriptFailed) {
                reject();
            }
            (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push(function (oneSignal) {
                oneSignal.setConsentRequired(requiresConsent)
                    .then(function (value) { return resolve(value); })
                    .catch(function (error) { return reject(error); });
            });
        });
    }
    function slidedownPromptPush(options) {
        return new Promise(function (resolve, reject) {
            var _a;
            if (isOneSignalScriptFailed) {
                reject();
            }
            (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push(function (oneSignal) {
                oneSignal.Slidedown.promptPush(options)
                    .then(function (value) { return resolve(value); })
                    .catch(function (error) { return reject(error); });
            });
        });
    }
    function slidedownPromptPushCategories(options) {
        return new Promise(function (resolve, reject) {
            var _a;
            if (isOneSignalScriptFailed) {
                reject();
            }
            (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push(function (oneSignal) {
                oneSignal.Slidedown.promptPushCategories(options)
                    .then(function (value) { return resolve(value); })
                    .catch(function (error) { return reject(error); });
            });
        });
    }
    function slidedownPromptSms(options) {
        return new Promise(function (resolve, reject) {
            var _a;
            if (isOneSignalScriptFailed) {
                reject();
            }
            (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push(function (oneSignal) {
                oneSignal.Slidedown.promptSms(options)
                    .then(function (value) { return resolve(value); })
                    .catch(function (error) { return reject(error); });
            });
        });
    }
    function slidedownPromptEmail(options) {
        return new Promise(function (resolve, reject) {
            var _a;
            if (isOneSignalScriptFailed) {
                reject();
            }
            (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push(function (oneSignal) {
                oneSignal.Slidedown.promptEmail(options)
                    .then(function (value) { return resolve(value); })
                    .catch(function (error) { return reject(error); });
            });
        });
    }
    function slidedownPromptSmsAndEmail(options) {
        return new Promise(function (resolve, reject) {
            var _a;
            if (isOneSignalScriptFailed) {
                reject();
            }
            (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push(function (oneSignal) {
                oneSignal.Slidedown.promptSmsAndEmail(options)
                    .then(function (value) { return resolve(value); })
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
                reject();
            }
            (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push(function (oneSignal) {
                oneSignal.Notifications.setDefaultUrl(url)
                    .then(function (value) { return resolve(value); })
                    .catch(function (error) { return reject(error); });
            });
        });
    }
    function notificationsSetDefaultTitle(title) {
        return new Promise(function (resolve, reject) {
            var _a;
            if (isOneSignalScriptFailed) {
                reject();
            }
            (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push(function (oneSignal) {
                oneSignal.Notifications.setDefaultTitle(title)
                    .then(function (value) { return resolve(value); })
                    .catch(function (error) { return reject(error); });
            });
        });
    }
    function notificationsGetPermissionStatus(onComplete) {
        return new Promise(function (resolve, reject) {
            var _a;
            if (isOneSignalScriptFailed) {
                reject();
            }
            (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push(function (oneSignal) {
                oneSignal.Notifications.getPermissionStatus(onComplete)
                    .then(function (value) { return resolve(value); })
                    .catch(function (error) { return reject(error); });
            });
        });
    }
    function notificationsRequestPermission() {
        return new Promise(function (resolve, reject) {
            var _a;
            if (isOneSignalScriptFailed) {
                reject();
            }
            (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push(function (oneSignal) {
                oneSignal.Notifications.requestPermission()
                    .then(function (value) { return resolve(value); })
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
                reject();
            }
            (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push(function (oneSignal) {
                oneSignal.Session.sendOutcome(outcomeName, outcomeWeight)
                    .then(function (value) { return resolve(value); })
                    .catch(function (error) { return reject(error); });
            });
        });
    }
    function sessionSendUniqueOutcome(outcomeName) {
        return new Promise(function (resolve, reject) {
            var _a;
            if (isOneSignalScriptFailed) {
                reject();
            }
            (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push(function (oneSignal) {
                oneSignal.Session.sendUniqueOutcome(outcomeName)
                    .then(function (value) { return resolve(value); })
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
    function pushSubscriptionOptIn() {
        return new Promise(function (resolve, reject) {
            var _a;
            if (isOneSignalScriptFailed) {
                reject();
            }
            (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push(function (oneSignal) {
                oneSignal.User.PushSubscription.optIn()
                    .then(function (value) { return resolve(value); })
                    .catch(function (error) { return reject(error); });
            });
        });
    }
    function pushSubscriptionOptOut() {
        return new Promise(function (resolve, reject) {
            var _a;
            if (isOneSignalScriptFailed) {
                reject();
            }
            (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push(function (oneSignal) {
                oneSignal.User.PushSubscription.optOut()
                    .then(function (value) { return resolve(value); })
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
        addAlias: userAddAlias,
        addAliases: userAddAliases,
        removeAlias: userRemoveAlias,
        removeAliases: userRemoveAliases,
        addEmail: userAddEmail,
        removeEmail: userRemoveEmail,
        addSms: userAddSms,
        removeSms: userRemoveSms,
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
        setDefaultUrl: notificationsSetDefaultUrl,
        setDefaultTitle: notificationsSetDefaultTitle,
        isPushSupported: isPushSupported,
        getPermissionStatus: notificationsGetPermissionStatus,
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
    window.OneSignalDeferred = window.OneSignalDeferred || [];
    addSDKScript();
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
        return window.top !== window && // isContextIframe
            navigator.vendor === 'Apple Computer, Inc.' && // isSafari
            navigator.platform === 'MacIntel'; // isMacOS
    }
    function supportsSafariPush() {
        return (window.safari && typeof window.safari.pushNotification !== 'undefined') ||
            isMacOSSafariInIframe();
    }
    // Does the browser support the standard Push API
    function supportsVapidPush() {
        return typeof PushSubscriptionOptions !== 'undefined' &&
            PushSubscriptionOptions.prototype.hasOwnProperty('applicationServerKey');
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
            if (isOneSignalInitialized) {
                return Promise.reject("OneSignal is already initialized.");
            }
            if (!options || !options.appId) {
                throw new Error('You need to provide your OneSignal appId.');
            }
            if (!document) {
                return Promise.reject("Document is not defined.");
            }
            return new Promise(function (resolve) {
                var _a;
                (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push(function (oneSignal) {
                    oneSignal.init(options).then(function () {
                        isOneSignalInitialized = true;
                        resolve();
                    });
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
