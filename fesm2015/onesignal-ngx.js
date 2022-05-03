import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

const ONESIGNAL_SDK_ID = 'onesignal-sdk';
const ONE_SIGNAL_SCRIPT_SRC = 'https://cdn.onesignal.com/sdks/OneSignalSDK.js';
const ONESIGNAL_NOT_SETUP_ERROR = 'OneSignal is not setup correctly.';
const MAX_TIMEOUT = 30;
class OneSignal {
    constructor() {
        this.isOneSignalInitialized = false;
        this.ngOneSignalFunctionQueue = [];
        /* H E L P E R S */
        this.injectScript = () => {
            const script = document.createElement('script');
            script.id = ONESIGNAL_SDK_ID;
            script.src = ONE_SIGNAL_SCRIPT_SRC;
            script.async = true;
            document.head.appendChild(script);
        };
        this.doesOneSignalExist = () => {
            if (window.OneSignal) {
                return true;
            }
            return false;
        };
        this.processQueuedOneSignalFunctions = () => {
            this.ngOneSignalFunctionQueue.forEach(element => {
                const { name, args, promiseResolver } = element;
                if (!!promiseResolver) {
                    this[name](...args).then((result) => {
                        promiseResolver(result);
                    });
                }
                else {
                    window.OneSignal[name](...args);
                }
            });
        };
        this.setupOneSignalIfMissing = () => {
            if (!this.doesOneSignalExist()) {
                window.OneSignal = window.OneSignal || [];
            }
        };
    }
    /* P U B L I C */
    init(options) {
        return new Promise(resolve => {
            if (this.isOneSignalInitialized) {
                return;
            }
            this.injectScript();
            this.setupOneSignalIfMissing();
            window.OneSignal.push(() => {
                window.OneSignal.init(options);
            });
            const timeout = setTimeout(() => {
                console.error(ONESIGNAL_NOT_SETUP_ERROR);
            }, MAX_TIMEOUT * 1000);
            window.OneSignal.push(() => {
                clearTimeout(timeout);
                this.isOneSignalInitialized = true;
                this.processQueuedOneSignalFunctions();
                resolve();
            });
        });
    }
    on(event, listener) {
        if (!this.doesOneSignalExist()) {
            this.ngOneSignalFunctionQueue.push({
                name: 'on',
                args: arguments,
            });
            return;
        }
        window.OneSignal.push(() => {
            window.OneSignal.on(event, listener);
        });
    }
    off(event, listener) {
        if (!this.doesOneSignalExist()) {
            this.ngOneSignalFunctionQueue.push({
                name: 'off',
                args: arguments,
            });
            return;
        }
        window.OneSignal.push(() => {
            window.OneSignal.off(event, listener);
        });
    }
    once(event, listener) {
        if (!this.doesOneSignalExist()) {
            this.ngOneSignalFunctionQueue.push({
                name: 'once',
                args: arguments,
            });
            return;
        }
        window.OneSignal.push(() => {
            window.OneSignal.once(event, listener);
        });
    }
    isPushNotificationsEnabled(callback) {
        return new Promise((resolve, reject) => {
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: 'isPushNotificationsEnabled',
                    args: arguments,
                    promiseResolver: resolve,
                });
                return;
            }
            window.OneSignal.push(() => {
                window.OneSignal.isPushNotificationsEnabled(callback)
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        });
    }
    showHttpPrompt(options) {
        return new Promise((resolve, reject) => {
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: 'showHttpPrompt',
                    args: arguments,
                    promiseResolver: resolve,
                });
                return;
            }
            window.OneSignal.push(() => {
                window.OneSignal.showHttpPrompt(options)
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        });
    }
    registerForPushNotifications(options) {
        return new Promise((resolve, reject) => {
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: 'registerForPushNotifications',
                    args: arguments,
                    promiseResolver: resolve,
                });
                return;
            }
            window.OneSignal.push(() => {
                window.OneSignal.registerForPushNotifications(options)
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        });
    }
    setDefaultNotificationUrl(url) {
        return new Promise((resolve, reject) => {
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: 'setDefaultNotificationUrl',
                    args: arguments,
                    promiseResolver: resolve,
                });
                return;
            }
            window.OneSignal.push(() => {
                window.OneSignal.setDefaultNotificationUrl(url)
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        });
    }
    setDefaultTitle(title) {
        return new Promise((resolve, reject) => {
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: 'setDefaultTitle',
                    args: arguments,
                    promiseResolver: resolve,
                });
                return;
            }
            window.OneSignal.push(() => {
                window.OneSignal.setDefaultTitle(title)
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        });
    }
    getTags(callback) {
        return new Promise((resolve, reject) => {
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: 'getTags',
                    args: arguments,
                    promiseResolver: resolve,
                });
                return;
            }
            window.OneSignal.push(() => {
                window.OneSignal.getTags(callback)
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        });
    }
    sendTag(key, value, callback) {
        return new Promise((resolve, reject) => {
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: 'sendTag',
                    args: arguments,
                    promiseResolver: resolve,
                });
                return;
            }
            window.OneSignal.push(() => {
                window.OneSignal.sendTag(key, value, callback)
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        });
    }
    sendTags(tags, callback) {
        return new Promise((resolve, reject) => {
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: 'sendTags',
                    args: arguments,
                    promiseResolver: resolve,
                });
                return;
            }
            window.OneSignal.push(() => {
                window.OneSignal.sendTags(tags, callback)
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        });
    }
    deleteTag(tag) {
        return new Promise((resolve, reject) => {
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: 'deleteTag',
                    args: arguments,
                    promiseResolver: resolve,
                });
                return;
            }
            window.OneSignal.push(() => {
                window.OneSignal.deleteTag(tag)
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        });
    }
    deleteTags(tags, callback) {
        return new Promise((resolve, reject) => {
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: 'deleteTags',
                    args: arguments,
                    promiseResolver: resolve,
                });
                return;
            }
            window.OneSignal.push(() => {
                window.OneSignal.deleteTags(tags, callback)
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        });
    }
    addListenerForNotificationOpened(callback) {
        return new Promise((resolve, reject) => {
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: 'addListenerForNotificationOpened',
                    args: arguments,
                    promiseResolver: resolve,
                });
                return;
            }
            window.OneSignal.push(() => {
                window.OneSignal.addListenerForNotificationOpened(callback)
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        });
    }
    setSubscription(newSubscription) {
        return new Promise((resolve, reject) => {
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: 'setSubscription',
                    args: arguments,
                    promiseResolver: resolve,
                });
                return;
            }
            window.OneSignal.push(() => {
                window.OneSignal.setSubscription(newSubscription)
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        });
    }
    showHttpPermissionRequest(options) {
        return new Promise((resolve, reject) => {
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: 'showHttpPermissionRequest',
                    args: arguments,
                    promiseResolver: resolve,
                });
                return;
            }
            window.OneSignal.push(() => {
                window.OneSignal.showHttpPermissionRequest(options)
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        });
    }
    showNativePrompt() {
        return new Promise((resolve, reject) => {
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: 'showNativePrompt',
                    args: arguments,
                    promiseResolver: resolve,
                });
                return;
            }
            window.OneSignal.push(() => {
                window.OneSignal.showNativePrompt()
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        });
    }
    showSlidedownPrompt(options) {
        return new Promise((resolve, reject) => {
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: 'showSlidedownPrompt',
                    args: arguments,
                    promiseResolver: resolve,
                });
                return;
            }
            window.OneSignal.push(() => {
                window.OneSignal.showSlidedownPrompt(options)
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        });
    }
    showCategorySlidedown(options) {
        return new Promise((resolve, reject) => {
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: 'showCategorySlidedown',
                    args: arguments,
                    promiseResolver: resolve,
                });
                return;
            }
            window.OneSignal.push(() => {
                window.OneSignal.showCategorySlidedown(options)
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        });
    }
    showSmsSlidedown(options) {
        return new Promise((resolve, reject) => {
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: 'showSmsSlidedown',
                    args: arguments,
                    promiseResolver: resolve,
                });
                return;
            }
            window.OneSignal.push(() => {
                window.OneSignal.showSmsSlidedown(options)
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        });
    }
    showEmailSlidedown(options) {
        return new Promise((resolve, reject) => {
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: 'showEmailSlidedown',
                    args: arguments,
                    promiseResolver: resolve,
                });
                return;
            }
            window.OneSignal.push(() => {
                window.OneSignal.showEmailSlidedown(options)
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        });
    }
    showSmsAndEmailSlidedown(options) {
        return new Promise((resolve, reject) => {
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: 'showSmsAndEmailSlidedown',
                    args: arguments,
                    promiseResolver: resolve,
                });
                return;
            }
            window.OneSignal.push(() => {
                window.OneSignal.showSmsAndEmailSlidedown(options)
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        });
    }
    getNotificationPermission(onComplete) {
        return new Promise((resolve, reject) => {
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: 'getNotificationPermission',
                    args: arguments,
                    promiseResolver: resolve,
                });
                return;
            }
            window.OneSignal.push(() => {
                window.OneSignal.getNotificationPermission(onComplete)
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        });
    }
    getUserId(callback) {
        return new Promise((resolve, reject) => {
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: 'getUserId',
                    args: arguments,
                    promiseResolver: resolve,
                });
                return;
            }
            window.OneSignal.push(() => {
                window.OneSignal.getUserId(callback)
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        });
    }
    getSubscription(callback) {
        return new Promise((resolve, reject) => {
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: 'getSubscription',
                    args: arguments,
                    promiseResolver: resolve,
                });
                return;
            }
            window.OneSignal.push(() => {
                window.OneSignal.getSubscription(callback)
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        });
    }
    setEmail(email, options) {
        return new Promise((resolve, reject) => {
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: 'setEmail',
                    args: arguments,
                    promiseResolver: resolve,
                });
                return;
            }
            window.OneSignal.push(() => {
                window.OneSignal.setEmail(email, options)
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        });
    }
    setSMSNumber(smsNumber, options) {
        return new Promise((resolve, reject) => {
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: 'setSMSNumber',
                    args: arguments,
                    promiseResolver: resolve,
                });
                return;
            }
            window.OneSignal.push(() => {
                window.OneSignal.setSMSNumber(smsNumber, options)
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        });
    }
    logoutEmail() {
        return new Promise((resolve, reject) => {
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: 'logoutEmail',
                    args: arguments,
                    promiseResolver: resolve,
                });
                return;
            }
            window.OneSignal.push(() => {
                window.OneSignal.logoutEmail()
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        });
    }
    logoutSMS() {
        return new Promise((resolve, reject) => {
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: 'logoutSMS',
                    args: arguments,
                    promiseResolver: resolve,
                });
                return;
            }
            window.OneSignal.push(() => {
                window.OneSignal.logoutSMS()
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        });
    }
    setExternalUserId(externalUserId, authHash) {
        return new Promise((resolve, reject) => {
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: 'setExternalUserId',
                    args: arguments,
                    promiseResolver: resolve,
                });
                return;
            }
            window.OneSignal.push(() => {
                window.OneSignal.setExternalUserId(externalUserId, authHash)
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        });
    }
    removeExternalUserId() {
        return new Promise((resolve, reject) => {
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: 'removeExternalUserId',
                    args: arguments,
                    promiseResolver: resolve,
                });
                return;
            }
            window.OneSignal.push(() => {
                window.OneSignal.removeExternalUserId()
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        });
    }
    getExternalUserId() {
        return new Promise((resolve, reject) => {
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: 'getExternalUserId',
                    args: arguments,
                    promiseResolver: resolve,
                });
                return;
            }
            window.OneSignal.push(() => {
                window.OneSignal.getExternalUserId()
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        });
    }
    provideUserConsent(consent) {
        return new Promise((resolve, reject) => {
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: 'provideUserConsent',
                    args: arguments,
                    promiseResolver: resolve,
                });
                return;
            }
            window.OneSignal.push(() => {
                window.OneSignal.provideUserConsent(consent)
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        });
    }
    getEmailId(callback) {
        return new Promise((resolve, reject) => {
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: 'getEmailId',
                    args: arguments,
                    promiseResolver: resolve,
                });
                return;
            }
            window.OneSignal.push(() => {
                window.OneSignal.getEmailId(callback)
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        });
    }
    getSMSId(callback) {
        return new Promise((resolve, reject) => {
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: 'getSMSId',
                    args: arguments,
                    promiseResolver: resolve,
                });
                return;
            }
            window.OneSignal.push(() => {
                window.OneSignal.getSMSId(callback)
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        });
    }
    sendOutcome(outcomeName, outcomeWeight) {
        return new Promise((resolve, reject) => {
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: 'sendOutcome',
                    args: arguments,
                    promiseResolver: resolve,
                });
                return;
            }
            window.OneSignal.push(() => {
                window.OneSignal.sendOutcome(outcomeName, outcomeWeight)
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
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
