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
OneSignalService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.2", ngImport: i0, type: OneSignalService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
OneSignalService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.2", ngImport: i0, type: OneSignalService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.2", ngImport: i0, type: OneSignalService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25lc2lnbmFsLW5neC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvb25lc2lnbmFsLW5neC9zcmMvbGliL29uZXNpZ25hbC1uZ3guc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUMzQyxNQUFNLGdCQUFnQixHQUFHLGVBQWUsQ0FBQztBQUN6QyxNQUFNLHFCQUFxQixHQUFHLGdEQUFnRCxDQUFDO0FBQy9FLE1BQU0seUJBQXlCLEdBQUcsbUNBQW1DLENBQUM7QUFDdEUsTUFBTSxXQUFXLEdBQUcsRUFBRSxDQUFDO0FBeUN2QixNQUFNLE9BQU8sZ0JBQWdCO0lBSTNCO1FBSFEsMkJBQXNCLEdBQUcsS0FBSyxDQUFDO1FBQy9CLDZCQUF3QixHQUE2QixFQUFFLENBQUM7UUFJaEUsbUJBQW1CO1FBRVgsaUJBQVksR0FBRyxHQUFHLEVBQUU7WUFDMUIsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNoRCxNQUFNLENBQUMsRUFBRSxHQUFHLGdCQUFnQixDQUFDO1lBQzdCLE1BQU0sQ0FBQyxHQUFHLEdBQUcscUJBQXFCLENBQUM7WUFDbkMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDcEIsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFBO1FBRU8sdUJBQWtCLEdBQUcsR0FBRyxFQUFFO1lBQ2hDLElBQUksTUFBTSxDQUFDLFNBQVMsRUFBRTtnQkFDcEIsT0FBTyxJQUFJLENBQUM7YUFDYjtZQUNELE9BQU8sS0FBSyxDQUFDO1FBQ2YsQ0FBQyxDQUFBO1FBRU8sb0NBQStCLEdBQUcsR0FBRyxFQUFFO1lBQzdDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVB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RSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzVDLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQUEsQ0FBQztJQUVGLFdBQVcsQ0FBQyxXQUFtQixFQUFFLGFBQWtDO1FBQ2pFLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFO2dCQUM5QixJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDO29CQUNqQyxJQUFJLEVBQUUsYUFBYTtvQkFDbkIsSUFBSSxFQUFFLFNBQVM7b0JBQ2YsZUFBZSxFQUFFLE9BQU87aUJBQ3pCLENBQUMsQ0FBQztnQkFDSCxPQUFPO2FBQ1I7WUFFRCxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ3pCLE1BQU0sQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxhQUFhLENBQUM7cUJBQ3JELElBQUksQ0FBQyxDQUFDLEtBQW9CLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDOUMsS0FBSyxDQUFDLENBQUMsS0FBWSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUM1QyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUFBLENBQUM7OzZHQWx1QlMsZ0JBQWdCO2lIQUFoQixnQkFBZ0IsY0FGZixNQUFNOzJGQUVQLGdCQUFnQjtrQkFINUIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgQWN0aW9uPFQ+eyAoaXRlbTogVCk6IHZvaWQ7IH1cbmludGVyZmFjZSBBdXRvUHJvbXB0T3B0aW9ucyB7IGZvcmNlPzogYm9vbGVhbjsgZm9yY2VTbGlkZWRvd25PdmVyTmF0aXZlPzogYm9vbGVhbjsgc2xpZGVkb3duUHJvbXB0T3B0aW9ucz86IElPbmVTaWduYWxBdXRvUHJvbXB0T3B0aW9uczsgfVxuaW50ZXJmYWNlIFJlZ2lzdGVyT3B0aW9ucyB7IG1vZGFsUHJvbXB0PzogYm9vbGVhbjsgaHR0cFBlcm1pc3Npb25SZXF1ZXN0PzogYm9vbGVhbjsgc2xpZGVkb3duPzogYm9vbGVhbjsgYXV0b0FjY2VwdD86IGJvb2xlYW4gfVxuaW50ZXJmYWNlIFNldFNNU09wdGlvbnMgeyBpZGVudGlmaWVyQXV0aEhhc2g/OiBzdHJpbmc7IH1cbmludGVyZmFjZSBTZXRFbWFpbE9wdGlvbnMgeyBpZGVudGlmaWVyQXV0aEhhc2g/OiBzdHJpbmc7IGVtYWlsQXV0aEhhc2g/OiBzdHJpbmc7IH1cbmludGVyZmFjZSBUYWdzT2JqZWN0PFQ+IHsgW2tleTogc3RyaW5nXTogVDsgfVxuaW50ZXJmYWNlIElPbmVTaWduYWxBdXRvUHJvbXB0T3B0aW9ucyB7IGZvcmNlPzogYm9vbGVhbjsgZm9yY2VTbGlkZWRvd25PdmVyTmF0aXZlPzogYm9vbGVhbjsgaXNJblVwZGF0ZU1vZGU/OiBib29sZWFuOyBjYXRlZ29yeU9wdGlvbnM/OiBJT25lU2lnbmFsQ2F0ZWdvcmllczsgfVxuaW50ZXJmYWNlIElPbmVTaWduYWxDYXRlZ29yaWVzIHsgcG9zaXRpdmVVcGRhdGVCdXR0b246IHN0cmluZzsgbmVnYXRpdmVVcGRhdGVCdXR0b246IHN0cmluZzsgc2F2aW5nQnV0dG9uVGV4dDogc3RyaW5nOyBlcnJvckJ1dHRvblRleHQ6IHN0cmluZzsgdXBkYXRlTWVzc2FnZTogc3RyaW5nOyB0YWdzOiBJT25lU2lnbmFsVGFnQ2F0ZWdvcnlbXTsgfVxuaW50ZXJmYWNlIElPbmVTaWduYWxUYWdDYXRlZ29yeSB7IHRhZzogc3RyaW5nOyBsYWJlbDogc3RyaW5nOyBjaGVja2VkPzogYm9vbGVhbjsgfVxuXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmNvbnN0IE9ORVNJR05BTF9TREtfSUQgPSAnb25lc2lnbmFsLXNkayc7XG5jb25zdCBPTkVfU0lHTkFMX1NDUklQVF9TUkMgPSAnaHR0cHM6Ly9jZG4ub25lc2lnbmFsLmNvbS9zZGtzL09uZVNpZ25hbFNESy5qcyc7XG5jb25zdCBPTkVTSUdOQUxfTk9UX1NFVFVQX0VSUk9SID0gJ09uZVNpZ25hbCBpcyBub3Qgc2V0dXAgY29ycmVjdGx5Lic7XG5jb25zdCBNQVhfVElNRU9VVCA9IDMwO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIE9uZVNpZ25hbDogYW55O1xuICB9XG59XG5cbmludGVyZmFjZSBJT25lU2lnbmFsRnVuY3Rpb25DYWxsIHtcbiAgbmFtZTogc3RyaW5nO1xuICBhcmdzOiBJQXJndW1lbnRzO1xuICBwcm9taXNlUmVzb2x2ZXI/OiBGdW5jdGlvbjtcbn1cblxuaW50ZXJmYWNlIElPbmVTaWduYWxTZXJ2aWNlIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG59XG5cbmludGVyZmFjZSBJSW5pdE9iamVjdCB7XG4gIGFwcElkOiBzdHJpbmc7XG4gIHN1YmRvbWFpbk5hbWU/OiBzdHJpbmc7XG4gIHJlcXVpcmVzVXNlclByaXZhY3lDb25zZW50PzogYm9vbGVhbjtcbiAgcHJvbXB0T3B0aW9ucz86IE9iamVjdDtcbiAgd2VsY29tZU5vdGlmaWNhdGlvbj86IE9iamVjdDtcbiAgbm90aWZ5QnV0dG9uPzogT2JqZWN0O1xuICBwZXJzaXN0Tm90aWZpY2F0aW9uPzogYm9vbGVhbjtcbiAgd2ViaG9va3M/OiBPYmplY3Q7XG4gIGF1dG9SZXN1YnNjcmliZT86IGJvb2xlYW47XG4gIGF1dG9SZWdpc3Rlcj86IGJvb2xlYW47XG4gIG5vdGlmaWNhdGlvbkNsaWNrSGFuZGxlck1hdGNoPzogc3RyaW5nO1xuICBub3RpZmljYXRpb25DbGlja0hhbmRsZXJBY3Rpb24/OiBzdHJpbmc7XG4gIHNlcnZpY2VXb3JrZXJQYXJhbT86IHsgc2NvcGU6IHN0cmluZyB9O1xuICBzZXJ2aWNlV29ya2VyUGF0aD86IHN0cmluZztcbiAgc2VydmljZVdvcmtlclVwZGF0ZXJQYXRoPzogc3RyaW5nO1xuICBwYXRoPzogc3RyaW5nO1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE9uZVNpZ25hbFNlcnZpY2UgaW1wbGVtZW50cyBJT25lU2lnbmFsU2VydmljZSB7XG4gIHByaXZhdGUgaXNPbmVTaWduYWxJbml0aWFsaXplZCA9IGZhbHNlO1xuICBwcml2YXRlIG5nT25lU2lnbmFsRnVuY3Rpb25RdWV1ZTogSU9uZVNpZ25hbEZ1bmN0aW9uQ2FsbFtdID0gW107XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICAvKiBIIEUgTCBQIEUgUiBTICovXG5cbiAgcHJpdmF0ZSBpbmplY3RTY3JpcHQgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgc2NyaXB0LmlkID0gT05FU0lHTkFMX1NES19JRDtcbiAgICBzY3JpcHQuc3JjID0gT05FX1NJR05BTF9TQ1JJUFRfU1JDO1xuICAgIHNjcmlwdC5hc3luYyA9IHRydWU7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICB9XG5cbiAgcHJpdmF0ZSBkb2VzT25lU2lnbmFsRXhpc3QgPSAoKSA9PiB7XG4gICAgaWYgKHdpbmRvdy5PbmVTaWduYWwpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIHByb2Nlc3NRdWV1ZWRPbmVTaWduYWxGdW5jdGlvbnMgPSAoKSA9PiB7XG4gICAgdGhpcy5uZ09uZVNpZ25hbEZ1bmN0aW9uUXVldWUuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIGNvbnN0IHsgbmFtZSwgYXJncywgcHJvbWlzZVJlc29sdmVyIH0gPSBlbGVtZW50O1xuXG4gICAgICBpZiAoISFwcm9taXNlUmVzb2x2ZXIpIHtcbiAgICAgICAgKHRoaXMgYXMgSU9uZVNpZ25hbFNlcnZpY2UpW25hbWVdKC4uLmFyZ3MpLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICAgICAgcHJvbWlzZVJlc29sdmVyKHJlc3VsdCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93Lk9uZVNpZ25hbFtuYW1lXSguLi5hcmdzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0dXBPbmVTaWduYWxJZk1pc3NpbmcgPSAoKSA9PiB7XG4gICAgaWYgKCF0aGlzLmRvZXNPbmVTaWduYWxFeGlzdCgpKSB7XG4gICAgICB3aW5kb3cuT25lU2lnbmFsID0gd2luZG93Lk9uZVNpZ25hbCB8fCBbXTtcbiAgICB9XG4gIH1cblxuICAvKiBQIFUgQiBMIEkgQyAqL1xuXG4gIGluaXQob3B0aW9uczogSUluaXRPYmplY3QpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4ocmVzb2x2ZSA9PiB7XG4gICAgICBpZiAodGhpcy5pc09uZVNpZ25hbEluaXRpYWxpemVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5pbmplY3RTY3JpcHQoKTtcbiAgICAgIHRoaXMuc2V0dXBPbmVTaWduYWxJZk1pc3NpbmcoKTtcbiAgICAgIHdpbmRvdy5PbmVTaWduYWwucHVzaCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5PbmVTaWduYWwuaW5pdChvcHRpb25zKTtcbiAgICAgIH0pXG5cbiAgICAgIGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihPTkVTSUdOQUxfTk9UX1NFVFVQX0VSUk9SKTtcbiAgICAgIH0sIE1BWF9USU1FT1VUICogMV8wMDApO1xuXG4gICAgICB3aW5kb3cuT25lU2lnbmFsLnB1c2goKCkgPT4ge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgIHRoaXMuaXNPbmVTaWduYWxJbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgIHRoaXMucHJvY2Vzc1F1ZXVlZE9uZVNpZ25hbEZ1bmN0aW9ucygpO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9KTtcbiAgICB9KVxuICB9XG5cblxuICBvbihldmVudDogc3RyaW5nLCBsaXN0ZW5lcjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZG9lc09uZVNpZ25hbEV4aXN0KCkpIHtcbiAgICAgIHRoaXMubmdPbmVTaWduYWxGdW5jdGlvblF1ZXVlLnB1c2goe1xuICAgICAgICBuYW1lOiBcIm9uXCIsXG4gICAgICAgIGFyZ3M6IGFyZ3VtZW50cyxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWwucHVzaCgoKSA9PiB7XG4gICAgICB3aW5kb3cuT25lU2lnbmFsLm9uKGV2ZW50LCBsaXN0ZW5lcilcbiAgICB9KTtcbiAgfTtcblxuICBvZmYoZXZlbnQ6IHN0cmluZywgbGlzdGVuZXI6IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmRvZXNPbmVTaWduYWxFeGlzdCgpKSB7XG4gICAgICB0aGlzLm5nT25lU2lnbmFsRnVuY3Rpb25RdWV1ZS5wdXNoKHtcbiAgICAgICAgbmFtZTogXCJvZmZcIixcbiAgICAgICAgYXJnczogYXJndW1lbnRzLFxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbC5wdXNoKCgpID0+IHtcbiAgICAgIHdpbmRvdy5PbmVTaWduYWwub2ZmKGV2ZW50LCBsaXN0ZW5lcilcbiAgICB9KTtcbiAgfTtcblxuICBvbmNlKGV2ZW50OiBzdHJpbmcsIGxpc3RlbmVyOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIGlmICghdGhpcy5kb2VzT25lU2lnbmFsRXhpc3QoKSkge1xuICAgICAgdGhpcy5uZ09uZVNpZ25hbEZ1bmN0aW9uUXVldWUucHVzaCh7XG4gICAgICAgIG5hbWU6IFwib25jZVwiLFxuICAgICAgICBhcmdzOiBhcmd1bWVudHMsXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aW5kb3cuT25lU2lnbmFsLnB1c2goKCkgPT4ge1xuICAgICAgd2luZG93Lk9uZVNpZ25hbC5vbmNlKGV2ZW50LCBsaXN0ZW5lcilcbiAgICB9KTtcbiAgfTtcblxuICBpc1B1c2hOb3RpZmljYXRpb25zRW5hYmxlZChjYWxsYmFjaz86IEFjdGlvbjxib29sZWFuPik6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIXRoaXMuZG9lc09uZVNpZ25hbEV4aXN0KCkpIHtcbiAgICAgICAgdGhpcy5uZ09uZVNpZ25hbEZ1bmN0aW9uUXVldWUucHVzaCh7XG4gICAgICAgICAgbmFtZTogXCJpc1B1c2hOb3RpZmljYXRpb25zRW5hYmxlZFwiLFxuICAgICAgICAgIGFyZ3M6IGFyZ3VtZW50cyxcbiAgICAgICAgICBwcm9taXNlUmVzb2x2ZXI6IHJlc29sdmUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5PbmVTaWduYWwucHVzaCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5PbmVTaWduYWwuaXNQdXNoTm90aWZpY2F0aW9uc0VuYWJsZWQoY2FsbGJhY2spXG4gICAgICAgICAgLnRoZW4oKHZhbHVlOiBQcm9taXNlPGJvb2xlYW4+KSA9PiByZXNvbHZlKHZhbHVlKSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBzaG93SHR0cFByb21wdChvcHRpb25zPzogQXV0b1Byb21wdE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmRvZXNPbmVTaWduYWxFeGlzdCgpKSB7XG4gICAgICAgIHRoaXMubmdPbmVTaWduYWxGdW5jdGlvblF1ZXVlLnB1c2goe1xuICAgICAgICAgIG5hbWU6IFwic2hvd0h0dHBQcm9tcHRcIixcbiAgICAgICAgICBhcmdzOiBhcmd1bWVudHMsXG4gICAgICAgICAgcHJvbWlzZVJlc29sdmVyOiByZXNvbHZlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cuT25lU2lnbmFsLnB1c2goKCkgPT4ge1xuICAgICAgICB3aW5kb3cuT25lU2lnbmFsLnNob3dIdHRwUHJvbXB0KG9wdGlvbnMpXG4gICAgICAgICAgLnRoZW4oKHZhbHVlOiBQcm9taXNlPHZvaWQ+KSA9PiByZXNvbHZlKHZhbHVlKSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICByZWdpc3RlckZvclB1c2hOb3RpZmljYXRpb25zKG9wdGlvbnM/OiBSZWdpc3Rlck9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmRvZXNPbmVTaWduYWxFeGlzdCgpKSB7XG4gICAgICAgIHRoaXMubmdPbmVTaWduYWxGdW5jdGlvblF1ZXVlLnB1c2goe1xuICAgICAgICAgIG5hbWU6IFwicmVnaXN0ZXJGb3JQdXNoTm90aWZpY2F0aW9uc1wiLFxuICAgICAgICAgIGFyZ3M6IGFyZ3VtZW50cyxcbiAgICAgICAgICBwcm9taXNlUmVzb2x2ZXI6IHJlc29sdmUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5PbmVTaWduYWwucHVzaCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5PbmVTaWduYWwucmVnaXN0ZXJGb3JQdXNoTm90aWZpY2F0aW9ucyhvcHRpb25zKVxuICAgICAgICAgIC50aGVuKCh2YWx1ZTogUHJvbWlzZTx2b2lkPikgPT4gcmVzb2x2ZSh2YWx1ZSkpXG4gICAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgc2V0RGVmYXVsdE5vdGlmaWNhdGlvblVybCh1cmw6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIXRoaXMuZG9lc09uZVNpZ25hbEV4aXN0KCkpIHtcbiAgICAgICAgdGhpcy5uZ09uZVNpZ25hbEZ1bmN0aW9uUXVldWUucHVzaCh7XG4gICAgICAgICAgbmFtZTogXCJzZXREZWZhdWx0Tm90aWZpY2F0aW9uVXJsXCIsXG4gICAgICAgICAgYXJnczogYXJndW1lbnRzLFxuICAgICAgICAgIHByb21pc2VSZXNvbHZlcjogcmVzb2x2ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgd2luZG93Lk9uZVNpZ25hbC5wdXNoKCgpID0+IHtcbiAgICAgICAgd2luZG93Lk9uZVNpZ25hbC5zZXREZWZhdWx0Tm90aWZpY2F0aW9uVXJsKHVybClcbiAgICAgICAgICAudGhlbigodmFsdWU6IFByb21pc2U8dm9pZD4pID0+IHJlc29sdmUodmFsdWUpKVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiByZWplY3QoZXJyb3IpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHNldERlZmF1bHRUaXRsZSh0aXRsZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghdGhpcy5kb2VzT25lU2lnbmFsRXhpc3QoKSkge1xuICAgICAgICB0aGlzLm5nT25lU2lnbmFsRnVuY3Rpb25RdWV1ZS5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBcInNldERlZmF1bHRUaXRsZVwiLFxuICAgICAgICAgIGFyZ3M6IGFyZ3VtZW50cyxcbiAgICAgICAgICBwcm9taXNlUmVzb2x2ZXI6IHJlc29sdmUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5PbmVTaWduYWwucHVzaCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5PbmVTaWduYWwuc2V0RGVmYXVsdFRpdGxlKHRpdGxlKVxuICAgICAgICAgIC50aGVuKCh2YWx1ZTogUHJvbWlzZTx2b2lkPikgPT4gcmVzb2x2ZSh2YWx1ZSkpXG4gICAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgZ2V0VGFncyhjYWxsYmFjaz86IEFjdGlvbjxhbnk+KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghdGhpcy5kb2VzT25lU2lnbmFsRXhpc3QoKSkge1xuICAgICAgICB0aGlzLm5nT25lU2lnbmFsRnVuY3Rpb25RdWV1ZS5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBcImdldFRhZ3NcIixcbiAgICAgICAgICBhcmdzOiBhcmd1bWVudHMsXG4gICAgICAgICAgcHJvbWlzZVJlc29sdmVyOiByZXNvbHZlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cuT25lU2lnbmFsLnB1c2goKCkgPT4ge1xuICAgICAgICB3aW5kb3cuT25lU2lnbmFsLmdldFRhZ3MoY2FsbGJhY2spXG4gICAgICAgICAgLnRoZW4oKHZhbHVlOiBQcm9taXNlPHZvaWQ+KSA9PiByZXNvbHZlKHZhbHVlKSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBzZW5kVGFnKGtleTogc3RyaW5nLCB2YWx1ZTogYW55LCBjYWxsYmFjaz86IEFjdGlvbjxPYmplY3Q+KTogUHJvbWlzZTxPYmplY3QgfCBudWxsPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghdGhpcy5kb2VzT25lU2lnbmFsRXhpc3QoKSkge1xuICAgICAgICB0aGlzLm5nT25lU2lnbmFsRnVuY3Rpb25RdWV1ZS5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBcInNlbmRUYWdcIixcbiAgICAgICAgICBhcmdzOiBhcmd1bWVudHMsXG4gICAgICAgICAgcHJvbWlzZVJlc29sdmVyOiByZXNvbHZlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cuT25lU2lnbmFsLnB1c2goKCkgPT4ge1xuICAgICAgICB3aW5kb3cuT25lU2lnbmFsLnNlbmRUYWcoa2V5LCB2YWx1ZSwgY2FsbGJhY2spXG4gICAgICAgICAgLnRoZW4oKHZhbHVlOiBQcm9taXNlPE9iamVjdCB8IG51bGw+KSA9PiByZXNvbHZlKHZhbHVlKSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBzZW5kVGFncyh0YWdzOiBUYWdzT2JqZWN0PGFueT4sIGNhbGxiYWNrPzogQWN0aW9uPE9iamVjdD4pOiBQcm9taXNlPE9iamVjdCB8IG51bGw+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmRvZXNPbmVTaWduYWxFeGlzdCgpKSB7XG4gICAgICAgIHRoaXMubmdPbmVTaWduYWxGdW5jdGlvblF1ZXVlLnB1c2goe1xuICAgICAgICAgIG5hbWU6IFwic2VuZFRhZ3NcIixcbiAgICAgICAgICBhcmdzOiBhcmd1bWVudHMsXG4gICAgICAgICAgcHJvbWlzZVJlc29sdmVyOiByZXNvbHZlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cuT25lU2lnbmFsLnB1c2goKCkgPT4ge1xuICAgICAgICB3aW5kb3cuT25lU2lnbmFsLnNlbmRUYWdzKHRhZ3MsIGNhbGxiYWNrKVxuICAgICAgICAgIC50aGVuKCh2YWx1ZTogUHJvbWlzZTxPYmplY3QgfCBudWxsPikgPT4gcmVzb2x2ZSh2YWx1ZSkpXG4gICAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgZGVsZXRlVGFnKHRhZzogc3RyaW5nKTogUHJvbWlzZTxBcnJheTxzdHJpbmc+PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghdGhpcy5kb2VzT25lU2lnbmFsRXhpc3QoKSkge1xuICAgICAgICB0aGlzLm5nT25lU2lnbmFsRnVuY3Rpb25RdWV1ZS5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBcImRlbGV0ZVRhZ1wiLFxuICAgICAgICAgIGFyZ3M6IGFyZ3VtZW50cyxcbiAgICAgICAgICBwcm9taXNlUmVzb2x2ZXI6IHJlc29sdmUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5PbmVTaWduYWwucHVzaCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5PbmVTaWduYWwuZGVsZXRlVGFnKHRhZylcbiAgICAgICAgICAudGhlbigodmFsdWU6IFByb21pc2U8QXJyYXk8c3RyaW5nPj4pID0+IHJlc29sdmUodmFsdWUpKVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiByZWplY3QoZXJyb3IpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGRlbGV0ZVRhZ3ModGFnczogQXJyYXk8c3RyaW5nPiwgY2FsbGJhY2s/OiBBY3Rpb248QXJyYXk8c3RyaW5nPj4pOiBQcm9taXNlPEFycmF5PHN0cmluZz4+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmRvZXNPbmVTaWduYWxFeGlzdCgpKSB7XG4gICAgICAgIHRoaXMubmdPbmVTaWduYWxGdW5jdGlvblF1ZXVlLnB1c2goe1xuICAgICAgICAgIG5hbWU6IFwiZGVsZXRlVGFnc1wiLFxuICAgICAgICAgIGFyZ3M6IGFyZ3VtZW50cyxcbiAgICAgICAgICBwcm9taXNlUmVzb2x2ZXI6IHJlc29sdmUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5PbmVTaWduYWwucHVzaCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5PbmVTaWduYWwuZGVsZXRlVGFncyh0YWdzLCBjYWxsYmFjaylcbiAgICAgICAgICAudGhlbigodmFsdWU6IFByb21pc2U8QXJyYXk8c3RyaW5nPj4pID0+IHJlc29sdmUodmFsdWUpKVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiByZWplY3QoZXJyb3IpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGFkZExpc3RlbmVyRm9yTm90aWZpY2F0aW9uT3BlbmVkKGNhbGxiYWNrPzogQWN0aW9uPE5vdGlmaWNhdGlvbj4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmRvZXNPbmVTaWduYWxFeGlzdCgpKSB7XG4gICAgICAgIHRoaXMubmdPbmVTaWduYWxGdW5jdGlvblF1ZXVlLnB1c2goe1xuICAgICAgICAgIG5hbWU6IFwiYWRkTGlzdGVuZXJGb3JOb3RpZmljYXRpb25PcGVuZWRcIixcbiAgICAgICAgICBhcmdzOiBhcmd1bWVudHMsXG4gICAgICAgICAgcHJvbWlzZVJlc29sdmVyOiByZXNvbHZlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cuT25lU2lnbmFsLnB1c2goKCkgPT4ge1xuICAgICAgICB3aW5kb3cuT25lU2lnbmFsLmFkZExpc3RlbmVyRm9yTm90aWZpY2F0aW9uT3BlbmVkKGNhbGxiYWNrKVxuICAgICAgICAgIC50aGVuKCh2YWx1ZTogUHJvbWlzZTx2b2lkPikgPT4gcmVzb2x2ZSh2YWx1ZSkpXG4gICAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgc2V0U3Vic2NyaXB0aW9uKG5ld1N1YnNjcmlwdGlvbjogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIXRoaXMuZG9lc09uZVNpZ25hbEV4aXN0KCkpIHtcbiAgICAgICAgdGhpcy5uZ09uZVNpZ25hbEZ1bmN0aW9uUXVldWUucHVzaCh7XG4gICAgICAgICAgbmFtZTogXCJzZXRTdWJzY3JpcHRpb25cIixcbiAgICAgICAgICBhcmdzOiBhcmd1bWVudHMsXG4gICAgICAgICAgcHJvbWlzZVJlc29sdmVyOiByZXNvbHZlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cuT25lU2lnbmFsLnB1c2goKCkgPT4ge1xuICAgICAgICB3aW5kb3cuT25lU2lnbmFsLnNldFN1YnNjcmlwdGlvbihuZXdTdWJzY3JpcHRpb24pXG4gICAgICAgICAgLnRoZW4oKHZhbHVlOiBQcm9taXNlPHZvaWQ+KSA9PiByZXNvbHZlKHZhbHVlKSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBzaG93SHR0cFBlcm1pc3Npb25SZXF1ZXN0KG9wdGlvbnM/OiBBdXRvUHJvbXB0T3B0aW9ucyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghdGhpcy5kb2VzT25lU2lnbmFsRXhpc3QoKSkge1xuICAgICAgICB0aGlzLm5nT25lU2lnbmFsRnVuY3Rpb25RdWV1ZS5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBcInNob3dIdHRwUGVybWlzc2lvblJlcXVlc3RcIixcbiAgICAgICAgICBhcmdzOiBhcmd1bWVudHMsXG4gICAgICAgICAgcHJvbWlzZVJlc29sdmVyOiByZXNvbHZlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cuT25lU2lnbmFsLnB1c2goKCkgPT4ge1xuICAgICAgICB3aW5kb3cuT25lU2lnbmFsLnNob3dIdHRwUGVybWlzc2lvblJlcXVlc3Qob3B0aW9ucylcbiAgICAgICAgICAudGhlbigodmFsdWU6IFByb21pc2U8YW55PikgPT4gcmVzb2x2ZSh2YWx1ZSkpXG4gICAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgc2hvd05hdGl2ZVByb21wdCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmRvZXNPbmVTaWduYWxFeGlzdCgpKSB7XG4gICAgICAgIHRoaXMubmdPbmVTaWduYWxGdW5jdGlvblF1ZXVlLnB1c2goe1xuICAgICAgICAgIG5hbWU6IFwic2hvd05hdGl2ZVByb21wdFwiLFxuICAgICAgICAgIGFyZ3M6IGFyZ3VtZW50cyxcbiAgICAgICAgICBwcm9taXNlUmVzb2x2ZXI6IHJlc29sdmUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5PbmVTaWduYWwucHVzaCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5PbmVTaWduYWwuc2hvd05hdGl2ZVByb21wdCgpXG4gICAgICAgICAgLnRoZW4oKHZhbHVlOiBQcm9taXNlPHZvaWQ+KSA9PiByZXNvbHZlKHZhbHVlKSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBzaG93U2xpZGVkb3duUHJvbXB0KG9wdGlvbnM/OiBBdXRvUHJvbXB0T3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIXRoaXMuZG9lc09uZVNpZ25hbEV4aXN0KCkpIHtcbiAgICAgICAgdGhpcy5uZ09uZVNpZ25hbEZ1bmN0aW9uUXVldWUucHVzaCh7XG4gICAgICAgICAgbmFtZTogXCJzaG93U2xpZGVkb3duUHJvbXB0XCIsXG4gICAgICAgICAgYXJnczogYXJndW1lbnRzLFxuICAgICAgICAgIHByb21pc2VSZXNvbHZlcjogcmVzb2x2ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgd2luZG93Lk9uZVNpZ25hbC5wdXNoKCgpID0+IHtcbiAgICAgICAgd2luZG93Lk9uZVNpZ25hbC5zaG93U2xpZGVkb3duUHJvbXB0KG9wdGlvbnMpXG4gICAgICAgICAgLnRoZW4oKHZhbHVlOiBQcm9taXNlPHZvaWQ+KSA9PiByZXNvbHZlKHZhbHVlKSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBzaG93Q2F0ZWdvcnlTbGlkZWRvd24ob3B0aW9ucz86IEF1dG9Qcm9tcHRPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghdGhpcy5kb2VzT25lU2lnbmFsRXhpc3QoKSkge1xuICAgICAgICB0aGlzLm5nT25lU2lnbmFsRnVuY3Rpb25RdWV1ZS5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBcInNob3dDYXRlZ29yeVNsaWRlZG93blwiLFxuICAgICAgICAgIGFyZ3M6IGFyZ3VtZW50cyxcbiAgICAgICAgICBwcm9taXNlUmVzb2x2ZXI6IHJlc29sdmUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5PbmVTaWduYWwucHVzaCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5PbmVTaWduYWwuc2hvd0NhdGVnb3J5U2xpZGVkb3duKG9wdGlvbnMpXG4gICAgICAgICAgLnRoZW4oKHZhbHVlOiBQcm9taXNlPHZvaWQ+KSA9PiByZXNvbHZlKHZhbHVlKSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBzaG93U21zU2xpZGVkb3duKG9wdGlvbnM/OiBBdXRvUHJvbXB0T3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIXRoaXMuZG9lc09uZVNpZ25hbEV4aXN0KCkpIHtcbiAgICAgICAgdGhpcy5uZ09uZVNpZ25hbEZ1bmN0aW9uUXVldWUucHVzaCh7XG4gICAgICAgICAgbmFtZTogXCJzaG93U21zU2xpZGVkb3duXCIsXG4gICAgICAgICAgYXJnczogYXJndW1lbnRzLFxuICAgICAgICAgIHByb21pc2VSZXNvbHZlcjogcmVzb2x2ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgd2luZG93Lk9uZVNpZ25hbC5wdXNoKCgpID0+IHtcbiAgICAgICAgd2luZG93Lk9uZVNpZ25hbC5zaG93U21zU2xpZGVkb3duKG9wdGlvbnMpXG4gICAgICAgICAgLnRoZW4oKHZhbHVlOiBQcm9taXNlPHZvaWQ+KSA9PiByZXNvbHZlKHZhbHVlKSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBzaG93RW1haWxTbGlkZWRvd24ob3B0aW9ucz86IEF1dG9Qcm9tcHRPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghdGhpcy5kb2VzT25lU2lnbmFsRXhpc3QoKSkge1xuICAgICAgICB0aGlzLm5nT25lU2lnbmFsRnVuY3Rpb25RdWV1ZS5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBcInNob3dFbWFpbFNsaWRlZG93blwiLFxuICAgICAgICAgIGFyZ3M6IGFyZ3VtZW50cyxcbiAgICAgICAgICBwcm9taXNlUmVzb2x2ZXI6IHJlc29sdmUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5PbmVTaWduYWwucHVzaCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5PbmVTaWduYWwuc2hvd0VtYWlsU2xpZGVkb3duKG9wdGlvbnMpXG4gICAgICAgICAgLnRoZW4oKHZhbHVlOiBQcm9taXNlPHZvaWQ+KSA9PiByZXNvbHZlKHZhbHVlKSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBzaG93U21zQW5kRW1haWxTbGlkZWRvd24ob3B0aW9ucz86IEF1dG9Qcm9tcHRPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghdGhpcy5kb2VzT25lU2lnbmFsRXhpc3QoKSkge1xuICAgICAgICB0aGlzLm5nT25lU2lnbmFsRnVuY3Rpb25RdWV1ZS5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBcInNob3dTbXNBbmRFbWFpbFNsaWRlZG93blwiLFxuICAgICAgICAgIGFyZ3M6IGFyZ3VtZW50cyxcbiAgICAgICAgICBwcm9taXNlUmVzb2x2ZXI6IHJlc29sdmUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5PbmVTaWduYWwucHVzaCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5PbmVTaWduYWwuc2hvd1Ntc0FuZEVtYWlsU2xpZGVkb3duKG9wdGlvbnMpXG4gICAgICAgICAgLnRoZW4oKHZhbHVlOiBQcm9taXNlPHZvaWQ+KSA9PiByZXNvbHZlKHZhbHVlKSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBnZXROb3RpZmljYXRpb25QZXJtaXNzaW9uKG9uQ29tcGxldGU/OiBGdW5jdGlvbik6IFByb21pc2U8Tm90aWZpY2F0aW9uUGVybWlzc2lvbj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIXRoaXMuZG9lc09uZVNpZ25hbEV4aXN0KCkpIHtcbiAgICAgICAgdGhpcy5uZ09uZVNpZ25hbEZ1bmN0aW9uUXVldWUucHVzaCh7XG4gICAgICAgICAgbmFtZTogXCJnZXROb3RpZmljYXRpb25QZXJtaXNzaW9uXCIsXG4gICAgICAgICAgYXJnczogYXJndW1lbnRzLFxuICAgICAgICAgIHByb21pc2VSZXNvbHZlcjogcmVzb2x2ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgd2luZG93Lk9uZVNpZ25hbC5wdXNoKCgpID0+IHtcbiAgICAgICAgd2luZG93Lk9uZVNpZ25hbC5nZXROb3RpZmljYXRpb25QZXJtaXNzaW9uKG9uQ29tcGxldGUpXG4gICAgICAgICAgLnRoZW4oKHZhbHVlOiBQcm9taXNlPE5vdGlmaWNhdGlvblBlcm1pc3Npb24+KSA9PiByZXNvbHZlKHZhbHVlKSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBnZXRVc2VySWQoY2FsbGJhY2s/OiBBY3Rpb248c3RyaW5nIHwgdW5kZWZpbmVkIHwgbnVsbD4pOiBQcm9taXNlPHN0cmluZyB8IHVuZGVmaW5lZCB8IG51bGw+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmRvZXNPbmVTaWduYWxFeGlzdCgpKSB7XG4gICAgICAgIHRoaXMubmdPbmVTaWduYWxGdW5jdGlvblF1ZXVlLnB1c2goe1xuICAgICAgICAgIG5hbWU6IFwiZ2V0VXNlcklkXCIsXG4gICAgICAgICAgYXJnczogYXJndW1lbnRzLFxuICAgICAgICAgIHByb21pc2VSZXNvbHZlcjogcmVzb2x2ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgd2luZG93Lk9uZVNpZ25hbC5wdXNoKCgpID0+IHtcbiAgICAgICAgd2luZG93Lk9uZVNpZ25hbC5nZXRVc2VySWQoY2FsbGJhY2spXG4gICAgICAgICAgLnRoZW4oKHZhbHVlOiBQcm9taXNlPHN0cmluZyB8IHVuZGVmaW5lZCB8IG51bGw+KSA9PiByZXNvbHZlKHZhbHVlKSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBnZXRTdWJzY3JpcHRpb24oY2FsbGJhY2s/OiBBY3Rpb248Ym9vbGVhbj4pOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmRvZXNPbmVTaWduYWxFeGlzdCgpKSB7XG4gICAgICAgIHRoaXMubmdPbmVTaWduYWxGdW5jdGlvblF1ZXVlLnB1c2goe1xuICAgICAgICAgIG5hbWU6IFwiZ2V0U3Vic2NyaXB0aW9uXCIsXG4gICAgICAgICAgYXJnczogYXJndW1lbnRzLFxuICAgICAgICAgIHByb21pc2VSZXNvbHZlcjogcmVzb2x2ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgd2luZG93Lk9uZVNpZ25hbC5wdXNoKCgpID0+IHtcbiAgICAgICAgd2luZG93Lk9uZVNpZ25hbC5nZXRTdWJzY3JpcHRpb24oY2FsbGJhY2spXG4gICAgICAgICAgLnRoZW4oKHZhbHVlOiBQcm9taXNlPGJvb2xlYW4+KSA9PiByZXNvbHZlKHZhbHVlKSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBzZXRFbWFpbChlbWFpbDogc3RyaW5nLCBvcHRpb25zPzogU2V0RW1haWxPcHRpb25zKTogUHJvbWlzZTxzdHJpbmd8bnVsbD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIXRoaXMuZG9lc09uZVNpZ25hbEV4aXN0KCkpIHtcbiAgICAgICAgdGhpcy5uZ09uZVNpZ25hbEZ1bmN0aW9uUXVldWUucHVzaCh7XG4gICAgICAgICAgbmFtZTogXCJzZXRFbWFpbFwiLFxuICAgICAgICAgIGFyZ3M6IGFyZ3VtZW50cyxcbiAgICAgICAgICBwcm9taXNlUmVzb2x2ZXI6IHJlc29sdmUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5PbmVTaWduYWwucHVzaCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5PbmVTaWduYWwuc2V0RW1haWwoZW1haWwsIG9wdGlvbnMpXG4gICAgICAgICAgLnRoZW4oKHZhbHVlOiBQcm9taXNlPHN0cmluZ3xudWxsPikgPT4gcmVzb2x2ZSh2YWx1ZSkpXG4gICAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgc2V0U01TTnVtYmVyKHNtc051bWJlcjogc3RyaW5nLCBvcHRpb25zPzogU2V0U01TT3B0aW9ucyk6IFByb21pc2U8c3RyaW5nIHwgbnVsbD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIXRoaXMuZG9lc09uZVNpZ25hbEV4aXN0KCkpIHtcbiAgICAgICAgdGhpcy5uZ09uZVNpZ25hbEZ1bmN0aW9uUXVldWUucHVzaCh7XG4gICAgICAgICAgbmFtZTogXCJzZXRTTVNOdW1iZXJcIixcbiAgICAgICAgICBhcmdzOiBhcmd1bWVudHMsXG4gICAgICAgICAgcHJvbWlzZVJlc29sdmVyOiByZXNvbHZlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cuT25lU2lnbmFsLnB1c2goKCkgPT4ge1xuICAgICAgICB3aW5kb3cuT25lU2lnbmFsLnNldFNNU051bWJlcihzbXNOdW1iZXIsIG9wdGlvbnMpXG4gICAgICAgICAgLnRoZW4oKHZhbHVlOiBQcm9taXNlPHN0cmluZyB8IG51bGw+KSA9PiByZXNvbHZlKHZhbHVlKSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBsb2dvdXRFbWFpbCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmRvZXNPbmVTaWduYWxFeGlzdCgpKSB7XG4gICAgICAgIHRoaXMubmdPbmVTaWduYWxGdW5jdGlvblF1ZXVlLnB1c2goe1xuICAgICAgICAgIG5hbWU6IFwibG9nb3V0RW1haWxcIixcbiAgICAgICAgICBhcmdzOiBhcmd1bWVudHMsXG4gICAgICAgICAgcHJvbWlzZVJlc29sdmVyOiByZXNvbHZlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cuT25lU2lnbmFsLnB1c2goKCkgPT4ge1xuICAgICAgICB3aW5kb3cuT25lU2lnbmFsLmxvZ291dEVtYWlsKClcbiAgICAgICAgICAudGhlbigodmFsdWU6IFByb21pc2U8dm9pZD4pID0+IHJlc29sdmUodmFsdWUpKVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiByZWplY3QoZXJyb3IpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGxvZ291dFNNUygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmRvZXNPbmVTaWduYWxFeGlzdCgpKSB7XG4gICAgICAgIHRoaXMubmdPbmVTaWduYWxGdW5jdGlvblF1ZXVlLnB1c2goe1xuICAgICAgICAgIG5hbWU6IFwibG9nb3V0U01TXCIsXG4gICAgICAgICAgYXJnczogYXJndW1lbnRzLFxuICAgICAgICAgIHByb21pc2VSZXNvbHZlcjogcmVzb2x2ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgd2luZG93Lk9uZVNpZ25hbC5wdXNoKCgpID0+IHtcbiAgICAgICAgd2luZG93Lk9uZVNpZ25hbC5sb2dvdXRTTVMoKVxuICAgICAgICAgIC50aGVuKCh2YWx1ZTogUHJvbWlzZTx2b2lkPikgPT4gcmVzb2x2ZSh2YWx1ZSkpXG4gICAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgc2V0RXh0ZXJuYWxVc2VySWQoZXh0ZXJuYWxVc2VySWQ6IHN0cmluZyB8IHVuZGVmaW5lZCB8IG51bGwsIGF1dGhIYXNoPzogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghdGhpcy5kb2VzT25lU2lnbmFsRXhpc3QoKSkge1xuICAgICAgICB0aGlzLm5nT25lU2lnbmFsRnVuY3Rpb25RdWV1ZS5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBcInNldEV4dGVybmFsVXNlcklkXCIsXG4gICAgICAgICAgYXJnczogYXJndW1lbnRzLFxuICAgICAgICAgIHByb21pc2VSZXNvbHZlcjogcmVzb2x2ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgd2luZG93Lk9uZVNpZ25hbC5wdXNoKCgpID0+IHtcbiAgICAgICAgd2luZG93Lk9uZVNpZ25hbC5zZXRFeHRlcm5hbFVzZXJJZChleHRlcm5hbFVzZXJJZCwgYXV0aEhhc2gpXG4gICAgICAgICAgLnRoZW4oKHZhbHVlOiBQcm9taXNlPHZvaWQ+KSA9PiByZXNvbHZlKHZhbHVlKSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICByZW1vdmVFeHRlcm5hbFVzZXJJZCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmRvZXNPbmVTaWduYWxFeGlzdCgpKSB7XG4gICAgICAgIHRoaXMubmdPbmVTaWduYWxGdW5jdGlvblF1ZXVlLnB1c2goe1xuICAgICAgICAgIG5hbWU6IFwicmVtb3ZlRXh0ZXJuYWxVc2VySWRcIixcbiAgICAgICAgICBhcmdzOiBhcmd1bWVudHMsXG4gICAgICAgICAgcHJvbWlzZVJlc29sdmVyOiByZXNvbHZlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cuT25lU2lnbmFsLnB1c2goKCkgPT4ge1xuICAgICAgICB3aW5kb3cuT25lU2lnbmFsLnJlbW92ZUV4dGVybmFsVXNlcklkKClcbiAgICAgICAgICAudGhlbigodmFsdWU6IFByb21pc2U8dm9pZD4pID0+IHJlc29sdmUodmFsdWUpKVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiByZWplY3QoZXJyb3IpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGdldEV4dGVybmFsVXNlcklkKCk6IFByb21pc2U8c3RyaW5nIHwgdW5kZWZpbmVkIHwgbnVsbD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIXRoaXMuZG9lc09uZVNpZ25hbEV4aXN0KCkpIHtcbiAgICAgICAgdGhpcy5uZ09uZVNpZ25hbEZ1bmN0aW9uUXVldWUucHVzaCh7XG4gICAgICAgICAgbmFtZTogXCJnZXRFeHRlcm5hbFVzZXJJZFwiLFxuICAgICAgICAgIGFyZ3M6IGFyZ3VtZW50cyxcbiAgICAgICAgICBwcm9taXNlUmVzb2x2ZXI6IHJlc29sdmUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5PbmVTaWduYWwucHVzaCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5PbmVTaWduYWwuZ2V0RXh0ZXJuYWxVc2VySWQoKVxuICAgICAgICAgIC50aGVuKCh2YWx1ZTogUHJvbWlzZTxzdHJpbmcgfCB1bmRlZmluZWQgfCBudWxsPikgPT4gcmVzb2x2ZSh2YWx1ZSkpXG4gICAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcHJvdmlkZVVzZXJDb25zZW50KGNvbnNlbnQ6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmRvZXNPbmVTaWduYWxFeGlzdCgpKSB7XG4gICAgICAgIHRoaXMubmdPbmVTaWduYWxGdW5jdGlvblF1ZXVlLnB1c2goe1xuICAgICAgICAgIG5hbWU6IFwicHJvdmlkZVVzZXJDb25zZW50XCIsXG4gICAgICAgICAgYXJnczogYXJndW1lbnRzLFxuICAgICAgICAgIHByb21pc2VSZXNvbHZlcjogcmVzb2x2ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgd2luZG93Lk9uZVNpZ25hbC5wdXNoKCgpID0+IHtcbiAgICAgICAgd2luZG93Lk9uZVNpZ25hbC5wcm92aWRlVXNlckNvbnNlbnQoY29uc2VudClcbiAgICAgICAgICAudGhlbigodmFsdWU6IFByb21pc2U8dm9pZD4pID0+IHJlc29sdmUodmFsdWUpKVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiByZWplY3QoZXJyb3IpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGdldEVtYWlsSWQoY2FsbGJhY2s/OiBBY3Rpb248c3RyaW5nIHwgdW5kZWZpbmVkPik6IFByb21pc2U8c3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIXRoaXMuZG9lc09uZVNpZ25hbEV4aXN0KCkpIHtcbiAgICAgICAgdGhpcy5uZ09uZVNpZ25hbEZ1bmN0aW9uUXVldWUucHVzaCh7XG4gICAgICAgICAgbmFtZTogXCJnZXRFbWFpbElkXCIsXG4gICAgICAgICAgYXJnczogYXJndW1lbnRzLFxuICAgICAgICAgIHByb21pc2VSZXNvbHZlcjogcmVzb2x2ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgd2luZG93Lk9uZVNpZ25hbC5wdXNoKCgpID0+IHtcbiAgICAgICAgd2luZG93Lk9uZVNpZ25hbC5nZXRFbWFpbElkKGNhbGxiYWNrKVxuICAgICAgICAgIC50aGVuKCh2YWx1ZTogUHJvbWlzZTxzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkPikgPT4gcmVzb2x2ZSh2YWx1ZSkpXG4gICAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgZ2V0U01TSWQoY2FsbGJhY2s/OiBBY3Rpb248c3RyaW5nIHwgdW5kZWZpbmVkPik6IFByb21pc2U8c3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIXRoaXMuZG9lc09uZVNpZ25hbEV4aXN0KCkpIHtcbiAgICAgICAgdGhpcy5uZ09uZVNpZ25hbEZ1bmN0aW9uUXVldWUucHVzaCh7XG4gICAgICAgICAgbmFtZTogXCJnZXRTTVNJZFwiLFxuICAgICAgICAgIGFyZ3M6IGFyZ3VtZW50cyxcbiAgICAgICAgICBwcm9taXNlUmVzb2x2ZXI6IHJlc29sdmUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5PbmVTaWduYWwucHVzaCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5PbmVTaWduYWwuZ2V0U01TSWQoY2FsbGJhY2spXG4gICAgICAgICAgLnRoZW4oKHZhbHVlOiBQcm9taXNlPHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQ+KSA9PiByZXNvbHZlKHZhbHVlKSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBzZW5kT3V0Y29tZShvdXRjb21lTmFtZTogc3RyaW5nLCBvdXRjb21lV2VpZ2h0PzogbnVtYmVyIHwgdW5kZWZpbmVkKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghdGhpcy5kb2VzT25lU2lnbmFsRXhpc3QoKSkge1xuICAgICAgICB0aGlzLm5nT25lU2lnbmFsRnVuY3Rpb25RdWV1ZS5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBcInNlbmRPdXRjb21lXCIsXG4gICAgICAgICAgYXJnczogYXJndW1lbnRzLFxuICAgICAgICAgIHByb21pc2VSZXNvbHZlcjogcmVzb2x2ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgd2luZG93Lk9uZVNpZ25hbC5wdXNoKCgpID0+IHtcbiAgICAgICAgd2luZG93Lk9uZVNpZ25hbC5zZW5kT3V0Y29tZShvdXRjb21lTmFtZSwgb3V0Y29tZVdlaWdodClcbiAgICAgICAgICAudGhlbigodmFsdWU6IFByb21pc2U8dm9pZD4pID0+IHJlc29sdmUodmFsdWUpKVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiByZWplY3QoZXJyb3IpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xufVxuIl19