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
function userGetTags() {
    var _a;
    let retVal;
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
        retVal = oneSignal.User.getTags();
    });
    // @ts-ignore
    return retVal;
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
function userGetLanguage() {
    var _a;
    let retVal;
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
        retVal = oneSignal.User.getLanguage();
    });
    // @ts-ignore
    return retVal;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25lc2lnbmFsLW5neC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvb25lc2lnbmFsLW5neC9zcmMvbGliL29uZXNpZ25hbC1uZ3guc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnWkEsU0FBUyxjQUFjLENBQUMsVUFBa0IsRUFBRSxRQUFpQjtJQUMzRCxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFOztRQUNyQyxJQUFJLHVCQUF1QixFQUFFO1lBQzNCLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDLENBQUM7WUFDdEQsT0FBTztTQUNSO1FBRUQsTUFBQSxNQUFNLENBQUMsaUJBQWlCLDBDQUFFLElBQUksQ0FBQyxDQUFDLFNBQThCLEVBQUUsRUFBRTtZQUNoRSxTQUFTLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUM5RCxDQUFDLEVBQUU7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFDRCxTQUFTLGVBQWU7SUFDdEIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTs7UUFDckMsSUFBSSx1QkFBdUIsRUFBRTtZQUMzQixNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsa0NBQWtDLENBQUMsQ0FBQyxDQUFDO1lBQ3RELE9BQU87U0FDUjtRQUVELE1BQUEsTUFBTSxDQUFDLGlCQUFpQiwwQ0FBRSxJQUFJLENBQUMsQ0FBQyxTQUE4QixFQUFFLEVBQUU7WUFDaEUsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQzNDLENBQUMsRUFBRTtJQUNMLENBQUMsQ0FBQyxDQUFD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O2dCQUNoRSxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7b0JBQ2hDLHNCQUFzQixHQUFHLElBQUksQ0FBQztvQkFDOUIsT0FBTyxFQUFFLENBQUM7Z0JBQ1osQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDLEVBQUU7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7WUFsQ0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBBdXRvUHJvbXB0T3B0aW9ucyB7IGZvcmNlPzogYm9vbGVhbjsgZm9yY2VTbGlkZWRvd25PdmVyTmF0aXZlPzogYm9vbGVhbjsgc2xpZGVkb3duUHJvbXB0T3B0aW9ucz86IElPbmVTaWduYWxBdXRvUHJvbXB0T3B0aW9uczsgfVxuZXhwb3J0IGludGVyZmFjZSBJT25lU2lnbmFsQXV0b1Byb21wdE9wdGlvbnMgeyBmb3JjZT86IGJvb2xlYW47IGZvcmNlU2xpZGVkb3duT3Zlck5hdGl2ZT86IGJvb2xlYW47IGlzSW5VcGRhdGVNb2RlPzogYm9vbGVhbjsgY2F0ZWdvcnlPcHRpb25zPzogSU9uZVNpZ25hbENhdGVnb3JpZXM7IH1cbmV4cG9ydCBpbnRlcmZhY2UgSU9uZVNpZ25hbENhdGVnb3JpZXMgeyBwb3NpdGl2ZVVwZGF0ZUJ1dHRvbjogc3RyaW5nOyBuZWdhdGl2ZVVwZGF0ZUJ1dHRvbjogc3RyaW5nOyBzYXZpbmdCdXR0b25UZXh0OiBzdHJpbmc7IGVycm9yQnV0dG9uVGV4dDogc3RyaW5nOyB1cGRhdGVNZXNzYWdlOiBzdHJpbmc7IHRhZ3M6IElPbmVTaWduYWxUYWdDYXRlZ29yeVtdOyB9XG5leHBvcnQgaW50ZXJmYWNlIElPbmVTaWduYWxUYWdDYXRlZ29yeSB7IHRhZzogc3RyaW5nOyBsYWJlbDogc3RyaW5nOyBjaGVja2VkPzogYm9vbGVhbjsgfVxuZXhwb3J0IHR5cGUgUHVzaFN1YnNjcmlwdGlvbk5hbWVzcGFjZVByb3BlcnRpZXMgPSB7IGlkOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkOyB0b2tlbjogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZDsgb3B0ZWRJbjogYm9vbGVhbjsgfTtcbmV4cG9ydCB0eXBlIFN1YnNjcmlwdGlvbkNoYW5nZUV2ZW50ID0geyBwcmV2aW91czogUHVzaFN1YnNjcmlwdGlvbk5hbWVzcGFjZVByb3BlcnRpZXM7IGN1cnJlbnQ6IFB1c2hTdWJzY3JpcHRpb25OYW1lc3BhY2VQcm9wZXJ0aWVzOyB9O1xuZXhwb3J0IHR5cGUgTm90aWZpY2F0aW9uRXZlbnROYW1lID0gJ2NsaWNrJyB8ICdmb3JlZ3JvdW5kV2lsbERpc3BsYXknIHwgJ2Rpc21pc3MnIHwgJ3Blcm1pc3Npb25DaGFuZ2UnIHwgJ3Blcm1pc3Npb25Qcm9tcHREaXNwbGF5JztcbmV4cG9ydCB0eXBlIFNsaWRlZG93bkV2ZW50TmFtZSA9ICdzbGlkZWRvd25TaG93bic7XG5leHBvcnQgdHlwZSBPbmVTaWduYWxEZWZlcnJlZExvYWRlZENhbGxiYWNrID0gKG9uZXNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4gdm9pZDtcbmV4cG9ydCBpbnRlcmZhY2UgSU9TTm90aWZpY2F0aW9uIHtcbiAgLyoqXG4gICAqIFRoZSBPbmVTaWduYWwgbm90aWZpY2F0aW9uIGlkO1xuICAgKiAgLSBQcmltYXJ5IGlkIG9uIE9uZVNpZ25hbCdzIFJFU1QgQVBJIGFuZCBkYXNoYm9hcmRcbiAgICovXG4gIHJlYWRvbmx5IG5vdGlmaWNhdGlvbklkOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFZpc2libGUgdGl0bGUgdGV4dCBvbiB0aGUgbm90aWZpY2F0aW9uXG4gICAqL1xuICByZWFkb25seSB0aXRsZT86IHN0cmluZztcblxuICAvKipcbiAgICogVmlzaWJsZSBib2R5IHRleHQgb24gdGhlIG5vdGlmaWNhdGlvblxuICAgKi9cbiAgcmVhZG9ubHkgYm9keTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBWaXNpYmxlIGljb24gdGhlIG5vdGlmaWNhdGlvbjsgVVJMIGZvcm1hdFxuICAgKi9cbiAgcmVhZG9ubHkgaWNvbj86IHN0cmluZztcblxuICAvKipcbiAgICogVmlzaWJsZSBzbWFsbCBiYWRnZUljb24gdGhhdCBkaXNwbGF5cyBvbiBzb21lIGRldmljZXM7IFVSTCBmb3JtYXRcbiAgICogRXhhbXBsZTogT24gQW5kcm9pZCdzIHN0YXR1cyBiYXJcbiAgICovXG4gIHJlYWRvbmx5IGJhZGdlSWNvbj86IHN0cmluZztcblxuICAvKipcbiAgICogVmlzaWJsZSBpbWFnZSBvbiB0aGUgbm90aWZpY2F0aW9uOyBVUkwgZm9ybWF0XG4gICAqL1xuICByZWFkb25seSBpbWFnZT86IHN0cmluZztcblxuICAvKipcbiAgICogVmlzaWJsZSBidXR0b25zIG9uIHRoZSBub3RpZmljYXRpb25cbiAgICovXG4gIHJlYWRvbmx5IGFjdGlvbkJ1dHRvbnM/OiBJT1NOb3RpZmljYXRpb25BY3Rpb25CdXR0b25bXTtcblxuICAvKipcbiAgICogSWYgdGhpcyB2YWx1ZSBpcyB0aGUgc2FtZSBhcyBleGlzdGluZyBub3RpZmljYXRpb24sIGl0IHdpbGwgcmVwbGFjZSBpdFxuICAgKiBDYW4gYmUgc2V0IHdoZW4gY3JlYXRpbmcgdGhlIG5vdGlmaWNhdGlvbiB3aXRoIFwiV2ViIFB1c2ggVG9waWNcIiBvbiB0aGUgZGFzaGJvYXJkXG4gICAqIG9yIHdlYl9wdXNoX3RvcGljIGZyb20gdGhlIFJFU1QgQVBJLlxuICAgKi9cbiAgcmVhZG9ubHkgdG9waWM/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEN1c3RvbSBvYmplY3QgdGhhdCB3YXMgc2VudCB3aXRoIHRoZSBub3RpZmljYXRpb247XG4gICAqIGRlZmluYWJsZSB3aGVuIGNyZWF0aW5nIHRoZSBub3RpZmljYXRpb24gZnJvbSB0aGUgT25lU2lnbmFsIFJFU1QgQVBJIG9yIGRhc2hib2FyZFxuICAgKi9cbiAgcmVhZG9ubHkgYWRkaXRpb25hbERhdGE/OiBvYmplY3Q7XG5cbiAgLyoqXG4gICAqIFVSTCB0byBvcGVuIHdoZW4gY2xpY2tpbmcgb3IgdGFwcGluZyBvbiB0aGUgbm90aWZpY2F0aW9uXG4gICAqL1xuICByZWFkb25seSBsYXVuY2hVUkw/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENvbmZpcm0gdGhlIHB1c2ggd2FzIHJlY2VpdmVkIGJ5IHJlcG9ydGluZyBiYWNrIHRvIE9uZVNpZ25hbFxuICAgKi9cbiAgcmVhZG9ubHkgY29uZmlybURlbGl2ZXJ5OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElPU05vdGlmaWNhdGlvbkFjdGlvbkJ1dHRvbiB7XG4gIC8qKlxuICAgKiBBbnkgdW5pcXVlIGlkZW50aWZpZXIgdG8gcmVwcmVzZW50IHdoaWNoIGJ1dHRvbiB3YXMgY2xpY2tlZC4gVGhpcyBpcyB0eXBpY2FsbHkgcGFzc2VkIGJhY2sgdG8gdGhlIHNlcnZpY2Ugd29ya2VyXG4gICAqIGFuZCBob3N0IHBhZ2UgdGhyb3VnaCBldmVudHMgdG8gaWRlbnRpZnkgd2hpY2ggYnV0dG9uIHdhcyBjbGlja2VkLlxuICAgKiBlLmcuICdsaWtlLWJ1dHRvbidcbiAgICovXG4gIHJlYWRvbmx5IGFjdGlvbklkOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgbm90aWZpY2F0aW9uIGFjdGlvbiBidXR0b24ncyB0ZXh0LlxuICAgKi9cbiAgcmVhZG9ubHkgdGV4dDogc3RyaW5nO1xuICAvKipcbiAgICogQSB2YWxpZCBwdWJsaWNseSByZWFjaGFibGUgSFRUUFMgVVJMIHRvIGFuIGltYWdlLlxuICAgKi9cbiAgcmVhZG9ubHkgaWNvbj86IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBVUkwgdG8gb3BlbiB0aGUgd2ViIGJyb3dzZXIgdG8gd2hlbiB0aGlzIGFjdGlvbiBidXR0b24gaXMgY2xpY2tlZC5cbiAgICovXG4gIHJlYWRvbmx5IGxhdW5jaFVSTD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOb3RpZmljYXRpb25DbGlja1Jlc3VsdCB7XG4gIHJlYWRvbmx5IGFjdGlvbklkPzogc3RyaW5nO1xuICByZWFkb25seSB1cmw/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCB0eXBlIE5vdGlmaWNhdGlvbkV2ZW50VHlwZU1hcCA9IHtcbiAgJ2NsaWNrJzogTm90aWZpY2F0aW9uQ2xpY2tFdmVudDtcbiAgJ2ZvcmVncm91bmRXaWxsRGlzcGxheSc6IE5vdGlmaWNhdGlvbkZvcmVncm91bmRXaWxsRGlzcGxheUV2ZW50O1xuICAnZGlzbWlzcyc6IE5vdGlmaWNhdGlvbkRpc21pc3NFdmVudDtcbiAgJ3Blcm1pc3Npb25DaGFuZ2UnOiBib29sZWFuO1xuICAncGVybWlzc2lvblByb21wdERpc3BsYXknOiB2b2lkO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBOb3RpZmljYXRpb25Gb3JlZ3JvdW5kV2lsbERpc3BsYXlFdmVudCB7XG4gIHJlYWRvbmx5IG5vdGlmaWNhdGlvbjogSU9TTm90aWZpY2F0aW9uO1xuICBwcmV2ZW50RGVmYXVsdCgpOiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5vdGlmaWNhdGlvbkRpc21pc3NFdmVudCB7XG4gIG5vdGlmaWNhdGlvbjogSU9TTm90aWZpY2F0aW9uO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5vdGlmaWNhdGlvbkNsaWNrRXZlbnQge1xuICByZWFkb25seSBub3RpZmljYXRpb246IElPU05vdGlmaWNhdGlvbjtcbiAgcmVhZG9ubHkgcmVzdWx0OiBOb3RpZmljYXRpb25DbGlja1Jlc3VsdDtcbn1cblxuZXhwb3J0IHR5cGUgVXNlckNoYW5nZUV2ZW50ID0ge1xuICBjdXJyZW50OiBVc2VyTmFtZXNwYWNlUHJvcGVydGllcztcbn07XG5leHBvcnQgdHlwZSBVc2VyTmFtZXNwYWNlUHJvcGVydGllcyA9IHtcbiAgb25lc2lnbmFsSWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZXh0ZXJuYWxJZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBJSW5pdE9iamVjdCB7XG4gIGFwcElkOiBzdHJpbmc7XG4gIHN1YmRvbWFpbk5hbWU/OiBzdHJpbmc7XG4gIHJlcXVpcmVzVXNlclByaXZhY3lDb25zZW50PzogYm9vbGVhbjtcbiAgcHJvbXB0T3B0aW9ucz86IHtcbiAgICBzbGlkZWRvd246IHtcbiAgICAgIHByb21wdHM6IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdoZXRoZXIgdG8gYXV0b21hdGljYWxseSBkaXNwbGF5IHRoZSBwcm9tcHQuXG4gICAgICAgICAqIGB0cnVlYCB3aWxsIGRpc3BsYXkgdGhlIHByb21wdCBiYXNlZCBvbiB0aGUgZGVsYXkgb3B0aW9ucy5cbiAgICAgICAgICogYGZhbHNlYCB3aWxsIHByZXZlbnQgdGhlIHByb21wdCBmcm9tIGRpc3BsYXlpbmcgdW50aWwgdGhlIFNsaWRlZG93bnMgbWV0aG9kcyBhcmUgdXNlZC5cbiAgICAgICAgICovXG4gICAgICAgIGF1dG9Qcm9tcHQ6IGJvb2xlYW47XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE9ubHkgYXZhaWxhYmxlIGZvciB0eXBlOiBjYXRlZ29yeS4gVXAgdG8gMTAgY2F0ZWdvcmllcy5cbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogIGNhdGVnb3JpZXM6IFt7IHRhZzogJ2xvY2FsX25ld3MnLCBsYWJlbDogJ0xvY2FsIE5ld3MnIH1dIC8vIFRoZSB1c2VyIHdpbGwgYmUgdGFnZ2VkIHdpdGggbG9jYWxfbmV3cyBidXQgd2lsbCBzZWUgXCJMb2NhbCBOZXdzXCIgaW4gdGhlIHByb21wdC5cbiAgICAgICAgICovXG4gICAgICAgIGNhdGVnb3JpZXM6IHtcbiAgICAgICAgICAvKiogU2hvdWxkIGlkZW50aWZ5IHRoZSBhY3Rpb24uICovXG4gICAgICAgICAgdGFnOiBzdHJpbmc7XG5cbiAgICAgICAgICAvKiogV2hhdCB0aGUgdXNlciB3aWxsIHNlZS4gKi9cbiAgICAgICAgICBsYWJlbDogc3RyaW5nO1xuICAgICAgICB9W107XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBkZWxheSBvcHRpb25zIGZvciB0aGUgcHJvbXB0LlxuICAgICAgICAgKiBAZXhhbXBsZSBkZWxheTogeyBwYWdlVmlld3M6IDMsIHRpbWVEZWxheTogMjAgfSAvLyBUaGUgdXNlciB3aWxsIG5vdCBiZSBzaG93biB0aGUgcHJvbXB0IHVudGlsIDIwIHNlY29uZHMgYWZ0ZXIgdGhlIDNyZCBwYWdlIHZpZXcuXG4gICAgICAgICAqL1xuICAgICAgICBkZWxheToge1xuICAgICAgICAgIC8qKiBUaGUgbnVtYmVyIG9mIHBhZ2VzIGEgdXNlciBuZWVkcyB0byB2aXNpdCBiZWZvcmUgdGhlIHByb21wdCBpcyBkaXNwbGF5ZWQuICovXG4gICAgICAgICAgcGFnZVZpZXdzPzogbnVtYmVyO1xuXG4gICAgICAgICAgLyoqIFRoZSBudW1iZXIgb2Ygc2Vjb25kcyBhIHVzZXIgbmVlZHMgdG8gd2FpdCBiZWZvcmUgdGhlIHByb21wdCBpcyBkaXNwbGF5ZWQuQm90aCBvcHRpb25zIG11c3QgYmUgc2F0aXNmaWVkIGZvciB0aGUgcHJvbXB0IHRvIGRpc3BsYXkgKi9cbiAgICAgICAgICB0aW1lRGVsYXk/OiBudW1iZXI7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB0ZXh0IHRvIGRpc3BsYXkgaW4gdGhlIHByb21wdC5cbiAgICAgICAgICovXG4gICAgICAgIHRleHQ/OiB7XG4gICAgICAgICAgLyoqIFRoZSBjYWxsb3V0IGFza2luZyB0aGUgdXNlciB0byBvcHQtaW4uIFVwIHRvIDkwIGNoYXJhY3RlcnMuICovXG4gICAgICAgICAgYWN0aW9uTWVzc2FnZT86IHN0cmluZztcblxuICAgICAgICAgIC8qKiBUcmlnZ2VycyB0aGUgb3B0LWluLiBVcCB0byAxNSBjaGFyYWN0ZXJzLiAqL1xuICAgICAgICAgIGFjY2VwdEJ1dHRvbj86IHN0cmluZztcblxuICAgICAgICAgIC8qKiBDYW5jZWxzIG9wdC1pbi4gVXAgdG8gMTUgY2hhcmFjdGVycy4gKi9cbiAgICAgICAgICBjYW5jZWxNZXNzYWdlPzogc3RyaW5nO1xuXG4gICAgICAgICAgLyoqIFRoZSBtZXNzYWdlIG9mIHRoZSBjb25maXJtYXRpb24gcHJvbXB0IGRpc3BsYXllZCBhZnRlciB0aGUgZW1haWwgYW5kL29yIHBob25lIG51bWJlciBpcyBwcm92aWRlZC4gVXAgdG8gOTAgY2hhcmFjdGVycy4gKi9cbiAgICAgICAgICBjb25maXJtTWVzc2FnZT86IHN0cmluZztcblxuICAgICAgICAgIC8qKiBJZGVudGlmaWVzIHRoZSBlbWFpbCB0ZXh0IGZpZWxkLiBVcCB0byAxNSBjaGFyYWN0ZXJzLiAqL1xuICAgICAgICAgIGVtYWlsTGFiZWw/OiBzdHJpbmc7XG5cbiAgICAgICAgICAvKiogQ2FuY2VscyB0aGUgY2F0ZWdvcnkgdXBkYXRlLiBVcCB0byAxNSBjaGFyYWN0ZXJzLiAqL1xuICAgICAgICAgIG5lZ2F0aXZlVXBkYXRlQnV0dG9uPzogc3RyaW5nO1xuXG4gICAgICAgICAgLyoqIFNhdmVzIHRoZSB1cGRhdGVkIGNhdGVnb3J5IHRhZ3MuIFVwIHRvIDE1IGNoYXJhY3RlcnMuICovXG4gICAgICAgICAgcG9zaXRpdmVVcGRhdGVCdXR0b24/OiBzdHJpbmc7XG5cbiAgICAgICAgICAvKiogSWRlbnRpZmllcyB0aGUgcGhvbmUgbnVtYmVyIHRleHQgZmllbGQuIFVwIHRvIDE1IGNoYXJhY3RlcnMuICovXG4gICAgICAgICAgc21zTGFiZWw/OiBzdHJpbmc7XG5cbiAgICAgICAgICAvKiogQSBkaWZmZXJlbnQgbWVzc2FnZSBzaG93biB0byBzdWJzY3JpYmVycyBwcmVzZW50ZWQgdGhlIHByb21wdCBhZ2FpbiB0byB1cGRhdGUgY2F0ZWdvcmllcy4gVXAgdG8gOTAgY2hhcmFjdGVycy4gKi9cbiAgICAgICAgICB1cGRhdGVNZXNzYWdlPzogc3RyaW5nO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdHlwZSBvZiBwcm9tcHQgdG8gZGlzcGxheS5cbiAgICAgICAgICogYHB1c2hgIHdoaWNoIGlzIHRoZSBTbGlkZSBQcm9tcHQgd2l0aG91dCBjYXRlZ29yaWVzLlxuICAgICAgICAgKiBgY2F0ZWdvcnlgIHdoaWNoIGlzIHRoZSBTbGlkZSBQcm9tcHQgd2l0aCBjYXRlZ29yaWVzLlxuICAgICAgICAgKiBgc21zYCBvbmx5IGFza3MgZm9yIHBob25lIG51bWJlci5cbiAgICAgICAgICogYGVtYWlsYCBvbmx5IGFza3MgZm9yIGVtYWlsIGFkZHJlc3MuXG4gICAgICAgICAqIGBzbXNBbmRFbWFpbGAgYXNrcyBmb3IgYm90aCBwaG9uZSBudW1iZXIgYW5kIGVtYWlsIGFkZHJlc3MuXG4gICAgICAgICAqL1xuICAgICAgICB0eXBlOiAncHVzaCcgfCAnY2F0ZWdvcnknIHwgJ3NtcycgfCAnZW1haWwnIHwgJ3Ntc0FuZEVtYWlsJztcbiAgICAgIH1bXTtcbiAgICB9O1xuICB9O1xuICB3ZWxjb21lTm90aWZpY2F0aW9uPzoge1xuICAgIC8qKlxuICAgICAqIERpc2FibGVzIHNlbmRpbmcgYSB3ZWxjb21lIG5vdGlmaWNhdGlvbiB0byBuZXcgc2l0ZSB2aXNpdG9ycy4gSWYgeW91IHdhbnQgdG8gZGlzYWJsZSB3ZWxjb21lIG5vdGlmaWNhdGlvbnMsIHRoaXMgaXMgdGhlIG9ubHkgb3B0aW9uIHlvdSBuZWVkLlxuICAgICAqL1xuICAgIGRpc2FibGVkPzogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIFRoZSB3ZWxjb21lIG5vdGlmaWNhdGlvbidzIG1lc3NhZ2UuIFlvdSBjYW4gbG9jYWxpemUgdGhpcyB0byB5b3VyIG93biBsYW5ndWFnZS5cbiAgICAgKiBJZiBsZWZ0IGJsYW5rIG9yIHNldCB0byBibGFuaywgdGhlIGRlZmF1bHQgb2YgJ1RoYW5rcyBmb3Igc3Vic2NyaWJpbmchJyB3aWxsIGJlIHVzZWQuXG4gICAgICovXG4gICAgbWVzc2FnZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHdlbGNvbWUgbm90aWZpY2F0aW9uJ3MgdGl0bGUuIFlvdSBjYW4gbG9jYWxpemUgdGhpcyB0byB5b3VyIG93biBsYW5ndWFnZS4gSWYgbm90IHNldCwgb3IgbGVmdCBibGFuaywgdGhlIHNpdGUncyB0aXRsZSB3aWxsIGJlIHVzZWQuXG4gICAgICogU2V0IHRvIG9uZSBzcGFjZSAnICcgdG8gY2xlYXIgdGhlIHRpdGxlLCBhbHRob3VnaCB0aGlzIGlzIG5vdCByZWNvbW1lbmRlZC5cbiAgICAgKi9cbiAgICB0aXRsZT86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEJ5IGRlZmF1bHQsIGNsaWNraW5nIHRoZSB3ZWxjb21lIG5vdGlmaWNhdGlvbiBkb2VzIG5vdCBvcGVuIGFueSBsaW5rLlxuICAgICAqIFRoaXMgaXMgcmVjb21tZW5kZWQgYmVjYXVzZSB0aGUgdXNlciBoYXMganVzdCB2aXNpdGVkIHlvdXIgc2l0ZSBhbmQgc3Vic2NyaWJlZC5cbiAgICAgKi9cbiAgICB1cmw6IHN0cmluZztcbiAgfTtcblxuICAvKipcbiAgICogV2lsbCBlbmFibGUgY3VzdG9taXphdGlvbiBvZiB0aGUgbm90aWZ5L3N1YnNjcmlwdGlvbiBiZWxsIGJ1dHRvbi5cbiAgICovXG4gIG5vdGlmeUJ1dHRvbj86IHtcbiAgICAvKipcbiAgICAgKiBBIGZ1bmN0aW9uIHlvdSBkZWZpbmUgdGhhdCByZXR1cm5zIHRydWUgdG8gc2hvdyB0aGUgU3Vic2NyaXB0aW9uIEJlbGwsIG9yIGZhbHNlIHRvIGhpZGUgaXQuXG4gICAgICogVHlwaWNhbGx5IHVzZWQgdGhlIGhpZGUgdGhlIFN1YnNjcmlwdGlvbiBCZWxsIGFmdGVyIHRoZSB1c2VyIGlzIHN1YnNjcmliZWQuXG4gICAgICogVGhpcyBmdW5jdGlvbiBpcyBub3QgcmUtZXZhbHVhdGVkIG9uIGV2ZXJ5IHN0YXRlIGNoYW5nZTsgdGhpcyBmdW5jdGlvbiBpcyBvbmx5IGV2YWx1YXRlZCBvbmNlIHdoZW4gdGhlIFN1YnNjcmlwdGlvbiBCZWxsIGJlZ2lucyB0byBzaG93LlxuICAgICAqL1xuICAgIGRpc3BsYXlQcmVkaWNhdGU/OiAoKSA9PiBib29sZWFuIHwgUHJvbWlzZTxib29sZWFuPjtcblxuICAgIC8qKlxuICAgICAqIEVuYWJsZSB0aGUgU3Vic2NyaXB0aW9uIEJlbGwuIFRoZSBTdWJzY3JpcHRpb24gQmVsbCBpcyBvdGhlcndpc2UgZGlzYWJsZWQgYnkgZGVmYXVsdC5cbiAgICAgKi9cbiAgICBlbmFibGU/OiBib29sZWFuO1xuXG4gICAgLyoqIFNwZWNpZnkgQ1NTLXZhbGlkIHBpeGVsIG9mZnNldHMgdXNpbmcgYm90dG9tLCBsZWZ0LCBhbmQgcmlnaHQuICovXG4gICAgb2Zmc2V0PzogeyBib3R0b206IHN0cmluZzsgbGVmdDogc3RyaW5nOyByaWdodDogc3RyaW5nIH07XG5cbiAgICAvKipcbiAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBTdWJzY3JpcHRpb24gQmVsbCB3aWxsIGRpc3BsYXkgYW4gaWNvbiB0aGF0IHRoZXJlIGlzIDEgdW5yZWFkIG1lc3NhZ2UuXG4gICAgICogV2hlbiBob3ZlcmluZyBvdmVyIHRoZSBTdWJzY3JpcHRpb24gQmVsbCwgdGhlIHVzZXIgd2lsbCBzZWUgY3VzdG9tIHRleHQgc2V0IGJ5IG1lc3NhZ2UucHJlbm90aWZ5LlxuICAgICAqL1xuICAgIHByZW5vdGlmeTogYm9vbGVhbjtcblxuICAgIC8qKiBFaXRoZXIgYGJvdHRvbS1sZWZ0YCBvciBgYm90dG9tLXJpZ2h0YC4gVGhlIFN1YnNjcmlwdGlvbiBCZWxsIHdpbGwgYmUgZml4ZWQgYXQgdGhpcyBsb2NhdGlvbiBvbiB5b3VyIHBhZ2UuICovXG4gICAgcG9zaXRpb24/OiAnYm90dG9tLWxlZnQnIHwgJ2JvdHRvbS1yaWdodCc7XG5cbiAgICAvKiogIFNldCBgZmFsc2VgIHRvIGhpZGUgdGhlICdQb3dlcmVkIGJ5IE9uZVNpZ25hbCcgdGV4dCBpbiB0aGUgU3Vic2NyaXB0aW9uIEJlbGwgZGlhbG9nIHBvcHVwLiAqL1xuICAgIHNob3dDcmVkaXQ6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBUaGUgU3Vic2NyaXB0aW9uIEJlbGwgd2lsbCBpbml0aWFsbHkgYXBwZWFyIGF0IG9uZSBvZiB0aGVzZSBzaXplcywgYW5kIHRoZW4gc2hyaW5rIGRvd24gdG8gc2l6ZSBgc21hbGxgIGFmdGVyIHRoZSB1c2VyIHN1YnNjcmliZXMuXG4gICAgICovXG4gICAgc2l6ZT86ICdzbWFsbCcgfCAnbWVkaXVtJyB8ICdsYXJnZSc7XG5cbiAgICAvKiogQ3VzdG9taXplIHRoZSBTdWJzY3JpcHRpb24gQmVsbCB0ZXh0LiAqL1xuICAgIHRleHQ6IHtcbiAgICAgICdkaWFsb2cuYmxvY2tlZC5tZXNzYWdlJzogc3RyaW5nO1xuICAgICAgJ2RpYWxvZy5ibG9ja2VkLnRpdGxlJzogc3RyaW5nO1xuICAgICAgJ2RpYWxvZy5tYWluLmJ1dHRvbi5zdWJzY3JpYmUnOiBzdHJpbmc7XG4gICAgICAnZGlhbG9nLm1haW4uYnV0dG9uLnVuc3Vic2NyaWJlJzogc3RyaW5nO1xuICAgICAgJ2RpYWxvZy5tYWluLnRpdGxlJzogc3RyaW5nO1xuICAgICAgJ21lc3NhZ2UuYWN0aW9uLnJlc3Vic2NyaWJlZCc6IHN0cmluZztcbiAgICAgICdtZXNzYWdlLmFjdGlvbi5zdWJzY3JpYmVkJzogc3RyaW5nO1xuICAgICAgJ21lc3NhZ2UuYWN0aW9uLnN1YnNjcmliaW5nJzogc3RyaW5nO1xuICAgICAgJ21lc3NhZ2UuYWN0aW9uLnVuc3Vic2NyaWJlZCc6IHN0cmluZztcbiAgICAgICdtZXNzYWdlLnByZW5vdGlmeSc6IHN0cmluZztcbiAgICAgICd0aXAuc3RhdGUuYmxvY2tlZCc6IHN0cmluZztcbiAgICAgICd0aXAuc3RhdGUuc3Vic2NyaWJlZCc6IHN0cmluZztcbiAgICAgICd0aXAuc3RhdGUudW5zdWJzY3JpYmVkJzogc3RyaW5nO1xuICAgIH07XG4gIH07XG5cbiAgcGVyc2lzdE5vdGlmaWNhdGlvbj86IGJvb2xlYW47XG4gIHdlYmhvb2tzPzoge1xuICAgIC8qKlxuICAgICAqIEVuYWJsZSB0aGlzIHNldHRpbmcgb25seSBpZiB5b3VyIHNlcnZlciBoYXMgQ09SUyBlbmFibGVkIGFuZCBzdXBwb3J0cyBub24tc2ltcGxlIENPUlMgcmVxdWVzdHMuXG4gICAgICogSWYgdGhpcyBzZXR0aW5nIGlzIGRpc2FibGVkLCB5b3VyIHdlYmhvb2sgd2lsbCBub3QgbmVlZCBDT1JTIHRvIHJlY2VpdmUgZGF0YSwgYnV0IGl0IHdpbGwgbm90IHJlY2VpdmUgdGhlIGN1c3RvbSBoZWFkZXJzLlxuICAgICAqIFRoZSBzaW1wbGVzdCBvcHRpb24gaXMgdG8gbGVhdmUgaXQgZGlzYWJsZWQuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cbiAgICBjb3JzOiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogVGhpcyBldmVudCBvY2N1cnMgYWZ0ZXIgYSBub3RpZmljYXRpb24gaXMgY2xpY2tlZC5cbiAgICAgKiBAZXhhbXBsZSBodHRwczovL3NpdGUuY29tL2hvb2tcbiAgICAgKi9cbiAgICAnbm90aWZpY2F0aW9uLmNsaWNrZWQnPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogVGhpcyBldmVudCBvY2N1cnMgYWZ0ZXIgYSBub3RpZmljYXRpb24gaXMgaW50ZW50aW9uYWxseSBkaXNtaXNzZWQgYnkgdGhlIHVzZXIgKGNsaWNraW5nIHRoZSBub3RpZmljYXRpb24gYm9keSBvciBvbmUgb2YgdGhlIG5vdGlmaWNhdGlvbiBhY3Rpb24gYnV0dG9ucyBkb2VzIG5vdCB0cmlnZ2VyIHRoZSBkaXNtaXNzZWQgd2ViaG9vayksXG4gICAgICogYWZ0ZXIgYSBncm91cCBvZiBub3RpZmljYXRpb25zIGFyZSBhbGwgZGlzbWlzc2VkICh3aXRoIHRoaXMgbm90aWZpY2F0aW9uIGFzIHBhcnQgb2YgdGhhdCBncm91cCksIG9yIGFmdGVyIGEgbm90aWZpY2F0aW9uIGV4cGlyZXMgb24gaXRzIG93biB0aW1lIGFuZCBkaXNhcHBlYXJzLiBUaGlzIGV2ZW50IGlzIHN1cHBvcnRlZCBvbiBDaHJvbWUgb25seS5cbiAgICAgKiBAZXhhbXBsZSBodHRwczovL3NpdGUuY29tL2hvb2tcbiAgICAgKi9cbiAgICAnbm90aWZpY2F0aW9uLmRpc21pc3NlZCc/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGV2ZW50IG9jY3VycyBhZnRlciBhIG5vdGlmaWNhdGlvbiBpcyBkaXNwbGF5ZWQuXG4gICAgICogQGV4YW1wbGUgaHR0cHM6Ly9zaXRlLmNvbS9ob29rXG4gICAgICovXG4gICAgJ25vdGlmaWNhdGlvbi53aWxsRGlzcGxheSc/OiBzdHJpbmc7XG4gIH07XG4gIGF1dG9SZXN1YnNjcmliZT86IGJvb2xlYW47XG4gIGF1dG9SZWdpc3Rlcj86IGJvb2xlYW47XG4gIG5vdGlmaWNhdGlvbkNsaWNrSGFuZGxlck1hdGNoPzogc3RyaW5nO1xuICBub3RpZmljYXRpb25DbGlja0hhbmRsZXJBY3Rpb24/OiBzdHJpbmc7XG4gIHBhdGg/OiBzdHJpbmc7XG4gIHNlcnZpY2VXb3JrZXJQYXJhbT86IHsgc2NvcGU6IHN0cmluZyB9O1xuICBzZXJ2aWNlV29ya2VyUGF0aD86IHN0cmluZztcbiAgc2VydmljZVdvcmtlck92ZXJyaWRlRm9yVHlwaWNhbD86IGJvb2xlYW47XG4gIHNlcnZpY2VXb3JrZXJVcGRhdGVyUGF0aD86IHN0cmluZztcbiAgYWxsb3dMb2NhbGhvc3RBc1NlY3VyZU9yaWdpbj86IGJvb2xlYW47XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJT25lU2lnbmFsT25lU2lnbmFsIHtcblx0U2xpZGVkb3duOiBJT25lU2lnbmFsU2xpZGVkb3duO1xuXHROb3RpZmljYXRpb25zOiBJT25lU2lnbmFsTm90aWZpY2F0aW9ucztcblx0U2Vzc2lvbjogSU9uZVNpZ25hbFNlc3Npb247XG5cdFVzZXI6IElPbmVTaWduYWxVc2VyO1xuXHREZWJ1ZzogSU9uZVNpZ25hbERlYnVnO1xuXHRsb2dpbihleHRlcm5hbElkOiBzdHJpbmcsIGp3dFRva2VuPzogc3RyaW5nKTogUHJvbWlzZTx2b2lkPjtcblx0bG9nb3V0KCk6IFByb21pc2U8dm9pZD47XG5cdGluaXQob3B0aW9uczogSUluaXRPYmplY3QpOiBQcm9taXNlPHZvaWQ+O1xuXHRzZXRDb25zZW50R2l2ZW4oY29uc2VudDogYm9vbGVhbik6IFByb21pc2U8dm9pZD47XG5cdHNldENvbnNlbnRSZXF1aXJlZChyZXF1aXJlc0NvbnNlbnQ6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+O1xufVxuZXhwb3J0IGludGVyZmFjZSBJT25lU2lnbmFsTm90aWZpY2F0aW9ucyB7XG5cdHBlcm1pc3Npb25OYXRpdmU6IE5vdGlmaWNhdGlvblBlcm1pc3Npb247XG5cdHBlcm1pc3Npb246IGJvb2xlYW47XG5cdHNldERlZmF1bHRVcmwodXJsOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+O1xuXHRzZXREZWZhdWx0VGl0bGUodGl0bGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD47XG5cdGlzUHVzaFN1cHBvcnRlZCgpOiBib29sZWFuO1xuXHRyZXF1ZXN0UGVybWlzc2lvbigpOiBQcm9taXNlPHZvaWQ+O1xuXHRhZGRFdmVudExpc3RlbmVyPEsgZXh0ZW5kcyBOb3RpZmljYXRpb25FdmVudE5hbWU+KGV2ZW50OiBLLCBsaXN0ZW5lcjogKG9iajogTm90aWZpY2F0aW9uRXZlbnRUeXBlTWFwW0tdKSA9PiB2b2lkKTogdm9pZDtcblx0cmVtb3ZlRXZlbnRMaXN0ZW5lcjxLIGV4dGVuZHMgTm90aWZpY2F0aW9uRXZlbnROYW1lPihldmVudDogSywgbGlzdGVuZXI6IChvYmo6IE5vdGlmaWNhdGlvbkV2ZW50VHlwZU1hcFtLXSkgPT4gdm9pZCk6IHZvaWQ7XG59XG5leHBvcnQgaW50ZXJmYWNlIElPbmVTaWduYWxTbGlkZWRvd24ge1xuXHRwcm9tcHRQdXNoKG9wdGlvbnM/OiBBdXRvUHJvbXB0T3B0aW9ucyk6IFByb21pc2U8dm9pZD47XG5cdHByb21wdFB1c2hDYXRlZ29yaWVzKG9wdGlvbnM/OiBBdXRvUHJvbXB0T3B0aW9ucyk6IFByb21pc2U8dm9pZD47XG5cdHByb21wdFNtcyhvcHRpb25zPzogQXV0b1Byb21wdE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+O1xuXHRwcm9tcHRFbWFpbChvcHRpb25zPzogQXV0b1Byb21wdE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+O1xuXHRwcm9tcHRTbXNBbmRFbWFpbChvcHRpb25zPzogQXV0b1Byb21wdE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+O1xuXHRhZGRFdmVudExpc3RlbmVyKGV2ZW50OiBTbGlkZWRvd25FdmVudE5hbWUsIGxpc3RlbmVyOiAod2FzU2hvd246IGJvb2xlYW4pID0+IHZvaWQpOiB2b2lkO1xuXHRyZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50OiBTbGlkZWRvd25FdmVudE5hbWUsIGxpc3RlbmVyOiAod2FzU2hvd246IGJvb2xlYW4pID0+IHZvaWQpOiB2b2lkO1xufVxuZXhwb3J0IGludGVyZmFjZSBJT25lU2lnbmFsRGVidWcge1xuXHRzZXRMb2dMZXZlbChsb2dMZXZlbDogc3RyaW5nKTogdm9pZDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSU9uZVNpZ25hbFNlc3Npb24ge1xuXHRzZW5kT3V0Y29tZShvdXRjb21lTmFtZTogc3RyaW5nLCBvdXRjb21lV2VpZ2h0PzogbnVtYmVyKTogUHJvbWlzZTx2b2lkPjtcblx0c2VuZFVuaXF1ZU91dGNvbWUob3V0Y29tZU5hbWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD47XG59XG5leHBvcnQgaW50ZXJmYWNlIElPbmVTaWduYWxVc2VyIHtcblx0b25lc2lnbmFsSWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0ZXh0ZXJuYWxJZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHRQdXNoU3Vic2NyaXB0aW9uOiBJT25lU2lnbmFsUHVzaFN1YnNjcmlwdGlvbjtcblx0YWRkQWxpYXMobGFiZWw6IHN0cmluZywgaWQ6IHN0cmluZyk6IHZvaWQ7XG5cdGFkZEFsaWFzZXMoYWxpYXNlczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSk6IHZvaWQ7XG5cdHJlbW92ZUFsaWFzKGxhYmVsOiBzdHJpbmcpOiB2b2lkO1xuXHRyZW1vdmVBbGlhc2VzKGxhYmVsczogc3RyaW5nW10pOiB2b2lkO1xuXHRhZGRFbWFpbChlbWFpbDogc3RyaW5nKTogdm9pZDtcblx0cmVtb3ZlRW1haWwoZW1haWw6IHN0cmluZyk6IHZvaWQ7XG5cdGFkZFNtcyhzbXNOdW1iZXI6IHN0cmluZyk6IHZvaWQ7XG5cdHJlbW92ZVNtcyhzbXNOdW1iZXI6IHN0cmluZyk6IHZvaWQ7XG5cdGFkZFRhZyhrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQ7XG5cdGFkZFRhZ3ModGFnczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSk6IHZvaWQ7XG5cdHJlbW92ZVRhZyhrZXk6IHN0cmluZyk6IHZvaWQ7XG5cdHJlbW92ZVRhZ3Moa2V5czogc3RyaW5nW10pOiB2b2lkO1xuXHRnZXRUYWdzKCk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG5cdGFkZEV2ZW50TGlzdGVuZXIoZXZlbnQ6ICdjaGFuZ2UnLCBsaXN0ZW5lcjogKGNoYW5nZTogVXNlckNoYW5nZUV2ZW50KSA9PiB2b2lkKTogdm9pZDtcblx0cmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudDogJ2NoYW5nZScsIGxpc3RlbmVyOiAoY2hhbmdlOiBVc2VyQ2hhbmdlRXZlbnQpID0+IHZvaWQpOiB2b2lkO1xuXHRzZXRMYW5ndWFnZShsYW5ndWFnZTogc3RyaW5nKTogdm9pZDtcblx0Z2V0TGFuZ3VhZ2UoKTogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBJT25lU2lnbmFsUHVzaFN1YnNjcmlwdGlvbiB7XG5cdGlkOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkO1xuXHR0b2tlbjogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZDtcblx0b3B0ZWRJbjogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblx0b3B0SW4oKTogUHJvbWlzZTx2b2lkPjtcblx0b3B0T3V0KCk6IFByb21pc2U8dm9pZD47XG5cdGFkZEV2ZW50TGlzdGVuZXIoZXZlbnQ6ICdjaGFuZ2UnLCBsaXN0ZW5lcjogKGNoYW5nZTogU3Vic2NyaXB0aW9uQ2hhbmdlRXZlbnQpID0+IHZvaWQpOiB2b2lkO1xuXHRyZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50OiAnY2hhbmdlJywgbGlzdGVuZXI6IChjaGFuZ2U6IFN1YnNjcmlwdGlvbkNoYW5nZUV2ZW50KSA9PiB2b2lkKTogdm9pZDtcbn1cbmZ1bmN0aW9uIG9uZVNpZ25hbExvZ2luKGV4dGVybmFsSWQ6IHN0cmluZywgand0VG9rZW4/OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ09uZVNpZ25hbCBzY3JpcHQgZmFpbGVkIHRvIGxvYWQuJykpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgICBvbmVTaWduYWwubG9naW4oZXh0ZXJuYWxJZCwgand0VG9rZW4pLnRoZW4oKCkgPT4gcmVzb2x2ZSgpKTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBvbmVTaWduYWxMb2dvdXQoKTogUHJvbWlzZTx2b2lkPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaWYgKGlzT25lU2lnbmFsU2NyaXB0RmFpbGVkKSB7XG4gICAgICByZWplY3QobmV3IEVycm9yKCdPbmVTaWduYWwgc2NyaXB0IGZhaWxlZCB0byBsb2FkLicpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgICAgb25lU2lnbmFsLmxvZ291dCgpLnRoZW4oKCkgPT4gcmVzb2x2ZSgpKTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBvbmVTaWduYWxTZXRDb25zZW50R2l2ZW4oY29uc2VudDogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignT25lU2lnbmFsIHNjcmlwdCBmYWlsZWQgdG8gbG9hZC4nKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5zZXRDb25zZW50R2l2ZW4oY29uc2VudCkudGhlbigoKSA9PiByZXNvbHZlKCkpO1xuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIG9uZVNpZ25hbFNldENvbnNlbnRSZXF1aXJlZChyZXF1aXJlc0NvbnNlbnQ6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ09uZVNpZ25hbCBzY3JpcHQgZmFpbGVkIHRvIGxvYWQuJykpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgICBvbmVTaWduYWwuc2V0Q29uc2VudFJlcXVpcmVkKHJlcXVpcmVzQ29uc2VudCkudGhlbigoKSA9PiByZXNvbHZlKCkpO1xuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHNsaWRlZG93blByb21wdFB1c2gob3B0aW9ucz86IEF1dG9Qcm9tcHRPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaWYgKGlzT25lU2lnbmFsU2NyaXB0RmFpbGVkKSB7XG4gICAgICByZWplY3QobmV3IEVycm9yKCdPbmVTaWduYWwgc2NyaXB0IGZhaWxlZCB0byBsb2FkLicpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgICAgb25lU2lnbmFsLlNsaWRlZG93bi5wcm9tcHRQdXNoKG9wdGlvbnMpLnRoZW4oKCkgPT4gcmVzb2x2ZSgpKTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBzbGlkZWRvd25Qcm9tcHRQdXNoQ2F0ZWdvcmllcyhvcHRpb25zPzogQXV0b1Byb21wdE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ09uZVNpZ25hbCBzY3JpcHQgZmFpbGVkIHRvIGxvYWQuJykpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgICBvbmVTaWduYWwuU2xpZGVkb3duLnByb21wdFB1c2hDYXRlZ29yaWVzKG9wdGlvbnMpLnRoZW4oKCkgPT4gcmVzb2x2ZSgpKTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBzbGlkZWRvd25Qcm9tcHRTbXMob3B0aW9ucz86IEF1dG9Qcm9tcHRPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaWYgKGlzT25lU2lnbmFsU2NyaXB0RmFpbGVkKSB7XG4gICAgICByZWplY3QobmV3IEVycm9yKCdPbmVTaWduYWwgc2NyaXB0IGZhaWxlZCB0byBsb2FkLicpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgICAgb25lU2lnbmFsLlNsaWRlZG93bi5wcm9tcHRTbXMob3B0aW9ucykudGhlbigoKSA9PiByZXNvbHZlKCkpO1xuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHNsaWRlZG93blByb21wdEVtYWlsKG9wdGlvbnM/OiBBdXRvUHJvbXB0T3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignT25lU2lnbmFsIHNjcmlwdCBmYWlsZWQgdG8gbG9hZC4nKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5TbGlkZWRvd24ucHJvbXB0RW1haWwob3B0aW9ucykudGhlbigoKSA9PiByZXNvbHZlKCkpO1xuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHNsaWRlZG93blByb21wdFNtc0FuZEVtYWlsKG9wdGlvbnM/OiBBdXRvUHJvbXB0T3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignT25lU2lnbmFsIHNjcmlwdCBmYWlsZWQgdG8gbG9hZC4nKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5TbGlkZWRvd24ucHJvbXB0U21zQW5kRW1haWwob3B0aW9ucykudGhlbigoKSA9PiByZXNvbHZlKCkpO1xuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHNsaWRlZG93bkFkZEV2ZW50TGlzdGVuZXIoZXZlbnQ6IFNsaWRlZG93bkV2ZW50TmFtZSwgbGlzdGVuZXI6ICh3YXNTaG93bjogYm9vbGVhbikgPT4gdm9pZCk6IHZvaWQge1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIG9uZVNpZ25hbC5TbGlkZWRvd24uYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc2xpZGVkb3duUmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudDogU2xpZGVkb3duRXZlbnROYW1lLCBsaXN0ZW5lcjogKHdhc1Nob3duOiBib29sZWFuKSA9PiB2b2lkKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlNsaWRlZG93bi5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBub3RpZmljYXRpb25zU2V0RGVmYXVsdFVybCh1cmw6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignT25lU2lnbmFsIHNjcmlwdCBmYWlsZWQgdG8gbG9hZC4nKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5Ob3RpZmljYXRpb25zLnNldERlZmF1bHRVcmwodXJsKS50aGVuKCgpID0+IHJlc29sdmUoKSk7XG4gICAgfSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gbm90aWZpY2F0aW9uc1NldERlZmF1bHRUaXRsZSh0aXRsZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaWYgKGlzT25lU2lnbmFsU2NyaXB0RmFpbGVkKSB7XG4gICAgICByZWplY3QobmV3IEVycm9yKCdPbmVTaWduYWwgc2NyaXB0IGZhaWxlZCB0byBsb2FkLicpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgICAgb25lU2lnbmFsLk5vdGlmaWNhdGlvbnMuc2V0RGVmYXVsdFRpdGxlKHRpdGxlKS50aGVuKCgpID0+IHJlc29sdmUoKSk7XG4gICAgfSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gbm90aWZpY2F0aW9uc1JlcXVlc3RQZXJtaXNzaW9uKCk6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignT25lU2lnbmFsIHNjcmlwdCBmYWlsZWQgdG8gbG9hZC4nKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5Ob3RpZmljYXRpb25zLnJlcXVlc3RQZXJtaXNzaW9uKCkudGhlbigoKSA9PiByZXNvbHZlKCkpO1xuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIG5vdGlmaWNhdGlvbnNBZGRFdmVudExpc3RlbmVyPEsgZXh0ZW5kcyBOb3RpZmljYXRpb25FdmVudE5hbWU+KGV2ZW50OiBLLCBsaXN0ZW5lcjogKG9iajogTm90aWZpY2F0aW9uRXZlbnRUeXBlTWFwW0tdKSA9PiB2b2lkKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLk5vdGlmaWNhdGlvbnMuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbm90aWZpY2F0aW9uc1JlbW92ZUV2ZW50TGlzdGVuZXI8SyBleHRlbmRzIE5vdGlmaWNhdGlvbkV2ZW50TmFtZT4oZXZlbnQ6IEssIGxpc3RlbmVyOiAob2JqOiBOb3RpZmljYXRpb25FdmVudFR5cGVNYXBbS10pID0+IHZvaWQpOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuTm90aWZpY2F0aW9ucy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzZXNzaW9uU2VuZE91dGNvbWUob3V0Y29tZU5hbWU6IHN0cmluZywgb3V0Y29tZVdlaWdodD86IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignT25lU2lnbmFsIHNjcmlwdCBmYWlsZWQgdG8gbG9hZC4nKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5TZXNzaW9uLnNlbmRPdXRjb21lKG91dGNvbWVOYW1lLCBvdXRjb21lV2VpZ2h0KS50aGVuKCgpID0+IHJlc29sdmUoKSk7XG4gICAgfSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gc2Vzc2lvblNlbmRVbmlxdWVPdXRjb21lKG91dGNvbWVOYW1lOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ09uZVNpZ25hbCBzY3JpcHQgZmFpbGVkIHRvIGxvYWQuJykpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgICBvbmVTaWduYWwuU2Vzc2lvbi5zZW5kVW5pcXVlT3V0Y29tZShvdXRjb21lTmFtZSkudGhlbigoKSA9PiByZXNvbHZlKCkpO1xuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHVzZXJBZGRBbGlhcyhsYWJlbDogc3RyaW5nLCBpZDogc3RyaW5nKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIuYWRkQWxpYXMobGFiZWwsIGlkKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVzZXJBZGRBbGlhc2VzKGFsaWFzZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuVXNlci5hZGRBbGlhc2VzKGFsaWFzZXMpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXNlclJlbW92ZUFsaWFzKGxhYmVsOiBzdHJpbmcpOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuVXNlci5yZW1vdmVBbGlhcyhsYWJlbCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1c2VyUmVtb3ZlQWxpYXNlcyhsYWJlbHM6IHN0cmluZ1tdKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIucmVtb3ZlQWxpYXNlcyhsYWJlbHMpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXNlckFkZEVtYWlsKGVtYWlsOiBzdHJpbmcpOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuVXNlci5hZGRFbWFpbChlbWFpbCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1c2VyUmVtb3ZlRW1haWwoZW1haWw6IHN0cmluZyk6IHZvaWQge1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIG9uZVNpZ25hbC5Vc2VyLnJlbW92ZUVtYWlsKGVtYWlsKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVzZXJBZGRTbXMoc21zTnVtYmVyOiBzdHJpbmcpOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuVXNlci5hZGRTbXMoc21zTnVtYmVyKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVzZXJSZW1vdmVTbXMoc21zTnVtYmVyOiBzdHJpbmcpOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuVXNlci5yZW1vdmVTbXMoc21zTnVtYmVyKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVzZXJBZGRUYWcoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuVXNlci5hZGRUYWcoa2V5LCB2YWx1ZSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1c2VyQWRkVGFncyh0YWdzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIuYWRkVGFncyh0YWdzKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVzZXJSZW1vdmVUYWcoa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuVXNlci5yZW1vdmVUYWcoa2V5KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVzZXJSZW1vdmVUYWdzKGtleXM6IHN0cmluZ1tdKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIucmVtb3ZlVGFncyhrZXlzKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVzZXJHZXRUYWdzKCk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0ge1xuICBsZXQgcmV0VmFsOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIHJldFZhbCA9IG9uZVNpZ25hbC5Vc2VyLmdldFRhZ3MoKTtcbiAgfSk7XG4gIC8vIEB0cy1pZ25vcmVcbiAgcmV0dXJuIHJldFZhbDtcbn1cblxuZnVuY3Rpb24gdXNlckFkZEV2ZW50TGlzdGVuZXIoZXZlbnQ6ICdjaGFuZ2UnLCBsaXN0ZW5lcjogKGNoYW5nZTogVXNlckNoYW5nZUV2ZW50KSA9PiB2b2lkKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXNlclJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQ6ICdjaGFuZ2UnLCBsaXN0ZW5lcjogKGNoYW5nZTogVXNlckNoYW5nZUV2ZW50KSA9PiB2b2lkKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXNlclNldExhbmd1YWdlKGxhbmd1YWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuVXNlci5zZXRMYW5ndWFnZShsYW5ndWFnZSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1c2VyR2V0TGFuZ3VhZ2UoKTogc3RyaW5nIHtcbiAgbGV0IHJldFZhbDogc3RyaW5nO1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIHJldFZhbCA9IG9uZVNpZ25hbC5Vc2VyLmdldExhbmd1YWdlKCk7XG4gIH0pO1xuICAvLyBAdHMtaWdub3JlXG4gIHJldHVybiByZXRWYWw7XG59XG5cbmZ1bmN0aW9uIHB1c2hTdWJzY3JpcHRpb25PcHRJbigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ09uZVNpZ25hbCBzY3JpcHQgZmFpbGVkIHRvIGxvYWQuJykpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgICBvbmVTaWduYWwuVXNlci5QdXNoU3Vic2NyaXB0aW9uLm9wdEluKCkudGhlbigoKSA9PiByZXNvbHZlKCkpO1xuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHB1c2hTdWJzY3JpcHRpb25PcHRPdXQoKTogUHJvbWlzZTx2b2lkPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaWYgKGlzT25lU2lnbmFsU2NyaXB0RmFpbGVkKSB7XG4gICAgICByZWplY3QobmV3IEVycm9yKCdPbmVTaWduYWwgc2NyaXB0IGZhaWxlZCB0byBsb2FkLicpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgICAgb25lU2lnbmFsLlVzZXIuUHVzaFN1YnNjcmlwdGlvbi5vcHRPdXQoKS50aGVuKCgpID0+IHJlc29sdmUoKSk7XG4gICAgfSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gcHVzaFN1YnNjcmlwdGlvbkFkZEV2ZW50TGlzdGVuZXIoZXZlbnQ6ICdjaGFuZ2UnLCBsaXN0ZW5lcjogKGNoYW5nZTogU3Vic2NyaXB0aW9uQ2hhbmdlRXZlbnQpID0+IHZvaWQpOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuVXNlci5QdXNoU3Vic2NyaXB0aW9uLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHB1c2hTdWJzY3JpcHRpb25SZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50OiAnY2hhbmdlJywgbGlzdGVuZXI6IChjaGFuZ2U6IFN1YnNjcmlwdGlvbkNoYW5nZUV2ZW50KSA9PiB2b2lkKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIuUHVzaFN1YnNjcmlwdGlvbi5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkZWJ1Z1NldExvZ0xldmVsKGxvZ0xldmVsOiBzdHJpbmcpOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuRGVidWcuc2V0TG9nTGV2ZWwobG9nTGV2ZWwpO1xuICB9KTtcbn1cblxuXG5jb25zdCBQdXNoU3Vic2NyaXB0aW9uTmFtZXNwYWNlOiBJT25lU2lnbmFsUHVzaFN1YnNjcmlwdGlvbiA9IHtcblx0Z2V0IGlkKCk6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQgeyByZXR1cm4gd2luZG93Lk9uZVNpZ25hbD8uVXNlcj8uUHVzaFN1YnNjcmlwdGlvbj8uaWQ7IH0sXG5cdGdldCB0b2tlbigpOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHdpbmRvdy5PbmVTaWduYWw/LlVzZXI/LlB1c2hTdWJzY3JpcHRpb24/LnRva2VuOyB9LFxuXHRnZXQgb3B0ZWRJbigpOiBib29sZWFuIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHdpbmRvdy5PbmVTaWduYWw/LlVzZXI/LlB1c2hTdWJzY3JpcHRpb24/Lm9wdGVkSW47IH0sXG5cdG9wdEluOiBwdXNoU3Vic2NyaXB0aW9uT3B0SW4sXG5cdG9wdE91dDogcHVzaFN1YnNjcmlwdGlvbk9wdE91dCxcblx0YWRkRXZlbnRMaXN0ZW5lcjogcHVzaFN1YnNjcmlwdGlvbkFkZEV2ZW50TGlzdGVuZXIsXG5cdHJlbW92ZUV2ZW50TGlzdGVuZXI6IHB1c2hTdWJzY3JpcHRpb25SZW1vdmVFdmVudExpc3RlbmVyLFxufTtcblxuY29uc3QgVXNlck5hbWVzcGFjZTogSU9uZVNpZ25hbFVzZXIgPSB7XG5cdGdldCBvbmVzaWduYWxJZCgpOiBzdHJpbmcgfCB1bmRlZmluZWQgeyByZXR1cm4gd2luZG93Lk9uZVNpZ25hbD8uVXNlcj8ub25lc2lnbmFsSWQ7IH0sXG5cdGdldCBleHRlcm5hbElkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7IHJldHVybiB3aW5kb3cuT25lU2lnbmFsPy5Vc2VyPy5leHRlcm5hbElkOyB9LFxuXHRhZGRBbGlhczogdXNlckFkZEFsaWFzLFxuXHRhZGRBbGlhc2VzOiB1c2VyQWRkQWxpYXNlcyxcblx0cmVtb3ZlQWxpYXM6IHVzZXJSZW1vdmVBbGlhcyxcblx0cmVtb3ZlQWxpYXNlczogdXNlclJlbW92ZUFsaWFzZXMsXG5cdGFkZEVtYWlsOiB1c2VyQWRkRW1haWwsXG5cdHJlbW92ZUVtYWlsOiB1c2VyUmVtb3ZlRW1haWwsXG5cdGFkZFNtczogdXNlckFkZFNtcyxcblx0cmVtb3ZlU21zOiB1c2VyUmVtb3ZlU21zLFxuXHRhZGRUYWc6IHVzZXJBZGRUYWcsXG5cdGFkZFRhZ3M6IHVzZXJBZGRUYWdzLFxuXHRyZW1vdmVUYWc6IHVzZXJSZW1vdmVUYWcsXG5cdHJlbW92ZVRhZ3M6IHVzZXJSZW1vdmVUYWdzLFxuXHRnZXRUYWdzOiB1c2VyR2V0VGFncyxcblx0YWRkRXZlbnRMaXN0ZW5lcjogdXNlckFkZEV2ZW50TGlzdGVuZXIsXG5cdHJlbW92ZUV2ZW50TGlzdGVuZXI6IHVzZXJSZW1vdmVFdmVudExpc3RlbmVyLFxuXHRzZXRMYW5ndWFnZTogdXNlclNldExhbmd1YWdlLFxuXHRnZXRMYW5ndWFnZTogdXNlckdldExhbmd1YWdlLFxuXHRQdXNoU3Vic2NyaXB0aW9uOiBQdXNoU3Vic2NyaXB0aW9uTmFtZXNwYWNlLFxufTtcblxuY29uc3QgU2Vzc2lvbk5hbWVzcGFjZTogSU9uZVNpZ25hbFNlc3Npb24gPSB7XG5cdHNlbmRPdXRjb21lOiBzZXNzaW9uU2VuZE91dGNvbWUsXG5cdHNlbmRVbmlxdWVPdXRjb21lOiBzZXNzaW9uU2VuZFVuaXF1ZU91dGNvbWUsXG59O1xuXG5jb25zdCBEZWJ1Z05hbWVzcGFjZTogSU9uZVNpZ25hbERlYnVnID0ge1xuXHRzZXRMb2dMZXZlbDogZGVidWdTZXRMb2dMZXZlbCxcbn07XG5cbmNvbnN0IFNsaWRlZG93bk5hbWVzcGFjZTogSU9uZVNpZ25hbFNsaWRlZG93biA9IHtcblx0cHJvbXB0UHVzaDogc2xpZGVkb3duUHJvbXB0UHVzaCxcblx0cHJvbXB0UHVzaENhdGVnb3JpZXM6IHNsaWRlZG93blByb21wdFB1c2hDYXRlZ29yaWVzLFxuXHRwcm9tcHRTbXM6IHNsaWRlZG93blByb21wdFNtcyxcblx0cHJvbXB0RW1haWw6IHNsaWRlZG93blByb21wdEVtYWlsLFxuXHRwcm9tcHRTbXNBbmRFbWFpbDogc2xpZGVkb3duUHJvbXB0U21zQW5kRW1haWwsXG5cdGFkZEV2ZW50TGlzdGVuZXI6IHNsaWRlZG93bkFkZEV2ZW50TGlzdGVuZXIsXG5cdHJlbW92ZUV2ZW50TGlzdGVuZXI6IHNsaWRlZG93blJlbW92ZUV2ZW50TGlzdGVuZXIsXG59O1xuXG5jb25zdCBOb3RpZmljYXRpb25zTmFtZXNwYWNlOiBJT25lU2lnbmFsTm90aWZpY2F0aW9ucyA9IHtcblx0Z2V0IHBlcm1pc3Npb25OYXRpdmUoKTogTm90aWZpY2F0aW9uUGVybWlzc2lvbiB7IHJldHVybiB3aW5kb3cuT25lU2lnbmFsPy5Ob3RpZmljYXRpb25zPy5wZXJtaXNzaW9uTmF0aXZlID8/ICdkZWZhdWx0JzsgfSxcblx0Z2V0IHBlcm1pc3Npb24oKTogYm9vbGVhbiB7IHJldHVybiB3aW5kb3cuT25lU2lnbmFsPy5Ob3RpZmljYXRpb25zPy5wZXJtaXNzaW9uID8/IGZhbHNlOyB9LFxuXHRzZXREZWZhdWx0VXJsOiBub3RpZmljYXRpb25zU2V0RGVmYXVsdFVybCxcblx0c2V0RGVmYXVsdFRpdGxlOiBub3RpZmljYXRpb25zU2V0RGVmYXVsdFRpdGxlLFxuXHRpc1B1c2hTdXBwb3J0ZWQsXG5cdHJlcXVlc3RQZXJtaXNzaW9uOiBub3RpZmljYXRpb25zUmVxdWVzdFBlcm1pc3Npb24sXG5cdGFkZEV2ZW50TGlzdGVuZXI6IG5vdGlmaWNhdGlvbnNBZGRFdmVudExpc3RlbmVyLFxuXHRyZW1vdmVFdmVudExpc3RlbmVyOiBub3RpZmljYXRpb25zUmVtb3ZlRXZlbnRMaXN0ZW5lcixcbn07XG5cbi8qKlxuICogQFB1YmxpY0FwaVxuICovXG5mdW5jdGlvbiBpc1B1c2hTdXBwb3J0ZWQoKTogYm9vbGVhbiB7XG4gIHJldHVybiBpc1B1c2hOb3RpZmljYXRpb25zU3VwcG9ydGVkKCk7XG59XG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmNvbnN0IE9ORVNJR05BTF9TREtfSUQgPSAnb25lc2lnbmFsLXNkayc7XG5jb25zdCBPTkVfU0lHTkFMX1NDUklQVF9TUkMgPSAnaHR0cHM6Ly9jZG4ub25lc2lnbmFsLmNvbS9zZGtzL3dlYi92MTYvT25lU2lnbmFsU0RLLnBhZ2UuanMnO1xuXG4vLyB0cnVlIGlmIHRoZSBzY3JpcHQgaXMgc3VjY2Vzc2Z1bGx5IGxvYWRlZCBmcm9tIENETi5cbmxldCBpc09uZVNpZ25hbEluaXRpYWxpemVkID0gZmFsc2U7XG4vLyB0cnVlIGlmIHRoZSBzY3JpcHQgZmFpbHMgdG8gbG9hZCBmcm9tIENETi4gQSBzZXBhcmF0ZSBmbGFnIGlzIG5lY2Vzc2FyeVxuLy8gdG8gZGlzYW1iaWd1YXRlIGJldHdlZW4gYSBDRE4gbG9hZCBmYWlsdXJlIGFuZCBhIGRlbGF5ZWQgY2FsbCB0b1xuLy8gT25lU2lnbmFsI2luaXQuXG5sZXQgaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQgPSBmYWxzZTtcblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZCA9IHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZCB8fCBbXTtcbiAgYWRkU0RLU2NyaXB0KCk7XG59XG5cbi8qKlxuICogVGhlIGZvbGxvd2luZyBjb2RlIGlzIGNvcGllZCBkaXJlY3RseSBmcm9tIHRoZSBuYXRpdmUgU0RLIHNvdXJjZSBmaWxlIEJyb3dzZXJTdXBwb3J0c1B1c2gudHNcbiAqIFMgVCBBIFIgVFxuICovXG5cbi8vIENoZWNrcyBpZiB0aGUgYnJvd3NlciBzdXBwb3J0cyBwdXNoIG5vdGlmaWNhdGlvbnMgYnkgY2hlY2tpbmcgaWYgc3BlY2lmaWNcbi8vICAgY2xhc3NlcyBhbmQgcHJvcGVydGllcyBvbiB0aGVtIGV4aXN0XG5mdW5jdGlvbiBpc1B1c2hOb3RpZmljYXRpb25zU3VwcG9ydGVkKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gc3VwcG9ydHNWYXBpZFB1c2goKSB8fCBzdXBwb3J0c1NhZmFyaVB1c2goKTtcbn1cblxuZnVuY3Rpb24gaXNNYWNPU1NhZmFyaUluSWZyYW1lKCk6IGJvb2xlYW4ge1xuICAvLyBGYWxsYmFjayBkZXRlY3Rpb24gZm9yIFNhZmFyaSBvbiBtYWNPUyBpbiBhbiBpZnJhbWUgY29udGV4dFxuICByZXR1cm4gd2luZG93LnRvcCAhPT0gd2luZG93ICYmIC8vIGlzQ29udGV4dElmcmFtZVxuICBuYXZpZ2F0b3IudmVuZG9yID09PSAnQXBwbGUgQ29tcHV0ZXIsIEluYy4nICYmIC8vIGlzU2FmYXJpXG4gIG5hdmlnYXRvci5wbGF0Zm9ybSA9PT0gJ01hY0ludGVsJzsgLy8gaXNNYWNPU1xufVxuXG5mdW5jdGlvbiBzdXBwb3J0c1NhZmFyaVB1c2goKTogYm9vbGVhbiB7XG4gIHJldHVybiAod2luZG93LnNhZmFyaSAmJiB0eXBlb2Ygd2luZG93LnNhZmFyaS5wdXNoTm90aWZpY2F0aW9uICE9PSAndW5kZWZpbmVkJykgfHxcbiAgICAgICAgICBpc01hY09TU2FmYXJpSW5JZnJhbWUoKTtcbn1cblxuLy8gRG9lcyB0aGUgYnJvd3NlciBzdXBwb3J0IHRoZSBzdGFuZGFyZCBQdXNoIEFQSVxuZnVuY3Rpb24gc3VwcG9ydHNWYXBpZFB1c2goKTogYm9vbGVhbiB7XG4gIHJldHVybiB0eXBlb2YgUHVzaFN1YnNjcmlwdGlvbk9wdGlvbnMgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIFB1c2hTdWJzY3JpcHRpb25PcHRpb25zLnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSgnYXBwbGljYXRpb25TZXJ2ZXJLZXknKTtcbn1cbi8qIEUgTiBEICovXG5cbmZ1bmN0aW9uIGhhbmRsZU9uRXJyb3IoKTogdm9pZCB7XG4gIGlzT25lU2lnbmFsU2NyaXB0RmFpbGVkID0gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gYWRkU0RLU2NyaXB0KCk6IHZvaWQge1xuICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgc2NyaXB0LmlkID0gT05FU0lHTkFMX1NES19JRDtcbiAgc2NyaXB0LmRlZmVyID0gdHJ1ZTtcbiAgc2NyaXB0LnNyYyA9IE9ORV9TSUdOQUxfU0NSSVBUX1NSQztcblxuICAvLyBBbHdheXMgcmVzb2x2ZSB3aGV0aGVyIG9yIG5vdCB0aGUgc2NyaXB0IGlzIHN1Y2Nlc3NmdWxseSBpbml0aWFsaXplZC5cbiAgLy8gVGhpcyBpcyBpbXBvcnRhbnQgZm9yIHVzZXJzIHdobyBtYXkgYmxvY2sgY2RuLm9uZXNpZ25hbC5jb20gdy8gYWRibG9jay5cbiAgc2NyaXB0Lm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgaGFuZGxlT25FcnJvcigpO1xuICB9O1xuXG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbn1cblxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIE9uZVNpZ25hbERlZmVycmVkPzogT25lU2lnbmFsRGVmZXJyZWRMb2FkZWRDYWxsYmFja1tdO1xuICAgIE9uZVNpZ25hbD86IElPbmVTaWduYWxPbmVTaWduYWw7XG4gICAgc2FmYXJpPzoge1xuICAgICAgcHVzaE5vdGlmaWNhdGlvbjogYW55O1xuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJT25lU2lnbmFsT25lU2lnbmFsIHtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBPbmVTaWduYWwgaW1wbGVtZW50cyBJT25lU2lnbmFsT25lU2lnbmFsIHtcbiAgW2tleTogc3RyaW5nXTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgLyogUCBVIEIgTCBJIEMgKi9cblxuICAvKipcbiAgICogQFB1YmxpY0FwaVxuICAgKi9cbiAgaW5pdChvcHRpb25zOiBJSW5pdE9iamVjdCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmIChpc09uZVNpZ25hbEluaXRpYWxpemVkKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoYE9uZVNpZ25hbCBpcyBhbHJlYWR5IGluaXRpYWxpemVkLmApO1xuICAgIH1cblxuICAgIGlmICghb3B0aW9ucyB8fCAhb3B0aW9ucy5hcHBJZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbmVlZCB0byBwcm92aWRlIHlvdXIgT25lU2lnbmFsIGFwcElkLicpO1xuICAgIH1cblxuICAgIGlmICghZG9jdW1lbnQpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChgRG9jdW1lbnQgaXMgbm90IGRlZmluZWQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlKSA9PiB7XG4gICAgICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgICAgICBvbmVTaWduYWwuaW5pdChvcHRpb25zKS50aGVuKCgpID0+IHtcbiAgICAgICAgICBpc09uZVNpZ25hbEluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuXHRVc2VyID0gVXNlck5hbWVzcGFjZTtcblx0U2Vzc2lvbiA9IFNlc3Npb25OYW1lc3BhY2U7XG5cdERlYnVnID0gRGVidWdOYW1lc3BhY2U7XG5cdFNsaWRlZG93biA9IFNsaWRlZG93bk5hbWVzcGFjZTtcblx0Tm90aWZpY2F0aW9ucyA9IE5vdGlmaWNhdGlvbnNOYW1lc3BhY2U7XG5cdGxvZ2luID0gb25lU2lnbmFsTG9naW47XG5cdGxvZ291dCA9IG9uZVNpZ25hbExvZ291dDtcblx0c2V0Q29uc2VudEdpdmVuID0gb25lU2lnbmFsU2V0Q29uc2VudEdpdmVuO1xuXHRzZXRDb25zZW50UmVxdWlyZWQgPSBvbmVTaWduYWxTZXRDb25zZW50UmVxdWlyZWQ7XG59XG4iXX0=