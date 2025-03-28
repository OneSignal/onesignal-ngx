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
        if (isOneSignalInitialized) {
            return Promise.reject(`OneSignal is already initialized.`);
        }
        if (!options || !options.appId) {
            return Promise.reject('You need to provide your OneSignal appId.');
        }
        if (!document) {
            return Promise.reject(`Document is not defined.`);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25lc2lnbmFsLW5neC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvb25lc2lnbmFsLW5neC9zcmMvbGliL29uZXNpZ25hbC1uZ3guc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnWkEsU0FBUyxjQUFjLENBQUMsVUFBa0IsRUFBRSxRQUFpQjtJQUMzRCxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFOztRQUNyQyxJQUFJLHVCQUF1QixFQUFFO1lBQzNCLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDLENBQUM7WUFDdEQsT0FBTztTQUNSO1FBRUQsTUFBQSxNQUFNLENBQUMsaUJBQWlCLDBDQUFFLElBQUksQ0FBQyxDQUFDLFNBQThCLEVBQUUsRUFBRTtZQUNoRSxTQUFTLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUM5RCxDQUFDLEVBQUU7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFDRCxTQUFTLGVBQWU7SUFDdEIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTs7UUFDckMsSUFBSSx1QkFBdUIsRUFBRTtZQUMzQixNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsa0NBQWtDLENBQUMsQ0FBQyxDQUFDO1lBQ3RELE9BQU87U0FDUjtRQUVELE1BQUEsTUFBTSxDQUFDLGlCQUFpQiwwQ0FBRSxJQUFJLENBQUMsQ0FBQyxTQUE4QixFQUFFLEVBQUU7WUFDaEUsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQzNDLENBQUMsRUFBRTtJQUNMLENBQUMsQ0FBQyxDQUFD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QUMsaUJBQWlCLDBDQUFFLElBQUksQ0FBQyxDQUFDLFNBQThCLEVBQUUsRUFBRTtnQkFDaEUsU0FBUztxQkFDTixJQUFJLENBQUMsT0FBTyxDQUFDO3FCQUNiLElBQUksQ0FBQyxHQUFHLEVBQUU7b0JBQ1Qsc0JBQXNCLEdBQUcsSUFBSSxDQUFDO29CQUM5QixPQUFPLEVBQUUsQ0FBQztnQkFDWixDQUFDLENBQUM7cUJBQ0QsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25CLENBQUMsRUFBRTtRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztZQXJDRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIEF1dG9Qcm9tcHRPcHRpb25zIHsgZm9yY2U/OiBib29sZWFuOyBmb3JjZVNsaWRlZG93bk92ZXJOYXRpdmU/OiBib29sZWFuOyBzbGlkZWRvd25Qcm9tcHRPcHRpb25zPzogSU9uZVNpZ25hbEF1dG9Qcm9tcHRPcHRpb25zOyB9XG5leHBvcnQgaW50ZXJmYWNlIElPbmVTaWduYWxBdXRvUHJvbXB0T3B0aW9ucyB7IGZvcmNlPzogYm9vbGVhbjsgZm9yY2VTbGlkZWRvd25PdmVyTmF0aXZlPzogYm9vbGVhbjsgaXNJblVwZGF0ZU1vZGU/OiBib29sZWFuOyBjYXRlZ29yeU9wdGlvbnM/OiBJT25lU2lnbmFsQ2F0ZWdvcmllczsgfVxuZXhwb3J0IGludGVyZmFjZSBJT25lU2lnbmFsQ2F0ZWdvcmllcyB7IHBvc2l0aXZlVXBkYXRlQnV0dG9uOiBzdHJpbmc7IG5lZ2F0aXZlVXBkYXRlQnV0dG9uOiBzdHJpbmc7IHNhdmluZ0J1dHRvblRleHQ6IHN0cmluZzsgZXJyb3JCdXR0b25UZXh0OiBzdHJpbmc7IHVwZGF0ZU1lc3NhZ2U6IHN0cmluZzsgdGFnczogSU9uZVNpZ25hbFRhZ0NhdGVnb3J5W107IH1cbmV4cG9ydCBpbnRlcmZhY2UgSU9uZVNpZ25hbFRhZ0NhdGVnb3J5IHsgdGFnOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmc7IGNoZWNrZWQ/OiBib29sZWFuOyB9XG5leHBvcnQgdHlwZSBQdXNoU3Vic2NyaXB0aW9uTmFtZXNwYWNlUHJvcGVydGllcyA9IHsgaWQ6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQ7IHRva2VuOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkOyBvcHRlZEluOiBib29sZWFuOyB9O1xuZXhwb3J0IHR5cGUgU3Vic2NyaXB0aW9uQ2hhbmdlRXZlbnQgPSB7IHByZXZpb3VzOiBQdXNoU3Vic2NyaXB0aW9uTmFtZXNwYWNlUHJvcGVydGllczsgY3VycmVudDogUHVzaFN1YnNjcmlwdGlvbk5hbWVzcGFjZVByb3BlcnRpZXM7IH07XG5leHBvcnQgdHlwZSBOb3RpZmljYXRpb25FdmVudE5hbWUgPSAnY2xpY2snIHwgJ2ZvcmVncm91bmRXaWxsRGlzcGxheScgfCAnZGlzbWlzcycgfCAncGVybWlzc2lvbkNoYW5nZScgfCAncGVybWlzc2lvblByb21wdERpc3BsYXknO1xuZXhwb3J0IHR5cGUgU2xpZGVkb3duRXZlbnROYW1lID0gJ3NsaWRlZG93bkFsbG93Q2xpY2snIHwgJ3NsaWRlZG93bkNhbmNlbENsaWNrJyB8ICdzbGlkZWRvd25DbG9zZWQnIHwgJ3NsaWRlZG93blF1ZXVlZCcgfCAnc2xpZGVkb3duU2hvd24nO1xuZXhwb3J0IHR5cGUgT25lU2lnbmFsRGVmZXJyZWRMb2FkZWRDYWxsYmFjayA9IChvbmVzaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHZvaWQ7XG5leHBvcnQgaW50ZXJmYWNlIElPU05vdGlmaWNhdGlvbiB7XG4gIC8qKlxuICAgKiBUaGUgT25lU2lnbmFsIG5vdGlmaWNhdGlvbiBpZDtcbiAgICogIC0gUHJpbWFyeSBpZCBvbiBPbmVTaWduYWwncyBSRVNUIEFQSSBhbmQgZGFzaGJvYXJkXG4gICAqL1xuICByZWFkb25seSBub3RpZmljYXRpb25JZDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBWaXNpYmxlIHRpdGxlIHRleHQgb24gdGhlIG5vdGlmaWNhdGlvblxuICAgKi9cbiAgcmVhZG9ubHkgdGl0bGU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFZpc2libGUgYm9keSB0ZXh0IG9uIHRoZSBub3RpZmljYXRpb25cbiAgICovXG4gIHJlYWRvbmx5IGJvZHk6IHN0cmluZztcblxuICAvKipcbiAgICogVmlzaWJsZSBpY29uIHRoZSBub3RpZmljYXRpb247IFVSTCBmb3JtYXRcbiAgICovXG4gIHJlYWRvbmx5IGljb24/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFZpc2libGUgc21hbGwgYmFkZ2VJY29uIHRoYXQgZGlzcGxheXMgb24gc29tZSBkZXZpY2VzOyBVUkwgZm9ybWF0XG4gICAqIEV4YW1wbGU6IE9uIEFuZHJvaWQncyBzdGF0dXMgYmFyXG4gICAqL1xuICByZWFkb25seSBiYWRnZUljb24/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFZpc2libGUgaW1hZ2Ugb24gdGhlIG5vdGlmaWNhdGlvbjsgVVJMIGZvcm1hdFxuICAgKi9cbiAgcmVhZG9ubHkgaW1hZ2U/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFZpc2libGUgYnV0dG9ucyBvbiB0aGUgbm90aWZpY2F0aW9uXG4gICAqL1xuICByZWFkb25seSBhY3Rpb25CdXR0b25zPzogSU9TTm90aWZpY2F0aW9uQWN0aW9uQnV0dG9uW107XG5cbiAgLyoqXG4gICAqIElmIHRoaXMgdmFsdWUgaXMgdGhlIHNhbWUgYXMgZXhpc3Rpbmcgbm90aWZpY2F0aW9uLCBpdCB3aWxsIHJlcGxhY2UgaXRcbiAgICogQ2FuIGJlIHNldCB3aGVuIGNyZWF0aW5nIHRoZSBub3RpZmljYXRpb24gd2l0aCBcIldlYiBQdXNoIFRvcGljXCIgb24gdGhlIGRhc2hib2FyZFxuICAgKiBvciB3ZWJfcHVzaF90b3BpYyBmcm9tIHRoZSBSRVNUIEFQSS5cbiAgICovXG4gIHJlYWRvbmx5IHRvcGljPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDdXN0b20gb2JqZWN0IHRoYXQgd2FzIHNlbnQgd2l0aCB0aGUgbm90aWZpY2F0aW9uO1xuICAgKiBkZWZpbmFibGUgd2hlbiBjcmVhdGluZyB0aGUgbm90aWZpY2F0aW9uIGZyb20gdGhlIE9uZVNpZ25hbCBSRVNUIEFQSSBvciBkYXNoYm9hcmRcbiAgICovXG4gIHJlYWRvbmx5IGFkZGl0aW9uYWxEYXRhPzogb2JqZWN0O1xuXG4gIC8qKlxuICAgKiBVUkwgdG8gb3BlbiB3aGVuIGNsaWNraW5nIG9yIHRhcHBpbmcgb24gdGhlIG5vdGlmaWNhdGlvblxuICAgKi9cbiAgcmVhZG9ubHkgbGF1bmNoVVJMPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDb25maXJtIHRoZSBwdXNoIHdhcyByZWNlaXZlZCBieSByZXBvcnRpbmcgYmFjayB0byBPbmVTaWduYWxcbiAgICovXG4gIHJlYWRvbmx5IGNvbmZpcm1EZWxpdmVyeTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJT1NOb3RpZmljYXRpb25BY3Rpb25CdXR0b24ge1xuICAvKipcbiAgICogQW55IHVuaXF1ZSBpZGVudGlmaWVyIHRvIHJlcHJlc2VudCB3aGljaCBidXR0b24gd2FzIGNsaWNrZWQuIFRoaXMgaXMgdHlwaWNhbGx5IHBhc3NlZCBiYWNrIHRvIHRoZSBzZXJ2aWNlIHdvcmtlclxuICAgKiBhbmQgaG9zdCBwYWdlIHRocm91Z2ggZXZlbnRzIHRvIGlkZW50aWZ5IHdoaWNoIGJ1dHRvbiB3YXMgY2xpY2tlZC5cbiAgICogZS5nLiAnbGlrZS1idXR0b24nXG4gICAqL1xuICByZWFkb25seSBhY3Rpb25JZDogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIG5vdGlmaWNhdGlvbiBhY3Rpb24gYnV0dG9uJ3MgdGV4dC5cbiAgICovXG4gIHJlYWRvbmx5IHRleHQ6IHN0cmluZztcbiAgLyoqXG4gICAqIEEgdmFsaWQgcHVibGljbHkgcmVhY2hhYmxlIEhUVFBTIFVSTCB0byBhbiBpbWFnZS5cbiAgICovXG4gIHJlYWRvbmx5IGljb24/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgVVJMIHRvIG9wZW4gdGhlIHdlYiBicm93c2VyIHRvIHdoZW4gdGhpcyBhY3Rpb24gYnV0dG9uIGlzIGNsaWNrZWQuXG4gICAqL1xuICByZWFkb25seSBsYXVuY2hVUkw/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm90aWZpY2F0aW9uQ2xpY2tSZXN1bHQge1xuICByZWFkb25seSBhY3Rpb25JZD86IHN0cmluZztcbiAgcmVhZG9ubHkgdXJsPzogc3RyaW5nO1xufVxuXG5leHBvcnQgdHlwZSBOb3RpZmljYXRpb25FdmVudFR5cGVNYXAgPSB7XG4gICdjbGljayc6IE5vdGlmaWNhdGlvbkNsaWNrRXZlbnQ7XG4gICdmb3JlZ3JvdW5kV2lsbERpc3BsYXknOiBOb3RpZmljYXRpb25Gb3JlZ3JvdW5kV2lsbERpc3BsYXlFdmVudDtcbiAgJ2Rpc21pc3MnOiBOb3RpZmljYXRpb25EaXNtaXNzRXZlbnQ7XG4gICdwZXJtaXNzaW9uQ2hhbmdlJzogYm9vbGVhbjtcbiAgJ3Blcm1pc3Npb25Qcm9tcHREaXNwbGF5Jzogdm9pZDtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm90aWZpY2F0aW9uRm9yZWdyb3VuZFdpbGxEaXNwbGF5RXZlbnQge1xuICByZWFkb25seSBub3RpZmljYXRpb246IElPU05vdGlmaWNhdGlvbjtcbiAgcHJldmVudERlZmF1bHQoKTogdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOb3RpZmljYXRpb25EaXNtaXNzRXZlbnQge1xuICBub3RpZmljYXRpb246IElPU05vdGlmaWNhdGlvbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOb3RpZmljYXRpb25DbGlja0V2ZW50IHtcbiAgcmVhZG9ubHkgbm90aWZpY2F0aW9uOiBJT1NOb3RpZmljYXRpb247XG4gIHJlYWRvbmx5IHJlc3VsdDogTm90aWZpY2F0aW9uQ2xpY2tSZXN1bHQ7XG59XG5cbmV4cG9ydCB0eXBlIFVzZXJDaGFuZ2VFdmVudCA9IHtcbiAgY3VycmVudDogVXNlck5hbWVzcGFjZVByb3BlcnRpZXM7XG59O1xuZXhwb3J0IHR5cGUgVXNlck5hbWVzcGFjZVByb3BlcnRpZXMgPSB7XG4gIG9uZXNpZ25hbElkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGV4dGVybmFsSWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUluaXRPYmplY3Qge1xuICBhcHBJZDogc3RyaW5nO1xuICBzdWJkb21haW5OYW1lPzogc3RyaW5nO1xuICByZXF1aXJlc1VzZXJQcml2YWN5Q29uc2VudD86IGJvb2xlYW47XG4gIHByb21wdE9wdGlvbnM/OiB7XG4gICAgc2xpZGVkb3duOiB7XG4gICAgICBwcm9tcHRzOiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXaGV0aGVyIHRvIGF1dG9tYXRpY2FsbHkgZGlzcGxheSB0aGUgcHJvbXB0LlxuICAgICAgICAgKiBgdHJ1ZWAgd2lsbCBkaXNwbGF5IHRoZSBwcm9tcHQgYmFzZWQgb24gdGhlIGRlbGF5IG9wdGlvbnMuXG4gICAgICAgICAqIGBmYWxzZWAgd2lsbCBwcmV2ZW50IHRoZSBwcm9tcHQgZnJvbSBkaXNwbGF5aW5nIHVudGlsIHRoZSBTbGlkZWRvd25zIG1ldGhvZHMgYXJlIHVzZWQuXG4gICAgICAgICAqL1xuICAgICAgICBhdXRvUHJvbXB0OiBib29sZWFuO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBPbmx5IGF2YWlsYWJsZSBmb3IgdHlwZTogY2F0ZWdvcnkuIFVwIHRvIDEwIGNhdGVnb3JpZXMuXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqICBjYXRlZ29yaWVzOiBbeyB0YWc6ICdsb2NhbF9uZXdzJywgbGFiZWw6ICdMb2NhbCBOZXdzJyB9XSAvLyBUaGUgdXNlciB3aWxsIGJlIHRhZ2dlZCB3aXRoIGxvY2FsX25ld3MgYnV0IHdpbGwgc2VlIFwiTG9jYWwgTmV3c1wiIGluIHRoZSBwcm9tcHQuXG4gICAgICAgICAqL1xuICAgICAgICBjYXRlZ29yaWVzOiB7XG4gICAgICAgICAgLyoqIFNob3VsZCBpZGVudGlmeSB0aGUgYWN0aW9uLiAqL1xuICAgICAgICAgIHRhZzogc3RyaW5nO1xuXG4gICAgICAgICAgLyoqIFdoYXQgdGhlIHVzZXIgd2lsbCBzZWUuICovXG4gICAgICAgICAgbGFiZWw6IHN0cmluZztcbiAgICAgICAgfVtdO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgZGVsYXkgb3B0aW9ucyBmb3IgdGhlIHByb21wdC5cbiAgICAgICAgICogQGV4YW1wbGUgZGVsYXk6IHsgcGFnZVZpZXdzOiAzLCB0aW1lRGVsYXk6IDIwIH0gLy8gVGhlIHVzZXIgd2lsbCBub3QgYmUgc2hvd24gdGhlIHByb21wdCB1bnRpbCAyMCBzZWNvbmRzIGFmdGVyIHRoZSAzcmQgcGFnZSB2aWV3LlxuICAgICAgICAgKi9cbiAgICAgICAgZGVsYXk6IHtcbiAgICAgICAgICAvKiogVGhlIG51bWJlciBvZiBwYWdlcyBhIHVzZXIgbmVlZHMgdG8gdmlzaXQgYmVmb3JlIHRoZSBwcm9tcHQgaXMgZGlzcGxheWVkLiAqL1xuICAgICAgICAgIHBhZ2VWaWV3cz86IG51bWJlcjtcblxuICAgICAgICAgIC8qKiBUaGUgbnVtYmVyIG9mIHNlY29uZHMgYSB1c2VyIG5lZWRzIHRvIHdhaXQgYmVmb3JlIHRoZSBwcm9tcHQgaXMgZGlzcGxheWVkLkJvdGggb3B0aW9ucyBtdXN0IGJlIHNhdGlzZmllZCBmb3IgdGhlIHByb21wdCB0byBkaXNwbGF5ICovXG4gICAgICAgICAgdGltZURlbGF5PzogbnVtYmVyO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdGV4dCB0byBkaXNwbGF5IGluIHRoZSBwcm9tcHQuXG4gICAgICAgICAqL1xuICAgICAgICB0ZXh0Pzoge1xuICAgICAgICAgIC8qKiBUaGUgY2FsbG91dCBhc2tpbmcgdGhlIHVzZXIgdG8gb3B0LWluLiBVcCB0byA5MCBjaGFyYWN0ZXJzLiAqL1xuICAgICAgICAgIGFjdGlvbk1lc3NhZ2U/OiBzdHJpbmc7XG5cbiAgICAgICAgICAvKiogVHJpZ2dlcnMgdGhlIG9wdC1pbi4gVXAgdG8gMTUgY2hhcmFjdGVycy4gKi9cbiAgICAgICAgICBhY2NlcHRCdXR0b24/OiBzdHJpbmc7XG5cbiAgICAgICAgICAvKiogQ2FuY2VscyBvcHQtaW4uIFVwIHRvIDE1IGNoYXJhY3RlcnMuICovXG4gICAgICAgICAgY2FuY2VsTWVzc2FnZT86IHN0cmluZztcblxuICAgICAgICAgIC8qKiBUaGUgbWVzc2FnZSBvZiB0aGUgY29uZmlybWF0aW9uIHByb21wdCBkaXNwbGF5ZWQgYWZ0ZXIgdGhlIGVtYWlsIGFuZC9vciBwaG9uZSBudW1iZXIgaXMgcHJvdmlkZWQuIFVwIHRvIDkwIGNoYXJhY3RlcnMuICovXG4gICAgICAgICAgY29uZmlybU1lc3NhZ2U/OiBzdHJpbmc7XG5cbiAgICAgICAgICAvKiogSWRlbnRpZmllcyB0aGUgZW1haWwgdGV4dCBmaWVsZC4gVXAgdG8gMTUgY2hhcmFjdGVycy4gKi9cbiAgICAgICAgICBlbWFpbExhYmVsPzogc3RyaW5nO1xuXG4gICAgICAgICAgLyoqIENhbmNlbHMgdGhlIGNhdGVnb3J5IHVwZGF0ZS4gVXAgdG8gMTUgY2hhcmFjdGVycy4gKi9cbiAgICAgICAgICBuZWdhdGl2ZVVwZGF0ZUJ1dHRvbj86IHN0cmluZztcblxuICAgICAgICAgIC8qKiBTYXZlcyB0aGUgdXBkYXRlZCBjYXRlZ29yeSB0YWdzLiBVcCB0byAxNSBjaGFyYWN0ZXJzLiAqL1xuICAgICAgICAgIHBvc2l0aXZlVXBkYXRlQnV0dG9uPzogc3RyaW5nO1xuXG4gICAgICAgICAgLyoqIElkZW50aWZpZXMgdGhlIHBob25lIG51bWJlciB0ZXh0IGZpZWxkLiBVcCB0byAxNSBjaGFyYWN0ZXJzLiAqL1xuICAgICAgICAgIHNtc0xhYmVsPzogc3RyaW5nO1xuXG4gICAgICAgICAgLyoqIEEgZGlmZmVyZW50IG1lc3NhZ2Ugc2hvd24gdG8gc3Vic2NyaWJlcnMgcHJlc2VudGVkIHRoZSBwcm9tcHQgYWdhaW4gdG8gdXBkYXRlIGNhdGVnb3JpZXMuIFVwIHRvIDkwIGNoYXJhY3RlcnMuICovXG4gICAgICAgICAgdXBkYXRlTWVzc2FnZT86IHN0cmluZztcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHR5cGUgb2YgcHJvbXB0IHRvIGRpc3BsYXkuXG4gICAgICAgICAqIGBwdXNoYCB3aGljaCBpcyB0aGUgU2xpZGUgUHJvbXB0IHdpdGhvdXQgY2F0ZWdvcmllcy5cbiAgICAgICAgICogYGNhdGVnb3J5YCB3aGljaCBpcyB0aGUgU2xpZGUgUHJvbXB0IHdpdGggY2F0ZWdvcmllcy5cbiAgICAgICAgICogYHNtc2Agb25seSBhc2tzIGZvciBwaG9uZSBudW1iZXIuXG4gICAgICAgICAqIGBlbWFpbGAgb25seSBhc2tzIGZvciBlbWFpbCBhZGRyZXNzLlxuICAgICAgICAgKiBgc21zQW5kRW1haWxgIGFza3MgZm9yIGJvdGggcGhvbmUgbnVtYmVyIGFuZCBlbWFpbCBhZGRyZXNzLlxuICAgICAgICAgKi9cbiAgICAgICAgdHlwZTogJ3B1c2gnIHwgJ2NhdGVnb3J5JyB8ICdzbXMnIHwgJ2VtYWlsJyB8ICdzbXNBbmRFbWFpbCc7XG4gICAgICB9W107XG4gICAgfTtcbiAgfTtcbiAgd2VsY29tZU5vdGlmaWNhdGlvbj86IHtcbiAgICAvKipcbiAgICAgKiBEaXNhYmxlcyBzZW5kaW5nIGEgd2VsY29tZSBub3RpZmljYXRpb24gdG8gbmV3IHNpdGUgdmlzaXRvcnMuIElmIHlvdSB3YW50IHRvIGRpc2FibGUgd2VsY29tZSBub3RpZmljYXRpb25zLCB0aGlzIGlzIHRoZSBvbmx5IG9wdGlvbiB5b3UgbmVlZC5cbiAgICAgKi9cbiAgICBkaXNhYmxlZD86IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBUaGUgd2VsY29tZSBub3RpZmljYXRpb24ncyBtZXNzYWdlLiBZb3UgY2FuIGxvY2FsaXplIHRoaXMgdG8geW91ciBvd24gbGFuZ3VhZ2UuXG4gICAgICogSWYgbGVmdCBibGFuayBvciBzZXQgdG8gYmxhbmssIHRoZSBkZWZhdWx0IG9mICdUaGFua3MgZm9yIHN1YnNjcmliaW5nIScgd2lsbCBiZSB1c2VkLlxuICAgICAqL1xuICAgIG1lc3NhZ2U6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIFRoZSB3ZWxjb21lIG5vdGlmaWNhdGlvbidzIHRpdGxlLiBZb3UgY2FuIGxvY2FsaXplIHRoaXMgdG8geW91ciBvd24gbGFuZ3VhZ2UuIElmIG5vdCBzZXQsIG9yIGxlZnQgYmxhbmssIHRoZSBzaXRlJ3MgdGl0bGUgd2lsbCBiZSB1c2VkLlxuICAgICAqIFNldCB0byBvbmUgc3BhY2UgJyAnIHRvIGNsZWFyIHRoZSB0aXRsZSwgYWx0aG91Z2ggdGhpcyBpcyBub3QgcmVjb21tZW5kZWQuXG4gICAgICovXG4gICAgdGl0bGU/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBCeSBkZWZhdWx0LCBjbGlja2luZyB0aGUgd2VsY29tZSBub3RpZmljYXRpb24gZG9lcyBub3Qgb3BlbiBhbnkgbGluay5cbiAgICAgKiBUaGlzIGlzIHJlY29tbWVuZGVkIGJlY2F1c2UgdGhlIHVzZXIgaGFzIGp1c3QgdmlzaXRlZCB5b3VyIHNpdGUgYW5kIHN1YnNjcmliZWQuXG4gICAgICovXG4gICAgdXJsOiBzdHJpbmc7XG4gIH07XG5cbiAgLyoqXG4gICAqIFdpbGwgZW5hYmxlIGN1c3RvbWl6YXRpb24gb2YgdGhlIG5vdGlmeS9zdWJzY3JpcHRpb24gYmVsbCBidXR0b24uXG4gICAqL1xuICBub3RpZnlCdXR0b24/OiB7XG4gICAgLyoqXG4gICAgICogQSBmdW5jdGlvbiB5b3UgZGVmaW5lIHRoYXQgcmV0dXJucyB0cnVlIHRvIHNob3cgdGhlIFN1YnNjcmlwdGlvbiBCZWxsLCBvciBmYWxzZSB0byBoaWRlIGl0LlxuICAgICAqIFR5cGljYWxseSB1c2VkIHRoZSBoaWRlIHRoZSBTdWJzY3JpcHRpb24gQmVsbCBhZnRlciB0aGUgdXNlciBpcyBzdWJzY3JpYmVkLlxuICAgICAqIFRoaXMgZnVuY3Rpb24gaXMgbm90IHJlLWV2YWx1YXRlZCBvbiBldmVyeSBzdGF0ZSBjaGFuZ2U7IHRoaXMgZnVuY3Rpb24gaXMgb25seSBldmFsdWF0ZWQgb25jZSB3aGVuIHRoZSBTdWJzY3JpcHRpb24gQmVsbCBiZWdpbnMgdG8gc2hvdy5cbiAgICAgKi9cbiAgICBkaXNwbGF5UHJlZGljYXRlPzogKCkgPT4gYm9vbGVhbiB8IFByb21pc2U8Ym9vbGVhbj47XG5cbiAgICAvKipcbiAgICAgKiBFbmFibGUgdGhlIFN1YnNjcmlwdGlvbiBCZWxsLiBUaGUgU3Vic2NyaXB0aW9uIEJlbGwgaXMgb3RoZXJ3aXNlIGRpc2FibGVkIGJ5IGRlZmF1bHQuXG4gICAgICovXG4gICAgZW5hYmxlPzogYm9vbGVhbjtcblxuICAgIC8qKiBTcGVjaWZ5IENTUy12YWxpZCBwaXhlbCBvZmZzZXRzIHVzaW5nIGJvdHRvbSwgbGVmdCwgYW5kIHJpZ2h0LiAqL1xuICAgIG9mZnNldD86IHsgYm90dG9tOiBzdHJpbmc7IGxlZnQ6IHN0cmluZzsgcmlnaHQ6IHN0cmluZyB9O1xuXG4gICAgLyoqXG4gICAgICogSWYgYHRydWVgLCB0aGUgU3Vic2NyaXB0aW9uIEJlbGwgd2lsbCBkaXNwbGF5IGFuIGljb24gdGhhdCB0aGVyZSBpcyAxIHVucmVhZCBtZXNzYWdlLlxuICAgICAqIFdoZW4gaG92ZXJpbmcgb3ZlciB0aGUgU3Vic2NyaXB0aW9uIEJlbGwsIHRoZSB1c2VyIHdpbGwgc2VlIGN1c3RvbSB0ZXh0IHNldCBieSBtZXNzYWdlLnByZW5vdGlmeS5cbiAgICAgKi9cbiAgICBwcmVub3RpZnk6IGJvb2xlYW47XG5cbiAgICAvKiogRWl0aGVyIGBib3R0b20tbGVmdGAgb3IgYGJvdHRvbS1yaWdodGAuIFRoZSBTdWJzY3JpcHRpb24gQmVsbCB3aWxsIGJlIGZpeGVkIGF0IHRoaXMgbG9jYXRpb24gb24geW91ciBwYWdlLiAqL1xuICAgIHBvc2l0aW9uPzogJ2JvdHRvbS1sZWZ0JyB8ICdib3R0b20tcmlnaHQnO1xuXG4gICAgLyoqICBTZXQgYGZhbHNlYCB0byBoaWRlIHRoZSAnUG93ZXJlZCBieSBPbmVTaWduYWwnIHRleHQgaW4gdGhlIFN1YnNjcmlwdGlvbiBCZWxsIGRpYWxvZyBwb3B1cC4gKi9cbiAgICBzaG93Q3JlZGl0OiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogVGhlIFN1YnNjcmlwdGlvbiBCZWxsIHdpbGwgaW5pdGlhbGx5IGFwcGVhciBhdCBvbmUgb2YgdGhlc2Ugc2l6ZXMsIGFuZCB0aGVuIHNocmluayBkb3duIHRvIHNpemUgYHNtYWxsYCBhZnRlciB0aGUgdXNlciBzdWJzY3JpYmVzLlxuICAgICAqL1xuICAgIHNpemU/OiAnc21hbGwnIHwgJ21lZGl1bScgfCAnbGFyZ2UnO1xuXG4gICAgLyoqIEN1c3RvbWl6ZSB0aGUgU3Vic2NyaXB0aW9uIEJlbGwgdGV4dC4gKi9cbiAgICB0ZXh0OiB7XG4gICAgICAnZGlhbG9nLmJsb2NrZWQubWVzc2FnZSc6IHN0cmluZztcbiAgICAgICdkaWFsb2cuYmxvY2tlZC50aXRsZSc6IHN0cmluZztcbiAgICAgICdkaWFsb2cubWFpbi5idXR0b24uc3Vic2NyaWJlJzogc3RyaW5nO1xuICAgICAgJ2RpYWxvZy5tYWluLmJ1dHRvbi51bnN1YnNjcmliZSc6IHN0cmluZztcbiAgICAgICdkaWFsb2cubWFpbi50aXRsZSc6IHN0cmluZztcbiAgICAgICdtZXNzYWdlLmFjdGlvbi5yZXN1YnNjcmliZWQnOiBzdHJpbmc7XG4gICAgICAnbWVzc2FnZS5hY3Rpb24uc3Vic2NyaWJlZCc6IHN0cmluZztcbiAgICAgICdtZXNzYWdlLmFjdGlvbi5zdWJzY3JpYmluZyc6IHN0cmluZztcbiAgICAgICdtZXNzYWdlLmFjdGlvbi51bnN1YnNjcmliZWQnOiBzdHJpbmc7XG4gICAgICAnbWVzc2FnZS5wcmVub3RpZnknOiBzdHJpbmc7XG4gICAgICAndGlwLnN0YXRlLmJsb2NrZWQnOiBzdHJpbmc7XG4gICAgICAndGlwLnN0YXRlLnN1YnNjcmliZWQnOiBzdHJpbmc7XG4gICAgICAndGlwLnN0YXRlLnVuc3Vic2NyaWJlZCc6IHN0cmluZztcbiAgICB9O1xuICB9O1xuXG4gIHBlcnNpc3ROb3RpZmljYXRpb24/OiBib29sZWFuO1xuICB3ZWJob29rcz86IHtcbiAgICAvKipcbiAgICAgKiBFbmFibGUgdGhpcyBzZXR0aW5nIG9ubHkgaWYgeW91ciBzZXJ2ZXIgaGFzIENPUlMgZW5hYmxlZCBhbmQgc3VwcG9ydHMgbm9uLXNpbXBsZSBDT1JTIHJlcXVlc3RzLlxuICAgICAqIElmIHRoaXMgc2V0dGluZyBpcyBkaXNhYmxlZCwgeW91ciB3ZWJob29rIHdpbGwgbm90IG5lZWQgQ09SUyB0byByZWNlaXZlIGRhdGEsIGJ1dCBpdCB3aWxsIG5vdCByZWNlaXZlIHRoZSBjdXN0b20gaGVhZGVycy5cbiAgICAgKiBUaGUgc2ltcGxlc3Qgb3B0aW9uIGlzIHRvIGxlYXZlIGl0IGRpc2FibGVkLlxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG4gICAgY29yczogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIFRoaXMgZXZlbnQgb2NjdXJzIGFmdGVyIGEgbm90aWZpY2F0aW9uIGlzIGNsaWNrZWQuXG4gICAgICogQGV4YW1wbGUgaHR0cHM6Ly9zaXRlLmNvbS9ob29rXG4gICAgICovXG4gICAgJ25vdGlmaWNhdGlvbi5jbGlja2VkJz86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIFRoaXMgZXZlbnQgb2NjdXJzIGFmdGVyIGEgbm90aWZpY2F0aW9uIGlzIGludGVudGlvbmFsbHkgZGlzbWlzc2VkIGJ5IHRoZSB1c2VyIChjbGlja2luZyB0aGUgbm90aWZpY2F0aW9uIGJvZHkgb3Igb25lIG9mIHRoZSBub3RpZmljYXRpb24gYWN0aW9uIGJ1dHRvbnMgZG9lcyBub3QgdHJpZ2dlciB0aGUgZGlzbWlzc2VkIHdlYmhvb2spLFxuICAgICAqIGFmdGVyIGEgZ3JvdXAgb2Ygbm90aWZpY2F0aW9ucyBhcmUgYWxsIGRpc21pc3NlZCAod2l0aCB0aGlzIG5vdGlmaWNhdGlvbiBhcyBwYXJ0IG9mIHRoYXQgZ3JvdXApLCBvciBhZnRlciBhIG5vdGlmaWNhdGlvbiBleHBpcmVzIG9uIGl0cyBvd24gdGltZSBhbmQgZGlzYXBwZWFycy4gVGhpcyBldmVudCBpcyBzdXBwb3J0ZWQgb24gQ2hyb21lIG9ubHkuXG4gICAgICogQGV4YW1wbGUgaHR0cHM6Ly9zaXRlLmNvbS9ob29rXG4gICAgICovXG4gICAgJ25vdGlmaWNhdGlvbi5kaXNtaXNzZWQnPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogVGhpcyBldmVudCBvY2N1cnMgYWZ0ZXIgYSBub3RpZmljYXRpb24gaXMgZGlzcGxheWVkLlxuICAgICAqIEBleGFtcGxlIGh0dHBzOi8vc2l0ZS5jb20vaG9va1xuICAgICAqL1xuICAgICdub3RpZmljYXRpb24ud2lsbERpc3BsYXknPzogc3RyaW5nO1xuICB9O1xuICBhdXRvUmVzdWJzY3JpYmU/OiBib29sZWFuO1xuICBhdXRvUmVnaXN0ZXI/OiBib29sZWFuO1xuICBub3RpZmljYXRpb25DbGlja0hhbmRsZXJNYXRjaD86IHN0cmluZztcbiAgbm90aWZpY2F0aW9uQ2xpY2tIYW5kbGVyQWN0aW9uPzogc3RyaW5nO1xuICBwYXRoPzogc3RyaW5nO1xuICBzZXJ2aWNlV29ya2VyUGFyYW0/OiB7IHNjb3BlOiBzdHJpbmcgfTtcbiAgc2VydmljZVdvcmtlclBhdGg/OiBzdHJpbmc7XG4gIHNlcnZpY2VXb3JrZXJPdmVycmlkZUZvclR5cGljYWw/OiBib29sZWFuO1xuICBzZXJ2aWNlV29ya2VyVXBkYXRlclBhdGg/OiBzdHJpbmc7XG4gIGFsbG93TG9jYWxob3N0QXNTZWN1cmVPcmlnaW4/OiBib29sZWFuO1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU9uZVNpZ25hbE9uZVNpZ25hbCB7XG5cdFNsaWRlZG93bjogSU9uZVNpZ25hbFNsaWRlZG93bjtcblx0Tm90aWZpY2F0aW9uczogSU9uZVNpZ25hbE5vdGlmaWNhdGlvbnM7XG5cdFNlc3Npb246IElPbmVTaWduYWxTZXNzaW9uO1xuXHRVc2VyOiBJT25lU2lnbmFsVXNlcjtcblx0RGVidWc6IElPbmVTaWduYWxEZWJ1Zztcblx0bG9naW4oZXh0ZXJuYWxJZDogc3RyaW5nLCBqd3RUb2tlbj86IHN0cmluZyk6IFByb21pc2U8dm9pZD47XG5cdGxvZ291dCgpOiBQcm9taXNlPHZvaWQ+O1xuXHRpbml0KG9wdGlvbnM6IElJbml0T2JqZWN0KTogUHJvbWlzZTx2b2lkPjtcblx0c2V0Q29uc2VudEdpdmVuKGNvbnNlbnQ6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+O1xuXHRzZXRDb25zZW50UmVxdWlyZWQocmVxdWlyZXNDb25zZW50OiBib29sZWFuKTogUHJvbWlzZTx2b2lkPjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSU9uZVNpZ25hbE5vdGlmaWNhdGlvbnMge1xuXHRwZXJtaXNzaW9uTmF0aXZlOiBOb3RpZmljYXRpb25QZXJtaXNzaW9uO1xuXHRwZXJtaXNzaW9uOiBib29sZWFuO1xuXHRzZXREZWZhdWx0VXJsKHVybDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPjtcblx0c2V0RGVmYXVsdFRpdGxlKHRpdGxlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+O1xuXHRpc1B1c2hTdXBwb3J0ZWQoKTogYm9vbGVhbjtcblx0cmVxdWVzdFBlcm1pc3Npb24oKTogUHJvbWlzZTx2b2lkPjtcblx0YWRkRXZlbnRMaXN0ZW5lcjxLIGV4dGVuZHMgTm90aWZpY2F0aW9uRXZlbnROYW1lPihldmVudDogSywgbGlzdGVuZXI6IChvYmo6IE5vdGlmaWNhdGlvbkV2ZW50VHlwZU1hcFtLXSkgPT4gdm9pZCk6IHZvaWQ7XG5cdHJlbW92ZUV2ZW50TGlzdGVuZXI8SyBleHRlbmRzIE5vdGlmaWNhdGlvbkV2ZW50TmFtZT4oZXZlbnQ6IEssIGxpc3RlbmVyOiAob2JqOiBOb3RpZmljYXRpb25FdmVudFR5cGVNYXBbS10pID0+IHZvaWQpOiB2b2lkO1xufVxuZXhwb3J0IGludGVyZmFjZSBJT25lU2lnbmFsU2xpZGVkb3duIHtcblx0cHJvbXB0UHVzaChvcHRpb25zPzogQXV0b1Byb21wdE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+O1xuXHRwcm9tcHRQdXNoQ2F0ZWdvcmllcyhvcHRpb25zPzogQXV0b1Byb21wdE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+O1xuXHRwcm9tcHRTbXMob3B0aW9ucz86IEF1dG9Qcm9tcHRPcHRpb25zKTogUHJvbWlzZTx2b2lkPjtcblx0cHJvbXB0RW1haWwob3B0aW9ucz86IEF1dG9Qcm9tcHRPcHRpb25zKTogUHJvbWlzZTx2b2lkPjtcblx0cHJvbXB0U21zQW5kRW1haWwob3B0aW9ucz86IEF1dG9Qcm9tcHRPcHRpb25zKTogUHJvbWlzZTx2b2lkPjtcblx0YWRkRXZlbnRMaXN0ZW5lcihldmVudDogU2xpZGVkb3duRXZlbnROYW1lLCBsaXN0ZW5lcjogKHdhc1Nob3duOiBib29sZWFuKSA9PiB2b2lkKTogdm9pZDtcblx0cmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudDogU2xpZGVkb3duRXZlbnROYW1lLCBsaXN0ZW5lcjogKHdhc1Nob3duOiBib29sZWFuKSA9PiB2b2lkKTogdm9pZDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSU9uZVNpZ25hbERlYnVnIHtcblx0c2V0TG9nTGV2ZWwobG9nTGV2ZWw6IHN0cmluZyk6IHZvaWQ7XG59XG5leHBvcnQgaW50ZXJmYWNlIElPbmVTaWduYWxTZXNzaW9uIHtcblx0c2VuZE91dGNvbWUob3V0Y29tZU5hbWU6IHN0cmluZywgb3V0Y29tZVdlaWdodD86IG51bWJlcik6IFByb21pc2U8dm9pZD47XG5cdHNlbmRVbmlxdWVPdXRjb21lKG91dGNvbWVOYW1lOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+O1xufVxuZXhwb3J0IGludGVyZmFjZSBJT25lU2lnbmFsVXNlciB7XG5cdG9uZXNpZ25hbElkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdGV4dGVybmFsSWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0UHVzaFN1YnNjcmlwdGlvbjogSU9uZVNpZ25hbFB1c2hTdWJzY3JpcHRpb247XG5cdGFkZEFsaWFzKGxhYmVsOiBzdHJpbmcsIGlkOiBzdHJpbmcpOiB2b2lkO1xuXHRhZGRBbGlhc2VzKGFsaWFzZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pOiB2b2lkO1xuXHRyZW1vdmVBbGlhcyhsYWJlbDogc3RyaW5nKTogdm9pZDtcblx0cmVtb3ZlQWxpYXNlcyhsYWJlbHM6IHN0cmluZ1tdKTogdm9pZDtcblx0YWRkRW1haWwoZW1haWw6IHN0cmluZyk6IHZvaWQ7XG5cdHJlbW92ZUVtYWlsKGVtYWlsOiBzdHJpbmcpOiB2b2lkO1xuXHRhZGRTbXMoc21zTnVtYmVyOiBzdHJpbmcpOiB2b2lkO1xuXHRyZW1vdmVTbXMoc21zTnVtYmVyOiBzdHJpbmcpOiB2b2lkO1xuXHRhZGRUYWcoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkO1xuXHRhZGRUYWdzKHRhZ3M6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pOiB2b2lkO1xuXHRyZW1vdmVUYWcoa2V5OiBzdHJpbmcpOiB2b2lkO1xuXHRyZW1vdmVUYWdzKGtleXM6IHN0cmluZ1tdKTogdm9pZDtcblx0Z2V0VGFncygpOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuXHRhZGRFdmVudExpc3RlbmVyKGV2ZW50OiAnY2hhbmdlJywgbGlzdGVuZXI6IChjaGFuZ2U6IFVzZXJDaGFuZ2VFdmVudCkgPT4gdm9pZCk6IHZvaWQ7XG5cdHJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQ6ICdjaGFuZ2UnLCBsaXN0ZW5lcjogKGNoYW5nZTogVXNlckNoYW5nZUV2ZW50KSA9PiB2b2lkKTogdm9pZDtcblx0c2V0TGFuZ3VhZ2UobGFuZ3VhZ2U6IHN0cmluZyk6IHZvaWQ7XG5cdGdldExhbmd1YWdlKCk6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSU9uZVNpZ25hbFB1c2hTdWJzY3JpcHRpb24ge1xuXHRpZDogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZDtcblx0dG9rZW46IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQ7XG5cdG9wdGVkSW46IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cdG9wdEluKCk6IFByb21pc2U8dm9pZD47XG5cdG9wdE91dCgpOiBQcm9taXNlPHZvaWQ+O1xuXHRhZGRFdmVudExpc3RlbmVyKGV2ZW50OiAnY2hhbmdlJywgbGlzdGVuZXI6IChjaGFuZ2U6IFN1YnNjcmlwdGlvbkNoYW5nZUV2ZW50KSA9PiB2b2lkKTogdm9pZDtcblx0cmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudDogJ2NoYW5nZScsIGxpc3RlbmVyOiAoY2hhbmdlOiBTdWJzY3JpcHRpb25DaGFuZ2VFdmVudCkgPT4gdm9pZCk6IHZvaWQ7XG59XG5mdW5jdGlvbiBvbmVTaWduYWxMb2dpbihleHRlcm5hbElkOiBzdHJpbmcsIGp3dFRva2VuPzogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaWYgKGlzT25lU2lnbmFsU2NyaXB0RmFpbGVkKSB7XG4gICAgICByZWplY3QobmV3IEVycm9yKCdPbmVTaWduYWwgc2NyaXB0IGZhaWxlZCB0byBsb2FkLicpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgICAgb25lU2lnbmFsLmxvZ2luKGV4dGVybmFsSWQsIGp3dFRva2VuKS50aGVuKCgpID0+IHJlc29sdmUoKSk7XG4gICAgfSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gb25lU2lnbmFsTG9nb3V0KCk6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignT25lU2lnbmFsIHNjcmlwdCBmYWlsZWQgdG8gbG9hZC4nKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5sb2dvdXQoKS50aGVuKCgpID0+IHJlc29sdmUoKSk7XG4gICAgfSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gb25lU2lnbmFsU2V0Q29uc2VudEdpdmVuKGNvbnNlbnQ6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ09uZVNpZ25hbCBzY3JpcHQgZmFpbGVkIHRvIGxvYWQuJykpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgICBvbmVTaWduYWwuc2V0Q29uc2VudEdpdmVuKGNvbnNlbnQpLnRoZW4oKCkgPT4gcmVzb2x2ZSgpKTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBvbmVTaWduYWxTZXRDb25zZW50UmVxdWlyZWQocmVxdWlyZXNDb25zZW50OiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaWYgKGlzT25lU2lnbmFsU2NyaXB0RmFpbGVkKSB7XG4gICAgICByZWplY3QobmV3IEVycm9yKCdPbmVTaWduYWwgc2NyaXB0IGZhaWxlZCB0byBsb2FkLicpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgICAgb25lU2lnbmFsLnNldENvbnNlbnRSZXF1aXJlZChyZXF1aXJlc0NvbnNlbnQpLnRoZW4oKCkgPT4gcmVzb2x2ZSgpKTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBzbGlkZWRvd25Qcm9tcHRQdXNoKG9wdGlvbnM/OiBBdXRvUHJvbXB0T3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignT25lU2lnbmFsIHNjcmlwdCBmYWlsZWQgdG8gbG9hZC4nKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5TbGlkZWRvd24ucHJvbXB0UHVzaChvcHRpb25zKS50aGVuKCgpID0+IHJlc29sdmUoKSk7XG4gICAgfSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gc2xpZGVkb3duUHJvbXB0UHVzaENhdGVnb3JpZXMob3B0aW9ucz86IEF1dG9Qcm9tcHRPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaWYgKGlzT25lU2lnbmFsU2NyaXB0RmFpbGVkKSB7XG4gICAgICByZWplY3QobmV3IEVycm9yKCdPbmVTaWduYWwgc2NyaXB0IGZhaWxlZCB0byBsb2FkLicpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgICAgb25lU2lnbmFsLlNsaWRlZG93bi5wcm9tcHRQdXNoQ2F0ZWdvcmllcyhvcHRpb25zKS50aGVuKCgpID0+IHJlc29sdmUoKSk7XG4gICAgfSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gc2xpZGVkb3duUHJvbXB0U21zKG9wdGlvbnM/OiBBdXRvUHJvbXB0T3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignT25lU2lnbmFsIHNjcmlwdCBmYWlsZWQgdG8gbG9hZC4nKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5TbGlkZWRvd24ucHJvbXB0U21zKG9wdGlvbnMpLnRoZW4oKCkgPT4gcmVzb2x2ZSgpKTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBzbGlkZWRvd25Qcm9tcHRFbWFpbChvcHRpb25zPzogQXV0b1Byb21wdE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ09uZVNpZ25hbCBzY3JpcHQgZmFpbGVkIHRvIGxvYWQuJykpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgICBvbmVTaWduYWwuU2xpZGVkb3duLnByb21wdEVtYWlsKG9wdGlvbnMpLnRoZW4oKCkgPT4gcmVzb2x2ZSgpKTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBzbGlkZWRvd25Qcm9tcHRTbXNBbmRFbWFpbChvcHRpb25zPzogQXV0b1Byb21wdE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ09uZVNpZ25hbCBzY3JpcHQgZmFpbGVkIHRvIGxvYWQuJykpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgICBvbmVTaWduYWwuU2xpZGVkb3duLnByb21wdFNtc0FuZEVtYWlsKG9wdGlvbnMpLnRoZW4oKCkgPT4gcmVzb2x2ZSgpKTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBzbGlkZWRvd25BZGRFdmVudExpc3RlbmVyKGV2ZW50OiBTbGlkZWRvd25FdmVudE5hbWUsIGxpc3RlbmVyOiAod2FzU2hvd246IGJvb2xlYW4pID0+IHZvaWQpOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuU2xpZGVkb3duLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNsaWRlZG93blJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQ6IFNsaWRlZG93bkV2ZW50TmFtZSwgbGlzdGVuZXI6ICh3YXNTaG93bjogYm9vbGVhbikgPT4gdm9pZCk6IHZvaWQge1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIG9uZVNpZ25hbC5TbGlkZWRvd24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbm90aWZpY2F0aW9uc1NldERlZmF1bHRVcmwodXJsOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ09uZVNpZ25hbCBzY3JpcHQgZmFpbGVkIHRvIGxvYWQuJykpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgICBvbmVTaWduYWwuTm90aWZpY2F0aW9ucy5zZXREZWZhdWx0VXJsKHVybCkudGhlbigoKSA9PiByZXNvbHZlKCkpO1xuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIG5vdGlmaWNhdGlvbnNTZXREZWZhdWx0VGl0bGUodGl0bGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignT25lU2lnbmFsIHNjcmlwdCBmYWlsZWQgdG8gbG9hZC4nKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5Ob3RpZmljYXRpb25zLnNldERlZmF1bHRUaXRsZSh0aXRsZSkudGhlbigoKSA9PiByZXNvbHZlKCkpO1xuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIG5vdGlmaWNhdGlvbnNSZXF1ZXN0UGVybWlzc2lvbigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ09uZVNpZ25hbCBzY3JpcHQgZmFpbGVkIHRvIGxvYWQuJykpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgICBvbmVTaWduYWwuTm90aWZpY2F0aW9ucy5yZXF1ZXN0UGVybWlzc2lvbigpLnRoZW4oKCkgPT4gcmVzb2x2ZSgpKTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBub3RpZmljYXRpb25zQWRkRXZlbnRMaXN0ZW5lcjxLIGV4dGVuZHMgTm90aWZpY2F0aW9uRXZlbnROYW1lPihldmVudDogSywgbGlzdGVuZXI6IChvYmo6IE5vdGlmaWNhdGlvbkV2ZW50VHlwZU1hcFtLXSkgPT4gdm9pZCk6IHZvaWQge1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIG9uZVNpZ25hbC5Ob3RpZmljYXRpb25zLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG5vdGlmaWNhdGlvbnNSZW1vdmVFdmVudExpc3RlbmVyPEsgZXh0ZW5kcyBOb3RpZmljYXRpb25FdmVudE5hbWU+KGV2ZW50OiBLLCBsaXN0ZW5lcjogKG9iajogTm90aWZpY2F0aW9uRXZlbnRUeXBlTWFwW0tdKSA9PiB2b2lkKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLk5vdGlmaWNhdGlvbnMucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc2Vzc2lvblNlbmRPdXRjb21lKG91dGNvbWVOYW1lOiBzdHJpbmcsIG91dGNvbWVXZWlnaHQ/OiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ09uZVNpZ25hbCBzY3JpcHQgZmFpbGVkIHRvIGxvYWQuJykpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgICBvbmVTaWduYWwuU2Vzc2lvbi5zZW5kT3V0Y29tZShvdXRjb21lTmFtZSwgb3V0Y29tZVdlaWdodCkudGhlbigoKSA9PiByZXNvbHZlKCkpO1xuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHNlc3Npb25TZW5kVW5pcXVlT3V0Y29tZShvdXRjb21lTmFtZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaWYgKGlzT25lU2lnbmFsU2NyaXB0RmFpbGVkKSB7XG4gICAgICByZWplY3QobmV3IEVycm9yKCdPbmVTaWduYWwgc2NyaXB0IGZhaWxlZCB0byBsb2FkLicpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgICAgb25lU2lnbmFsLlNlc3Npb24uc2VuZFVuaXF1ZU91dGNvbWUob3V0Y29tZU5hbWUpLnRoZW4oKCkgPT4gcmVzb2x2ZSgpKTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiB1c2VyQWRkQWxpYXMobGFiZWw6IHN0cmluZywgaWQ6IHN0cmluZyk6IHZvaWQge1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIG9uZVNpZ25hbC5Vc2VyLmFkZEFsaWFzKGxhYmVsLCBpZCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1c2VyQWRkQWxpYXNlcyhhbGlhc2VzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIuYWRkQWxpYXNlcyhhbGlhc2VzKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVzZXJSZW1vdmVBbGlhcyhsYWJlbDogc3RyaW5nKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIucmVtb3ZlQWxpYXMobGFiZWwpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXNlclJlbW92ZUFsaWFzZXMobGFiZWxzOiBzdHJpbmdbXSk6IHZvaWQge1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIG9uZVNpZ25hbC5Vc2VyLnJlbW92ZUFsaWFzZXMobGFiZWxzKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVzZXJBZGRFbWFpbChlbWFpbDogc3RyaW5nKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIuYWRkRW1haWwoZW1haWwpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXNlclJlbW92ZUVtYWlsKGVtYWlsOiBzdHJpbmcpOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuVXNlci5yZW1vdmVFbWFpbChlbWFpbCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1c2VyQWRkU21zKHNtc051bWJlcjogc3RyaW5nKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIuYWRkU21zKHNtc051bWJlcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1c2VyUmVtb3ZlU21zKHNtc051bWJlcjogc3RyaW5nKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIucmVtb3ZlU21zKHNtc051bWJlcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1c2VyQWRkVGFnKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIuYWRkVGFnKGtleSwgdmFsdWUpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXNlckFkZFRhZ3ModGFnczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSk6IHZvaWQge1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIG9uZVNpZ25hbC5Vc2VyLmFkZFRhZ3ModGFncyk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1c2VyUmVtb3ZlVGFnKGtleTogc3RyaW5nKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIucmVtb3ZlVGFnKGtleSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1c2VyUmVtb3ZlVGFncyhrZXlzOiBzdHJpbmdbXSk6IHZvaWQge1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIG9uZVNpZ25hbC5Vc2VyLnJlbW92ZVRhZ3Moa2V5cyk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1c2VyR2V0VGFncygpOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHtcbiAgbGV0IHJldFZhbDogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICByZXRWYWwgPSBvbmVTaWduYWwuVXNlci5nZXRUYWdzKCk7XG4gIH0pO1xuICAvLyBAdHMtaWdub3JlXG4gIHJldHVybiByZXRWYWw7XG59XG5cbmZ1bmN0aW9uIHVzZXJBZGRFdmVudExpc3RlbmVyKGV2ZW50OiAnY2hhbmdlJywgbGlzdGVuZXI6IChjaGFuZ2U6IFVzZXJDaGFuZ2VFdmVudCkgPT4gdm9pZCk6IHZvaWQge1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIG9uZVNpZ25hbC5Vc2VyLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVzZXJSZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50OiAnY2hhbmdlJywgbGlzdGVuZXI6IChjaGFuZ2U6IFVzZXJDaGFuZ2VFdmVudCkgPT4gdm9pZCk6IHZvaWQge1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIG9uZVNpZ25hbC5Vc2VyLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVzZXJTZXRMYW5ndWFnZShsYW5ndWFnZTogc3RyaW5nKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIuc2V0TGFuZ3VhZ2UobGFuZ3VhZ2UpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXNlckdldExhbmd1YWdlKCk6IHN0cmluZyB7XG4gIGxldCByZXRWYWw6IHN0cmluZztcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICByZXRWYWwgPSBvbmVTaWduYWwuVXNlci5nZXRMYW5ndWFnZSgpO1xuICB9KTtcbiAgLy8gQHRzLWlnbm9yZVxuICByZXR1cm4gcmV0VmFsO1xufVxuXG5mdW5jdGlvbiBwdXNoU3Vic2NyaXB0aW9uT3B0SW4oKTogUHJvbWlzZTx2b2lkPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaWYgKGlzT25lU2lnbmFsU2NyaXB0RmFpbGVkKSB7XG4gICAgICByZWplY3QobmV3IEVycm9yKCdPbmVTaWduYWwgc2NyaXB0IGZhaWxlZCB0byBsb2FkLicpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgICAgb25lU2lnbmFsLlVzZXIuUHVzaFN1YnNjcmlwdGlvbi5vcHRJbigpLnRoZW4oKCkgPT4gcmVzb2x2ZSgpKTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBwdXNoU3Vic2NyaXB0aW9uT3B0T3V0KCk6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignT25lU2lnbmFsIHNjcmlwdCBmYWlsZWQgdG8gbG9hZC4nKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5Vc2VyLlB1c2hTdWJzY3JpcHRpb24ub3B0T3V0KCkudGhlbigoKSA9PiByZXNvbHZlKCkpO1xuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHB1c2hTdWJzY3JpcHRpb25BZGRFdmVudExpc3RlbmVyKGV2ZW50OiAnY2hhbmdlJywgbGlzdGVuZXI6IChjaGFuZ2U6IFN1YnNjcmlwdGlvbkNoYW5nZUV2ZW50KSA9PiB2b2lkKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIuUHVzaFN1YnNjcmlwdGlvbi5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBwdXNoU3Vic2NyaXB0aW9uUmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudDogJ2NoYW5nZScsIGxpc3RlbmVyOiAoY2hhbmdlOiBTdWJzY3JpcHRpb25DaGFuZ2VFdmVudCkgPT4gdm9pZCk6IHZvaWQge1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIG9uZVNpZ25hbC5Vc2VyLlB1c2hTdWJzY3JpcHRpb24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZGVidWdTZXRMb2dMZXZlbChsb2dMZXZlbDogc3RyaW5nKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLkRlYnVnLnNldExvZ0xldmVsKGxvZ0xldmVsKTtcbiAgfSk7XG59XG5cblxuY29uc3QgUHVzaFN1YnNjcmlwdGlvbk5hbWVzcGFjZTogSU9uZVNpZ25hbFB1c2hTdWJzY3JpcHRpb24gPSB7XG5cdGdldCBpZCgpOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHdpbmRvdy5PbmVTaWduYWw/LlVzZXI/LlB1c2hTdWJzY3JpcHRpb24/LmlkOyB9LFxuXHRnZXQgdG9rZW4oKTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCB7IHJldHVybiB3aW5kb3cuT25lU2lnbmFsPy5Vc2VyPy5QdXNoU3Vic2NyaXB0aW9uPy50b2tlbjsgfSxcblx0Z2V0IG9wdGVkSW4oKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7IHJldHVybiB3aW5kb3cuT25lU2lnbmFsPy5Vc2VyPy5QdXNoU3Vic2NyaXB0aW9uPy5vcHRlZEluOyB9LFxuXHRvcHRJbjogcHVzaFN1YnNjcmlwdGlvbk9wdEluLFxuXHRvcHRPdXQ6IHB1c2hTdWJzY3JpcHRpb25PcHRPdXQsXG5cdGFkZEV2ZW50TGlzdGVuZXI6IHB1c2hTdWJzY3JpcHRpb25BZGRFdmVudExpc3RlbmVyLFxuXHRyZW1vdmVFdmVudExpc3RlbmVyOiBwdXNoU3Vic2NyaXB0aW9uUmVtb3ZlRXZlbnRMaXN0ZW5lcixcbn07XG5cbmNvbnN0IFVzZXJOYW1lc3BhY2U6IElPbmVTaWduYWxVc2VyID0ge1xuXHRnZXQgb25lc2lnbmFsSWQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHdpbmRvdy5PbmVTaWduYWw/LlVzZXI/Lm9uZXNpZ25hbElkOyB9LFxuXHRnZXQgZXh0ZXJuYWxJZCgpOiBzdHJpbmcgfCB1bmRlZmluZWQgeyByZXR1cm4gd2luZG93Lk9uZVNpZ25hbD8uVXNlcj8uZXh0ZXJuYWxJZDsgfSxcblx0YWRkQWxpYXM6IHVzZXJBZGRBbGlhcyxcblx0YWRkQWxpYXNlczogdXNlckFkZEFsaWFzZXMsXG5cdHJlbW92ZUFsaWFzOiB1c2VyUmVtb3ZlQWxpYXMsXG5cdHJlbW92ZUFsaWFzZXM6IHVzZXJSZW1vdmVBbGlhc2VzLFxuXHRhZGRFbWFpbDogdXNlckFkZEVtYWlsLFxuXHRyZW1vdmVFbWFpbDogdXNlclJlbW92ZUVtYWlsLFxuXHRhZGRTbXM6IHVzZXJBZGRTbXMsXG5cdHJlbW92ZVNtczogdXNlclJlbW92ZVNtcyxcblx0YWRkVGFnOiB1c2VyQWRkVGFnLFxuXHRhZGRUYWdzOiB1c2VyQWRkVGFncyxcblx0cmVtb3ZlVGFnOiB1c2VyUmVtb3ZlVGFnLFxuXHRyZW1vdmVUYWdzOiB1c2VyUmVtb3ZlVGFncyxcblx0Z2V0VGFnczogdXNlckdldFRhZ3MsXG5cdGFkZEV2ZW50TGlzdGVuZXI6IHVzZXJBZGRFdmVudExpc3RlbmVyLFxuXHRyZW1vdmVFdmVudExpc3RlbmVyOiB1c2VyUmVtb3ZlRXZlbnRMaXN0ZW5lcixcblx0c2V0TGFuZ3VhZ2U6IHVzZXJTZXRMYW5ndWFnZSxcblx0Z2V0TGFuZ3VhZ2U6IHVzZXJHZXRMYW5ndWFnZSxcblx0UHVzaFN1YnNjcmlwdGlvbjogUHVzaFN1YnNjcmlwdGlvbk5hbWVzcGFjZSxcbn07XG5cbmNvbnN0IFNlc3Npb25OYW1lc3BhY2U6IElPbmVTaWduYWxTZXNzaW9uID0ge1xuXHRzZW5kT3V0Y29tZTogc2Vzc2lvblNlbmRPdXRjb21lLFxuXHRzZW5kVW5pcXVlT3V0Y29tZTogc2Vzc2lvblNlbmRVbmlxdWVPdXRjb21lLFxufTtcblxuY29uc3QgRGVidWdOYW1lc3BhY2U6IElPbmVTaWduYWxEZWJ1ZyA9IHtcblx0c2V0TG9nTGV2ZWw6IGRlYnVnU2V0TG9nTGV2ZWwsXG59O1xuXG5jb25zdCBTbGlkZWRvd25OYW1lc3BhY2U6IElPbmVTaWduYWxTbGlkZWRvd24gPSB7XG5cdHByb21wdFB1c2g6IHNsaWRlZG93blByb21wdFB1c2gsXG5cdHByb21wdFB1c2hDYXRlZ29yaWVzOiBzbGlkZWRvd25Qcm9tcHRQdXNoQ2F0ZWdvcmllcyxcblx0cHJvbXB0U21zOiBzbGlkZWRvd25Qcm9tcHRTbXMsXG5cdHByb21wdEVtYWlsOiBzbGlkZWRvd25Qcm9tcHRFbWFpbCxcblx0cHJvbXB0U21zQW5kRW1haWw6IHNsaWRlZG93blByb21wdFNtc0FuZEVtYWlsLFxuXHRhZGRFdmVudExpc3RlbmVyOiBzbGlkZWRvd25BZGRFdmVudExpc3RlbmVyLFxuXHRyZW1vdmVFdmVudExpc3RlbmVyOiBzbGlkZWRvd25SZW1vdmVFdmVudExpc3RlbmVyLFxufTtcblxuY29uc3QgTm90aWZpY2F0aW9uc05hbWVzcGFjZTogSU9uZVNpZ25hbE5vdGlmaWNhdGlvbnMgPSB7XG5cdGdldCBwZXJtaXNzaW9uTmF0aXZlKCk6IE5vdGlmaWNhdGlvblBlcm1pc3Npb24geyByZXR1cm4gd2luZG93Lk9uZVNpZ25hbD8uTm90aWZpY2F0aW9ucz8ucGVybWlzc2lvbk5hdGl2ZSA/PyAnZGVmYXVsdCc7IH0sXG5cdGdldCBwZXJtaXNzaW9uKCk6IGJvb2xlYW4geyByZXR1cm4gd2luZG93Lk9uZVNpZ25hbD8uTm90aWZpY2F0aW9ucz8ucGVybWlzc2lvbiA/PyBmYWxzZTsgfSxcblx0c2V0RGVmYXVsdFVybDogbm90aWZpY2F0aW9uc1NldERlZmF1bHRVcmwsXG5cdHNldERlZmF1bHRUaXRsZTogbm90aWZpY2F0aW9uc1NldERlZmF1bHRUaXRsZSxcblx0aXNQdXNoU3VwcG9ydGVkLFxuXHRyZXF1ZXN0UGVybWlzc2lvbjogbm90aWZpY2F0aW9uc1JlcXVlc3RQZXJtaXNzaW9uLFxuXHRhZGRFdmVudExpc3RlbmVyOiBub3RpZmljYXRpb25zQWRkRXZlbnRMaXN0ZW5lcixcblx0cmVtb3ZlRXZlbnRMaXN0ZW5lcjogbm90aWZpY2F0aW9uc1JlbW92ZUV2ZW50TGlzdGVuZXIsXG59O1xuXG4vKipcbiAqIEBQdWJsaWNBcGlcbiAqL1xuZnVuY3Rpb24gaXNQdXNoU3VwcG9ydGVkKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gaXNQdXNoTm90aWZpY2F0aW9uc1N1cHBvcnRlZCgpO1xufVxuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5jb25zdCBPTkVTSUdOQUxfU0RLX0lEID0gJ29uZXNpZ25hbC1zZGsnO1xuY29uc3QgT05FX1NJR05BTF9TQ1JJUFRfU1JDID1cbiAgJ2h0dHBzOi8vY2RuLm9uZXNpZ25hbC5jb20vc2Rrcy93ZWIvdjE2L09uZVNpZ25hbFNESy5wYWdlLmpzJztcblxuLy8gdHJ1ZSBpZiB0aGUgc2NyaXB0IGlzIHN1Y2Nlc3NmdWxseSBsb2FkZWQgZnJvbSBDRE4uXG5sZXQgaXNPbmVTaWduYWxJbml0aWFsaXplZCA9IGZhbHNlO1xuLy8gdHJ1ZSBpZiB0aGUgc2NyaXB0IGZhaWxzIHRvIGxvYWQgZnJvbSBDRE4uIEEgc2VwYXJhdGUgZmxhZyBpcyBuZWNlc3Nhcnlcbi8vIHRvIGRpc2FtYmlndWF0ZSBiZXR3ZWVuIGEgQ0ROIGxvYWQgZmFpbHVyZSBhbmQgYSBkZWxheWVkIGNhbGwgdG9cbi8vIE9uZVNpZ25hbCNpbml0LlxubGV0IGlzT25lU2lnbmFsU2NyaXB0RmFpbGVkID0gZmFsc2U7XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQgPSB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQgfHwgW107XG4gIGFkZFNES1NjcmlwdCgpO1xufVxuXG4vKipcbiAqIFRoZSBmb2xsb3dpbmcgY29kZSBpcyBjb3BpZWQgZGlyZWN0bHkgZnJvbSB0aGUgbmF0aXZlIFNESyBzb3VyY2UgZmlsZSBCcm93c2VyU3VwcG9ydHNQdXNoLnRzXG4gKiBTIFQgQSBSIFRcbiAqL1xuXG4vLyBDaGVja3MgaWYgdGhlIGJyb3dzZXIgc3VwcG9ydHMgcHVzaCBub3RpZmljYXRpb25zIGJ5IGNoZWNraW5nIGlmIHNwZWNpZmljXG4vLyAgIGNsYXNzZXMgYW5kIHByb3BlcnRpZXMgb24gdGhlbSBleGlzdFxuZnVuY3Rpb24gaXNQdXNoTm90aWZpY2F0aW9uc1N1cHBvcnRlZCgpOiBib29sZWFuIHtcbiAgcmV0dXJuIHN1cHBvcnRzVmFwaWRQdXNoKCkgfHwgc3VwcG9ydHNTYWZhcmlQdXNoKCk7XG59XG5cbmZ1bmN0aW9uIGlzTWFjT1NTYWZhcmlJbklmcmFtZSgpOiBib29sZWFuIHtcbiAgLy8gRmFsbGJhY2sgZGV0ZWN0aW9uIGZvciBTYWZhcmkgb24gbWFjT1MgaW4gYW4gaWZyYW1lIGNvbnRleHRcbiAgcmV0dXJuIChcbiAgICB3aW5kb3cudG9wICE9PSB3aW5kb3cgJiYgLy8gaXNDb250ZXh0SWZyYW1lXG4gICAgbmF2aWdhdG9yLnZlbmRvciA9PT0gJ0FwcGxlIENvbXB1dGVyLCBJbmMuJyAmJiAvLyBpc1NhZmFyaVxuICAgIG5hdmlnYXRvci5wbGF0Zm9ybSA9PT0gJ01hY0ludGVsJ1xuICApOyAvLyBpc01hY09TXG59XG5cbmZ1bmN0aW9uIHN1cHBvcnRzU2FmYXJpUHVzaCgpOiBib29sZWFuIHtcbiAgcmV0dXJuIChcbiAgICAod2luZG93LnNhZmFyaSAmJiB0eXBlb2Ygd2luZG93LnNhZmFyaS5wdXNoTm90aWZpY2F0aW9uICE9PSAndW5kZWZpbmVkJykgfHxcbiAgICBpc01hY09TU2FmYXJpSW5JZnJhbWUoKVxuICApO1xufVxuXG4vLyBEb2VzIHRoZSBicm93c2VyIHN1cHBvcnQgdGhlIHN0YW5kYXJkIFB1c2ggQVBJXG5mdW5jdGlvbiBzdXBwb3J0c1ZhcGlkUHVzaCgpOiBib29sZWFuIHtcbiAgcmV0dXJuIChcbiAgICB0eXBlb2YgUHVzaFN1YnNjcmlwdGlvbk9wdGlvbnMgIT09ICd1bmRlZmluZWQnICYmXG4gICAgUHVzaFN1YnNjcmlwdGlvbk9wdGlvbnMucHJvdG90eXBlLmhhc093blByb3BlcnR5KCdhcHBsaWNhdGlvblNlcnZlcktleScpXG4gICk7XG59XG4vKiBFIE4gRCAqL1xuXG5mdW5jdGlvbiBoYW5kbGVPbkVycm9yKCk6IHZvaWQge1xuICBpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCA9IHRydWU7XG59XG5cbmZ1bmN0aW9uIGFkZFNES1NjcmlwdCgpOiB2b2lkIHtcbiAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gIHNjcmlwdC5pZCA9IE9ORVNJR05BTF9TREtfSUQ7XG4gIHNjcmlwdC5kZWZlciA9IHRydWU7XG4gIHNjcmlwdC5zcmMgPSBPTkVfU0lHTkFMX1NDUklQVF9TUkM7XG5cbiAgLy8gQWx3YXlzIHJlc29sdmUgd2hldGhlciBvciBub3QgdGhlIHNjcmlwdCBpcyBzdWNjZXNzZnVsbHkgaW5pdGlhbGl6ZWQuXG4gIC8vIFRoaXMgaXMgaW1wb3J0YW50IGZvciB1c2VycyB3aG8gbWF5IGJsb2NrIGNkbi5vbmVzaWduYWwuY29tIHcvIGFkYmxvY2suXG4gIHNjcmlwdC5vbmVycm9yID0gKCkgPT4ge1xuICAgIGhhbmRsZU9uRXJyb3IoKTtcbiAgfTtcblxuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgT25lU2lnbmFsRGVmZXJyZWQ/OiBPbmVTaWduYWxEZWZlcnJlZExvYWRlZENhbGxiYWNrW107XG4gICAgT25lU2lnbmFsPzogSU9uZVNpZ25hbE9uZVNpZ25hbDtcbiAgICBzYWZhcmk/OiB7XG4gICAgICBwdXNoTm90aWZpY2F0aW9uOiBhbnk7XG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElPbmVTaWduYWxPbmVTaWduYWwge1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBPbmVTaWduYWwgaW1wbGVtZW50cyBJT25lU2lnbmFsT25lU2lnbmFsIHtcbiAgW2tleTogc3RyaW5nXTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICAvKiBQIFUgQiBMIEkgQyAqL1xuXG4gIC8qKlxuICAgKiBAUHVibGljQXBpXG4gICAqL1xuICBpbml0KG9wdGlvbnM6IElJbml0T2JqZWN0KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKGlzT25lU2lnbmFsSW5pdGlhbGl6ZWQpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChgT25lU2lnbmFsIGlzIGFscmVhZHkgaW5pdGlhbGl6ZWQuYCk7XG4gICAgfVxuXG4gICAgaWYgKCFvcHRpb25zIHx8ICFvcHRpb25zLmFwcElkKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoJ1lvdSBuZWVkIHRvIHByb3ZpZGUgeW91ciBPbmVTaWduYWwgYXBwSWQuJyk7XG4gICAgfVxuXG4gICAgaWYgKCFkb2N1bWVudCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGBEb2N1bWVudCBpcyBub3QgZGVmaW5lZC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgICAgb25lU2lnbmFsXG4gICAgICAgICAgLmluaXQob3B0aW9ucylcbiAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBpc09uZVNpZ25hbEluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaChyZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuXHRVc2VyID0gVXNlck5hbWVzcGFjZTtcblx0U2Vzc2lvbiA9IFNlc3Npb25OYW1lc3BhY2U7XG5cdERlYnVnID0gRGVidWdOYW1lc3BhY2U7XG5cdFNsaWRlZG93biA9IFNsaWRlZG93bk5hbWVzcGFjZTtcblx0Tm90aWZpY2F0aW9ucyA9IE5vdGlmaWNhdGlvbnNOYW1lc3BhY2U7XG5cdGxvZ2luID0gb25lU2lnbmFsTG9naW47XG5cdGxvZ291dCA9IG9uZVNpZ25hbExvZ291dDtcblx0c2V0Q29uc2VudEdpdmVuID0gb25lU2lnbmFsU2V0Q29uc2VudEdpdmVuO1xuXHRzZXRDb25zZW50UmVxdWlyZWQgPSBvbmVTaWduYWxTZXRDb25zZW50UmVxdWlyZWQ7XG59XG4iXX0=