import { __awaiter } from "tslib";
function oneSignalLogin(externalId, jwtToken) {
    return new Promise((resolve, reject) => {
        var _a;
        if (isOneSignalScriptFailed) {
            reject(new Error('OneSignal script failed to load.'));
            return;
        }
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
            oneSignal.login(externalId, jwtToken).then(() => resolve());
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
            oneSignal.logout().then(() => resolve());
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
            oneSignal.setConsentGiven(consent).then(() => resolve());
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
            oneSignal.setConsentRequired(requiresConsent).then(() => resolve());
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
            oneSignal.Slidedown.promptPush(options).then(() => resolve());
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
            oneSignal.Slidedown.promptPushCategories(options).then(() => resolve());
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
            oneSignal.Slidedown.promptSms(options).then(() => resolve());
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
            oneSignal.Slidedown.promptEmail(options).then(() => resolve());
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
            oneSignal.Slidedown.promptSmsAndEmail(options).then(() => resolve());
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
            oneSignal.Notifications.setDefaultUrl(url).then(() => resolve());
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
            oneSignal.Notifications.setDefaultTitle(title).then(() => resolve());
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
            oneSignal.Notifications.requestPermission().then(() => resolve());
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
            oneSignal.Session.sendOutcome(outcomeName, outcomeWeight).then(() => resolve());
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
            oneSignal.Session.sendUniqueOutcome(outcomeName).then(() => resolve());
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
function pushSubscriptionOptIn() {
    return new Promise((resolve, reject) => {
        var _a;
        if (isOneSignalScriptFailed) {
            reject(new Error('OneSignal script failed to load.'));
            return;
        }
        (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
            oneSignal.User.PushSubscription.optIn().then(() => resolve());
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
            oneSignal.User.PushSubscription.optOut().then(() => resolve());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25lc2lnbmFsLW5neC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvb25lc2lnbmFsLW5neC9zcmMvbGliL29uZXNpZ25hbC1uZ3guc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBc1pBLFNBQVMsY0FBYyxDQUFDLFVBQWtCLEVBQUUsUUFBaUI7SUFFM0QsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTs7UUFDckMsSUFBSSx1QkFBdUIsRUFBRTtZQUMzQixNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsa0NBQWtDLENBQUMsQ0FBQyxDQUFDO1lBQ3RELE9BQU87U0FDUjtRQUVELE1BQUEsTUFBTSxDQUFDLGlCQUFpQiwwQ0FBRSxJQUFJLENBQUMsQ0FBQyxTQUE4QixFQUFFLEVBQUU7WUFDaEUsU0FBUyxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDOUQsQ0FBQyxFQUFFO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBQ0QsU0FBUyxlQUFlO0lBRXRCLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7O1FBQ3JDLElBQUksdUJBQXVCLEVBQUU7WUFDM0IsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLGtDQUFrQyxDQUFDLENBQUMsQ0FBQztZQUN0RCxPQUFPO1NBQ1I7UUFFRCxNQUFBLE1BQU0sQ0FBQyxpQkFBaUIsMENBQUUsSUFBSSxDQUFDLENBQUMsU0FBOEIsRUFBRSxFQUFFO1lBQ2hFLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUMzQyxDQUFDLEVBQUU7SUFDTCxDQUFDLENBQUMsQ0FB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LDBDQUFFLFFBQVEsTUFBSyxTQUFTLEVBQUU7WUFDdkQsT0FBTyxDQUFDLG1CQUFtQixDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDO1NBQzVFO1FBRUQsT0FBTyxJQUFJLE9BQU8sQ0FBTyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTs7WUFDM0MsTUFBQSxNQUFNLENBQUMsaUJBQWlCLDBDQUFFLElBQUksQ0FBQyxDQUFDLFNBQThCLEVBQUUsRUFBRTtnQkFDaEUsU0FBUztxQkFDTixJQUFJLENBQUMsT0FBTyxDQUFDO3FCQUNiLElBQUksQ0FBQyxHQUFHLEVBQUU7b0JBQ1Qsc0JBQXNCLEdBQUcsSUFBSSxDQUFDO29CQUM5QixPQUFPLEVBQUUsQ0FBQztnQkFDWixDQUFDLENBQUM7cUJBQ0QsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25CLENBQUMsRUFBRTtRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztZQTFDRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIEF1dG9Qcm9tcHRPcHRpb25zIHsgZm9yY2U/OiBib29sZWFuOyBmb3JjZVNsaWRlZG93bk92ZXJOYXRpdmU/OiBib29sZWFuOyBzbGlkZWRvd25Qcm9tcHRPcHRpb25zPzogSU9uZVNpZ25hbEF1dG9Qcm9tcHRPcHRpb25zOyB9XG5leHBvcnQgaW50ZXJmYWNlIElPbmVTaWduYWxBdXRvUHJvbXB0T3B0aW9ucyB7IGZvcmNlPzogYm9vbGVhbjsgZm9yY2VTbGlkZWRvd25PdmVyTmF0aXZlPzogYm9vbGVhbjsgaXNJblVwZGF0ZU1vZGU/OiBib29sZWFuOyBjYXRlZ29yeU9wdGlvbnM/OiBJT25lU2lnbmFsQ2F0ZWdvcmllczsgfVxuZXhwb3J0IGludGVyZmFjZSBJT25lU2lnbmFsQ2F0ZWdvcmllcyB7IHBvc2l0aXZlVXBkYXRlQnV0dG9uOiBzdHJpbmc7IG5lZ2F0aXZlVXBkYXRlQnV0dG9uOiBzdHJpbmc7IHNhdmluZ0J1dHRvblRleHQ6IHN0cmluZzsgZXJyb3JCdXR0b25UZXh0OiBzdHJpbmc7IHVwZGF0ZU1lc3NhZ2U6IHN0cmluZzsgdGFnczogSU9uZVNpZ25hbFRhZ0NhdGVnb3J5W107IH1cbmV4cG9ydCBpbnRlcmZhY2UgSU9uZVNpZ25hbFRhZ0NhdGVnb3J5IHsgdGFnOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmc7IGNoZWNrZWQ/OiBib29sZWFuOyB9XG5leHBvcnQgdHlwZSBQdXNoU3Vic2NyaXB0aW9uTmFtZXNwYWNlUHJvcGVydGllcyA9IHsgaWQ6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQ7IHRva2VuOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkOyBvcHRlZEluOiBib29sZWFuOyB9O1xuZXhwb3J0IHR5cGUgU3Vic2NyaXB0aW9uQ2hhbmdlRXZlbnQgPSB7IHByZXZpb3VzOiBQdXNoU3Vic2NyaXB0aW9uTmFtZXNwYWNlUHJvcGVydGllczsgY3VycmVudDogUHVzaFN1YnNjcmlwdGlvbk5hbWVzcGFjZVByb3BlcnRpZXM7IH07XG5leHBvcnQgdHlwZSBOb3RpZmljYXRpb25FdmVudE5hbWUgPSAnY2xpY2snIHwgJ2ZvcmVncm91bmRXaWxsRGlzcGxheScgfCAnZGlzbWlzcycgfCAncGVybWlzc2lvbkNoYW5nZScgfCAncGVybWlzc2lvblByb21wdERpc3BsYXknO1xuZXhwb3J0IHR5cGUgU2xpZGVkb3duRXZlbnROYW1lID0gJ3NsaWRlZG93bkFsbG93Q2xpY2snIHwgJ3NsaWRlZG93bkNhbmNlbENsaWNrJyB8ICdzbGlkZWRvd25DbG9zZWQnIHwgJ3NsaWRlZG93blF1ZXVlZCcgfCAnc2xpZGVkb3duU2hvd24nO1xuZXhwb3J0IHR5cGUgT25lU2lnbmFsRGVmZXJyZWRMb2FkZWRDYWxsYmFjayA9IChvbmVzaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHZvaWQ7XG5leHBvcnQgaW50ZXJmYWNlIElPU05vdGlmaWNhdGlvbiB7XG4gIC8qKlxuICAgKiBUaGUgT25lU2lnbmFsIG5vdGlmaWNhdGlvbiBpZDtcbiAgICogIC0gUHJpbWFyeSBpZCBvbiBPbmVTaWduYWwncyBSRVNUIEFQSSBhbmQgZGFzaGJvYXJkXG4gICAqL1xuICByZWFkb25seSBub3RpZmljYXRpb25JZDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBWaXNpYmxlIHRpdGxlIHRleHQgb24gdGhlIG5vdGlmaWNhdGlvblxuICAgKi9cbiAgcmVhZG9ubHkgdGl0bGU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFZpc2libGUgYm9keSB0ZXh0IG9uIHRoZSBub3RpZmljYXRpb25cbiAgICovXG4gIHJlYWRvbmx5IGJvZHk6IHN0cmluZztcblxuICAvKipcbiAgICogVmlzaWJsZSBpY29uIHRoZSBub3RpZmljYXRpb247IFVSTCBmb3JtYXRcbiAgICovXG4gIHJlYWRvbmx5IGljb24/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFZpc2libGUgc21hbGwgYmFkZ2VJY29uIHRoYXQgZGlzcGxheXMgb24gc29tZSBkZXZpY2VzOyBVUkwgZm9ybWF0XG4gICAqIEV4YW1wbGU6IE9uIEFuZHJvaWQncyBzdGF0dXMgYmFyXG4gICAqL1xuICByZWFkb25seSBiYWRnZUljb24/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFZpc2libGUgaW1hZ2Ugb24gdGhlIG5vdGlmaWNhdGlvbjsgVVJMIGZvcm1hdFxuICAgKi9cbiAgcmVhZG9ubHkgaW1hZ2U/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFZpc2libGUgYnV0dG9ucyBvbiB0aGUgbm90aWZpY2F0aW9uXG4gICAqL1xuICByZWFkb25seSBhY3Rpb25CdXR0b25zPzogSU9TTm90aWZpY2F0aW9uQWN0aW9uQnV0dG9uW107XG5cbiAgLyoqXG4gICAqIElmIHRoaXMgdmFsdWUgaXMgdGhlIHNhbWUgYXMgZXhpc3Rpbmcgbm90aWZpY2F0aW9uLCBpdCB3aWxsIHJlcGxhY2UgaXRcbiAgICogQ2FuIGJlIHNldCB3aGVuIGNyZWF0aW5nIHRoZSBub3RpZmljYXRpb24gd2l0aCBcIldlYiBQdXNoIFRvcGljXCIgb24gdGhlIGRhc2hib2FyZFxuICAgKiBvciB3ZWJfcHVzaF90b3BpYyBmcm9tIHRoZSBSRVNUIEFQSS5cbiAgICovXG4gIHJlYWRvbmx5IHRvcGljPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDdXN0b20gb2JqZWN0IHRoYXQgd2FzIHNlbnQgd2l0aCB0aGUgbm90aWZpY2F0aW9uO1xuICAgKiBkZWZpbmFibGUgd2hlbiBjcmVhdGluZyB0aGUgbm90aWZpY2F0aW9uIGZyb20gdGhlIE9uZVNpZ25hbCBSRVNUIEFQSSBvciBkYXNoYm9hcmRcbiAgICovXG4gIHJlYWRvbmx5IGFkZGl0aW9uYWxEYXRhPzogb2JqZWN0O1xuXG4gIC8qKlxuICAgKiBVUkwgdG8gb3BlbiB3aGVuIGNsaWNraW5nIG9yIHRhcHBpbmcgb24gdGhlIG5vdGlmaWNhdGlvblxuICAgKi9cbiAgcmVhZG9ubHkgbGF1bmNoVVJMPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDb25maXJtIHRoZSBwdXNoIHdhcyByZWNlaXZlZCBieSByZXBvcnRpbmcgYmFjayB0byBPbmVTaWduYWxcbiAgICovXG4gIHJlYWRvbmx5IGNvbmZpcm1EZWxpdmVyeTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJT1NOb3RpZmljYXRpb25BY3Rpb25CdXR0b24ge1xuICAvKipcbiAgICogQW55IHVuaXF1ZSBpZGVudGlmaWVyIHRvIHJlcHJlc2VudCB3aGljaCBidXR0b24gd2FzIGNsaWNrZWQuIFRoaXMgaXMgdHlwaWNhbGx5IHBhc3NlZCBiYWNrIHRvIHRoZSBzZXJ2aWNlIHdvcmtlclxuICAgKiBhbmQgaG9zdCBwYWdlIHRocm91Z2ggZXZlbnRzIHRvIGlkZW50aWZ5IHdoaWNoIGJ1dHRvbiB3YXMgY2xpY2tlZC5cbiAgICogZS5nLiAnbGlrZS1idXR0b24nXG4gICAqL1xuICByZWFkb25seSBhY3Rpb25JZDogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIG5vdGlmaWNhdGlvbiBhY3Rpb24gYnV0dG9uJ3MgdGV4dC5cbiAgICovXG4gIHJlYWRvbmx5IHRleHQ6IHN0cmluZztcbiAgLyoqXG4gICAqIEEgdmFsaWQgcHVibGljbHkgcmVhY2hhYmxlIEhUVFBTIFVSTCB0byBhbiBpbWFnZS5cbiAgICovXG4gIHJlYWRvbmx5IGljb24/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgVVJMIHRvIG9wZW4gdGhlIHdlYiBicm93c2VyIHRvIHdoZW4gdGhpcyBhY3Rpb24gYnV0dG9uIGlzIGNsaWNrZWQuXG4gICAqL1xuICByZWFkb25seSBsYXVuY2hVUkw/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm90aWZpY2F0aW9uQ2xpY2tSZXN1bHQge1xuICByZWFkb25seSBhY3Rpb25JZD86IHN0cmluZztcbiAgcmVhZG9ubHkgdXJsPzogc3RyaW5nO1xufVxuXG5leHBvcnQgdHlwZSBOb3RpZmljYXRpb25FdmVudFR5cGVNYXAgPSB7XG4gICdjbGljayc6IE5vdGlmaWNhdGlvbkNsaWNrRXZlbnQ7XG4gICdmb3JlZ3JvdW5kV2lsbERpc3BsYXknOiBOb3RpZmljYXRpb25Gb3JlZ3JvdW5kV2lsbERpc3BsYXlFdmVudDtcbiAgJ2Rpc21pc3MnOiBOb3RpZmljYXRpb25EaXNtaXNzRXZlbnQ7XG4gICdwZXJtaXNzaW9uQ2hhbmdlJzogYm9vbGVhbjtcbiAgJ3Blcm1pc3Npb25Qcm9tcHREaXNwbGF5Jzogdm9pZDtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm90aWZpY2F0aW9uRm9yZWdyb3VuZFdpbGxEaXNwbGF5RXZlbnQge1xuICByZWFkb25seSBub3RpZmljYXRpb246IElPU05vdGlmaWNhdGlvbjtcbiAgcHJldmVudERlZmF1bHQoKTogdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOb3RpZmljYXRpb25EaXNtaXNzRXZlbnQge1xuICBub3RpZmljYXRpb246IElPU05vdGlmaWNhdGlvbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOb3RpZmljYXRpb25DbGlja0V2ZW50IHtcbiAgcmVhZG9ubHkgbm90aWZpY2F0aW9uOiBJT1NOb3RpZmljYXRpb247XG4gIHJlYWRvbmx5IHJlc3VsdDogTm90aWZpY2F0aW9uQ2xpY2tSZXN1bHQ7XG59XG5cbmV4cG9ydCB0eXBlIFVzZXJDaGFuZ2VFdmVudCA9IHtcbiAgY3VycmVudDogVXNlck5hbWVzcGFjZVByb3BlcnRpZXM7XG59O1xuZXhwb3J0IHR5cGUgVXNlck5hbWVzcGFjZVByb3BlcnRpZXMgPSB7XG4gIG9uZXNpZ25hbElkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGV4dGVybmFsSWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUluaXRPYmplY3Qge1xuICBhcHBJZDogc3RyaW5nO1xuICBzdWJkb21haW5OYW1lPzogc3RyaW5nO1xuICByZXF1aXJlc1VzZXJQcml2YWN5Q29uc2VudD86IGJvb2xlYW47XG4gIHByb21wdE9wdGlvbnM/OiB7XG4gICAgc2xpZGVkb3duOiB7XG4gICAgICBwcm9tcHRzOiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXaGV0aGVyIHRvIGF1dG9tYXRpY2FsbHkgZGlzcGxheSB0aGUgcHJvbXB0LlxuICAgICAgICAgKiBgdHJ1ZWAgd2lsbCBkaXNwbGF5IHRoZSBwcm9tcHQgYmFzZWQgb24gdGhlIGRlbGF5IG9wdGlvbnMuXG4gICAgICAgICAqIGBmYWxzZWAgd2lsbCBwcmV2ZW50IHRoZSBwcm9tcHQgZnJvbSBkaXNwbGF5aW5nIHVudGlsIHRoZSBTbGlkZWRvd25zIG1ldGhvZHMgYXJlIHVzZWQuXG4gICAgICAgICAqL1xuICAgICAgICBhdXRvUHJvbXB0OiBib29sZWFuO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBPbmx5IGF2YWlsYWJsZSBmb3IgdHlwZTogY2F0ZWdvcnkuIFVwIHRvIDEwIGNhdGVnb3JpZXMuXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqICBjYXRlZ29yaWVzOiBbeyB0YWc6ICdsb2NhbF9uZXdzJywgbGFiZWw6ICdMb2NhbCBOZXdzJyB9XSAvLyBUaGUgdXNlciB3aWxsIGJlIHRhZ2dlZCB3aXRoIGxvY2FsX25ld3MgYnV0IHdpbGwgc2VlIFwiTG9jYWwgTmV3c1wiIGluIHRoZSBwcm9tcHQuXG4gICAgICAgICAqL1xuICAgICAgICBjYXRlZ29yaWVzOiB7XG4gICAgICAgICAgLyoqIFNob3VsZCBpZGVudGlmeSB0aGUgYWN0aW9uLiAqL1xuICAgICAgICAgIHRhZzogc3RyaW5nO1xuXG4gICAgICAgICAgLyoqIFdoYXQgdGhlIHVzZXIgd2lsbCBzZWUuICovXG4gICAgICAgICAgbGFiZWw6IHN0cmluZztcbiAgICAgICAgfVtdO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgZGVsYXkgb3B0aW9ucyBmb3IgdGhlIHByb21wdC5cbiAgICAgICAgICogQGV4YW1wbGUgZGVsYXk6IHsgcGFnZVZpZXdzOiAzLCB0aW1lRGVsYXk6IDIwIH0gLy8gVGhlIHVzZXIgd2lsbCBub3QgYmUgc2hvd24gdGhlIHByb21wdCB1bnRpbCAyMCBzZWNvbmRzIGFmdGVyIHRoZSAzcmQgcGFnZSB2aWV3LlxuICAgICAgICAgKi9cbiAgICAgICAgZGVsYXk6IHtcbiAgICAgICAgICAvKiogVGhlIG51bWJlciBvZiBwYWdlcyBhIHVzZXIgbmVlZHMgdG8gdmlzaXQgYmVmb3JlIHRoZSBwcm9tcHQgaXMgZGlzcGxheWVkLiAqL1xuICAgICAgICAgIHBhZ2VWaWV3cz86IG51bWJlcjtcblxuICAgICAgICAgIC8qKiBUaGUgbnVtYmVyIG9mIHNlY29uZHMgYSB1c2VyIG5lZWRzIHRvIHdhaXQgYmVmb3JlIHRoZSBwcm9tcHQgaXMgZGlzcGxheWVkLkJvdGggb3B0aW9ucyBtdXN0IGJlIHNhdGlzZmllZCBmb3IgdGhlIHByb21wdCB0byBkaXNwbGF5ICovXG4gICAgICAgICAgdGltZURlbGF5PzogbnVtYmVyO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdGV4dCB0byBkaXNwbGF5IGluIHRoZSBwcm9tcHQuXG4gICAgICAgICAqL1xuICAgICAgICB0ZXh0Pzoge1xuICAgICAgICAgIC8qKiBUaGUgY2FsbG91dCBhc2tpbmcgdGhlIHVzZXIgdG8gb3B0LWluLiBVcCB0byA5MCBjaGFyYWN0ZXJzLiAqL1xuICAgICAgICAgIGFjdGlvbk1lc3NhZ2U/OiBzdHJpbmc7XG5cbiAgICAgICAgICAvKiogVHJpZ2dlcnMgdGhlIG9wdC1pbi4gVXAgdG8gMTUgY2hhcmFjdGVycy4gKi9cbiAgICAgICAgICBhY2NlcHRCdXR0b24/OiBzdHJpbmc7XG5cbiAgICAgICAgICAvKiogQ2FuY2VscyBvcHQtaW4uIFVwIHRvIDE1IGNoYXJhY3RlcnMuICovXG4gICAgICAgICAgY2FuY2VsTWVzc2FnZT86IHN0cmluZztcblxuICAgICAgICAgIC8qKiBUaGUgbWVzc2FnZSBvZiB0aGUgY29uZmlybWF0aW9uIHByb21wdCBkaXNwbGF5ZWQgYWZ0ZXIgdGhlIGVtYWlsIGFuZC9vciBwaG9uZSBudW1iZXIgaXMgcHJvdmlkZWQuIFVwIHRvIDkwIGNoYXJhY3RlcnMuICovXG4gICAgICAgICAgY29uZmlybU1lc3NhZ2U/OiBzdHJpbmc7XG5cbiAgICAgICAgICAvKiogSWRlbnRpZmllcyB0aGUgZW1haWwgdGV4dCBmaWVsZC4gVXAgdG8gMTUgY2hhcmFjdGVycy4gKi9cbiAgICAgICAgICBlbWFpbExhYmVsPzogc3RyaW5nO1xuXG4gICAgICAgICAgLyoqIENhbmNlbHMgdGhlIGNhdGVnb3J5IHVwZGF0ZS4gVXAgdG8gMTUgY2hhcmFjdGVycy4gKi9cbiAgICAgICAgICBuZWdhdGl2ZVVwZGF0ZUJ1dHRvbj86IHN0cmluZztcblxuICAgICAgICAgIC8qKiBTYXZlcyB0aGUgdXBkYXRlZCBjYXRlZ29yeSB0YWdzLiBVcCB0byAxNSBjaGFyYWN0ZXJzLiAqL1xuICAgICAgICAgIHBvc2l0aXZlVXBkYXRlQnV0dG9uPzogc3RyaW5nO1xuXG4gICAgICAgICAgLyoqIElkZW50aWZpZXMgdGhlIHBob25lIG51bWJlciB0ZXh0IGZpZWxkLiBVcCB0byAxNSBjaGFyYWN0ZXJzLiAqL1xuICAgICAgICAgIHNtc0xhYmVsPzogc3RyaW5nO1xuXG4gICAgICAgICAgLyoqIEEgZGlmZmVyZW50IG1lc3NhZ2Ugc2hvd24gdG8gc3Vic2NyaWJlcnMgcHJlc2VudGVkIHRoZSBwcm9tcHQgYWdhaW4gdG8gdXBkYXRlIGNhdGVnb3JpZXMuIFVwIHRvIDkwIGNoYXJhY3RlcnMuICovXG4gICAgICAgICAgdXBkYXRlTWVzc2FnZT86IHN0cmluZztcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHR5cGUgb2YgcHJvbXB0IHRvIGRpc3BsYXkuXG4gICAgICAgICAqIGBwdXNoYCB3aGljaCBpcyB0aGUgU2xpZGUgUHJvbXB0IHdpdGhvdXQgY2F0ZWdvcmllcy5cbiAgICAgICAgICogYGNhdGVnb3J5YCB3aGljaCBpcyB0aGUgU2xpZGUgUHJvbXB0IHdpdGggY2F0ZWdvcmllcy5cbiAgICAgICAgICogYHNtc2Agb25seSBhc2tzIGZvciBwaG9uZSBudW1iZXIuXG4gICAgICAgICAqIGBlbWFpbGAgb25seSBhc2tzIGZvciBlbWFpbCBhZGRyZXNzLlxuICAgICAgICAgKiBgc21zQW5kRW1haWxgIGFza3MgZm9yIGJvdGggcGhvbmUgbnVtYmVyIGFuZCBlbWFpbCBhZGRyZXNzLlxuICAgICAgICAgKi9cbiAgICAgICAgdHlwZTogJ3B1c2gnIHwgJ2NhdGVnb3J5JyB8ICdzbXMnIHwgJ2VtYWlsJyB8ICdzbXNBbmRFbWFpbCc7XG4gICAgICB9W107XG4gICAgfTtcbiAgfTtcbiAgd2VsY29tZU5vdGlmaWNhdGlvbj86IHtcbiAgICAvKipcbiAgICAgKiBEaXNhYmxlcyBzZW5kaW5nIGEgd2VsY29tZSBub3RpZmljYXRpb24gdG8gbmV3IHNpdGUgdmlzaXRvcnMuIElmIHlvdSB3YW50IHRvIGRpc2FibGUgd2VsY29tZSBub3RpZmljYXRpb25zLCB0aGlzIGlzIHRoZSBvbmx5IG9wdGlvbiB5b3UgbmVlZC5cbiAgICAgKiBAZGVwcmVjYXRlZCBVc2UgJ2Rpc2FibGUnIGluc3RlYWQuIFRoaXMgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIHZlcnNpb24uXG4gICAgICovXG4gICAgZGlzYWJsZWQ/OiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogRGlzYWJsZXMgc2VuZGluZyBhIHdlbGNvbWUgbm90aWZpY2F0aW9uIHRvIG5ldyBzaXRlIHZpc2l0b3JzLiBJZiB5b3Ugd2FudCB0byBkaXNhYmxlIHdlbGNvbWUgbm90aWZpY2F0aW9ucywgdGhpcyBpcyB0aGUgb25seSBvcHRpb24geW91IG5lZWQuXG4gICAgICovXG4gICAgZGlzYWJsZT86IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBUaGUgd2VsY29tZSBub3RpZmljYXRpb24ncyBtZXNzYWdlLiBZb3UgY2FuIGxvY2FsaXplIHRoaXMgdG8geW91ciBvd24gbGFuZ3VhZ2UuXG4gICAgICogSWYgbGVmdCBibGFuayBvciBzZXQgdG8gYmxhbmssIHRoZSBkZWZhdWx0IG9mICdUaGFua3MgZm9yIHN1YnNjcmliaW5nIScgd2lsbCBiZSB1c2VkLlxuICAgICAqL1xuICAgIG1lc3NhZ2U6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIFRoZSB3ZWxjb21lIG5vdGlmaWNhdGlvbidzIHRpdGxlLiBZb3UgY2FuIGxvY2FsaXplIHRoaXMgdG8geW91ciBvd24gbGFuZ3VhZ2UuIElmIG5vdCBzZXQsIG9yIGxlZnQgYmxhbmssIHRoZSBzaXRlJ3MgdGl0bGUgd2lsbCBiZSB1c2VkLlxuICAgICAqIFNldCB0byBvbmUgc3BhY2UgJyAnIHRvIGNsZWFyIHRoZSB0aXRsZSwgYWx0aG91Z2ggdGhpcyBpcyBub3QgcmVjb21tZW5kZWQuXG4gICAgICovXG4gICAgdGl0bGU/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBCeSBkZWZhdWx0LCBjbGlja2luZyB0aGUgd2VsY29tZSBub3RpZmljYXRpb24gZG9lcyBub3Qgb3BlbiBhbnkgbGluay5cbiAgICAgKiBUaGlzIGlzIHJlY29tbWVuZGVkIGJlY2F1c2UgdGhlIHVzZXIgaGFzIGp1c3QgdmlzaXRlZCB5b3VyIHNpdGUgYW5kIHN1YnNjcmliZWQuXG4gICAgICovXG4gICAgdXJsPzogc3RyaW5nO1xuICB9O1xuXG4gIC8qKlxuICAgKiBXaWxsIGVuYWJsZSBjdXN0b21pemF0aW9uIG9mIHRoZSBub3RpZnkvc3Vic2NyaXB0aW9uIGJlbGwgYnV0dG9uLlxuICAgKi9cbiAgbm90aWZ5QnV0dG9uPzoge1xuICAgIC8qKlxuICAgICAqIEEgZnVuY3Rpb24geW91IGRlZmluZSB0aGF0IHJldHVybnMgdHJ1ZSB0byBzaG93IHRoZSBTdWJzY3JpcHRpb24gQmVsbCwgb3IgZmFsc2UgdG8gaGlkZSBpdC5cbiAgICAgKiBUeXBpY2FsbHkgdXNlZCB0aGUgaGlkZSB0aGUgU3Vic2NyaXB0aW9uIEJlbGwgYWZ0ZXIgdGhlIHVzZXIgaXMgc3Vic2NyaWJlZC5cbiAgICAgKiBUaGlzIGZ1bmN0aW9uIGlzIG5vdCByZS1ldmFsdWF0ZWQgb24gZXZlcnkgc3RhdGUgY2hhbmdlOyB0aGlzIGZ1bmN0aW9uIGlzIG9ubHkgZXZhbHVhdGVkIG9uY2Ugd2hlbiB0aGUgU3Vic2NyaXB0aW9uIEJlbGwgYmVnaW5zIHRvIHNob3cuXG4gICAgICovXG4gICAgZGlzcGxheVByZWRpY2F0ZT86ICgpID0+IGJvb2xlYW4gfCBQcm9taXNlPGJvb2xlYW4+O1xuXG4gICAgLyoqXG4gICAgICogRW5hYmxlIHRoZSBTdWJzY3JpcHRpb24gQmVsbC4gVGhlIFN1YnNjcmlwdGlvbiBCZWxsIGlzIG90aGVyd2lzZSBkaXNhYmxlZCBieSBkZWZhdWx0LlxuICAgICAqL1xuICAgIGVuYWJsZT86IGJvb2xlYW47XG5cbiAgICAvKiogU3BlY2lmeSBDU1MtdmFsaWQgcGl4ZWwgb2Zmc2V0cyB1c2luZyBib3R0b20sIGxlZnQsIGFuZCByaWdodC4gKi9cbiAgICBvZmZzZXQ/OiB7IGJvdHRvbTogc3RyaW5nOyBsZWZ0OiBzdHJpbmc7IHJpZ2h0OiBzdHJpbmcgfTtcblxuICAgIC8qKlxuICAgICAqIElmIGB0cnVlYCwgdGhlIFN1YnNjcmlwdGlvbiBCZWxsIHdpbGwgZGlzcGxheSBhbiBpY29uIHRoYXQgdGhlcmUgaXMgMSB1bnJlYWQgbWVzc2FnZS5cbiAgICAgKiBXaGVuIGhvdmVyaW5nIG92ZXIgdGhlIFN1YnNjcmlwdGlvbiBCZWxsLCB0aGUgdXNlciB3aWxsIHNlZSBjdXN0b20gdGV4dCBzZXQgYnkgbWVzc2FnZS5wcmVub3RpZnkuXG4gICAgICovXG4gICAgcHJlbm90aWZ5OiBib29sZWFuO1xuXG4gICAgLyoqIEVpdGhlciBgYm90dG9tLWxlZnRgIG9yIGBib3R0b20tcmlnaHRgLiBUaGUgU3Vic2NyaXB0aW9uIEJlbGwgd2lsbCBiZSBmaXhlZCBhdCB0aGlzIGxvY2F0aW9uIG9uIHlvdXIgcGFnZS4gKi9cbiAgICBwb3NpdGlvbj86ICdib3R0b20tbGVmdCcgfCAnYm90dG9tLXJpZ2h0JztcblxuICAgIC8qKiAgU2V0IGBmYWxzZWAgdG8gaGlkZSB0aGUgJ1Bvd2VyZWQgYnkgT25lU2lnbmFsJyB0ZXh0IGluIHRoZSBTdWJzY3JpcHRpb24gQmVsbCBkaWFsb2cgcG9wdXAuICovXG4gICAgc2hvd0NyZWRpdDogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIFRoZSBTdWJzY3JpcHRpb24gQmVsbCB3aWxsIGluaXRpYWxseSBhcHBlYXIgYXQgb25lIG9mIHRoZXNlIHNpemVzLCBhbmQgdGhlbiBzaHJpbmsgZG93biB0byBzaXplIGBzbWFsbGAgYWZ0ZXIgdGhlIHVzZXIgc3Vic2NyaWJlcy5cbiAgICAgKi9cbiAgICBzaXplPzogJ3NtYWxsJyB8ICdtZWRpdW0nIHwgJ2xhcmdlJztcblxuICAgIC8qKiBDdXN0b21pemUgdGhlIFN1YnNjcmlwdGlvbiBCZWxsIHRleHQuICovXG4gICAgdGV4dDoge1xuICAgICAgJ2RpYWxvZy5ibG9ja2VkLm1lc3NhZ2UnOiBzdHJpbmc7XG4gICAgICAnZGlhbG9nLmJsb2NrZWQudGl0bGUnOiBzdHJpbmc7XG4gICAgICAnZGlhbG9nLm1haW4uYnV0dG9uLnN1YnNjcmliZSc6IHN0cmluZztcbiAgICAgICdkaWFsb2cubWFpbi5idXR0b24udW5zdWJzY3JpYmUnOiBzdHJpbmc7XG4gICAgICAnZGlhbG9nLm1haW4udGl0bGUnOiBzdHJpbmc7XG4gICAgICAnbWVzc2FnZS5hY3Rpb24ucmVzdWJzY3JpYmVkJzogc3RyaW5nO1xuICAgICAgJ21lc3NhZ2UuYWN0aW9uLnN1YnNjcmliZWQnOiBzdHJpbmc7XG4gICAgICAnbWVzc2FnZS5hY3Rpb24uc3Vic2NyaWJpbmcnOiBzdHJpbmc7XG4gICAgICAnbWVzc2FnZS5hY3Rpb24udW5zdWJzY3JpYmVkJzogc3RyaW5nO1xuICAgICAgJ21lc3NhZ2UucHJlbm90aWZ5Jzogc3RyaW5nO1xuICAgICAgJ3RpcC5zdGF0ZS5ibG9ja2VkJzogc3RyaW5nO1xuICAgICAgJ3RpcC5zdGF0ZS5zdWJzY3JpYmVkJzogc3RyaW5nO1xuICAgICAgJ3RpcC5zdGF0ZS51bnN1YnNjcmliZWQnOiBzdHJpbmc7XG4gICAgfTtcbiAgfTtcblxuICBwZXJzaXN0Tm90aWZpY2F0aW9uPzogYm9vbGVhbjtcbiAgd2ViaG9va3M/OiB7XG4gICAgLyoqXG4gICAgICogRW5hYmxlIHRoaXMgc2V0dGluZyBvbmx5IGlmIHlvdXIgc2VydmVyIGhhcyBDT1JTIGVuYWJsZWQgYW5kIHN1cHBvcnRzIG5vbi1zaW1wbGUgQ09SUyByZXF1ZXN0cy5cbiAgICAgKiBJZiB0aGlzIHNldHRpbmcgaXMgZGlzYWJsZWQsIHlvdXIgd2ViaG9vayB3aWxsIG5vdCBuZWVkIENPUlMgdG8gcmVjZWl2ZSBkYXRhLCBidXQgaXQgd2lsbCBub3QgcmVjZWl2ZSB0aGUgY3VzdG9tIGhlYWRlcnMuXG4gICAgICogVGhlIHNpbXBsZXN0IG9wdGlvbiBpcyB0byBsZWF2ZSBpdCBkaXNhYmxlZC5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuICAgIGNvcnM6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGV2ZW50IG9jY3VycyBhZnRlciBhIG5vdGlmaWNhdGlvbiBpcyBjbGlja2VkLlxuICAgICAqIEBleGFtcGxlIGh0dHBzOi8vc2l0ZS5jb20vaG9va1xuICAgICAqL1xuICAgICdub3RpZmljYXRpb24uY2xpY2tlZCc/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGV2ZW50IG9jY3VycyBhZnRlciBhIG5vdGlmaWNhdGlvbiBpcyBpbnRlbnRpb25hbGx5IGRpc21pc3NlZCBieSB0aGUgdXNlciAoY2xpY2tpbmcgdGhlIG5vdGlmaWNhdGlvbiBib2R5IG9yIG9uZSBvZiB0aGUgbm90aWZpY2F0aW9uIGFjdGlvbiBidXR0b25zIGRvZXMgbm90IHRyaWdnZXIgdGhlIGRpc21pc3NlZCB3ZWJob29rKSxcbiAgICAgKiBhZnRlciBhIGdyb3VwIG9mIG5vdGlmaWNhdGlvbnMgYXJlIGFsbCBkaXNtaXNzZWQgKHdpdGggdGhpcyBub3RpZmljYXRpb24gYXMgcGFydCBvZiB0aGF0IGdyb3VwKSwgb3IgYWZ0ZXIgYSBub3RpZmljYXRpb24gZXhwaXJlcyBvbiBpdHMgb3duIHRpbWUgYW5kIGRpc2FwcGVhcnMuIFRoaXMgZXZlbnQgaXMgc3VwcG9ydGVkIG9uIENocm9tZSBvbmx5LlxuICAgICAqIEBleGFtcGxlIGh0dHBzOi8vc2l0ZS5jb20vaG9va1xuICAgICAqL1xuICAgICdub3RpZmljYXRpb24uZGlzbWlzc2VkJz86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIFRoaXMgZXZlbnQgb2NjdXJzIGFmdGVyIGEgbm90aWZpY2F0aW9uIGlzIGRpc3BsYXllZC5cbiAgICAgKiBAZXhhbXBsZSBodHRwczovL3NpdGUuY29tL2hvb2tcbiAgICAgKi9cbiAgICAnbm90aWZpY2F0aW9uLndpbGxEaXNwbGF5Jz86IHN0cmluZztcbiAgfTtcbiAgYXV0b1Jlc3Vic2NyaWJlPzogYm9vbGVhbjtcbiAgYXV0b1JlZ2lzdGVyPzogYm9vbGVhbjtcbiAgbm90aWZpY2F0aW9uQ2xpY2tIYW5kbGVyTWF0Y2g/OiBzdHJpbmc7XG4gIG5vdGlmaWNhdGlvbkNsaWNrSGFuZGxlckFjdGlvbj86IHN0cmluZztcbiAgcGF0aD86IHN0cmluZztcbiAgc2VydmljZVdvcmtlclBhcmFtPzogeyBzY29wZTogc3RyaW5nIH07XG4gIHNlcnZpY2VXb3JrZXJQYXRoPzogc3RyaW5nO1xuICBzZXJ2aWNlV29ya2VyT3ZlcnJpZGVGb3JUeXBpY2FsPzogYm9vbGVhbjtcbiAgc2VydmljZVdvcmtlclVwZGF0ZXJQYXRoPzogc3RyaW5nO1xuICBhbGxvd0xvY2FsaG9zdEFzU2VjdXJlT3JpZ2luPzogYm9vbGVhbjtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElPbmVTaWduYWxPbmVTaWduYWwge1xuXHRTbGlkZWRvd246IElPbmVTaWduYWxTbGlkZWRvd247XG5cdE5vdGlmaWNhdGlvbnM6IElPbmVTaWduYWxOb3RpZmljYXRpb25zO1xuXHRTZXNzaW9uOiBJT25lU2lnbmFsU2Vzc2lvbjtcblx0VXNlcjogSU9uZVNpZ25hbFVzZXI7XG5cdERlYnVnOiBJT25lU2lnbmFsRGVidWc7XG5cdGxvZ2luKGV4dGVybmFsSWQ6IHN0cmluZywgand0VG9rZW4/OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+O1xuXHRsb2dvdXQoKTogUHJvbWlzZTx2b2lkPjtcblx0aW5pdChvcHRpb25zOiBJSW5pdE9iamVjdCk6IFByb21pc2U8dm9pZD47XG5cdHNldENvbnNlbnRHaXZlbihjb25zZW50OiBib29sZWFuKTogUHJvbWlzZTx2b2lkPjtcblx0c2V0Q29uc2VudFJlcXVpcmVkKHJlcXVpcmVzQ29uc2VudDogYm9vbGVhbik6IFByb21pc2U8dm9pZD47XG59XG5leHBvcnQgaW50ZXJmYWNlIElPbmVTaWduYWxOb3RpZmljYXRpb25zIHtcblx0cGVybWlzc2lvbk5hdGl2ZTogTm90aWZpY2F0aW9uUGVybWlzc2lvbjtcblx0cGVybWlzc2lvbjogYm9vbGVhbjtcblx0c2V0RGVmYXVsdFVybCh1cmw6IHN0cmluZyk6IFByb21pc2U8dm9pZD47XG5cdHNldERlZmF1bHRUaXRsZSh0aXRsZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPjtcblx0aXNQdXNoU3VwcG9ydGVkKCk6IGJvb2xlYW47XG5cdHJlcXVlc3RQZXJtaXNzaW9uKCk6IFByb21pc2U8dm9pZD47XG5cdGFkZEV2ZW50TGlzdGVuZXI8SyBleHRlbmRzIE5vdGlmaWNhdGlvbkV2ZW50TmFtZT4oZXZlbnQ6IEssIGxpc3RlbmVyOiAob2JqOiBOb3RpZmljYXRpb25FdmVudFR5cGVNYXBbS10pID0+IHZvaWQpOiB2b2lkO1xuXHRyZW1vdmVFdmVudExpc3RlbmVyPEsgZXh0ZW5kcyBOb3RpZmljYXRpb25FdmVudE5hbWU+KGV2ZW50OiBLLCBsaXN0ZW5lcjogKG9iajogTm90aWZpY2F0aW9uRXZlbnRUeXBlTWFwW0tdKSA9PiB2b2lkKTogdm9pZDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSU9uZVNpZ25hbFNsaWRlZG93biB7XG5cdHByb21wdFB1c2gob3B0aW9ucz86IEF1dG9Qcm9tcHRPcHRpb25zKTogUHJvbWlzZTx2b2lkPjtcblx0cHJvbXB0UHVzaENhdGVnb3JpZXMob3B0aW9ucz86IEF1dG9Qcm9tcHRPcHRpb25zKTogUHJvbWlzZTx2b2lkPjtcblx0cHJvbXB0U21zKG9wdGlvbnM/OiBBdXRvUHJvbXB0T3B0aW9ucyk6IFByb21pc2U8dm9pZD47XG5cdHByb21wdEVtYWlsKG9wdGlvbnM/OiBBdXRvUHJvbXB0T3B0aW9ucyk6IFByb21pc2U8dm9pZD47XG5cdHByb21wdFNtc0FuZEVtYWlsKG9wdGlvbnM/OiBBdXRvUHJvbXB0T3B0aW9ucyk6IFByb21pc2U8dm9pZD47XG5cdGFkZEV2ZW50TGlzdGVuZXIoZXZlbnQ6IFNsaWRlZG93bkV2ZW50TmFtZSwgbGlzdGVuZXI6ICh3YXNTaG93bjogYm9vbGVhbikgPT4gdm9pZCk6IHZvaWQ7XG5cdHJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQ6IFNsaWRlZG93bkV2ZW50TmFtZSwgbGlzdGVuZXI6ICh3YXNTaG93bjogYm9vbGVhbikgPT4gdm9pZCk6IHZvaWQ7XG59XG5leHBvcnQgaW50ZXJmYWNlIElPbmVTaWduYWxEZWJ1ZyB7XG5cdHNldExvZ0xldmVsKGxvZ0xldmVsOiAndHJhY2UnIHwgJ2RlYnVnJyB8ICdpbmZvJyB8ICd3YXJuJyB8ICdlcnJvcicpOiB2b2lkO1xufVxuZXhwb3J0IGludGVyZmFjZSBJT25lU2lnbmFsU2Vzc2lvbiB7XG5cdHNlbmRPdXRjb21lKG91dGNvbWVOYW1lOiBzdHJpbmcsIG91dGNvbWVXZWlnaHQ/OiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+O1xuXHRzZW5kVW5pcXVlT3V0Y29tZShvdXRjb21lTmFtZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSU9uZVNpZ25hbFVzZXIge1xuXHRvbmVzaWduYWxJZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHRleHRlcm5hbElkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdFB1c2hTdWJzY3JpcHRpb246IElPbmVTaWduYWxQdXNoU3Vic2NyaXB0aW9uO1xuXHRhZGRBbGlhcyhsYWJlbDogc3RyaW5nLCBpZDogc3RyaW5nKTogdm9pZDtcblx0YWRkQWxpYXNlcyhhbGlhc2VzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KTogdm9pZDtcblx0cmVtb3ZlQWxpYXMobGFiZWw6IHN0cmluZyk6IHZvaWQ7XG5cdHJlbW92ZUFsaWFzZXMobGFiZWxzOiBzdHJpbmdbXSk6IHZvaWQ7XG5cdGFkZEVtYWlsKGVtYWlsOiBzdHJpbmcpOiB2b2lkO1xuXHRyZW1vdmVFbWFpbChlbWFpbDogc3RyaW5nKTogdm9pZDtcblx0YWRkU21zKHNtc051bWJlcjogc3RyaW5nKTogdm9pZDtcblx0cmVtb3ZlU21zKHNtc051bWJlcjogc3RyaW5nKTogdm9pZDtcblx0YWRkVGFnKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZDtcblx0YWRkVGFncyh0YWdzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KTogdm9pZDtcblx0cmVtb3ZlVGFnKGtleTogc3RyaW5nKTogdm9pZDtcblx0cmVtb3ZlVGFncyhrZXlzOiBzdHJpbmdbXSk6IHZvaWQ7XG5cdGdldFRhZ3MoKTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcblx0YWRkRXZlbnRMaXN0ZW5lcihldmVudDogJ2NoYW5nZScsIGxpc3RlbmVyOiAoY2hhbmdlOiBVc2VyQ2hhbmdlRXZlbnQpID0+IHZvaWQpOiB2b2lkO1xuXHRyZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50OiAnY2hhbmdlJywgbGlzdGVuZXI6IChjaGFuZ2U6IFVzZXJDaGFuZ2VFdmVudCkgPT4gdm9pZCk6IHZvaWQ7XG5cdHNldExhbmd1YWdlKGxhbmd1YWdlOiBzdHJpbmcpOiB2b2lkO1xuXHRnZXRMYW5ndWFnZSgpOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIElPbmVTaWduYWxQdXNoU3Vic2NyaXB0aW9uIHtcblx0aWQ6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQ7XG5cdHRva2VuOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkO1xuXHRvcHRlZEluOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXHRvcHRJbigpOiBQcm9taXNlPHZvaWQ+O1xuXHRvcHRPdXQoKTogUHJvbWlzZTx2b2lkPjtcblx0YWRkRXZlbnRMaXN0ZW5lcihldmVudDogJ2NoYW5nZScsIGxpc3RlbmVyOiAoY2hhbmdlOiBTdWJzY3JpcHRpb25DaGFuZ2VFdmVudCkgPT4gdm9pZCk6IHZvaWQ7XG5cdHJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQ6ICdjaGFuZ2UnLCBsaXN0ZW5lcjogKGNoYW5nZTogU3Vic2NyaXB0aW9uQ2hhbmdlRXZlbnQpID0+IHZvaWQpOiB2b2lkO1xufVxuZnVuY3Rpb24gb25lU2lnbmFsTG9naW4oZXh0ZXJuYWxJZDogc3RyaW5nLCBqd3RUb2tlbj86IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICBcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ09uZVNpZ25hbCBzY3JpcHQgZmFpbGVkIHRvIGxvYWQuJykpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgICBvbmVTaWduYWwubG9naW4oZXh0ZXJuYWxJZCwgand0VG9rZW4pLnRoZW4oKCkgPT4gcmVzb2x2ZSgpKTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBvbmVTaWduYWxMb2dvdXQoKTogUHJvbWlzZTx2b2lkPiB7XG4gIFxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignT25lU2lnbmFsIHNjcmlwdCBmYWlsZWQgdG8gbG9hZC4nKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5sb2dvdXQoKS50aGVuKCgpID0+IHJlc29sdmUoKSk7XG4gICAgfSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gb25lU2lnbmFsU2V0Q29uc2VudEdpdmVuKGNvbnNlbnQ6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaWYgKGlzT25lU2lnbmFsU2NyaXB0RmFpbGVkKSB7XG4gICAgICByZWplY3QobmV3IEVycm9yKCdPbmVTaWduYWwgc2NyaXB0IGZhaWxlZCB0byBsb2FkLicpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgICAgb25lU2lnbmFsLnNldENvbnNlbnRHaXZlbihjb25zZW50KS50aGVuKCgpID0+IHJlc29sdmUoKSk7XG4gICAgfSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gb25lU2lnbmFsU2V0Q29uc2VudFJlcXVpcmVkKHJlcXVpcmVzQ29uc2VudDogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xuICBcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ09uZVNpZ25hbCBzY3JpcHQgZmFpbGVkIHRvIGxvYWQuJykpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgICBvbmVTaWduYWwuc2V0Q29uc2VudFJlcXVpcmVkKHJlcXVpcmVzQ29uc2VudCkudGhlbigoKSA9PiByZXNvbHZlKCkpO1xuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHNsaWRlZG93blByb21wdFB1c2gob3B0aW9ucz86IEF1dG9Qcm9tcHRPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XG4gIFxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignT25lU2lnbmFsIHNjcmlwdCBmYWlsZWQgdG8gbG9hZC4nKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5TbGlkZWRvd24ucHJvbXB0UHVzaChvcHRpb25zKS50aGVuKCgpID0+IHJlc29sdmUoKSk7XG4gICAgfSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gc2xpZGVkb3duUHJvbXB0UHVzaENhdGVnb3JpZXMob3B0aW9ucz86IEF1dG9Qcm9tcHRPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XG4gIFxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignT25lU2lnbmFsIHNjcmlwdCBmYWlsZWQgdG8gbG9hZC4nKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5TbGlkZWRvd24ucHJvbXB0UHVzaENhdGVnb3JpZXMob3B0aW9ucykudGhlbigoKSA9PiByZXNvbHZlKCkpO1xuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHNsaWRlZG93blByb21wdFNtcyhvcHRpb25zPzogQXV0b1Byb21wdE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaWYgKGlzT25lU2lnbmFsU2NyaXB0RmFpbGVkKSB7XG4gICAgICByZWplY3QobmV3IEVycm9yKCdPbmVTaWduYWwgc2NyaXB0IGZhaWxlZCB0byBsb2FkLicpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgICAgb25lU2lnbmFsLlNsaWRlZG93bi5wcm9tcHRTbXMob3B0aW9ucykudGhlbigoKSA9PiByZXNvbHZlKCkpO1xuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHNsaWRlZG93blByb21wdEVtYWlsKG9wdGlvbnM/OiBBdXRvUHJvbXB0T3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xuICBcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ09uZVNpZ25hbCBzY3JpcHQgZmFpbGVkIHRvIGxvYWQuJykpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgICBvbmVTaWduYWwuU2xpZGVkb3duLnByb21wdEVtYWlsKG9wdGlvbnMpLnRoZW4oKCkgPT4gcmVzb2x2ZSgpKTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBzbGlkZWRvd25Qcm9tcHRTbXNBbmRFbWFpbChvcHRpb25zPzogQXV0b1Byb21wdE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaWYgKGlzT25lU2lnbmFsU2NyaXB0RmFpbGVkKSB7XG4gICAgICByZWplY3QobmV3IEVycm9yKCdPbmVTaWduYWwgc2NyaXB0IGZhaWxlZCB0byBsb2FkLicpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgICAgb25lU2lnbmFsLlNsaWRlZG93bi5wcm9tcHRTbXNBbmRFbWFpbChvcHRpb25zKS50aGVuKCgpID0+IHJlc29sdmUoKSk7XG4gICAgfSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gc2xpZGVkb3duQWRkRXZlbnRMaXN0ZW5lcihldmVudDogU2xpZGVkb3duRXZlbnROYW1lLCBsaXN0ZW5lcjogKHdhc1Nob3duOiBib29sZWFuKSA9PiB2b2lkKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlNsaWRlZG93bi5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzbGlkZWRvd25SZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50OiBTbGlkZWRvd25FdmVudE5hbWUsIGxpc3RlbmVyOiAod2FzU2hvd246IGJvb2xlYW4pID0+IHZvaWQpOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuU2xpZGVkb3duLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG5vdGlmaWNhdGlvbnNTZXREZWZhdWx0VXJsKHVybDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gIFxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignT25lU2lnbmFsIHNjcmlwdCBmYWlsZWQgdG8gbG9hZC4nKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5Ob3RpZmljYXRpb25zLnNldERlZmF1bHRVcmwodXJsKS50aGVuKCgpID0+IHJlc29sdmUoKSk7XG4gICAgfSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gbm90aWZpY2F0aW9uc1NldERlZmF1bHRUaXRsZSh0aXRsZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gIFxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignT25lU2lnbmFsIHNjcmlwdCBmYWlsZWQgdG8gbG9hZC4nKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5Ob3RpZmljYXRpb25zLnNldERlZmF1bHRUaXRsZSh0aXRsZSkudGhlbigoKSA9PiByZXNvbHZlKCkpO1xuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIG5vdGlmaWNhdGlvbnNSZXF1ZXN0UGVybWlzc2lvbigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaWYgKGlzT25lU2lnbmFsU2NyaXB0RmFpbGVkKSB7XG4gICAgICByZWplY3QobmV3IEVycm9yKCdPbmVTaWduYWwgc2NyaXB0IGZhaWxlZCB0byBsb2FkLicpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgICAgb25lU2lnbmFsLk5vdGlmaWNhdGlvbnMucmVxdWVzdFBlcm1pc3Npb24oKS50aGVuKCgpID0+IHJlc29sdmUoKSk7XG4gICAgfSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gbm90aWZpY2F0aW9uc0FkZEV2ZW50TGlzdGVuZXI8SyBleHRlbmRzIE5vdGlmaWNhdGlvbkV2ZW50TmFtZT4oZXZlbnQ6IEssIGxpc3RlbmVyOiAob2JqOiBOb3RpZmljYXRpb25FdmVudFR5cGVNYXBbS10pID0+IHZvaWQpOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuTm90aWZpY2F0aW9ucy5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBub3RpZmljYXRpb25zUmVtb3ZlRXZlbnRMaXN0ZW5lcjxLIGV4dGVuZHMgTm90aWZpY2F0aW9uRXZlbnROYW1lPihldmVudDogSywgbGlzdGVuZXI6IChvYmo6IE5vdGlmaWNhdGlvbkV2ZW50VHlwZU1hcFtLXSkgPT4gdm9pZCk6IHZvaWQge1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIG9uZVNpZ25hbC5Ob3RpZmljYXRpb25zLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNlc3Npb25TZW5kT3V0Y29tZShvdXRjb21lTmFtZTogc3RyaW5nLCBvdXRjb21lV2VpZ2h0PzogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gIFxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignT25lU2lnbmFsIHNjcmlwdCBmYWlsZWQgdG8gbG9hZC4nKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5TZXNzaW9uLnNlbmRPdXRjb21lKG91dGNvbWVOYW1lLCBvdXRjb21lV2VpZ2h0KS50aGVuKCgpID0+IHJlc29sdmUoKSk7XG4gICAgfSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gc2Vzc2lvblNlbmRVbmlxdWVPdXRjb21lKG91dGNvbWVOYW1lOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaWYgKGlzT25lU2lnbmFsU2NyaXB0RmFpbGVkKSB7XG4gICAgICByZWplY3QobmV3IEVycm9yKCdPbmVTaWduYWwgc2NyaXB0IGZhaWxlZCB0byBsb2FkLicpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgICAgb25lU2lnbmFsLlNlc3Npb24uc2VuZFVuaXF1ZU91dGNvbWUob3V0Y29tZU5hbWUpLnRoZW4oKCkgPT4gcmVzb2x2ZSgpKTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiB1c2VyQWRkQWxpYXMobGFiZWw6IHN0cmluZywgaWQ6IHN0cmluZyk6IHZvaWQge1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIG9uZVNpZ25hbC5Vc2VyLmFkZEFsaWFzKGxhYmVsLCBpZCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1c2VyQWRkQWxpYXNlcyhhbGlhc2VzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIuYWRkQWxpYXNlcyhhbGlhc2VzKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVzZXJSZW1vdmVBbGlhcyhsYWJlbDogc3RyaW5nKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIucmVtb3ZlQWxpYXMobGFiZWwpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXNlclJlbW92ZUFsaWFzZXMobGFiZWxzOiBzdHJpbmdbXSk6IHZvaWQge1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIG9uZVNpZ25hbC5Vc2VyLnJlbW92ZUFsaWFzZXMobGFiZWxzKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVzZXJBZGRFbWFpbChlbWFpbDogc3RyaW5nKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIuYWRkRW1haWwoZW1haWwpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXNlclJlbW92ZUVtYWlsKGVtYWlsOiBzdHJpbmcpOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuVXNlci5yZW1vdmVFbWFpbChlbWFpbCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1c2VyQWRkU21zKHNtc051bWJlcjogc3RyaW5nKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIuYWRkU21zKHNtc051bWJlcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1c2VyUmVtb3ZlU21zKHNtc051bWJlcjogc3RyaW5nKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIucmVtb3ZlU21zKHNtc051bWJlcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1c2VyQWRkVGFnKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIuYWRkVGFnKGtleSwgdmFsdWUpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXNlckFkZFRhZ3ModGFnczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSk6IHZvaWQge1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIG9uZVNpZ25hbC5Vc2VyLmFkZFRhZ3ModGFncyk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1c2VyUmVtb3ZlVGFnKGtleTogc3RyaW5nKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIucmVtb3ZlVGFnKGtleSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1c2VyUmVtb3ZlVGFncyhrZXlzOiBzdHJpbmdbXSk6IHZvaWQge1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIG9uZVNpZ25hbC5Vc2VyLnJlbW92ZVRhZ3Moa2V5cyk7XG4gIH0pO1xufVxuXG4vLyBAdHMtZXhwZWN0LWVycm9yIC0gcmV0dXJuIG5vbi1Qcm9taXNlIHR5cGUgZGVzcGl0ZSBuZWVkaW5nIHRvIGF3YWl0IE9uZVNpZ25hbERlZmVycmVkXG5hc3luYyBmdW5jdGlvbiB1c2VyR2V0VGFncygpOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHtcbiAgbGV0IHJldFZhbDogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgYXdhaXQgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICByZXRWYWwgPSBvbmVTaWduYWwuVXNlci5nZXRUYWdzKCk7XG4gIH0pO1xuICAvLyBAdHMtaWdub3JlXG4gIHJldHVybiByZXRWYWw7XG59XG5cbmZ1bmN0aW9uIHVzZXJBZGRFdmVudExpc3RlbmVyKGV2ZW50OiAnY2hhbmdlJywgbGlzdGVuZXI6IChjaGFuZ2U6IFVzZXJDaGFuZ2VFdmVudCkgPT4gdm9pZCk6IHZvaWQge1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIG9uZVNpZ25hbC5Vc2VyLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVzZXJSZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50OiAnY2hhbmdlJywgbGlzdGVuZXI6IChjaGFuZ2U6IFVzZXJDaGFuZ2VFdmVudCkgPT4gdm9pZCk6IHZvaWQge1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIG9uZVNpZ25hbC5Vc2VyLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVzZXJTZXRMYW5ndWFnZShsYW5ndWFnZTogc3RyaW5nKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIuc2V0TGFuZ3VhZ2UobGFuZ3VhZ2UpO1xuICB9KTtcbn1cblxuLy8gQHRzLWV4cGVjdC1lcnJvciAtIHJldHVybiBub24tUHJvbWlzZSB0eXBlIGRlc3BpdGUgbmVlZGluZyB0byBhd2FpdCBPbmVTaWduYWxEZWZlcnJlZFxuYXN5bmMgZnVuY3Rpb24gdXNlckdldExhbmd1YWdlKCk6IHN0cmluZyB7XG4gIGxldCByZXRWYWw6IHN0cmluZztcbiAgYXdhaXQgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICByZXRWYWwgPSBvbmVTaWduYWwuVXNlci5nZXRMYW5ndWFnZSgpO1xuICB9KTtcbiAgLy8gQHRzLWlnbm9yZVxuICByZXR1cm4gcmV0VmFsO1xufVxuXG5mdW5jdGlvbiBwdXNoU3Vic2NyaXB0aW9uT3B0SW4oKTogUHJvbWlzZTx2b2lkPiB7XG4gIFxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignT25lU2lnbmFsIHNjcmlwdCBmYWlsZWQgdG8gbG9hZC4nKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5Vc2VyLlB1c2hTdWJzY3JpcHRpb24ub3B0SW4oKS50aGVuKCgpID0+IHJlc29sdmUoKSk7XG4gICAgfSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gcHVzaFN1YnNjcmlwdGlvbk9wdE91dCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaWYgKGlzT25lU2lnbmFsU2NyaXB0RmFpbGVkKSB7XG4gICAgICByZWplY3QobmV3IEVycm9yKCdPbmVTaWduYWwgc2NyaXB0IGZhaWxlZCB0byBsb2FkLicpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgICAgb25lU2lnbmFsLlVzZXIuUHVzaFN1YnNjcmlwdGlvbi5vcHRPdXQoKS50aGVuKCgpID0+IHJlc29sdmUoKSk7XG4gICAgfSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gcHVzaFN1YnNjcmlwdGlvbkFkZEV2ZW50TGlzdGVuZXIoZXZlbnQ6ICdjaGFuZ2UnLCBsaXN0ZW5lcjogKGNoYW5nZTogU3Vic2NyaXB0aW9uQ2hhbmdlRXZlbnQpID0+IHZvaWQpOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuVXNlci5QdXNoU3Vic2NyaXB0aW9uLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHB1c2hTdWJzY3JpcHRpb25SZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50OiAnY2hhbmdlJywgbGlzdGVuZXI6IChjaGFuZ2U6IFN1YnNjcmlwdGlvbkNoYW5nZUV2ZW50KSA9PiB2b2lkKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIuUHVzaFN1YnNjcmlwdGlvbi5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkZWJ1Z1NldExvZ0xldmVsKGxvZ0xldmVsOiAndHJhY2UnIHwgJ2RlYnVnJyB8ICdpbmZvJyB8ICd3YXJuJyB8ICdlcnJvcicpOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuRGVidWcuc2V0TG9nTGV2ZWwobG9nTGV2ZWwpO1xuICB9KTtcbn1cblxuXG5jb25zdCBQdXNoU3Vic2NyaXB0aW9uTmFtZXNwYWNlOiBJT25lU2lnbmFsUHVzaFN1YnNjcmlwdGlvbiA9IHtcblx0Z2V0IGlkKCk6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQgeyByZXR1cm4gd2luZG93Lk9uZVNpZ25hbD8uVXNlcj8uUHVzaFN1YnNjcmlwdGlvbj8uaWQ7IH0sXG5cdGdldCB0b2tlbigpOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHdpbmRvdy5PbmVTaWduYWw/LlVzZXI/LlB1c2hTdWJzY3JpcHRpb24/LnRva2VuOyB9LFxuXHRnZXQgb3B0ZWRJbigpOiBib29sZWFuIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHdpbmRvdy5PbmVTaWduYWw/LlVzZXI/LlB1c2hTdWJzY3JpcHRpb24/Lm9wdGVkSW47IH0sXG5cdG9wdEluOiBwdXNoU3Vic2NyaXB0aW9uT3B0SW4sXG5cdG9wdE91dDogcHVzaFN1YnNjcmlwdGlvbk9wdE91dCxcblx0YWRkRXZlbnRMaXN0ZW5lcjogcHVzaFN1YnNjcmlwdGlvbkFkZEV2ZW50TGlzdGVuZXIsXG5cdHJlbW92ZUV2ZW50TGlzdGVuZXI6IHB1c2hTdWJzY3JpcHRpb25SZW1vdmVFdmVudExpc3RlbmVyLFxufTtcblxuY29uc3QgVXNlck5hbWVzcGFjZTogSU9uZVNpZ25hbFVzZXIgPSB7XG5cdGdldCBvbmVzaWduYWxJZCgpOiBzdHJpbmcgfCB1bmRlZmluZWQgeyByZXR1cm4gd2luZG93Lk9uZVNpZ25hbD8uVXNlcj8ub25lc2lnbmFsSWQ7IH0sXG5cdGdldCBleHRlcm5hbElkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7IHJldHVybiB3aW5kb3cuT25lU2lnbmFsPy5Vc2VyPy5leHRlcm5hbElkOyB9LFxuXHRhZGRBbGlhczogdXNlckFkZEFsaWFzLFxuXHRhZGRBbGlhc2VzOiB1c2VyQWRkQWxpYXNlcyxcblx0cmVtb3ZlQWxpYXM6IHVzZXJSZW1vdmVBbGlhcyxcblx0cmVtb3ZlQWxpYXNlczogdXNlclJlbW92ZUFsaWFzZXMsXG5cdGFkZEVtYWlsOiB1c2VyQWRkRW1haWwsXG5cdHJlbW92ZUVtYWlsOiB1c2VyUmVtb3ZlRW1haWwsXG5cdGFkZFNtczogdXNlckFkZFNtcyxcblx0cmVtb3ZlU21zOiB1c2VyUmVtb3ZlU21zLFxuXHRhZGRUYWc6IHVzZXJBZGRUYWcsXG5cdGFkZFRhZ3M6IHVzZXJBZGRUYWdzLFxuXHRyZW1vdmVUYWc6IHVzZXJSZW1vdmVUYWcsXG5cdHJlbW92ZVRhZ3M6IHVzZXJSZW1vdmVUYWdzLFxuXHRnZXRUYWdzOiB1c2VyR2V0VGFncyxcblx0YWRkRXZlbnRMaXN0ZW5lcjogdXNlckFkZEV2ZW50TGlzdGVuZXIsXG5cdHJlbW92ZUV2ZW50TGlzdGVuZXI6IHVzZXJSZW1vdmVFdmVudExpc3RlbmVyLFxuXHRzZXRMYW5ndWFnZTogdXNlclNldExhbmd1YWdlLFxuXHRnZXRMYW5ndWFnZTogdXNlckdldExhbmd1YWdlLFxuXHRQdXNoU3Vic2NyaXB0aW9uOiBQdXNoU3Vic2NyaXB0aW9uTmFtZXNwYWNlLFxufTtcblxuY29uc3QgU2Vzc2lvbk5hbWVzcGFjZTogSU9uZVNpZ25hbFNlc3Npb24gPSB7XG5cdHNlbmRPdXRjb21lOiBzZXNzaW9uU2VuZE91dGNvbWUsXG5cdHNlbmRVbmlxdWVPdXRjb21lOiBzZXNzaW9uU2VuZFVuaXF1ZU91dGNvbWUsXG59O1xuXG5jb25zdCBEZWJ1Z05hbWVzcGFjZTogSU9uZVNpZ25hbERlYnVnID0ge1xuXHRzZXRMb2dMZXZlbDogZGVidWdTZXRMb2dMZXZlbCxcbn07XG5cbmNvbnN0IFNsaWRlZG93bk5hbWVzcGFjZTogSU9uZVNpZ25hbFNsaWRlZG93biA9IHtcblx0cHJvbXB0UHVzaDogc2xpZGVkb3duUHJvbXB0UHVzaCxcblx0cHJvbXB0UHVzaENhdGVnb3JpZXM6IHNsaWRlZG93blByb21wdFB1c2hDYXRlZ29yaWVzLFxuXHRwcm9tcHRTbXM6IHNsaWRlZG93blByb21wdFNtcyxcblx0cHJvbXB0RW1haWw6IHNsaWRlZG93blByb21wdEVtYWlsLFxuXHRwcm9tcHRTbXNBbmRFbWFpbDogc2xpZGVkb3duUHJvbXB0U21zQW5kRW1haWwsXG5cdGFkZEV2ZW50TGlzdGVuZXI6IHNsaWRlZG93bkFkZEV2ZW50TGlzdGVuZXIsXG5cdHJlbW92ZUV2ZW50TGlzdGVuZXI6IHNsaWRlZG93blJlbW92ZUV2ZW50TGlzdGVuZXIsXG59O1xuXG5jb25zdCBOb3RpZmljYXRpb25zTmFtZXNwYWNlOiBJT25lU2lnbmFsTm90aWZpY2F0aW9ucyA9IHtcblx0Z2V0IHBlcm1pc3Npb25OYXRpdmUoKTogTm90aWZpY2F0aW9uUGVybWlzc2lvbiB7IHJldHVybiB3aW5kb3cuT25lU2lnbmFsPy5Ob3RpZmljYXRpb25zPy5wZXJtaXNzaW9uTmF0aXZlID8/ICdkZWZhdWx0JzsgfSxcblx0Z2V0IHBlcm1pc3Npb24oKTogYm9vbGVhbiB7IHJldHVybiB3aW5kb3cuT25lU2lnbmFsPy5Ob3RpZmljYXRpb25zPy5wZXJtaXNzaW9uID8/IGZhbHNlOyB9LFxuXHRzZXREZWZhdWx0VXJsOiBub3RpZmljYXRpb25zU2V0RGVmYXVsdFVybCxcblx0c2V0RGVmYXVsdFRpdGxlOiBub3RpZmljYXRpb25zU2V0RGVmYXVsdFRpdGxlLFxuXHRpc1B1c2hTdXBwb3J0ZWQsXG5cdHJlcXVlc3RQZXJtaXNzaW9uOiBub3RpZmljYXRpb25zUmVxdWVzdFBlcm1pc3Npb24sXG5cdGFkZEV2ZW50TGlzdGVuZXI6IG5vdGlmaWNhdGlvbnNBZGRFdmVudExpc3RlbmVyLFxuXHRyZW1vdmVFdmVudExpc3RlbmVyOiBub3RpZmljYXRpb25zUmVtb3ZlRXZlbnRMaXN0ZW5lcixcbn07XG5cbi8qKlxuICogQFB1YmxpY0FwaVxuICovXG5mdW5jdGlvbiBpc1B1c2hTdXBwb3J0ZWQoKTogYm9vbGVhbiB7XG4gIHJldHVybiBpc1B1c2hOb3RpZmljYXRpb25zU3VwcG9ydGVkKCk7XG59XG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmNvbnN0IE9ORVNJR05BTF9TREtfSUQgPSAnb25lc2lnbmFsLXNkayc7XG5jb25zdCBPTkVfU0lHTkFMX1NDUklQVF9TUkMgPVxuICAnaHR0cHM6Ly9jZG4ub25lc2lnbmFsLmNvbS9zZGtzL3dlYi92MTYvT25lU2lnbmFsU0RLLnBhZ2UuanMnO1xuXG4vLyB0cnVlIGlmIHRoZSBzY3JpcHQgaXMgc3VjY2Vzc2Z1bGx5IGxvYWRlZCBmcm9tIENETi5cbmxldCBpc09uZVNpZ25hbEluaXRpYWxpemVkID0gZmFsc2U7XG4vLyB0cnVlIGlmIHRoZSBzY3JpcHQgZmFpbHMgdG8gbG9hZCBmcm9tIENETi4gQSBzZXBhcmF0ZSBmbGFnIGlzIG5lY2Vzc2FyeVxuLy8gdG8gZGlzYW1iaWd1YXRlIGJldHdlZW4gYSBDRE4gbG9hZCBmYWlsdXJlIGFuZCBhIGRlbGF5ZWQgY2FsbCB0b1xuLy8gT25lU2lnbmFsI2luaXQuXG5sZXQgaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQgPSBmYWxzZTtcblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZCA9IHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZCB8fCBbXTtcbiAgYWRkU0RLU2NyaXB0KCk7XG59XG5cbi8qKlxuICogVGhlIGZvbGxvd2luZyBjb2RlIGlzIGNvcGllZCBkaXJlY3RseSBmcm9tIHRoZSBuYXRpdmUgU0RLIHNvdXJjZSBmaWxlIEJyb3dzZXJTdXBwb3J0c1B1c2gudHNcbiAqIFMgVCBBIFIgVFxuICovXG5cbi8vIENoZWNrcyBpZiB0aGUgYnJvd3NlciBzdXBwb3J0cyBwdXNoIG5vdGlmaWNhdGlvbnMgYnkgY2hlY2tpbmcgaWYgc3BlY2lmaWNcbi8vICAgY2xhc3NlcyBhbmQgcHJvcGVydGllcyBvbiB0aGVtIGV4aXN0XG5mdW5jdGlvbiBpc1B1c2hOb3RpZmljYXRpb25zU3VwcG9ydGVkKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gc3VwcG9ydHNWYXBpZFB1c2goKSB8fCBzdXBwb3J0c1NhZmFyaVB1c2goKTtcbn1cblxuZnVuY3Rpb24gaXNNYWNPU1NhZmFyaUluSWZyYW1lKCk6IGJvb2xlYW4ge1xuICAvLyBGYWxsYmFjayBkZXRlY3Rpb24gZm9yIFNhZmFyaSBvbiBtYWNPUyBpbiBhbiBpZnJhbWUgY29udGV4dFxuICByZXR1cm4gKFxuICAgIHdpbmRvdy50b3AgIT09IHdpbmRvdyAmJiAvLyBpc0NvbnRleHRJZnJhbWVcbiAgICBuYXZpZ2F0b3IudmVuZG9yID09PSAnQXBwbGUgQ29tcHV0ZXIsIEluYy4nICYmIC8vIGlzU2FmYXJpXG4gICAgbmF2aWdhdG9yLnBsYXRmb3JtID09PSAnTWFjSW50ZWwnXG4gICk7IC8vIGlzTWFjT1Ncbn1cblxuZnVuY3Rpb24gc3VwcG9ydHNTYWZhcmlQdXNoKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gKFxuICAgICh3aW5kb3cuc2FmYXJpICYmIHR5cGVvZiB3aW5kb3cuc2FmYXJpLnB1c2hOb3RpZmljYXRpb24gIT09ICd1bmRlZmluZWQnKSB8fFxuICAgIGlzTWFjT1NTYWZhcmlJbklmcmFtZSgpXG4gICk7XG59XG5cbi8vIERvZXMgdGhlIGJyb3dzZXIgc3VwcG9ydCB0aGUgc3RhbmRhcmQgUHVzaCBBUElcbmZ1bmN0aW9uIHN1cHBvcnRzVmFwaWRQdXNoKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gKFxuICAgIHR5cGVvZiBQdXNoU3Vic2NyaXB0aW9uT3B0aW9ucyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICBQdXNoU3Vic2NyaXB0aW9uT3B0aW9ucy5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkoJ2FwcGxpY2F0aW9uU2VydmVyS2V5JylcbiAgKTtcbn1cbi8qIEUgTiBEICovXG5cbmZ1bmN0aW9uIGhhbmRsZU9uRXJyb3IoKTogdm9pZCB7XG4gIGlzT25lU2lnbmFsU2NyaXB0RmFpbGVkID0gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gYWRkU0RLU2NyaXB0KCk6IHZvaWQge1xuICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgc2NyaXB0LmlkID0gT05FU0lHTkFMX1NES19JRDtcbiAgc2NyaXB0LmRlZmVyID0gdHJ1ZTtcbiAgc2NyaXB0LnNyYyA9IE9ORV9TSUdOQUxfU0NSSVBUX1NSQztcblxuICAvLyBBbHdheXMgcmVzb2x2ZSB3aGV0aGVyIG9yIG5vdCB0aGUgc2NyaXB0IGlzIHN1Y2Nlc3NmdWxseSBpbml0aWFsaXplZC5cbiAgLy8gVGhpcyBpcyBpbXBvcnRhbnQgZm9yIHVzZXJzIHdobyBtYXkgYmxvY2sgY2RuLm9uZXNpZ25hbC5jb20gdy8gYWRibG9jay5cbiAgc2NyaXB0Lm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgaGFuZGxlT25FcnJvcigpO1xuICB9O1xuXG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBPbmVTaWduYWxEZWZlcnJlZD86IE9uZVNpZ25hbERlZmVycmVkTG9hZGVkQ2FsbGJhY2tbXTtcbiAgICBPbmVTaWduYWw/OiBJT25lU2lnbmFsT25lU2lnbmFsO1xuICAgIHNhZmFyaT86IHtcbiAgICAgIHB1c2hOb3RpZmljYXRpb246IGFueTtcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU9uZVNpZ25hbE9uZVNpZ25hbCB7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE9uZVNpZ25hbCBpbXBsZW1lbnRzIElPbmVTaWduYWxPbmVTaWduYWwge1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIC8qIFAgVSBCIEwgSSBDICovXG5cbiAgLyoqXG4gICAqIEBQdWJsaWNBcGlcbiAgICovXG4gIGluaXQob3B0aW9uczogSUluaXRPYmplY3QpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAoaXNPbmVTaWduYWxJbml0aWFsaXplZCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGBPbmVTaWduYWwgaXMgYWxyZWFkeSBpbml0aWFsaXplZC5gKTtcbiAgICB9XG5cbiAgICBpZiAoIW9wdGlvbnMgfHwgIW9wdGlvbnMuYXBwSWQpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgnWW91IG5lZWQgdG8gcHJvdmlkZSB5b3VyIE9uZVNpZ25hbCBhcHBJZC4nKTtcbiAgICB9XG5cbiAgICBpZiAoIWRvY3VtZW50KSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoYERvY3VtZW50IGlzIG5vdCBkZWZpbmVkLmApO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBib3RoIGRpc2FibGVkIGFuZCBkaXNhYmxlIGtleXMgZm9yIHdlbGNvbWUgbm90aWZpY2F0aW9uXG4gICAgaWYgKG9wdGlvbnMud2VsY29tZU5vdGlmaWNhdGlvbj8uZGlzYWJsZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgb3B0aW9ucy53ZWxjb21lTm90aWZpY2F0aW9uLmRpc2FibGUgPSBvcHRpb25zLndlbGNvbWVOb3RpZmljYXRpb24uZGlzYWJsZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgICAgIG9uZVNpZ25hbFxuICAgICAgICAgIC5pbml0KG9wdGlvbnMpXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgaXNPbmVTaWduYWxJbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2gocmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cblx0VXNlciA9IFVzZXJOYW1lc3BhY2U7XG5cdFNlc3Npb24gPSBTZXNzaW9uTmFtZXNwYWNlO1xuXHREZWJ1ZyA9IERlYnVnTmFtZXNwYWNlO1xuXHRTbGlkZWRvd24gPSBTbGlkZWRvd25OYW1lc3BhY2U7XG5cdE5vdGlmaWNhdGlvbnMgPSBOb3RpZmljYXRpb25zTmFtZXNwYWNlO1xuXHRsb2dpbiA9IG9uZVNpZ25hbExvZ2luO1xuXHRsb2dvdXQgPSBvbmVTaWduYWxMb2dvdXQ7XG5cdHNldENvbnNlbnRHaXZlbiA9IG9uZVNpZ25hbFNldENvbnNlbnRHaXZlbjtcblx0c2V0Q29uc2VudFJlcXVpcmVkID0gb25lU2lnbmFsU2V0Q29uc2VudFJlcXVpcmVkO1xufVxuIl19