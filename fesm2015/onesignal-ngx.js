import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

const ONESIGNAL_SDK_ID = 'onesignal-sdk';
const ONE_SIGNAL_SCRIPT_SRC = 'https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js';
// true if the script is successfully loaded from CDN.
let isOneSignalInitialized = false;
// true if the script fails to load from CDN. A separate flag is necessary
// to disambiguate between a CDN load failure and a delayed call to
// OneSignal#init.
let isOneSignalScriptFailed = false;
class OneSignal {
    constructor() {
        this.isOneSignalInitialized = false;
        this.ngOneSignalFunctionQueue = [];
        /* H E L P E R S */
        this.doesOneSignalExist = () => {
            if (window.OneSignalDeferred) {
                return true;
            }
            return false;
        };
        this.processQueuedOneSignalFunctions = () => {
            this.ngOneSignalFunctionQueue.forEach(element => {
                const { name, args, namespaceName, promiseResolver } = element;
                if (!!promiseResolver && !!namespaceName) {
                    this[namespaceName][name](...args).then((result) => {
                        promiseResolver(result);
                    });
                }
                else if (!!namespaceName) {
                    window.OneSignalDeferred[namespaceName][name](...args);
                }
            });
        };
    }
    handleOnLoad(resolve, options) {
        isOneSignalInitialized = true;
        // OneSignal is assumed to be loaded correctly because this method
        // is called after the script is successfully loaded by CDN, but
        // just in case.
        window.OneSignalDeferred = window.OneSignalDeferred || [];
        window.OneSignalDeferred.push((oneSignal) => {
            oneSignal.init(options);
        });
        window.OneSignalDeferred.push(() => {
            this.processQueuedOneSignalFunctions();
            resolve();
        });
    }
    handleOnError(resolve) {
        isOneSignalScriptFailed = true;
        // Ensure that any unresolved functions are cleared from the queue,
        // even in the event of a CDN load failure.
        this.processQueuedOneSignalFunctions();
        resolve();
    }
    /* P U B L I C */
    /**
     * @PublicApi
     */
    init(options) {
        return new Promise(resolve => {
            if (this.isOneSignalInitialized) {
                resolve();
                return;
            }
            if (!options || !options.appId) {
                throw new Error('You need to provide your OneSignal appId.');
            }
            if (!document) {
                resolve();
                return;
            }
            const script = document.createElement('script');
            script.id = ONESIGNAL_SDK_ID;
            script.defer = true;
            script.src = ONE_SIGNAL_SCRIPT_SRC;
            script.onload = () => {
                this.handleOnLoad(resolve, options);
            };
            // Always resolve whether or not the script is successfully initialized.
            // This is important for users who may block cdn.onesignal.com w/ adblock.
            script.onerror = () => {
                this.handleOnError(resolve);
            };
            document.head.appendChild(script);
        });
    }
    /**
     * @PublicApi
     */
    isPushSupported() {
        const supportsVapid = typeof PushSubscriptionOptions !== 'undefined' && PushSubscriptionOptions.prototype.hasOwnProperty('applicationServerKey');
        const isSafariInIframe = navigator.vendor === 'Apple Computer, Inc.' && window.top !== window;
        const supportsSafari = typeof window.safari !== 'undefined' &&
            typeof window.safari.pushNotification !== 'undefined' || isSafariInIframe;
        return supportsVapid || supportsSafari;
    }
    login(externalId, token) {
        return new Promise((resolve, reject) => {
            if (isOneSignalScriptFailed) {
                reject();
            }
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: 'login',
                    namespaceName: '',
                    args: arguments,
                    promiseResolver: resolve,
                });
                return;
            }
            window.OneSignalDeferred.push((oneSignal) => {
                oneSignal.login(externalId, token)
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        });
    }
    logout() {
        return new Promise((resolve, reject) => {
            if (isOneSignalScriptFailed) {
                reject();
            }
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: 'logout',
                    namespaceName: '',
                    args: arguments,
                    promiseResolver: resolve,
                });
                return;
            }
            window.OneSignalDeferred.push((oneSignal) => {
                oneSignal.logout()
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        });
    }
    setConsentGiven(consent) {
        return new Promise((resolve, reject) => {
            if (isOneSignalScriptFailed) {
                reject();
            }
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: 'setConsentGiven',
                    namespaceName: '',
                    args: arguments,
                    promiseResolver: resolve,
                });
                return;
            }
            window.OneSignalDeferred.push((oneSignal) => {
                oneSignal.setConsentGiven(consent)
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        });
    }
    setConsentRequired(requiresConsent) {
        return new Promise((resolve, reject) => {
            if (isOneSignalScriptFailed) {
                reject();
            }
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: 'setConsentRequired',
                    namespaceName: '',
                    args: arguments,
                    promiseResolver: resolve,
                });
                return;
            }
            window.OneSignalDeferred.push((oneSignal) => {
                oneSignal.setConsentRequired(requiresConsent)
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        });
    }
    setDefaultUrl(url) {
        return new Promise((resolve, reject) => {
            if (isOneSignalScriptFailed) {
                reject();
            }
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: 'setDefaultUrl',
                    namespaceName: 'Notifications',
                    args: arguments,
                    promiseResolver: resolve,
                });
                return;
            }
            window.OneSignalDeferred.push((oneSignal) => {
                oneSignal.Notifications.setDefaultUrl(url)
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        });
    }
    setDefaultTitle(title) {
        return new Promise((resolve, reject) => {
            if (isOneSignalScriptFailed) {
                reject();
            }
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: 'setDefaultTitle',
                    namespaceName: 'Notifications',
                    args: arguments,
                    promiseResolver: resolve,
                });
                return;
            }
            window.OneSignalDeferred.push((oneSignal) => {
                oneSignal.Notifications.setDefaultTitle(title)
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        });
    }
    getPermissionStatus(onComplete) {
        return new Promise((resolve, reject) => {
            if (isOneSignalScriptFailed) {
                reject();
            }
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: 'getPermissionStatus',
                    namespaceName: 'Notifications',
                    args: arguments,
                    promiseResolver: resolve,
                });
                return;
            }
            window.OneSignalDeferred.push((oneSignal) => {
                oneSignal.Notifications.getPermissionStatus(onComplete)
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        });
    }
    requestPermission() {
        return new Promise((resolve, reject) => {
            if (isOneSignalScriptFailed) {
                reject();
            }
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: 'requestPermission',
                    namespaceName: 'Notifications',
                    args: arguments,
                    promiseResolver: resolve,
                });
                return;
            }
            window.OneSignalDeferred.push((oneSignal) => {
                oneSignal.Notifications.requestPermission()
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        });
    }
    addNotificationsEventListener(event, listener) {
        if (!this.doesOneSignalExist()) {
            this.ngOneSignalFunctionQueue.push({
                name: 'addNotificationsEventListener',
                namespaceName: 'Notifications',
                args: arguments,
            });
            return;
        }
        window.OneSignalDeferred.push((oneSignal) => {
            oneSignal.addNotificationsEventListener(event, listener);
        });
    }
    removeNotificationsEventListener(event, listener) {
        if (!this.doesOneSignalExist()) {
            this.ngOneSignalFunctionQueue.push({
                name: 'removeNotificationsEventListener',
                namespaceName: 'Notifications',
                args: arguments,
            });
            return;
        }
        window.OneSignalDeferred.push((oneSignal) => {
            oneSignal.removeNotificationsEventListener(event, listener);
        });
    }
    promptPush(options) {
        return new Promise((resolve, reject) => {
            if (isOneSignalScriptFailed) {
                reject();
            }
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: 'promptPush',
                    namespaceName: 'Slidedown',
                    args: arguments,
                    promiseResolver: resolve,
                });
                return;
            }
            window.OneSignalDeferred.push((oneSignal) => {
                oneSignal.Slidedown.promptPush(options)
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        });
    }
    promptPushCategories(options) {
        return new Promise((resolve, reject) => {
            if (isOneSignalScriptFailed) {
                reject();
            }
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: 'promptPushCategories',
                    namespaceName: 'Slidedown',
                    args: arguments,
                    promiseResolver: resolve,
                });
                return;
            }
            window.OneSignalDeferred.push((oneSignal) => {
                oneSignal.Slidedown.promptPushCategories(options)
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        });
    }
    promptSms(options) {
        return new Promise((resolve, reject) => {
            if (isOneSignalScriptFailed) {
                reject();
            }
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: 'promptSms',
                    namespaceName: 'Slidedown',
                    args: arguments,
                    promiseResolver: resolve,
                });
                return;
            }
            window.OneSignalDeferred.push((oneSignal) => {
                oneSignal.Slidedown.promptSms(options)
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        });
    }
    promptEmail(options) {
        return new Promise((resolve, reject) => {
            if (isOneSignalScriptFailed) {
                reject();
            }
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: 'promptEmail',
                    namespaceName: 'Slidedown',
                    args: arguments,
                    promiseResolver: resolve,
                });
                return;
            }
            window.OneSignalDeferred.push((oneSignal) => {
                oneSignal.Slidedown.promptEmail(options)
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        });
    }
    promptSmsAndEmail(options) {
        return new Promise((resolve, reject) => {
            if (isOneSignalScriptFailed) {
                reject();
            }
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: 'promptSmsAndEmail',
                    namespaceName: 'Slidedown',
                    args: arguments,
                    promiseResolver: resolve,
                });
                return;
            }
            window.OneSignalDeferred.push((oneSignal) => {
                oneSignal.Slidedown.promptSmsAndEmail(options)
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        });
    }
    addSlidedownEventListener(event, listener) {
        if (!this.doesOneSignalExist()) {
            this.ngOneSignalFunctionQueue.push({
                name: 'addSlidedownEventListener',
                namespaceName: 'Slidedown',
                args: arguments,
            });
            return;
        }
        window.OneSignalDeferred.push((oneSignal) => {
            oneSignal.addSlidedownEventListener(event, listener);
        });
    }
    removeSlidedownEventListener(event, listener) {
        if (!this.doesOneSignalExist()) {
            this.ngOneSignalFunctionQueue.push({
                name: 'removeSlidedownEventListener',
                namespaceName: 'Slidedown',
                args: arguments,
            });
            return;
        }
        window.OneSignalDeferred.push((oneSignal) => {
            oneSignal.removeSlidedownEventListener(event, listener);
        });
    }
    setLogLevel(logLevel) {
        if (!this.doesOneSignalExist()) {
            this.ngOneSignalFunctionQueue.push({
                name: 'setLogLevel',
                namespaceName: 'Debug',
                args: arguments,
            });
            return;
        }
        window.OneSignalDeferred.push((oneSignal) => {
            oneSignal.setLogLevel(logLevel);
        });
    }
    sendOutcome(outcomeName, outcomeWeight) {
        return new Promise((resolve, reject) => {
            if (isOneSignalScriptFailed) {
                reject();
            }
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: 'sendOutcome',
                    namespaceName: 'Session',
                    args: arguments,
                    promiseResolver: resolve,
                });
                return;
            }
            window.OneSignalDeferred.push((oneSignal) => {
                oneSignal.Session.sendOutcome(outcomeName, outcomeWeight)
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        });
    }
    sendUniqueOutcome(outcomeName) {
        return new Promise((resolve, reject) => {
            if (isOneSignalScriptFailed) {
                reject();
            }
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: 'sendUniqueOutcome',
                    namespaceName: 'Session',
                    args: arguments,
                    promiseResolver: resolve,
                });
                return;
            }
            window.OneSignalDeferred.push((oneSignal) => {
                oneSignal.Session.sendUniqueOutcome(outcomeName)
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        });
    }
    addAlias(label, id) {
        if (!this.doesOneSignalExist()) {
            this.ngOneSignalFunctionQueue.push({
                name: 'addAlias',
                namespaceName: 'User',
                args: arguments,
            });
            return;
        }
        window.OneSignalDeferred.push((oneSignal) => {
            oneSignal.addAlias(label, id);
        });
    }
    addAliases(aliases) {
        if (!this.doesOneSignalExist()) {
            this.ngOneSignalFunctionQueue.push({
                name: 'addAliases',
                namespaceName: 'User',
                args: arguments,
            });
            return;
        }
        window.OneSignalDeferred.push((oneSignal) => {
            oneSignal.addAliases(aliases);
        });
    }
    removeAlias(label) {
        if (!this.doesOneSignalExist()) {
            this.ngOneSignalFunctionQueue.push({
                name: 'removeAlias',
                namespaceName: 'User',
                args: arguments,
            });
            return;
        }
        window.OneSignalDeferred.push((oneSignal) => {
            oneSignal.removeAlias(label);
        });
    }
    removeAliases(labels) {
        if (!this.doesOneSignalExist()) {
            this.ngOneSignalFunctionQueue.push({
                name: 'removeAliases',
                namespaceName: 'User',
                args: arguments,
            });
            return;
        }
        window.OneSignalDeferred.push((oneSignal) => {
            oneSignal.removeAliases(labels);
        });
    }
    addEmail(email) {
        if (!this.doesOneSignalExist()) {
            this.ngOneSignalFunctionQueue.push({
                name: 'addEmail',
                namespaceName: 'User',
                args: arguments,
            });
            return;
        }
        window.OneSignalDeferred.push((oneSignal) => {
            oneSignal.addEmail(email);
        });
    }
    removeEmail(email) {
        if (!this.doesOneSignalExist()) {
            this.ngOneSignalFunctionQueue.push({
                name: 'removeEmail',
                namespaceName: 'User',
                args: arguments,
            });
            return;
        }
        window.OneSignalDeferred.push((oneSignal) => {
            oneSignal.removeEmail(email);
        });
    }
    addSms(smsNumber) {
        if (!this.doesOneSignalExist()) {
            this.ngOneSignalFunctionQueue.push({
                name: 'addSms',
                namespaceName: 'User',
                args: arguments,
            });
            return;
        }
        window.OneSignalDeferred.push((oneSignal) => {
            oneSignal.addSms(smsNumber);
        });
    }
    removeSms(smsNumber) {
        if (!this.doesOneSignalExist()) {
            this.ngOneSignalFunctionQueue.push({
                name: 'removeSms',
                namespaceName: 'User',
                args: arguments,
            });
            return;
        }
        window.OneSignalDeferred.push((oneSignal) => {
            oneSignal.removeSms(smsNumber);
        });
    }
    optIn() {
        return new Promise((resolve, reject) => {
            if (isOneSignalScriptFailed) {
                reject();
            }
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: 'optIn',
                    namespaceName: 'PushSubscription',
                    args: arguments,
                    promiseResolver: resolve,
                });
                return;
            }
            window.OneSignalDeferred.push((oneSignal) => {
                oneSignal.PushSubscription.optIn()
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        });
    }
    optOut() {
        return new Promise((resolve, reject) => {
            if (isOneSignalScriptFailed) {
                reject();
            }
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: 'optOut',
                    namespaceName: 'PushSubscription',
                    args: arguments,
                    promiseResolver: resolve,
                });
                return;
            }
            window.OneSignalDeferred.push((oneSignal) => {
                oneSignal.PushSubscription.optOut()
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        });
    }
    addPushSubscriptionEventListener(event, listener) {
        if (!this.doesOneSignalExist()) {
            this.ngOneSignalFunctionQueue.push({
                name: 'addPushSubscriptionEventListener',
                namespaceName: 'PushSubscription',
                args: arguments,
            });
            return;
        }
        window.OneSignalDeferred.push((oneSignal) => {
            oneSignal.addPushSubscriptionEventListener(event, listener);
        });
    }
    removePushSubscriptionEventListener(event, listener) {
        if (!this.doesOneSignalExist()) {
            this.ngOneSignalFunctionQueue.push({
                name: 'removePushSubscriptionEventListener',
                namespaceName: 'PushSubscription',
                args: arguments,
            });
            return;
        }
        window.OneSignalDeferred.push((oneSignal) => {
            oneSignal.removePushSubscriptionEventListener(event, listener);
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
