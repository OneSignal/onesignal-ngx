import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

function oneSignalLogin(externalId, jwtToken) {
    return new Promise((resolve, reject) => {
        var _a;
        if (isOneSignalScriptFailed) {
            reject();
        }
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
            oneSignal.login(externalId, jwtToken)
                .then((value) => resolve(value))
                .catch((error) => reject(error));
        });
    });
}
function oneSignalLogout() {
    return new Promise((resolve, reject) => {
        var _a;
        if (isOneSignalScriptFailed) {
            reject();
        }
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
            oneSignal.logout()
                .then((value) => resolve(value))
                .catch((error) => reject(error));
        });
    });
}
function oneSignalSetConsentGiven(consent) {
    return new Promise((resolve, reject) => {
        var _a;
        if (isOneSignalScriptFailed) {
            reject();
        }
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
            oneSignal.setConsentGiven(consent)
                .then((value) => resolve(value))
                .catch((error) => reject(error));
        });
    });
}
function oneSignalSetConsentRequired(requiresConsent) {
    return new Promise((resolve, reject) => {
        var _a;
        if (isOneSignalScriptFailed) {
            reject();
        }
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
            oneSignal.setConsentRequired(requiresConsent)
                .then((value) => resolve(value))
                .catch((error) => reject(error));
        });
    });
}
function slidedownPromptPush(options) {
    return new Promise((resolve, reject) => {
        var _a;
        if (isOneSignalScriptFailed) {
            reject();
        }
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
            oneSignal.Slidedown.promptPush(options)
                .then((value) => resolve(value))
                .catch((error) => reject(error));
        });
    });
}
function slidedownPromptPushCategories(options) {
    return new Promise((resolve, reject) => {
        var _a;
        if (isOneSignalScriptFailed) {
            reject();
        }
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
            oneSignal.Slidedown.promptPushCategories(options)
                .then((value) => resolve(value))
                .catch((error) => reject(error));
        });
    });
}
function slidedownPromptSms(options) {
    return new Promise((resolve, reject) => {
        var _a;
        if (isOneSignalScriptFailed) {
            reject();
        }
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
            oneSignal.Slidedown.promptSms(options)
                .then((value) => resolve(value))
                .catch((error) => reject(error));
        });
    });
}
function slidedownPromptEmail(options) {
    return new Promise((resolve, reject) => {
        var _a;
        if (isOneSignalScriptFailed) {
            reject();
        }
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
            oneSignal.Slidedown.promptEmail(options)
                .then((value) => resolve(value))
                .catch((error) => reject(error));
        });
    });
}
function slidedownPromptSmsAndEmail(options) {
    return new Promise((resolve, reject) => {
        var _a;
        if (isOneSignalScriptFailed) {
            reject();
        }
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
            oneSignal.Slidedown.promptSmsAndEmail(options)
                .then((value) => resolve(value))
                .catch((error) => reject(error));
        });
    });
}
function slidedownAddEventListener(event, listener) {
    var _a;
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
        oneSignal.Slidedown.addEventListener(event, listener);
    });
}
function slidedownRemoveEventListener(event, listener) {
    var _a;
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
        oneSignal.Slidedown.removeEventListener(event, listener);
    });
}
function notificationsSetDefaultUrl(url) {
    return new Promise((resolve, reject) => {
        var _a;
        if (isOneSignalScriptFailed) {
            reject();
        }
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
            oneSignal.Notifications.setDefaultUrl(url)
                .then((value) => resolve(value))
                .catch((error) => reject(error));
        });
    });
}
function notificationsSetDefaultTitle(title) {
    return new Promise((resolve, reject) => {
        var _a;
        if (isOneSignalScriptFailed) {
            reject();
        }
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
            oneSignal.Notifications.setDefaultTitle(title)
                .then((value) => resolve(value))
                .catch((error) => reject(error));
        });
    });
}
function notificationsGetPermissionStatus(onComplete) {
    return new Promise((resolve, reject) => {
        var _a;
        if (isOneSignalScriptFailed) {
            reject();
        }
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
            oneSignal.Notifications.getPermissionStatus(onComplete)
                .then((value) => resolve(value))
                .catch((error) => reject(error));
        });
    });
}
function notificationsRequestPermission() {
    return new Promise((resolve, reject) => {
        var _a;
        if (isOneSignalScriptFailed) {
            reject();
        }
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
            oneSignal.Notifications.requestPermission()
                .then((value) => resolve(value))
                .catch((error) => reject(error));
        });
    });
}
function notificationsAddEventListener(event, listener) {
    var _a;
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
        oneSignal.Notifications.addEventListener(event, listener);
    });
}
function notificationsRemoveEventListener(event, listener) {
    var _a;
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
        oneSignal.Notifications.removeEventListener(event, listener);
    });
}
function sessionSendOutcome(outcomeName, outcomeWeight) {
    return new Promise((resolve, reject) => {
        var _a;
        if (isOneSignalScriptFailed) {
            reject();
        }
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
            oneSignal.Session.sendOutcome(outcomeName, outcomeWeight)
                .then((value) => resolve(value))
                .catch((error) => reject(error));
        });
    });
}
function sessionSendUniqueOutcome(outcomeName) {
    return new Promise((resolve, reject) => {
        var _a;
        if (isOneSignalScriptFailed) {
            reject();
        }
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
            oneSignal.Session.sendUniqueOutcome(outcomeName)
                .then((value) => resolve(value))
                .catch((error) => reject(error));
        });
    });
}
function userAddAlias(label, id) {
    var _a;
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
        oneSignal.User.addAlias(label, id);
    });
}
function userAddAliases(aliases) {
    var _a;
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
        oneSignal.User.addAliases(aliases);
    });
}
function userRemoveAlias(label) {
    var _a;
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
        oneSignal.User.removeAlias(label);
    });
}
function userRemoveAliases(labels) {
    var _a;
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
        oneSignal.User.removeAliases(labels);
    });
}
function userAddEmail(email) {
    var _a;
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
        oneSignal.User.addEmail(email);
    });
}
function userRemoveEmail(email) {
    var _a;
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
        oneSignal.User.removeEmail(email);
    });
}
function userAddSms(smsNumber) {
    var _a;
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
        oneSignal.User.addSms(smsNumber);
    });
}
function userRemoveSms(smsNumber) {
    var _a;
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
        oneSignal.User.removeSms(smsNumber);
    });
}
function pushSubscriptionOptIn() {
    return new Promise((resolve, reject) => {
        var _a;
        if (isOneSignalScriptFailed) {
            reject();
        }
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
            oneSignal.User.PushSubscription.optIn()
                .then((value) => resolve(value))
                .catch((error) => reject(error));
        });
    });
}
function pushSubscriptionOptOut() {
    return new Promise((resolve, reject) => {
        var _a;
        if (isOneSignalScriptFailed) {
            reject();
        }
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
            oneSignal.User.PushSubscription.optOut()
                .then((value) => resolve(value))
                .catch((error) => reject(error));
        });
    });
}
function pushSubscriptionAddEventListener(event, listener) {
    var _a;
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
        oneSignal.User.PushSubscription.addEventListener(event, listener);
    });
}
function pushSubscriptionRemoveEventListener(event, listener) {
    var _a;
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
        oneSignal.User.PushSubscription.removeEventListener(event, listener);
    });
}
function debugSetLogLevel(logLevel) {
    var _a;
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
        oneSignal.Debug.setLogLevel(logLevel);
    });
}
const PushSubscriptionNamespace = {
    optIn: pushSubscriptionOptIn,
    optOut: pushSubscriptionOptOut,
    addEventListener: pushSubscriptionAddEventListener,
    removeEventListener: pushSubscriptionRemoveEventListener,
};
const UserNamespace = {
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
const SessionNamespace = {
    sendOutcome: sessionSendOutcome,
    sendUniqueOutcome: sessionSendUniqueOutcome,
};
const DebugNamespace = {
    setLogLevel: debugSetLogLevel,
};
const SlidedownNamespace = {
    promptPush: slidedownPromptPush,
    promptPushCategories: slidedownPromptPushCategories,
    promptSms: slidedownPromptSms,
    promptEmail: slidedownPromptEmail,
    promptSmsAndEmail: slidedownPromptSmsAndEmail,
    addEventListener: slidedownAddEventListener,
    removeEventListener: slidedownRemoveEventListener,
};
const NotificationsNamespace = {
    setDefaultUrl: notificationsSetDefaultUrl,
    setDefaultTitle: notificationsSetDefaultTitle,
    isPushSupported,
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
const ONESIGNAL_SDK_ID = 'onesignal-sdk';
const ONE_SIGNAL_SCRIPT_SRC = 'https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js';
// true if the script is successfully loaded from CDN.
let isOneSignalInitialized = false;
// true if the script fails to load from CDN. A separate flag is necessary
// to disambiguate between a CDN load failure and a delayed call to
// OneSignal#init.
let isOneSignalScriptFailed = false;
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
    const script = document.createElement('script');
    script.id = ONESIGNAL_SDK_ID;
    script.defer = true;
    script.src = ONE_SIGNAL_SCRIPT_SRC;
    // Always resolve whether or not the script is successfully initialized.
    // This is important for users who may block cdn.onesignal.com w/ adblock.
    script.onerror = () => {
        handleOnError();
    };
    document.head.appendChild(script);
}
class OneSignal {
    constructor() {
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
    init(options) {
        if (isOneSignalInitialized) {
            return Promise.reject(`OneSignal is already initialized.`);
        }
        if (!options || !options.appId) {
            throw new Error('You need to provide your OneSignal appId.');
        }
        if (!document) {
            return Promise.reject(`Document is not defined.`);
        }
        return new Promise((resolve) => {
            var _a;
            (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
                oneSignal.init(options).then(() => {
                    isOneSignalInitialized = true;
                    resolve();
                });
            });
        });
    }
}
OneSignal.ɵprov = i0.ɵɵdefineInjectable({ factory: function OneSignal_Factory() { return new OneSignal(); }, token: OneSignal, providedIn: "root" });
OneSignal.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
OneSignal.ctorParameters = () => [];

class OnesignalNgxComponent {
    constructor() { }
    ngOnInit() {
    }
}
OnesignalNgxComponent.decorators = [
    { type: Component, args: [{
                selector: 'onesignal-onesignal-ngx',
                template: `
    <p>
      onesignal-ngx works!
    </p>
  `
            },] }
];
OnesignalNgxComponent.ctorParameters = () => [];

class OnesignalNgxModule {
}
OnesignalNgxModule.decorators = [
    { type: NgModule, args: [{
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

export { OneSignal, OnesignalNgxComponent, OnesignalNgxModule };
//# sourceMappingURL=onesignal-ngx.js.map
