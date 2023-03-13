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
export class OneSignal {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25lc2lnbmFsLW5neC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvb25lc2lnbmFsLW5neC9zcmMvbGliL29uZXNpZ25hbC1uZ3guc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFDM0MsTUFBTSxnQkFBZ0IsR0FBRyxlQUFlLENBQUM7QUFDekMsTUFBTSxxQkFBcUIsR0FBRyw2REFBNkQsQ0FBQztBQUk1RixzREFBc0Q7QUFDdEQsSUFBSSxzQkFBc0IsR0FBRyxLQUFLLENBQUM7QUFDbkMsMEVBQTBFO0FBQzFFLG1FQUFtRTtBQUNuRSxrQkFBa0I7QUFDbEIsSUFBSSx1QkFBdUIsR0FBRyxLQUFLLENBQUM7QUFtQnBDLE1BQU0sT0FBTyxTQUFTO0lBSXBCO1FBSFEsMkJBQXNCLEdBQUcsS0FBSyxDQUFDO1FBQy9CLDZCQUF3QixHQUF3QixFQUFFLENBQUM7UUFJM0QsbUJBQW1CO1FBRVgsdUJBQWtCLEdBQUcsR0FBRyxFQUFFO1lBQ2hDLElBQUksTUFBTSxDQUFDLGlCQUFpQixFQUFFO2dCQUM1QixPQUFPLElBQUksQ0FBQzthQUNiO1lBQ0QsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDLENBQUE7UUE0Qk8sb0NBQStCLEdBQUcsR0FBRyxFQUFFO1lBQzdDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQzlDLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsR0FBRyxPQUFPLENBQUM7Z0JBRS9ELElBQUksQ0FBQyxDQUFDLGVBQWUsSUFBSSxDQUFDLENBQUMsYUFBYSxFQUFFO29CQUN2QyxJQUFtQixDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENB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QUFDO1lBQ0gsT0FBTztTQUNSO1FBRUQsTUFBTSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDLFNBQXFCLEVBQUUsRUFBRTtZQUN0RCxTQUFTLENBQUMsZ0NBQWdDLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzlELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELG1DQUFtQyxDQUFDLEtBQWEsRUFBRSxRQUFtRDtRQUNwRyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEVBQUU7WUFDOUIsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQztnQkFDakMsSUFBSSxFQUFFLHFDQUFxQztnQkFDM0MsYUFBYSxFQUFFLGtCQUFrQjtnQkFDakMsSUFBSSxFQUFFLFNBQVM7YUFDaEIsQ0FBQyxDQUFDO1lBQ0gsT0FBTztTQUNSO1FBRUQsTUFBTSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDLFNBQXFCLEVBQUUsRUFBRTtZQUN0RCxTQUFTLENBQUMsbUNBQW1DLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ2pFLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztZQXR1QkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsidHlwZSBBY3Rpb248VD4gPSAoaXRlbTogVCkgPT4gdm9pZDtcbmludGVyZmFjZSBBdXRvUHJvbXB0T3B0aW9ucyB7IGZvcmNlPzogYm9vbGVhbjsgZm9yY2VTbGlkZWRvd25PdmVyTmF0aXZlPzogYm9vbGVhbjsgc2xpZGVkb3duUHJvbXB0T3B0aW9ucz86IElPbmVTaWduYWxBdXRvUHJvbXB0T3B0aW9uczsgfVxuaW50ZXJmYWNlIElPbmVTaWduYWxBdXRvUHJvbXB0T3B0aW9ucyB7IGZvcmNlPzogYm9vbGVhbjsgZm9yY2VTbGlkZWRvd25PdmVyTmF0aXZlPzogYm9vbGVhbjsgaXNJblVwZGF0ZU1vZGU/OiBib29sZWFuOyBjYXRlZ29yeU9wdGlvbnM/OiBJT25lU2lnbmFsQ2F0ZWdvcmllczsgfVxuaW50ZXJmYWNlIElPbmVTaWduYWxDYXRlZ29yaWVzIHsgcG9zaXRpdmVVcGRhdGVCdXR0b246IHN0cmluZzsgbmVnYXRpdmVVcGRhdGVCdXR0b246IHN0cmluZzsgc2F2aW5nQnV0dG9uVGV4dDogc3RyaW5nOyBlcnJvckJ1dHRvblRleHQ6IHN0cmluZzsgdXBkYXRlTWVzc2FnZTogc3RyaW5nOyB0YWdzOiBJT25lU2lnbmFsVGFnQ2F0ZWdvcnlbXTsgfVxuaW50ZXJmYWNlIElPbmVTaWduYWxUYWdDYXRlZ29yeSB7IHRhZzogc3RyaW5nOyBsYWJlbDogc3RyaW5nOyBjaGVja2VkPzogYm9vbGVhbjsgfVxudHlwZSBQdXNoU3Vic2NyaXB0aW9uTmFtZXNwYWNlUHJvcGVydGllcyA9IHsgaWQ6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQ7IHRva2VuOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkOyBvcHRlZEluOiBib29sZWFuOyB9O1xudHlwZSBTdWJzY3JpcHRpb25DaGFuZ2VFdmVudCA9IHsgcHJldmlvdXM6IFB1c2hTdWJzY3JpcHRpb25OYW1lc3BhY2VQcm9wZXJ0aWVzOyBjdXJyZW50OiBQdXNoU3Vic2NyaXB0aW9uTmFtZXNwYWNlUHJvcGVydGllczsgfTtcbnR5cGUgTm90aWZpY2F0aW9uRXZlbnROYW1lID0gJ2NsaWNrJyB8ICd3aWxsRGlzcGxheScgfCAnZGlzbWlzcycgfCAncGVybWlzc2lvbkNoYW5nZScgfCAncGVybWlzc2lvblByb21wdERpc3BsYXknO1xuaW50ZXJmYWNlIE5vdGlmaWNhdGlvbkJ1dHRvbkRhdGEgeyBhY3Rpb24/OiBzdHJpbmc7IHRpdGxlPzogc3RyaW5nOyBpY29uPzogc3RyaW5nOyB1cmw/OiBzdHJpbmc7IH1cbmludGVyZmFjZSBTdHJ1Y3R1cmVkTm90aWZpY2F0aW9uIHsgaWQ6IHN0cmluZzsgY29udGVudDogc3RyaW5nOyBoZWFkaW5nPzogc3RyaW5nOyB1cmw/OiBzdHJpbmc7IGRhdGE/OiBvYmplY3Q7IHJyPzogc3RyaW5nOyBpY29uPzogc3RyaW5nOyBpbWFnZT86IHN0cmluZzsgdGFnPzogc3RyaW5nOyBiYWRnZT86IHN0cmluZzsgdmlicmF0ZT86IHN0cmluZzsgYnV0dG9ucz86IE5vdGlmaWNhdGlvbkJ1dHRvbkRhdGFbXTsgfVxudHlwZSBTbGlkZWRvd25FdmVudE5hbWUgPSAnc2xpZGVkb3duU2hvd24nO1xudHlwZSBOb3RpZmljYXRpb25DYWxsYmFja1R5cGUgPSB8ICgob2JqOiBTdHJ1Y3R1cmVkTm90aWZpY2F0aW9uKSA9PiB2b2lkKSB8ICgob2JqOiB7IHRvOiBOb3RpZmljYXRpb25QZXJtaXNzaW9uIH0pID0+IHZvaWQpIHwgKChvYmo6IChhcmc6IGFueSkgPT4gdm9pZCkgPT4gdm9pZCk7XG5cbmludGVyZmFjZSBJSW5pdE9iamVjdCB7XG4gIGFwcElkOiBzdHJpbmc7XG4gIHN1YmRvbWFpbk5hbWU/OiBzdHJpbmc7XG4gIHJlcXVpcmVzVXNlclByaXZhY3lDb25zZW50PzogYm9vbGVhbjtcbiAgcHJvbXB0T3B0aW9ucz86IG9iamVjdDtcbiAgd2VsY29tZU5vdGlmaWNhdGlvbj86IG9iamVjdDtcbiAgbm90aWZ5QnV0dG9uPzogb2JqZWN0O1xuICBwZXJzaXN0Tm90aWZpY2F0aW9uPzogYm9vbGVhbjtcbiAgd2ViaG9va3M/OiBvYmplY3Q7XG4gIGF1dG9SZXN1YnNjcmliZT86IGJvb2xlYW47XG4gIGF1dG9SZWdpc3Rlcj86IGJvb2xlYW47XG4gIG5vdGlmaWNhdGlvbkNsaWNrSGFuZGxlck1hdGNoPzogc3RyaW5nO1xuICBub3RpZmljYXRpb25DbGlja0hhbmRsZXJBY3Rpb24/OiBzdHJpbmc7XG4gIHNlcnZpY2VXb3JrZXJQYXJhbT86IHsgc2NvcGU6IHN0cmluZyB9O1xuICBzZXJ2aWNlV29ya2VyUGF0aD86IHN0cmluZztcbiAgc2VydmljZVdvcmtlclVwZGF0ZXJQYXRoPzogc3RyaW5nO1xuICBwYXRoPzogc3RyaW5nO1xuICBhbGxvd0xvY2FsaG9zdEFzU2VjdXJlT3JpZ2luPzogYm9vbGVhbjtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5jb25zdCBPTkVTSUdOQUxfU0RLX0lEID0gJ29uZXNpZ25hbC1zZGsnO1xuY29uc3QgT05FX1NJR05BTF9TQ1JJUFRfU1JDID0gJ2h0dHBzOi8vY2RuLm9uZXNpZ25hbC5jb20vc2Rrcy93ZWIvdjE2L09uZVNpZ25hbFNESy5wYWdlLmpzJztcblxudHlwZSBGdW5jdGlvblF1ZXVlSXRlbSA9IHsgbmFtZTogc3RyaW5nOyBhcmdzOiBJQXJndW1lbnRzOyBuYW1lc3BhY2VOYW1lPzogc3RyaW5nLCBwcm9taXNlUmVzb2x2ZXI/OiAocmVzdWx0OiBhbnkpID0+IGFueSB9O1xuXG4vLyB0cnVlIGlmIHRoZSBzY3JpcHQgaXMgc3VjY2Vzc2Z1bGx5IGxvYWRlZCBmcm9tIENETi5cbmxldCBpc09uZVNpZ25hbEluaXRpYWxpemVkID0gZmFsc2U7XG4vLyB0cnVlIGlmIHRoZSBzY3JpcHQgZmFpbHMgdG8gbG9hZCBmcm9tIENETi4gQSBzZXBhcmF0ZSBmbGFnIGlzIG5lY2Vzc2FyeVxuLy8gdG8gZGlzYW1iaWd1YXRlIGJldHdlZW4gYSBDRE4gbG9hZCBmYWlsdXJlIGFuZCBhIGRlbGF5ZWQgY2FsbCB0b1xuLy8gT25lU2lnbmFsI2luaXQuXG5sZXQgaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQgPSBmYWxzZTtcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBPbmVTaWduYWxEZWZlcnJlZDogYW55O1xuICAgIHNhZmFyaT86IHtcbiAgICAgIHB1c2hOb3RpZmljYXRpb25QZXJtaXNzaW9uOiAocGVybWlzc2lvbkRhdGE6IGFueSkgPT4gdm9pZDtcbiAgICAgIHB1c2hOb3RpZmljYXRpb246IGFueTtcbiAgICB9O1xuICB9XG59XG5cbmludGVyZmFjZSBJT25lU2lnbmFsIHtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBPbmVTaWduYWwgaW1wbGVtZW50cyBJT25lU2lnbmFsIHtcbiAgcHJpdmF0ZSBpc09uZVNpZ25hbEluaXRpYWxpemVkID0gZmFsc2U7XG4gIHByaXZhdGUgbmdPbmVTaWduYWxGdW5jdGlvblF1ZXVlOiBGdW5jdGlvblF1ZXVlSXRlbVtdID0gW107XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICAvKiBIIEUgTCBQIEUgUiBTICovXG5cbiAgcHJpdmF0ZSBkb2VzT25lU2lnbmFsRXhpc3QgPSAoKSA9PiB7XG4gICAgaWYgKHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlT25Mb2FkKHJlc29sdmU6ICgpID0+IHZvaWQsIG9wdGlvbnM6IElJbml0T2JqZWN0KTogdm9pZCB7XG4gICAgaXNPbmVTaWduYWxJbml0aWFsaXplZCA9IHRydWU7XG5cbiAgICAvLyBPbmVTaWduYWwgaXMgYXNzdW1lZCB0byBiZSBsb2FkZWQgY29ycmVjdGx5IGJlY2F1c2UgdGhpcyBtZXRob2RcbiAgICAvLyBpcyBjYWxsZWQgYWZ0ZXIgdGhlIHNjcmlwdCBpcyBzdWNjZXNzZnVsbHkgbG9hZGVkIGJ5IENETiwgYnV0XG4gICAgLy8ganVzdCBpbiBjYXNlLlxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZCA9IHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZCB8fCBbXVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkLnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbCkgPT4ge1xuICAgICAgb25lU2lnbmFsLmluaXQob3B0aW9ucyk7XG4gICAgfSk7XG5cbiAgICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQucHVzaCgoKSA9PiB7XG4gICAgICB0aGlzLnByb2Nlc3NRdWV1ZWRPbmVTaWduYWxGdW5jdGlvbnMoKTtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlT25FcnJvcihyZXNvbHZlOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQgPSB0cnVlO1xuICAgIC8vIEVuc3VyZSB0aGF0IGFueSB1bnJlc29sdmVkIGZ1bmN0aW9ucyBhcmUgY2xlYXJlZCBmcm9tIHRoZSBxdWV1ZSxcbiAgICAvLyBldmVuIGluIHRoZSBldmVudCBvZiBhIENETiBsb2FkIGZhaWx1cmUuXG4gICAgdGhpcy5wcm9jZXNzUXVldWVkT25lU2lnbmFsRnVuY3Rpb25zKCk7XG4gICAgcmVzb2x2ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBwcm9jZXNzUXVldWVkT25lU2lnbmFsRnVuY3Rpb25zID0gKCkgPT4ge1xuICAgIHRoaXMubmdPbmVTaWduYWxGdW5jdGlvblF1ZXVlLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICBjb25zdCB7IG5hbWUsIGFyZ3MsIG5hbWVzcGFjZU5hbWUsIHByb21pc2VSZXNvbHZlciB9ID0gZWxlbWVudDtcblxuICAgICAgaWYgKCEhcHJvbWlzZVJlc29sdmVyICYmICEhbmFtZXNwYWNlTmFtZSkge1xuICAgICAgICAodGhpcyBhcyBJT25lU2lnbmFsKVtuYW1lc3BhY2VOYW1lXVtuYW1lXSguLi5hcmdzKS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgICAgIHByb21pc2VSZXNvbHZlcihyZXN1bHQpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoISFuYW1lc3BhY2VOYW1lKSB7XG4gICAgICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZFtuYW1lc3BhY2VOYW1lXVtuYW1lXSguLi5hcmdzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qIFAgVSBCIEwgSSBDICovXG5cbiAgLyoqXG4gICAqIEBQdWJsaWNBcGlcbiAgICovXG4gIGluaXQob3B0aW9uczogSUluaXRPYmplY3QpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4ocmVzb2x2ZSA9PiB7XG4gICAgICBpZiAodGhpcy5pc09uZVNpZ25hbEluaXRpYWxpemVkKSB7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW9wdGlvbnMgfHwgIW9wdGlvbnMuYXBwSWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbmVlZCB0byBwcm92aWRlIHlvdXIgT25lU2lnbmFsIGFwcElkLicpO1xuICAgICAgfVxuICAgICAgaWYgKCFkb2N1bWVudCkge1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICBzY3JpcHQuaWQgPSBPTkVTSUdOQUxfU0RLX0lEO1xuICAgICAgc2NyaXB0LmRlZmVyID0gdHJ1ZTtcbiAgICAgIHNjcmlwdC5zcmMgPSBPTkVfU0lHTkFMX1NDUklQVF9TUkM7XG5cbiAgICAgIHNjcmlwdC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuaGFuZGxlT25Mb2FkKHJlc29sdmUsIG9wdGlvbnMpO1xuICAgICAgfTtcblxuICAgICAgLy8gQWx3YXlzIHJlc29sdmUgd2hldGhlciBvciBub3QgdGhlIHNjcmlwdCBpcyBzdWNjZXNzZnVsbHkgaW5pdGlhbGl6ZWQuXG4gICAgICAvLyBUaGlzIGlzIGltcG9ydGFudCBmb3IgdXNlcnMgd2hvIG1heSBibG9jayBjZG4ub25lc2lnbmFsLmNvbSB3LyBhZGJsb2NrLlxuICAgICAgc2NyaXB0Lm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuaGFuZGxlT25FcnJvcihyZXNvbHZlKTtcbiAgICAgIH07XG5cbiAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAUHVibGljQXBpXG4gICAqL1xuICBpc1B1c2hTdXBwb3J0ZWQoKTogYm9vbGVhbiB7XG4gICAgY29uc3Qgc3VwcG9ydHNWYXBpZCA9IHR5cGVvZiBQdXNoU3Vic2NyaXB0aW9uT3B0aW9ucyAhPT0gJ3VuZGVmaW5lZCcgJiYgUHVzaFN1YnNjcmlwdGlvbk9wdGlvbnMucHJvdG90eXBlLmhhc093blByb3BlcnR5KCdhcHBsaWNhdGlvblNlcnZlcktleScpO1xuICAgIGNvbnN0IGlzU2FmYXJpSW5JZnJhbWUgPSBuYXZpZ2F0b3IudmVuZG9yID09PSAnQXBwbGUgQ29tcHV0ZXIsIEluYy4nICYmIHdpbmRvdy50b3AgIT09IHdpbmRvdztcbiAgICBjb25zdCBzdXBwb3J0c1NhZmFyaSA9IHR5cGVvZiB3aW5kb3cuc2FmYXJpICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgdHlwZW9mIHdpbmRvdy5zYWZhcmkucHVzaE5vdGlmaWNhdGlvbiAhPT0gJ3VuZGVmaW5lZCcgfHwgaXNTYWZhcmlJbklmcmFtZTtcblxuICAgIHJldHVybiBzdXBwb3J0c1ZhcGlkIHx8IHN1cHBvcnRzU2FmYXJpO1xuICB9XG5cblxuXG4gIGxvZ2luKGV4dGVybmFsSWQ6IHN0cmluZywgdG9rZW4/OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKGlzT25lU2lnbmFsU2NyaXB0RmFpbGVkKSB7XG4gICAgICAgIHJlamVjdCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuZG9lc09uZVNpZ25hbEV4aXN0KCkpIHtcbiAgICAgICAgdGhpcy5uZ09uZVNpZ25hbEZ1bmN0aW9uUXVldWUucHVzaCh7XG4gICAgICAgICAgbmFtZTogJ2xvZ2luJyxcbiAgICAgICAgICBuYW1lc3BhY2VOYW1lOiAnJyxcbiAgICAgICAgICBhcmdzOiBhcmd1bWVudHMsXG4gICAgICAgICAgcHJvbWlzZVJlc29sdmVyOiByZXNvbHZlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsKSA9PiB7XG4gICAgICAgIG9uZVNpZ25hbC5sb2dpbihleHRlcm5hbElkLCB0b2tlbilcbiAgICAgICAgICAudGhlbigodmFsdWU6IFByb21pc2U8dm9pZD4pID0+IHJlc29sdmUodmFsdWUpKVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiByZWplY3QoZXJyb3IpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgbG9nb3V0KCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgICAgcmVqZWN0KCk7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5kb2VzT25lU2lnbmFsRXhpc3QoKSkge1xuICAgICAgICB0aGlzLm5nT25lU2lnbmFsRnVuY3Rpb25RdWV1ZS5wdXNoKHtcbiAgICAgICAgICBuYW1lOiAnbG9nb3V0JyxcbiAgICAgICAgICBuYW1lc3BhY2VOYW1lOiAnJyxcbiAgICAgICAgICBhcmdzOiBhcmd1bWVudHMsXG4gICAgICAgICAgcHJvbWlzZVJlc29sdmVyOiByZXNvbHZlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsKSA9PiB7XG4gICAgICAgIG9uZVNpZ25hbC5sb2dvdXQoKVxuICAgICAgICAgIC50aGVuKCh2YWx1ZTogUHJvbWlzZTx2b2lkPikgPT4gcmVzb2x2ZSh2YWx1ZSkpXG4gICAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBzZXRDb25zZW50R2l2ZW4oY29uc2VudDogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgICAgcmVqZWN0KCk7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5kb2VzT25lU2lnbmFsRXhpc3QoKSkge1xuICAgICAgICB0aGlzLm5nT25lU2lnbmFsRnVuY3Rpb25RdWV1ZS5wdXNoKHtcbiAgICAgICAgICBuYW1lOiAnc2V0Q29uc2VudEdpdmVuJyxcbiAgICAgICAgICBuYW1lc3BhY2VOYW1lOiAnJyxcbiAgICAgICAgICBhcmdzOiBhcmd1bWVudHMsXG4gICAgICAgICAgcHJvbWlzZVJlc29sdmVyOiByZXNvbHZlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsKSA9PiB7XG4gICAgICAgIG9uZVNpZ25hbC5zZXRDb25zZW50R2l2ZW4oY29uc2VudClcbiAgICAgICAgICAudGhlbigodmFsdWU6IFByb21pc2U8dm9pZD4pID0+IHJlc29sdmUodmFsdWUpKVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiByZWplY3QoZXJyb3IpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgc2V0Q29uc2VudFJlcXVpcmVkKHJlcXVpcmVzQ29uc2VudDogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgICAgcmVqZWN0KCk7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5kb2VzT25lU2lnbmFsRXhpc3QoKSkge1xuICAgICAgICB0aGlzLm5nT25lU2lnbmFsRnVuY3Rpb25RdWV1ZS5wdXNoKHtcbiAgICAgICAgICBuYW1lOiAnc2V0Q29uc2VudFJlcXVpcmVkJyxcbiAgICAgICAgICBuYW1lc3BhY2VOYW1lOiAnJyxcbiAgICAgICAgICBhcmdzOiBhcmd1bWVudHMsXG4gICAgICAgICAgcHJvbWlzZVJlc29sdmVyOiByZXNvbHZlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsKSA9PiB7XG4gICAgICAgIG9uZVNpZ25hbC5zZXRDb25zZW50UmVxdWlyZWQocmVxdWlyZXNDb25zZW50KVxuICAgICAgICAgIC50aGVuKCh2YWx1ZTogUHJvbWlzZTx2b2lkPikgPT4gcmVzb2x2ZSh2YWx1ZSkpXG4gICAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBzZXREZWZhdWx0VXJsKHVybDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgICByZWplY3QoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLmRvZXNPbmVTaWduYWxFeGlzdCgpKSB7XG4gICAgICAgIHRoaXMubmdPbmVTaWduYWxGdW5jdGlvblF1ZXVlLnB1c2goe1xuICAgICAgICAgIG5hbWU6ICdzZXREZWZhdWx0VXJsJyxcbiAgICAgICAgICBuYW1lc3BhY2VOYW1lOiAnTm90aWZpY2F0aW9ucycsXG4gICAgICAgICAgYXJnczogYXJndW1lbnRzLFxuICAgICAgICAgIHByb21pc2VSZXNvbHZlcjogcmVzb2x2ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkLnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbCkgPT4ge1xuICAgICAgICBvbmVTaWduYWwuTm90aWZpY2F0aW9ucy5zZXREZWZhdWx0VXJsKHVybClcbiAgICAgICAgICAudGhlbigodmFsdWU6IFByb21pc2U8dm9pZD4pID0+IHJlc29sdmUodmFsdWUpKVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiByZWplY3QoZXJyb3IpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgc2V0RGVmYXVsdFRpdGxlKHRpdGxlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKGlzT25lU2lnbmFsU2NyaXB0RmFpbGVkKSB7XG4gICAgICAgIHJlamVjdCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuZG9lc09uZVNpZ25hbEV4aXN0KCkpIHtcbiAgICAgICAgdGhpcy5uZ09uZVNpZ25hbEZ1bmN0aW9uUXVldWUucHVzaCh7XG4gICAgICAgICAgbmFtZTogJ3NldERlZmF1bHRUaXRsZScsXG4gICAgICAgICAgbmFtZXNwYWNlTmFtZTogJ05vdGlmaWNhdGlvbnMnLFxuICAgICAgICAgIGFyZ3M6IGFyZ3VtZW50cyxcbiAgICAgICAgICBwcm9taXNlUmVzb2x2ZXI6IHJlc29sdmUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZC5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWwpID0+IHtcbiAgICAgICAgb25lU2lnbmFsLk5vdGlmaWNhdGlvbnMuc2V0RGVmYXVsdFRpdGxlKHRpdGxlKVxuICAgICAgICAgIC50aGVuKCh2YWx1ZTogUHJvbWlzZTx2b2lkPikgPT4gcmVzb2x2ZSh2YWx1ZSkpXG4gICAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRQZXJtaXNzaW9uU3RhdHVzKG9uQ29tcGxldGU6IEFjdGlvbjxOb3RpZmljYXRpb25QZXJtaXNzaW9uPik6IFByb21pc2U8Tm90aWZpY2F0aW9uUGVybWlzc2lvbj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgICAgcmVqZWN0KCk7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5kb2VzT25lU2lnbmFsRXhpc3QoKSkge1xuICAgICAgICB0aGlzLm5nT25lU2lnbmFsRnVuY3Rpb25RdWV1ZS5wdXNoKHtcbiAgICAgICAgICBuYW1lOiAnZ2V0UGVybWlzc2lvblN0YXR1cycsXG4gICAgICAgICAgbmFtZXNwYWNlTmFtZTogJ05vdGlmaWNhdGlvbnMnLFxuICAgICAgICAgIGFyZ3M6IGFyZ3VtZW50cyxcbiAgICAgICAgICBwcm9taXNlUmVzb2x2ZXI6IHJlc29sdmUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZC5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWwpID0+IHtcbiAgICAgICAgb25lU2lnbmFsLk5vdGlmaWNhdGlvbnMuZ2V0UGVybWlzc2lvblN0YXR1cyhvbkNvbXBsZXRlKVxuICAgICAgICAgIC50aGVuKCh2YWx1ZTogUHJvbWlzZTxOb3RpZmljYXRpb25QZXJtaXNzaW9uPikgPT4gcmVzb2x2ZSh2YWx1ZSkpXG4gICAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICByZXF1ZXN0UGVybWlzc2lvbigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKGlzT25lU2lnbmFsU2NyaXB0RmFpbGVkKSB7XG4gICAgICAgIHJlamVjdCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuZG9lc09uZVNpZ25hbEV4aXN0KCkpIHtcbiAgICAgICAgdGhpcy5uZ09uZVNpZ25hbEZ1bmN0aW9uUXVldWUucHVzaCh7XG4gICAgICAgICAgbmFtZTogJ3JlcXVlc3RQZXJtaXNzaW9uJyxcbiAgICAgICAgICBuYW1lc3BhY2VOYW1lOiAnTm90aWZpY2F0aW9ucycsXG4gICAgICAgICAgYXJnczogYXJndW1lbnRzLFxuICAgICAgICAgIHByb21pc2VSZXNvbHZlcjogcmVzb2x2ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkLnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbCkgPT4ge1xuICAgICAgICBvbmVTaWduYWwuTm90aWZpY2F0aW9ucy5yZXF1ZXN0UGVybWlzc2lvbigpXG4gICAgICAgICAgLnRoZW4oKHZhbHVlOiBQcm9taXNlPHZvaWQ+KSA9PiByZXNvbHZlKHZhbHVlKSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZE5vdGlmaWNhdGlvbnNFdmVudExpc3RlbmVyKGV2ZW50OiBOb3RpZmljYXRpb25FdmVudE5hbWUsIGxpc3RlbmVyOiBOb3RpZmljYXRpb25DYWxsYmFja1R5cGUpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZG9lc09uZVNpZ25hbEV4aXN0KCkpIHtcbiAgICAgIHRoaXMubmdPbmVTaWduYWxGdW5jdGlvblF1ZXVlLnB1c2goe1xuICAgICAgICBuYW1lOiAnYWRkTm90aWZpY2F0aW9uc0V2ZW50TGlzdGVuZXInLFxuICAgICAgICBuYW1lc3BhY2VOYW1lOiAnTm90aWZpY2F0aW9ucycsXG4gICAgICAgIGFyZ3M6IGFyZ3VtZW50cyxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZC5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5hZGROb3RpZmljYXRpb25zRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlTm90aWZpY2F0aW9uc0V2ZW50TGlzdGVuZXIoZXZlbnQ6IE5vdGlmaWNhdGlvbkV2ZW50TmFtZSwgbGlzdGVuZXI6IE5vdGlmaWNhdGlvbkNhbGxiYWNrVHlwZSk6IHZvaWQge1xuICAgIGlmICghdGhpcy5kb2VzT25lU2lnbmFsRXhpc3QoKSkge1xuICAgICAgdGhpcy5uZ09uZVNpZ25hbEZ1bmN0aW9uUXVldWUucHVzaCh7XG4gICAgICAgIG5hbWU6ICdyZW1vdmVOb3RpZmljYXRpb25zRXZlbnRMaXN0ZW5lcicsXG4gICAgICAgIG5hbWVzcGFjZU5hbWU6ICdOb3RpZmljYXRpb25zJyxcbiAgICAgICAgYXJnczogYXJndW1lbnRzLFxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkLnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbCkgPT4ge1xuICAgICAgb25lU2lnbmFsLnJlbW92ZU5vdGlmaWNhdGlvbnNFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcik7XG4gICAgfSk7XG4gIH1cblxuICBwcm9tcHRQdXNoKG9wdGlvbnM/OiBBdXRvUHJvbXB0T3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgICAgcmVqZWN0KCk7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5kb2VzT25lU2lnbmFsRXhpc3QoKSkge1xuICAgICAgICB0aGlzLm5nT25lU2lnbmFsRnVuY3Rpb25RdWV1ZS5wdXNoKHtcbiAgICAgICAgICBuYW1lOiAncHJvbXB0UHVzaCcsXG4gICAgICAgICAgbmFtZXNwYWNlTmFtZTogJ1NsaWRlZG93bicsXG4gICAgICAgICAgYXJnczogYXJndW1lbnRzLFxuICAgICAgICAgIHByb21pc2VSZXNvbHZlcjogcmVzb2x2ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkLnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbCkgPT4ge1xuICAgICAgICBvbmVTaWduYWwuU2xpZGVkb3duLnByb21wdFB1c2gob3B0aW9ucylcbiAgICAgICAgICAudGhlbigodmFsdWU6IFByb21pc2U8dm9pZD4pID0+IHJlc29sdmUodmFsdWUpKVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiByZWplY3QoZXJyb3IpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJvbXB0UHVzaENhdGVnb3JpZXMob3B0aW9ucz86IEF1dG9Qcm9tcHRPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgICByZWplY3QoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLmRvZXNPbmVTaWduYWxFeGlzdCgpKSB7XG4gICAgICAgIHRoaXMubmdPbmVTaWduYWxGdW5jdGlvblF1ZXVlLnB1c2goe1xuICAgICAgICAgIG5hbWU6ICdwcm9tcHRQdXNoQ2F0ZWdvcmllcycsXG4gICAgICAgICAgbmFtZXNwYWNlTmFtZTogJ1NsaWRlZG93bicsXG4gICAgICAgICAgYXJnczogYXJndW1lbnRzLFxuICAgICAgICAgIHByb21pc2VSZXNvbHZlcjogcmVzb2x2ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkLnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbCkgPT4ge1xuICAgICAgICBvbmVTaWduYWwuU2xpZGVkb3duLnByb21wdFB1c2hDYXRlZ29yaWVzKG9wdGlvbnMpXG4gICAgICAgICAgLnRoZW4oKHZhbHVlOiBQcm9taXNlPHZvaWQ+KSA9PiByZXNvbHZlKHZhbHVlKSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByb21wdFNtcyhvcHRpb25zPzogQXV0b1Byb21wdE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKGlzT25lU2lnbmFsU2NyaXB0RmFpbGVkKSB7XG4gICAgICAgIHJlamVjdCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuZG9lc09uZVNpZ25hbEV4aXN0KCkpIHtcbiAgICAgICAgdGhpcy5uZ09uZVNpZ25hbEZ1bmN0aW9uUXVldWUucHVzaCh7XG4gICAgICAgICAgbmFtZTogJ3Byb21wdFNtcycsXG4gICAgICAgICAgbmFtZXNwYWNlTmFtZTogJ1NsaWRlZG93bicsXG4gICAgICAgICAgYXJnczogYXJndW1lbnRzLFxuICAgICAgICAgIHByb21pc2VSZXNvbHZlcjogcmVzb2x2ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkLnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbCkgPT4ge1xuICAgICAgICBvbmVTaWduYWwuU2xpZGVkb3duLnByb21wdFNtcyhvcHRpb25zKVxuICAgICAgICAgIC50aGVuKCh2YWx1ZTogUHJvbWlzZTx2b2lkPikgPT4gcmVzb2x2ZSh2YWx1ZSkpXG4gICAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwcm9tcHRFbWFpbChvcHRpb25zPzogQXV0b1Byb21wdE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKGlzT25lU2lnbmFsU2NyaXB0RmFpbGVkKSB7XG4gICAgICAgIHJlamVjdCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuZG9lc09uZVNpZ25hbEV4aXN0KCkpIHtcbiAgICAgICAgdGhpcy5uZ09uZVNpZ25hbEZ1bmN0aW9uUXVldWUucHVzaCh7XG4gICAgICAgICAgbmFtZTogJ3Byb21wdEVtYWlsJyxcbiAgICAgICAgICBuYW1lc3BhY2VOYW1lOiAnU2xpZGVkb3duJyxcbiAgICAgICAgICBhcmdzOiBhcmd1bWVudHMsXG4gICAgICAgICAgcHJvbWlzZVJlc29sdmVyOiByZXNvbHZlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsKSA9PiB7XG4gICAgICAgIG9uZVNpZ25hbC5TbGlkZWRvd24ucHJvbXB0RW1haWwob3B0aW9ucylcbiAgICAgICAgICAudGhlbigodmFsdWU6IFByb21pc2U8dm9pZD4pID0+IHJlc29sdmUodmFsdWUpKVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiByZWplY3QoZXJyb3IpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJvbXB0U21zQW5kRW1haWwob3B0aW9ucz86IEF1dG9Qcm9tcHRPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgICByZWplY3QoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLmRvZXNPbmVTaWduYWxFeGlzdCgpKSB7XG4gICAgICAgIHRoaXMubmdPbmVTaWduYWxGdW5jdGlvblF1ZXVlLnB1c2goe1xuICAgICAgICAgIG5hbWU6ICdwcm9tcHRTbXNBbmRFbWFpbCcsXG4gICAgICAgICAgbmFtZXNwYWNlTmFtZTogJ1NsaWRlZG93bicsXG4gICAgICAgICAgYXJnczogYXJndW1lbnRzLFxuICAgICAgICAgIHByb21pc2VSZXNvbHZlcjogcmVzb2x2ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkLnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbCkgPT4ge1xuICAgICAgICBvbmVTaWduYWwuU2xpZGVkb3duLnByb21wdFNtc0FuZEVtYWlsKG9wdGlvbnMpXG4gICAgICAgICAgLnRoZW4oKHZhbHVlOiBQcm9taXNlPHZvaWQ+KSA9PiByZXNvbHZlKHZhbHVlKSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZFNsaWRlZG93bkV2ZW50TGlzdGVuZXIoZXZlbnQ6IFNsaWRlZG93bkV2ZW50TmFtZSwgbGlzdGVuZXI6ICh3YXNTaG93bjogYm9vbGVhbikgPT4gdm9pZCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5kb2VzT25lU2lnbmFsRXhpc3QoKSkge1xuICAgICAgdGhpcy5uZ09uZVNpZ25hbEZ1bmN0aW9uUXVldWUucHVzaCh7XG4gICAgICAgIG5hbWU6ICdhZGRTbGlkZWRvd25FdmVudExpc3RlbmVyJyxcbiAgICAgICAgbmFtZXNwYWNlTmFtZTogJ1NsaWRlZG93bicsXG4gICAgICAgIGFyZ3M6IGFyZ3VtZW50cyxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZC5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5hZGRTbGlkZWRvd25FdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcik7XG4gICAgfSk7XG4gIH1cblxuICByZW1vdmVTbGlkZWRvd25FdmVudExpc3RlbmVyKGV2ZW50OiBTbGlkZWRvd25FdmVudE5hbWUsIGxpc3RlbmVyOiAod2FzU2hvd246IGJvb2xlYW4pID0+IHZvaWQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZG9lc09uZVNpZ25hbEV4aXN0KCkpIHtcbiAgICAgIHRoaXMubmdPbmVTaWduYWxGdW5jdGlvblF1ZXVlLnB1c2goe1xuICAgICAgICBuYW1lOiAncmVtb3ZlU2xpZGVkb3duRXZlbnRMaXN0ZW5lcicsXG4gICAgICAgIG5hbWVzcGFjZU5hbWU6ICdTbGlkZWRvd24nLFxuICAgICAgICBhcmdzOiBhcmd1bWVudHMsXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsKSA9PiB7XG4gICAgICBvbmVTaWduYWwucmVtb3ZlU2xpZGVkb3duRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpO1xuICAgIH0pO1xuICB9XG5cbiAgc2V0TG9nTGV2ZWwobG9nTGV2ZWw6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5kb2VzT25lU2lnbmFsRXhpc3QoKSkge1xuICAgICAgdGhpcy5uZ09uZVNpZ25hbEZ1bmN0aW9uUXVldWUucHVzaCh7XG4gICAgICAgIG5hbWU6ICdzZXRMb2dMZXZlbCcsXG4gICAgICAgIG5hbWVzcGFjZU5hbWU6ICdEZWJ1ZycsXG4gICAgICAgIGFyZ3M6IGFyZ3VtZW50cyxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZC5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5zZXRMb2dMZXZlbChsb2dMZXZlbCk7XG4gICAgfSk7XG4gIH1cblxuICBzZW5kT3V0Y29tZShvdXRjb21lTmFtZTogc3RyaW5nLCBvdXRjb21lV2VpZ2h0PzogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmIChpc09uZVNpZ25hbFNjcmlwdEZhaWxlZCkge1xuICAgICAgICByZWplY3QoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLmRvZXNPbmVTaWduYWxFeGlzdCgpKSB7XG4gICAgICAgIHRoaXMubmdPbmVTaWduYWxGdW5jdGlvblF1ZXVlLnB1c2goe1xuICAgICAgICAgIG5hbWU6ICdzZW5kT3V0Y29tZScsXG4gICAgICAgICAgbmFtZXNwYWNlTmFtZTogJ1Nlc3Npb24nLFxuICAgICAgICAgIGFyZ3M6IGFyZ3VtZW50cyxcbiAgICAgICAgICBwcm9taXNlUmVzb2x2ZXI6IHJlc29sdmUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZC5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWwpID0+IHtcbiAgICAgICAgb25lU2lnbmFsLlNlc3Npb24uc2VuZE91dGNvbWUob3V0Y29tZU5hbWUsIG91dGNvbWVXZWlnaHQpXG4gICAgICAgICAgLnRoZW4oKHZhbHVlOiBQcm9taXNlPHZvaWQ+KSA9PiByZXNvbHZlKHZhbHVlKSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHNlbmRVbmlxdWVPdXRjb21lKG91dGNvbWVOYW1lOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKGlzT25lU2lnbmFsU2NyaXB0RmFpbGVkKSB7XG4gICAgICAgIHJlamVjdCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuZG9lc09uZVNpZ25hbEV4aXN0KCkpIHtcbiAgICAgICAgdGhpcy5uZ09uZVNpZ25hbEZ1bmN0aW9uUXVldWUucHVzaCh7XG4gICAgICAgICAgbmFtZTogJ3NlbmRVbmlxdWVPdXRjb21lJyxcbiAgICAgICAgICBuYW1lc3BhY2VOYW1lOiAnU2Vzc2lvbicsXG4gICAgICAgICAgYXJnczogYXJndW1lbnRzLFxuICAgICAgICAgIHByb21pc2VSZXNvbHZlcjogcmVzb2x2ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkLnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbCkgPT4ge1xuICAgICAgICBvbmVTaWduYWwuU2Vzc2lvbi5zZW5kVW5pcXVlT3V0Y29tZShvdXRjb21lTmFtZSlcbiAgICAgICAgICAudGhlbigodmFsdWU6IFByb21pc2U8dm9pZD4pID0+IHJlc29sdmUodmFsdWUpKVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiByZWplY3QoZXJyb3IpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkQWxpYXMobGFiZWw6IHN0cmluZywgaWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5kb2VzT25lU2lnbmFsRXhpc3QoKSkge1xuICAgICAgdGhpcy5uZ09uZVNpZ25hbEZ1bmN0aW9uUXVldWUucHVzaCh7XG4gICAgICAgIG5hbWU6ICdhZGRBbGlhcycsXG4gICAgICAgIG5hbWVzcGFjZU5hbWU6ICdVc2VyJyxcbiAgICAgICAgYXJnczogYXJndW1lbnRzLFxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkLnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbCkgPT4ge1xuICAgICAgb25lU2lnbmFsLmFkZEFsaWFzKGxhYmVsLCBpZCk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRBbGlhc2VzKGFsaWFzZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZG9lc09uZVNpZ25hbEV4aXN0KCkpIHtcbiAgICAgIHRoaXMubmdPbmVTaWduYWxGdW5jdGlvblF1ZXVlLnB1c2goe1xuICAgICAgICBuYW1lOiAnYWRkQWxpYXNlcycsXG4gICAgICAgIG5hbWVzcGFjZU5hbWU6ICdVc2VyJyxcbiAgICAgICAgYXJnczogYXJndW1lbnRzLFxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkLnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbCkgPT4ge1xuICAgICAgb25lU2lnbmFsLmFkZEFsaWFzZXMoYWxpYXNlcyk7XG4gICAgfSk7XG4gIH1cblxuICByZW1vdmVBbGlhcyhsYWJlbDogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmRvZXNPbmVTaWduYWxFeGlzdCgpKSB7XG4gICAgICB0aGlzLm5nT25lU2lnbmFsRnVuY3Rpb25RdWV1ZS5wdXNoKHtcbiAgICAgICAgbmFtZTogJ3JlbW92ZUFsaWFzJyxcbiAgICAgICAgbmFtZXNwYWNlTmFtZTogJ1VzZXInLFxuICAgICAgICBhcmdzOiBhcmd1bWVudHMsXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsKSA9PiB7XG4gICAgICBvbmVTaWduYWwucmVtb3ZlQWxpYXMobGFiZWwpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlQWxpYXNlcyhsYWJlbHM6IHN0cmluZ1tdKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmRvZXNPbmVTaWduYWxFeGlzdCgpKSB7XG4gICAgICB0aGlzLm5nT25lU2lnbmFsRnVuY3Rpb25RdWV1ZS5wdXNoKHtcbiAgICAgICAgbmFtZTogJ3JlbW92ZUFsaWFzZXMnLFxuICAgICAgICBuYW1lc3BhY2VOYW1lOiAnVXNlcicsXG4gICAgICAgIGFyZ3M6IGFyZ3VtZW50cyxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZC5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5yZW1vdmVBbGlhc2VzKGxhYmVscyk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRFbWFpbChlbWFpbDogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmRvZXNPbmVTaWduYWxFeGlzdCgpKSB7XG4gICAgICB0aGlzLm5nT25lU2lnbmFsRnVuY3Rpb25RdWV1ZS5wdXNoKHtcbiAgICAgICAgbmFtZTogJ2FkZEVtYWlsJyxcbiAgICAgICAgbmFtZXNwYWNlTmFtZTogJ1VzZXInLFxuICAgICAgICBhcmdzOiBhcmd1bWVudHMsXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsKSA9PiB7XG4gICAgICBvbmVTaWduYWwuYWRkRW1haWwoZW1haWwpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlRW1haWwoZW1haWw6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5kb2VzT25lU2lnbmFsRXhpc3QoKSkge1xuICAgICAgdGhpcy5uZ09uZVNpZ25hbEZ1bmN0aW9uUXVldWUucHVzaCh7XG4gICAgICAgIG5hbWU6ICdyZW1vdmVFbWFpbCcsXG4gICAgICAgIG5hbWVzcGFjZU5hbWU6ICdVc2VyJyxcbiAgICAgICAgYXJnczogYXJndW1lbnRzLFxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkLnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbCkgPT4ge1xuICAgICAgb25lU2lnbmFsLnJlbW92ZUVtYWlsKGVtYWlsKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZFNtcyhzbXNOdW1iZXI6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5kb2VzT25lU2lnbmFsRXhpc3QoKSkge1xuICAgICAgdGhpcy5uZ09uZVNpZ25hbEZ1bmN0aW9uUXVldWUucHVzaCh7XG4gICAgICAgIG5hbWU6ICdhZGRTbXMnLFxuICAgICAgICBuYW1lc3BhY2VOYW1lOiAnVXNlcicsXG4gICAgICAgIGFyZ3M6IGFyZ3VtZW50cyxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZC5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5hZGRTbXMoc21zTnVtYmVyKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZVNtcyhzbXNOdW1iZXI6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5kb2VzT25lU2lnbmFsRXhpc3QoKSkge1xuICAgICAgdGhpcy5uZ09uZVNpZ25hbEZ1bmN0aW9uUXVldWUucHVzaCh7XG4gICAgICAgIG5hbWU6ICdyZW1vdmVTbXMnLFxuICAgICAgICBuYW1lc3BhY2VOYW1lOiAnVXNlcicsXG4gICAgICAgIGFyZ3M6IGFyZ3VtZW50cyxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZC5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5yZW1vdmVTbXMoc21zTnVtYmVyKTtcbiAgICB9KTtcbiAgfVxuXG4gIG9wdEluKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgICAgcmVqZWN0KCk7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5kb2VzT25lU2lnbmFsRXhpc3QoKSkge1xuICAgICAgICB0aGlzLm5nT25lU2lnbmFsRnVuY3Rpb25RdWV1ZS5wdXNoKHtcbiAgICAgICAgICBuYW1lOiAnb3B0SW4nLFxuICAgICAgICAgIG5hbWVzcGFjZU5hbWU6ICdQdXNoU3Vic2NyaXB0aW9uJyxcbiAgICAgICAgICBhcmdzOiBhcmd1bWVudHMsXG4gICAgICAgICAgcHJvbWlzZVJlc29sdmVyOiByZXNvbHZlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsKSA9PiB7XG4gICAgICAgIG9uZVNpZ25hbC5QdXNoU3Vic2NyaXB0aW9uLm9wdEluKClcbiAgICAgICAgICAudGhlbigodmFsdWU6IFByb21pc2U8dm9pZD4pID0+IHJlc29sdmUodmFsdWUpKVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiByZWplY3QoZXJyb3IpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgb3B0T3V0KCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoaXNPbmVTaWduYWxTY3JpcHRGYWlsZWQpIHtcbiAgICAgICAgcmVqZWN0KCk7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5kb2VzT25lU2lnbmFsRXhpc3QoKSkge1xuICAgICAgICB0aGlzLm5nT25lU2lnbmFsRnVuY3Rpb25RdWV1ZS5wdXNoKHtcbiAgICAgICAgICBuYW1lOiAnb3B0T3V0JyxcbiAgICAgICAgICBuYW1lc3BhY2VOYW1lOiAnUHVzaFN1YnNjcmlwdGlvbicsXG4gICAgICAgICAgYXJnczogYXJndW1lbnRzLFxuICAgICAgICAgIHByb21pc2VSZXNvbHZlcjogcmVzb2x2ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgd2luZG93Lk9uZVNpZ25hbERlZmVycmVkLnB1c2goKG9uZVNpZ25hbDogSU9uZVNpZ25hbCkgPT4ge1xuICAgICAgICBvbmVTaWduYWwuUHVzaFN1YnNjcmlwdGlvbi5vcHRPdXQoKVxuICAgICAgICAgIC50aGVuKCh2YWx1ZTogUHJvbWlzZTx2b2lkPikgPT4gcmVzb2x2ZSh2YWx1ZSkpXG4gICAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRQdXNoU3Vic2NyaXB0aW9uRXZlbnRMaXN0ZW5lcihldmVudDogc3RyaW5nLCBsaXN0ZW5lcjogKGNoYW5nZTogU3Vic2NyaXB0aW9uQ2hhbmdlRXZlbnQpID0+IHZvaWQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZG9lc09uZVNpZ25hbEV4aXN0KCkpIHtcbiAgICAgIHRoaXMubmdPbmVTaWduYWxGdW5jdGlvblF1ZXVlLnB1c2goe1xuICAgICAgICBuYW1lOiAnYWRkUHVzaFN1YnNjcmlwdGlvbkV2ZW50TGlzdGVuZXInLFxuICAgICAgICBuYW1lc3BhY2VOYW1lOiAnUHVzaFN1YnNjcmlwdGlvbicsXG4gICAgICAgIGFyZ3M6IGFyZ3VtZW50cyxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWxEZWZlcnJlZC5wdXNoKChvbmVTaWduYWw6IElPbmVTaWduYWwpID0+IHtcbiAgICAgIG9uZVNpZ25hbC5hZGRQdXNoU3Vic2NyaXB0aW9uRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlUHVzaFN1YnNjcmlwdGlvbkV2ZW50TGlzdGVuZXIoZXZlbnQ6IHN0cmluZywgbGlzdGVuZXI6IChjaGFuZ2U6IFN1YnNjcmlwdGlvbkNoYW5nZUV2ZW50KSA9PiB2b2lkKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmRvZXNPbmVTaWduYWxFeGlzdCgpKSB7XG4gICAgICB0aGlzLm5nT25lU2lnbmFsRnVuY3Rpb25RdWV1ZS5wdXNoKHtcbiAgICAgICAgbmFtZTogJ3JlbW92ZVB1c2hTdWJzY3JpcHRpb25FdmVudExpc3RlbmVyJyxcbiAgICAgICAgbmFtZXNwYWNlTmFtZTogJ1B1c2hTdWJzY3JpcHRpb24nLFxuICAgICAgICBhcmdzOiBhcmd1bWVudHMsXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aW5kb3cuT25lU2lnbmFsRGVmZXJyZWQucHVzaCgob25lU2lnbmFsOiBJT25lU2lnbmFsKSA9PiB7XG4gICAgICBvbmVTaWduYWwucmVtb3ZlUHVzaFN1YnNjcmlwdGlvbkV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyKTtcbiAgICB9KTtcbiAgfVxufVxuIl19