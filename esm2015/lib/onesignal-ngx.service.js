import { __awaiter } from "tslib";
function oneSignalLogin(externalId, jwtToken) {
    return new Promise((resolve, reject) => {
        var _a;
        if (isOneSignalScriptFailed) {
            reject(new Error('OneSignal script failed to load.'));
            return;
        }
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
            oneSignal.login(externalId, jwtToken)
                .then(() => resolve())
                .catch(error => reject(error));
        });
    });
}
function oneSignalLogout() {
    return new Promise((resolve, reject) => {
        var _a;
        if (isOneSignalScriptFailed) {
            reject(new Error('OneSignal script failed to load.'));
            return;
        }
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
            oneSignal.logout()
                .then(() => resolve())
                .catch(error => reject(error));
        });
    });
}
function oneSignalSetConsentGiven(consent) {
    return new Promise((resolve, reject) => {
        var _a;
        if (isOneSignalScriptFailed) {
            reject(new Error('OneSignal script failed to load.'));
            return;
        }
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
            oneSignal.setConsentGiven(consent)
                .then(() => resolve())
                .catch(error => reject(error));
        });
    });
}
function oneSignalSetConsentRequired(requiresConsent) {
    return new Promise((resolve, reject) => {
        var _a;
        if (isOneSignalScriptFailed) {
            reject(new Error('OneSignal script failed to load.'));
            return;
        }
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
            oneSignal.setConsentRequired(requiresConsent)
                .then(() => resolve())
                .catch(error => reject(error));
        });
    });
}
function slidedownPromptPush(options) {
    return new Promise((resolve, reject) => {
        var _a;
        if (isOneSignalScriptFailed) {
            reject(new Error('OneSignal script failed to load.'));
            return;
        }
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
            oneSignal.Slidedown.promptPush(options)
                .then(() => resolve())
                .catch(error => reject(error));
        });
    });
}
function slidedownPromptPushCategories(options) {
    return new Promise((resolve, reject) => {
        var _a;
        if (isOneSignalScriptFailed) {
            reject(new Error('OneSignal script failed to load.'));
            return;
        }
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
            oneSignal.Slidedown.promptPushCategories(options)
                .then(() => resolve())
                .catch(error => reject(error));
        });
    });
}
function slidedownPromptSms(options) {
    return new Promise((resolve, reject) => {
        var _a;
        if (isOneSignalScriptFailed) {
            reject(new Error('OneSignal script failed to load.'));
            return;
        }
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
            oneSignal.Slidedown.promptSms(options)
                .then(() => resolve())
                .catch(error => reject(error));
        });
    });
}
function slidedownPromptEmail(options) {
    return new Promise((resolve, reject) => {
        var _a;
        if (isOneSignalScriptFailed) {
            reject(new Error('OneSignal script failed to load.'));
            return;
        }
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
            oneSignal.Slidedown.promptEmail(options)
                .then(() => resolve())
                .catch(error => reject(error));
        });
    });
}
function slidedownPromptSmsAndEmail(options) {
    return new Promise((resolve, reject) => {
        var _a;
        if (isOneSignalScriptFailed) {
            reject(new Error('OneSignal script failed to load.'));
            return;
        }
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
            oneSignal.Slidedown.promptSmsAndEmail(options)
                .then(() => resolve())
                .catch(error => reject(error));
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
            reject(new Error('OneSignal script failed to load.'));
            return;
        }
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
            oneSignal.Notifications.setDefaultUrl(url)
                .then(() => resolve())
                .catch(error => reject(error));
        });
    });
}
function notificationsSetDefaultTitle(title) {
    return new Promise((resolve, reject) => {
        var _a;
        if (isOneSignalScriptFailed) {
            reject(new Error('OneSignal script failed to load.'));
            return;
        }
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
            oneSignal.Notifications.setDefaultTitle(title)
                .then(() => resolve())
                .catch(error => reject(error));
        });
    });
}
function notificationsRequestPermission() {
    return new Promise((resolve, reject) => {
        var _a;
        if (isOneSignalScriptFailed) {
            reject(new Error('OneSignal script failed to load.'));
            return;
        }
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
            oneSignal.Notifications.requestPermission()
                .then(result => resolve(result))
                .catch(error => reject(error));
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
            reject(new Error('OneSignal script failed to load.'));
            return;
        }
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
            oneSignal.Session.sendOutcome(outcomeName, outcomeWeight)
                .then(() => resolve())
                .catch(error => reject(error));
        });
    });
}
function sessionSendUniqueOutcome(outcomeName) {
    return new Promise((resolve, reject) => {
        var _a;
        if (isOneSignalScriptFailed) {
            reject(new Error('OneSignal script failed to load.'));
            return;
        }
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
            oneSignal.Session.sendUniqueOutcome(outcomeName)
                .then(() => resolve())
                .catch(error => reject(error));
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
function userAddTag(key, value) {
    var _a;
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
        oneSignal.User.addTag(key, value);
    });
}
function userAddTags(tags) {
    var _a;
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
        oneSignal.User.addTags(tags);
    });
}
function userRemoveTag(key) {
    var _a;
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
        oneSignal.User.removeTag(key);
    });
}
function userRemoveTags(keys) {
    var _a;
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
        oneSignal.User.removeTags(keys);
    });
}
// @ts-expect-error - return non-Promise type despite needing to await OneSignalDeferred
function userGetTags() {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        let retVal;
        yield ((_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
            retVal = oneSignal.User.getTags();
        }));
        // @ts-ignore
        return retVal;
    });
}
function userAddEventListener(event, listener) {
    var _a;
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
        oneSignal.User.addEventListener(event, listener);
    });
}
function userRemoveEventListener(event, listener) {
    var _a;
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
        oneSignal.User.removeEventListener(event, listener);
    });
}
function userSetLanguage(language) {
    var _a;
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
        oneSignal.User.setLanguage(language);
    });
}
// @ts-expect-error - return non-Promise type despite needing to await OneSignalDeferred
function userGetLanguage() {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        let retVal;
        yield ((_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
            retVal = oneSignal.User.getLanguage();
        }));
        // @ts-ignore
        return retVal;
    });
}
function userTrackEvent(name, properties) {
    var _a;
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
        oneSignal.User.trackEvent(name, properties);
    });
}
function pushSubscriptionOptIn() {
    return new Promise((resolve, reject) => {
        var _a;
        if (isOneSignalScriptFailed) {
            reject(new Error('OneSignal script failed to load.'));
            return;
        }
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
            oneSignal.User.PushSubscription.optIn()
                .then(() => resolve())
                .catch(error => reject(error));
        });
    });
}
function pushSubscriptionOptOut() {
    return new Promise((resolve, reject) => {
        var _a;
        if (isOneSignalScriptFailed) {
            reject(new Error('OneSignal script failed to load.'));
            return;
        }
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
            oneSignal.User.PushSubscription.optOut()
                .then(() => resolve())
                .catch(error => reject(error));
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
    get id() { var _a, _b, _c; return (_c = (_b = (_a = window.OneSignal) === null || _a === void 0 ? void 0 : _a.User) === null || _b === void 0 ? void 0 : _b.PushSubscription) === null || _c === void 0 ? void 0 : _c.id; },
    get token() { var _a, _b, _c; return (_c = (_b = (_a = window.OneSignal) === null || _a === void 0 ? void 0 : _a.User) === null || _b === void 0 ? void 0 : _b.PushSubscription) === null || _c === void 0 ? void 0 : _c.token; },
    get optedIn() { var _a, _b, _c; return (_c = (_b = (_a = window.OneSignal) === null || _a === void 0 ? void 0 : _a.User) === null || _b === void 0 ? void 0 : _b.PushSubscription) === null || _c === void 0 ? void 0 : _c.optedIn; },
    optIn: pushSubscriptionOptIn,
    optOut: pushSubscriptionOptOut,
    addEventListener: pushSubscriptionAddEventListener,
    removeEventListener: pushSubscriptionRemoveEventListener,
};
const UserNamespace = {
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
    get permissionNative() { var _a, _b, _c; return (_c = (_b = (_a = window.OneSignal) === null || _a === void 0 ? void 0 : _a.Notifications) === null || _b === void 0 ? void 0 : _b.permissionNative) !== null && _c !== void 0 ? _c : 'default'; },
    get permission() { var _a, _b, _c; return (_c = (_b = (_a = window.OneSignal) === null || _a === void 0 ? void 0 : _a.Notifications) === null || _b === void 0 ? void 0 : _b.permission) !== null && _c !== void 0 ? _c : false; },
    setDefaultUrl: notificationsSetDefaultUrl,
    setDefaultTitle: notificationsSetDefaultTitle,
    isPushSupported,
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
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
const ONESIGNAL_SDK_ID = 'onesignal-sdk';
const ONE_SIGNAL_SCRIPT_SRC = 'https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js';
// true if the script is successfully loaded from CDN.
let isOneSignalInitialized = false;
// true if the script fails to load from CDN. A separate flag is necessary
// to disambiguate between a CDN load failure and a delayed call to
// OneSignal#init.
let isOneSignalScriptFailed = false;
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
export class OneSignal {
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
        var _a;
        if (isOneSignalInitialized) {
            return Promise.reject(`OneSignal is already initialized.`);
        }
        if (!options || !options.appId) {
            return Promise.reject('You need to provide your OneSignal appId.');
        }
        if (!document) {
            return Promise.reject(`Document is not defined.`);
        }
        // Handle both disabled and disable keys for welcome notification
        if (((_a = options.welcomeNotification) === null || _a === void 0 ? void 0 : _a.disabled) !== undefined) {
            options.welcomeNotification.disable = options.welcomeNotification.disabled;
        }
        return new Promise((resolve, reject) => {
            var _a;
            (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
                oneSignal
                    .init(options)
                    .then(() => {
                    isOneSignalInitialized = true;
                    resolve();
                })
                    .catch(reject);
            });
        });
    }
}
OneSignal.ɵprov = i0.ɵɵdefineInjectable({ factory: function OneSignal_Factory() { return new OneSignal(); }, token: OneSignal, providedIn: "root" });
OneSignal.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
OneSignal.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25lc2lnbmFsLW5neC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvb25lc2lnbmFsLW5neC9zcmMvbGliL29uZXNpZ25hbC1uZ3guc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBdVpBLFNBQVMsY0FBYyxDQUFDLFVBQWtCLEVBQUUsUUFBaUI7SUFDM0QsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTs7UUFDckMsSUFBSSx1QkFBdUIsRUFBRTtZQUMzQixNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsa0NBQWtDLENBQUMsQ0FBQyxDQUFDO1lBQ3RELE9BQU87U0FDUjtRQUVELE1BQUEsTUFBTSxDQUFDLGlCQUFpQiwwQ0FBRSxJQUFJLENBQUMsQ0FBQyxTQUE4QixFQUFFLEVBQUU7WUFDaEUsU0FBUyxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDO2lCQUNsQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7aUJBQ3JCLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ25DLENBQUMsRUFBRTtJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUNELFNBQVMsZUFBZTtJQUN0QixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFOztRQUNyQyxJQUFJLHVCQUF1QixFQUFFO1lBQzNCLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDLENBQUM7WUFDdEQsT0FBTztTQUNSO1FBRUQsTUFBQSxNQUFNLENBQUMsaUJBQWlCLDBDQUFFLElBQUksQ0FBQyxDQUFDLFNBQThCLEVBQUUsRUFBRTtZQUNoRSxTQUFTLENBQUMsTUFBTSxFQUFFO2lCQUNmLElBQUksQ0FBQyxHQUFH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RWhCLGlCQUFpQjtJQUVqQjs7T0FFRztJQUNILElBQUksQ0FBQyxPQUFvQjs7UUFDdkIsSUFBSSxzQkFBc0IsRUFBRTtZQUMxQixPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsbUNBQW1DLENBQUMsQ0FBQztTQUM1RDtRQUVELElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFO1lBQzlCLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO1NBQ3BFO1FBRUQsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNiLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1NBQ25EO1FBRUQsaUVBQWlFO1FBQ2pFLElBQUksT0FBQSxPQUFPLENBQUMsbUJBQW1CLDBDQUFFLFFBQVEsTUFBSyxTQUFTLEVBQUU7WUFDdkQsT0FBTyxDQUFDLG1CQUFtQixDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDO1NBQzVFO1FBRUQsT0FBTyxJQUFJLE9BQU8sQ0FBTyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTs7WUFDM0MsTUFBQSxNQUFNLENBQUMsaUJBQWlCLDBDQUFFLElBQUksQ0FBQyxDQUFDLFNBQThCLEVBQUUsRUFBRTtnQkFDaEUsU0FBUztxQkFDTixJQUFJLENBQUMsT0FBTyxDQUFDO3FCQUNiLElBQUksQ0FBQyxHQUFHLEVBQUU7b0JBQ1Qsc0JBQXNCLEdBQUcsSUFBSSxDQUFDO29CQUM5QixPQUFPLEVBQUUsQ0FBQztnQkFDWixDQUFDLENBQUM7cUJBQ0QsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25CLENBQUMsRUFBRTtRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztZQTFDRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIEF1dG9Qcm9tcHRPcHRpb25zIHsgZm9yY2U/OiBib29sZWFuOyBmb3JjZVNsaWRlZG93bk92ZXJOYXRpdmU/OiBib29sZWFuOyBzbGlkZWRvd25Qcm9tcHRPcHRpb25zPzogSU9uZVNpZ25hbEF1dG9Qcm9tcHRPcHRpb25zOyB9XG5leHBvcnQgaW50ZXJmYWNlIElPbmVTaWduYWxBdXRvUHJvbXB0T3B0aW9ucyB7IGZvcmNlPzogYm9vbGVhbjsgZm9yY2VTbGlkZWRvd25PdmVyTmF0aXZlPzogYm9vbGVhbjsgaXNJblVwZGF0ZU1vZGU/OiBib29sZWFuOyBjYXRlZ29yeU9wdGlvbnM/OiBJT25lU2lnbmFsQ2F0ZWdvcmllczsgfVxuZXhwb3J0IGludGVyZmFjZSBJT25lU2lnbmFsQ2F0ZWdvcmllcyB7IHBvc2l0aXZlVXBkYXRlQnV0dG9uOiBzdHJpbmc7IG5lZ2F0aXZlVXBkYXRlQnV0dG9uOiBzdHJpbmc7IHNhdmluZ0J1dHRvblRleHQ6IHN0cmluZzsgZXJyb3JCdXR0b25UZXh0OiBzdHJpbmc7IHVwZGF0ZU1lc3NhZ2U6IHN0cmluZzsgdGFnczogSU9uZVNpZ25hbFRhZ0NhdGVnb3J5W107IH1cbmV4cG9ydCBpbnRlcmZhY2UgSU9uZVNpZ25hbFRhZ0NhdGVnb3J5IHsgdGFnOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmc7IGNoZWNrZWQ/OiBib29sZWFuOyB9XG5leHBvcnQgdHlwZSBQdXNoU3Vic2NyaXB0aW9uTmFtZXNwYWNlUHJvcGVydGllcyA9IHsgaWQ6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQ7IHRva2VuOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkOyBvcHRlZEluOiBib29sZWFuOyB9O1xuZXhwb3J0IHR5cGUgU3Vic2NyaXB0aW9uQ2hhbmdlRXZlbnQgPSB7IHByZXZpb3VzOiBQdXNoU3Vic2NyaXB0aW9uTmFtZXNwYWNlUHJvcGVydGllczsgY3VycmVudDogUHVzaFN1YnNjcmlwdGlvbk5hbWVzcGFjZVByb3BlcnRpZXM7IH07XG5leHBvcnQgdHlwZSBOb3RpZmljYXRpb25FdmVudE5hbWUgPSAnY2xpY2snIHwgJ2ZvcmVncm91bmRXaWxsRGlzcGxheScgfCAnZGlzbWlzcycgfCAncGVybWlzc2lvbkNoYW5nZScgfCAncGVybWlzc2lvblByb21wdERpc3BsYXknO1xuZXhwb3J0IHR5cGUgU2xpZGVkb3duRXZlbnROYW1lID0gJ3NsaWRlZG93bkFsbG93Q2xpY2snIHwgJ3NsaWRlZG93bkNhbmNlbENsaWNrJyB8ICdzbGlkZWRvd25DbG9zZWQnIHwgJ3NsaWRlZG93blF1ZXVlZCcgfCAnc2xpZGVkb3duU2hvd24nO1xuZXhwb3J0IHR5cGUgT25lU2lnbmFsRGVmZXJyZWRMb2FkZWRDYWxsYmFjayA9IChvbmVzaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHZvaWQ7XG5leHBvcnQgaW50ZXJmYWNlIElPU05vdGlmaWNhdGlvbiB7XG4gIC8qKlxuICAgKiBUaGUgT25lU2lnbmFsIG5vdGlmaWNhdGlvbiBpZDtcbiAgICogIC0gUHJpbWFyeSBpZCBvbiBPbmVTaWduYWwncyBSRVNUIEFQSSBhbmQgZGFzaGJvYXJkXG4gICAqL1xuICByZWFkb25seSBub3RpZmljYXRpb25JZDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBWaXNpYmxlIHRpdGxlIHRleHQgb24gdGhlIG5vdGlmaWNhdGlvblxuICAgKi9cbiAgcmVhZG9ubHkgdGl0bGU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFZpc2libGUgYm9keSB0ZXh0IG9uIHRoZSBub3RpZmljYXRpb25cbiAgICovXG4gIHJlYWRvbmx5IGJvZHk6IHN0cmluZztcblxuICAvKipcbiAgICogVmlzaWJsZSBpY29uIHRoZSBub3RpZmljYXRpb247IFVSTCBmb3JtYXRcbiAgICovXG4gIHJlYWRvbmx5IGljb24/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFZpc2libGUgc21hbGwgYmFkZ2VJY29uIHRoYXQgZGlzcGxheXMgb24gc29tZSBkZXZpY2VzOyBVUkwgZm9ybWF0XG4gICAqIEV4YW1wbGU6IE9uIEFuZHJvaWQncyBzdGF0dXMgYmFyXG4gICAqL1xuICByZWFkb25seSBiYWRnZUljb24/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFZpc2libGUgaW1hZ2Ugb24gdGhlIG5vdGlmaWNhdGlvbjsgVVJMIGZvcm1hdFxuICAgKi9cbiAgcmVhZG9ubHkgaW1hZ2U/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFZpc2libGUgYnV0dG9ucyBvbiB0aGUgbm90aWZpY2F0aW9uXG4gICAqL1xuICByZWFkb25seSBhY3Rpb25CdXR0b25zPzogSU9TTm90aWZpY2F0aW9uQWN0aW9uQnV0dG9uW107XG5cbiAgLyoqXG4gICAqIElmIHRoaXMgdmFsdWUgaXMgdGhlIHNhbWUgYXMgZXhpc3Rpbmcgbm90aWZpY2F0aW9uLCBpdCB3aWxsIHJlcGxhY2UgaXRcbiAgICogQ2FuIGJlIHNldCB3aGVuIGNyZWF0aW5nIHRoZSBub3RpZmljYXRpb24gd2l0aCBcIldlYiBQdXNoIFRvcGljXCIgb24gdGhlIGRhc2hib2FyZFxuICAgKiBvciB3ZWJfcHVzaF90b3BpYyBmcm9tIHRoZSBSRVNUIEFQSS5cbiAgICovXG4gIHJlYWRvbmx5IHRvcGljPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDdXN0b20gb2JqZWN0IHRoYXQgd2FzIHNlbnQgd2l0aCB0aGUgbm90aWZpY2F0aW9uO1xuICAgKiBkZWZpbmFibGUgd2hlbiBjcmVhdGluZyB0aGUgbm90aWZpY2F0aW9uIGZyb20gdGhlIE9uZVNpZ25hbCBSRVNUIEFQSSBvciBkYXNoYm9hcmRcbiAgICovXG4gIHJlYWRvbmx5IGFkZGl0aW9uYWxEYXRhPzogb2JqZWN0O1xuXG4gIC8qKlxuICAgKiBVUkwgdG8gb3BlbiB3aGVuIGNsaWNraW5nIG9yIHRhcHBpbmcgb24gdGhlIG5vdGlmaWNhdGlvblxuICAgKi9cbiAgcmVhZG9ubHkgbGF1bmNoVVJMPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDb25maXJtIHRoZSBwdXNoIHdhcyByZWNlaXZlZCBieSByZXBvcnRpbmcgYmFjayB0byBPbmVTaWduYWxcbiAgICovXG4gIHJlYWRvbmx5IGNvbmZpcm1EZWxpdmVyeTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJT1NOb3RpZmljYXRpb25BY3Rpb25CdXR0b24ge1xuICAvKipcbiAgICogQW55IHVuaXF1ZSBpZGVudGlmaWVyIHRvIHJlcHJlc2VudCB3aGljaCBidXR0b24gd2FzIGNsaWNrZWQuIFRoaXMgaXMgdHlwaWNhbGx5IHBhc3NlZCBiYWNrIHRvIHRoZSBzZXJ2aWNlIHdvcmtlclxuICAgKiBhbmQgaG9zdCBwYWdlIHRocm91Z2ggZXZlbnRzIHRvIGlkZW50aWZ5IHdoaWNoIGJ1dHRvbiB3YXMgY2xpY2tlZC5cbiAgICogZS5nLiAnbGlrZS1idXR0b24nXG4gICAqL1xuICByZWFkb25seSBhY3Rpb25JZDogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIG5vdGlmaWNhdGlvbiBhY3Rpb24gYnV0dG9uJ3MgdGV4dC5cbiAgICovXG4gIHJlYWRvbmx5IHRleHQ6IHN0cmluZztcbiAgLyoqXG4gICAqIEEgdmFsaWQgcHVibGljbHkgcmVhY2hhYmxlIEhUVFBTIFVSTCB0byBhbiBpbWFnZS5cbiAgICovXG4gIHJlYWRvbmx5IGljb24/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgVVJMIHRvIG9wZW4gdGhlIHdlYiBicm93c2VyIHRvIHdoZW4gdGhpcyBhY3Rpb24gYnV0dG9uIGlzIGNsaWNrZWQuXG4gICAqL1xuICByZWFkb25seSBsYXVuY2hVUkw/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm90aWZpY2F0aW9uQ2xpY2tSZXN1bHQge1xuICByZWFkb25seSBhY3Rpb25JZD86IHN0cmluZztcbiAgcmVhZG9ubHkgdXJsPzogc3RyaW5nO1xufVxuXG5leHBvcnQgdHlwZSBOb3RpZmljYXRpb25FdmVudFR5cGVNYXAgPSB7XG4gICdjbGljayc6IE5vdGlmaWNhdGlvbkNsaWNrRXZlbnQ7XG4gICdmb3JlZ3JvdW5kV2lsbERpc3BsYXknOiBOb3RpZmljYXRpb25Gb3JlZ3JvdW5kV2lsbERpc3BsYXlFdmVudDtcbiAgJ2Rpc21pc3MnOiBOb3RpZmljYXRpb25EaXNtaXNzRXZlbnQ7XG4gICdwZXJtaXNzaW9uQ2hhbmdlJzogYm9vbGVhbjtcbiAgJ3Blcm1pc3Npb25Qcm9tcHREaXNwbGF5Jzogdm9pZDtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm90aWZpY2F0aW9uRm9yZWdyb3VuZFdpbGxEaXNwbGF5RXZlbnQge1xuICByZWFkb25seSBub3RpZmljYXRpb246IElPU05vdGlmaWNhdGlvbjtcbiAgcHJldmVudERlZmF1bHQoKTogdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOb3RpZmljYXRpb25EaXNtaXNzRXZlbnQge1xuICBub3RpZmljYXRpb246IElPU05vdGlmaWNhdGlvbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOb3RpZmljYXRpb25DbGlja0V2ZW50IHtcbiAgcmVhZG9ubHkgbm90aWZpY2F0aW9uOiBJT1NOb3RpZmljYXRpb247XG4gIHJlYWRvbmx5IHJlc3VsdDogTm90aWZpY2F0aW9uQ2xpY2tSZXN1bHQ7XG59XG5cbmV4cG9ydCB0eXBlIFVzZXJDaGFuZ2VFdmVudCA9IHtcbiAgY3VycmVudDogVXNlck5hbWVzcGFjZVByb3BlcnRpZXM7XG59O1xuZXhwb3J0IHR5cGUgVXNlck5hbWVzcGFjZVByb3BlcnRpZXMgPSB7XG4gIG9uZXNpZ25hbElkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGV4dGVybmFsSWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUluaXRPYmplY3Qge1xuICBhcHBJZDogc3RyaW5nO1xuICBzdWJkb21haW5OYW1lPzogc3RyaW5nO1xuICByZXF1aXJlc1VzZXJQcml2YWN5Q29uc2VudD86IGJvb2xlYW47XG4gIHByb21wdE9wdGlvbnM/OiB7XG4gICAgc2xpZGVkb3duOiB7XG4gICAgICBwcm9tcHRzOiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXaGV0aGVyIHRvIGF1dG9tYXRpY2FsbHkgZGlzcGxheSB0aGUgcHJvbXB0LlxuICAgICAgICAgKiBgdHJ1ZWAgd2lsbCBkaXNwbGF5IHRoZSBwcm9tcHQgYmFzZWQgb24gdGhlIGRlbGF5IG9wdGlvbnMuXG4gICAgICAgICAqIGBmYWxzZWAgd2lsbCBwcmV2ZW50IHRoZSBwcm9tcHQgZnJvbSBkaXNwbGF5aW5nIHVudGlsIHRoZSBTbGlkZWRvd25zIG1ldGhvZHMgYXJlIHVzZWQuXG4gICAgICAgICAqL1xuICAgICAgICBhdXRvUHJvbXB0OiBib29sZWFuO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBPbmx5IGF2YWlsYWJsZSBmb3IgdHlwZTogY2F0ZWdvcnkuIFVwIHRvIDEwIGNhdGVnb3JpZXMuXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqICBjYXRlZ29yaWVzOiBbeyB0YWc6ICdsb2NhbF9uZXdzJywgbGFiZWw6ICdMb2NhbCBOZXdzJyB9XSAvLyBUaGUgdXNlciB3aWxsIGJlIHRhZ2dlZCB3aXRoIGxvY2FsX25ld3MgYnV0IHdpbGwgc2VlIFwiTG9jYWwgTmV3c1wiIGluIHRoZSBwcm9tcHQuXG4gICAgICAgICAqL1xuICAgICAgICBjYXRlZ29yaWVzOiB7XG4gICAgICAgICAgLyoqIFNob3VsZCBpZGVudGlmeSB0aGUgYWN0aW9uLiAqL1xuICAgICAgICAgIHRhZzogc3RyaW5nO1xuXG4gICAgICAgICAgLyoqIFdoYXQgdGhlIHVzZXIgd2lsbCBzZWUuICovXG4gICAgICAgICAgbGFiZWw6IHN0cmluZztcbiAgICAgICAgfVtdO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgZGVsYXkgb3B0aW9ucyBmb3IgdGhlIHByb21wdC5cbiAgICAgICAgICogQGV4YW1wbGUgZGVsYXk6IHsgcGFnZVZpZXdzOiAzLCB0aW1lRGVsYXk6IDIwIH0gLy8gVGhlIHVzZXIgd2lsbCBub3QgYmUgc2hvd24gdGhlIHByb21wdCB1bnRpbCAyMCBzZWNvbmRzIGFmdGVyIHRoZSAzcmQgcGFnZSB2aWV3LlxuICAgICAgICAgKi9cbiAgICAgICAgZGVsYXk6IHtcbiAgICAgICAgICAvKiogVGhlIG51bWJlciBvZiBwYWdlcyBhIHVzZXIgbmVlZHMgdG8gdmlzaXQgYmVmb3JlIHRoZSBwcm9tcHQgaXMgZGlzcGxheWVkLiAqL1xuICAgICAgICAgIHBhZ2VWaWV3cz86IG51bWJlcjtcblxuICAgICAgICAgIC8qKiBUaGUgbnVtYmVyIG9mIHNlY29uZHMgYSB1c2VyIG5lZWRzIHRvIHdhaXQgYmVmb3JlIHRoZSBwcm9tcHQgaXMgZGlzcGxheWVkLkJvdGggb3B0aW9ucyBtdXN0IGJlIHNhdGlzZmllZCBmb3IgdGhlIHByb21wdCB0byBkaXNwbGF5ICovXG4gICAgICAgICAgdGltZURlbGF5PzogbnVtYmVyO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdGV4dCB0byBkaXNwbGF5IGluIHRoZSBwcm9tcHQuXG4gICAgICAgICAqL1xuICAgICAgICB0ZXh0Pzoge1xuICAgICAgICAgIC8qKiBUaGUgY2FsbG91dCBhc2tpbmcgdGhlIHVzZXIgdG8gb3B0LWluLiBVcCB0byA5MCBjaGFyYWN0ZXJzLiAqL1xuICAgICAgICAgIGFjdGlvbk1lc3NhZ2U/OiBzdHJpbmc7XG5cbiAgICAgICAgICAvKiogVHJpZ2dlcnMgdGhlIG9wdC1pbi4gVXAgdG8gMTUgY2hhcmFjdGVycy4gKi9cbiAgICAgICAgICBhY2NlcHRCdXR0b24/OiBzdHJpbmc7XG5cbiAgICAgICAgICAvKiogQ2FuY2VscyBvcHQtaW4uIFVwIHRvIDE1IGNoYXJhY3RlcnMuICovXG4gICAgICAgICAgY2FuY2VsTWVzc2FnZT86IHN0cmluZztcblxuICAgICAgICAgIC8qKiBUaGUgbWVzc2FnZSBvZiB0aGUgY29uZmlybWF0aW9uIHByb21wdCBkaXNwbGF5ZWQgYWZ0ZXIgdGhlIGVtYWlsIGFuZC9vciBwaG9uZSBudW1iZXIgaXMgcHJvdmlkZWQuIFVwIHRvIDkwIGNoYXJhY3RlcnMuICovXG4gICAgICAgICAgY29uZmlybU1lc3NhZ2U/OiBzdHJpbmc7XG5cbiAgICAgICAgICAvKiogSWRlbnRpZmllcyB0aGUgZW1haWwgdGV4dCBmaWVsZC4gVXAgdG8gMTUgY2hhcmFjdGVycy4gKi9cbiAgICAgICAgICBlbWFpbExhYmVsPzogc3RyaW5nO1xuXG4gICAgICAgICAgLyoqIENhbmNlbHMgdGhlIGNhdGVnb3J5IHVwZGF0ZS4gVXAgdG8gMTUgY2hhcmFjdGVycy4gKi9cbiAgICAgICAgICBuZWdhdGl2ZVVwZGF0ZUJ1dHRvbj86IHN0cmluZztcblxuICAgICAgICAgIC8qKiBTYXZlcyB0aGUgdXBkYXRlZCBjYXRlZ29yeSB0YWdzLiBVcCB0byAxNSBjaGFyYWN0ZXJzLiAqL1xuICAgICAgICAgIHBvc2l0aXZlVXBkYXRlQnV0dG9uPzogc3RyaW5nO1xuXG4gICAgICAgICAgLyoqIElkZW50aWZpZXMgdGhlIHBob25lIG51bWJlciB0ZXh0IGZpZWxkLiBVcCB0byAxNSBjaGFyYWN0ZXJzLiAqL1xuICAgICAgICAgIHNtc0xhYmVsPzogc3RyaW5nO1xuXG4gICAgICAgICAgLyoqIEEgZGlmZmVyZW50IG1lc3NhZ2Ugc2hvd24gdG8gc3Vic2NyaWJlcnMgcHJlc2VudGVkIHRoZSBwcm9tcHQgYWdhaW4gdG8gdXBkYXRlIGNhdGVnb3JpZXMuIFVwIHRvIDkwIGNoYXJhY3RlcnMuICovXG4gICAgICAgICAgdXBkYXRlTWVzc2FnZT86IHN0cmluZztcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHR5cGUgb2YgcHJvbXB0IHRvIGRpc3BsYXkuXG4gICAgICAgICAqIGBwdXNoYCB3aGljaCBpcyB0aGUgU2xpZGUgUHJvbXB0IHdpdGhvdXQgY2F0ZWdvcmllcy5cbiAgICAgICAgICogYGNhdGVnb3J5YCB3aGljaCBpcyB0aGUgU2xpZGUgUHJvbXB0IHdpdGggY2F0ZWdvcmllcy5cbiAgICAgICAgICogYHNtc2Agb25seSBhc2tzIGZvciBwaG9uZSBudW1iZXIuXG4gICAgICAgICAqIGBlbWFpbGAgb25seSBhc2tzIGZvciBlbWFpbCBhZGRyZXNzLlxuICAgICAgICAgKiBgc21zQW5kRW1haWxgIGFza3MgZm9yIGJvdGggcGhvbmUgbnVtYmVyIGFuZCBlbWFpbCBhZGRyZXNzLlxuICAgICAgICAgKi9cbiAgICAgICAgdHlwZTogJ3B1c2gnIHwgJ2NhdGVnb3J5JyB8ICdzbXMnIHwgJ2VtYWlsJyB8ICdzbXNBbmRFbWFpbCc7XG4gICAgICB9W107XG4gICAgfTtcbiAgfTtcbiAgd2VsY29tZU5vdGlmaWNhdGlvbj86IHtcbiAgICAvKipcbiAgICAgKiBEaXNhYmxlcyBzZW5kaW5nIGEgd2VsY29tZSBub3RpZmljYXRpb24gdG8gbmV3IHNpdGUgdmlzaXRvcnMuIElmIHlvdSB3YW50IHRvIGRpc2FibGUgd2VsY29tZSBub3RpZmljYXRpb25zLCB0aGlzIGlzIHRoZSBvbmx5IG9wdGlvbiB5b3UgbmVlZC5cbiAgICAgKiBAZGVwcmVjYXRlZCBVc2UgJ2Rpc2FibGUnIGluc3RlYWQuIFRoaXMgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIHZlcnNpb24uXG4gICAgICovXG4gICAgZGlzYWJsZWQ/OiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogRGlzYWJsZXMgc2VuZGluZyBhIHdlbGNvbWUgbm90aWZpY2F0aW9uIHRvIG5ldyBzaXRlIHZpc2l0b3JzLiBJZiB5b3Ugd2FudCB0byBkaXNhYmxlIHdlbGNvbWUgbm90aWZpY2F0aW9ucywgdGhpcyBpcyB0aGUgb25seSBvcHRpb24geW91IG5lZWQuXG4gICAgICovXG4gICAgZGlzYWJsZT86IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBUaGUgd2VsY29tZSBub3RpZmljYXRpb24ncyBtZXNzYWdlLiBZb3UgY2FuIGxvY2FsaXplIHRoaXMgdG8geW91ciBvd24gbGFuZ3VhZ2UuXG4gICAgICogSWYgbGVmdCBibGFuayBvciBzZXQgdG8gYmxhbmssIHRoZSBkZWZhdWx0IG9mICdUaGFua3MgZm9yIHN1YnNjcmliaW5nIScgd2lsbCBiZSB1c2VkLlxuICAgICAqL1xuICAgIG1lc3NhZ2U6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIFRoZSB3ZWxjb21lIG5vdGlmaWNhdGlvbidzIHRpdGxlLiBZb3UgY2FuIGxvY2FsaXplIHRoaXMgdG8geW91ciBvd24gbGFuZ3VhZ2UuIElmIG5vdCBzZXQsIG9yIGxlZnQgYmxhbmssIHRoZSBzaXRlJ3MgdGl0bGUgd2lsbCBiZSB1c2VkLlxuICAgICAqIFNldCB0byBvbmUgc3BhY2UgJyAnIHRvIGNsZWFyIHRoZSB0aXRsZSwgYWx0aG91Z2ggdGhpcyBpcyBub3QgcmVjb21tZW5kZWQuXG4gICAgICovXG4gICAgdGl0bGU/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBCeSBkZWZhdWx0LCBjbGlja2luZyB0aGUgd2VsY29tZSBub3RpZmljYXRpb24gZG9lcyBub3Qgb3BlbiBhbnkgbGluay5cbiAgICAgKiBUaGlzIGlzIHJlY29tbWVuZGVkIGJlY2F1c2UgdGhlIHVzZXIgaGFzIGp1c3QgdmlzaXRlZCB5b3VyIHNpdGUgYW5kIHN1YnNjcmliZWQuXG4gICAgICovXG4gICAgdXJsPzogc3RyaW5nO1xuICB9O1xuXG4gIC8qKlxuICAgKiBXaWxsIGVuYWJsZSBjdXN0b21pemF0aW9uIG9mIHRoZSBub3RpZnkvc3Vic2NyaXB0aW9uIGJlbGwgYnV0dG9uLlxuICAgKi9cbiAgbm90aWZ5QnV0dG9uPzoge1xuICAgIC8qKlxuICAgICAqIEEgZnVuY3Rpb24geW91IGRlZmluZSB0aGF0IHJldHVybnMgdHJ1ZSB0byBzaG93IHRoZSBTdWJzY3JpcHRpb24gQmVsbCwgb3IgZmFsc2UgdG8gaGlkZSBpdC5cbiAgICAgKiBUeXBpY2FsbHkgdXNlZCB0aGUgaGlkZSB0aGUgU3Vic2NyaXB0aW9uIEJlbGwgYWZ0ZXIgdGhlIHVzZXIgaXMgc3Vic2NyaWJlZC5cbiAgICAgKiBUaGlzIGZ1bmN0aW9uIGlzIG5vdCByZS1ldmFsdWF0ZWQgb24gZXZlcnkgc3RhdGUgY2hhbmdlOyB0aGlzIGZ1bmN0aW9uIGlzIG9ubHkgZXZhbHVhdGVkIG9uY2Ugd2hlbiB0aGUgU3Vic2NyaXB0aW9uIEJlbGwgYmVnaW5zIHRvIHNob3cuXG4gICAgICovXG4gICAgZGlzcGxheVByZWRpY2F0ZT86ICgpID0+IGJvb2xlYW4gfCBQcm9taXNlPGJvb2xlYW4+O1xuXG4gICAgLyoqXG4gICAgICogRW5hYmxlIHRoZSBTdWJzY3JpcHRpb24gQmVsbC4gVGhlIFN1YnNjcmlwdGlvbiBCZWxsIGlzIG90aGVyd2lzZSBkaXNhYmxlZCBieSBkZWZhdWx0LlxuICAgICAqL1xuICAgIGVuYWJsZT86IGJvb2xlYW47XG5cbiAgICAvKiogU3BlY2lmeSBDU1MtdmFsaWQgcGl4ZWwgb2Zmc2V0cyB1c2luZyBib3R0b20sIGxlZnQsIGFuZCByaWdodC4gKi9cbiAgICBvZmZzZXQ/OiB7IGJvdHRvbTogc3RyaW5nOyBsZWZ0OiBzdHJpbmc7IHJpZ2h0OiBzdHJpbmcgfTtcblxuICAgIC8qKlxuICAgICAqIElmIGB0cnVlYCwgdGhlIFN1YnNjcmlwdGlvbiBCZWxsIHdpbGwgZGlzcGxheSBhbiBpY29uIHRoYXQgdGhlcmUgaXMgMSB1bnJlYWQgbWVzc2FnZS5cbiAgICAgKiBXaGVuIGhvdmVyaW5nIG92ZXIgdGhlIFN1YnNjcmlwdGlvbiBCZWxsLCB0aGUgdXNlciB3aWxsIHNlZSBjdXN0b20gdGV4dCBzZXQgYnkgbWVzc2FnZS5wcmVub3RpZnkuXG4gICAgICovXG4gICAgcHJlbm90aWZ5OiBib29sZWFuO1xuXG4gICAgLyoqIEVpdGhlciBgYm90dG9tLWxlZnRgIG9yIGBib3R0b20tcmlnaHRgLiBUaGUgU3Vic2NyaXB0aW9uIEJlbGwgd2lsbCBiZSBmaXhlZCBhdCB0aGlzIGxvY2F0aW9uIG9uIHlvdXIgcGFnZS4gKi9cbiAgICBwb3NpdGlvbj86ICdib3R0b20tbGVmdCcgfCAnYm90dG9tLXJpZ2h0JztcblxuICAgIC8qKiAgU2V0IGBmYWxzZWAgdG8gaGlkZSB0aGUgJ1Bvd2VyZWQgYnkgT25lU2lnbmFsJyB0ZXh0IGluIHRoZSBTdWJzY3JpcHRpb24gQmVsbCBkaWFsb2cgcG9wdXAuICovXG4gICAgc2hvd0NyZWRpdDogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIFRoZSBTdWJzY3JpcHRpb24gQmVsbCB3aWxsIGluaXRpYWxseSBhcHBlYXIgYXQgb25lIG9mIHRoZXNlIHNpemVzLCBhbmQgdGhlbiBzaHJpbmsgZG93biB0byBzaXplIGBzbWFsbGAgYWZ0ZXIgdGhlIHVzZXIgc3Vic2NyaWJlcy5cbiAgICAgKi9cbiAgICBzaXplPzogJ3NtYWxsJyB8ICdtZWRpdW0nIHwgJ2xhcmdlJztcblxuICAgIC8qKiBDdXN0b21pemUgdGhlIFN1YnNjcmlwdGlvbiBCZWxsIHRleHQuICovXG4gICAgdGV4dDoge1xuICAgICAgJ2RpYWxvZy5ibG9ja2VkLm1lc3NhZ2UnOiBzdHJpbmc7XG4gICAgICAnZGlhbG9nLmJsb2NrZWQudGl0bGUnOiBzdHJpbmc7XG4gICAgICAnZGlhbG9nLm1haW4uYnV0dG9uLnN1YnNjcmliZSc6IHN0cmluZztcbiAgICAgICdkaWFsb2cubWFpbi5idXR0b24udW5zdWJzY3JpYmUnOiBzdHJpbmc7XG4gICAgICAnZGlhbG9nLm1haW4udGl0bGUnOiBzdHJpbmc7XG4gICAgICAnbWVzc2FnZS5hY3Rpb24ucmVzdWJzY3JpYmVkJzogc3RyaW5nO1xuICAgICAgJ21lc3NhZ2UuYWN0aW9uLnN1YnNjcmliZWQnOiBzdHJpbmc7XG4gICAgICAnbWVzc2FnZS5hY3Rpb24uc3Vic2NyaWJpbmcnOiBzdHJpbmc7XG4gICAgICAnbWVzc2FnZS5hY3Rpb24udW5zdWJzY3JpYmVkJzogc3RyaW5nO1xuICAgICAgJ21lc3NhZ2UucHJlbm90aWZ5Jzogc3RyaW5nO1xuICAgICAgJ3RpcC5zdGF0ZS5ibG9ja2VkJzogc3RyaW5nO1xuICAgICAgJ3RpcC5zdGF0ZS5zdWJzY3JpYmVkJzogc3RyaW5nO1xuICAgICAgJ3RpcC5zdGF0ZS51bnN1YnNjcmliZWQnOiBzdHJpbmc7XG4gICAgfTtcbiAgfTtcblxuICBwZXJzaXN0Tm90aWZpY2F0aW9uPzogYm9vbGVhbjtcbiAgd2ViaG9va3M/OiB7XG4gICAgLyoqXG4gICAgICogRW5hYmxlIHRoaXMgc2V0dGluZyBvbmx5IGlmIHlvdXIgc2VydmVyIGhhcyBDT1JTIGVuYWJsZWQgYW5kIHN1cHBvcnRzIG5vbi1zaW1wbGUgQ09SUyByZXF1ZXN0cy5cbiAgICAgKiBJZiB0aGlzIHNldHRpbmcgaXMgZGlzYWJsZWQsIHlvdXIgd2ViaG9vayB3aWxsIG5vdCBuZWVkIENPUlMgdG8gcmVjZWl2ZSBkYXRhLCBidXQgaXQgd2lsbCBub3QgcmVjZWl2ZSB0aGUgY3VzdG9tIGhlYWRlcnMuXG4gICAgICogVGhlIHNpbXBsZXN0IG9wdGlvbiBpcyB0byBsZWF2ZSBpdCBkaXNhYmxlZC5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuICAgIGNvcnM6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGV2ZW50IG9jY3VycyBhZnRlciBhIG5vdGlmaWNhdGlvbiBpcyBjbGlja2VkLlxuICAgICAqIEBleGFtcGxlIGh0dHBzOi8vc2l0ZS5jb20vaG9va1xuICAgICAqL1xuICAgICdub3RpZmljYXRpb24uY2xpY2tlZCc/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGV2ZW50IG9jY3VycyBhZnRlciBhIG5vdGlmaWNhdGlvbiBpcyBpbnRlbnRpb25hbGx5IGRpc21pc3NlZCBieSB0aGUgdXNlciAoY2xpY2tpbmcgdGhlIG5vdGlmaWNhdGlvbiBib2R5IG9yIG9uZSBvZiB0aGUgbm90aWZpY2F0aW9uIGFjdGlvbiBidXR0b25zIGRvZXMgbm90IHRyaWdnZXIgdGhlIGRpc21pc3NlZCB3ZWJob29rKSxcbiAgICAgKiBhZnRlciBhIGdyb3VwIG9mIG5vdGlmaWNhdGlvbnMgYXJlIGFsbCBkaXNtaXNzZWQgKHdpdGggdGhpcyBub3RpZmljYXRpb24gYXMgcGFydCBvZiB0aGF0IGdyb3VwKSwgb3IgYWZ0ZXIgYSBub3RpZmljYXRpb24gZXhwaXJlcyBvbiBpdHMgb3duIHRpbWUgYW5kIGRpc2FwcGVhcnMuIFRoaXMgZXZlbnQgaXMgc3VwcG9ydGVkIG9uIENocm9tZSBvbmx5LlxuICAgICAqIEBleGFtcGxlIGh0dHBzOi8vc2l0ZS5jb20vaG9va1xuICAgICAqL1xuICAgICdub3RpZmljYXRpb24uZGlzbWlzc2VkJz86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIFRoaXMgZXZlbnQgb2NjdXJzIGFmdGVyIGEgbm90aWZpY2F0aW9uIGlzIGRpc3BsYXllZC5cbiAgICAgKiBAZXhhbXBsZSBodHRwczovL3NpdGUuY29tL2hvb2tcbiAgICAgKi9cbiAgICAnbm90aWZpY2F0aW9uLndpbGxEaXNwbGF5Jz86IHN0cmluZztcbiAgfTtcbiAgYXV0b1Jlc3Vic2NyaWJlPzogYm9vbGVhbjtcbiAgYXV0b1JlZ2lzdGVyPzogYm9vbGVhbjtcbiAgbm90aWZpY2F0aW9uQ2xpY2tIYW5kbGVyTWF0Y2g/OiBzdHJpbmc7XG4gIG5vdGlmaWNhdGlvbkNsaWNrSGFuZGxlckFjdGlvbj86IHN0cmluZztcbiAgcGF0aD86IHN0cmluZztcbiAgc2VydmljZVdvcmtlclBhcmFtPzogeyBzY29wZTogc3RyaW5nIH07XG4gIHNlcnZpY2VXb3JrZXJQYXRoPzogc3RyaW5nO1xuICBzZXJ2aWNlV29ya2VyT3ZlcnJpZGVGb3JUeXBpY2FsPzogYm9vbGVhbjtcbiAgc2VydmljZVdvcmtlclVwZGF0ZXJQYXRoPzogc3RyaW5nO1xuICBhbGxvd0xvY2FsaG9zdEFzU2VjdXJlT3JpZ2luPzogYm9vbGVhbjtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElPbmVTaWduYWxPbmVTaWduYWwge1xuXHRTbGlkZWRvd246IElPbmVTaWduYWxTbGlkZWRvd247XG5cdE5vdGlmaWNhdGlvbnM6IElPbmVTaWduYWxOb3RpZmljYXRpb25zO1xuXHRTZXNzaW9uOiBJT25lU2lnbmFsU2Vzc2lvbjtcblx0VXNlcjogSU9uZVNpZ25hbFVzZXI7XG5cdERlYnVnOiBJT25lU2lnbmFsRGVidWc7XG5cdGxvZ2luKGV4dGVybmFsSWQ6IHN0cmluZywgand0VG9rZW4/OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+O1xuXHRsb2dvdXQoKTogUHJvbWlzZTx2b2lkPjtcblx0aW5pdChvcHRpb25zOiBJSW5pdE9iamVjdCk6IFByb21pc2U8dm9pZD47XG5cdHNldENvbnNlbnRHaXZlbihjb25zZW50OiBib29sZWFuKTogUHJvbWlzZTx2b2lkPjtcblx0c2V0Q29uc2VudFJlcXVpcmVkKHJlcXVpcmVzQ29uc2VudDogYm9vbGVhbik6IFByb21pc2U8dm9pZD47XG59XG5leHBvcnQgaW50ZXJmYWNlIElPbmVTaWduYWxOb3RpZmljYXRpb25zIHtcblx0cGVybWlzc2lvbk5hdGl2ZTogTm90aWZpY2F0aW9uUGVybWlzc2lvbjtcblx0cGVybWlzc2lvbjogYm9vbGVhbjtcblx0c2V0RGVmYXVsdFVybCh1cmw6IHN0cmluZyk6IFByb21pc2U8dm9pZD47XG5cdHNldERlZmF1bHRUaXRsZSh0aXRsZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPjtcblx0aXNQdXNoU3VwcG9ydGVkKCk6IGJvb2xlYW47XG5cdHJlcXVlc3RQZXJtaXNzaW9uKCk6IFByb21pc2U8Ym9vbGVhbj47XG5cdGFkZEV2ZW50TGlzdGVuZXI8SyBleHRlbmRzIE5vdGlmaWNhdGlvbkV2ZW50TmFtZT4oZXZlbnQ6IEssIGxpc3RlbmVyOiAob2JqOiBOb3RpZmljYXRpb25FdmVudFR5cGVNYXBbS10pID0+IHZvaWQpOiB2b2lkO1xuXHRyZW1vdmVFdmVudExpc3RlbmVyPEsgZXh0ZW5kcyBOb3RpZmljYXRpb25FdmVudE5hbWU+KGV2ZW50OiBLLCBsaXN0ZW5lcjogKG9iajogTm90aWZpY2F0aW9uRXZlbnRUeXBlTWFwW0tdKSA9PiB2b2lkKTogdm9pZDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSU9uZVNpZ25hbFNsaWRlZG93biB7XG5cdHByb21wdFB1c2gob3B0aW9ucz86IEF1dG9Qcm9tcHRPcHRpb25zKTogUHJvbWlzZTx2b2lkPjtcblx0cHJvbXB0UHVzaENhdGVnb3JpZXMob3B0aW9ucz86IEF1dG9Qcm9tcHRPcHRpb25zKTogUHJvbWlzZTx2b2lkPjtcblx0cHJvbXB0U21zKG9wdGlvbnM/OiBBdXRvUHJvbXB0T3B0aW9ucyk6IFByb21pc2U8dm9pZD47XG5cdHByb21wdEVtYWlsKG9wdGlvbnM/OiBBdXRvUHJvbXB0T3B0aW9ucyk6IFByb21pc2U8dm9pZD47XG5cdHByb21wdFNtc0FuZEVtYWlsKG9wdGlvbnM/OiBBdXRvUHJvbXB0T3B0aW9ucyk6IFByb21pc2U8dm9pZD47XG5cdGFkZEV2ZW50TGlzdGVuZXIoZXZlbnQ6IFNsaWRlZG93bkV2ZW50TmFtZSwgbGlzdGVuZXI6ICh3YXNTaG93bjogYm9vbGVhbikgPT4gdm9pZCk6IHZvaWQ7XG5cdHJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQ6IFNsaWRlZG93bkV2ZW50TmFtZSwgbGlzdGVuZXI6ICh3YXNTaG93bjogYm9vbGVhbikgPT4gdm9pZCk6IHZvaWQ7XG59XG5leHBvcnQgaW50ZXJmYWNlIElPbmVTaWduYWxEZWJ1ZyB7XG5cdHNldExvZ0xldmVsKGxvZ0xldmVsOiAndHJhY2UnIHwgJ2RlYnVnJyB8ICdpbmZvJyB8ICd3YXJuJyB8ICdlcnJvcicpOiB2b2lkO1xufVxuZXhwb3J0IGludGVyZmFjZSBJT25lU2lnbmFsU2Vzc2lvbiB7XG5cdHNlbmRPdXRjb21lKG91dGNvbWVOYW1lOiBzdHJpbmcsIG91dGNvbWVXZWlnaHQ/OiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+O1xuXHRzZW5kVW5pcXVlT3V0Y29tZShvdXRjb21lTmFtZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSU9uZVNpZ25hbFVzZXIge1xuXHRvbmVzaWduYWxJZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHRleHRlcm5hbElkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdFB1c2hTdWJzY3JpcHRpb246IElPbmVTaWduYWxQdXNoU3Vic2NyaXB0aW9uO1xuXHRhZGRBbGlhcyhsYWJlbDogc3RyaW5nLCBpZDogc3RyaW5nKTogdm9pZDtcblx0YWRkQWxpYXNlcyhhbGlhc2VzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KTogdm9pZDtcblx0cmVtb3ZlQWxpYXMobGFiZWw6IHN0cmluZyk6IHZvaWQ7XG5cdHJlbW92ZUFsaWFzZXMobGFiZWxzOiBzdHJpbmdbXSk6IHZvaWQ7XG5cdGFkZEVtYWlsKGVtYWlsOiBzdHJpbmcpOiB2b2lkO1xuXHRyZW1vdmVFbWFpbChlbWFpbDogc3RyaW5nKTogdm9pZDtcblx0YWRkU21zKHNtc051bWJlcjogc3RyaW5nKTogdm9pZDtcblx0cmVtb3ZlU21zKHNtc051bWJlcjogc3RyaW5nKTogdm9pZDtcblx0YWRkVGFnKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZDtcblx0YWRkVGFncyh0YWdzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KTogdm9pZDtcblx0cmVtb3ZlVGFnKGtleTogc3RyaW5nKTogdm9pZDtcblx0cmVtb3ZlVGFncyhrZXlzOiBzdHJpbmdbXSk6IHZvaWQ7XG5cdGdldFRhZ3MoKTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcblx0YWRkRXZlbnRMaXN0ZW5lcihldmVudDogJ2NoYW5nZScsIGxpc3RlbmVyOiAoY2hhbmdlOiBVc2VyQ2hhbmdlRXZlbnQpID0+IHZvaWQpOiB2b2lkO1xuXHRyZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50OiAnY2hhbmdlJywgbGlzdGVuZXI6IChjaGFuZ2U6IFVzZXJDaGFuZ2VFdmVudCkgPT4gdm9pZCk6IHZvaWQ7XG5cdHNldExhbmd1YWdlKGxhbmd1YWdlOiBzdHJpbmcpOiB2b2lkO1xuXHRnZXRMYW5ndWFnZSgpOiBzdHJpbmc7XG5cdHRyYWNrRXZlbnQobmFtZTogc3RyaW5nLCBwcm9wZXJ0aWVzPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj4pOiB2b2lkO1xufVxuZXhwb3J0IGludGVyZmFjZSBJT25lU2lnbmFsUHVzaFN1YnNjcmlwdGlvbiB7XG5cdGlkOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkO1xuXHR0b2tlbjogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZDtcblx0b3B0ZWRJbjogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblx0b3B0SW4oKTogUHJvbWlzZTx2b2lkPjtcblx0b3B0T3V0KCk6IFByb21pc2U8dm9pZD47XG5cdGFkZEV2ZW50TGlzdGVuZXIoZXZlbnQ6ICdjaGFuZ2UnLCBsaXN0ZW5lcjogKGNoYW5nZTogU3Vic2NyaXB0aW9uQ2hhbmdlRXZlbnQpID0+IHZvaWQpOiB2b2lkO1xuXHRyZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50OiAnY2hhbmdlJywgbGlzdGVuZXI6IChjaGFuZ2U6IFN1YnNjcmlwdGlvbkNoYW5nZUV2ZW50KSA9PiB2b2lkKTogdm9pZDtcbn1cbmZ1bmN0aW9uIG9uZVNpZ25hbExvZ2luKGV4dGVybmFsSWQ6IHN0cmluZywgand0VG9rZW4/OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ09uZVNpZ25hbCBzY3JpcHQgZmFpbGVkIHRvIGxvYWQuJykpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgICBvbmVTaWduYWwubG9naW4oZXh0ZXJuYWxJZCwgand0VG9rZW4pXG4gICAgICAgIC50aGVuKCgpID0+IHJlc29sdmUoKSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHJlamVjdChlcnJvcikpO1xuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIG9uZVNpZ25hbExvZ291dCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ09uZVNpZ25hbCBzY3JpcHQgZmFpbGVkIHRvIGxvYWQuJykpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgICBvbmVTaWduYWwubG9nb3V0KClcbiAgICAgICAgLnRoZW4oKCkgPT4gcmVzb2x2ZSgpKVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgfSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gb25lU2lnbmFsU2V0Q29uc2VudEdpdmVuKGNvbnNlbnQ6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ09uZVNpZ25hbCBzY3JpcHQgZmFpbGVkIHRvIGxvYWQuJykpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgICBvbmVTaWduYWwuc2V0Q29uc2VudEdpdmVuKGNvbnNlbnQpXG4gICAgICAgIC50aGVuKCgpID0+IHJlc29sdmUoKSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHJlamVjdChlcnJvcikpO1xuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIG9uZVNpZ25hbFNldENvbnNlbnRSZXF1aXJlZChyZXF1aXJlc0NvbnNlbnQ6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ09uZVNpZ25hbCBzY3JpcHQgZmFpbGVkIHRvIGxvYWQuJykpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgICBvbmVTaWduYWwuc2V0Q29uc2VudFJlcXVpcmVkKHJlcXVpcmVzQ29uc2VudClcbiAgICAgICAgLnRoZW4oKCkgPT4gcmVzb2x2ZSgpKVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgfSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gc2xpZGVkb3duUHJvbXB0UHVzaChvcHRpb25zPzogQXV0b1Byb21wdE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ09uZVNpZ25hbCBzY3JpcHQgZmFpbGVkIHRvIGxvYWQuJykpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgICBvbmVTaWduYWwuU2xpZGVkb3duLnByb21wdFB1c2gob3B0aW9ucylcbiAgICAgICAgLnRoZW4oKCkgPT4gcmVzb2x2ZSgpKVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgfSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gc2xpZGVkb3duUHJvbXB0UHVzaENhdGVnb3JpZXMob3B0aW9ucz86IEF1dG9Qcm9tcHRPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaWYgKGlzT25lU2lnbmFsU2NyaXB0RmFpbGVkKSB7XG4gICAgICByZWplY3QobmV3IEVycm9yKCdPbmVTaWduYWwgc2NyaXB0IGZhaWxlZCB0byBsb2FkLicpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgICAgb25lU2lnbmFsLlNsaWRlZG93bi5wcm9tcHRQdXNoQ2F0ZWdvcmllcyhvcHRpb25zKVxuICAgICAgICAudGhlbigoKSA9PiByZXNvbHZlKCkpXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiByZWplY3QoZXJyb3IpKTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBzbGlkZWRvd25Qcm9tcHRTbXMob3B0aW9ucz86IEF1dG9Qcm9tcHRPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaWYgKGlzT25lU2lnbmFsU2NyaXB0RmFpbGVkKSB7XG4gICAgICByZWplY3QobmV3IEVycm9yKCdPbmVTaWduYWwgc2NyaXB0IGZhaWxlZCB0byBsb2FkLicpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgICAgb25lU2lnbmFsLlNsaWRlZG93bi5wcm9tcHRTbXMob3B0aW9ucylcbiAgICAgICAgLnRoZW4oKCkgPT4gcmVzb2x2ZSgpKVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgfSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gc2xpZGVkb3duUHJvbXB0RW1haWwob3B0aW9ucz86IEF1dG9Qcm9tcHRPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaWYgKGlzT25lU2lnbmFsU2NyaXB0RmFpbGVkKSB7XG4gICAgICByZWplY3QobmV3IEVycm9yKCdPbmVTaWduYWwgc2NyaXB0IGZhaWxlZCB0byBsb2FkLicpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgICAgb25lU2lnbmFsLlNsaWRlZG93bi5wcm9tcHRFbWFpbChvcHRpb25zKVxuICAgICAgICAudGhlbigoKSA9PiByZXNvbHZlKCkpXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiByZWplY3QoZXJyb3IpKTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBzbGlkZWRvd25Qcm9tcHRTbXNBbmRFbWFpbChvcHRpb25zPzogQXV0b1Byb21wdE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ09uZVNpZ25hbCBzY3JpcHQgZmFpbGVkIHRvIGxvYWQuJykpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgICBvbmVTaWduYWwuU2xpZGVkb3duLnByb21wdFNtc0FuZEVtYWlsKG9wdGlvbnMpXG4gICAgICAgIC50aGVuKCgpID0+IHJlc29sdmUoKSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHJlamVjdChlcnJvcikpO1xuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHNsaWRlZG93bkFkZEV2ZW50TGlzdGVuZXIoZXZlbnQ6IFNsaWRlZG93bkV2ZW50TmFtZSwgbGlzdGVuZXI6ICh3YXNTaG93bjogYm9vbGVhbikgPT4gdm9pZCk6IHZvaWQge1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIG9uZVNpZ25hbC5TbGlkZWRvd24uYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc2xpZGVkb3duUmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudDogU2xpZGVkb3duRXZlbnROYW1lLCBsaXN0ZW5lcjogKHdhc1Nob3duOiBib29sZWFuKSA9PiB2b2lkKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlNsaWRlZG93bi5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBub3RpZmljYXRpb25zU2V0RGVmYXVsdFVybCh1cmw6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignT25lU2lnbmFsIHNjcmlwdCBmYWlsZWQgdG8gbG9hZC4nKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5Ob3RpZmljYXRpb25zLnNldERlZmF1bHRVcmwodXJsKVxuICAgICAgICAudGhlbigoKSA9PiByZXNvbHZlKCkpXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiByZWplY3QoZXJyb3IpKTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBub3RpZmljYXRpb25zU2V0RGVmYXVsdFRpdGxlKHRpdGxlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ09uZVNpZ25hbCBzY3JpcHQgZmFpbGVkIHRvIGxvYWQuJykpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgICBvbmVTaWduYWwuTm90aWZpY2F0aW9ucy5zZXREZWZhdWx0VGl0bGUodGl0bGUpXG4gICAgICAgIC50aGVuKCgpID0+IHJlc29sdmUoKSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHJlamVjdChlcnJvcikpO1xuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIG5vdGlmaWNhdGlvbnNSZXF1ZXN0UGVybWlzc2lvbigpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ09uZVNpZ25hbCBzY3JpcHQgZmFpbGVkIHRvIGxvYWQuJykpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgICBvbmVTaWduYWwuTm90aWZpY2F0aW9ucy5yZXF1ZXN0UGVybWlzc2lvbigpXG4gICAgICAgIC50aGVuKHJlc3VsdCA9PiByZXNvbHZlKHJlc3VsdCkpXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiByZWplY3QoZXJyb3IpKTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBub3RpZmljYXRpb25zQWRkRXZlbnRMaXN0ZW5lcjxLIGV4dGVuZHMgTm90aWZpY2F0aW9uRXZlbnROYW1lPihldmVudDogSywgbGlzdGVuZXI6IChvYmo6IE5vdGlmaWNhdGlvbkV2ZW50VHlwZU1hcFtLXSkgPT4gdm9pZCk6IHZvaWQge1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIG9uZVNpZ25hbC5Ob3RpZmljYXRpb25zLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG5vdGlmaWNhdGlvbnNSZW1vdmVFdmVudExpc3RlbmVyPEsgZXh0ZW5kcyBOb3RpZmljYXRpb25FdmVudE5hbWU+KGV2ZW50OiBLLCBsaXN0ZW5lcjogKG9iajogTm90aWZpY2F0aW9uRXZlbnRUeXBlTWFwW0tdKSA9PiB2b2lkKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLk5vdGlmaWNhdGlvbnMucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc2Vzc2lvblNlbmRPdXRjb21lKG91dGNvbWVOYW1lOiBzdHJpbmcsIG91dGNvbWVXZWlnaHQ/OiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ09uZVNpZ25hbCBzY3JpcHQgZmFpbGVkIHRvIGxvYWQuJykpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgICBvbmVTaWduYWwuU2Vzc2lvbi5zZW5kT3V0Y29tZShvdXRjb21lTmFtZSwgb3V0Y29tZVdlaWdodClcbiAgICAgICAgLnRoZW4oKCkgPT4gcmVzb2x2ZSgpKVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgfSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gc2Vzc2lvblNlbmRVbmlxdWVPdXRjb21lKG91dGNvbWVOYW1lOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ09uZVNpZ25hbCBzY3JpcHQgZmFpbGVkIHRvIGxvYWQuJykpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgICBvbmVTaWduYWwuU2Vzc2lvbi5zZW5kVW5pcXVlT3V0Y29tZShvdXRjb21lTmFtZSlcbiAgICAgICAgLnRoZW4oKCkgPT4gcmVzb2x2ZSgpKVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgfSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gdXNlckFkZEFsaWFzKGxhYmVsOiBzdHJpbmcsIGlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuVXNlci5hZGRBbGlhcyhsYWJlbCwgaWQpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXNlckFkZEFsaWFzZXMoYWxpYXNlczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSk6IHZvaWQge1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIG9uZVNpZ25hbC5Vc2VyLmFkZEFsaWFzZXMoYWxpYXNlcyk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1c2VyUmVtb3ZlQWxpYXMobGFiZWw6IHN0cmluZyk6IHZvaWQge1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIG9uZVNpZ25hbC5Vc2VyLnJlbW92ZUFsaWFzKGxhYmVsKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVzZXJSZW1vdmVBbGlhc2VzKGxhYmVsczogc3RyaW5nW10pOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuVXNlci5yZW1vdmVBbGlhc2VzKGxhYmVscyk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1c2VyQWRkRW1haWwoZW1haWw6IHN0cmluZyk6IHZvaWQge1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIG9uZVNpZ25hbC5Vc2VyLmFkZEVtYWlsKGVtYWlsKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVzZXJSZW1vdmVFbWFpbChlbWFpbDogc3RyaW5nKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIucmVtb3ZlRW1haWwoZW1haWwpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXNlckFkZFNtcyhzbXNOdW1iZXI6IHN0cmluZyk6IHZvaWQge1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIG9uZVNpZ25hbC5Vc2VyLmFkZFNtcyhzbXNOdW1iZXIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXNlclJlbW92ZVNtcyhzbXNOdW1iZXI6IHN0cmluZyk6IHZvaWQge1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIG9uZVNpZ25hbC5Vc2VyLnJlbW92ZVNtcyhzbXNOdW1iZXIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXNlckFkZFRhZyhrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIG9uZVNpZ25hbC5Vc2VyLmFkZFRhZyhrZXksIHZhbHVlKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVzZXJBZGRUYWdzKHRhZ3M6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuVXNlci5hZGRUYWdzKHRhZ3MpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXNlclJlbW92ZVRhZyhrZXk6IHN0cmluZyk6IHZvaWQge1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIG9uZVNpZ25hbC5Vc2VyLnJlbW92ZVRhZyhrZXkpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXNlclJlbW92ZVRhZ3Moa2V5czogc3RyaW5nW10pOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuVXNlci5yZW1vdmVUYWdzKGtleXMpO1xuICB9KTtcbn1cblxuLy8gQHRzLWV4cGVjdC1lcnJvciAtIHJldHVybiBub24tUHJvbWlzZSB0eXBlIGRlc3BpdGUgbmVlZGluZyB0byBhd2FpdCBPbmVTaWduYWxEZWZlcnJlZFxuYXN5bmMgZnVuY3Rpb24gdXNlckdldFRhZ3MoKTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB7XG4gIGxldCByZXRWYWw6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIGF3YWl0IHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgcmV0VmFsID0gb25lU2lnbmFsLlVzZXIuZ2V0VGFncygpO1xuICB9KTtcbiAgLy8gQHRzLWlnbm9yZVxuICByZXR1cm4gcmV0VmFsO1xufVxuXG5mdW5jdGlvbiB1c2VyQWRkRXZlbnRMaXN0ZW5lcihldmVudDogJ2NoYW5nZScsIGxpc3RlbmVyOiAoY2hhbmdlOiBVc2VyQ2hhbmdlRXZlbnQpID0+IHZvaWQpOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuVXNlci5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1c2VyUmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudDogJ2NoYW5nZScsIGxpc3RlbmVyOiAoY2hhbmdlOiBVc2VyQ2hhbmdlRXZlbnQpID0+IHZvaWQpOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuVXNlci5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1c2VyU2V0TGFuZ3VhZ2UobGFuZ3VhZ2U6IHN0cmluZyk6IHZvaWQge1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIG9uZVNpZ25hbC5Vc2VyLnNldExhbmd1YWdlKGxhbmd1YWdlKTtcbiAgfSk7XG59XG5cbi8vIEB0cy1leHBlY3QtZXJyb3IgLSByZXR1cm4gbm9uLVByb21pc2UgdHlwZSBkZXNwaXRlIG5lZWRpbmcgdG8gYXdhaXQgT25lU2lnbmFsRGVmZXJyZWRcbmFzeW5jIGZ1bmN0aW9uIHVzZXJHZXRMYW5ndWFnZSgpOiBzdHJpbmcge1xuICBsZXQgcmV0VmFsOiBzdHJpbmc7XG4gIGF3YWl0IHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgcmV0VmFsID0gb25lU2lnbmFsLlVzZXIuZ2V0TGFuZ3VhZ2UoKTtcbiAgfSk7XG4gIC8vIEB0cy1pZ25vcmVcbiAgcmV0dXJuIHJldFZhbDtcbn1cblxuZnVuY3Rpb24gdXNlclRyYWNrRXZlbnQobmFtZTogc3RyaW5nLCBwcm9wZXJ0aWVzPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj4pOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuVXNlci50cmFja0V2ZW50KG5hbWUsIHByb3BlcnRpZXMpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcHVzaFN1YnNjcmlwdGlvbk9wdEluKCk6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignT25lU2lnbmFsIHNjcmlwdCBmYWlsZWQgdG8gbG9hZC4nKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5Vc2VyLlB1c2hTdWJzY3JpcHRpb24ub3B0SW4oKVxuICAgICAgICAudGhlbigoKSA9PiByZXNvbHZlKCkpXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiByZWplY3QoZXJyb3IpKTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBwdXNoU3Vic2NyaXB0aW9uT3B0T3V0KCk6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignT25lU2lnbmFsIHNjcmlwdCBmYWlsZWQgdG8gbG9hZC4nKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5Vc2VyLlB1c2hTdWJzY3JpcHRpb24ub3B0T3V0KClcbiAgICAgICAgLnRoZW4oKCkgPT4gcmVzb2x2ZSgpKVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgfSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gcHVzaFN1YnNjcmlwdGlvbkFkZEV2ZW50TGlzdGVuZXIoZXZlbnQ6ICdjaGFuZ2UnLCBsaXN0ZW5lcjogKGNoYW5nZTogU3Vic2NyaXB0aW9uQ2hhbmdlRXZlbnQpID0+IHZvaWQpOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuVXNlci5QdXNoU3Vic2NyaXB0aW9uLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHB1c2hTdWJzY3JpcHRpb25SZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50OiAnY2hhbmdlJywgbGlzdGVuZXI6IChjaGFuZ2U6IFN1YnNjcmlwdGlvbkNoYW5nZUV2ZW50KSA9PiB2b2lkKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIuUHVzaFN1YnNjcmlwdGlvbi5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkZWJ1Z1NldExvZ0xldmVsKGxvZ0xldmVsOiAndHJhY2UnIHwgJ2RlYnVnJyB8ICdpbmZvJyB8ICd3YXJuJyB8ICdlcnJvcicpOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuRGVidWcuc2V0TG9nTGV2ZWwobG9nTGV2ZWwpO1xuICB9KTtcbn1cblxuXG5jb25zdCBQdXNoU3Vic2NyaXB0aW9uTmFtZXNwYWNlOiBJT25lU2lnbmFsUHVzaFN1YnNjcmlwdGlvbiA9IHtcblx0Z2V0IGlkKCk6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQgeyByZXR1cm4gd2luZG93Lk9uZVNpZ25hbD8uVXNlcj8uUHVzaFN1YnNjcmlwdGlvbj8uaWQ7IH0sXG5cdGdldCB0b2tlbigpOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHdpbmRvdy5PbmVTaWduYWw/LlVzZXI/LlB1c2hTdWJzY3JpcHRpb24/LnRva2VuOyB9LFxuXHRnZXQgb3B0ZWRJbigpOiBib29sZWFuIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHdpbmRvdy5PbmVTaWduYWw/LlVzZXI/LlB1c2hTdWJzY3JpcHRpb24/Lm9wdGVkSW47IH0sXG5cdG9wdEluOiBwdXNoU3Vic2NyaXB0aW9uT3B0SW4sXG5cdG9wdE91dDogcHVzaFN1YnNjcmlwdGlvbk9wdE91dCxcblx0YWRkRXZlbnRMaXN0ZW5lcjogcHVzaFN1YnNjcmlwdGlvbkFkZEV2ZW50TGlzdGVuZXIsXG5cdHJlbW92ZUV2ZW50TGlzdGVuZXI6IHB1c2hTdWJzY3JpcHRpb25SZW1vdmVFdmVudExpc3RlbmVyLFxufTtcblxuY29uc3QgVXNlck5hbWVzcGFjZTogSU9uZVNpZ25hbFVzZXIgPSB7XG5cdGdldCBvbmVzaWduYWxJZCgpOiBzdHJpbmcgfCB1bmRlZmluZWQgeyByZXR1cm4gd2luZG93Lk9uZVNpZ25hbD8uVXNlcj8ub25lc2lnbmFsSWQ7IH0sXG5cdGdldCBleHRlcm5hbElkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7IHJldHVybiB3aW5kb3cuT25lU2lnbmFsPy5Vc2VyPy5leHRlcm5hbElkOyB9LFxuXHRhZGRBbGlhczogdXNlckFkZEFsaWFzLFxuXHRhZGRBbGlhc2VzOiB1c2VyQWRkQWxpYXNlcyxcblx0cmVtb3ZlQWxpYXM6IHVzZXJSZW1vdmVBbGlhcyxcblx0cmVtb3ZlQWxpYXNlczogdXNlclJlbW92ZUFsaWFzZXMsXG5cdGFkZEVtYWlsOiB1c2VyQWRkRW1haWwsXG5cdHJlbW92ZUVtYWlsOiB1c2VyUmVtb3ZlRW1haWwsXG5cdGFkZFNtczogdXNlckFkZFNtcyxcblx0cmVtb3ZlU21zOiB1c2VyUmVtb3ZlU21zLFxuXHRhZGRUYWc6IHVzZXJBZGRUYWcsXG5cdGFkZFRhZ3M6IHVzZXJBZGRUYWdzLFxuXHRyZW1vdmVUYWc6IHVzZXJSZW1vdmVUYWcsXG5cdHJlbW92ZVRhZ3M6IHVzZXJSZW1vdmVUYWdzLFxuXHRnZXRUYWdzOiB1c2VyR2V0VGFncyxcblx0YWRkRXZlbnRMaXN0ZW5lcjogdXNlckFkZEV2ZW50TGlzdGVuZXIsXG5cdHJlbW92ZUV2ZW50TGlzdGVuZXI6IHVzZXJSZW1vdmVFdmVudExpc3RlbmVyLFxuXHRzZXRMYW5ndWFnZTogdXNlclNldExhbmd1YWdlLFxuXHRnZXRMYW5ndWFnZTogdXNlckdldExhbmd1YWdlLFxuXHR0cmFja0V2ZW50OiB1c2VyVHJhY2tFdmVudCxcblx0UHVzaFN1YnNjcmlwdGlvbjogUHVzaFN1YnNjcmlwdGlvbk5hbWVzcGFjZSxcbn07XG5cbmNvbnN0IFNlc3Npb25OYW1lc3BhY2U6IElPbmVTaWduYWxTZXNzaW9uID0ge1xuXHRzZW5kT3V0Y29tZTogc2Vzc2lvblNlbmRPdXRjb21lLFxuXHRzZW5kVW5pcXVlT3V0Y29tZTogc2Vzc2lvblNlbmRVbmlxdWVPdXRjb21lLFxufTtcblxuY29uc3QgRGVidWdOYW1lc3BhY2U6IElPbmVTaWduYWxEZWJ1ZyA9IHtcblx0c2V0TG9nTGV2ZWw6IGRlYnVnU2V0TG9nTGV2ZWwsXG59O1xuXG5jb25zdCBTbGlkZWRvd25OYW1lc3BhY2U6IElPbmVTaWduYWxTbGlkZWRvd24gPSB7XG5cdHByb21wdFB1c2g6IHNsaWRlZG93blByb21wdFB1c2gsXG5cdHByb21wdFB1c2hDYXRlZ29yaWVzOiBzbGlkZWRvd25Qcm9tcHRQdXNoQ2F0ZWdvcmllcyxcblx0cHJvbXB0U21zOiBzbGlkZWRvd25Qcm9tcHRTbXMsXG5cdHByb21wdEVtYWlsOiBzbGlkZWRvd25Qcm9tcHRFbWFpbCxcblx0cHJvbXB0U21zQW5kRW1haWw6IHNsaWRlZG93blByb21wdFNtc0FuZEVtYWlsLFxuXHRhZGRFdmVudExpc3RlbmVyOiBzbGlkZWRvd25BZGRFdmVudExpc3RlbmVyLFxuXHRyZW1vdmVFdmVudExpc3RlbmVyOiBzbGlkZWRvd25SZW1vdmVFdmVudExpc3RlbmVyLFxufTtcblxuY29uc3QgTm90aWZpY2F0aW9uc05hbWVzcGFjZTogSU9uZVNpZ25hbE5vdGlmaWNhdGlvbnMgPSB7XG5cdGdldCBwZXJtaXNzaW9uTmF0aXZlKCk6IE5vdGlmaWNhdGlvblBlcm1pc3Npb24geyByZXR1cm4gd2luZG93Lk9uZVNpZ25hbD8uTm90aWZpY2F0aW9ucz8ucGVybWlzc2lvbk5hdGl2ZSA/PyAnZGVmYXVsdCc7IH0sXG5cdGdldCBwZXJtaXNzaW9uKCk6IGJvb2xlYW4geyByZXR1cm4gd2luZG93Lk9uZVNpZ25hbD8uTm90aWZpY2F0aW9ucz8ucGVybWlzc2lvbiA/PyBmYWxzZTsgfSxcblx0c2V0RGVmYXVsdFVybDogbm90aWZpY2F0aW9uc1NldERlZmF1bHRVcmwsXG5cdHNldERlZmF1bHRUaXRsZTogbm90aWZpY2F0aW9uc1NldERlZmF1bHRUaXRsZSxcblx0aXNQdXNoU3VwcG9ydGVkLFxuXHRyZXF1ZXN0UGVybWlzc2lvbjogbm90aWZpY2F0aW9uc1JlcXVlc3RQZXJtaXNzaW9uLFxuXHRhZGRFdmVudExpc3RlbmVyOiBub3RpZmljYXRpb25zQWRkRXZlbnRMaXN0ZW5lcixcblx0cmVtb3ZlRXZlbnRMaXN0ZW5lcjogbm90aWZpY2F0aW9uc1JlbW92ZUV2ZW50TGlzdGVuZXIsXG59O1xuXG4vKipcbiAqIEBQdWJsaWNBcGlcbiAqL1xuZnVuY3Rpb24gaXNQdXNoU3VwcG9ydGVkKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gaXNQdXNoTm90aWZpY2F0aW9uc1N1cHBvcnRlZCgpO1xufVxuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5jb25zdCBPTkVTSUdOQUxfU0RLX0lEID0gJ29uZXNpZ25hbC1zZGsnO1xuY29uc3QgT05FX1NJR05BTF9TQ1JJUFRfU1JDID1cbiAgJ2h0dHBzOi8vY2RuLm9uZXNpZ25hbC5jb20vc2Rrcy93ZWIvdjE2L09uZVNpZ25hbFNESy5wYWdlLmpzJztcblxuLy8gdHJ1ZSBpZiB0aGUgc2NyaXB0IGlzIHN1Y2Nlc3NmdWxseSBsb2FkZWQgZnJvbSBDRE4uXG5sZXQgaXNPbmVTaWduYWxJbml0aWFsaXplZCA9IGZhbHNlO1xuLy8gdHJ1ZSBpZiB0aGUgc2NyaXB0IGZhaWxzIHRvIGxvYWQgZnJvbSBDRE4uIEEgc2VwYXJhdGUgZmxhZyBpcyBuZWNlc3Nhcnlcbi8vIHRvIGRpc2FtYmlndWF0ZSBiZXR3ZWVuIGEgQ0ROIGxvYWQgZmFpbHVyZSBhbmQgYSBkZWxheWVkIGNhbGwgdG9cbi8vIE9uZVNpZ25hbCNpbml0LlxubGV0IGlzT25lU2lnbmFsU2NyaXB0RmFpbGVkID0gZmFsc2U7XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQgPSB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQgfHwgW107XG4gIGFkZFNES1NjcmlwdCgpO1xufVxuXG4vKipcbiAqIFRoZSBmb2xsb3dpbmcgY29kZSBpcyBjb3BpZWQgZGlyZWN0bHkgZnJvbSB0aGUgbmF0aXZlIFNESyBzb3VyY2UgZmlsZSBCcm93c2VyU3VwcG9ydHNQdXNoLnRzXG4gKiBTIFQgQSBSIFRcbiAqL1xuXG4vLyBDaGVja3MgaWYgdGhlIGJyb3dzZXIgc3VwcG9ydHMgcHVzaCBub3RpZmljYXRpb25zIGJ5IGNoZWNraW5nIGlmIHNwZWNpZmljXG4vLyAgIGNsYXNzZXMgYW5kIHByb3BlcnRpZXMgb24gdGhlbSBleGlzdFxuZnVuY3Rpb24gaXNQdXNoTm90aWZpY2F0aW9uc1N1cHBvcnRlZCgpOiBib29sZWFuIHtcbiAgcmV0dXJuIHN1cHBvcnRzVmFwaWRQdXNoKCkgfHwgc3VwcG9ydHNTYWZhcmlQdXNoKCk7XG59XG5cbmZ1bmN0aW9uIGlzTWFjT1NTYWZhcmlJbklmcmFtZSgpOiBib29sZWFuIHtcbiAgLy8gRmFsbGJhY2sgZGV0ZWN0aW9uIGZvciBTYWZhcmkgb24gbWFjT1MgaW4gYW4gaWZyYW1lIGNvbnRleHRcbiAgcmV0dXJuIChcbiAgICB3aW5kb3cudG9wICE9PSB3aW5kb3cgJiYgLy8gaXNDb250ZXh0SWZyYW1lXG4gICAgbmF2aWdhdG9yLnZlbmRvciA9PT0gJ0FwcGxlIENvbXB1dGVyLCBJbmMuJyAmJiAvLyBpc1NhZmFyaVxuICAgIG5hdmlnYXRvci5wbGF0Zm9ybSA9PT0gJ01hY0ludGVsJ1xuICApOyAvLyBpc01hY09TXG59XG5cbmZ1bmN0aW9uIHN1cHBvcnRzU2FmYXJpUHVzaCgpOiBib29sZWFuIHtcbiAgcmV0dXJuIChcbiAgICAod2luZG93LnNhZmFyaSAmJiB0eXBlb2Ygd2luZG93LnNhZmFyaS5wdXNoTm90aWZpY2F0aW9uICE9PSAndW5kZWZpbmVkJykgfHxcbiAgICBpc01hY09TU2FmYXJpSW5JZnJhbWUoKVxuICApO1xufVxuXG4vLyBEb2VzIHRoZSBicm93c2VyIHN1cHBvcnQgdGhlIHN0YW5kYXJkIFB1c2ggQVBJXG5mdW5jdGlvbiBzdXBwb3J0c1ZhcGlkUHVzaCgpOiBib29sZWFuIHtcbiAgcmV0dXJuIChcbiAgICB0eXBlb2YgUHVzaFN1YnNjcmlwdGlvbk9wdGlvbnMgIT09ICd1bmRlZmluZWQnICYmXG4gICAgUHVzaFN1YnNjcmlwdGlvbk9wdGlvbnMucHJvdG90eXBlLmhhc093blByb3BlcnR5KCdhcHBsaWNhdGlvblNlcnZlcktleScpXG4gICk7XG59XG4vKiBFIE4gRCAqL1xuXG5mdW5jdGlvbiBoYW5kbGVPbkVycm9yKCk6IHZvaWQge1xuICBpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCA9IHRydWU7XG59XG5cbmZ1bmN0aW9uIGFkZFNES1NjcmlwdCgpOiB2b2lkIHtcbiAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gIHNjcmlwdC5pZCA9IE9ORVNJR05BTF9TREtfSUQ7XG4gIHNjcmlwdC5kZWZlciA9IHRydWU7XG4gIHNjcmlwdC5zcmMgPSBPTkVfU0lHTkFMX1NDUklQVF9TUkM7XG5cbiAgLy8gQWx3YXlzIHJlc29sdmUgd2hldGhlciBvciBub3QgdGhlIHNjcmlwdCBpcyBzdWNjZXNzZnVsbHkgaW5pdGlhbGl6ZWQuXG4gIC8vIFRoaXMgaXMgaW1wb3J0YW50IGZvciB1c2VycyB3aG8gbWF5IGJsb2NrIGNkbi5vbmVzaWduYWwuY29tIHcvIGFkYmxvY2suXG4gIHNjcmlwdC5vbmVycm9yID0gKCkgPT4ge1xuICAgIGhhbmRsZU9uRXJyb3IoKTtcbiAgfTtcblxuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgT25lU2lnbmFsRGVmZXJyZWQ/OiBPbmVTaWduYWxEZWZlcnJlZExvYWRlZENhbGxiYWNrW107XG4gICAgT25lU2lnbmFsPzogSU9uZVNpZ25hbE9uZVNpZ25hbDtcbiAgICBzYWZhcmk/OiB7XG4gICAgICBwdXNoTm90aWZpY2F0aW9uOiBhbnk7XG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElPbmVTaWduYWxPbmVTaWduYWwge1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBPbmVTaWduYWwgaW1wbGVtZW50cyBJT25lU2lnbmFsT25lU2lnbmFsIHtcbiAgW2tleTogc3RyaW5nXTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICAvKiBQIFUgQiBMIEkgQyAqL1xuXG4gIC8qKlxuICAgKiBAUHVibGljQXBpXG4gICAqL1xuICBpbml0KG9wdGlvbnM6IElJbml0T2JqZWN0KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKGlzT25lU2lnbmFsSW5pdGlhbGl6ZWQpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChgT25lU2lnbmFsIGlzIGFscmVhZHkgaW5pdGlhbGl6ZWQuYCk7XG4gICAgfVxuXG4gICAgaWYgKCFvcHRpb25zIHx8ICFvcHRpb25zLmFwcElkKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoJ1lvdSBuZWVkIHRvIHByb3ZpZGUgeW91ciBPbmVTaWduYWwgYXBwSWQuJyk7XG4gICAgfVxuXG4gICAgaWYgKCFkb2N1bWVudCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGBEb2N1bWVudCBpcyBub3QgZGVmaW5lZC5gKTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgYm90aCBkaXNhYmxlZCBhbmQgZGlzYWJsZSBrZXlzIGZvciB3ZWxjb21lIG5vdGlmaWNhdGlvblxuICAgIGlmIChvcHRpb25zLndlbGNvbWVOb3RpZmljYXRpb24/LmRpc2FibGVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIG9wdGlvbnMud2VsY29tZU5vdGlmaWNhdGlvbi5kaXNhYmxlID0gb3B0aW9ucy53ZWxjb21lTm90aWZpY2F0aW9uLmRpc2FibGVkO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgICAgICBvbmVTaWduYWxcbiAgICAgICAgICAuaW5pdChvcHRpb25zKVxuICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGlzT25lU2lnbmFsSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG5cdFVzZXIgPSBVc2VyTmFtZXNwYWNlO1xuXHRTZXNzaW9uID0gU2Vzc2lvbk5hbWVzcGFjZTtcblx0RGVidWcgPSBEZWJ1Z05hbWVzcGFjZTtcblx0U2xpZGVkb3duID0gU2xpZGVkb3duTmFtZXNwYWNlO1xuXHROb3RpZmljYXRpb25zID0gTm90aWZpY2F0aW9uc05hbWVzcGFjZTtcblx0bG9naW4gPSBvbmVTaWduYWxMb2dpbjtcblx0bG9nb3V0ID0gb25lU2lnbmFsTG9nb3V0O1xuXHRzZXRDb25zZW50R2l2ZW4gPSBvbmVTaWduYWxTZXRDb25zZW50R2l2ZW47XG5cdHNldENvbnNlbnRSZXF1aXJlZCA9IG9uZVNpZ25hbFNldENvbnNlbnRSZXF1aXJlZDtcbn1cbiJdfQ==