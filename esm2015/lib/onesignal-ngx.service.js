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
    get id() { var _a, _b, _c; return (_c = (_b = (_a = window.OneSignal) === null || _a === void 0 ? void 0 : _a.User) === null || _b === void 0 ? void 0 : _b.PushSubscription) === null || _c === void 0 ? void 0 : _c.id; },
    get token() { var _a, _b, _c; return (_c = (_b = (_a = window.OneSignal) === null || _a === void 0 ? void 0 : _a.User) === null || _b === void 0 ? void 0 : _b.PushSubscription) === null || _c === void 0 ? void 0 : _c.token; },
    get optedIn() { var _a, _b, _c; return (_c = (_b = (_a = window.OneSignal) === null || _a === void 0 ? void 0 : _a.User) === null || _b === void 0 ? void 0 : _b.PushSubscription) === null || _c === void 0 ? void 0 : _c.optedIn; },
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
    addTag: userAddTag,
    addTags: userAddTags,
    removeTag: userRemoveTag,
    removeTags: userRemoveTags,
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
if (window) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25lc2lnbmFsLW5neC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvb25lc2lnbmFsLW5neC9zcmMvbGliL29uZXNpZ25hbC1uZ3guc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnR0EsU0FBUyxjQUFjLENBQUMsVUFBa0IsRUFBRSxRQUFpQjtJQUMzRCxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFOztRQUNyQyxJQUFJLHVCQUF1QixFQUFFO1lBQzNCLE1BQU0sRUFBRSxDQUFDO1NBQ1Y7UUFFRCxNQUFBLE1BQU0sQ0FBQyxpQkFBaUIsMENBQUUsSUFBSSxDQUFDLENBQUMsU0FBOEIsRUFBRSxFQUFFO1lBQ2hFLFNBQVMsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQztpQkFDbEMsSUFBSSxDQUFDLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3BDLEtBQUssQ0FBQyxDQUFDLEtBQVksRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxFQUFFO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBRUQsU0FBUyxlQUFlO0lBQ3RCLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7O1FBQ3JDLElBQUksdUJBQXVCLEVBQUU7WUFDM0IsTUFBTSxFQUFFLENBQUM7U0FDVjtRQUVELE1BQUEsTUFBTSxDQUFDLGlCQUFpQiwwQ0FBRSxJQUFJLENBQUMsQ0FBQyxTQUE4QixFQUFFLEVBQUU7WUFDaEUsU0FBUyxDQUFDLE1BQU0sRUFBRTtpQkFDZixJQUFJLENBQUMsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDcEMsS0FBSyxDQUFDLENBQUMsS0FBWSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM1QyxDQUFDLEVBQUU7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFRCxTQUFTLHdCQUF3QixDQUFDLE9BQWdCO0lBQ2hELE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7O1FBQ3JDLElBQUksdUJBQXVCLEVBQUU7WUFDM0IsTUFBTSxFQUFFLENBQUM7U0FDVjtRQUVELE1BQUEsTUFBTSxDQUFDLGlCQUFpQiwwQ0FBRSxJQUFJLENBQUMsQ0FBQyxTQUE4QixFQUFFLEVBQUU7WUFDaEUsU0FBUyxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUM7aUJBQy9CLElBQUksQ0FBQyxDQUFDLEtBQVUsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNwQyxLQUFLLENBQUMsQ0FBQyxLQUFZLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzVDLENBQUMsRUFBRTtJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUVELFNBQVMsMkJBQTJCLENBQUMsZUFBd0I7SUFDM0QsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTs7UUFDckMsSUFBSSx1QkFBdUIsRUFBRTtZQUMzQixNQUFNLEVBQUUsQ0FBQztTQUNWO1FBRUQsTUFBQSxNQUFNLENBQUMsaUJBQWlCLDBDQUFFLElBQUksQ0FBQyxDQUFDLFNBQThCLEVBQUUsRUFBRTtZQUNoRSxTQUFTLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUFDO2lCQUMxQyxJQUFJLENBQUMsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDcEMsS0FBSyxDQUFDLENBQUMsS0FBWSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM1QyxDQUFDLEVBQUU7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFRCxTQUFTLG1CQUFtQixDQUFDLE9BQTJCO0lBQ3RELE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7O1FBQ3JDLElBQUksdUJBQXVCLEVBQUU7WUFDM0IsTUFBTSxFQUFFLENBQUM7U0FDVjtRQUVELE1BQUEsTUFBTSxDQUFDLGlCQUFpQiwwQ0FBRSxJQUFJLENBQUMsQ0FBQyxTQUE4QixFQUFFLEVBQUU7WUFDaEUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO2lCQUNwQyxJQUFJLENBQUMsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDcEMsS0FBSyxDQUFDLENBQUMsS0FBWSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM1QyxDQUFDLEVBQUU7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFRCxTQUFTLDZCQUE2QixDQUFDLE9BQTJCO0lBQ2hFLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7O1FBQ3JDLElBQUksdUJBQXVCLEVBQUU7WUFDM0IsTUFBTSxFQUFFLENBQUM7U0FDVjtRQUVELE1BQUEsTUFBTSxDQUFDLGlCQUFpQiwwQ0FBRSxJQUFJLENBQUMsQ0FBQyxTQUE4QixFQUFFLEVBQUU7WUFDaEUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUM7aUJBQzlDLElBQUksQ0FBQyxDQUFDLEtBQVUsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNwQyxLQUFLLENBQUMsQ0FBQyxLQUFZLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzVDLENBQUMsRUFBRTtJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUVELFNBQVMsa0JBQWtCLENBQUMsT0FBMkI7SUFDckQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTs7UUFDckMsSUFBSSx1QkFBdUIsRUFBRTtZQUMzQixNQUFNLEVBQUUsQ0FBQztTQUNWO1FBRUQsTUFBQSxNQUFNLENBQUMsaUJBQWlCLDBDQUFFLElBQUksQ0FBQyxDQUFDLFNBQThCLEVBQUUsRUFBRTtZQUNoRSxTQUFTLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7aUJBQ25DLElBQUksQ0FBQyxDQUFDLEtBQVUsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNwQyxLQUFLLENBQUMsQ0FBQyxLQUFZLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzVDLENBQUMsRUFBRTtJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUVELFNBQVMsb0JBQW9CLENBQUMsT0FBMkI7SUFDdkQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTs7UUFDckMsSUFBSSx1QkFBdUIsRUFBRTtZQUMzQixNQUFNLEVBQUUsQ0FBQztTQUNWO1FBRUQsTUFBQSxNQUFNLENBQUMsaUJBQWlCLDBDQUFFLElBQUksQ0FBQyxDQUFDLFNBQThCLEVBQUUsRUFBRTtZQUNoRSxTQUFTLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUM7aUJBQ3JDLElBQUksQ0FBQyxDQUFDLEtBQVUsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNwQyxLQUFLLENBQUMsQ0FBQyxLQUFZLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzVDLENBQUMsRUFBRTtJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUVELFNBQVMsMEJBQTBCLENBQUMsT0FBMkI7SUFDN0QsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTs7UUFDckMsSUFBSSx1QkFBdUIsRUFBRTtZQUMzQixNQUFNLEVBQUUsQ0FBQztTQUNWO1FBRUQsTUFBQSxNQUFNLENBQUMsaUJBQWlCLDBDQUFFLElBQUksQ0FBQyxDQUFDLFNBQThCLEVBQUUsRUFBRTtZQUNoRSxTQUFTLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQztpQkFDM0MsSUFBSSxDQUFDLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3BDLEtBQUssQ0FBQyxDQUFDLEtBQVksRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxFQUFFO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBRUQsU0FBUyx5QkFBeUIsQ0FBQyxLQUF5QixFQUFFLFFBQXFDOztJQUNqRyxNQUFBLE1BQU0sQ0FBQyxpQkFBaUIsMENBQUUsSUFBSSxDQUFDLENBQUMsU0FBOEIsRUFBRSxFQUFFO1FBQ2hFLFNBQVMsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3hELENBQUMsRUFBRTtBQUNMLENBQUM7QUFFRCxTQUFTLDRCQUE0QixDQUFDLEtBQXlCLEVBQUUsUUFBcUM7O0lBQ3BHLE1BQUEsTUFBTSxDQUFDLGlCQUFpQiwwQ0FBRSxJQUFJLENBQUMsQ0FBQyxTQUE4QixFQUFFLEVBQUU7UUFDaEUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDM0QsQ0FBQyxFQUFFO0FBQ0wsQ0FBQztBQUVELFNBQVMsMEJBQTBCLENBQUMsR0FBVztJQUM3QyxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFOztRQUNyQyxJQUFJLHVCQUF1QixFQUFFO1lBQzNCLE1BQU0sRUFBRSxDQUFDO1NBQ1Y7UUFFRCxNQUFBLE1BQU0sQ0FBQyxpQkFBaUIsMENBQUUsSUFBSSxDQUFDLENBQUMsU0FBOEIsRUFBRSxFQUFFO1lBQ2hFLFNBQVMsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQztpQkFDdkMsSUFBSSxDQUFDLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3BDLEtBQUssQ0FBQyxDQUFDLEtBQVksRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxFQUFFO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBRUQsU0FBUyw0QkFBNEIsQ0FBQyxLQUFhO0lBQ2pELE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7O1FBQ3JDLElBQUksdUJBQXVCLEVBQUU7WUFDM0IsTUFBTSxFQUFFLENBQUM7U0FDVjtRQUVELE1BQUEsTUFBTSxDQUFDLGlCQUFpQiwwQ0FBRSxJQUFJLENBQUMsQ0FBQyxTQUE4QixFQUFFLEVBQUU7WUFDaEUsU0FBUyxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDO2lCQUMzQyxJQUFJLENBQUMsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDcEMsS0FBSyxDQUFDLENBQUMsS0FBWSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM1QyxDQUFDLEVBQUU7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFRCxTQUFTLGdDQUFnQyxDQUFDLFVBQTBDO0lBQ2xGLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7O1FBQ3JDLElBQUksdUJBQXVCLEVBQUU7WUFDM0IsTUFBTSxFQUFFLENBQUM7U0FDVjtRQUVELE1BQUEsTUFBTSxDQUFDLGlCQUFpQiwwQ0FBRSxJQUFJLENBQUMsQ0FBQyxTQUE4QixFQUFFLEVBQUU7WUFDaEUsU0FBUyxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUM7aUJBQ3BELElBQUksQ0FBQyxDQUFDLEtBQVUsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNwQyxLQUFLLENBQUMsQ0FBQyxLQUFZLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzVDLENBQUMsRUFBRTtJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUVELFNBQVMsOEJBQThCO0lBQ3JDLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7O1FBQ3JDLElBQUksdUJBQXVCLEVBQUU7WUFDM0IsTUFBTSxFQUFFLENBQUM7U0FDVjtRQUVELE1BQUEsTUFBTSxDQUFDLGlCQUFpQiwwQ0FBRSxJQUFJLENBQUMsQ0FBQyxTQUE4QixFQUFFLEVBQUU7WUFDaEUsU0FBUyxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsRUFBRTtpQkFDeEMsSUFBSSxDQUFDLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3BDLEtBQUssQ0FBQyxDQUFDLEtBQVksRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxFQUFFO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBTUQsU0FBUyw2QkFBNkIsQ0FBQyxLQUE0QixFQUFFLFFBQTRCOztJQUMvRixNQUFBLE1BQU0sQ0FBQyxpQkFBaUIsMENBQUUsSUFBSSxDQUFDLENBQUMsU0FBOEIsRUFBRSxFQUFFO1FBQ2hFLFNBQVMsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzVELENBQUMsRUFBRTtBQUNMLENBQUM7QUFNRCxTQUFTLGdDQUFnQyxDQUFDLEtBQTRCLEVBQUUsUUFBNEI7O0lBQ2xHLE1BQUEsTUFBTSxDQUFDLGlCQUFpQiwwQ0FBRSxJQUFJLENBQUMsQ0FBQyxTQUE4QixFQUFFLEVBQUU7UUFDaEUsU0FBUyxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDL0QsQ0FBQyxFQUFFO0FBQ0wsQ0FBQztBQUVELFNBQVMsa0JBQWtCLENBQUMsV0FBbUIsRUFBRSxhQUFzQjtJQUNyRSxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFOztRQUNyQyxJQUFJLHVCQUF1QixFQUFFO1lBQzNCLE1BQU0sRUFBRSxDQUFDO1NBQ1Y7UUFFRCxNQUFBLE1BQU0sQ0FBQyxpQkFBaUIsMENBQUUsSUFBSSxDQUFDLENBQUMsU0FBOEIsRUFBRSxFQUFFO1lBQ2hFLFNBQVMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxhQUFhLENBQUM7aUJBQ3RELElBQUksQ0FBQyxDQUFDLEtBQVUsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNwQyxLQUFLLENBQUMsQ0FBQyxLQUFZLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzVDLENBQUMsRUFBRTtJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUVELFNBQVMsd0JBQXdCLENBQUMsV0FBbUI7SUFDbkQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTs7UUFDckMsSUFBSSx1QkFBdUIsRUFBRTtZQUMzQixNQUFNLEVBQUUsQ0FBQztTQUNWO1FBRUQsTUFBQSxNQUFNLENBQUMsaUJBQWlCLDBDQUFFLElBQUksQ0FBQyxDQUFDLFNBQThCLEVBQUUsRUFBRTtZQUNoRSxTQUFTLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQztpQkFDN0MsSUFBSSxDQUFDLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3BDLEtBQUssQ0FBQyxDQUFDLEtBQVksRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxFQUFFO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBRUQsU0FBUyxZQUFZLENBQUMsS0FBYSxFQUFFLEVBQVU7O0lBQzdDLE1BQUEsTUFBTSxDQUFDLGlCQUFpQiwwQ0FBRSxJQUFJLENBQUMsQ0FBQyxTQUE4QixFQUFFLEVBQUU7UUFDaEUsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3JDLENBQUMsRUFBRTtBQUNMLENBQUM7QUFFRCxTQUFTLGNBQWMsQ0FBQyxPQUFrQzs7SUFDeEQsTUFBQSxNQUFNLENBQUMsaUJBQWlCLDBDQUFFLElBQUksQ0FBQyxDQUFDLFNBQThCLEVBQUUsRUFBRTtRQUNoRSxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyQyxDQUFDLEVBQUU7QUFDTCxDQUFDO0FBRUQsU0FBUyxlQUFlLENBQUMsS0FBYTs7SUFDcEMsTUFBQSxNQUFNLENBQUMsaUJBQWlCLDBDQUFFLElBQUksQ0FBQyxDQUFDLFNBQThCLEVBQUUsRUFBRTtRQUNoRSxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDLEVBQUU7QUFDTCxDQUFDO0FBRUQsU0FBUyxpQkFBaUIsQ0FBQyxNQUFnQjs7SUFDekMsTUFBQSxNQUFNLENBQUMsaUJBQWlCLDBDQUFFLElBQUksQ0FBQyxDQUFDLFNBQThCLEVBQUUsRUFBRTtRQUNoRSxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2QyxDQUFDLEVBQUU7QUFDTCxDQUFDO0FBRUQsU0FBUyxZQUFZLENBQUMsS0FBYTs7SUFDakMsTUFBQSxNQUFNLENBQUMsaUJBQWlCLDBDQUFFLElBQUksQ0FBQyxDQUFDLFNBQThCLEVBQUUsRUFBRTtRQUNoRSxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDLEVBQUU7QUFDTCxDQUFDO0FBRUQsU0FBUyxlQUFlLENBQUMsS0FBYTs7SUFDcEMsTUFBQSxNQUFNLENBQUMsaUJBQWlCLDBDQUFFLElBQUksQ0FBQyxDQUFDLFNBQThCLEVBQUUsRUFBRTtRQUNoRSxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDLEVBQUU7QUFDTCxDQUFDO0FBRUQsU0FBUyxVQUFVLENBQUMsU0FBaUI7O0lBQ25DLE1BQUEsTUFBTSxDQUFDLGlCQUFpQiwwQ0FBRSxJQUFJLENBQUMsQ0FBQyxTQUE4QixFQUFFLEVBQUU7UUFDaEUsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbkMsQ0FBQyxFQUFFO0FBQ0wsQ0FBQztBQUVELFNBQVMsYUFBYSxDQUFDLFNBQWlCOztJQUN0QyxNQUFBLE1BQU0sQ0FBQyxpQkFBaUIsMENBQUUsSUFBSSxDQUFDLENBQUMsU0FBOEIsRUFBRSxFQUFFO1FBQ2hFLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3RDLENBQUMsRUFBRTtBQUNMLENBQUM7QUFFRCxTQUFTLFVBQVUsQ0FBQyxHQUFXLEVBQUUsS0FBYTs7SUFDNUMsTUFBQSxNQUFNLENBQUMsaUJBQWlCLDBDQUFFLElBQUksQ0FBQyxDQUFDLFNBQThCLEVBQUUsRUFBRTtRQUNoRSxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQyxFQUFFO0FBQ0wsQ0FBQztBQUVELFNBQVMsV0FBVyxDQUFDLElBQStCOztJQUNsRCxNQUFBLE1BQU0sQ0FBQyxpQkFBaUIsMENBQUUsSUFBSSxDQUFDLENBQUMsU0FBOEIsRUFBRSxFQUFFO1FBQ2hFLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUMsRUFBRTtBQUNMLENBQUM7QUFFRCxTQUFTLGFBQWEsQ0FBQyxHQUFXOztJQUNoQyxNQUFBLE1BQU0sQ0FBQyxpQkFBaUIsMENBQUUsSUFBSSxDQUFDLENBQUMsU0FBOEIsRUFBRSxFQUFFO1FBQ2hFLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDLENBQUMsRUFBRTtBQUNMLENBQUM7QUFFRCxTQUFTLGNBQWMsQ0FBQyxJQUFjOztJQUNwQyxNQUFBLE1BQU0sQ0FBQyxpQkFBaUIsMENBQUUsSUFBSSxDQUFDLENBQUMsU0FBOEIsRUFBRSxFQUFFO1FBQ2hFLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUMsRUFBRTtBQUNMLENBQUM7QUFFRCxTQUFTLHFCQUFxQjtJQUM1QixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFOztRQUNyQyxJQUFJLHVCQUF1QixFQUFFO1lBQzNCLE1BQU0sRUFBRSxDQUFDO1NBQ1Y7UUFFRCxNQUFBLE1BQU0sQ0FBQyxpQkFBaUIsMENBQUUsSUFBSSxDQUFDLENBQUMsU0FBOEIsRUFBRSxFQUFFO1lBQ2hFLFNBQVMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFO2lCQUNwQyxJQUFJLENBQUMsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDcEMsS0FBSyxDQUFDLENBQUMsS0FBWSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM1QyxDQUFDLEVBQUU7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFRCxTQUFTLHNCQUFzQjtJQUM3QixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFOztRQUNyQyxJQUFJLHVCQUF1QixFQUFFO1lBQzNCLE1BQU0sRUFBRSxDQUFDO1NBQ1Y7UUFFRCxNQUFBLE1BQU0sQ0FBQyxpQkFBaUIsMENBQUUsSUFBSSxDQUFDLENBQUMsU0FBOEIsRUFBRSxFQUFFO1lBQ2hFLFNBQVMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFO2lCQUNyQyxJQUFJLENBQUMsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDcEMsS0FBSyxDQUFDLENBQUMsS0FBWSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM1QyxDQUFDLEVBQUU7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFRCxTQUFTLGdDQUFnQyxDQUFDLEtBQTJCLEVBQUUsUUFBbUQ7O0lBQ3hILE1BQUEsTUFBTSxDQUFDLGlCQUFpQiwwQ0FBRSxJQUFJLENBQUMsQ0FBQyxTQUE4QixFQUFFLEVBQUU7UUFDaEUsU0FBUyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDcEUsQ0FBQyxFQUFFO0FBQ0wsQ0FBQztBQUVELFNBQVMsbUNBQW1DLENBQUMsS0FBMkIsRUFBRSxRQUFtRDs7SUFDM0gsTUFBQSxNQUFNLENBQUMsaUJBQWlCLDBDQUFFLElBQUksQ0FBQyxDQUFDLFNBQThCLEVBQUUsRUFBRTtRQUNoRSxTQUFTLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN2RSxDQUFDLEVBQUU7QUFDTCxDQUFDO0FBRUQsU0FBUyxnQkFBZ0IsQ0FBQyxRQUFnQjs7SUFDeEMsTUFBQSxNQUFNLENBQUMsaUJBQWlCLDBDQUFFLElBQUksQ0FBQyxDQUFDLFNBQThCLEVBQUUsRUFBRTtRQUNoRSxTQUFTLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN4QyxDQUFDLEVBQUU7QUFDTCxDQUFDO0FBRUQsTUFBTSx5QkFBeUIsR0FBK0I7SUFDN0QsSUFBSSxFQUFFLHFCQUFnQyx5QkFBTyxNQUFNLENBQUMsU0FBUywwQ0FBRSxJQUFJLDBDQUFFLGdCQUFnQiwwQ0FBRSxFQUFFLENBQUEsQ0FBQyxDQUFDO0lBQzNGLElBQUksS0FBSyxxQkFBZ0MseUJBQU8sTUFBTSxDQUFDLFNBQVMsMENBQUUsSUFBSSwwQ0FBRSxnQkFBZ0IsMENBQUUsS0FBSyxDQUFBLENBQUMsQ0FBQztJQUNqRyxJQUFJLE9BQU8scUJBQTBCLHlCQUFPLE1BQU0sQ0FBQyxTQUFTLDBDQUFFLElBQUksMENBQUUsZ0JBQWdCLDBDQUFFLE9BQU8sQ0FBQSxDQUFDLENBQUM7SUFDL0YsS0FBSyxFQUFFLHFCQUFxQjtJQUM1QixNQUFNLEVBQUUsc0JBQXNCO0lBQzlCLGdCQUFnQixFQUFFLGdDQUFnQztJQUNsRCxtQkFBbUIsRUFBRSxtQ0FBbUM7Q0FDeEQsQ0FBQztBQUVGLE1BQU0sYUFBYSxHQUFtQjtJQUNyQyxRQUFRLEVBQUUsWUFBWTtJQUN0QixVQUFVLEVBQUUsY0FBYztJQUMxQixXQUFXLEVBQUUsZUFBZTtJQUM1QixhQUFhLEVBQUUsaUJBQWlCO0lBQ2hDLFFBQVEsRUFBRSxZQUFZO0lBQ3RCLFdBQVcsRUFBRSxlQUFlO0lBQzVCLE1BQU0sRUFBRSxVQUFVO0lBQ2xCLFNBQVMsRUFBRSxhQUFhO0lBQ3hCLE1BQU0sRUFBRSxVQUFVO0lBQ2xCLE9BQU8sRUFBRSxXQUFXO0lBQ3BCLFNBQVMsRUFBRSxhQUFhO0lBQ3hCLFVBQVUsRUFBRSxjQUFjO0lBQzFCLGdCQUFnQixFQUFFLHlCQUF5QjtDQUMzQyxDQUFDO0FBRUYsTUFBTSxnQkFBZ0IsR0FBc0I7SUFDM0MsV0FBVyxFQUFFLGtCQUFrQjtJQUMvQixpQkFBaUIsRUFBRSx3QkFBd0I7Q0FDM0MsQ0FBQztBQUVGLE1BQU0sY0FBYyxHQUFvQjtJQUN2QyxXQUFXLEVBQUUsZ0JBQWdCO0NBQzdCLENBQUM7QUFFRixNQUFNLGtCQUFrQixHQUF3QjtJQUMvQyxVQUFVLEVBQUUsbUJBQW1CO0lBQy9CLG9CQUFvQixFQUFFLDZCQUE2QjtJQUNuRCxTQUFTLEVBQUUsa0JBQWtCO0lBQzdCLFdBQVcsRUFBRSxvQkFBb0I7SUFDakMsaUJBQWlCLEVBQUUsMEJBQTBCO0lBQzdDLGdCQUFnQixFQUFFLHlCQUF5QjtJQUMzQyxtQkFBbUIsRUFBRSw0QkFBNEI7Q0FDakQsQ0FBQztBQUVGLE1BQU0sc0JBQXNCLEdBQTRCO0lBQ3ZELGFBQWEsRUFBRSwwQkFBMEI7SUFDekMsZUFBZSxFQUFFLDRCQUE0QjtJQUM3QyxlQUFlO0lBQ2YsbUJBQW1CLEVBQUUsZ0NBQWdDO0lBQ3JELGlCQUFpQixFQUFFLDhCQUE4QjtJQUNqRCxnQkFBZ0IsRUFBRSw2QkFBNkI7SUFDL0MsbUJBQW1CLEVBQUUsZ0NBQWdDO0NBQ3JELENBQUM7QUFFRjs7R0FFRztBQUNILFNBQVMsZUFBZTtJQUN0QixPQUFPLDRCQUE0QixFQUFFLENBQUM7QUFDeEMsQ0FBQztBQUVELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBQzNDLE1BQU0sZ0JBQWdCLEdBQUcsZUFBZSxDQUFDO0FBQ3pDLE1BQU0scUJBQXFCLEdBQUcsNkRBQTZELENBQUM7QUFFNUYsc0RBQXNEO0FBQ3RELElBQUksc0JBQXNCLEdBQUcsS0FBSyxDQUFDO0FBQ25DLDBFQUEwRTtBQUMxRSxtRUFBbUU7QUFDbkUsa0JBQWtCO0FBQ2xCLElBQUksdUJBQXVCLEdBQUcsS0FBSyxDQUFDO0FBRXBDLElBQUksTUFBTSxFQUFFO0lBQ1YsTUFBTSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxpQkFBaUIsSUFBSSxFQUFFLENBQUM7SUFDMUQsWUFBWSxFQUFFLENBQUM7Q0FDaEI7QUFFRDs7O0dBR0c7QUFFSCw0RUFBNEU7QUFDNUUseUNBQXlDO0FBQ3pDLFNBQVMsNEJBQTRCO0lBQ25DLE9BQU8saUJBQWlCLEVBQUUsSUFBSSxrQkFBa0IsRUFBRSxDQUFDO0FBQ3JELENBQUM7QUFFRCxTQUFTLHFCQUFxQjtJQUM1Qiw4REFBOEQ7SUFDOUQsT0FBTyxNQUFNLENBQUMsR0FBRyxLQUFLLE1BQU0sSUFBSSxrQkFBa0I7UUFDbEQsU0FBUyxDQUFDLE1BQU0sS0FBSyxzQkFBc0IsSUFBSSxXQUFXO1FBQzFELFNBQVMsQ0FBQyxRQUFRLEtBQUssVUFBVSxDQUFDLENBQUMsVUFBVTtBQUMvQyxDQUFDO0FBRUQsU0FBUyxrQkFBa0I7SUFDekIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLGdCQUFnQixLQUFLLFdBQVcsQ0FBQztRQUN2RSxxQkFBcUIsRUFBRSxDQUFDO0FBQ2xDLENBQUM7QUFFRCxpREFBaUQ7QUFDakQsU0FBUyxpQkFBaUI7SUFDeEIsT0FBTyxPQUFPLHVCQUF1QixLQUFLLFdBQVc7UUFDL0MsdUJBQXVCLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBQ2pGLENBQUM7QUFDRCxXQUFXO0FBRVgsU0FBUyxhQUFhO0lBQ3BCLHVCQUF1QixHQUFHLElBQUksQ0FBQztBQUNqQyxDQUFDO0FBRUQsU0FBUyxZQUFZO0lBQ25CLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDaEQsTUFBTSxDQUFDLEVBQUUsR0FBRyxnQkFBZ0IsQ0FBQztJQUM3QixNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztJQUNwQixNQUFNLENBQUMsR0FBRyxHQUFHLHFCQUFxQixDQUFDO0lBRW5DLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsTUFBTSxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUU7UUFDcEIsYUFBYSxFQUFFLENBQUM7SUFDbEIsQ0FBQyxDQUFDO0lBRUYsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDcEMsQ0FBQztBQW9CRCxNQUFNLE9BQU8sU0FBUztJQUdwQjtRQThCRCxTQUFJLEdBQUcsYUFBYSxDQUFDO1FBQ3JCLFlBQU8sR0FBRyxnQkFBZ0IsQ0FBQztRQUMzQixVQUFLLEdBQUcsY0FBYyxDQUFDO1FBQ3ZCLGNBQVMsR0FBRyxrQkFBa0IsQ0FBQztRQUMvQixrQkFBYSxHQUFHLHNCQUFzQixDQUFDO1FBQ3ZDLFVBQUssR0FBRyxjQUFjLENBQUM7UUFDdkIsV0FBTSxHQUFHLGVBQWUsQ0FBQztRQUN6QixvQkFBZSxHQUFHLHdCQUF3QixDQUFDO1FBQzNDLHVCQUFrQixHQUFHLDJCQUEyQixDQUFDO0lBdENoQyxDQUFDO0lBRWpCLGlCQUFpQjtJQUVqQjs7T0FFRztJQUNILElBQUksQ0FBQyxPQUFvQjtRQUN2QixJQUFJLHNCQUFzQixFQUFFO1lBQzFCLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO1NBQzVEO1FBRUQsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUU7WUFDOUIsTUFBTSxJQUFJLEtBQUssQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO1NBQzlEO1FBRUQsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNiLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1NBQ25EO1FBRUQsT0FBTyxJQUFJLE9BQU8sQ0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFOztZQUNuQyxNQUFBLE1BQU0sQ0FBQyxpQkFBaUIsMENBQUUsSUFBSSxDQUFDLENBQUMsU0FBOEIsRUFBRSxFQUFFO2dCQUNoRSxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7b0JBQ2hDLHNCQUFzQixHQUFHLElBQUksQ0FBQztvQkFDOUIsT0FBTyxFQUFFLENBQUM7Z0JBQ1osQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDLEVBQUU7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7WUFsQ0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsidHlwZSBBY3Rpb248VD4gPSAoaXRlbTogVCkgPT4gdm9pZDtcbmludGVyZmFjZSBBdXRvUHJvbXB0T3B0aW9ucyB7IGZvcmNlPzogYm9vbGVhbjsgZm9yY2VTbGlkZWRvd25PdmVyTmF0aXZlPzogYm9vbGVhbjsgc2xpZGVkb3duUHJvbXB0T3B0aW9ucz86IElPbmVTaWduYWxBdXRvUHJvbXB0T3B0aW9uczsgfVxuaW50ZXJmYWNlIElPbmVTaWduYWxBdXRvUHJvbXB0T3B0aW9ucyB7IGZvcmNlPzogYm9vbGVhbjsgZm9yY2VTbGlkZWRvd25PdmVyTmF0aXZlPzogYm9vbGVhbjsgaXNJblVwZGF0ZU1vZGU/OiBib29sZWFuOyBjYXRlZ29yeU9wdGlvbnM/OiBJT25lU2lnbmFsQ2F0ZWdvcmllczsgfVxuaW50ZXJmYWNlIElPbmVTaWduYWxDYXRlZ29yaWVzIHsgcG9zaXRpdmVVcGRhdGVCdXR0b246IHN0cmluZzsgbmVnYXRpdmVVcGRhdGVCdXR0b246IHN0cmluZzsgc2F2aW5nQnV0dG9uVGV4dDogc3RyaW5nOyBlcnJvckJ1dHRvblRleHQ6IHN0cmluZzsgdXBkYXRlTWVzc2FnZTogc3RyaW5nOyB0YWdzOiBJT25lU2lnbmFsVGFnQ2F0ZWdvcnlbXTsgfVxuaW50ZXJmYWNlIElPbmVTaWduYWxUYWdDYXRlZ29yeSB7IHRhZzogc3RyaW5nOyBsYWJlbDogc3RyaW5nOyBjaGVja2VkPzogYm9vbGVhbjsgfVxudHlwZSBQdXNoU3Vic2NyaXB0aW9uTmFtZXNwYWNlUHJvcGVydGllcyA9IHsgaWQ6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQ7IHRva2VuOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkOyBvcHRlZEluOiBib29sZWFuOyB9O1xudHlwZSBTdWJzY3JpcHRpb25DaGFuZ2VFdmVudCA9IHsgcHJldmlvdXM6IFB1c2hTdWJzY3JpcHRpb25OYW1lc3BhY2VQcm9wZXJ0aWVzOyBjdXJyZW50OiBQdXNoU3Vic2NyaXB0aW9uTmFtZXNwYWNlUHJvcGVydGllczsgfTtcbnR5cGUgTm90aWZpY2F0aW9uRXZlbnROYW1lID0gJ2NsaWNrJyB8ICd3aWxsRGlzcGxheScgfCAnZGlzbWlzcycgfCAncGVybWlzc2lvbkNoYW5nZScgfCAncGVybWlzc2lvblByb21wdERpc3BsYXknO1xuaW50ZXJmYWNlIE5vdGlmaWNhdGlvbkJ1dHRvbkRhdGEgeyBhY3Rpb24/OiBzdHJpbmc7IHRpdGxlPzogc3RyaW5nOyBpY29uPzogc3RyaW5nOyB1cmw/OiBzdHJpbmc7IH1cbmludGVyZmFjZSBTdHJ1Y3R1cmVkTm90aWZpY2F0aW9uIHsgaWQ6IHN0cmluZzsgY29udGVudDogc3RyaW5nOyBoZWFkaW5nPzogc3RyaW5nOyB1cmw/OiBzdHJpbmc7IGRhdGE/OiBvYmplY3Q7IHJyPzogc3RyaW5nOyBpY29uPzogc3RyaW5nOyBpbWFnZT86IHN0cmluZzsgdGFnPzogc3RyaW5nOyBiYWRnZT86IHN0cmluZzsgdmlicmF0ZT86IHN0cmluZzsgYnV0dG9ucz86IE5vdGlmaWNhdGlvbkJ1dHRvbkRhdGFbXTsgfVxudHlwZSBTbGlkZWRvd25FdmVudE5hbWUgPSAnc2xpZGVkb3duU2hvd24nO1xudHlwZSBPbmVTaWduYWxEZWZlcnJlZExvYWRlZENhbGxiYWNrID0gKG9uZXNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4gdm9pZDtcblxuaW50ZXJmYWNlIElJbml0T2JqZWN0IHtcbiAgYXBwSWQ6IHN0cmluZztcbiAgc3ViZG9tYWluTmFtZT86IHN0cmluZztcbiAgcmVxdWlyZXNVc2VyUHJpdmFjeUNvbnNlbnQ/OiBib29sZWFuO1xuICBwcm9tcHRPcHRpb25zPzogb2JqZWN0O1xuICB3ZWxjb21lTm90aWZpY2F0aW9uPzogb2JqZWN0O1xuICBub3RpZnlCdXR0b24/OiBvYmplY3Q7XG4gIHBlcnNpc3ROb3RpZmljYXRpb24/OiBib29sZWFuO1xuICB3ZWJob29rcz86IG9iamVjdDtcbiAgYXV0b1Jlc3Vic2NyaWJlPzogYm9vbGVhbjtcbiAgYXV0b1JlZ2lzdGVyPzogYm9vbGVhbjtcbiAgbm90aWZpY2F0aW9uQ2xpY2tIYW5kbGVyTWF0Y2g/OiBzdHJpbmc7XG4gIG5vdGlmaWNhdGlvbkNsaWNrSGFuZGxlckFjdGlvbj86IHN0cmluZztcbiAgc2VydmljZVdvcmtlclBhcmFtPzogeyBzY29wZTogc3RyaW5nIH07XG4gIHNlcnZpY2VXb3JrZXJQYXRoPzogc3RyaW5nO1xuICBzZXJ2aWNlV29ya2VyVXBkYXRlclBhdGg/OiBzdHJpbmc7XG4gIHBhdGg/OiBzdHJpbmc7XG4gIGFsbG93TG9jYWxob3N0QXNTZWN1cmVPcmlnaW4/OiBib29sZWFuO1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmludGVyZmFjZSBJT25lU2lnbmFsT25lU2lnbmFsIHtcblx0U2xpZGVkb3duOiBJT25lU2lnbmFsU2xpZGVkb3duO1xuXHROb3RpZmljYXRpb25zOiBJT25lU2lnbmFsTm90aWZpY2F0aW9ucztcblx0U2Vzc2lvbjogSU9uZVNpZ25hbFNlc3Npb247XG5cdFVzZXI6IElPbmVTaWduYWxVc2VyO1xuXHREZWJ1ZzogSU9uZVNpZ25hbERlYnVnO1xuXHRsb2dpbihleHRlcm5hbElkOiBzdHJpbmcsIGp3dFRva2VuPzogc3RyaW5nKTogUHJvbWlzZTx2b2lkPjtcblx0bG9nb3V0KCk6IFByb21pc2U8dm9pZD47XG5cdGluaXQob3B0aW9uczogSUluaXRPYmplY3QpOiBQcm9taXNlPHZvaWQ+O1xuXHRzZXRDb25zZW50R2l2ZW4oY29uc2VudDogYm9vbGVhbik6IFByb21pc2U8dm9pZD47XG5cdHNldENvbnNlbnRSZXF1aXJlZChyZXF1aXJlc0NvbnNlbnQ6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+O1xufVxuaW50ZXJmYWNlIElPbmVTaWduYWxOb3RpZmljYXRpb25zIHtcblx0c2V0RGVmYXVsdFVybCh1cmw6IHN0cmluZyk6IFByb21pc2U8dm9pZD47XG5cdHNldERlZmF1bHRUaXRsZSh0aXRsZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPjtcblx0aXNQdXNoU3VwcG9ydGVkKCk6IGJvb2xlYW47XG5cdGdldFBlcm1pc3Npb25TdGF0dXMob25Db21wbGV0ZTogQWN0aW9uPE5vdGlmaWNhdGlvblBlcm1pc3Npb24+KTogUHJvbWlzZTxOb3RpZmljYXRpb25QZXJtaXNzaW9uPjtcblx0cmVxdWVzdFBlcm1pc3Npb24oKTogUHJvbWlzZTx2b2lkPjtcblx0YWRkRXZlbnRMaXN0ZW5lcihldmVudDogTm90aWZpY2F0aW9uRXZlbnROYW1lLCBsaXN0ZW5lcjogKG9iajogYW55KSA9PiB2b2lkKTogdm9pZDtcblx0cmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudDogTm90aWZpY2F0aW9uRXZlbnROYW1lLCBsaXN0ZW5lcjogKG9iajogYW55KSA9PiB2b2lkKTogdm9pZDtcbn1cbmludGVyZmFjZSBJT25lU2lnbmFsU2xpZGVkb3duIHtcblx0cHJvbXB0UHVzaChvcHRpb25zPzogQXV0b1Byb21wdE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+O1xuXHRwcm9tcHRQdXNoQ2F0ZWdvcmllcyhvcHRpb25zPzogQXV0b1Byb21wdE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+O1xuXHRwcm9tcHRTbXMob3B0aW9ucz86IEF1dG9Qcm9tcHRPcHRpb25zKTogUHJvbWlzZTx2b2lkPjtcblx0cHJvbXB0RW1haWwob3B0aW9ucz86IEF1dG9Qcm9tcHRPcHRpb25zKTogUHJvbWlzZTx2b2lkPjtcblx0cHJvbXB0U21zQW5kRW1haWwob3B0aW9ucz86IEF1dG9Qcm9tcHRPcHRpb25zKTogUHJvbWlzZTx2b2lkPjtcblx0YWRkRXZlbnRMaXN0ZW5lcihldmVudDogU2xpZGVkb3duRXZlbnROYW1lLCBsaXN0ZW5lcjogKHdhc1Nob3duOiBib29sZWFuKSA9PiB2b2lkKTogdm9pZDtcblx0cmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudDogU2xpZGVkb3duRXZlbnROYW1lLCBsaXN0ZW5lcjogKHdhc1Nob3duOiBib29sZWFuKSA9PiB2b2lkKTogdm9pZDtcbn1cbmludGVyZmFjZSBJT25lU2lnbmFsRGVidWcge1xuXHRzZXRMb2dMZXZlbChsb2dMZXZlbDogc3RyaW5nKTogdm9pZDtcbn1cbmludGVyZmFjZSBJT25lU2lnbmFsU2Vzc2lvbiB7XG5cdHNlbmRPdXRjb21lKG91dGNvbWVOYW1lOiBzdHJpbmcsIG91dGNvbWVXZWlnaHQ/OiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+O1xuXHRzZW5kVW5pcXVlT3V0Y29tZShvdXRjb21lTmFtZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPjtcbn1cbmludGVyZmFjZSBJT25lU2lnbmFsVXNlciB7XG5cdFB1c2hTdWJzY3JpcHRpb246IElPbmVTaWduYWxQdXNoU3Vic2NyaXB0aW9uO1xuXHRhZGRBbGlhcyhsYWJlbDogc3RyaW5nLCBpZDogc3RyaW5nKTogdm9pZDtcblx0YWRkQWxpYXNlcyhhbGlhc2VzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KTogdm9pZDtcblx0cmVtb3ZlQWxpYXMobGFiZWw6IHN0cmluZyk6IHZvaWQ7XG5cdHJlbW92ZUFsaWFzZXMobGFiZWxzOiBzdHJpbmdbXSk6IHZvaWQ7XG5cdGFkZEVtYWlsKGVtYWlsOiBzdHJpbmcpOiB2b2lkO1xuXHRyZW1vdmVFbWFpbChlbWFpbDogc3RyaW5nKTogdm9pZDtcblx0YWRkU21zKHNtc051bWJlcjogc3RyaW5nKTogdm9pZDtcblx0cmVtb3ZlU21zKHNtc051bWJlcjogc3RyaW5nKTogdm9pZDtcblx0YWRkVGFnKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZDtcblx0YWRkVGFncyh0YWdzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KTogdm9pZDtcblx0cmVtb3ZlVGFnKGtleTogc3RyaW5nKTogdm9pZDtcblx0cmVtb3ZlVGFncyhrZXlzOiBzdHJpbmdbXSk6IHZvaWQ7XG59XG5pbnRlcmZhY2UgSU9uZVNpZ25hbFB1c2hTdWJzY3JpcHRpb24ge1xuXHRpZDogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZDtcblx0dG9rZW46IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQ7XG5cdG9wdGVkSW46IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cdG9wdEluKCk6IFByb21pc2U8dm9pZD47XG5cdG9wdE91dCgpOiBQcm9taXNlPHZvaWQ+O1xuXHRhZGRFdmVudExpc3RlbmVyKGV2ZW50OiAnc3Vic2NyaXB0aW9uQ2hhbmdlJywgbGlzdGVuZXI6IChjaGFuZ2U6IFN1YnNjcmlwdGlvbkNoYW5nZUV2ZW50KSA9PiB2b2lkKTogdm9pZDtcblx0cmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudDogJ3N1YnNjcmlwdGlvbkNoYW5nZScsIGxpc3RlbmVyOiAoY2hhbmdlOiBTdWJzY3JpcHRpb25DaGFuZ2VFdmVudCkgPT4gdm9pZCk6IHZvaWQ7XG59XG5cbmZ1bmN0aW9uIG9uZVNpZ25hbExvZ2luKGV4dGVybmFsSWQ6IHN0cmluZywgand0VG9rZW4/OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgIHJlamVjdCgpO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgICBvbmVTaWduYWwubG9naW4oZXh0ZXJuYWxJZCwgand0VG9rZW4pXG4gICAgICAgIC50aGVuKCh2YWx1ZTogYW55KSA9PiByZXNvbHZlKHZhbHVlKSlcbiAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gb25lU2lnbmFsTG9nb3V0KCk6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KCk7XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5sb2dvdXQoKVxuICAgICAgICAudGhlbigodmFsdWU6IGFueSkgPT4gcmVzb2x2ZSh2YWx1ZSkpXG4gICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiByZWplY3QoZXJyb3IpKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG9uZVNpZ25hbFNldENvbnNlbnRHaXZlbihjb25zZW50OiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaWYgKGlzT25lU2lnbmFsU2NyaXB0RmFpbGVkKSB7XG4gICAgICByZWplY3QoKTtcbiAgICB9XG5cbiAgICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgICAgb25lU2lnbmFsLnNldENvbnNlbnRHaXZlbihjb25zZW50KVxuICAgICAgICAudGhlbigodmFsdWU6IGFueSkgPT4gcmVzb2x2ZSh2YWx1ZSkpXG4gICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiByZWplY3QoZXJyb3IpKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG9uZVNpZ25hbFNldENvbnNlbnRSZXF1aXJlZChyZXF1aXJlc0NvbnNlbnQ6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgIHJlamVjdCgpO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgICBvbmVTaWduYWwuc2V0Q29uc2VudFJlcXVpcmVkKHJlcXVpcmVzQ29uc2VudClcbiAgICAgICAgLnRoZW4oKHZhbHVlOiBhbnkpID0+IHJlc29sdmUodmFsdWUpKVxuICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzbGlkZWRvd25Qcm9tcHRQdXNoKG9wdGlvbnM/OiBBdXRvUHJvbXB0T3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KCk7XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5TbGlkZWRvd24ucHJvbXB0UHVzaChvcHRpb25zKVxuICAgICAgICAudGhlbigodmFsdWU6IGFueSkgPT4gcmVzb2x2ZSh2YWx1ZSkpXG4gICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiByZWplY3QoZXJyb3IpKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNsaWRlZG93blByb21wdFB1c2hDYXRlZ29yaWVzKG9wdGlvbnM/OiBBdXRvUHJvbXB0T3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KCk7XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5TbGlkZWRvd24ucHJvbXB0UHVzaENhdGVnb3JpZXMob3B0aW9ucylcbiAgICAgICAgLnRoZW4oKHZhbHVlOiBhbnkpID0+IHJlc29sdmUodmFsdWUpKVxuICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzbGlkZWRvd25Qcm9tcHRTbXMob3B0aW9ucz86IEF1dG9Qcm9tcHRPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaWYgKGlzT25lU2lnbmFsU2NyaXB0RmFpbGVkKSB7XG4gICAgICByZWplY3QoKTtcbiAgICB9XG5cbiAgICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgICAgb25lU2lnbmFsLlNsaWRlZG93bi5wcm9tcHRTbXMob3B0aW9ucylcbiAgICAgICAgLnRoZW4oKHZhbHVlOiBhbnkpID0+IHJlc29sdmUodmFsdWUpKVxuICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzbGlkZWRvd25Qcm9tcHRFbWFpbChvcHRpb25zPzogQXV0b1Byb21wdE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgIHJlamVjdCgpO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgICBvbmVTaWduYWwuU2xpZGVkb3duLnByb21wdEVtYWlsKG9wdGlvbnMpXG4gICAgICAgIC50aGVuKCh2YWx1ZTogYW55KSA9PiByZXNvbHZlKHZhbHVlKSlcbiAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc2xpZGVkb3duUHJvbXB0U21zQW5kRW1haWwob3B0aW9ucz86IEF1dG9Qcm9tcHRPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaWYgKGlzT25lU2lnbmFsU2NyaXB0RmFpbGVkKSB7XG4gICAgICByZWplY3QoKTtcbiAgICB9XG5cbiAgICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgICAgb25lU2lnbmFsLlNsaWRlZG93bi5wcm9tcHRTbXNBbmRFbWFpbChvcHRpb25zKVxuICAgICAgICAudGhlbigodmFsdWU6IGFueSkgPT4gcmVzb2x2ZSh2YWx1ZSkpXG4gICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiByZWplY3QoZXJyb3IpKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNsaWRlZG93bkFkZEV2ZW50TGlzdGVuZXIoZXZlbnQ6IFNsaWRlZG93bkV2ZW50TmFtZSwgbGlzdGVuZXI6ICh3YXNTaG93bjogYm9vbGVhbikgPT4gdm9pZCk6IHZvaWQge1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIG9uZVNpZ25hbC5TbGlkZWRvd24uYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc2xpZGVkb3duUmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudDogU2xpZGVkb3duRXZlbnROYW1lLCBsaXN0ZW5lcjogKHdhc1Nob3duOiBib29sZWFuKSA9PiB2b2lkKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlNsaWRlZG93bi5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBub3RpZmljYXRpb25zU2V0RGVmYXVsdFVybCh1cmw6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KCk7XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5Ob3RpZmljYXRpb25zLnNldERlZmF1bHRVcmwodXJsKVxuICAgICAgICAudGhlbigodmFsdWU6IGFueSkgPT4gcmVzb2x2ZSh2YWx1ZSkpXG4gICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiByZWplY3QoZXJyb3IpKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG5vdGlmaWNhdGlvbnNTZXREZWZhdWx0VGl0bGUodGl0bGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KCk7XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5Ob3RpZmljYXRpb25zLnNldERlZmF1bHRUaXRsZSh0aXRsZSlcbiAgICAgICAgLnRoZW4oKHZhbHVlOiBhbnkpID0+IHJlc29sdmUodmFsdWUpKVxuICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBub3RpZmljYXRpb25zR2V0UGVybWlzc2lvblN0YXR1cyhvbkNvbXBsZXRlOiBBY3Rpb248Tm90aWZpY2F0aW9uUGVybWlzc2lvbj4pOiBQcm9taXNlPE5vdGlmaWNhdGlvblBlcm1pc3Npb24+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgIHJlamVjdCgpO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgICBvbmVTaWduYWwuTm90aWZpY2F0aW9ucy5nZXRQZXJtaXNzaW9uU3RhdHVzKG9uQ29tcGxldGUpXG4gICAgICAgIC50aGVuKCh2YWx1ZTogYW55KSA9PiByZXNvbHZlKHZhbHVlKSlcbiAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbm90aWZpY2F0aW9uc1JlcXVlc3RQZXJtaXNzaW9uKCk6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KCk7XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5Ob3RpZmljYXRpb25zLnJlcXVlc3RQZXJtaXNzaW9uKClcbiAgICAgICAgLnRoZW4oKHZhbHVlOiBhbnkpID0+IHJlc29sdmUodmFsdWUpKVxuICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBub3RpZmljYXRpb25zQWRkRXZlbnRMaXN0ZW5lcihldmVudDogJ2NsaWNrJyB8ICd3aWxsRGlzcGxheScgfCAnZGlzbWlzcycsIGxpc3RlbmVyOiAob2JqOiBTdHJ1Y3R1cmVkTm90aWZpY2F0aW9uKSA9PiB2b2lkKTogdm9pZDtcbmZ1bmN0aW9uIG5vdGlmaWNhdGlvbnNBZGRFdmVudExpc3RlbmVyKGV2ZW50OiAncGVybWlzc2lvbkNoYW5nZScsIGxpc3RlbmVyOiAob2JqOiB7IHRvOiBOb3RpZmljYXRpb25QZXJtaXNzaW9uIH0pID0+IHZvaWQpOiB2b2lkO1xuZnVuY3Rpb24gbm90aWZpY2F0aW9uc0FkZEV2ZW50TGlzdGVuZXIoZXZlbnQ6ICdwZXJtaXNzaW9uUHJvbXB0RGlzcGxheScsIGxpc3RlbmVyOiAoKSA9PiB2b2lkKTogdm9pZDtcblxuZnVuY3Rpb24gbm90aWZpY2F0aW9uc0FkZEV2ZW50TGlzdGVuZXIoZXZlbnQ6IE5vdGlmaWNhdGlvbkV2ZW50TmFtZSwgbGlzdGVuZXI6IChvYmo6IGFueSkgPT4gdm9pZCk6IHZvaWQge1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIG9uZVNpZ25hbC5Ob3RpZmljYXRpb25zLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG5vdGlmaWNhdGlvbnNSZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50OiAnY2xpY2snIHwgJ3dpbGxEaXNwbGF5JyB8ICdkaXNtaXNzJywgbGlzdGVuZXI6IChvYmo6IFN0cnVjdHVyZWROb3RpZmljYXRpb24pID0+IHZvaWQpOiB2b2lkO1xuZnVuY3Rpb24gbm90aWZpY2F0aW9uc1JlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQ6ICdwZXJtaXNzaW9uQ2hhbmdlJywgbGlzdGVuZXI6IChvYmo6IHsgdG86IE5vdGlmaWNhdGlvblBlcm1pc3Npb24gfSkgPT4gdm9pZCk6IHZvaWQ7XG5mdW5jdGlvbiBub3RpZmljYXRpb25zUmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudDogJ3Blcm1pc3Npb25Qcm9tcHREaXNwbGF5JywgbGlzdGVuZXI6ICgpID0+IHZvaWQpOiB2b2lkO1xuXG5mdW5jdGlvbiBub3RpZmljYXRpb25zUmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudDogTm90aWZpY2F0aW9uRXZlbnROYW1lLCBsaXN0ZW5lcjogKG9iajogYW55KSA9PiB2b2lkKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLk5vdGlmaWNhdGlvbnMucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc2Vzc2lvblNlbmRPdXRjb21lKG91dGNvbWVOYW1lOiBzdHJpbmcsIG91dGNvbWVXZWlnaHQ/OiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgIHJlamVjdCgpO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgICBvbmVTaWduYWwuU2Vzc2lvbi5zZW5kT3V0Y29tZShvdXRjb21lTmFtZSwgb3V0Y29tZVdlaWdodClcbiAgICAgICAgLnRoZW4oKHZhbHVlOiBhbnkpID0+IHJlc29sdmUodmFsdWUpKVxuICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzZXNzaW9uU2VuZFVuaXF1ZU91dGNvbWUob3V0Y29tZU5hbWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KCk7XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5TZXNzaW9uLnNlbmRVbmlxdWVPdXRjb21lKG91dGNvbWVOYW1lKVxuICAgICAgICAudGhlbigodmFsdWU6IGFueSkgPT4gcmVzb2x2ZSh2YWx1ZSkpXG4gICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiByZWplY3QoZXJyb3IpKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVzZXJBZGRBbGlhcyhsYWJlbDogc3RyaW5nLCBpZDogc3RyaW5nKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIuYWRkQWxpYXMobGFiZWwsIGlkKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVzZXJBZGRBbGlhc2VzKGFsaWFzZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuVXNlci5hZGRBbGlhc2VzKGFsaWFzZXMpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXNlclJlbW92ZUFsaWFzKGxhYmVsOiBzdHJpbmcpOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuVXNlci5yZW1vdmVBbGlhcyhsYWJlbCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1c2VyUmVtb3ZlQWxpYXNlcyhsYWJlbHM6IHN0cmluZ1tdKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIucmVtb3ZlQWxpYXNlcyhsYWJlbHMpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXNlckFkZEVtYWlsKGVtYWlsOiBzdHJpbmcpOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuVXNlci5hZGRFbWFpbChlbWFpbCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1c2VyUmVtb3ZlRW1haWwoZW1haWw6IHN0cmluZyk6IHZvaWQge1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIG9uZVNpZ25hbC5Vc2VyLnJlbW92ZUVtYWlsKGVtYWlsKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVzZXJBZGRTbXMoc21zTnVtYmVyOiBzdHJpbmcpOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuVXNlci5hZGRTbXMoc21zTnVtYmVyKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVzZXJSZW1vdmVTbXMoc21zTnVtYmVyOiBzdHJpbmcpOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuVXNlci5yZW1vdmVTbXMoc21zTnVtYmVyKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVzZXJBZGRUYWcoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuVXNlci5hZGRUYWcoa2V5LCB2YWx1ZSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1c2VyQWRkVGFncyh0YWdzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIuYWRkVGFncyh0YWdzKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVzZXJSZW1vdmVUYWcoa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuVXNlci5yZW1vdmVUYWcoa2V5KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVzZXJSZW1vdmVUYWdzKGtleXM6IHN0cmluZ1tdKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIucmVtb3ZlVGFncyhrZXlzKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHB1c2hTdWJzY3JpcHRpb25PcHRJbigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgIHJlamVjdCgpO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgICBvbmVTaWduYWwuVXNlci5QdXNoU3Vic2NyaXB0aW9uLm9wdEluKClcbiAgICAgICAgLnRoZW4oKHZhbHVlOiBhbnkpID0+IHJlc29sdmUodmFsdWUpKVxuICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBwdXNoU3Vic2NyaXB0aW9uT3B0T3V0KCk6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KCk7XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5Vc2VyLlB1c2hTdWJzY3JpcHRpb24ub3B0T3V0KClcbiAgICAgICAgLnRoZW4oKHZhbHVlOiBhbnkpID0+IHJlc29sdmUodmFsdWUpKVxuICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBwdXNoU3Vic2NyaXB0aW9uQWRkRXZlbnRMaXN0ZW5lcihldmVudDogJ3N1YnNjcmlwdGlvbkNoYW5nZScsIGxpc3RlbmVyOiAoY2hhbmdlOiBTdWJzY3JpcHRpb25DaGFuZ2VFdmVudCkgPT4gdm9pZCk6IHZvaWQge1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIG9uZVNpZ25hbC5Vc2VyLlB1c2hTdWJzY3JpcHRpb24uYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcHVzaFN1YnNjcmlwdGlvblJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQ6ICdzdWJzY3JpcHRpb25DaGFuZ2UnLCBsaXN0ZW5lcjogKGNoYW5nZTogU3Vic2NyaXB0aW9uQ2hhbmdlRXZlbnQpID0+IHZvaWQpOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuVXNlci5QdXNoU3Vic2NyaXB0aW9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRlYnVnU2V0TG9nTGV2ZWwobG9nTGV2ZWw6IHN0cmluZyk6IHZvaWQge1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIG9uZVNpZ25hbC5EZWJ1Zy5zZXRMb2dMZXZlbChsb2dMZXZlbCk7XG4gIH0pO1xufVxuXG5jb25zdCBQdXNoU3Vic2NyaXB0aW9uTmFtZXNwYWNlOiBJT25lU2lnbmFsUHVzaFN1YnNjcmlwdGlvbiA9IHtcblx0Z2V0IGlkKCk6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQgeyByZXR1cm4gd2luZG93Lk9uZVNpZ25hbD8uVXNlcj8uUHVzaFN1YnNjcmlwdGlvbj8uaWQgfSxcblx0Z2V0IHRva2VuKCk6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQgeyByZXR1cm4gd2luZG93Lk9uZVNpZ25hbD8uVXNlcj8uUHVzaFN1YnNjcmlwdGlvbj8udG9rZW4gfSxcblx0Z2V0IG9wdGVkSW4oKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7IHJldHVybiB3aW5kb3cuT25lU2lnbmFsPy5Vc2VyPy5QdXNoU3Vic2NyaXB0aW9uPy5vcHRlZEluIH0sXG5cdG9wdEluOiBwdXNoU3Vic2NyaXB0aW9uT3B0SW4sXG5cdG9wdE91dDogcHVzaFN1YnNjcmlwdGlvbk9wdE91dCxcblx0YWRkRXZlbnRMaXN0ZW5lcjogcHVzaFN1YnNjcmlwdGlvbkFkZEV2ZW50TGlzdGVuZXIsXG5cdHJlbW92ZUV2ZW50TGlzdGVuZXI6IHB1c2hTdWJzY3JpcHRpb25SZW1vdmVFdmVudExpc3RlbmVyLFxufTtcblxuY29uc3QgVXNlck5hbWVzcGFjZTogSU9uZVNpZ25hbFVzZXIgPSB7XG5cdGFkZEFsaWFzOiB1c2VyQWRkQWxpYXMsXG5cdGFkZEFsaWFzZXM6IHVzZXJBZGRBbGlhc2VzLFxuXHRyZW1vdmVBbGlhczogdXNlclJlbW92ZUFsaWFzLFxuXHRyZW1vdmVBbGlhc2VzOiB1c2VyUmVtb3ZlQWxpYXNlcyxcblx0YWRkRW1haWw6IHVzZXJBZGRFbWFpbCxcblx0cmVtb3ZlRW1haWw6IHVzZXJSZW1vdmVFbWFpbCxcblx0YWRkU21zOiB1c2VyQWRkU21zLFxuXHRyZW1vdmVTbXM6IHVzZXJSZW1vdmVTbXMsXG5cdGFkZFRhZzogdXNlckFkZFRhZyxcblx0YWRkVGFnczogdXNlckFkZFRhZ3MsXG5cdHJlbW92ZVRhZzogdXNlclJlbW92ZVRhZyxcblx0cmVtb3ZlVGFnczogdXNlclJlbW92ZVRhZ3MsXG5cdFB1c2hTdWJzY3JpcHRpb246IFB1c2hTdWJzY3JpcHRpb25OYW1lc3BhY2UsXG59O1xuXG5jb25zdCBTZXNzaW9uTmFtZXNwYWNlOiBJT25lU2lnbmFsU2Vzc2lvbiA9IHtcblx0c2VuZE91dGNvbWU6IHNlc3Npb25TZW5kT3V0Y29tZSxcblx0c2VuZFVuaXF1ZU91dGNvbWU6IHNlc3Npb25TZW5kVW5pcXVlT3V0Y29tZSxcbn07XG5cbmNvbnN0IERlYnVnTmFtZXNwYWNlOiBJT25lU2lnbmFsRGVidWcgPSB7XG5cdHNldExvZ0xldmVsOiBkZWJ1Z1NldExvZ0xldmVsLFxufTtcblxuY29uc3QgU2xpZGVkb3duTmFtZXNwYWNlOiBJT25lU2lnbmFsU2xpZGVkb3duID0ge1xuXHRwcm9tcHRQdXNoOiBzbGlkZWRvd25Qcm9tcHRQdXNoLFxuXHRwcm9tcHRQdXNoQ2F0ZWdvcmllczogc2xpZGVkb3duUHJvbXB0UHVzaENhdGVnb3JpZXMsXG5cdHByb21wdFNtczogc2xpZGVkb3duUHJvbXB0U21zLFxuXHRwcm9tcHRFbWFpbDogc2xpZGVkb3duUHJvbXB0RW1haWwsXG5cdHByb21wdFNtc0FuZEVtYWlsOiBzbGlkZWRvd25Qcm9tcHRTbXNBbmRFbWFpbCxcblx0YWRkRXZlbnRMaXN0ZW5lcjogc2xpZGVkb3duQWRkRXZlbnRMaXN0ZW5lcixcblx0cmVtb3ZlRXZlbnRMaXN0ZW5lcjogc2xpZGVkb3duUmVtb3ZlRXZlbnRMaXN0ZW5lcixcbn07XG5cbmNvbnN0IE5vdGlmaWNhdGlvbnNOYW1lc3BhY2U6IElPbmVTaWduYWxOb3RpZmljYXRpb25zID0ge1xuXHRzZXREZWZhdWx0VXJsOiBub3RpZmljYXRpb25zU2V0RGVmYXVsdFVybCxcblx0c2V0RGVmYXVsdFRpdGxlOiBub3RpZmljYXRpb25zU2V0RGVmYXVsdFRpdGxlLFxuXHRpc1B1c2hTdXBwb3J0ZWQsXG5cdGdldFBlcm1pc3Npb25TdGF0dXM6IG5vdGlmaWNhdGlvbnNHZXRQZXJtaXNzaW9uU3RhdHVzLFxuXHRyZXF1ZXN0UGVybWlzc2lvbjogbm90aWZpY2F0aW9uc1JlcXVlc3RQZXJtaXNzaW9uLFxuXHRhZGRFdmVudExpc3RlbmVyOiBub3RpZmljYXRpb25zQWRkRXZlbnRMaXN0ZW5lcixcblx0cmVtb3ZlRXZlbnRMaXN0ZW5lcjogbm90aWZpY2F0aW9uc1JlbW92ZUV2ZW50TGlzdGVuZXIsXG59O1xuXG4vKipcbiAqIEBQdWJsaWNBcGlcbiAqL1xuZnVuY3Rpb24gaXNQdXNoU3VwcG9ydGVkKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gaXNQdXNoTm90aWZpY2F0aW9uc1N1cHBvcnRlZCgpO1xufVxuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5jb25zdCBPTkVTSUdOQUxfU0RLX0lEID0gJ29uZXNpZ25hbC1zZGsnO1xuY29uc3QgT05FX1NJR05BTF9TQ1JJUFRfU1JDID0gJ2h0dHBzOi8vY2RuLm9uZXNpZ25hbC5jb20vc2Rrcy93ZWIvdjE2L09uZVNpZ25hbFNESy5wYWdlLmpzJztcblxuLy8gdHJ1ZSBpZiB0aGUgc2NyaXB0IGlzIHN1Y2Nlc3NmdWxseSBsb2FkZWQgZnJvbSBDRE4uXG5sZXQgaXNPbmVTaWduYWxJbml0aWFsaXplZCA9IGZhbHNlO1xuLy8gdHJ1ZSBpZiB0aGUgc2NyaXB0IGZhaWxzIHRvIGxvYWQgZnJvbSBDRE4uIEEgc2VwYXJhdGUgZmxhZyBpcyBuZWNlc3Nhcnlcbi8vIHRvIGRpc2FtYmlndWF0ZSBiZXR3ZWVuIGEgQ0ROIGxvYWQgZmFpbHVyZSBhbmQgYSBkZWxheWVkIGNhbGwgdG9cbi8vIE9uZVNpZ25hbCNpbml0LlxubGV0IGlzT25lU2lnbmFsU2NyaXB0RmFpbGVkID0gZmFsc2U7XG5cbmlmICh3aW5kb3cpIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkID0gd2luZG93Lk9uZVNpZ25hbERlZmVycmVkIHx8IFtdO1xuICBhZGRTREtTY3JpcHQoKTtcbn1cblxuLyoqXG4gKiBUaGUgZm9sbG93aW5nIGNvZGUgaXMgY29waWVkIGRpcmVjdGx5IGZyb20gdGhlIG5hdGl2ZSBTREsgc291cmNlIGZpbGUgQnJvd3NlclN1cHBvcnRzUHVzaC50c1xuICogUyBUIEEgUiBUXG4gKi9cblxuLy8gQ2hlY2tzIGlmIHRoZSBicm93c2VyIHN1cHBvcnRzIHB1c2ggbm90aWZpY2F0aW9ucyBieSBjaGVja2luZyBpZiBzcGVjaWZpY1xuLy8gICBjbGFzc2VzIGFuZCBwcm9wZXJ0aWVzIG9uIHRoZW0gZXhpc3RcbmZ1bmN0aW9uIGlzUHVzaE5vdGlmaWNhdGlvbnNTdXBwb3J0ZWQoKTogYm9vbGVhbiB7XG4gIHJldHVybiBzdXBwb3J0c1ZhcGlkUHVzaCgpIHx8IHN1cHBvcnRzU2FmYXJpUHVzaCgpO1xufVxuXG5mdW5jdGlvbiBpc01hY09TU2FmYXJpSW5JZnJhbWUoKTogYm9vbGVhbiB7XG4gIC8vIEZhbGxiYWNrIGRldGVjdGlvbiBmb3IgU2FmYXJpIG9uIG1hY09TIGluIGFuIGlmcmFtZSBjb250ZXh0XG4gIHJldHVybiB3aW5kb3cudG9wICE9PSB3aW5kb3cgJiYgLy8gaXNDb250ZXh0SWZyYW1lXG4gIG5hdmlnYXRvci52ZW5kb3IgPT09ICdBcHBsZSBDb21wdXRlciwgSW5jLicgJiYgLy8gaXNTYWZhcmlcbiAgbmF2aWdhdG9yLnBsYXRmb3JtID09PSAnTWFjSW50ZWwnOyAvLyBpc01hY09TXG59XG5cbmZ1bmN0aW9uIHN1cHBvcnRzU2FmYXJpUHVzaCgpOiBib29sZWFuIHtcbiAgcmV0dXJuICh3aW5kb3cuc2FmYXJpICYmIHR5cGVvZiB3aW5kb3cuc2FmYXJpLnB1c2hOb3RpZmljYXRpb24gIT09ICd1bmRlZmluZWQnKSB8fFxuICAgICAgICAgIGlzTWFjT1NTYWZhcmlJbklmcmFtZSgpO1xufVxuXG4vLyBEb2VzIHRoZSBicm93c2VyIHN1cHBvcnQgdGhlIHN0YW5kYXJkIFB1c2ggQVBJXG5mdW5jdGlvbiBzdXBwb3J0c1ZhcGlkUHVzaCgpOiBib29sZWFuIHtcbiAgcmV0dXJuIHR5cGVvZiBQdXNoU3Vic2NyaXB0aW9uT3B0aW9ucyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgUHVzaFN1YnNjcmlwdGlvbk9wdGlvbnMucHJvdG90eXBlLmhhc093blByb3BlcnR5KCdhcHBsaWNhdGlvblNlcnZlcktleScpO1xufVxuLyogRSBOIEQgKi9cblxuZnVuY3Rpb24gaGFuZGxlT25FcnJvcigpOiB2b2lkIHtcbiAgaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQgPSB0cnVlO1xufVxuXG5mdW5jdGlvbiBhZGRTREtTY3JpcHQoKTogdm9pZCB7XG4gIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICBzY3JpcHQuaWQgPSBPTkVTSUdOQUxfU0RLX0lEO1xuICBzY3JpcHQuZGVmZXIgPSB0cnVlO1xuICBzY3JpcHQuc3JjID0gT05FX1NJR05BTF9TQ1JJUFRfU1JDO1xuXG4gIC8vIEFsd2F5cyByZXNvbHZlIHdoZXRoZXIgb3Igbm90IHRoZSBzY3JpcHQgaXMgc3VjY2Vzc2Z1bGx5IGluaXRpYWxpemVkLlxuICAvLyBUaGlzIGlzIGltcG9ydGFudCBmb3IgdXNlcnMgd2hvIG1heSBibG9jayBjZG4ub25lc2lnbmFsLmNvbSB3LyBhZGJsb2NrLlxuICBzY3JpcHQub25lcnJvciA9ICgpID0+IHtcbiAgICBoYW5kbGVPbkVycm9yKCk7XG4gIH07XG5cbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xufVxuXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgT25lU2lnbmFsRGVmZXJyZWQ/OiBPbmVTaWduYWxEZWZlcnJlZExvYWRlZENhbGxiYWNrW107XG4gICAgT25lU2lnbmFsPzogSU9uZVNpZ25hbE9uZVNpZ25hbDtcbiAgICBzYWZhcmk/OiB7XG4gICAgICBwdXNoTm90aWZpY2F0aW9uOiBhbnk7XG4gICAgfTtcbiAgfVxufVxuXG5pbnRlcmZhY2UgSU9uZVNpZ25hbE9uZVNpZ25hbCB7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgT25lU2lnbmFsIGltcGxlbWVudHMgSU9uZVNpZ25hbE9uZVNpZ25hbCB7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIC8qIFAgVSBCIEwgSSBDICovXG5cbiAgLyoqXG4gICAqIEBQdWJsaWNBcGlcbiAgICovXG4gIGluaXQob3B0aW9uczogSUluaXRPYmplY3QpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAoaXNPbmVTaWduYWxJbml0aWFsaXplZCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGBPbmVTaWduYWwgaXMgYWxyZWFkeSBpbml0aWFsaXplZC5gKTtcbiAgICB9XG5cbiAgICBpZiAoIW9wdGlvbnMgfHwgIW9wdGlvbnMuYXBwSWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignWW91IG5lZWQgdG8gcHJvdmlkZSB5b3VyIE9uZVNpZ25hbCBhcHBJZC4nKTtcbiAgICB9XG5cbiAgICBpZiAoIWRvY3VtZW50KSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoYERvY3VtZW50IGlzIG5vdCBkZWZpbmVkLmApO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4ge1xuICAgICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgICAgb25lU2lnbmFsLmluaXQob3B0aW9ucykudGhlbigoKSA9PiB7XG4gICAgICAgICAgaXNPbmVTaWduYWxJbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cblx0VXNlciA9IFVzZXJOYW1lc3BhY2U7XG5cdFNlc3Npb24gPSBTZXNzaW9uTmFtZXNwYWNlO1xuXHREZWJ1ZyA9IERlYnVnTmFtZXNwYWNlO1xuXHRTbGlkZWRvd24gPSBTbGlkZWRvd25OYW1lc3BhY2U7XG5cdE5vdGlmaWNhdGlvbnMgPSBOb3RpZmljYXRpb25zTmFtZXNwYWNlO1xuXHRsb2dpbiA9IG9uZVNpZ25hbExvZ2luO1xuXHRsb2dvdXQgPSBvbmVTaWduYWxMb2dvdXQ7XG5cdHNldENvbnNlbnRHaXZlbiA9IG9uZVNpZ25hbFNldENvbnNlbnRHaXZlbjtcblx0c2V0Q29uc2VudFJlcXVpcmVkID0gb25lU2lnbmFsU2V0Q29uc2VudFJlcXVpcmVkO1xufVxuIl19