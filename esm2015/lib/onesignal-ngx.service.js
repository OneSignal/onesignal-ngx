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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25lc2lnbmFsLW5neC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvb25lc2lnbmFsLW5neC9zcmMvbGliL29uZXNpZ25hbC1uZ3guc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RkEsU0FBUyxjQUFjLENBQUMsVUFBa0IsRUFBRSxRQUFpQjtJQUMzRCxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFOztRQUNyQyxJQUFJLHVCQUF1QixFQUFFO1lBQzNCLE1BQU0sRUFBRSxDQUFDO1NBQ1Y7UUFFRCxNQUFBLE1BQU0sQ0FBQyxpQkFBaUIsMENBQUUsSUFBSSxDQUFDLENBQUMsU0FBOEIsRUFBRSxFQUFFO1lBQ2hFLFNBQVMsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQztpQkFDbEMsSUFBSSxDQUFDLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3BDLEtBQUssQ0FBQyxDQUFDLEtBQVksRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxFQUFFO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBRUQsU0FBUyxlQUFlO0lBQ3RCLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7O1FBQ3JDLElBQUksdUJBQXVCLEVBQUU7WUFDM0IsTUFBTSxFQUFFLENBQUM7U0FDVjtRQUVELE1BQUEsTUFBTSxDQUFDLGlCQUFpQiwwQ0FBRSxJQUFJLENBQUMsQ0FBQyxTQUE4QixFQUFFLEVBQUU7WUFDaEUsU0FBUyxDQUFDLE1BQU0sRUFBRTtpQkFDZixJQUFJLENBQUMsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDcEMsS0FBSyxDQUFD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QztRQUMzQyx1QkFBa0IsR0FBRywyQkFBMkIsQ0FBQztJQXRDaEMsQ0FBQztJQUVqQixpQkFBaUI7SUFFakI7O09BRUc7SUFDSCxJQUFJLENBQUMsT0FBb0I7UUFDdkIsSUFBSSxzQkFBc0IsRUFBRTtZQUMxQixPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsbUNBQW1DLENBQUMsQ0FBQztTQUM1RDtRQUVELElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFO1lBQzlCLE1BQU0sSUFBSSxLQUFLLENBQUMsMkNBQTJDLENBQUMsQ0FBQztTQUM5RDtRQUVELElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDYixPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsMEJBQTBCLENBQUMsQ0FBQztTQUNuRDtRQUVELE9BQU8sSUFBSSxPQUFPLENBQU8sQ0FBQyxPQUFPLEVBQUUsRUFBRTs7WUFDbkMsTUFBQSxNQUFNLENBQUMsaUJBQWlCLDBDQUFFLElBQUksQ0FBQyxDQUFDLFNBQThCLEVBQUUsRUFBRTtnQkFDaEUsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO29CQUNoQyxzQkFBc0IsR0FBRyxJQUFJLENBQUM7b0JBQzlCLE9BQU8sRUFBRSxDQUFDO2dCQUNaLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxFQUFFO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7O1lBbENGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbInR5cGUgQWN0aW9uPFQ+ID0gKGl0ZW06IFQpID0+IHZvaWQ7XG5pbnRlcmZhY2UgQXV0b1Byb21wdE9wdGlvbnMgeyBmb3JjZT86IGJvb2xlYW47IGZvcmNlU2xpZGVkb3duT3Zlck5hdGl2ZT86IGJvb2xlYW47IHNsaWRlZG93blByb21wdE9wdGlvbnM/OiBJT25lU2lnbmFsQXV0b1Byb21wdE9wdGlvbnM7IH1cbmludGVyZmFjZSBJT25lU2lnbmFsQXV0b1Byb21wdE9wdGlvbnMgeyBmb3JjZT86IGJvb2xlYW47IGZvcmNlU2xpZGVkb3duT3Zlck5hdGl2ZT86IGJvb2xlYW47IGlzSW5VcGRhdGVNb2RlPzogYm9vbGVhbjsgY2F0ZWdvcnlPcHRpb25zPzogSU9uZVNpZ25hbENhdGVnb3JpZXM7IH1cbmludGVyZmFjZSBJT25lU2lnbmFsQ2F0ZWdvcmllcyB7IHBvc2l0aXZlVXBkYXRlQnV0dG9uOiBzdHJpbmc7IG5lZ2F0aXZlVXBkYXRlQnV0dG9uOiBzdHJpbmc7IHNhdmluZ0J1dHRvblRleHQ6IHN0cmluZzsgZXJyb3JCdXR0b25UZXh0OiBzdHJpbmc7IHVwZGF0ZU1lc3NhZ2U6IHN0cmluZzsgdGFnczogSU9uZVNpZ25hbFRhZ0NhdGVnb3J5W107IH1cbmludGVyZmFjZSBJT25lU2lnbmFsVGFnQ2F0ZWdvcnkgeyB0YWc6IHN0cmluZzsgbGFiZWw6IHN0cmluZzsgY2hlY2tlZD86IGJvb2xlYW47IH1cbnR5cGUgUHVzaFN1YnNjcmlwdGlvbk5hbWVzcGFjZVByb3BlcnRpZXMgPSB7IGlkOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkOyB0b2tlbjogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZDsgb3B0ZWRJbjogYm9vbGVhbjsgfTtcbnR5cGUgU3Vic2NyaXB0aW9uQ2hhbmdlRXZlbnQgPSB7IHByZXZpb3VzOiBQdXNoU3Vic2NyaXB0aW9uTmFtZXNwYWNlUHJvcGVydGllczsgY3VycmVudDogUHVzaFN1YnNjcmlwdGlvbk5hbWVzcGFjZVByb3BlcnRpZXM7IH07XG50eXBlIE5vdGlmaWNhdGlvbkV2ZW50TmFtZSA9ICdjbGljaycgfCAnd2lsbERpc3BsYXknIHwgJ2Rpc21pc3MnIHwgJ3Blcm1pc3Npb25DaGFuZ2UnIHwgJ3Blcm1pc3Npb25Qcm9tcHREaXNwbGF5JztcbmludGVyZmFjZSBOb3RpZmljYXRpb25CdXR0b25EYXRhIHsgYWN0aW9uPzogc3RyaW5nOyB0aXRsZT86IHN0cmluZzsgaWNvbj86IHN0cmluZzsgdXJsPzogc3RyaW5nOyB9XG5pbnRlcmZhY2UgU3RydWN0dXJlZE5vdGlmaWNhdGlvbiB7IGlkOiBzdHJpbmc7IGNvbnRlbnQ6IHN0cmluZzsgaGVhZGluZz86IHN0cmluZzsgdXJsPzogc3RyaW5nOyBkYXRhPzogb2JqZWN0OyBycj86IHN0cmluZzsgaWNvbj86IHN0cmluZzsgaW1hZ2U/OiBzdHJpbmc7IHRhZz86IHN0cmluZzsgYmFkZ2U/OiBzdHJpbmc7IHZpYnJhdGU/OiBzdHJpbmc7IGJ1dHRvbnM/OiBOb3RpZmljYXRpb25CdXR0b25EYXRhW107IH1cbnR5cGUgU2xpZGVkb3duRXZlbnROYW1lID0gJ3NsaWRlZG93blNob3duJztcbnR5cGUgT25lU2lnbmFsRGVmZXJyZWRMb2FkZWRDYWxsYmFjayA9IChvbmVzaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHZvaWQ7XG5cbmludGVyZmFjZSBJSW5pdE9iamVjdCB7XG4gIGFwcElkOiBzdHJpbmc7XG4gIHN1YmRvbWFpbk5hbWU/OiBzdHJpbmc7XG4gIHJlcXVpcmVzVXNlclByaXZhY3lDb25zZW50PzogYm9vbGVhbjtcbiAgcHJvbXB0T3B0aW9ucz86IG9iamVjdDtcbiAgd2VsY29tZU5vdGlmaWNhdGlvbj86IG9iamVjdDtcbiAgbm90aWZ5QnV0dG9uPzogb2JqZWN0O1xuICBwZXJzaXN0Tm90aWZpY2F0aW9uPzogYm9vbGVhbjtcbiAgd2ViaG9va3M/OiBvYmplY3Q7XG4gIGF1dG9SZXN1YnNjcmliZT86IGJvb2xlYW47XG4gIGF1dG9SZWdpc3Rlcj86IGJvb2xlYW47XG4gIG5vdGlmaWNhdGlvbkNsaWNrSGFuZGxlck1hdGNoPzogc3RyaW5nO1xuICBub3RpZmljYXRpb25DbGlja0hhbmRsZXJBY3Rpb24/OiBzdHJpbmc7XG4gIHNlcnZpY2VXb3JrZXJQYXJhbT86IHsgc2NvcGU6IHN0cmluZyB9O1xuICBzZXJ2aWNlV29ya2VyUGF0aD86IHN0cmluZztcbiAgc2VydmljZVdvcmtlclVwZGF0ZXJQYXRoPzogc3RyaW5nO1xuICBwYXRoPzogc3RyaW5nO1xuICBhbGxvd0xvY2FsaG9zdEFzU2VjdXJlT3JpZ2luPzogYm9vbGVhbjtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5pbnRlcmZhY2UgSU9uZVNpZ25hbE9uZVNpZ25hbCB7XG5cdFNsaWRlZG93bjogSU9uZVNpZ25hbFNsaWRlZG93bjtcblx0Tm90aWZpY2F0aW9uczogSU9uZVNpZ25hbE5vdGlmaWNhdGlvbnM7XG5cdFNlc3Npb246IElPbmVTaWduYWxTZXNzaW9uO1xuXHRVc2VyOiBJT25lU2lnbmFsVXNlcjtcblx0RGVidWc6IElPbmVTaWduYWxEZWJ1Zztcblx0bG9naW4oZXh0ZXJuYWxJZDogc3RyaW5nLCBqd3RUb2tlbj86IHN0cmluZyk6IFByb21pc2U8dm9pZD47XG5cdGxvZ291dCgpOiBQcm9taXNlPHZvaWQ+O1xuXHRpbml0KG9wdGlvbnM6IElJbml0T2JqZWN0KTogUHJvbWlzZTx2b2lkPjtcblx0c2V0Q29uc2VudEdpdmVuKGNvbnNlbnQ6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+O1xuXHRzZXRDb25zZW50UmVxdWlyZWQocmVxdWlyZXNDb25zZW50OiBib29sZWFuKTogUHJvbWlzZTx2b2lkPjtcbn1cbmludGVyZmFjZSBJT25lU2lnbmFsTm90aWZpY2F0aW9ucyB7XG5cdHNldERlZmF1bHRVcmwodXJsOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+O1xuXHRzZXREZWZhdWx0VGl0bGUodGl0bGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD47XG5cdGlzUHVzaFN1cHBvcnRlZCgpOiBib29sZWFuO1xuXHRnZXRQZXJtaXNzaW9uU3RhdHVzKG9uQ29tcGxldGU6IEFjdGlvbjxOb3RpZmljYXRpb25QZXJtaXNzaW9uPik6IFByb21pc2U8Tm90aWZpY2F0aW9uUGVybWlzc2lvbj47XG5cdHJlcXVlc3RQZXJtaXNzaW9uKCk6IFByb21pc2U8dm9pZD47XG5cdGFkZEV2ZW50TGlzdGVuZXIoZXZlbnQ6IE5vdGlmaWNhdGlvbkV2ZW50TmFtZSwgbGlzdGVuZXI6IChvYmo6IGFueSkgPT4gdm9pZCk6IHZvaWQ7XG5cdHJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQ6IE5vdGlmaWNhdGlvbkV2ZW50TmFtZSwgbGlzdGVuZXI6IChvYmo6IGFueSkgPT4gdm9pZCk6IHZvaWQ7XG59XG5pbnRlcmZhY2UgSU9uZVNpZ25hbFNsaWRlZG93biB7XG5cdHByb21wdFB1c2gob3B0aW9ucz86IEF1dG9Qcm9tcHRPcHRpb25zKTogUHJvbWlzZTx2b2lkPjtcblx0cHJvbXB0UHVzaENhdGVnb3JpZXMob3B0aW9ucz86IEF1dG9Qcm9tcHRPcHRpb25zKTogUHJvbWlzZTx2b2lkPjtcblx0cHJvbXB0U21zKG9wdGlvbnM/OiBBdXRvUHJvbXB0T3B0aW9ucyk6IFByb21pc2U8dm9pZD47XG5cdHByb21wdEVtYWlsKG9wdGlvbnM/OiBBdXRvUHJvbXB0T3B0aW9ucyk6IFByb21pc2U8dm9pZD47XG5cdHByb21wdFNtc0FuZEVtYWlsKG9wdGlvbnM/OiBBdXRvUHJvbXB0T3B0aW9ucyk6IFByb21pc2U8dm9pZD47XG5cdGFkZEV2ZW50TGlzdGVuZXIoZXZlbnQ6IFNsaWRlZG93bkV2ZW50TmFtZSwgbGlzdGVuZXI6ICh3YXNTaG93bjogYm9vbGVhbikgPT4gdm9pZCk6IHZvaWQ7XG5cdHJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQ6IFNsaWRlZG93bkV2ZW50TmFtZSwgbGlzdGVuZXI6ICh3YXNTaG93bjogYm9vbGVhbikgPT4gdm9pZCk6IHZvaWQ7XG59XG5pbnRlcmZhY2UgSU9uZVNpZ25hbERlYnVnIHtcblx0c2V0TG9nTGV2ZWwobG9nTGV2ZWw6IHN0cmluZyk6IHZvaWQ7XG59XG5pbnRlcmZhY2UgSU9uZVNpZ25hbFNlc3Npb24ge1xuXHRzZW5kT3V0Y29tZShvdXRjb21lTmFtZTogc3RyaW5nLCBvdXRjb21lV2VpZ2h0PzogbnVtYmVyKTogUHJvbWlzZTx2b2lkPjtcblx0c2VuZFVuaXF1ZU91dGNvbWUob3V0Y29tZU5hbWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD47XG59XG5pbnRlcmZhY2UgSU9uZVNpZ25hbFVzZXIge1xuXHRQdXNoU3Vic2NyaXB0aW9uOiBJT25lU2lnbmFsUHVzaFN1YnNjcmlwdGlvbjtcblx0YWRkQWxpYXMobGFiZWw6IHN0cmluZywgaWQ6IHN0cmluZyk6IHZvaWQ7XG5cdGFkZEFsaWFzZXMoYWxpYXNlczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSk6IHZvaWQ7XG5cdHJlbW92ZUFsaWFzKGxhYmVsOiBzdHJpbmcpOiB2b2lkO1xuXHRyZW1vdmVBbGlhc2VzKGxhYmVsczogc3RyaW5nW10pOiB2b2lkO1xuXHRhZGRFbWFpbChlbWFpbDogc3RyaW5nKTogdm9pZDtcblx0cmVtb3ZlRW1haWwoZW1haWw6IHN0cmluZyk6IHZvaWQ7XG5cdGFkZFNtcyhzbXNOdW1iZXI6IHN0cmluZyk6IHZvaWQ7XG5cdHJlbW92ZVNtcyhzbXNOdW1iZXI6IHN0cmluZyk6IHZvaWQ7XG59XG5pbnRlcmZhY2UgSU9uZVNpZ25hbFB1c2hTdWJzY3JpcHRpb24ge1xuXHRvcHRJbigpOiBQcm9taXNlPHZvaWQ+O1xuXHRvcHRPdXQoKTogUHJvbWlzZTx2b2lkPjtcblx0YWRkRXZlbnRMaXN0ZW5lcihldmVudDogJ3N1YnNjcmlwdGlvbkNoYW5nZScsIGxpc3RlbmVyOiAoY2hhbmdlOiBTdWJzY3JpcHRpb25DaGFuZ2VFdmVudCkgPT4gdm9pZCk6IHZvaWQ7XG5cdHJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQ6ICdzdWJzY3JpcHRpb25DaGFuZ2UnLCBsaXN0ZW5lcjogKGNoYW5nZTogU3Vic2NyaXB0aW9uQ2hhbmdlRXZlbnQpID0+IHZvaWQpOiB2b2lkO1xufVxuXG5mdW5jdGlvbiBvbmVTaWduYWxMb2dpbihleHRlcm5hbElkOiBzdHJpbmcsIGp3dFRva2VuPzogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaWYgKGlzT25lU2lnbmFsU2NyaXB0RmFpbGVkKSB7XG4gICAgICByZWplY3QoKTtcbiAgICB9XG5cbiAgICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgICAgb25lU2lnbmFsLmxvZ2luKGV4dGVybmFsSWQsIGp3dFRva2VuKVxuICAgICAgICAudGhlbigodmFsdWU6IGFueSkgPT4gcmVzb2x2ZSh2YWx1ZSkpXG4gICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiByZWplY3QoZXJyb3IpKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG9uZVNpZ25hbExvZ291dCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgIHJlamVjdCgpO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgICBvbmVTaWduYWwubG9nb3V0KClcbiAgICAgICAgLnRoZW4oKHZhbHVlOiBhbnkpID0+IHJlc29sdmUodmFsdWUpKVxuICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBvbmVTaWduYWxTZXRDb25zZW50R2l2ZW4oY29uc2VudDogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KCk7XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5zZXRDb25zZW50R2l2ZW4oY29uc2VudClcbiAgICAgICAgLnRoZW4oKHZhbHVlOiBhbnkpID0+IHJlc29sdmUodmFsdWUpKVxuICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBvbmVTaWduYWxTZXRDb25zZW50UmVxdWlyZWQocmVxdWlyZXNDb25zZW50OiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaWYgKGlzT25lU2lnbmFsU2NyaXB0RmFpbGVkKSB7XG4gICAgICByZWplY3QoKTtcbiAgICB9XG5cbiAgICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgICAgb25lU2lnbmFsLnNldENvbnNlbnRSZXF1aXJlZChyZXF1aXJlc0NvbnNlbnQpXG4gICAgICAgIC50aGVuKCh2YWx1ZTogYW55KSA9PiByZXNvbHZlKHZhbHVlKSlcbiAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc2xpZGVkb3duUHJvbXB0UHVzaChvcHRpb25zPzogQXV0b1Byb21wdE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgIHJlamVjdCgpO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgICBvbmVTaWduYWwuU2xpZGVkb3duLnByb21wdFB1c2gob3B0aW9ucylcbiAgICAgICAgLnRoZW4oKHZhbHVlOiBhbnkpID0+IHJlc29sdmUodmFsdWUpKVxuICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzbGlkZWRvd25Qcm9tcHRQdXNoQ2F0ZWdvcmllcyhvcHRpb25zPzogQXV0b1Byb21wdE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgIHJlamVjdCgpO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgICBvbmVTaWduYWwuU2xpZGVkb3duLnByb21wdFB1c2hDYXRlZ29yaWVzKG9wdGlvbnMpXG4gICAgICAgIC50aGVuKCh2YWx1ZTogYW55KSA9PiByZXNvbHZlKHZhbHVlKSlcbiAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc2xpZGVkb3duUHJvbXB0U21zKG9wdGlvbnM/OiBBdXRvUHJvbXB0T3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KCk7XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5TbGlkZWRvd24ucHJvbXB0U21zKG9wdGlvbnMpXG4gICAgICAgIC50aGVuKCh2YWx1ZTogYW55KSA9PiByZXNvbHZlKHZhbHVlKSlcbiAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc2xpZGVkb3duUHJvbXB0RW1haWwob3B0aW9ucz86IEF1dG9Qcm9tcHRPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaWYgKGlzT25lU2lnbmFsU2NyaXB0RmFpbGVkKSB7XG4gICAgICByZWplY3QoKTtcbiAgICB9XG5cbiAgICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgICAgb25lU2lnbmFsLlNsaWRlZG93bi5wcm9tcHRFbWFpbChvcHRpb25zKVxuICAgICAgICAudGhlbigodmFsdWU6IGFueSkgPT4gcmVzb2x2ZSh2YWx1ZSkpXG4gICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiByZWplY3QoZXJyb3IpKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNsaWRlZG93blByb21wdFNtc0FuZEVtYWlsKG9wdGlvbnM/OiBBdXRvUHJvbXB0T3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgcmVqZWN0KCk7XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5TbGlkZWRvd24ucHJvbXB0U21zQW5kRW1haWwob3B0aW9ucylcbiAgICAgICAgLnRoZW4oKHZhbHVlOiBhbnkpID0+IHJlc29sdmUodmFsdWUpKVxuICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzbGlkZWRvd25BZGRFdmVudExpc3RlbmVyKGV2ZW50OiBTbGlkZWRvd25FdmVudE5hbWUsIGxpc3RlbmVyOiAod2FzU2hvd246IGJvb2xlYW4pID0+IHZvaWQpOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuU2xpZGVkb3duLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNsaWRlZG93blJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQ6IFNsaWRlZG93bkV2ZW50TmFtZSwgbGlzdGVuZXI6ICh3YXNTaG93bjogYm9vbGVhbikgPT4gdm9pZCk6IHZvaWQge1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIG9uZVNpZ25hbC5TbGlkZWRvd24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbm90aWZpY2F0aW9uc1NldERlZmF1bHRVcmwodXJsOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgIHJlamVjdCgpO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgICBvbmVTaWduYWwuTm90aWZpY2F0aW9ucy5zZXREZWZhdWx0VXJsKHVybClcbiAgICAgICAgLnRoZW4oKHZhbHVlOiBhbnkpID0+IHJlc29sdmUodmFsdWUpKVxuICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBub3RpZmljYXRpb25zU2V0RGVmYXVsdFRpdGxlKHRpdGxlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgIHJlamVjdCgpO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgICBvbmVTaWduYWwuTm90aWZpY2F0aW9ucy5zZXREZWZhdWx0VGl0bGUodGl0bGUpXG4gICAgICAgIC50aGVuKCh2YWx1ZTogYW55KSA9PiByZXNvbHZlKHZhbHVlKSlcbiAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbm90aWZpY2F0aW9uc0dldFBlcm1pc3Npb25TdGF0dXMob25Db21wbGV0ZTogQWN0aW9uPE5vdGlmaWNhdGlvblBlcm1pc3Npb24+KTogUHJvbWlzZTxOb3RpZmljYXRpb25QZXJtaXNzaW9uPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaWYgKGlzT25lU2lnbmFsU2NyaXB0RmFpbGVkKSB7XG4gICAgICByZWplY3QoKTtcbiAgICB9XG5cbiAgICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgICAgb25lU2lnbmFsLk5vdGlmaWNhdGlvbnMuZ2V0UGVybWlzc2lvblN0YXR1cyhvbkNvbXBsZXRlKVxuICAgICAgICAudGhlbigodmFsdWU6IGFueSkgPT4gcmVzb2x2ZSh2YWx1ZSkpXG4gICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiByZWplY3QoZXJyb3IpKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG5vdGlmaWNhdGlvbnNSZXF1ZXN0UGVybWlzc2lvbigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgIHJlamVjdCgpO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgICBvbmVTaWduYWwuTm90aWZpY2F0aW9ucy5yZXF1ZXN0UGVybWlzc2lvbigpXG4gICAgICAgIC50aGVuKCh2YWx1ZTogYW55KSA9PiByZXNvbHZlKHZhbHVlKSlcbiAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbm90aWZpY2F0aW9uc0FkZEV2ZW50TGlzdGVuZXIoZXZlbnQ6ICdjbGljaycgfCAnd2lsbERpc3BsYXknIHwgJ2Rpc21pc3MnLCBsaXN0ZW5lcjogKG9iajogU3RydWN0dXJlZE5vdGlmaWNhdGlvbikgPT4gdm9pZCk6IHZvaWQ7XG5mdW5jdGlvbiBub3RpZmljYXRpb25zQWRkRXZlbnRMaXN0ZW5lcihldmVudDogJ3Blcm1pc3Npb25DaGFuZ2UnLCBsaXN0ZW5lcjogKG9iajogeyB0bzogTm90aWZpY2F0aW9uUGVybWlzc2lvbiB9KSA9PiB2b2lkKTogdm9pZDtcbmZ1bmN0aW9uIG5vdGlmaWNhdGlvbnNBZGRFdmVudExpc3RlbmVyKGV2ZW50OiAncGVybWlzc2lvblByb21wdERpc3BsYXknLCBsaXN0ZW5lcjogKCkgPT4gdm9pZCk6IHZvaWQ7XG5cbmZ1bmN0aW9uIG5vdGlmaWNhdGlvbnNBZGRFdmVudExpc3RlbmVyKGV2ZW50OiBOb3RpZmljYXRpb25FdmVudE5hbWUsIGxpc3RlbmVyOiAob2JqOiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuTm90aWZpY2F0aW9ucy5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBub3RpZmljYXRpb25zUmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudDogJ2NsaWNrJyB8ICd3aWxsRGlzcGxheScgfCAnZGlzbWlzcycsIGxpc3RlbmVyOiAob2JqOiBTdHJ1Y3R1cmVkTm90aWZpY2F0aW9uKSA9PiB2b2lkKTogdm9pZDtcbmZ1bmN0aW9uIG5vdGlmaWNhdGlvbnNSZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50OiAncGVybWlzc2lvbkNoYW5nZScsIGxpc3RlbmVyOiAob2JqOiB7IHRvOiBOb3RpZmljYXRpb25QZXJtaXNzaW9uIH0pID0+IHZvaWQpOiB2b2lkO1xuZnVuY3Rpb24gbm90aWZpY2F0aW9uc1JlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQ6ICdwZXJtaXNzaW9uUHJvbXB0RGlzcGxheScsIGxpc3RlbmVyOiAoKSA9PiB2b2lkKTogdm9pZDtcblxuZnVuY3Rpb24gbm90aWZpY2F0aW9uc1JlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQ6IE5vdGlmaWNhdGlvbkV2ZW50TmFtZSwgbGlzdGVuZXI6IChvYmo6IGFueSkgPT4gdm9pZCk6IHZvaWQge1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIG9uZVNpZ25hbC5Ob3RpZmljYXRpb25zLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNlc3Npb25TZW5kT3V0Y29tZShvdXRjb21lTmFtZTogc3RyaW5nLCBvdXRjb21lV2VpZ2h0PzogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaWYgKGlzT25lU2lnbmFsU2NyaXB0RmFpbGVkKSB7XG4gICAgICByZWplY3QoKTtcbiAgICB9XG5cbiAgICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgICAgb25lU2lnbmFsLlNlc3Npb24uc2VuZE91dGNvbWUob3V0Y29tZU5hbWUsIG91dGNvbWVXZWlnaHQpXG4gICAgICAgIC50aGVuKCh2YWx1ZTogYW55KSA9PiByZXNvbHZlKHZhbHVlKSlcbiAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc2Vzc2lvblNlbmRVbmlxdWVPdXRjb21lKG91dGNvbWVOYW1lOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgIHJlamVjdCgpO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgICBvbmVTaWduYWwuU2Vzc2lvbi5zZW5kVW5pcXVlT3V0Y29tZShvdXRjb21lTmFtZSlcbiAgICAgICAgLnRoZW4oKHZhbHVlOiBhbnkpID0+IHJlc29sdmUodmFsdWUpKVxuICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1c2VyQWRkQWxpYXMobGFiZWw6IHN0cmluZywgaWQ6IHN0cmluZyk6IHZvaWQge1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIG9uZVNpZ25hbC5Vc2VyLmFkZEFsaWFzKGxhYmVsLCBpZCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1c2VyQWRkQWxpYXNlcyhhbGlhc2VzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIuYWRkQWxpYXNlcyhhbGlhc2VzKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVzZXJSZW1vdmVBbGlhcyhsYWJlbDogc3RyaW5nKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIucmVtb3ZlQWxpYXMobGFiZWwpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXNlclJlbW92ZUFsaWFzZXMobGFiZWxzOiBzdHJpbmdbXSk6IHZvaWQge1xuICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgIG9uZVNpZ25hbC5Vc2VyLnJlbW92ZUFsaWFzZXMobGFiZWxzKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVzZXJBZGRFbWFpbChlbWFpbDogc3RyaW5nKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIuYWRkRW1haWwoZW1haWwpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXNlclJlbW92ZUVtYWlsKGVtYWlsOiBzdHJpbmcpOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuVXNlci5yZW1vdmVFbWFpbChlbWFpbCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1c2VyQWRkU21zKHNtc051bWJlcjogc3RyaW5nKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIuYWRkU21zKHNtc051bWJlcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1c2VyUmVtb3ZlU21zKHNtc051bWJlcjogc3RyaW5nKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIucmVtb3ZlU21zKHNtc051bWJlcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBwdXNoU3Vic2NyaXB0aW9uT3B0SW4oKTogUHJvbWlzZTx2b2lkPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaWYgKGlzT25lU2lnbmFsU2NyaXB0RmFpbGVkKSB7XG4gICAgICByZWplY3QoKTtcbiAgICB9XG5cbiAgICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgICAgb25lU2lnbmFsLlVzZXIuUHVzaFN1YnNjcmlwdGlvbi5vcHRJbigpXG4gICAgICAgIC50aGVuKCh2YWx1ZTogYW55KSA9PiByZXNvbHZlKHZhbHVlKSlcbiAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcHVzaFN1YnNjcmlwdGlvbk9wdE91dCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgIHJlamVjdCgpO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgICBvbmVTaWduYWwuVXNlci5QdXNoU3Vic2NyaXB0aW9uLm9wdE91dCgpXG4gICAgICAgIC50aGVuKCh2YWx1ZTogYW55KSA9PiByZXNvbHZlKHZhbHVlKSlcbiAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcHVzaFN1YnNjcmlwdGlvbkFkZEV2ZW50TGlzdGVuZXIoZXZlbnQ6ICdzdWJzY3JpcHRpb25DaGFuZ2UnLCBsaXN0ZW5lcjogKGNoYW5nZTogU3Vic2NyaXB0aW9uQ2hhbmdlRXZlbnQpID0+IHZvaWQpOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuVXNlci5QdXNoU3Vic2NyaXB0aW9uLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHB1c2hTdWJzY3JpcHRpb25SZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50OiAnc3Vic2NyaXB0aW9uQ2hhbmdlJywgbGlzdGVuZXI6IChjaGFuZ2U6IFN1YnNjcmlwdGlvbkNoYW5nZUV2ZW50KSA9PiB2b2lkKTogdm9pZCB7XG4gIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZD8ucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsT25lU2lnbmFsKSA9PiB7XG4gICAgb25lU2lnbmFsLlVzZXIuUHVzaFN1YnNjcmlwdGlvbi5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkZWJ1Z1NldExvZ0xldmVsKGxvZ0xldmVsOiBzdHJpbmcpOiB2b2lkIHtcbiAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkPy5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWxPbmVTaWduYWwpID0+IHtcbiAgICBvbmVTaWduYWwuRGVidWcuc2V0TG9nTGV2ZWwobG9nTGV2ZWwpO1xuICB9KTtcbn1cblxuY29uc3QgUHVzaFN1YnNjcmlwdGlvbk5hbWVzcGFjZTogSU9uZVNpZ25hbFB1c2hTdWJzY3JpcHRpb24gPSB7XG5cdG9wdEluOiBwdXNoU3Vic2NyaXB0aW9uT3B0SW4sXG5cdG9wdE91dDogcHVzaFN1YnNjcmlwdGlvbk9wdE91dCxcblx0YWRkRXZlbnRMaXN0ZW5lcjogcHVzaFN1YnNjcmlwdGlvbkFkZEV2ZW50TGlzdGVuZXIsXG5cdHJlbW92ZUV2ZW50TGlzdGVuZXI6IHB1c2hTdWJzY3JpcHRpb25SZW1vdmVFdmVudExpc3RlbmVyLFxufTtcblxuY29uc3QgVXNlck5hbWVzcGFjZTogSU9uZVNpZ25hbFVzZXIgPSB7XG5cdGFkZEFsaWFzOiB1c2VyQWRkQWxpYXMsXG5cdGFkZEFsaWFzZXM6IHVzZXJBZGRBbGlhc2VzLFxuXHRyZW1vdmVBbGlhczogdXNlclJlbW92ZUFsaWFzLFxuXHRyZW1vdmVBbGlhc2VzOiB1c2VyUmVtb3ZlQWxpYXNlcyxcblx0YWRkRW1haWw6IHVzZXJBZGRFbWFpbCxcblx0cmVtb3ZlRW1haWw6IHVzZXJSZW1vdmVFbWFpbCxcblx0YWRkU21zOiB1c2VyQWRkU21zLFxuXHRyZW1vdmVTbXM6IHVzZXJSZW1vdmVTbXMsXG5cdFB1c2hTdWJzY3JpcHRpb246IFB1c2hTdWJzY3JpcHRpb25OYW1lc3BhY2UsXG59O1xuXG5jb25zdCBTZXNzaW9uTmFtZXNwYWNlOiBJT25lU2lnbmFsU2Vzc2lvbiA9IHtcblx0c2VuZE91dGNvbWU6IHNlc3Npb25TZW5kT3V0Y29tZSxcblx0c2VuZFVuaXF1ZU91dGNvbWU6IHNlc3Npb25TZW5kVW5pcXVlT3V0Y29tZSxcbn07XG5cbmNvbnN0IERlYnVnTmFtZXNwYWNlOiBJT25lU2lnbmFsRGVidWcgPSB7XG5cdHNldExvZ0xldmVsOiBkZWJ1Z1NldExvZ0xldmVsLFxufTtcblxuY29uc3QgU2xpZGVkb3duTmFtZXNwYWNlOiBJT25lU2lnbmFsU2xpZGVkb3duID0ge1xuXHRwcm9tcHRQdXNoOiBzbGlkZWRvd25Qcm9tcHRQdXNoLFxuXHRwcm9tcHRQdXNoQ2F0ZWdvcmllczogc2xpZGVkb3duUHJvbXB0UHVzaENhdGVnb3JpZXMsXG5cdHByb21wdFNtczogc2xpZGVkb3duUHJvbXB0U21zLFxuXHRwcm9tcHRFbWFpbDogc2xpZGVkb3duUHJvbXB0RW1haWwsXG5cdHByb21wdFNtc0FuZEVtYWlsOiBzbGlkZWRvd25Qcm9tcHRTbXNBbmRFbWFpbCxcblx0YWRkRXZlbnRMaXN0ZW5lcjogc2xpZGVkb3duQWRkRXZlbnRMaXN0ZW5lcixcblx0cmVtb3ZlRXZlbnRMaXN0ZW5lcjogc2xpZGVkb3duUmVtb3ZlRXZlbnRMaXN0ZW5lcixcbn07XG5cbmNvbnN0IE5vdGlmaWNhdGlvbnNOYW1lc3BhY2U6IElPbmVTaWduYWxOb3RpZmljYXRpb25zID0ge1xuXHRzZXREZWZhdWx0VXJsOiBub3RpZmljYXRpb25zU2V0RGVmYXVsdFVybCxcblx0c2V0RGVmYXVsdFRpdGxlOiBub3RpZmljYXRpb25zU2V0RGVmYXVsdFRpdGxlLFxuXHRpc1B1c2hTdXBwb3J0ZWQsXG5cdGdldFBlcm1pc3Npb25TdGF0dXM6IG5vdGlmaWNhdGlvbnNHZXRQZXJtaXNzaW9uU3RhdHVzLFxuXHRyZXF1ZXN0UGVybWlzc2lvbjogbm90aWZpY2F0aW9uc1JlcXVlc3RQZXJtaXNzaW9uLFxuXHRhZGRFdmVudExpc3RlbmVyOiBub3RpZmljYXRpb25zQWRkRXZlbnRMaXN0ZW5lcixcblx0cmVtb3ZlRXZlbnRMaXN0ZW5lcjogbm90aWZpY2F0aW9uc1JlbW92ZUV2ZW50TGlzdGVuZXIsXG59O1xuXG4vKipcbiAqIEBQdWJsaWNBcGlcbiAqL1xuZnVuY3Rpb24gaXNQdXNoU3VwcG9ydGVkKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gaXNQdXNoTm90aWZpY2F0aW9uc1N1cHBvcnRlZCgpO1xufVxuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5jb25zdCBPTkVTSUdOQUxfU0RLX0lEID0gJ29uZXNpZ25hbC1zZGsnO1xuY29uc3QgT05FX1NJR05BTF9TQ1JJUFRfU1JDID0gJ2h0dHBzOi8vY2RuLm9uZXNpZ25hbC5jb20vc2Rrcy93ZWIvdjE2L09uZVNpZ25hbFNESy5wYWdlLmpzJztcblxuLy8gdHJ1ZSBpZiB0aGUgc2NyaXB0IGlzIHN1Y2Nlc3NmdWxseSBsb2FkZWQgZnJvbSBDRE4uXG5sZXQgaXNPbmVTaWduYWxJbml0aWFsaXplZCA9IGZhbHNlO1xuLy8gdHJ1ZSBpZiB0aGUgc2NyaXB0IGZhaWxzIHRvIGxvYWQgZnJvbSBDRE4uIEEgc2VwYXJhdGUgZmxhZyBpcyBuZWNlc3Nhcnlcbi8vIHRvIGRpc2FtYmlndWF0ZSBiZXR3ZWVuIGEgQ0ROIGxvYWQgZmFpbHVyZSBhbmQgYSBkZWxheWVkIGNhbGwgdG9cbi8vIE9uZVNpZ25hbCNpbml0LlxubGV0IGlzT25lU2lnbmFsU2NyaXB0RmFpbGVkID0gZmFsc2U7XG5cbndpbmRvdy5PbmVTaWduYWxEZWZlcnJlZCA9IHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZCB8fCBbXTtcblxuYWRkU0RLU2NyaXB0KCk7XG5cbi8qKlxuICogVGhlIGZvbGxvd2luZyBjb2RlIGlzIGNvcGllZCBkaXJlY3RseSBmcm9tIHRoZSBuYXRpdmUgU0RLIHNvdXJjZSBmaWxlIEJyb3dzZXJTdXBwb3J0c1B1c2gudHNcbiAqIFMgVCBBIFIgVFxuICovXG5cbi8vIENoZWNrcyBpZiB0aGUgYnJvd3NlciBzdXBwb3J0cyBwdXNoIG5vdGlmaWNhdGlvbnMgYnkgY2hlY2tpbmcgaWYgc3BlY2lmaWNcbi8vICAgY2xhc3NlcyBhbmQgcHJvcGVydGllcyBvbiB0aGVtIGV4aXN0XG5mdW5jdGlvbiBpc1B1c2hOb3RpZmljYXRpb25zU3VwcG9ydGVkKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gc3VwcG9ydHNWYXBpZFB1c2goKSB8fCBzdXBwb3J0c1NhZmFyaVB1c2goKTtcbn1cblxuZnVuY3Rpb24gaXNNYWNPU1NhZmFyaUluSWZyYW1lKCk6IGJvb2xlYW4ge1xuICAvLyBGYWxsYmFjayBkZXRlY3Rpb24gZm9yIFNhZmFyaSBvbiBtYWNPUyBpbiBhbiBpZnJhbWUgY29udGV4dFxuICByZXR1cm4gd2luZG93LnRvcCAhPT0gd2luZG93ICYmIC8vIGlzQ29udGV4dElmcmFtZVxuICBuYXZpZ2F0b3IudmVuZG9yID09PSAnQXBwbGUgQ29tcHV0ZXIsIEluYy4nICYmIC8vIGlzU2FmYXJpXG4gIG5hdmlnYXRvci5wbGF0Zm9ybSA9PT0gJ01hY0ludGVsJzsgLy8gaXNNYWNPU1xufVxuXG5mdW5jdGlvbiBzdXBwb3J0c1NhZmFyaVB1c2goKTogYm9vbGVhbiB7XG4gIHJldHVybiAod2luZG93LnNhZmFyaSAmJiB0eXBlb2Ygd2luZG93LnNhZmFyaS5wdXNoTm90aWZpY2F0aW9uICE9PSAndW5kZWZpbmVkJykgfHxcbiAgICAgICAgICBpc01hY09TU2FmYXJpSW5JZnJhbWUoKTtcbn1cblxuLy8gRG9lcyB0aGUgYnJvd3NlciBzdXBwb3J0IHRoZSBzdGFuZGFyZCBQdXNoIEFQSVxuZnVuY3Rpb24gc3VwcG9ydHNWYXBpZFB1c2goKTogYm9vbGVhbiB7XG4gIHJldHVybiB0eXBlb2YgUHVzaFN1YnNjcmlwdGlvbk9wdGlvbnMgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIFB1c2hTdWJzY3JpcHRpb25PcHRpb25zLnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSgnYXBwbGljYXRpb25TZXJ2ZXJLZXknKTtcbn1cbi8qIEUgTiBEICovXG5cbmZ1bmN0aW9uIGhhbmRsZU9uRXJyb3IoKTogdm9pZCB7XG4gIGlzT25lU2lnbmFsU2NyaXB0RmFpbGVkID0gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gYWRkU0RLU2NyaXB0KCk6IHZvaWQge1xuICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgc2NyaXB0LmlkID0gT05FU0lHTkFMX1NES19JRDtcbiAgc2NyaXB0LmRlZmVyID0gdHJ1ZTtcbiAgc2NyaXB0LnNyYyA9IE9ORV9TSUdOQUxfU0NSSVBUX1NSQztcblxuICAvLyBBbHdheXMgcmVzb2x2ZSB3aGV0aGVyIG9yIG5vdCB0aGUgc2NyaXB0IGlzIHN1Y2Nlc3NmdWxseSBpbml0aWFsaXplZC5cbiAgLy8gVGhpcyBpcyBpbXBvcnRhbnQgZm9yIHVzZXJzIHdobyBtYXkgYmxvY2sgY2RuLm9uZXNpZ25hbC5jb20gdy8gYWRibG9jay5cbiAgc2NyaXB0Lm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgaGFuZGxlT25FcnJvcigpO1xuICB9O1xuXG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbn1cblxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIE9uZVNpZ25hbERlZmVycmVkPzogT25lU2lnbmFsRGVmZXJyZWRMb2FkZWRDYWxsYmFja1tdO1xuICAgIHNhZmFyaT86IHtcbiAgICAgIHB1c2hOb3RpZmljYXRpb246IGFueTtcbiAgICB9O1xuICB9XG59XG5cbmludGVyZmFjZSBJT25lU2lnbmFsT25lU2lnbmFsIHtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBPbmVTaWduYWwgaW1wbGVtZW50cyBJT25lU2lnbmFsT25lU2lnbmFsIHtcbiAgW2tleTogc3RyaW5nXTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgLyogUCBVIEIgTCBJIEMgKi9cblxuICAvKipcbiAgICogQFB1YmxpY0FwaVxuICAgKi9cbiAgaW5pdChvcHRpb25zOiBJSW5pdE9iamVjdCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmIChpc09uZVNpZ25hbEluaXRpYWxpemVkKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoYE9uZVNpZ25hbCBpcyBhbHJlYWR5IGluaXRpYWxpemVkLmApO1xuICAgIH1cblxuICAgIGlmICghb3B0aW9ucyB8fCAhb3B0aW9ucy5hcHBJZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbmVlZCB0byBwcm92aWRlIHlvdXIgT25lU2lnbmFsIGFwcElkLicpO1xuICAgIH1cblxuICAgIGlmICghZG9jdW1lbnQpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChgRG9jdW1lbnQgaXMgbm90IGRlZmluZWQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlKSA9PiB7XG4gICAgICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQ/LnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbE9uZVNpZ25hbCkgPT4ge1xuICAgICAgICBvbmVTaWduYWwuaW5pdChvcHRpb25zKS50aGVuKCgpID0+IHtcbiAgICAgICAgICBpc09uZVNpZ25hbEluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuXHRVc2VyID0gVXNlck5hbWVzcGFjZTtcblx0U2Vzc2lvbiA9IFNlc3Npb25OYW1lc3BhY2U7XG5cdERlYnVnID0gRGVidWdOYW1lc3BhY2U7XG5cdFNsaWRlZG93biA9IFNsaWRlZG93bk5hbWVzcGFjZTtcblx0Tm90aWZpY2F0aW9ucyA9IE5vdGlmaWNhdGlvbnNOYW1lc3BhY2U7XG5cdGxvZ2luID0gb25lU2lnbmFsTG9naW47XG5cdGxvZ291dCA9IG9uZVNpZ25hbExvZ291dDtcblx0c2V0Q29uc2VudEdpdmVuID0gb25lU2lnbmFsU2V0Q29uc2VudEdpdmVuO1xuXHRzZXRDb25zZW50UmVxdWlyZWQgPSBvbmVTaWduYWxTZXRDb25zZW50UmVxdWlyZWQ7XG59XG4iXX0=