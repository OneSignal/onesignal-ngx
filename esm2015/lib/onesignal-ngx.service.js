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
function oneSignalUpdateUserJwt(externalId, token) {
    return new Promise((resolve, reject) => {
        var _a;
        if (isOneSignalScriptFailed) {
            reject(new Error('OneSignal script failed to load.'));
            return;
        }
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
            oneSignal.updateUserJwt(externalId, token)
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
const DEFAULT_SCRIPT_SRC = 'https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js';
let isOneSignalInitialized = false;
let isOneSignalScriptFailed = false;
let pendingInitReject;
if (typeof window !== 'undefined') {
    window.OneSignalDeferred = window.OneSignalDeferred || [];
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
    pendingInitReject === null || pendingInitReject === void 0 ? void 0 : pendingInitReject(new Error('OneSignal script failed to load.'));
    pendingInitReject = undefined;
}
function addSDKScript(scriptSrc) {
    if (document.getElementById(ONESIGNAL_SDK_ID)) {
        return;
    }
    const script = document.createElement('script');
    script.id = ONESIGNAL_SDK_ID;
    script.defer = true;
    script.src = scriptSrc || DEFAULT_SCRIPT_SRC;
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
        this.updateUserJwt = oneSignalUpdateUserJwt;
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
        // Required: the CDN script silently exits on unsupported browsers without
        // draining OneSignalDeferred, so init() would hang forever otherwise.
        if (!isPushNotificationsSupported()) {
            return Promise.reject(new Error('This browser does not support Web Push notifications.'));
        }
        // Handle both disabled and disable keys for welcome notification
        if (((_a = options.welcomeNotification) === null || _a === void 0 ? void 0 : _a.disabled) !== undefined) {
            options.welcomeNotification.disable = options.welcomeNotification.disabled;
        }
        addSDKScript(options.scriptSrc);
        return new Promise((resolve, reject) => {
            var _a;
            pendingInitReject = reject;
            (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
                oneSignal
                    .init(options)
                    .then(() => {
                    isOneSignalInitialized = true;
                    pendingInitReject = undefined;
                    resolve();
                })
                    .catch((err) => {
                    pendingInitReject = undefined;
                    reject(err);
                });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25lc2lnbmFsLW5neC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvb25lc2lnbmFsLW5neC9zcmMvbGliL29uZXNpZ25hbC1uZ3guc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBMGFBLFNBQVMsY0FBYyxDQUFDLFVBQWtCLEVBQUUsUUFBaUI7SUFDM0QsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTs7UUFDckMsSUFBSSx1QkFBdUIsRUFBRTtZQUMzQixNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsa0NBQWtDLENBQUMsQ0FBQyxDQUFDO1lBQ3RELE9BQU87U0FDUjtRQUVELE1BQUEsTUFBTSxDQUFDLGlCQUFpQiwwQ0FBRSxJQUFJLENBQUMsQ0FBQyxTQUE4QixFQUFFLEVBQUU7WUFDaEUsU0FBUyxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDO2lCQUNsQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7aUJBQ3JCLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ25DLENBQUMsRUFBRTtJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUNELFNBQVMsZUFBZTtJQUN0QixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFOztRQUNyQyxJQUFJLHVCQUF1QixFQUFFO1lBQzNCLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDLENBQUM7WUFDdEQsT0FBTztTQUNSO1FBRUQsTUFBQSxNQUFNLENBQUMsaUJBQWlCLDBDQUFFLElBQUksQ0FBQyxDQUFDLFNBQThCLEVBQUUsRUFBRTtZQUNoRSxTQUFTLENBQUMsTUFBTSxFQUFFO2lCQUNmLElBQUksQ0FBQyxHQUFH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ZmFjZSBBdXRvUHJvbXB0T3B0aW9ucyB7IGZvcmNlPzogYm9vbGVhbjsgZm9yY2VTbGlkZWRvd25PdmVyTmF0aXZlPzogYm9vbGVhbjsgc2xpZGVkb3duUHJvbXB0T3B0aW9ucz86IElPbmVTaWduYWxBdXRvUHJvbXB0T3B0aW9uczsgfVxuZXhwb3J0IGludGVyZmFjZSBJT25lU2lnbmFsQXV0b1Byb21wdE9wdGlvbnMgeyBmb3JjZT86IGJvb2xlYW47IGZvcmNlU2xpZGVkb3duT3Zlck5hdGl2ZT86IGJvb2xlYW47IGlzSW5VcGRhdGVNb2RlPzogYm9vbGVhbjsgY2F0ZWdvcnlPcHRpb25zPzogSU9uZVNpZ25hbENhdGVnb3JpZXM7IH1cbmV4cG9ydCBpbnRlcmZhY2UgSU9uZVNpZ25hbENhdGVnb3JpZXMgeyBwb3NpdGl2ZVVwZGF0ZUJ1dHRvbjogc3RyaW5nOyBuZWdhdGl2ZVVwZGF0ZUJ1dHRvbjogc3RyaW5nOyBzYXZpbmdCdXR0b25UZXh0OiBzdHJpbmc7IGVycm9yQnV0dG9uVGV4dDogc3RyaW5nOyB1cGRhdGVNZXNzYWdlOiBzdHJpbmc7IHRhZ3M6IElPbmVTaWduYWxUYWdDYXRlZ29yeVtdOyB9XG5leHBvcnQgaW50ZXJmYWNlIElPbmVTaWduYWxUYWdDYXRlZ29yeSB7IHRhZzogc3RyaW5nOyBsYWJlbDogc3RyaW5nOyBjaGVja2VkPzogYm9vbGVhbjsgfVxuZXhwb3J0IHR5cGUgUHVzaFN1YnNjcmlwdGlvbk5hbWVzcGFjZVByb3BlcnRpZXMgPSB7IGlkOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkOyB0b2tlbjogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZDsgb3B0ZWRJbjogYm9vbGVhbjsgfTtcbmV4cG9ydCB0eXBlIFN1YnNjcmlwdGlvbkNoYW5nZUV2ZW50ID0geyBwcmV2aW91czogUHVzaFN1YnNjcmlwdGlvbk5hbWVzcGFjZVByb3BlcnRpZXM7IGN1cnJlbnQ6IFB1c2hTdWJzY3JpcHRpb25OYW1lc3BhY2VQcm9wZXJ0aWVzOyB9O1xuZXhwb3J0IHR5cGUgTm90aWZpY2F0aW9uRXZlbnROYW1lID0gJ2NsaWNrJyB8ICdmb3JlZ3JvdW5kV2lsbERpc3BsYXknIHwgJ2Rpc21pc3MnIHwgJ3Blcm1pc3Npb25DaGFuZ2UnIHwgJ3Blcm1pc3Npb25Qcm9tcHREaXNwbGF5JztcbmV4cG9ydCB0eXBlIFNsaWRlZG93bkV2ZW50TmFtZSA9ICdzbGlkZWRvd25BbGxvd0NsaWNrJyB8ICdzbGlkZWRvd25DYW5jZWxDbGljaycgfCAnc2xpZGVkb3duQ2xvc2VkJyB8ICdzbGlkZWRvd25RdWV1ZWQnIHwgJ3NsaWRlZG93blNob3duJztcbmV4cG9ydCB0eXBlIE9uZVNpZ25hbERlZmVycmVkTG9hZGVkQ2FsbGJhY2sgPSAob25lc2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB2b2lkO1xuZXhwb3J0IGludGVyZmFjZSBJT1NOb3RpZmljYXRpb24ge1xuICAvKipcbiAgICogVGhlIE9uZVNpZ25hbCBub3RpZmljYXRpb24gaWQ7XG4gICAqICAtIFByaW1hcnkgaWQgb24gT25lU2lnbmFsJ3MgUkVTVCBBUEkgYW5kIGRhc2hib2FyZFxuICAgKi9cbiAgcmVhZG9ubHkgbm90aWZpY2F0aW9uSWQ6IHN0cmluZztcblxuICAvKipcbiAgICogVmlzaWJsZSB0aXRsZSB0ZXh0IG9uIHRoZSBub3RpZmljYXRpb25cbiAgICovXG4gIHJlYWRvbmx5IHRpdGxlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBWaXNpYmxlIGJvZHkgdGV4dCBvbiB0aGUgbm90aWZpY2F0aW9uXG4gICAqL1xuICByZWFkb25seSBib2R5OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFZpc2libGUgaWNvbiB0aGUgbm90aWZpY2F0aW9uOyBVUkwgZm9ybWF0XG4gICAqL1xuICByZWFkb25seSBpY29uPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBWaXNpYmxlIHNtYWxsIGJhZGdlSWNvbiB0aGF0IGRpc3BsYXlzIG9uIHNvbWUgZGV2aWNlczsgVVJMIGZvcm1hdFxuICAgKiBFeGFtcGxlOiBPbiBBbmRyb2lkJ3Mgc3RhdHVzIGJhclxuICAgKi9cbiAgcmVhZG9ubHkgYmFkZ2VJY29uPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBWaXNpYmxlIGltYWdlIG9uIHRoZSBub3RpZmljYXRpb247IFVSTCBmb3JtYXRcbiAgICovXG4gIHJlYWRvbmx5IGltYWdlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBWaXNpYmxlIGJ1dHRvbnMgb24gdGhlIG5vdGlmaWNhdGlvblxuICAgKi9cbiAgcmVhZG9ubHkgYWN0aW9uQnV0dG9ucz86IElPU05vdGlmaWNhdGlvbkFjdGlvbkJ1dHRvbltdO1xuXG4gIC8qKlxuICAgKiBJZiB0aGlzIHZhbHVlIGlzIHRoZSBzYW1lIGFzIGV4aXN0aW5nIG5vdGlmaWNhdGlvbiwgaXQgd2lsbCByZXBsYWNlIGl0XG4gICAqIENhbiBiZSBzZXQgd2hlbiBjcmVhdGluZyB0aGUgbm90aWZpY2F0aW9uIHdpdGggXCJXZWIgUHVzaCBUb3BpY1wiIG9uIHRoZSBkYXNoYm9hcmRcbiAgICogb3Igd2ViX3B1c2hfdG9waWMgZnJvbSB0aGUgUkVTVCBBUEkuXG4gICAqL1xuICByZWFkb25seSB0b3BpYz86IHN0cmluZztcblxuICAvKipcbiAgICogQ3VzdG9tIG9iamVjdCB0aGF0IHdhcyBzZW50IHdpdGggdGhlIG5vdGlmaWNhdGlvbjtcbiAgICogZGVmaW5hYmxlIHdoZW4gY3JlYXRpbmcgdGhlIG5vdGlmaWNhdGlvbiBmcm9tIHRoZSBPbmVTaWduYWwgUkVTVCBBUEkgb3IgZGFzaGJvYXJkXG4gICAqL1xuICByZWFkb25seSBhZGRpdGlvbmFsRGF0YT86IG9iamVjdDtcblxuICAvKipcbiAgICogVVJMIHRvIG9wZW4gd2hlbiBjbGlja2luZyBvciB0YXBwaW5nIG9uIHRoZSBub3RpZmljYXRpb25cbiAgICovXG4gIHJlYWRvbmx5IGxhdW5jaFVSTD86IHN0cmluZztcblxuICAvKipcbiAgICogQ29uZmlybSB0aGUgcHVzaCB3YXMgcmVjZWl2ZWQgYnkgcmVwb3J0aW5nIGJhY2sgdG8gT25lU2lnbmFsXG4gICAqL1xuICByZWFkb25seSBjb25maXJtRGVsaXZlcnk6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU9TTm90aWZpY2F0aW9uQWN0aW9uQnV0dG9uIHtcbiAgLyoqXG4gICAqIEFueSB1bmlxdWUgaWRlbnRpZmllciB0byByZXByZXNlbnQgd2hpY2ggYnV0dG9uIHdhcyBjbGlja2VkLiBUaGlzIGlzIHR5cGljYWxseSBwYXNzZWQgYmFjayB0byB0aGUgc2VydmljZSB3b3JrZXJcbiAgICogYW5kIGhvc3QgcGFnZSB0aHJvdWdoIGV2ZW50cyB0byBpZGVudGlmeSB3aGljaCBidXR0b24gd2FzIGNsaWNrZWQuXG4gICAqIGUuZy4gJ2xpa2UtYnV0dG9uJ1xuICAgKi9cbiAgcmVhZG9ubHkgYWN0aW9uSWQ6IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBub3RpZmljYXRpb24gYWN0aW9uIGJ1dHRvbidzIHRleHQuXG4gICAqL1xuICByZWFkb25seSB0ZXh0OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBBIHZhbGlkIHB1YmxpY2x5IHJlYWNoYWJsZSBIVFRQUyBVUkwgdG8gYW4gaW1hZ2UuXG4gICAqL1xuICByZWFkb25seSBpY29uPzogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIFVSTCB0byBvcGVuIHRoZSB3ZWIgYnJvd3NlciB0byB3aGVuIHRoaXMgYWN0aW9uIGJ1dHRvbiBpcyBjbGlja2VkLlxuICAgKi9cbiAgcmVhZG9ubHkgbGF1bmNoVVJMPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElEaXNwbGF5YWJsZU9TTm90aWZpY2F0aW9uIGV4dGVuZHMgSU9TTm90aWZpY2F0aW9uIHtcbiAgZGlzcGxheSgpOiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5vdGlmaWNhdGlvbkNsaWNrUmVzdWx0IHtcbiAgcmVhZG9ubHkgYWN0aW9uSWQ/OiBzdHJpbmc7XG4gIHJlYWRvbmx5IHVybD86IHN0cmluZztcbn1cblxuZXhwb3J0IHR5cGUgTm90aWZpY2F0aW9uRXZlbnRUeXBlTWFwID0ge1xuICAnY2xpY2snOiBOb3RpZmljYXRpb25DbGlja0V2ZW50O1xuICAnZm9yZWdyb3VuZFdpbGxEaXNwbGF5JzogTm90aWZpY2F0aW9uRm9yZWdyb3VuZFdpbGxEaXNwbGF5RXZlbnQ7XG4gICdkaXNtaXNzJzogTm90aWZpY2F0aW9uRGlzbWlzc0V2ZW50O1xuICAncGVybWlzc2lvbkNoYW5nZSc6IGJvb2xlYW47XG4gICdwZXJtaXNzaW9uUHJvbXB0RGlzcGxheSc6IHZvaWQ7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIE5vdGlmaWNhdGlvbkZvcmVncm91bmRXaWxsRGlzcGxheUV2ZW50IHtcbiAgcmVhZG9ubHkgbm90aWZpY2F0aW9uOiBJRGlzcGxheWFibGVPU05vdGlmaWNhdGlvbjtcbiAgcHJldmVudERlZmF1bHQoKTogdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOb3RpZmljYXRpb25EaXNtaXNzRXZlbnQge1xuICBub3RpZmljYXRpb246IElPU05vdGlmaWNhdGlvbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOb3RpZmljYXRpb25DbGlja0V2ZW50IHtcbiAgcmVhZG9ubHkgbm90aWZpY2F0aW9uOiBJT1NOb3RpZmljYXRpb247XG4gIHJlYWRvbmx5IHJlc3VsdDogTm90aWZpY2F0aW9uQ2xpY2tSZXN1bHQ7XG59XG5cbmV4cG9ydCB0eXBlIFVzZXJDaGFuZ2VFdmVudCA9IHtcbiAgY3VycmVudDogVXNlck5hbWVzcGFjZVByb3BlcnRpZXM7XG59O1xuZXhwb3J0IHR5cGUgVXNlckp3dEludmFsaWRhdGVkRXZlbnQgPSB7XG4gIGV4dGVybmFsSWQ6IHN0cmluZztcbn07XG5leHBvcnQgdHlwZSBVc2VyRXZlbnROYW1lID0gJ2NoYW5nZScgfCAndXNlckp3dEludmFsaWRhdGVkJztcbmV4cG9ydCB0eXBlIFVzZXJFdmVudFR5cGVNYXAgPSB7XG4gIGNoYW5nZTogVXNlckNoYW5nZUV2ZW50O1xuICB1c2VySnd0SW52YWxpZGF0ZWQ6IFVzZXJKd3RJbnZhbGlkYXRlZEV2ZW50O1xufTtcbmV4cG9ydCB0eXBlIFVzZXJOYW1lc3BhY2VQcm9wZXJ0aWVzID0ge1xuICBvbmVzaWduYWxJZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBleHRlcm5hbElkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIElJbml0T2JqZWN0IHtcbiAgYXBwSWQ6IHN0cmluZztcbiAgcmVxdWlyZXNVc2VyUHJpdmFjeUNvbnNlbnQ/OiBib29sZWFuO1xuICBzYWZhcmlfd2ViX2lkPzogc3RyaW5nO1xuICBzdWJkb21haW5OYW1lPzogc3RyaW5nO1xuICBwcm9tcHRPcHRpb25zPzoge1xuICAgIHNsaWRlZG93bjoge1xuICAgICAgcHJvbXB0czoge1xuICAgICAgICAvKipcbiAgICAgICAgICogV2hldGhlciB0byBhdXRvbWF0aWNhbGx5IGRpc3BsYXkgdGhlIHByb21wdC5cbiAgICAgICAgICogYHRydWVgIHdpbGwgZGlzcGxheSB0aGUgcHJvbXB0IGJhc2VkIG9uIHRoZSBkZWxheSBvcHRpb25zLlxuICAgICAgICAgKiBgZmFsc2VgIHdpbGwgcHJldmVudCB0aGUgcHJvbXB0IGZyb20gZGlzcGxheWluZyB1bnRpbCB0aGUgU2xpZGVkb3ducyBtZXRob2RzIGFyZSB1c2VkLlxuICAgICAgICAgKi9cbiAgICAgICAgYXV0b1Byb21wdDogYm9vbGVhbjtcblxuICAgICAgICAvKipcbiAgICAgICAgICogT25seSBhdmFpbGFibGUgZm9yIHR5cGU6IGNhdGVnb3J5LiBVcCB0byAxMCBjYXRlZ29yaWVzLlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiAgY2F0ZWdvcmllczogW3sgdGFnOiAnbG9jYWxfbmV3cycsIGxhYmVsOiAnTG9jYWwgTmV3cycgfV0gLy8gVGhlIHVzZXIgd2lsbCBiZSB0YWdnZWQgd2l0aCBsb2NhbF9uZXdzIGJ1dCB3aWxsIHNlZSBcIkxvY2FsIE5ld3NcIiBpbiB0aGUgcHJvbXB0LlxuICAgICAgICAgKi9cbiAgICAgICAgY2F0ZWdvcmllcz86IHtcbiAgICAgICAgICAvKiogU2hvdWxkIGlkZW50aWZ5IHRoZSBhY3Rpb24uICovXG4gICAgICAgICAgdGFnOiBzdHJpbmc7XG5cbiAgICAgICAgICAvKiogV2hhdCB0aGUgdXNlciB3aWxsIHNlZS4gKi9cbiAgICAgICAgICBsYWJlbDogc3RyaW5nO1xuICAgICAgICB9W107XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBkZWxheSBvcHRpb25zIGZvciB0aGUgcHJvbXB0LlxuICAgICAgICAgKiBAZXhhbXBsZSBkZWxheTogeyBwYWdlVmlld3M6IDMsIHRpbWVEZWxheTogMjAgfSAvLyBUaGUgdXNlciB3aWxsIG5vdCBiZSBzaG93biB0aGUgcHJvbXB0IHVudGlsIDIwIHNlY29uZHMgYWZ0ZXIgdGhlIDNyZCBwYWdlIHZpZXcuXG4gICAgICAgICAqL1xuICAgICAgICBkZWxheToge1xuICAgICAgICAgIC8qKiBUaGUgbnVtYmVyIG9mIHBhZ2VzIGEgdXNlciBuZWVkcyB0byB2aXNpdCBiZWZvcmUgdGhlIHByb21wdCBpcyBkaXNwbGF5ZWQuICovXG4gICAgICAgICAgcGFnZVZpZXdzPzogbnVtYmVyO1xuXG4gICAgICAgICAgLyoqIFRoZSBudW1iZXIgb2Ygc2Vjb25kcyBhIHVzZXIgbmVlZHMgdG8gd2FpdCBiZWZvcmUgdGhlIHByb21wdCBpcyBkaXNwbGF5ZWQuQm90aCBvcHRpb25zIG11c3QgYmUgc2F0aXNmaWVkIGZvciB0aGUgcHJvbXB0IHRvIGRpc3BsYXkgKi9cbiAgICAgICAgICB0aW1lRGVsYXk/OiBudW1iZXI7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB0ZXh0IHRvIGRpc3BsYXkgaW4gdGhlIHByb21wdC5cbiAgICAgICAgICovXG4gICAgICAgIHRleHQ/OiB7XG4gICAgICAgICAgLyoqIFRoZSBjYWxsb3V0IGFza2luZyB0aGUgdXNlciB0byBvcHQtaW4uIFVwIHRvIDkwIGNoYXJhY3RlcnMuICovXG4gICAgICAgICAgYWN0aW9uTWVzc2FnZT86IHN0cmluZztcblxuICAgICAgICAgIC8qKiBUcmlnZ2VycyB0aGUgb3B0LWluLiBVcCB0byAxNSBjaGFyYWN0ZXJzLiAqL1xuICAgICAgICAgIGFjY2VwdEJ1dHRvbj86IHN0cmluZztcblxuICAgICAgICAgIC8qKiBDYW5jZWxzIG9wdC1pbi4gVXAgdG8gMTUgY2hhcmFjdGVycy4gKi9cbiAgICAgICAgICBjYW5jZWxCdXR0b24/OiBzdHJpbmc7XG5cbiAgICAgICAgICAvKiogVGhlIG1lc3NhZ2Ugb2YgdGhlIGNvbmZpcm1hdGlvbiBwcm9tcHQgZGlzcGxheWVkIGFmdGVyIHRoZSBlbWFpbCBhbmQvb3IgcGhvbmUgbnVtYmVyIGlzIHByb3ZpZGVkLiBVcCB0byA5MCBjaGFyYWN0ZXJzLiAqL1xuICAgICAgICAgIGNvbmZpcm1NZXNzYWdlPzogc3RyaW5nO1xuXG4gICAgICAgICAgLyoqIElkZW50aWZpZXMgdGhlIGVtYWlsIHRleHQgZmllbGQuIFVwIHRvIDE1IGNoYXJhY3RlcnMuICovXG4gICAgICAgICAgZW1haWxMYWJlbD86IHN0cmluZztcblxuICAgICAgICAgIC8qKiBDYW5jZWxzIHRoZSBjYXRlZ29yeSB1cGRhdGUuIFVwIHRvIDE1IGNoYXJhY3RlcnMuICovXG4gICAgICAgICAgbmVnYXRpdmVVcGRhdGVCdXR0b24/OiBzdHJpbmc7XG5cbiAgICAgICAgICAvKiogU2F2ZXMgdGhlIHVwZGF0ZWQgY2F0ZWdvcnkgdGFncy4gVXAgdG8gMTUgY2hhcmFjdGVycy4gKi9cbiAgICAgICAgICBwb3NpdGl2ZVVwZGF0ZUJ1dHRvbj86IHN0cmluZztcblxuICAgICAgICAgIC8qKiBJZGVudGlmaWVzIHRoZSBwaG9uZSBudW1iZXIgdGV4dCBmaWVsZC4gVXAgdG8gMTUgY2hhcmFjdGVycy4gKi9cbiAgICAgICAgICBzbXNMYWJlbD86IHN0cmluZztcblxuICAgICAgICAgIC8qKiBBIGRpZmZlcmVudCBtZXNzYWdlIHNob3duIHRvIHN1YnNjcmliZXJzIHByZXNlbnRlZCB0aGUgcHJvbXB0IGFnYWluIHRvIHVwZGF0ZSBjYXRlZ29yaWVzLiBVcCB0byA5MCBjaGFyYWN0ZXJzLiAqL1xuICAgICAgICAgIHVwZGF0ZU1lc3NhZ2U/OiBzdHJpbmc7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB0eXBlIG9mIHByb21wdCB0byBkaXNwbGF5LlxuICAgICAgICAgKiBgcHVzaGAgd2hpY2ggaXMgdGhlIFNsaWRlIFByb21wdCB3aXRob3V0IGNhdGVnb3JpZXMuXG4gICAgICAgICAqIGBjYXRlZ29yeWAgd2hpY2ggaXMgdGhlIFNsaWRlIFByb21wdCB3aXRoIGNhdGVnb3JpZXMuXG4gICAgICAgICAqIGBzbXNgIG9ubHkgYXNrcyBmb3IgcGhvbmUgbnVtYmVyLlxuICAgICAgICAgKiBgZW1haWxgIG9ubHkgYXNrcyBmb3IgZW1haWwgYWRkcmVzcy5cbiAgICAgICAgICogYHNtc0FuZEVtYWlsYCBhc2tzIGZvciBib3RoIHBob25lIG51bWJlciBhbmQgZW1haWwgYWRkcmVzcy5cbiAgICAgICAgICovXG4gICAgICAgIHR5cGU6ICdwdXNoJyB8ICdjYXRlZ29yeScgfCAnc21zJyB8ICdlbWFpbCcgfCAnc21zQW5kRW1haWwnO1xuICAgICAgfVtdO1xuICAgIH07XG4gIH07XG4gIHdlbGNvbWVOb3RpZmljYXRpb24/OiB7XG4gICAgLyoqXG4gICAgICogRGlzYWJsZXMgc2VuZGluZyBhIHdlbGNvbWUgbm90aWZpY2F0aW9uIHRvIG5ldyBzaXRlIHZpc2l0b3JzLiBJZiB5b3Ugd2FudCB0byBkaXNhYmxlIHdlbGNvbWUgbm90aWZpY2F0aW9ucywgdGhpcyBpcyB0aGUgb25seSBvcHRpb24geW91IG5lZWQuXG4gICAgICogQGRlcHJlY2F0ZWQgVXNlICdkaXNhYmxlJyBpbnN0ZWFkLiBUaGlzIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSB2ZXJzaW9uLlxuICAgICAqL1xuICAgIGRpc2FibGVkPzogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIERpc2FibGVzIHNlbmRpbmcgYSB3ZWxjb21lIG5vdGlmaWNhdGlvbiB0byBuZXcgc2l0ZSB2aXNpdG9ycy4gSWYgeW91IHdhbnQgdG8gZGlzYWJsZSB3ZWxjb21lIG5vdGlmaWNhdGlvbnMsIHRoaXMgaXMgdGhlIG9ubHkgb3B0aW9uIHlvdSBuZWVkLlxuICAgICAqL1xuICAgIGRpc2FibGU/OiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHdlbGNvbWUgbm90aWZpY2F0aW9uJ3MgbWVzc2FnZS4gWW91IGNhbiBsb2NhbGl6ZSB0aGlzIHRvIHlvdXIgb3duIGxhbmd1YWdlLlxuICAgICAqIElmIGxlZnQgYmxhbmsgb3Igc2V0IHRvIGJsYW5rLCB0aGUgZGVmYXVsdCBvZiAnVGhhbmtzIGZvciBzdWJzY3JpYmluZyEnIHdpbGwgYmUgdXNlZC5cbiAgICAgKi9cbiAgICBtZXNzYWdlOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgd2VsY29tZSBub3RpZmljYXRpb24ncyB0aXRsZS4gWW91IGNhbiBsb2NhbGl6ZSB0aGlzIHRvIHlvdXIgb3duIGxhbmd1YWdlLiBJZiBub3Qgc2V0LCBvciBsZWZ0IGJsYW5rLCB0aGUgc2l0ZSdzIHRpdGxlIHdpbGwgYmUgdXNlZC5cbiAgICAgKiBTZXQgdG8gb25lIHNwYWNlICcgJyB0byBjbGVhciB0aGUgdGl0bGUsIGFsdGhvdWdoIHRoaXMgaXMgbm90IHJlY29tbWVuZGVkLlxuICAgICAqL1xuICAgIHRpdGxlPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQnkgZGVmYXVsdCwgY2xpY2tpbmcgdGhlIHdlbGNvbWUgbm90aWZpY2F0aW9uIGRvZXMgbm90IG9wZW4gYW55IGxpbmsuXG4gICAgICogVGhpcyBpcyByZWNvbW1lbmRlZCBiZWNhdXNlIHRoZSB1c2VyIGhhcyBqdXN0IHZpc2l0ZWQgeW91ciBzaXRlIGFuZCBzdWJzY3JpYmVkLlxuICAgICAqL1xuICAgIHVybD86IHN0cmluZztcbiAgfTtcblxuICAvKipcbiAgICogV2lsbCBlbmFibGUgY3VzdG9taXphdGlvbiBvZiB0aGUgbm90aWZ5L3N1YnNjcmlwdGlvbiBiZWxsIGJ1dHRvbi5cbiAgICovXG4gIG5vdGlmeUJ1dHRvbj86IHtcbiAgICAvKipcbiAgICAgKiBBIGZ1bmN0aW9uIHlvdSBkZWZpbmUgdGhhdCByZXR1cm5zIHRydWUgdG8gc2hvdyB0aGUgU3Vic2NyaXB0aW9uIEJlbGwsIG9yIGZhbHNlIHRvIGhpZGUgaXQuXG4gICAgICogVHlwaWNhbGx5IHVzZWQgdGhlIGhpZGUgdGhlIFN1YnNjcmlwdGlvbiBCZWxsIGFmdGVyIHRoZSB1c2VyIGlzIHN1YnNjcmliZWQuXG4gICAgICogVGhpcyBmdW5jdGlvbiBpcyBub3QgcmUtZXZhbHVhdGVkIG9uIGV2ZXJ5IHN0YXRlIGNoYW5nZTsgdGhpcyBmdW5jdGlvbiBpcyBvbmx5IGV2YWx1YXRlZCBvbmNlIHdoZW4gdGhlIFN1YnNjcmlwdGlvbiBCZWxsIGJlZ2lucyB0byBzaG93LlxuICAgICAqL1xuICAgIGRpc3BsYXlQcmVkaWNhdGU/OiAoKSA9PiBib29sZWFuIHwgUHJvbWlzZTxib29sZWFuPjtcblxuICAgIC8qKlxuICAgICAqIEVuYWJsZSB0aGUgU3Vic2NyaXB0aW9uIEJlbGwuIFRoZSBTdWJzY3JpcHRpb24gQmVsbCBpcyBvdGhlcndpc2UgZGlzYWJsZWQgYnkgZGVmYXVsdC5cbiAgICAgKi9cbiAgICBlbmFibGU/OiBib29sZWFuO1xuXG4gICAgLyoqIFNwZWNpZnkgQ1NTLXZhbGlkIHBpeGVsIG9mZnNldHMgdXNpbmcgYm90dG9tLCBsZWZ0LCBhbmQgcmlnaHQuICovXG4gICAgb2Zmc2V0PzogeyBib3R0b206IHN0cmluZzsgbGVmdDogc3RyaW5nOyByaWdodDogc3RyaW5nIH07XG5cbiAgICAvKipcbiAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBTdWJzY3JpcHRpb24gQmVsbCB3aWxsIGRpc3BsYXkgYW4gaWNvbiB0aGF0IHRoZXJlIGlzIDEgdW5yZWFkIG1lc3NhZ2UuXG4gICAgICogV2hlbiBob3ZlcmluZyBvdmVyIHRoZSBTdWJzY3JpcHRpb24gQmVsbCwgdGhlIHVzZXIgd2lsbCBzZWUgY3VzdG9tIHRleHQgc2V0IGJ5IG1lc3NhZ2UucHJlbm90aWZ5LlxuICAgICAqL1xuICAgIHByZW5vdGlmeTogYm9vbGVhbjtcblxuICAgIC8qKiBFaXRoZXIgYGJvdHRvbS1sZWZ0YCBvciBgYm90dG9tLXJpZ2h0YC4gVGhlIFN1YnNjcmlwdGlvbiBCZWxsIHdpbGwgYmUgZml4ZWQgYXQgdGhpcyBsb2NhdGlvbiBvbiB5b3VyIHBhZ2UuICovXG4gICAgcG9zaXRpb24/OiAnYm90dG9tLWxlZnQnIHwgJ2JvdHRvbS1yaWdodCc7XG5cbiAgICAvKiogIFNldCBgZmFsc2VgIHRvIGhpZGUgdGhlICdQb3dlcmVkIGJ5IE9uZVNpZ25hbCcgdGV4dCBpbiB0aGUgU3Vic2NyaXB0aW9uIEJlbGwgZGlhbG9nIHBvcHVwLiAqL1xuICAgIHNob3dDcmVkaXQ6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBUaGUgU3Vic2NyaXB0aW9uIEJlbGwgd2lsbCBpbml0aWFsbHkgYXBwZWFyIGF0IG9uZSBvZiB0aGVzZSBzaXplcywgYW5kIHRoZW4gc2hyaW5rIGRvd24gdG8gc2l6ZSBgc21hbGxgIGFmdGVyIHRoZSB1c2VyIHN1YnNjcmliZXMuXG4gICAgICovXG4gICAgc2l6ZT86ICdzbWFsbCcgfCAnbWVkaXVtJyB8ICdsYXJnZSc7XG5cbiAgICAvKiogQ3VzdG9taXplIHRoZSBTdWJzY3JpcHRpb24gQmVsbCB0ZXh0LiAqL1xuICAgIHRleHQ6IHtcbiAgICAgICdkaWFsb2cuYmxvY2tlZC5tZXNzYWdlJzogc3RyaW5nO1xuICAgICAgJ2RpYWxvZy5ibG9ja2VkLnRpdGxlJzogc3RyaW5nO1xuICAgICAgJ2RpYWxvZy5tYWluLmJ1dHRvbi5zdWJzY3JpYmUnOiBzdHJpbmc7XG4gICAgICAnZGlhbG9nLm1haW4uYnV0dG9uLnVuc3Vic2NyaWJlJzogc3RyaW5nO1xuICAgICAgJ2RpYWxvZy5tYWluLnRpdGxlJzogc3RyaW5nO1xuICAgICAgJ21lc3NhZ2UuYWN0aW9uLnJlc3Vic2NyaWJlZCc6IHN0cmluZztcbiAgICAgICdtZXNzYWdlLmFjdGlvbi5zdWJzY3JpYmVkJzogc3RyaW5nO1xuICAgICAgJ21lc3NhZ2UuYWN0aW9uLnN1YnNjcmliaW5nJzogc3RyaW5nO1xuICAgICAgJ21lc3NhZ2UuYWN0aW9uLnVuc3Vic2NyaWJlZCc6IHN0cmluZztcbiAgICAgICdtZXNzYWdlLnByZW5vdGlmeSc6IHN0cmluZztcbiAgICAgICd0aXAuc3RhdGUuYmxvY2tlZCc6IHN0cmluZztcbiAgICAgICd0aXAuc3RhdGUuc3Vic2NyaWJlZCc6IHN0cmluZztcbiAgICAgICd0aXAuc3RhdGUudW5zdWJzY3JpYmVkJzogc3RyaW5nO1xuICAgIH07XG4gIH07XG5cbiAgcGVyc2lzdE5vdGlmaWNhdGlvbj86IGJvb2xlYW47XG4gIHdlYmhvb2tzPzoge1xuICAgIC8qKlxuICAgICAqIEVuYWJsZSB0aGlzIHNldHRpbmcgb25seSBpZiB5b3VyIHNlcnZlciBoYXMgQ09SUyBlbmFibGVkIGFuZCBzdXBwb3J0cyBub24tc2ltcGxlIENPUlMgcmVxdWVzdHMuXG4gICAgICogSWYgdGhpcyBzZXR0aW5nIGlzIGRpc2FibGVkLCB5b3VyIHdlYmhvb2sgd2lsbCBub3QgbmVlZCBDT1JTIHRvIHJlY2VpdmUgZGF0YSwgYnV0IGl0IHdpbGwgbm90IHJlY2VpdmUgdGhlIGN1c3RvbSBoZWFkZXJzLlxuICAgICAqIFRoZSBzaW1wbGVzdCBvcHRpb24gaXMgdG8gbGVhdmUgaXQgZGlzYWJsZWQuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cbiAgICBjb3JzOiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogVGhpcyBldmVudCBvY2N1cnMgYWZ0ZXIgYSBub3RpZmljYXRpb24gaXMgY2xpY2tlZC5cbiAgICAgKiBAZXhhbXBsZSBodHRwczovL3NpdGUuY29tL2hvb2tcbiAgICAgKi9cbiAgICAnbm90aWZpY2F0aW9uLmNsaWNrZWQnPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogVGhpcyBldmVudCBvY2N1cnMgYWZ0ZXIgYSBub3RpZmljYXRpb24gaXMgaW50ZW50aW9uYWxseSBkaXNtaXNzZWQgYnkgdGhlIHVzZXIgKGNsaWNraW5nIHRoZSBub3RpZmljYXRpb24gYm9keSBvciBvbmUgb2YgdGhlIG5vdGlmaWNhdGlvbiBhY3Rpb24gYnV0dG9ucyBkb2VzIG5vdCB0cmlnZ2VyIHRoZSBkaXNtaXNzZWQgd2ViaG9vayksXG4gICAgICogYWZ0ZXIgYSBncm91cCBvZiBub3RpZmljYXRpb25zIGFyZSBhbGwgZGlzbWlzc2VkICh3aXRoIHRoaXMgbm90aWZpY2F0aW9uIGFzIHBhcnQgb2YgdGhhdCBncm91cCksIG9yIGFmdGVyIGEgbm90aWZpY2F0aW9uIGV4cGlyZXMgb24gaXRzIG93biB0aW1lIGFuZCBkaXNhcHBlYXJzLiBUaGlzIGV2ZW50IGlzIHN1cHBvcnRlZCBvbiBDaHJvbWUgb25seS5cbiAgICAgKiBAZXhhbXBsZSBodHRwczovL3NpdGUuY29tL2hvb2tcbiAgICAgKi9cbiAgICAnbm90aWZpY2F0aW9uLmRpc21pc3NlZCc/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGV2ZW50IG9jY3VycyBhZnRlciBhIG5vdGlmaWNhdGlvbiBpcyBkaXNwbGF5ZWQuXG4gICAgICogQGV4YW1wbGUgaHR0cHM6Ly9zaXRlLmNvbS9ob29rXG4gICAgICovXG4gICAgJ25vdGlmaWNhdGlvbi53aWxsRGlzcGxheSc/OiBzdHJpbmc7XG4gIH07XG4gIGF1dG9SZXN1YnNjcmliZT86IGJvb2xlYW47XG4gIGF1dG9SZWdpc3Rlcj86IGJvb2xlYW47XG4gIG5vdGlmaWNhdGlvbkNsaWNrSGFuZGxlck1hdGNoPzogJ2V4YWN0JyB8ICdvcmlnaW4nO1xuICBub3RpZmljYXRpb25DbGlja0hhbmRsZXJBY3Rpb24/OiAnbmF2aWdhdGUnIHwgJ2ZvY3VzJztcbiAgcGF0aD86IHN0cmluZztcbiAgc2VydmljZVdvcmtlclBhcmFtPzogeyBzY29wZTogc3RyaW5nIH07XG4gIHNlcnZpY2VXb3JrZXJQYXRoPzogc3RyaW5nO1xuICBzZXJ2aWNlV29ya2VyT3ZlcnJpZGVGb3JUeXBpY2FsPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIE92ZXJyaWRlcyB0aGUgZGVmYXVsdCBPbmVTaWduYWwgU0RLIHNjcmlwdCBVUkwuXG4gICAqIFVzZSB0aGlzIHRvIHNlbGYtaG9zdCB0aGUgU0RLIHNjcmlwdCBvbiB5b3VyIG93biBkb21haW4sIGUuZy4gdG8gY29tcGx5XG4gICAqIHdpdGggc3RyaWN0IENyb3NzLU9yaWdpbi1FbWJlZGRlci1Qb2xpY3kgKENPRVApIG9yIENvbnRlbnQtU2VjdXJpdHktUG9saWN5IChDU1ApIGhlYWRlcnMuXG4gICAqIEBkZWZhdWx0ICdodHRwczovL2Nkbi5vbmVzaWduYWwuY29tL3Nka3Mvd2ViL3YxNi9PbmVTaWduYWxTREsucGFnZS5qcydcbiAgICovXG4gIHNjcmlwdFNyYz86IHN0cmluZztcbiAgW2tleTogc3RyaW5nXTogdW5rbm93bjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJT25lU2lnbmFsT25lU2lnbmFsIHtcblx0U2xpZGVkb3duOiBJT25lU2lnbmFsU2xpZGVkb3duO1xuXHROb3RpZmljYXRpb25zOiBJT25lU2lnbmFsTm90aWZpY2F0aW9ucztcblx0U2Vzc2lvbjogSU9uZVNpZ25hbFNlc3Npb247XG5cdFVzZXI6IElPbmVTaWduYWxVc2VyO1xuXHREZWJ1ZzogSU9uZVNpZ25hbERlYnVnO1xuXHRsb2dpbihleHRlcm5hbElkOiBzdHJpbmcsIGp3dFRva2VuPzogc3RyaW5nKTogUHJvbWlzZTx2b2lkPjtcblx0bG9nb3V0KCk6IFByb21pc2U8dm9pZD47XG5cdHVwZGF0ZVVzZXJKd3QoZXh0ZXJuYWxJZDogc3RyaW5nLCB0b2tlbjogc3RyaW5nKTogUHJvbWlzZTx2b2lkPjtcblx0aW5pdChvcHRpb25zOiBJSW5pdE9iamVjdCk6IFByb21pc2U8dm9pZD47XG5cdHNldENvbnNlbnRHaXZlbihjb25zZW50OiBib29sZWFuKTogUHJvbWlzZTx2b2lkPjtcblx0c2V0Q29uc2VudFJlcXVpcmVkKHJlcXVpcmVzQ29uc2VudDogYm9vbGVhbik6IFByb21pc2U8dm9pZD47XG59XG5leHBvcnQgaW50ZXJmYWNlIElPbmVTaWduYWxOb3RpZmljYXRpb25zIHtcblx0cGVybWlzc2lvbk5hdGl2ZTogTm90aWZpY2F0aW9uUGVybWlzc2lvbjtcblx0cGVybWlzc2lvbjogYm9vbGVhbjtcblx0c2V0RGVmYXVsdFVybCh1cmw6IHN0cmluZyk6IFByb21pc2U8dm9pZD47XG5cdHNldERlZmF1bHRUaXRsZSh0aXRsZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPjtcblx0aXNQdXNoU3VwcG9ydGVkKCk6IGJvb2xlYW47XG5cdHJlcXVlc3RQZXJtaXNzaW9uKCk6IFByb21pc2U8Ym9vbGVhbj47XG5cdGFkZEV2ZW50TGlzdGVuZXI8SyBleHRlbmRzIE5vdGlmaWNhdGlvbkV2ZW50TmFtZT4oZXZlbnQ6IEssIGxpc3RlbmVyOiAob2JqOiBOb3RpZmljYXRpb25FdmVudFR5cGVNYXBbS10pID0+IHZvaWQpOiB2b2lkO1xuXHRyZW1vdmVFdmVudExpc3RlbmVyPEsgZXh0ZW5kcyBOb3RpZmljYXRpb25FdmVudE5hbWU+KGV2ZW50OiBLLCBsaXN0ZW5lcjogKG9iajogTm90aWZpY2F0aW9uRXZlbnRUeXBlTWFwW0tdKSA9PiB2b2lkKTogdm9pZDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSU9uZVNpZ25hbFNsaWRlZG93biB7XG5cdHByb21wdFB1c2gob3B0aW9ucz86IEF1dG9Qcm9tcHRPcHRpb25zKTogUHJvbWlzZTx2b2lkPjtcblx0cHJvbXB0UHVzaENhdGVnb3JpZXMob3B0aW9ucz86IEF1dG9Qcm9tcHRPcHRpb25zKTogUHJvbWlzZTx2b2lkPjtcblx0cHJvbXB0U21zKG9wdGlvbnM/OiBBdXRvUHJvbXB0T3B0aW9ucyk6IFByb21pc2U8dm9pZD47XG5cdHByb21wdEVtYWlsKG9wdGlvbnM/OiBBdXRvUHJvbXB0T3B0aW9ucyk6IFByb21pc2U8dm9pZD47XG5cdHByb21wdFNtc0FuZEVtYWlsKG9wdGlvbnM/OiBBdXRvUHJvbXB0T3B0aW9ucyk6IFByb21pc2U8dm9pZD47XG5cdGFkZEV2ZW50TGlzdGVuZXIoZXZlbnQ6IFNsaWRlZG93bkV2ZW50TmFtZSwgbGlzdGVuZXI6ICh3YXNTaG93bjogYm9vbGVhbikgPT4gdm9pZCk6IHZvaWQ7XG5cdHJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQ6IFNsaWRlZG93bkV2ZW50TmFtZSwgbGlzdGVuZXI6ICh3YXNTaG93bjogYm9vbGVhbikgPT4gdm9pZCk6IHZvaWQ7XG59XG5leHBvcnQgaW50ZXJmYWNlIElPbmVTaWduYWxEZWJ1ZyB7XG5cdHNldExvZ0xldmVsKGxvZ0xldmVsOiAndHJhY2UnIHwgJ2RlYnVnJyB8ICdpbmZvJyB8ICd3YXJuJyB8ICdlcnJvcicpOiB2b2lkO1xufVxuZXhwb3J0IGludGVyZmFjZSBJT25lU2lnbmFsU2Vzc2lvbiB7XG5cdHNlbmRPdXRjb21lKG91dGNvbWVOYW1lOiBzdHJpbmcsIG91dGNvbWVXZWlnaHQ/OiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+O1xuXHRzZW5kVW5pcXVlT3V0Y29tZShvdXRjb21lTmFtZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSU9uZVNpZ25hbFVzZXIge1xuXHRvbmVzaWduYWxJZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHRleHRlcm5hbElkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdFB1c2hTdWJzY3JpcHRpb246IElPbmVTaWduYWxQdXNoU3Vic2NyaXB0aW9uO1xuXHRhZGRBbGlhcyhsYWJlbDogc3RyaW5nLCBpZDogc3RyaW5nKTogdm9pZDtcblx0YWRkQWxpYXNlcyhhbGlhc2VzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KTogdm9pZDtcblx0cmVtb3ZlQWxpYXMobGFiZWw6IHN0cmluZyk6IHZvaWQ7XG5cdHJlbW92ZUFsaWFzZXMobGFiZWxzOiBzdHJpbmdbXSk6IHZvaWQ7XG5cdGFkZEVtYWlsKGVtYWlsOiBzdHJpbmcpOiB2b2lkO1xuXHRyZW1vdmVFbWFpbChlbWFpbDogc3RyaW5nKTogdm9pZDtcblx0YWRkU21zKHNtc051bWJlcjogc3RyaW5nKTogdm9pZDtcblx0cmVtb3ZlU21zKHNtc051bWJlcjogc3RyaW5nKTogdm9pZDtcblx0YWRkVGFnKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZDtcblx0YWRkVGFncyh0YWdzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KTogdm9pZDtcblx0cmVtb3ZlVGFnKGtleTogc3RyaW5nKTogdm9pZDtcblx0cmVtb3ZlVGFncyhrZXlzOiBzdHJpbmdbXSk6IHZvaWQ7XG5cdGdldFRhZ3MoKTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcblx0YWRkRXZlbnRMaXN0ZW5lcjxLIGV4dGVuZHMgVXNlckV2ZW50TmFtZT4oZXZlbnQ6IEssIGxpc3RlbmVyOiAob2JqOiBVc2VyRXZlbnRUeXBlTWFwW0tdKSA9PiB2b2lkKTogdm9pZDtcblx0cmVtb3ZlRXZlbnRMaXN0ZW5lcjxLIGV4dGVuZHMgVXNlckV2ZW50TmFtZT4oZXZlbnQ6IEssIGxpc3RlbmVyOiAob2JqOiBVc2VyRXZlbnRUeXBlTWFwW0tdKSA9PiB2b2lkKTogdm9pZDtcblx0c2V0TGFuZ3VhZ2UobGFuZ3VhZ2U6IHN0cmluZyk6IHZvaWQ7XG5cdGdldExhbmd1YWdlKCk6IHN0cmluZztcblx0dHJhY2tFdmVudChuYW1lOiBzdHJpbmcsIHByb3BlcnRpZXM/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPik6IHZvaWQ7XG59XG5leHBvcnQgaW50ZXJmYWNlIElPbmVTaWduYWxQdXNoU3Vic2NyaXB0aW9uIHtcblx0aWQ6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQ7XG5cdHRva2VuOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkO1xuXHRvcHRlZEluOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXHRvcHRJbigpOiBQcm9taXNlPHZvaWQ+O1xuXHRvcHRPdXQoKTogUHJvbWlzZTx2b2lkPjtcblx0YWRkRXZlbnRMaXN0ZW5lcihldmVudDogJ2NoYW5nZScsIGxpc3RlbmVyOiAoY2hhbmdlOiBTdWJzY3JpcHRpb25DaGFuZ2VFdmVudCkgPT4gdm9pZCk6IHZvaWQ7XG5cdHJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQ6ICdjaGFuZ2UnLCBsaXN0ZW5lcjogKGNoYW5nZTogU3Vic2NyaXB0aW9uQ2hhbmdlRXZlbnQpID0+IHZvaWQpOiB2b2lkO1xufVxuZnVuY3Rpb24gb25lU2lnbmFsTG9naW4oZXh0ZXJuYWxJZDogc3RyaW5nLCBqd3RUb2tlbj86IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignT25lU2lnbmFsIHNjcmlwdCBmYWlsZWQgdG8gbG9hZC4nKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5sb2dpbihleHRlcm5hbElkLCBqd3RUb2tlbilcbiAgICAgICAgLnRoZW4oKCkgPT4gcmVzb2x2ZSgpKVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgfSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gb25lU2lnbmFsTG9nb3V0KCk6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignT25lU2lnbmFsIHNjcmlwdCBmYWlsZWQgdG8gbG9hZC4nKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5sb2dvdXQoKVxuICAgICAgICAudGhlbigoKSA9PiByZXNvbHZlKCkpXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiByZWplY3QoZXJyb3IpKTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBvbmVTaWduYWxVcGRhdGVVc2VySnd0KGV4dGVybmFsSWQ6IHN0cmluZywgdG9rZW46IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignT25lU2lnbmFsIHNjcmlwdCBmYWlsZWQgdG8gbG9hZC4nKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC51cGRhdGVVc2VySnd0KGV4dGVybmFsSWQsIHRva2VuKVxuICAgICAgICAudGhlbigoKSA9PiByZXNvbHZlKCkpXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiByZWplY3QoZXJyb3IpKTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBvbmVTaWduYWxTZXRDb25zZW50R2l2ZW4oY29uc2VudDogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignT25lU2lnbmFsIHNjcmlwdCBmYWlsZWQgdG8gbG9hZC4nKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5zZXRDb25zZW50R2l2ZW4oY29uc2VudClcbiAgICAgICAgLnRoZW4oKCkgPT4gcmVzb2x2ZSgpKVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgfSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gb25lU2lnbmFsU2V0Q29uc2VudFJlcXVpcmVkKHJlcXVpcmVzQ29uc2VudDogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignT25lU2lnbmFsIHNjcmlwdCBmYWlsZWQgdG8gbG9hZC4nKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5zZXRDb25zZW50UmVxdWlyZWQocmVxdWlyZXNDb25zZW50KVxuICAgICAgICAudGhlbigoKSA9PiByZXNvbHZlKCkpXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiByZWplY3QoZXJyb3IpKTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBzbGlkZWRvd25Qcm9tcHRQdXNoKG9wdGlvbnM/OiBBdXRvUHJvbXB0T3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignT25lU2lnbmFsIHNjcmlwdCBmYWlsZWQgdG8gbG9hZC4nKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5TbGlkZWRvd24ucHJvbXB0UHVzaChvcHRpb25zKVxuICAgICAgICAudGhlbigoKSA9PiByZXNvbHZlKCkpXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiByZWplY3QoZXJyb3IpKTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBzbGlkZWRvd25Qcm9tcHRQdXNoQ2F0ZWdvcmllcyhvcHRpb25zPzogQXV0b1Byb21wdE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ09uZVNpZ25hbCBzY3JpcHQgZmFpbGVkIHRvIGxvYWQuJykpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgICBvbmVTaWduYWwuU2xpZGVkb3duLnByb21wdFB1c2hDYXRlZ29yaWVzKG9wdGlvbnMpXG4gICAgICAgIC50aGVuKCgpID0+IHJlc29sdmUoKSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHJlamVjdChlcnJvcikpO1xuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHNsaWRlZG93blByb21wdFNtcyhvcHRpb25zPzogQXV0b1Byb21wdE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ09uZVNpZ25hbCBzY3JpcHQgZmFpbGVkIHRvIGxvYWQuJykpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgICBvbmVTaWduYWwuU2xpZGVkb3duLnByb21wdFNtcyhvcHRpb25zKVxuICAgICAgICAudGhlbigoKSA9PiByZXNvbHZlKCkpXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiByZWplY3QoZXJyb3IpKTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBzbGlkZWRvd25Qcm9tcHRFbWFpbChvcHRpb25zPzogQXV0b1Byb21wdE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ09uZVNpZ25hbCBzY3JpcHQgZmFpbGVkIHRvIGxvYWQuJykpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgICBvbmVTaWduYWwuU2xpZGVkb3duLnByb21wdEVtYWlsKG9wdGlvbnMpXG4gICAgICAgIC50aGVuKCgpID0+IHJlc29sdmUoKSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHJlamVjdChlcnJvcikpO1xuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHNsaWRlZG93blByb21wdFNtc0FuZEVtYWlsKG9wdGlvbnM/OiBBdXRvUHJvbXB0T3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignT25lU2lnbmFsIHNjcmlwdCBmYWlsZWQgdG8gbG9hZC4nKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5TbGlkZWRvd24ucHJvbXB0U21zQW5kRW1haWwob3B0aW9ucylcbiAgICAgICAgLnRoZW4oKCkgPT4gcmVzb2x2ZSgpKVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgfSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gc2xpZGVkb3duQWRkRXZlbnRMaXN0ZW5lcihldmVudDogU2xpZGVkb3duRXZlbnROYW1lLCBsaXN0ZW5lcjogKHdhc1Nob3duOiBib29sZWFuKSA9PiB2b2lkKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlNsaWRlZG93bi5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzbGlkZWRvd25SZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50OiBTbGlkZWRvd25FdmVudE5hbWUsIGxpc3RlbmVyOiAod2FzU2hvd246IGJvb2xlYW4pID0+IHZvaWQpOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuU2xpZGVkb3duLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG5vdGlmaWNhdGlvbnNTZXREZWZhdWx0VXJsKHVybDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaWYgKGlzT25lU2lnbmFsU2NyaXB0RmFpbGVkKSB7XG4gICAgICByZWplY3QobmV3IEVycm9yKCdPbmVTaWduYWwgc2NyaXB0IGZhaWxlZCB0byBsb2FkLicpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgICAgb25lU2lnbmFsLk5vdGlmaWNhdGlvbnMuc2V0RGVmYXVsdFVybCh1cmwpXG4gICAgICAgIC50aGVuKCgpID0+IHJlc29sdmUoKSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHJlamVjdChlcnJvcikpO1xuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIG5vdGlmaWNhdGlvbnNTZXREZWZhdWx0VGl0bGUodGl0bGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignT25lU2lnbmFsIHNjcmlwdCBmYWlsZWQgdG8gbG9hZC4nKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5Ob3RpZmljYXRpb25zLnNldERlZmF1bHRUaXRsZSh0aXRsZSlcbiAgICAgICAgLnRoZW4oKCkgPT4gcmVzb2x2ZSgpKVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgfSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gbm90aWZpY2F0aW9uc1JlcXVlc3RQZXJtaXNzaW9uKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignT25lU2lnbmFsIHNjcmlwdCBmYWlsZWQgdG8gbG9hZC4nKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5Ob3RpZmljYXRpb25zLnJlcXVlc3RQZXJtaXNzaW9uKClcbiAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHJlc29sdmUocmVzdWx0KSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHJlamVjdChlcnJvcikpO1xuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIG5vdGlmaWNhdGlvbnNBZGRFdmVudExpc3RlbmVyPEsgZXh0ZW5kcyBOb3RpZmljYXRpb25FdmVudE5hbWU+KGV2ZW50OiBLLCBsaXN0ZW5lcjogKG9iajogTm90aWZpY2F0aW9uRXZlbnRUeXBlTWFwW0tdKSA9PiB2b2lkKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLk5vdGlmaWNhdGlvbnMuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbm90aWZpY2F0aW9uc1JlbW92ZUV2ZW50TGlzdGVuZXI8SyBleHRlbmRzIE5vdGlmaWNhdGlvbkV2ZW50TmFtZT4oZXZlbnQ6IEssIGxpc3RlbmVyOiAob2JqOiBOb3RpZmljYXRpb25FdmVudFR5cGVNYXBbS10pID0+IHZvaWQpOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuTm90aWZpY2F0aW9ucy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzZXNzaW9uU2VuZE91dGNvbWUob3V0Y29tZU5hbWU6IHN0cmluZywgb3V0Y29tZVdlaWdodD86IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignT25lU2lnbmFsIHNjcmlwdCBmYWlsZWQgdG8gbG9hZC4nKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5TZXNzaW9uLnNlbmRPdXRjb21lKG91dGNvbWVOYW1lLCBvdXRjb21lV2VpZ2h0KVxuICAgICAgICAudGhlbigoKSA9PiByZXNvbHZlKCkpXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiByZWplY3QoZXJyb3IpKTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBzZXNzaW9uU2VuZFVuaXF1ZU91dGNvbWUob3V0Y29tZU5hbWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignT25lU2lnbmFsIHNjcmlwdCBmYWlsZWQgdG8gbG9hZC4nKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5TZXNzaW9uLnNlbmRVbmlxdWVPdXRjb21lKG91dGNvbWVOYW1lKVxuICAgICAgICAudGhlbigoKSA9PiByZXNvbHZlKCkpXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiByZWplY3QoZXJyb3IpKTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiB1c2VyQWRkQWxpYXMobGFiZWw6IHN0cmluZywgaWQ6IHN0cmluZyk6IHZvaWQge1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIG9uZVNpZ25hbC5Vc2VyLmFkZEFsaWFzKGxhYmVsLCBpZCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1c2VyQWRkQWxpYXNlcyhhbGlhc2VzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIuYWRkQWxpYXNlcyhhbGlhc2VzKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVzZXJSZW1vdmVBbGlhcyhsYWJlbDogc3RyaW5nKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIucmVtb3ZlQWxpYXMobGFiZWwpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXNlclJlbW92ZUFsaWFzZXMobGFiZWxzOiBzdHJpbmdbXSk6IHZvaWQge1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIG9uZVNpZ25hbC5Vc2VyLnJlbW92ZUFsaWFzZXMobGFiZWxzKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVzZXJBZGRFbWFpbChlbWFpbDogc3RyaW5nKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIuYWRkRW1haWwoZW1haWwpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXNlclJlbW92ZUVtYWlsKGVtYWlsOiBzdHJpbmcpOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuVXNlci5yZW1vdmVFbWFpbChlbWFpbCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1c2VyQWRkU21zKHNtc051bWJlcjogc3RyaW5nKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIuYWRkU21zKHNtc051bWJlcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1c2VyUmVtb3ZlU21zKHNtc051bWJlcjogc3RyaW5nKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIucmVtb3ZlU21zKHNtc051bWJlcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1c2VyQWRkVGFnKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIuYWRkVGFnKGtleSwgdmFsdWUpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXNlckFkZFRhZ3ModGFnczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSk6IHZvaWQge1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIG9uZVNpZ25hbC5Vc2VyLmFkZFRhZ3ModGFncyk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1c2VyUmVtb3ZlVGFnKGtleTogc3RyaW5nKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIucmVtb3ZlVGFnKGtleSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1c2VyUmVtb3ZlVGFncyhrZXlzOiBzdHJpbmdbXSk6IHZvaWQge1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIG9uZVNpZ25hbC5Vc2VyLnJlbW92ZVRhZ3Moa2V5cyk7XG4gIH0pO1xufVxuXG4vLyBAdHMtZXhwZWN0LWVycm9yIC0gcmV0dXJuIG5vbi1Qcm9taXNlIHR5cGUgZGVzcGl0ZSBuZWVkaW5nIHRvIGF3YWl0IE9uZVNpZ25hbERlZmVycmVkXG5hc3luYyBmdW5jdGlvbiB1c2VyR2V0VGFncygpOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHtcbiAgbGV0IHJldFZhbDogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgYXdhaXQgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICByZXRWYWwgPSBvbmVTaWduYWwuVXNlci5nZXRUYWdzKCk7XG4gIH0pO1xuICAvLyBAdHMtaWdub3JlXG4gIHJldHVybiByZXRWYWw7XG59XG5cbmZ1bmN0aW9uIHVzZXJBZGRFdmVudExpc3RlbmVyPEsgZXh0ZW5kcyBVc2VyRXZlbnROYW1lPihldmVudDogSywgbGlzdGVuZXI6IChvYmo6IFVzZXJFdmVudFR5cGVNYXBbS10pID0+IHZvaWQpOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuVXNlci5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1c2VyUmVtb3ZlRXZlbnRMaXN0ZW5lcjxLIGV4dGVuZHMgVXNlckV2ZW50TmFtZT4oZXZlbnQ6IEssIGxpc3RlbmVyOiAob2JqOiBVc2VyRXZlbnRUeXBlTWFwW0tdKSA9PiB2b2lkKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXNlclNldExhbmd1YWdlKGxhbmd1YWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuVXNlci5zZXRMYW5ndWFnZShsYW5ndWFnZSk7XG4gIH0pO1xufVxuXG4vLyBAdHMtZXhwZWN0LWVycm9yIC0gcmV0dXJuIG5vbi1Qcm9taXNlIHR5cGUgZGVzcGl0ZSBuZWVkaW5nIHRvIGF3YWl0IE9uZVNpZ25hbERlZmVycmVkXG5hc3luYyBmdW5jdGlvbiB1c2VyR2V0TGFuZ3VhZ2UoKTogc3RyaW5nIHtcbiAgbGV0IHJldFZhbDogc3RyaW5nO1xuICBhd2FpdCB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIHJldFZhbCA9IG9uZVNpZ25hbC5Vc2VyLmdldExhbmd1YWdlKCk7XG4gIH0pO1xuICAvLyBAdHMtaWdub3JlXG4gIHJldHVybiByZXRWYWw7XG59XG5cbmZ1bmN0aW9uIHVzZXJUcmFja0V2ZW50KG5hbWU6IHN0cmluZywgcHJvcGVydGllcz86IFJlY29yZDxzdHJpbmcsIHVua25vd24+KTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIudHJhY2tFdmVudChuYW1lLCBwcm9wZXJ0aWVzKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHB1c2hTdWJzY3JpcHRpb25PcHRJbigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ09uZVNpZ25hbCBzY3JpcHQgZmFpbGVkIHRvIGxvYWQuJykpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgICBvbmVTaWduYWwuVXNlci5QdXNoU3Vic2NyaXB0aW9uLm9wdEluKClcbiAgICAgICAgLnRoZW4oKCkgPT4gcmVzb2x2ZSgpKVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgfSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gcHVzaFN1YnNjcmlwdGlvbk9wdE91dCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ09uZVNpZ25hbCBzY3JpcHQgZmFpbGVkIHRvIGxvYWQuJykpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgICBvbmVTaWduYWwuVXNlci5QdXNoU3Vic2NyaXB0aW9uLm9wdE91dCgpXG4gICAgICAgIC50aGVuKCgpID0+IHJlc29sdmUoKSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHJlamVjdChlcnJvcikpO1xuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHB1c2hTdWJzY3JpcHRpb25BZGRFdmVudExpc3RlbmVyKGV2ZW50OiAnY2hhbmdlJywgbGlzdGVuZXI6IChjaGFuZ2U6IFN1YnNjcmlwdGlvbkNoYW5nZUV2ZW50KSA9PiB2b2lkKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIuUHVzaFN1YnNjcmlwdGlvbi5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBwdXNoU3Vic2NyaXB0aW9uUmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudDogJ2NoYW5nZScsIGxpc3RlbmVyOiAoY2hhbmdlOiBTdWJzY3JpcHRpb25DaGFuZ2VFdmVudCkgPT4gdm9pZCk6IHZvaWQge1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIG9uZVNpZ25hbC5Vc2VyLlB1c2hTdWJzY3JpcHRpb24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZGVidWdTZXRMb2dMZXZlbChsb2dMZXZlbDogJ3RyYWNlJyB8ICdkZWJ1ZycgfCAnaW5mbycgfCAnd2FybicgfCAnZXJyb3InKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLkRlYnVnLnNldExvZ0xldmVsKGxvZ0xldmVsKTtcbiAgfSk7XG59XG5cblxuY29uc3QgUHVzaFN1YnNjcmlwdGlvbk5hbWVzcGFjZTogSU9uZVNpZ25hbFB1c2hTdWJzY3JpcHRpb24gPSB7XG5cdGdldCBpZCgpOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHdpbmRvdy5PbmVTaWduYWw/LlVzZXI/LlB1c2hTdWJzY3JpcHRpb24/LmlkOyB9LFxuXHRnZXQgdG9rZW4oKTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCB7IHJldHVybiB3aW5kb3cuT25lU2lnbmFsPy5Vc2VyPy5QdXNoU3Vic2NyaXB0aW9uPy50b2tlbjsgfSxcblx0Z2V0IG9wdGVkSW4oKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7IHJldHVybiB3aW5kb3cuT25lU2lnbmFsPy5Vc2VyPy5QdXNoU3Vic2NyaXB0aW9uPy5vcHRlZEluOyB9LFxuXHRvcHRJbjogcHVzaFN1YnNjcmlwdGlvbk9wdEluLFxuXHRvcHRPdXQ6IHB1c2hTdWJzY3JpcHRpb25PcHRPdXQsXG5cdGFkZEV2ZW50TGlzdGVuZXI6IHB1c2hTdWJzY3JpcHRpb25BZGRFdmVudExpc3RlbmVyLFxuXHRyZW1vdmVFdmVudExpc3RlbmVyOiBwdXNoU3Vic2NyaXB0aW9uUmVtb3ZlRXZlbnRMaXN0ZW5lcixcbn07XG5cbmNvbnN0IFVzZXJOYW1lc3BhY2U6IElPbmVTaWduYWxVc2VyID0ge1xuXHRnZXQgb25lc2lnbmFsSWQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHdpbmRvdy5PbmVTaWduYWw/LlVzZXI/Lm9uZXNpZ25hbElkOyB9LFxuXHRnZXQgZXh0ZXJuYWxJZCgpOiBzdHJpbmcgfCB1bmRlZmluZWQgeyByZXR1cm4gd2luZG93Lk9uZVNpZ25hbD8uVXNlcj8uZXh0ZXJuYWxJZDsgfSxcblx0YWRkQWxpYXM6IHVzZXJBZGRBbGlhcyxcblx0YWRkQWxpYXNlczogdXNlckFkZEFsaWFzZXMsXG5cdHJlbW92ZUFsaWFzOiB1c2VyUmVtb3ZlQWxpYXMsXG5cdHJlbW92ZUFsaWFzZXM6IHVzZXJSZW1vdmVBbGlhc2VzLFxuXHRhZGRFbWFpbDogdXNlckFkZEVtYWlsLFxuXHRyZW1vdmVFbWFpbDogdXNlclJlbW92ZUVtYWlsLFxuXHRhZGRTbXM6IHVzZXJBZGRTbXMsXG5cdHJlbW92ZVNtczogdXNlclJlbW92ZVNtcyxcblx0YWRkVGFnOiB1c2VyQWRkVGFnLFxuXHRhZGRUYWdzOiB1c2VyQWRkVGFncyxcblx0cmVtb3ZlVGFnOiB1c2VyUmVtb3ZlVGFnLFxuXHRyZW1vdmVUYWdzOiB1c2VyUmVtb3ZlVGFncyxcblx0Z2V0VGFnczogdXNlckdldFRhZ3MsXG5cdGFkZEV2ZW50TGlzdGVuZXI6IHVzZXJBZGRFdmVudExpc3RlbmVyLFxuXHRyZW1vdmVFdmVudExpc3RlbmVyOiB1c2VyUmVtb3ZlRXZlbnRMaXN0ZW5lcixcblx0c2V0TGFuZ3VhZ2U6IHVzZXJTZXRMYW5ndWFnZSxcblx0Z2V0TGFuZ3VhZ2U6IHVzZXJHZXRMYW5ndWFnZSxcblx0dHJhY2tFdmVudDogdXNlclRyYWNrRXZlbnQsXG5cdFB1c2hTdWJzY3JpcHRpb246IFB1c2hTdWJzY3JpcHRpb25OYW1lc3BhY2UsXG59O1xuXG5jb25zdCBTZXNzaW9uTmFtZXNwYWNlOiBJT25lU2lnbmFsU2Vzc2lvbiA9IHtcblx0c2VuZE91dGNvbWU6IHNlc3Npb25TZW5kT3V0Y29tZSxcblx0c2VuZFVuaXF1ZU91dGNvbWU6IHNlc3Npb25TZW5kVW5pcXVlT3V0Y29tZSxcbn07XG5cbmNvbnN0IERlYnVnTmFtZXNwYWNlOiBJT25lU2lnbmFsRGVidWcgPSB7XG5cdHNldExvZ0xldmVsOiBkZWJ1Z1NldExvZ0xldmVsLFxufTtcblxuY29uc3QgU2xpZGVkb3duTmFtZXNwYWNlOiBJT25lU2lnbmFsU2xpZGVkb3duID0ge1xuXHRwcm9tcHRQdXNoOiBzbGlkZWRvd25Qcm9tcHRQdXNoLFxuXHRwcm9tcHRQdXNoQ2F0ZWdvcmllczogc2xpZGVkb3duUHJvbXB0UHVzaENhdGVnb3JpZXMsXG5cdHByb21wdFNtczogc2xpZGVkb3duUHJvbXB0U21zLFxuXHRwcm9tcHRFbWFpbDogc2xpZGVkb3duUHJvbXB0RW1haWwsXG5cdHByb21wdFNtc0FuZEVtYWlsOiBzbGlkZWRvd25Qcm9tcHRTbXNBbmRFbWFpbCxcblx0YWRkRXZlbnRMaXN0ZW5lcjogc2xpZGVkb3duQWRkRXZlbnRMaXN0ZW5lcixcblx0cmVtb3ZlRXZlbnRMaXN0ZW5lcjogc2xpZGVkb3duUmVtb3ZlRXZlbnRMaXN0ZW5lcixcbn07XG5cbmNvbnN0IE5vdGlmaWNhdGlvbnNOYW1lc3BhY2U6IElPbmVTaWduYWxOb3RpZmljYXRpb25zID0ge1xuXHRnZXQgcGVybWlzc2lvbk5hdGl2ZSgpOiBOb3RpZmljYXRpb25QZXJtaXNzaW9uIHsgcmV0dXJuIHdpbmRvdy5PbmVTaWduYWw/Lk5vdGlmaWNhdGlvbnM/LnBlcm1pc3Npb25OYXRpdmUgPz8gJ2RlZmF1bHQnOyB9LFxuXHRnZXQgcGVybWlzc2lvbigpOiBib29sZWFuIHsgcmV0dXJuIHdpbmRvdy5PbmVTaWduYWw/Lk5vdGlmaWNhdGlvbnM/LnBlcm1pc3Npb24gPz8gZmFsc2U7IH0sXG5cdHNldERlZmF1bHRVcmw6IG5vdGlmaWNhdGlvbnNTZXREZWZhdWx0VXJsLFxuXHRzZXREZWZhdWx0VGl0bGU6IG5vdGlmaWNhdGlvbnNTZXREZWZhdWx0VGl0bGUsXG5cdGlzUHVzaFN1cHBvcnRlZCxcblx0cmVxdWVzdFBlcm1pc3Npb246IG5vdGlmaWNhdGlvbnNSZXF1ZXN0UGVybWlzc2lvbixcblx0YWRkRXZlbnRMaXN0ZW5lcjogbm90aWZpY2F0aW9uc0FkZEV2ZW50TGlzdGVuZXIsXG5cdHJlbW92ZUV2ZW50TGlzdGVuZXI6IG5vdGlmaWNhdGlvbnNSZW1vdmVFdmVudExpc3RlbmVyLFxufTtcblxuLyoqXG4gKiBAUHVibGljQXBpXG4gKi9cbmZ1bmN0aW9uIGlzUHVzaFN1cHBvcnRlZCgpOiBib29sZWFuIHtcbiAgcmV0dXJuIGlzUHVzaE5vdGlmaWNhdGlvbnNTdXBwb3J0ZWQoKTtcbn1cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuY29uc3QgT05FU0lHTkFMX1NES19JRCA9ICdvbmVzaWduYWwtc2RrJztcbmNvbnN0IERFRkFVTFRfU0NSSVBUX1NSQyA9XG4gICdodHRwczovL2Nkbi5vbmVzaWduYWwuY29tL3Nka3Mvd2ViL3YxNi9PbmVTaWduYWxTREsucGFnZS5qcyc7XG5cbmxldCBpc09uZVNpZ25hbEluaXRpYWxpemVkID0gZmFsc2U7XG5sZXQgaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQgPSBmYWxzZTtcbmxldCBwZW5kaW5nSW5pdFJlamVjdDogKChyZWFzb24/OiB1bmtub3duKSA9PiB2b2lkKSB8IHVuZGVmaW5lZDtcblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZCA9IHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZCB8fCBbXTtcbn1cblxuLyoqXG4gKiBUaGUgZm9sbG93aW5nIGNvZGUgaXMgY29waWVkIGRpcmVjdGx5IGZyb20gdGhlIG5hdGl2ZSBTREsgc291cmNlIGZpbGUgQnJvd3NlclN1cHBvcnRzUHVzaC50c1xuICogUyBUIEEgUiBUXG4gKi9cblxuLy8gQ2hlY2tzIGlmIHRoZSBicm93c2VyIHN1cHBvcnRzIHB1c2ggbm90aWZpY2F0aW9ucyBieSBjaGVja2luZyBpZiBzcGVjaWZpY1xuLy8gICBjbGFzc2VzIGFuZCBwcm9wZXJ0aWVzIG9uIHRoZW0gZXhpc3RcbmZ1bmN0aW9uIGlzUHVzaE5vdGlmaWNhdGlvbnNTdXBwb3J0ZWQoKTogYm9vbGVhbiB7XG4gIHJldHVybiBzdXBwb3J0c1ZhcGlkUHVzaCgpIHx8IHN1cHBvcnRzU2FmYXJpUHVzaCgpO1xufVxuXG5mdW5jdGlvbiBpc01hY09TU2FmYXJpSW5JZnJhbWUoKTogYm9vbGVhbiB7XG4gIC8vIEZhbGxiYWNrIGRldGVjdGlvbiBmb3IgU2FmYXJpIG9uIG1hY09TIGluIGFuIGlmcmFtZSBjb250ZXh0XG4gIHJldHVybiAoXG4gICAgd2luZG93LnRvcCAhPT0gd2luZG93ICYmIC8vIGlzQ29udGV4dElmcmFtZVxuICAgIG5hdmlnYXRvci52ZW5kb3IgPT09ICdBcHBsZSBDb21wdXRlciwgSW5jLicgJiYgLy8gaXNTYWZhcmlcbiAgICBuYXZpZ2F0b3IucGxhdGZvcm0gPT09ICdNYWNJbnRlbCdcbiAgKTsgLy8gaXNNYWNPU1xufVxuXG5mdW5jdGlvbiBzdXBwb3J0c1NhZmFyaVB1c2goKTogYm9vbGVhbiB7XG4gIHJldHVybiAoXG4gICAgKHdpbmRvdy5zYWZhcmkgJiYgdHlwZW9mIHdpbmRvdy5zYWZhcmkucHVzaE5vdGlmaWNhdGlvbiAhPT0gJ3VuZGVmaW5lZCcpIHx8XG4gICAgaXNNYWNPU1NhZmFyaUluSWZyYW1lKClcbiAgKTtcbn1cblxuLy8gRG9lcyB0aGUgYnJvd3NlciBzdXBwb3J0IHRoZSBzdGFuZGFyZCBQdXNoIEFQSVxuZnVuY3Rpb24gc3VwcG9ydHNWYXBpZFB1c2goKTogYm9vbGVhbiB7XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIFB1c2hTdWJzY3JpcHRpb25PcHRpb25zICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIFB1c2hTdWJzY3JpcHRpb25PcHRpb25zLnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSgnYXBwbGljYXRpb25TZXJ2ZXJLZXknKVxuICApO1xufVxuLyogRSBOIEQgKi9cblxuZnVuY3Rpb24gaGFuZGxlT25FcnJvcigpOiB2b2lkIHtcbiAgaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQgPSB0cnVlO1xuICBwZW5kaW5nSW5pdFJlamVjdD8uKG5ldyBFcnJvcignT25lU2lnbmFsIHNjcmlwdCBmYWlsZWQgdG8gbG9hZC4nKSk7XG4gIHBlbmRpbmdJbml0UmVqZWN0ID0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBhZGRTREtTY3JpcHQoc2NyaXB0U3JjPzogc3RyaW5nKTogdm9pZCB7XG4gIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChPTkVTSUdOQUxfU0RLX0lEKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICBzY3JpcHQuaWQgPSBPTkVTSUdOQUxfU0RLX0lEO1xuICBzY3JpcHQuZGVmZXIgPSB0cnVlO1xuICBzY3JpcHQuc3JjID0gc2NyaXB0U3JjIHx8IERFRkFVTFRfU0NSSVBUX1NSQztcblxuICAvLyBBbHdheXMgcmVzb2x2ZSB3aGV0aGVyIG9yIG5vdCB0aGUgc2NyaXB0IGlzIHN1Y2Nlc3NmdWxseSBpbml0aWFsaXplZC5cbiAgLy8gVGhpcyBpcyBpbXBvcnRhbnQgZm9yIHVzZXJzIHdobyBtYXkgYmxvY2sgY2RuLm9uZXNpZ25hbC5jb20gdy8gYWRibG9jay5cbiAgc2NyaXB0Lm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgaGFuZGxlT25FcnJvcigpO1xuICB9O1xuXG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBPbmVTaWduYWxEZWZlcnJlZD86IE9uZVNpZ25hbERlZmVycmVkTG9hZGVkQ2FsbGJhY2tbXTtcbiAgICBPbmVTaWduYWw/OiBJT25lU2lnbmFsT25lU2lnbmFsO1xuICAgIHNhZmFyaT86IHtcbiAgICAgIHB1c2hOb3RpZmljYXRpb246IGFueTtcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU9uZVNpZ25hbE9uZVNpZ25hbCB7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE9uZVNpZ25hbCBpbXBsZW1lbnRzIElPbmVTaWduYWxPbmVTaWduYWwge1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIC8qIFAgVSBCIEwgSSBDICovXG5cbiAgLyoqXG4gICAqIEBQdWJsaWNBcGlcbiAgICovXG4gIGluaXQob3B0aW9uczogSUluaXRPYmplY3QpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAoaXNPbmVTaWduYWxJbml0aWFsaXplZCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGBPbmVTaWduYWwgaXMgYWxyZWFkeSBpbml0aWFsaXplZC5gKTtcbiAgICB9XG5cbiAgICBpZiAoIW9wdGlvbnMgfHwgIW9wdGlvbnMuYXBwSWQpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgnWW91IG5lZWQgdG8gcHJvdmlkZSB5b3VyIE9uZVNpZ25hbCBhcHBJZC4nKTtcbiAgICB9XG5cbiAgICBpZiAoIWRvY3VtZW50KSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoYERvY3VtZW50IGlzIG5vdCBkZWZpbmVkLmApO1xuICAgIH1cblxuICAgIC8vIFJlcXVpcmVkOiB0aGUgQ0ROIHNjcmlwdCBzaWxlbnRseSBleGl0cyBvbiB1bnN1cHBvcnRlZCBicm93c2VycyB3aXRob3V0XG4gICAgLy8gZHJhaW5pbmcgT25lU2lnbmFsRGVmZXJyZWQsIHNvIGluaXQoKSB3b3VsZCBoYW5nIGZvcmV2ZXIgb3RoZXJ3aXNlLlxuICAgIGlmICghaXNQdXNoTm90aWZpY2F0aW9uc1N1cHBvcnRlZCgpKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXG4gICAgICAgIG5ldyBFcnJvcignVGhpcyBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgV2ViIFB1c2ggbm90aWZpY2F0aW9ucy4nKSxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIGJvdGggZGlzYWJsZWQgYW5kIGRpc2FibGUga2V5cyBmb3Igd2VsY29tZSBub3RpZmljYXRpb25cbiAgICBpZiAob3B0aW9ucy53ZWxjb21lTm90aWZpY2F0aW9uPy5kaXNhYmxlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBvcHRpb25zLndlbGNvbWVOb3RpZmljYXRpb24uZGlzYWJsZSA9IG9wdGlvbnMud2VsY29tZU5vdGlmaWNhdGlvbi5kaXNhYmxlZDtcbiAgICB9XG5cbiAgICBhZGRTREtTY3JpcHQob3B0aW9ucy5zY3JpcHRTcmMpO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHBlbmRpbmdJbml0UmVqZWN0ID0gcmVqZWN0O1xuICAgICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgICAgb25lU2lnbmFsXG4gICAgICAgICAgLmluaXQob3B0aW9ucylcbiAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBpc09uZVNpZ25hbEluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHBlbmRpbmdJbml0UmVqZWN0ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIHBlbmRpbmdJbml0UmVqZWN0ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG5cdFVzZXIgPSBVc2VyTmFtZXNwYWNlO1xuXHRTZXNzaW9uID0gU2Vzc2lvbk5hbWVzcGFjZTtcblx0RGVidWcgPSBEZWJ1Z05hbWVzcGFjZTtcblx0U2xpZGVkb3duID0gU2xpZGVkb3duTmFtZXNwYWNlO1xuXHROb3RpZmljYXRpb25zID0gTm90aWZpY2F0aW9uc05hbWVzcGFjZTtcblx0bG9naW4gPSBvbmVTaWduYWxMb2dpbjtcblx0bG9nb3V0ID0gb25lU2lnbmFsTG9nb3V0O1xuXHR1cGRhdGVVc2VySnd0ID0gb25lU2lnbmFsVXBkYXRlVXNlckp3dDtcblx0c2V0Q29uc2VudEdpdmVuID0gb25lU2lnbmFsU2V0Q29uc2VudEdpdmVuO1xuXHRzZXRDb25zZW50UmVxdWlyZWQgPSBvbmVTaWduYWxTZXRDb25zZW50UmVxdWlyZWQ7XG59XG4iXX0=