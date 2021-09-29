import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
const ONESIGNAL_SDK_ID = 'onesignal-sdk';
const ONE_SIGNAL_SCRIPT_SRC = 'https://cdn.onesignal.com/sdks/OneSignalSDK.js';
const ONESIGNAL_NOT_SETUP_ERROR = 'OneSignal is not setup correctly.';
const MAX_TIMEOUT = 30;
export class OneSignalService {
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
                name: "on",
                args: arguments,
            });
            return;
        }
        window.OneSignal.push(() => {
            window.OneSignal.on(event, listener);
        });
    }
    ;
    off(event, listener) {
        if (!this.doesOneSignalExist()) {
            this.ngOneSignalFunctionQueue.push({
                name: "off",
                args: arguments,
            });
            return;
        }
        window.OneSignal.push(() => {
            window.OneSignal.off(event, listener);
        });
    }
    ;
    once(event, listener) {
        if (!this.doesOneSignalExist()) {
            this.ngOneSignalFunctionQueue.push({
                name: "once",
                args: arguments,
            });
            return;
        }
        window.OneSignal.push(() => {
            window.OneSignal.once(event, listener);
        });
    }
    ;
    isPushNotificationsEnabled(callback) {
        return new Promise((resolve, reject) => {
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: "isPushNotificationsEnabled",
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
    ;
    showHttpPrompt(options) {
        return new Promise((resolve, reject) => {
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: "showHttpPrompt",
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
    ;
    registerForPushNotifications(options) {
        return new Promise((resolve, reject) => {
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: "registerForPushNotifications",
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
    ;
    setDefaultNotificationUrl(url) {
        return new Promise((resolve, reject) => {
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: "setDefaultNotificationUrl",
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
    ;
    setDefaultTitle(title) {
        return new Promise((resolve, reject) => {
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: "setDefaultTitle",
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
    ;
    getTags(callback) {
        return new Promise((resolve, reject) => {
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: "getTags",
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
    ;
    sendTag(key, value, callback) {
        return new Promise((resolve, reject) => {
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: "sendTag",
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
    ;
    sendTags(tags, callback) {
        return new Promise((resolve, reject) => {
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: "sendTags",
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
    ;
    deleteTag(tag) {
        return new Promise((resolve, reject) => {
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: "deleteTag",
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
    ;
    deleteTags(tags, callback) {
        return new Promise((resolve, reject) => {
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: "deleteTags",
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
    ;
    addListenerForNotificationOpened(callback) {
        return new Promise((resolve, reject) => {
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: "addListenerForNotificationOpened",
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
    ;
    setSubscription(newSubscription) {
        return new Promise((resolve, reject) => {
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: "setSubscription",
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
    ;
    showHttpPermissionRequest(options) {
        return new Promise((resolve, reject) => {
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: "showHttpPermissionRequest",
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
    ;
    showNativePrompt() {
        return new Promise((resolve, reject) => {
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: "showNativePrompt",
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
    ;
    showSlidedownPrompt(options) {
        return new Promise((resolve, reject) => {
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: "showSlidedownPrompt",
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
    ;
    showCategorySlidedown(options) {
        return new Promise((resolve, reject) => {
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: "showCategorySlidedown",
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
    ;
    showSmsSlidedown(options) {
        return new Promise((resolve, reject) => {
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: "showSmsSlidedown",
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
    ;
    showEmailSlidedown(options) {
        return new Promise((resolve, reject) => {
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: "showEmailSlidedown",
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
    ;
    showSmsAndEmailSlidedown(options) {
        return new Promise((resolve, reject) => {
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: "showSmsAndEmailSlidedown",
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
    ;
    getNotificationPermission(onComplete) {
        return new Promise((resolve, reject) => {
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: "getNotificationPermission",
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
    ;
    getUserId(callback) {
        return new Promise((resolve, reject) => {
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: "getUserId",
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
    ;
    getSubscription(callback) {
        return new Promise((resolve, reject) => {
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: "getSubscription",
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
    ;
    setEmail(email, options) {
        return new Promise((resolve, reject) => {
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: "setEmail",
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
    ;
    setSMSNumber(smsNumber, options) {
        return new Promise((resolve, reject) => {
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: "setSMSNumber",
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
    ;
    logoutEmail() {
        return new Promise((resolve, reject) => {
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: "logoutEmail",
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
    ;
    logoutSMS() {
        return new Promise((resolve, reject) => {
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: "logoutSMS",
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
    ;
    setExternalUserId(externalUserId, authHash) {
        return new Promise((resolve, reject) => {
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: "setExternalUserId",
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
    ;
    removeExternalUserId() {
        return new Promise((resolve, reject) => {
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: "removeExternalUserId",
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
    ;
    getExternalUserId() {
        return new Promise((resolve, reject) => {
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: "getExternalUserId",
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
    ;
    provideUserConsent(consent) {
        return new Promise((resolve, reject) => {
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: "provideUserConsent",
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
    ;
    getEmailId(callback) {
        return new Promise((resolve, reject) => {
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: "getEmailId",
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
    ;
    getSMSId(callback) {
        return new Promise((resolve, reject) => {
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: "getSMSId",
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
    ;
    sendOutcome(outcomeName, outcomeWeight) {
        return new Promise((resolve, reject) => {
            if (!this.doesOneSignalExist()) {
                this.ngOneSignalFunctionQueue.push({
                    name: "sendOutcome",
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
    ;
}
OneSignalService.ɵprov = i0.ɵɵdefineInjectable({ factory: function OneSignalService_Factory() { return new OneSignalService(); }, token: OneSignalService, providedIn: "root" });
OneSignalService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
OneSignalService.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25lc2lnbmFsLW5neC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvb25lc2lnbmFsLW5neC9zcmMvbGliL29uZXNpZ25hbC1uZ3guc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUMzQyxNQUFNLGdCQUFnQixHQUFHLGVBQWUsQ0FBQztBQUN6QyxNQUFNLHFCQUFxQixHQUFHLGdEQUFnRCxDQUFDO0FBQy9FLE1BQU0seUJBQXlCLEdBQUcsbUNBQW1DLENBQUM7QUFDdEUsTUFBTSxXQUFXLEdBQUcsRUFBRSxDQUFDO0FBc0N2QixNQUFNLE9BQU8sZ0JBQWdCO0lBSTNCO1FBSFEsMkJBQXNCLEdBQUcsS0FBSyxDQUFDO1FBQy9CLDZCQUF3QixHQUE2QixFQUFFLENBQUM7UUFJaEUsbUJBQW1CO1FBRVgsaUJBQVksR0FBRyxHQUFHLEVBQUU7WUFDMUIsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNoRCxNQUFNLENBQUMsRUFBRSxHQUFHLGdCQUFnQixDQUFDO1lBQzdCLE1BQU0sQ0FBQyxHQUFHLEdBQUcscUJBQXFCLENBQUM7WUFDbkMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDcEIsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFBO1FBRU8sdUJBQWtCLEdBQUcsR0FBRyxFQUFFO1lBQ2hDLElBQUksTUFBTSxDQUFDLFNBQVMsRUFBRTtnQkFDcEIsT0FBTyxJQUFJLENBQUM7YUFDYjtZQUNELE9BQU8sS0FBSyxDQUFDO1FBQ2YsQ0FBQyxDQUFBO1FBRU8sb0NBQStCLEdBQUcsR0FBRyxFQUFFO1lBQzdDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVB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RSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzVDLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQUEsQ0FBQztJQUVGLFdBQVcsQ0FBQyxXQUFtQixFQUFFLGFBQWtDO1FBQ2pFLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFO2dCQUM5QixJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDO29CQUNqQyxJQUFJLEVBQUUsYUFBYTtvQkFDbkIsSUFBSSxFQUFFLFNBQVM7b0JBQ2YsZUFBZSxFQUFFLE9BQU87aUJBQ3pCLENBQUMsQ0FBQztnQkFDSCxPQUFPO2FBQ1I7WUFFRCxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ3pCLE1BQU0sQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxhQUFhLENBQUM7cUJBQ3JELElBQUksQ0FBQyxDQUFDLEtBQW9CLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDOUMsS0FBSyxDQUFDLENBQUMsS0FBWSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUM1QyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUFBLENBQUM7Ozs7WUFydUJILFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBBY3Rpb248VD57IChpdGVtOiBUKTogdm9pZDsgfVxuaW50ZXJmYWNlIEF1dG9Qcm9tcHRPcHRpb25zIHsgZm9yY2U/OiBib29sZWFuOyBmb3JjZVNsaWRlZG93bk92ZXJOYXRpdmU/OiBib29sZWFuOyBzbGlkZWRvd25Qcm9tcHRPcHRpb25zPzogSU9uZVNpZ25hbEF1dG9Qcm9tcHRPcHRpb25zOyB9XG5pbnRlcmZhY2UgUmVnaXN0ZXJPcHRpb25zIHsgbW9kYWxQcm9tcHQ/OiBib29sZWFuOyBodHRwUGVybWlzc2lvblJlcXVlc3Q/OiBib29sZWFuOyBzbGlkZWRvd24/OiBib29sZWFuOyBhdXRvQWNjZXB0PzogYm9vbGVhbiB9XG5pbnRlcmZhY2UgU2V0U01TT3B0aW9ucyB7IGlkZW50aWZpZXJBdXRoSGFzaD86IHN0cmluZzsgfVxuaW50ZXJmYWNlIFNldEVtYWlsT3B0aW9ucyB7IGlkZW50aWZpZXJBdXRoSGFzaD86IHN0cmluZzsgZW1haWxBdXRoSGFzaD86IHN0cmluZzsgfVxuaW50ZXJmYWNlIFRhZ3NPYmplY3Q8VD4geyBba2V5OiBzdHJpbmddOiBUOyB9XG5pbnRlcmZhY2UgSU9uZVNpZ25hbEF1dG9Qcm9tcHRPcHRpb25zIHsgZm9yY2U/OiBib29sZWFuOyBmb3JjZVNsaWRlZG93bk92ZXJOYXRpdmU/OiBib29sZWFuOyBpc0luVXBkYXRlTW9kZT86IGJvb2xlYW47IGNhdGVnb3J5T3B0aW9ucz86IElPbmVTaWduYWxDYXRlZ29yaWVzOyB9XG5pbnRlcmZhY2UgSU9uZVNpZ25hbENhdGVnb3JpZXMgeyBwb3NpdGl2ZVVwZGF0ZUJ1dHRvbjogc3RyaW5nOyBuZWdhdGl2ZVVwZGF0ZUJ1dHRvbjogc3RyaW5nOyBzYXZpbmdCdXR0b25UZXh0OiBzdHJpbmc7IGVycm9yQnV0dG9uVGV4dDogc3RyaW5nOyB1cGRhdGVNZXNzYWdlOiBzdHJpbmc7IHRhZ3M6IElPbmVTaWduYWxUYWdDYXRlZ29yeVtdOyB9XG5pbnRlcmZhY2UgSU9uZVNpZ25hbFRhZ0NhdGVnb3J5IHsgdGFnOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmc7IGNoZWNrZWQ/OiBib29sZWFuOyB9XG5cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuY29uc3QgT05FU0lHTkFMX1NES19JRCA9ICdvbmVzaWduYWwtc2RrJztcbmNvbnN0IE9ORV9TSUdOQUxfU0NSSVBUX1NSQyA9ICdodHRwczovL2Nkbi5vbmVzaWduYWwuY29tL3Nka3MvT25lU2lnbmFsU0RLLmpzJztcbmNvbnN0IE9ORVNJR05BTF9OT1RfU0VUVVBfRVJST1IgPSAnT25lU2lnbmFsIGlzIG5vdCBzZXR1cCBjb3JyZWN0bHkuJztcbmNvbnN0IE1BWF9USU1FT1VUID0gMzA7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgT25lU2lnbmFsOiBhbnk7XG4gIH1cbn1cblxuaW50ZXJmYWNlIElPbmVTaWduYWxGdW5jdGlvbkNhbGwge1xuICBuYW1lOiBzdHJpbmc7XG4gIGFyZ3M6IElBcmd1bWVudHM7XG4gIHByb21pc2VSZXNvbHZlcj86IEZ1bmN0aW9uO1xufVxuXG5pbnRlcmZhY2UgSU9uZVNpZ25hbFNlcnZpY2Uge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbn1cblxuaW50ZXJmYWNlIElJbml0T2JqZWN0IHtcbiAgYXBwSWQ6IHN0cmluZztcbiAgc3ViZG9tYWluTmFtZT86IHN0cmluZztcbiAgcmVxdWlyZXNVc2VyUHJpdmFjeUNvbnNlbnQ/OiBib29sZWFuO1xuICBwcm9tcHRPcHRpb25zPzogT2JqZWN0O1xuICB3ZWxjb21lTm90aWZpY2F0aW9uPzogT2JqZWN0O1xuICBub3RpZnlCdXR0b24/OiBPYmplY3Q7XG4gIHBlcnNpc3ROb3RpZmljYXRpb24/OiBib29sZWFuO1xuICB3ZWJob29rcz86IE9iamVjdDtcbiAgYXV0b1Jlc3Vic2NyaWJlPzogYm9vbGVhbjtcbiAgYXV0b1JlZ2lzdGVyPzogYm9vbGVhbjtcbiAgbm90aWZpY2F0aW9uQ2xpY2tIYW5kbGVyTWF0Y2g/OiBzdHJpbmc7XG4gIG5vdGlmaWNhdGlvbkNsaWNrSGFuZGxlckFjdGlvbj86IHN0cmluZztcbiAgcGF0aD86IHN0cmluZztcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBPbmVTaWduYWxTZXJ2aWNlIGltcGxlbWVudHMgSU9uZVNpZ25hbFNlcnZpY2Uge1xuICBwcml2YXRlIGlzT25lU2lnbmFsSW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBuZ09uZVNpZ25hbEZ1bmN0aW9uUXVldWU6IElPbmVTaWduYWxGdW5jdGlvbkNhbGxbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgLyogSCBFIEwgUCBFIFIgUyAqL1xuXG4gIHByaXZhdGUgaW5qZWN0U2NyaXB0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgIHNjcmlwdC5pZCA9IE9ORVNJR05BTF9TREtfSUQ7XG4gICAgc2NyaXB0LnNyYyA9IE9ORV9TSUdOQUxfU0NSSVBUX1NSQztcbiAgICBzY3JpcHQuYXN5bmMgPSB0cnVlO1xuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgfVxuXG4gIHByaXZhdGUgZG9lc09uZVNpZ25hbEV4aXN0ID0gKCkgPT4ge1xuICAgIGlmICh3aW5kb3cuT25lU2lnbmFsKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBwcm9jZXNzUXVldWVkT25lU2lnbmFsRnVuY3Rpb25zID0gKCkgPT4ge1xuICAgIHRoaXMubmdPbmVTaWduYWxGdW5jdGlvblF1ZXVlLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICBjb25zdCB7IG5hbWUsIGFyZ3MsIHByb21pc2VSZXNvbHZlciB9ID0gZWxlbWVudDtcblxuICAgICAgaWYgKCEhcHJvbWlzZVJlc29sdmVyKSB7XG4gICAgICAgICh0aGlzIGFzIElPbmVTaWduYWxTZXJ2aWNlKVtuYW1lXSguLi5hcmdzKS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgICAgIHByb21pc2VSZXNvbHZlcihyZXN1bHQpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5PbmVTaWduYWxbbmFtZV0oLi4uYXJncyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHNldHVwT25lU2lnbmFsSWZNaXNzaW5nID0gKCkgPT4ge1xuICAgIGlmICghdGhpcy5kb2VzT25lU2lnbmFsRXhpc3QoKSkge1xuICAgICAgd2luZG93Lk9uZVNpZ25hbCA9IHdpbmRvdy5PbmVTaWduYWwgfHwgW107XG4gICAgfVxuICB9XG5cbiAgLyogUCBVIEIgTCBJIEMgKi9cblxuICBpbml0KG9wdGlvbnM6IElJbml0T2JqZWN0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KHJlc29sdmUgPT4ge1xuICAgICAgaWYgKHRoaXMuaXNPbmVTaWduYWxJbml0aWFsaXplZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaW5qZWN0U2NyaXB0KCk7XG4gICAgICB0aGlzLnNldHVwT25lU2lnbmFsSWZNaXNzaW5nKCk7XG4gICAgICB3aW5kb3cuT25lU2lnbmFsLnB1c2goKCkgPT4ge1xuICAgICAgICB3aW5kb3cuT25lU2lnbmFsLmluaXQob3B0aW9ucyk7XG4gICAgICB9KVxuXG4gICAgICBjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoT05FU0lHTkFMX05PVF9TRVRVUF9FUlJPUik7XG4gICAgICB9LCBNQVhfVElNRU9VVCAqIDFfMDAwKTtcblxuICAgICAgd2luZG93Lk9uZVNpZ25hbC5wdXNoKCgpID0+IHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICB0aGlzLmlzT25lU2lnbmFsSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnByb2Nlc3NRdWV1ZWRPbmVTaWduYWxGdW5jdGlvbnMoKTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSk7XG4gICAgfSlcbiAgfVxuXG5cbiAgb24oZXZlbnQ6IHN0cmluZywgbGlzdGVuZXI6IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmRvZXNPbmVTaWduYWxFeGlzdCgpKSB7XG4gICAgICB0aGlzLm5nT25lU2lnbmFsRnVuY3Rpb25RdWV1ZS5wdXNoKHtcbiAgICAgICAgbmFtZTogXCJvblwiLFxuICAgICAgICBhcmdzOiBhcmd1bWVudHMsXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aW5kb3cuT25lU2lnbmFsLnB1c2goKCkgPT4ge1xuICAgICAgd2luZG93Lk9uZVNpZ25hbC5vbihldmVudCwgbGlzdGVuZXIpXG4gICAgfSk7XG4gIH07XG5cbiAgb2ZmKGV2ZW50OiBzdHJpbmcsIGxpc3RlbmVyOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIGlmICghdGhpcy5kb2VzT25lU2lnbmFsRXhpc3QoKSkge1xuICAgICAgdGhpcy5uZ09uZVNpZ25hbEZ1bmN0aW9uUXVldWUucHVzaCh7XG4gICAgICAgIG5hbWU6IFwib2ZmXCIsXG4gICAgICAgIGFyZ3M6IGFyZ3VtZW50cyxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWwucHVzaCgoKSA9PiB7XG4gICAgICB3aW5kb3cuT25lU2lnbmFsLm9mZihldmVudCwgbGlzdGVuZXIpXG4gICAgfSk7XG4gIH07XG5cbiAgb25jZShldmVudDogc3RyaW5nLCBsaXN0ZW5lcjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZG9lc09uZVNpZ25hbEV4aXN0KCkpIHtcbiAgICAgIHRoaXMubmdPbmVTaWduYWxGdW5jdGlvblF1ZXVlLnB1c2goe1xuICAgICAgICBuYW1lOiBcIm9uY2VcIixcbiAgICAgICAgYXJnczogYXJndW1lbnRzLFxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbC5wdXNoKCgpID0+IHtcbiAgICAgIHdpbmRvdy5PbmVTaWduYWwub25jZShldmVudCwgbGlzdGVuZXIpXG4gICAgfSk7XG4gIH07XG5cbiAgaXNQdXNoTm90aWZpY2F0aW9uc0VuYWJsZWQoY2FsbGJhY2s/OiBBY3Rpb248Ym9vbGVhbj4pOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmRvZXNPbmVTaWduYWxFeGlzdCgpKSB7XG4gICAgICAgIHRoaXMubmdPbmVTaWduYWxGdW5jdGlvblF1ZXVlLnB1c2goe1xuICAgICAgICAgIG5hbWU6IFwiaXNQdXNoTm90aWZpY2F0aW9uc0VuYWJsZWRcIixcbiAgICAgICAgICBhcmdzOiBhcmd1bWVudHMsXG4gICAgICAgICAgcHJvbWlzZVJlc29sdmVyOiByZXNvbHZlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cuT25lU2lnbmFsLnB1c2goKCkgPT4ge1xuICAgICAgICB3aW5kb3cuT25lU2lnbmFsLmlzUHVzaE5vdGlmaWNhdGlvbnNFbmFibGVkKGNhbGxiYWNrKVxuICAgICAgICAgIC50aGVuKCh2YWx1ZTogUHJvbWlzZTxib29sZWFuPikgPT4gcmVzb2x2ZSh2YWx1ZSkpXG4gICAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgc2hvd0h0dHBQcm9tcHQob3B0aW9ucz86IEF1dG9Qcm9tcHRPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghdGhpcy5kb2VzT25lU2lnbmFsRXhpc3QoKSkge1xuICAgICAgICB0aGlzLm5nT25lU2lnbmFsRnVuY3Rpb25RdWV1ZS5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBcInNob3dIdHRwUHJvbXB0XCIsXG4gICAgICAgICAgYXJnczogYXJndW1lbnRzLFxuICAgICAgICAgIHByb21pc2VSZXNvbHZlcjogcmVzb2x2ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgd2luZG93Lk9uZVNpZ25hbC5wdXNoKCgpID0+IHtcbiAgICAgICAgd2luZG93Lk9uZVNpZ25hbC5zaG93SHR0cFByb21wdChvcHRpb25zKVxuICAgICAgICAgIC50aGVuKCh2YWx1ZTogUHJvbWlzZTx2b2lkPikgPT4gcmVzb2x2ZSh2YWx1ZSkpXG4gICAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmVnaXN0ZXJGb3JQdXNoTm90aWZpY2F0aW9ucyhvcHRpb25zPzogUmVnaXN0ZXJPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghdGhpcy5kb2VzT25lU2lnbmFsRXhpc3QoKSkge1xuICAgICAgICB0aGlzLm5nT25lU2lnbmFsRnVuY3Rpb25RdWV1ZS5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBcInJlZ2lzdGVyRm9yUHVzaE5vdGlmaWNhdGlvbnNcIixcbiAgICAgICAgICBhcmdzOiBhcmd1bWVudHMsXG4gICAgICAgICAgcHJvbWlzZVJlc29sdmVyOiByZXNvbHZlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cuT25lU2lnbmFsLnB1c2goKCkgPT4ge1xuICAgICAgICB3aW5kb3cuT25lU2lnbmFsLnJlZ2lzdGVyRm9yUHVzaE5vdGlmaWNhdGlvbnMob3B0aW9ucylcbiAgICAgICAgICAudGhlbigodmFsdWU6IFByb21pc2U8dm9pZD4pID0+IHJlc29sdmUodmFsdWUpKVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiByZWplY3QoZXJyb3IpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHNldERlZmF1bHROb3RpZmljYXRpb25VcmwodXJsOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmRvZXNPbmVTaWduYWxFeGlzdCgpKSB7XG4gICAgICAgIHRoaXMubmdPbmVTaWduYWxGdW5jdGlvblF1ZXVlLnB1c2goe1xuICAgICAgICAgIG5hbWU6IFwic2V0RGVmYXVsdE5vdGlmaWNhdGlvblVybFwiLFxuICAgICAgICAgIGFyZ3M6IGFyZ3VtZW50cyxcbiAgICAgICAgICBwcm9taXNlUmVzb2x2ZXI6IHJlc29sdmUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5PbmVTaWduYWwucHVzaCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5PbmVTaWduYWwuc2V0RGVmYXVsdE5vdGlmaWNhdGlvblVybCh1cmwpXG4gICAgICAgICAgLnRoZW4oKHZhbHVlOiBQcm9taXNlPHZvaWQ+KSA9PiByZXNvbHZlKHZhbHVlKSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBzZXREZWZhdWx0VGl0bGUodGl0bGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIXRoaXMuZG9lc09uZVNpZ25hbEV4aXN0KCkpIHtcbiAgICAgICAgdGhpcy5uZ09uZVNpZ25hbEZ1bmN0aW9uUXVldWUucHVzaCh7XG4gICAgICAgICAgbmFtZTogXCJzZXREZWZhdWx0VGl0bGVcIixcbiAgICAgICAgICBhcmdzOiBhcmd1bWVudHMsXG4gICAgICAgICAgcHJvbWlzZVJlc29sdmVyOiByZXNvbHZlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cuT25lU2lnbmFsLnB1c2goKCkgPT4ge1xuICAgICAgICB3aW5kb3cuT25lU2lnbmFsLnNldERlZmF1bHRUaXRsZSh0aXRsZSlcbiAgICAgICAgICAudGhlbigodmFsdWU6IFByb21pc2U8dm9pZD4pID0+IHJlc29sdmUodmFsdWUpKVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiByZWplY3QoZXJyb3IpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGdldFRhZ3MoY2FsbGJhY2s/OiBBY3Rpb248YW55Pik6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIXRoaXMuZG9lc09uZVNpZ25hbEV4aXN0KCkpIHtcbiAgICAgICAgdGhpcy5uZ09uZVNpZ25hbEZ1bmN0aW9uUXVldWUucHVzaCh7XG4gICAgICAgICAgbmFtZTogXCJnZXRUYWdzXCIsXG4gICAgICAgICAgYXJnczogYXJndW1lbnRzLFxuICAgICAgICAgIHByb21pc2VSZXNvbHZlcjogcmVzb2x2ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgd2luZG93Lk9uZVNpZ25hbC5wdXNoKCgpID0+IHtcbiAgICAgICAgd2luZG93Lk9uZVNpZ25hbC5nZXRUYWdzKGNhbGxiYWNrKVxuICAgICAgICAgIC50aGVuKCh2YWx1ZTogUHJvbWlzZTx2b2lkPikgPT4gcmVzb2x2ZSh2YWx1ZSkpXG4gICAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgc2VuZFRhZyhrZXk6IHN0cmluZywgdmFsdWU6IGFueSwgY2FsbGJhY2s/OiBBY3Rpb248T2JqZWN0Pik6IFByb21pc2U8T2JqZWN0IHwgbnVsbD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIXRoaXMuZG9lc09uZVNpZ25hbEV4aXN0KCkpIHtcbiAgICAgICAgdGhpcy5uZ09uZVNpZ25hbEZ1bmN0aW9uUXVldWUucHVzaCh7XG4gICAgICAgICAgbmFtZTogXCJzZW5kVGFnXCIsXG4gICAgICAgICAgYXJnczogYXJndW1lbnRzLFxuICAgICAgICAgIHByb21pc2VSZXNvbHZlcjogcmVzb2x2ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgd2luZG93Lk9uZVNpZ25hbC5wdXNoKCgpID0+IHtcbiAgICAgICAgd2luZG93Lk9uZVNpZ25hbC5zZW5kVGFnKGtleSwgdmFsdWUsIGNhbGxiYWNrKVxuICAgICAgICAgIC50aGVuKCh2YWx1ZTogUHJvbWlzZTxPYmplY3QgfCBudWxsPikgPT4gcmVzb2x2ZSh2YWx1ZSkpXG4gICAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgc2VuZFRhZ3ModGFnczogVGFnc09iamVjdDxhbnk+LCBjYWxsYmFjaz86IEFjdGlvbjxPYmplY3Q+KTogUHJvbWlzZTxPYmplY3QgfCBudWxsPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghdGhpcy5kb2VzT25lU2lnbmFsRXhpc3QoKSkge1xuICAgICAgICB0aGlzLm5nT25lU2lnbmFsRnVuY3Rpb25RdWV1ZS5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBcInNlbmRUYWdzXCIsXG4gICAgICAgICAgYXJnczogYXJndW1lbnRzLFxuICAgICAgICAgIHByb21pc2VSZXNvbHZlcjogcmVzb2x2ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgd2luZG93Lk9uZVNpZ25hbC5wdXNoKCgpID0+IHtcbiAgICAgICAgd2luZG93Lk9uZVNpZ25hbC5zZW5kVGFncyh0YWdzLCBjYWxsYmFjaylcbiAgICAgICAgICAudGhlbigodmFsdWU6IFByb21pc2U8T2JqZWN0IHwgbnVsbD4pID0+IHJlc29sdmUodmFsdWUpKVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiByZWplY3QoZXJyb3IpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGRlbGV0ZVRhZyh0YWc6IHN0cmluZyk6IFByb21pc2U8QXJyYXk8c3RyaW5nPj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIXRoaXMuZG9lc09uZVNpZ25hbEV4aXN0KCkpIHtcbiAgICAgICAgdGhpcy5uZ09uZVNpZ25hbEZ1bmN0aW9uUXVldWUucHVzaCh7XG4gICAgICAgICAgbmFtZTogXCJkZWxldGVUYWdcIixcbiAgICAgICAgICBhcmdzOiBhcmd1bWVudHMsXG4gICAgICAgICAgcHJvbWlzZVJlc29sdmVyOiByZXNvbHZlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cuT25lU2lnbmFsLnB1c2goKCkgPT4ge1xuICAgICAgICB3aW5kb3cuT25lU2lnbmFsLmRlbGV0ZVRhZyh0YWcpXG4gICAgICAgICAgLnRoZW4oKHZhbHVlOiBQcm9taXNlPEFycmF5PHN0cmluZz4+KSA9PiByZXNvbHZlKHZhbHVlKSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBkZWxldGVUYWdzKHRhZ3M6IEFycmF5PHN0cmluZz4sIGNhbGxiYWNrPzogQWN0aW9uPEFycmF5PHN0cmluZz4+KTogUHJvbWlzZTxBcnJheTxzdHJpbmc+PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghdGhpcy5kb2VzT25lU2lnbmFsRXhpc3QoKSkge1xuICAgICAgICB0aGlzLm5nT25lU2lnbmFsRnVuY3Rpb25RdWV1ZS5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBcImRlbGV0ZVRhZ3NcIixcbiAgICAgICAgICBhcmdzOiBhcmd1bWVudHMsXG4gICAgICAgICAgcHJvbWlzZVJlc29sdmVyOiByZXNvbHZlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cuT25lU2lnbmFsLnB1c2goKCkgPT4ge1xuICAgICAgICB3aW5kb3cuT25lU2lnbmFsLmRlbGV0ZVRhZ3ModGFncywgY2FsbGJhY2spXG4gICAgICAgICAgLnRoZW4oKHZhbHVlOiBQcm9taXNlPEFycmF5PHN0cmluZz4+KSA9PiByZXNvbHZlKHZhbHVlKSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBhZGRMaXN0ZW5lckZvck5vdGlmaWNhdGlvbk9wZW5lZChjYWxsYmFjaz86IEFjdGlvbjxOb3RpZmljYXRpb24+KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghdGhpcy5kb2VzT25lU2lnbmFsRXhpc3QoKSkge1xuICAgICAgICB0aGlzLm5nT25lU2lnbmFsRnVuY3Rpb25RdWV1ZS5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBcImFkZExpc3RlbmVyRm9yTm90aWZpY2F0aW9uT3BlbmVkXCIsXG4gICAgICAgICAgYXJnczogYXJndW1lbnRzLFxuICAgICAgICAgIHByb21pc2VSZXNvbHZlcjogcmVzb2x2ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgd2luZG93Lk9uZVNpZ25hbC5wdXNoKCgpID0+IHtcbiAgICAgICAgd2luZG93Lk9uZVNpZ25hbC5hZGRMaXN0ZW5lckZvck5vdGlmaWNhdGlvbk9wZW5lZChjYWxsYmFjaylcbiAgICAgICAgICAudGhlbigodmFsdWU6IFByb21pc2U8dm9pZD4pID0+IHJlc29sdmUodmFsdWUpKVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiByZWplY3QoZXJyb3IpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHNldFN1YnNjcmlwdGlvbihuZXdTdWJzY3JpcHRpb246IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmRvZXNPbmVTaWduYWxFeGlzdCgpKSB7XG4gICAgICAgIHRoaXMubmdPbmVTaWduYWxGdW5jdGlvblF1ZXVlLnB1c2goe1xuICAgICAgICAgIG5hbWU6IFwic2V0U3Vic2NyaXB0aW9uXCIsXG4gICAgICAgICAgYXJnczogYXJndW1lbnRzLFxuICAgICAgICAgIHByb21pc2VSZXNvbHZlcjogcmVzb2x2ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgd2luZG93Lk9uZVNpZ25hbC5wdXNoKCgpID0+IHtcbiAgICAgICAgd2luZG93Lk9uZVNpZ25hbC5zZXRTdWJzY3JpcHRpb24obmV3U3Vic2NyaXB0aW9uKVxuICAgICAgICAgIC50aGVuKCh2YWx1ZTogUHJvbWlzZTx2b2lkPikgPT4gcmVzb2x2ZSh2YWx1ZSkpXG4gICAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgc2hvd0h0dHBQZXJtaXNzaW9uUmVxdWVzdChvcHRpb25zPzogQXV0b1Byb21wdE9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIXRoaXMuZG9lc09uZVNpZ25hbEV4aXN0KCkpIHtcbiAgICAgICAgdGhpcy5uZ09uZVNpZ25hbEZ1bmN0aW9uUXVldWUucHVzaCh7XG4gICAgICAgICAgbmFtZTogXCJzaG93SHR0cFBlcm1pc3Npb25SZXF1ZXN0XCIsXG4gICAgICAgICAgYXJnczogYXJndW1lbnRzLFxuICAgICAgICAgIHByb21pc2VSZXNvbHZlcjogcmVzb2x2ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgd2luZG93Lk9uZVNpZ25hbC5wdXNoKCgpID0+IHtcbiAgICAgICAgd2luZG93Lk9uZVNpZ25hbC5zaG93SHR0cFBlcm1pc3Npb25SZXF1ZXN0KG9wdGlvbnMpXG4gICAgICAgICAgLnRoZW4oKHZhbHVlOiBQcm9taXNlPGFueT4pID0+IHJlc29sdmUodmFsdWUpKVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiByZWplY3QoZXJyb3IpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHNob3dOYXRpdmVQcm9tcHQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghdGhpcy5kb2VzT25lU2lnbmFsRXhpc3QoKSkge1xuICAgICAgICB0aGlzLm5nT25lU2lnbmFsRnVuY3Rpb25RdWV1ZS5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBcInNob3dOYXRpdmVQcm9tcHRcIixcbiAgICAgICAgICBhcmdzOiBhcmd1bWVudHMsXG4gICAgICAgICAgcHJvbWlzZVJlc29sdmVyOiByZXNvbHZlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cuT25lU2lnbmFsLnB1c2goKCkgPT4ge1xuICAgICAgICB3aW5kb3cuT25lU2lnbmFsLnNob3dOYXRpdmVQcm9tcHQoKVxuICAgICAgICAgIC50aGVuKCh2YWx1ZTogUHJvbWlzZTx2b2lkPikgPT4gcmVzb2x2ZSh2YWx1ZSkpXG4gICAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgc2hvd1NsaWRlZG93blByb21wdChvcHRpb25zPzogQXV0b1Byb21wdE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmRvZXNPbmVTaWduYWxFeGlzdCgpKSB7XG4gICAgICAgIHRoaXMubmdPbmVTaWduYWxGdW5jdGlvblF1ZXVlLnB1c2goe1xuICAgICAgICAgIG5hbWU6IFwic2hvd1NsaWRlZG93blByb21wdFwiLFxuICAgICAgICAgIGFyZ3M6IGFyZ3VtZW50cyxcbiAgICAgICAgICBwcm9taXNlUmVzb2x2ZXI6IHJlc29sdmUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5PbmVTaWduYWwucHVzaCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5PbmVTaWduYWwuc2hvd1NsaWRlZG93blByb21wdChvcHRpb25zKVxuICAgICAgICAgIC50aGVuKCh2YWx1ZTogUHJvbWlzZTx2b2lkPikgPT4gcmVzb2x2ZSh2YWx1ZSkpXG4gICAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgc2hvd0NhdGVnb3J5U2xpZGVkb3duKG9wdGlvbnM/OiBBdXRvUHJvbXB0T3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIXRoaXMuZG9lc09uZVNpZ25hbEV4aXN0KCkpIHtcbiAgICAgICAgdGhpcy5uZ09uZVNpZ25hbEZ1bmN0aW9uUXVldWUucHVzaCh7XG4gICAgICAgICAgbmFtZTogXCJzaG93Q2F0ZWdvcnlTbGlkZWRvd25cIixcbiAgICAgICAgICBhcmdzOiBhcmd1bWVudHMsXG4gICAgICAgICAgcHJvbWlzZVJlc29sdmVyOiByZXNvbHZlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cuT25lU2lnbmFsLnB1c2goKCkgPT4ge1xuICAgICAgICB3aW5kb3cuT25lU2lnbmFsLnNob3dDYXRlZ29yeVNsaWRlZG93bihvcHRpb25zKVxuICAgICAgICAgIC50aGVuKCh2YWx1ZTogUHJvbWlzZTx2b2lkPikgPT4gcmVzb2x2ZSh2YWx1ZSkpXG4gICAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgc2hvd1Ntc1NsaWRlZG93bihvcHRpb25zPzogQXV0b1Byb21wdE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmRvZXNPbmVTaWduYWxFeGlzdCgpKSB7XG4gICAgICAgIHRoaXMubmdPbmVTaWduYWxGdW5jdGlvblF1ZXVlLnB1c2goe1xuICAgICAgICAgIG5hbWU6IFwic2hvd1Ntc1NsaWRlZG93blwiLFxuICAgICAgICAgIGFyZ3M6IGFyZ3VtZW50cyxcbiAgICAgICAgICBwcm9taXNlUmVzb2x2ZXI6IHJlc29sdmUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5PbmVTaWduYWwucHVzaCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5PbmVTaWduYWwuc2hvd1Ntc1NsaWRlZG93bihvcHRpb25zKVxuICAgICAgICAgIC50aGVuKCh2YWx1ZTogUHJvbWlzZTx2b2lkPikgPT4gcmVzb2x2ZSh2YWx1ZSkpXG4gICAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgc2hvd0VtYWlsU2xpZGVkb3duKG9wdGlvbnM/OiBBdXRvUHJvbXB0T3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIXRoaXMuZG9lc09uZVNpZ25hbEV4aXN0KCkpIHtcbiAgICAgICAgdGhpcy5uZ09uZVNpZ25hbEZ1bmN0aW9uUXVldWUucHVzaCh7XG4gICAgICAgICAgbmFtZTogXCJzaG93RW1haWxTbGlkZWRvd25cIixcbiAgICAgICAgICBhcmdzOiBhcmd1bWVudHMsXG4gICAgICAgICAgcHJvbWlzZVJlc29sdmVyOiByZXNvbHZlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cuT25lU2lnbmFsLnB1c2goKCkgPT4ge1xuICAgICAgICB3aW5kb3cuT25lU2lnbmFsLnNob3dFbWFpbFNsaWRlZG93bihvcHRpb25zKVxuICAgICAgICAgIC50aGVuKCh2YWx1ZTogUHJvbWlzZTx2b2lkPikgPT4gcmVzb2x2ZSh2YWx1ZSkpXG4gICAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgc2hvd1Ntc0FuZEVtYWlsU2xpZGVkb3duKG9wdGlvbnM/OiBBdXRvUHJvbXB0T3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIXRoaXMuZG9lc09uZVNpZ25hbEV4aXN0KCkpIHtcbiAgICAgICAgdGhpcy5uZ09uZVNpZ25hbEZ1bmN0aW9uUXVldWUucHVzaCh7XG4gICAgICAgICAgbmFtZTogXCJzaG93U21zQW5kRW1haWxTbGlkZWRvd25cIixcbiAgICAgICAgICBhcmdzOiBhcmd1bWVudHMsXG4gICAgICAgICAgcHJvbWlzZVJlc29sdmVyOiByZXNvbHZlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cuT25lU2lnbmFsLnB1c2goKCkgPT4ge1xuICAgICAgICB3aW5kb3cuT25lU2lnbmFsLnNob3dTbXNBbmRFbWFpbFNsaWRlZG93bihvcHRpb25zKVxuICAgICAgICAgIC50aGVuKCh2YWx1ZTogUHJvbWlzZTx2b2lkPikgPT4gcmVzb2x2ZSh2YWx1ZSkpXG4gICAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgZ2V0Tm90aWZpY2F0aW9uUGVybWlzc2lvbihvbkNvbXBsZXRlPzogRnVuY3Rpb24pOiBQcm9taXNlPE5vdGlmaWNhdGlvblBlcm1pc3Npb24+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmRvZXNPbmVTaWduYWxFeGlzdCgpKSB7XG4gICAgICAgIHRoaXMubmdPbmVTaWduYWxGdW5jdGlvblF1ZXVlLnB1c2goe1xuICAgICAgICAgIG5hbWU6IFwiZ2V0Tm90aWZpY2F0aW9uUGVybWlzc2lvblwiLFxuICAgICAgICAgIGFyZ3M6IGFyZ3VtZW50cyxcbiAgICAgICAgICBwcm9taXNlUmVzb2x2ZXI6IHJlc29sdmUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5PbmVTaWduYWwucHVzaCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5PbmVTaWduYWwuZ2V0Tm90aWZpY2F0aW9uUGVybWlzc2lvbihvbkNvbXBsZXRlKVxuICAgICAgICAgIC50aGVuKCh2YWx1ZTogUHJvbWlzZTxOb3RpZmljYXRpb25QZXJtaXNzaW9uPikgPT4gcmVzb2x2ZSh2YWx1ZSkpXG4gICAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgZ2V0VXNlcklkKGNhbGxiYWNrPzogQWN0aW9uPHN0cmluZyB8IHVuZGVmaW5lZCB8IG51bGw+KTogUHJvbWlzZTxzdHJpbmcgfCB1bmRlZmluZWQgfCBudWxsPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghdGhpcy5kb2VzT25lU2lnbmFsRXhpc3QoKSkge1xuICAgICAgICB0aGlzLm5nT25lU2lnbmFsRnVuY3Rpb25RdWV1ZS5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBcImdldFVzZXJJZFwiLFxuICAgICAgICAgIGFyZ3M6IGFyZ3VtZW50cyxcbiAgICAgICAgICBwcm9taXNlUmVzb2x2ZXI6IHJlc29sdmUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5PbmVTaWduYWwucHVzaCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5PbmVTaWduYWwuZ2V0VXNlcklkKGNhbGxiYWNrKVxuICAgICAgICAgIC50aGVuKCh2YWx1ZTogUHJvbWlzZTxzdHJpbmcgfCB1bmRlZmluZWQgfCBudWxsPikgPT4gcmVzb2x2ZSh2YWx1ZSkpXG4gICAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgZ2V0U3Vic2NyaXB0aW9uKGNhbGxiYWNrPzogQWN0aW9uPGJvb2xlYW4+KTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghdGhpcy5kb2VzT25lU2lnbmFsRXhpc3QoKSkge1xuICAgICAgICB0aGlzLm5nT25lU2lnbmFsRnVuY3Rpb25RdWV1ZS5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBcImdldFN1YnNjcmlwdGlvblwiLFxuICAgICAgICAgIGFyZ3M6IGFyZ3VtZW50cyxcbiAgICAgICAgICBwcm9taXNlUmVzb2x2ZXI6IHJlc29sdmUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5PbmVTaWduYWwucHVzaCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5PbmVTaWduYWwuZ2V0U3Vic2NyaXB0aW9uKGNhbGxiYWNrKVxuICAgICAgICAgIC50aGVuKCh2YWx1ZTogUHJvbWlzZTxib29sZWFuPikgPT4gcmVzb2x2ZSh2YWx1ZSkpXG4gICAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgc2V0RW1haWwoZW1haWw6IHN0cmluZywgb3B0aW9ucz86IFNldEVtYWlsT3B0aW9ucyk6IFByb21pc2U8c3RyaW5nfG51bGw+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmRvZXNPbmVTaWduYWxFeGlzdCgpKSB7XG4gICAgICAgIHRoaXMubmdPbmVTaWduYWxGdW5jdGlvblF1ZXVlLnB1c2goe1xuICAgICAgICAgIG5hbWU6IFwic2V0RW1haWxcIixcbiAgICAgICAgICBhcmdzOiBhcmd1bWVudHMsXG4gICAgICAgICAgcHJvbWlzZVJlc29sdmVyOiByZXNvbHZlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cuT25lU2lnbmFsLnB1c2goKCkgPT4ge1xuICAgICAgICB3aW5kb3cuT25lU2lnbmFsLnNldEVtYWlsKGVtYWlsLCBvcHRpb25zKVxuICAgICAgICAgIC50aGVuKCh2YWx1ZTogUHJvbWlzZTxzdHJpbmd8bnVsbD4pID0+IHJlc29sdmUodmFsdWUpKVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiByZWplY3QoZXJyb3IpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHNldFNNU051bWJlcihzbXNOdW1iZXI6IHN0cmluZywgb3B0aW9ucz86IFNldFNNU09wdGlvbnMpOiBQcm9taXNlPHN0cmluZyB8IG51bGw+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmRvZXNPbmVTaWduYWxFeGlzdCgpKSB7XG4gICAgICAgIHRoaXMubmdPbmVTaWduYWxGdW5jdGlvblF1ZXVlLnB1c2goe1xuICAgICAgICAgIG5hbWU6IFwic2V0U01TTnVtYmVyXCIsXG4gICAgICAgICAgYXJnczogYXJndW1lbnRzLFxuICAgICAgICAgIHByb21pc2VSZXNvbHZlcjogcmVzb2x2ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgd2luZG93Lk9uZVNpZ25hbC5wdXNoKCgpID0+IHtcbiAgICAgICAgd2luZG93Lk9uZVNpZ25hbC5zZXRTTVNOdW1iZXIoc21zTnVtYmVyLCBvcHRpb25zKVxuICAgICAgICAgIC50aGVuKCh2YWx1ZTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPikgPT4gcmVzb2x2ZSh2YWx1ZSkpXG4gICAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgbG9nb3V0RW1haWwoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghdGhpcy5kb2VzT25lU2lnbmFsRXhpc3QoKSkge1xuICAgICAgICB0aGlzLm5nT25lU2lnbmFsRnVuY3Rpb25RdWV1ZS5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBcImxvZ291dEVtYWlsXCIsXG4gICAgICAgICAgYXJnczogYXJndW1lbnRzLFxuICAgICAgICAgIHByb21pc2VSZXNvbHZlcjogcmVzb2x2ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgd2luZG93Lk9uZVNpZ25hbC5wdXNoKCgpID0+IHtcbiAgICAgICAgd2luZG93Lk9uZVNpZ25hbC5sb2dvdXRFbWFpbCgpXG4gICAgICAgICAgLnRoZW4oKHZhbHVlOiBQcm9taXNlPHZvaWQ+KSA9PiByZXNvbHZlKHZhbHVlKSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBsb2dvdXRTTVMoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghdGhpcy5kb2VzT25lU2lnbmFsRXhpc3QoKSkge1xuICAgICAgICB0aGlzLm5nT25lU2lnbmFsRnVuY3Rpb25RdWV1ZS5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBcImxvZ291dFNNU1wiLFxuICAgICAgICAgIGFyZ3M6IGFyZ3VtZW50cyxcbiAgICAgICAgICBwcm9taXNlUmVzb2x2ZXI6IHJlc29sdmUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5PbmVTaWduYWwucHVzaCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5PbmVTaWduYWwubG9nb3V0U01TKClcbiAgICAgICAgICAudGhlbigodmFsdWU6IFByb21pc2U8dm9pZD4pID0+IHJlc29sdmUodmFsdWUpKVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiByZWplY3QoZXJyb3IpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHNldEV4dGVybmFsVXNlcklkKGV4dGVybmFsVXNlcklkOiBzdHJpbmcgfCB1bmRlZmluZWQgfCBudWxsLCBhdXRoSGFzaD86IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIXRoaXMuZG9lc09uZVNpZ25hbEV4aXN0KCkpIHtcbiAgICAgICAgdGhpcy5uZ09uZVNpZ25hbEZ1bmN0aW9uUXVldWUucHVzaCh7XG4gICAgICAgICAgbmFtZTogXCJzZXRFeHRlcm5hbFVzZXJJZFwiLFxuICAgICAgICAgIGFyZ3M6IGFyZ3VtZW50cyxcbiAgICAgICAgICBwcm9taXNlUmVzb2x2ZXI6IHJlc29sdmUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5PbmVTaWduYWwucHVzaCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5PbmVTaWduYWwuc2V0RXh0ZXJuYWxVc2VySWQoZXh0ZXJuYWxVc2VySWQsIGF1dGhIYXNoKVxuICAgICAgICAgIC50aGVuKCh2YWx1ZTogUHJvbWlzZTx2b2lkPikgPT4gcmVzb2x2ZSh2YWx1ZSkpXG4gICAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmVtb3ZlRXh0ZXJuYWxVc2VySWQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghdGhpcy5kb2VzT25lU2lnbmFsRXhpc3QoKSkge1xuICAgICAgICB0aGlzLm5nT25lU2lnbmFsRnVuY3Rpb25RdWV1ZS5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBcInJlbW92ZUV4dGVybmFsVXNlcklkXCIsXG4gICAgICAgICAgYXJnczogYXJndW1lbnRzLFxuICAgICAgICAgIHByb21pc2VSZXNvbHZlcjogcmVzb2x2ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgd2luZG93Lk9uZVNpZ25hbC5wdXNoKCgpID0+IHtcbiAgICAgICAgd2luZG93Lk9uZVNpZ25hbC5yZW1vdmVFeHRlcm5hbFVzZXJJZCgpXG4gICAgICAgICAgLnRoZW4oKHZhbHVlOiBQcm9taXNlPHZvaWQ+KSA9PiByZXNvbHZlKHZhbHVlKSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBnZXRFeHRlcm5hbFVzZXJJZCgpOiBQcm9taXNlPHN0cmluZyB8IHVuZGVmaW5lZCB8IG51bGw+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmRvZXNPbmVTaWduYWxFeGlzdCgpKSB7XG4gICAgICAgIHRoaXMubmdPbmVTaWduYWxGdW5jdGlvblF1ZXVlLnB1c2goe1xuICAgICAgICAgIG5hbWU6IFwiZ2V0RXh0ZXJuYWxVc2VySWRcIixcbiAgICAgICAgICBhcmdzOiBhcmd1bWVudHMsXG4gICAgICAgICAgcHJvbWlzZVJlc29sdmVyOiByZXNvbHZlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cuT25lU2lnbmFsLnB1c2goKCkgPT4ge1xuICAgICAgICB3aW5kb3cuT25lU2lnbmFsLmdldEV4dGVybmFsVXNlcklkKClcbiAgICAgICAgICAudGhlbigodmFsdWU6IFByb21pc2U8c3RyaW5nIHwgdW5kZWZpbmVkIHwgbnVsbD4pID0+IHJlc29sdmUodmFsdWUpKVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiByZWplY3QoZXJyb3IpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHByb3ZpZGVVc2VyQ29uc2VudChjb25zZW50OiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghdGhpcy5kb2VzT25lU2lnbmFsRXhpc3QoKSkge1xuICAgICAgICB0aGlzLm5nT25lU2lnbmFsRnVuY3Rpb25RdWV1ZS5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBcInByb3ZpZGVVc2VyQ29uc2VudFwiLFxuICAgICAgICAgIGFyZ3M6IGFyZ3VtZW50cyxcbiAgICAgICAgICBwcm9taXNlUmVzb2x2ZXI6IHJlc29sdmUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5PbmVTaWduYWwucHVzaCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5PbmVTaWduYWwucHJvdmlkZVVzZXJDb25zZW50KGNvbnNlbnQpXG4gICAgICAgICAgLnRoZW4oKHZhbHVlOiBQcm9taXNlPHZvaWQ+KSA9PiByZXNvbHZlKHZhbHVlKSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBnZXRFbWFpbElkKGNhbGxiYWNrPzogQWN0aW9uPHN0cmluZyB8IHVuZGVmaW5lZD4pOiBQcm9taXNlPHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmRvZXNPbmVTaWduYWxFeGlzdCgpKSB7XG4gICAgICAgIHRoaXMubmdPbmVTaWduYWxGdW5jdGlvblF1ZXVlLnB1c2goe1xuICAgICAgICAgIG5hbWU6IFwiZ2V0RW1haWxJZFwiLFxuICAgICAgICAgIGFyZ3M6IGFyZ3VtZW50cyxcbiAgICAgICAgICBwcm9taXNlUmVzb2x2ZXI6IHJlc29sdmUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5PbmVTaWduYWwucHVzaCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5PbmVTaWduYWwuZ2V0RW1haWxJZChjYWxsYmFjaylcbiAgICAgICAgICAudGhlbigodmFsdWU6IFByb21pc2U8c3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZD4pID0+IHJlc29sdmUodmFsdWUpKVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiByZWplY3QoZXJyb3IpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGdldFNNU0lkKGNhbGxiYWNrPzogQWN0aW9uPHN0cmluZyB8IHVuZGVmaW5lZD4pOiBQcm9taXNlPHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmRvZXNPbmVTaWduYWxFeGlzdCgpKSB7XG4gICAgICAgIHRoaXMubmdPbmVTaWduYWxGdW5jdGlvblF1ZXVlLnB1c2goe1xuICAgICAgICAgIG5hbWU6IFwiZ2V0U01TSWRcIixcbiAgICAgICAgICBhcmdzOiBhcmd1bWVudHMsXG4gICAgICAgICAgcHJvbWlzZVJlc29sdmVyOiByZXNvbHZlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cuT25lU2lnbmFsLnB1c2goKCkgPT4ge1xuICAgICAgICB3aW5kb3cuT25lU2lnbmFsLmdldFNNU0lkKGNhbGxiYWNrKVxuICAgICAgICAgIC50aGVuKCh2YWx1ZTogUHJvbWlzZTxzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkPikgPT4gcmVzb2x2ZSh2YWx1ZSkpXG4gICAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgc2VuZE91dGNvbWUob3V0Y29tZU5hbWU6IHN0cmluZywgb3V0Y29tZVdlaWdodD86IG51bWJlciB8IHVuZGVmaW5lZCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIXRoaXMuZG9lc09uZVNpZ25hbEV4aXN0KCkpIHtcbiAgICAgICAgdGhpcy5uZ09uZVNpZ25hbEZ1bmN0aW9uUXVldWUucHVzaCh7XG4gICAgICAgICAgbmFtZTogXCJzZW5kT3V0Y29tZVwiLFxuICAgICAgICAgIGFyZ3M6IGFyZ3VtZW50cyxcbiAgICAgICAgICBwcm9taXNlUmVzb2x2ZXI6IHJlc29sdmUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5PbmVTaWduYWwucHVzaCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5PbmVTaWduYWwuc2VuZE91dGNvbWUob3V0Y29tZU5hbWUsIG91dGNvbWVXZWlnaHQpXG4gICAgICAgICAgLnRoZW4oKHZhbHVlOiBQcm9taXNlPHZvaWQ+KSA9PiByZXNvbHZlKHZhbHVlKSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcbn1cbiJdfQ==