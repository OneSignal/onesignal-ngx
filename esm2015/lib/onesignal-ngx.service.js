import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
const ONESIGNAL_SDK_ID = 'onesignal-sdk';
const ONE_SIGNAL_SCRIPT_SRC = 'https://cdn.onesignal.com/sdks/OneSignalSDK.js';
const ONESIGNAL_NOT_SETUP_ERROR = 'OneSignal is not setup correctly.';
const MAX_TIMEOUT = 30;
export class OneSignal {
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
OneSignal.ɵprov = i0.ɵɵdefineInjectable({ factory: function OneSignal_Factory() { return new OneSignal(); }, token: OneSignal, providedIn: "root" });
OneSignal.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
OneSignal.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25lc2lnbmFsLW5neC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvb25lc2lnbmFsLW5neC9zcmMvbGliL29uZXNpZ25hbC1uZ3guc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUMzQyxNQUFNLGdCQUFnQixHQUFHLGVBQWUsQ0FBQztBQUN6QyxNQUFNLHFCQUFxQixHQUFHLGdEQUFnRCxDQUFDO0FBQy9FLE1BQU0seUJBQXlCLEdBQUcsbUNBQW1DLENBQUM7QUFDdEUsTUFBTSxXQUFXLEdBQUcsRUFBRSxDQUFDO0FBc0N2QixNQUFNLE9BQU8sU0FBUztJQUlwQjtRQUhRLDJCQUFzQixHQUFHLEtBQUssQ0FBQztRQUMvQiw2QkFBd0IsR0FBNkIsRUFBRSxDQUFDO1FBSWhFLG1CQUFtQjtRQUVYLGlCQUFZLEdBQUcsR0FBRyxFQUFFO1lBQzFCLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDaEQsTUFBTSxDQUFDLEVBQUUsR0FBRyxnQkFBZ0IsQ0FBQztZQUM3QixNQUFNLENBQUMsR0FBRyxHQUFHLHFCQUFxQixDQUFDO1lBQ25DLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BDLENBQUMsQ0FBQTtRQUVPLHVCQUFrQixHQUFHLEdBQUcsRUFBRTtZQUNoQyxJQUFJLE1BQU0sQ0FBQyxTQUFTLEVBQUU7Z0JBQ3BCLE9BQU8sSUFBSSxDQUFDO2FBQ2I7WUFDRCxPQUFPLEtBQUssQ0FBQztRQUNmLENBQUMsQ0FBQTtRQUVPLG9DQUErQixHQUFHLEdBQUcsRUFBRTtZQUM3QyxJQUFJLENBQUMsd0JBQXdCLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFF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Q0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUM1QyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUFBLENBQUM7SUFFRixXQUFXLENBQUMsV0FBbUIsRUFBRSxhQUFrQztRQUNqRSxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsRUFBRTtnQkFDOUIsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQztvQkFDakMsSUFBSSxFQUFFLGFBQWE7b0JBQ25CLElBQUksRUFBRSxTQUFTO29CQUNmLGVBQWUsRUFBRSxPQUFPO2lCQUN6QixDQUFDLENBQUM7Z0JBQ0gsT0FBTzthQUNSO1lBRUQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUN6QixNQUFNLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsYUFBYSxDQUFDO3FCQUNyRCxJQUFJLENBQUMsQ0FBQyxLQUFvQixFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7cUJBQzlDLEtBQUssQ0FBQyxDQUFDLEtBQVksRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDNUMsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFBQSxDQUFDOzs7O1lBcnVCSCxVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgQWN0aW9uPFQ+eyAoaXRlbTogVCk6IHZvaWQ7IH1cbmludGVyZmFjZSBBdXRvUHJvbXB0T3B0aW9ucyB7IGZvcmNlPzogYm9vbGVhbjsgZm9yY2VTbGlkZWRvd25PdmVyTmF0aXZlPzogYm9vbGVhbjsgc2xpZGVkb3duUHJvbXB0T3B0aW9ucz86IElPbmVTaWduYWxBdXRvUHJvbXB0T3B0aW9uczsgfVxuaW50ZXJmYWNlIFJlZ2lzdGVyT3B0aW9ucyB7IG1vZGFsUHJvbXB0PzogYm9vbGVhbjsgaHR0cFBlcm1pc3Npb25SZXF1ZXN0PzogYm9vbGVhbjsgc2xpZGVkb3duPzogYm9vbGVhbjsgYXV0b0FjY2VwdD86IGJvb2xlYW4gfVxuaW50ZXJmYWNlIFNldFNNU09wdGlvbnMgeyBpZGVudGlmaWVyQXV0aEhhc2g/OiBzdHJpbmc7IH1cbmludGVyZmFjZSBTZXRFbWFpbE9wdGlvbnMgeyBpZGVudGlmaWVyQXV0aEhhc2g/OiBzdHJpbmc7IGVtYWlsQXV0aEhhc2g/OiBzdHJpbmc7IH1cbmludGVyZmFjZSBUYWdzT2JqZWN0PFQ+IHsgW2tleTogc3RyaW5nXTogVDsgfVxuaW50ZXJmYWNlIElPbmVTaWduYWxBdXRvUHJvbXB0T3B0aW9ucyB7IGZvcmNlPzogYm9vbGVhbjsgZm9yY2VTbGlkZWRvd25PdmVyTmF0aXZlPzogYm9vbGVhbjsgaXNJblVwZGF0ZU1vZGU/OiBib29sZWFuOyBjYXRlZ29yeU9wdGlvbnM/OiBJT25lU2lnbmFsQ2F0ZWdvcmllczsgfVxuaW50ZXJmYWNlIElPbmVTaWduYWxDYXRlZ29yaWVzIHsgcG9zaXRpdmVVcGRhdGVCdXR0b246IHN0cmluZzsgbmVnYXRpdmVVcGRhdGVCdXR0b246IHN0cmluZzsgc2F2aW5nQnV0dG9uVGV4dDogc3RyaW5nOyBlcnJvckJ1dHRvblRleHQ6IHN0cmluZzsgdXBkYXRlTWVzc2FnZTogc3RyaW5nOyB0YWdzOiBJT25lU2lnbmFsVGFnQ2F0ZWdvcnlbXTsgfVxuaW50ZXJmYWNlIElPbmVTaWduYWxUYWdDYXRlZ29yeSB7IHRhZzogc3RyaW5nOyBsYWJlbDogc3RyaW5nOyBjaGVja2VkPzogYm9vbGVhbjsgfVxuXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmNvbnN0IE9ORVNJR05BTF9TREtfSUQgPSAnb25lc2lnbmFsLXNkayc7XG5jb25zdCBPTkVfU0lHTkFMX1NDUklQVF9TUkMgPSAnaHR0cHM6Ly9jZG4ub25lc2lnbmFsLmNvbS9zZGtzL09uZVNpZ25hbFNESy5qcyc7XG5jb25zdCBPTkVTSUdOQUxfTk9UX1NFVFVQX0VSUk9SID0gJ09uZVNpZ25hbCBpcyBub3Qgc2V0dXAgY29ycmVjdGx5Lic7XG5jb25zdCBNQVhfVElNRU9VVCA9IDMwO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIE9uZVNpZ25hbDogYW55O1xuICB9XG59XG5cbmludGVyZmFjZSBJT25lU2lnbmFsRnVuY3Rpb25DYWxsIHtcbiAgbmFtZTogc3RyaW5nO1xuICBhcmdzOiBJQXJndW1lbnRzO1xuICBwcm9taXNlUmVzb2x2ZXI/OiBGdW5jdGlvbjtcbn1cblxuaW50ZXJmYWNlIElPbmVTaWduYWwge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbn1cblxuaW50ZXJmYWNlIElJbml0T2JqZWN0IHtcbiAgYXBwSWQ6IHN0cmluZztcbiAgc3ViZG9tYWluTmFtZT86IHN0cmluZztcbiAgcmVxdWlyZXNVc2VyUHJpdmFjeUNvbnNlbnQ/OiBib29sZWFuO1xuICBwcm9tcHRPcHRpb25zPzogT2JqZWN0O1xuICB3ZWxjb21lTm90aWZpY2F0aW9uPzogT2JqZWN0O1xuICBub3RpZnlCdXR0b24/OiBPYmplY3Q7XG4gIHBlcnNpc3ROb3RpZmljYXRpb24/OiBib29sZWFuO1xuICB3ZWJob29rcz86IE9iamVjdDtcbiAgYXV0b1Jlc3Vic2NyaWJlPzogYm9vbGVhbjtcbiAgYXV0b1JlZ2lzdGVyPzogYm9vbGVhbjtcbiAgbm90aWZpY2F0aW9uQ2xpY2tIYW5kbGVyTWF0Y2g/OiBzdHJpbmc7XG4gIG5vdGlmaWNhdGlvbkNsaWNrSGFuZGxlckFjdGlvbj86IHN0cmluZztcbiAgcGF0aD86IHN0cmluZztcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBPbmVTaWduYWwgaW1wbGVtZW50cyBJT25lU2lnbmFsIHtcbiAgcHJpdmF0ZSBpc09uZVNpZ25hbEluaXRpYWxpemVkID0gZmFsc2U7XG4gIHByaXZhdGUgbmdPbmVTaWduYWxGdW5jdGlvblF1ZXVlOiBJT25lU2lnbmFsRnVuY3Rpb25DYWxsW10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIC8qIEggRSBMIFAgRSBSIFMgKi9cblxuICBwcml2YXRlIGluamVjdFNjcmlwdCA9ICgpID0+IHtcbiAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICBzY3JpcHQuaWQgPSBPTkVTSUdOQUxfU0RLX0lEO1xuICAgIHNjcmlwdC5zcmMgPSBPTkVfU0lHTkFMX1NDUklQVF9TUkM7XG4gICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gIH1cblxuICBwcml2YXRlIGRvZXNPbmVTaWduYWxFeGlzdCA9ICgpID0+IHtcbiAgICBpZiAod2luZG93Lk9uZVNpZ25hbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgcHJvY2Vzc1F1ZXVlZE9uZVNpZ25hbEZ1bmN0aW9ucyA9ICgpID0+IHtcbiAgICB0aGlzLm5nT25lU2lnbmFsRnVuY3Rpb25RdWV1ZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgY29uc3QgeyBuYW1lLCBhcmdzLCBwcm9taXNlUmVzb2x2ZXIgfSA9IGVsZW1lbnQ7XG5cbiAgICAgIGlmICghIXByb21pc2VSZXNvbHZlcikge1xuICAgICAgICAodGhpcyBhcyBJT25lU2lnbmFsKVtuYW1lXSguLi5hcmdzKS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgICAgIHByb21pc2VSZXNvbHZlcihyZXN1bHQpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5PbmVTaWduYWxbbmFtZV0oLi4uYXJncyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHNldHVwT25lU2lnbmFsSWZNaXNzaW5nID0gKCkgPT4ge1xuICAgIGlmICghdGhpcy5kb2VzT25lU2lnbmFsRXhpc3QoKSkge1xuICAgICAgd2luZG93Lk9uZVNpZ25hbCA9IHdpbmRvdy5PbmVTaWduYWwgfHwgW107XG4gICAgfVxuICB9XG5cbiAgLyogUCBVIEIgTCBJIEMgKi9cblxuICBpbml0KG9wdGlvbnM6IElJbml0T2JqZWN0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KHJlc29sdmUgPT4ge1xuICAgICAgaWYgKHRoaXMuaXNPbmVTaWduYWxJbml0aWFsaXplZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaW5qZWN0U2NyaXB0KCk7XG4gICAgICB0aGlzLnNldHVwT25lU2lnbmFsSWZNaXNzaW5nKCk7XG4gICAgICB3aW5kb3cuT25lU2lnbmFsLnB1c2goKCkgPT4ge1xuICAgICAgICB3aW5kb3cuT25lU2lnbmFsLmluaXQob3B0aW9ucyk7XG4gICAgICB9KVxuXG4gICAgICBjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoT05FU0lHTkFMX05PVF9TRVRVUF9FUlJPUik7XG4gICAgICB9LCBNQVhfVElNRU9VVCAqIDFfMDAwKTtcblxuICAgICAgd2luZG93Lk9uZVNpZ25hbC5wdXNoKCgpID0+IHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICB0aGlzLmlzT25lU2lnbmFsSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnByb2Nlc3NRdWV1ZWRPbmVTaWduYWxGdW5jdGlvbnMoKTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSk7XG4gICAgfSlcbiAgfVxuXG5cbiAgb24oZXZlbnQ6IHN0cmluZywgbGlzdGVuZXI6IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmRvZXNPbmVTaWduYWxFeGlzdCgpKSB7XG4gICAgICB0aGlzLm5nT25lU2lnbmFsRnVuY3Rpb25RdWV1ZS5wdXNoKHtcbiAgICAgICAgbmFtZTogXCJvblwiLFxuICAgICAgICBhcmdzOiBhcmd1bWVudHMsXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aW5kb3cuT25lU2lnbmFsLnB1c2goKCkgPT4ge1xuICAgICAgd2luZG93Lk9uZVNpZ25hbC5vbihldmVudCwgbGlzdGVuZXIpXG4gICAgfSk7XG4gIH07XG5cbiAgb2ZmKGV2ZW50OiBzdHJpbmcsIGxpc3RlbmVyOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIGlmICghdGhpcy5kb2VzT25lU2lnbmFsRXhpc3QoKSkge1xuICAgICAgdGhpcy5uZ09uZVNpZ25hbEZ1bmN0aW9uUXVldWUucHVzaCh7XG4gICAgICAgIG5hbWU6IFwib2ZmXCIsXG4gICAgICAgIGFyZ3M6IGFyZ3VtZW50cyxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWwucHVzaCgoKSA9PiB7XG4gICAgICB3aW5kb3cuT25lU2lnbmFsLm9mZihldmVudCwgbGlzdGVuZXIpXG4gICAgfSk7XG4gIH07XG5cbiAgb25jZShldmVudDogc3RyaW5nLCBsaXN0ZW5lcjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZG9lc09uZVNpZ25hbEV4aXN0KCkpIHtcbiAgICAgIHRoaXMubmdPbmVTaWduYWxGdW5jdGlvblF1ZXVlLnB1c2goe1xuICAgICAgICBuYW1lOiBcIm9uY2VcIixcbiAgICAgICAgYXJnczogYXJndW1lbnRzLFxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbC5wdXNoKCgpID0+IHtcbiAgICAgIHdpbmRvdy5PbmVTaWduYWwub25jZShldmVudCwgbGlzdGVuZXIpXG4gICAgfSk7XG4gIH07XG5cbiAgaXNQdXNoTm90aWZpY2F0aW9uc0VuYWJsZWQoY2FsbGJhY2s/OiBBY3Rpb248Ym9vbGVhbj4pOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmRvZXNPbmVTaWduYWxFeGlzdCgpKSB7XG4gICAgICAgIHRoaXMubmdPbmVTaWduYWxGdW5jdGlvblF1ZXVlLnB1c2goe1xuICAgICAgICAgIG5hbWU6IFwiaXNQdXNoTm90aWZpY2F0aW9uc0VuYWJsZWRcIixcbiAgICAgICAgICBhcmdzOiBhcmd1bWVudHMsXG4gICAgICAgICAgcHJvbWlzZVJlc29sdmVyOiByZXNvbHZlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cuT25lU2lnbmFsLnB1c2goKCkgPT4ge1xuICAgICAgICB3aW5kb3cuT25lU2lnbmFsLmlzUHVzaE5vdGlmaWNhdGlvbnNFbmFibGVkKGNhbGxiYWNrKVxuICAgICAgICAgIC50aGVuKCh2YWx1ZTogUHJvbWlzZTxib29sZWFuPikgPT4gcmVzb2x2ZSh2YWx1ZSkpXG4gICAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgc2hvd0h0dHBQcm9tcHQob3B0aW9ucz86IEF1dG9Qcm9tcHRPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghdGhpcy5kb2VzT25lU2lnbmFsRXhpc3QoKSkge1xuICAgICAgICB0aGlzLm5nT25lU2lnbmFsRnVuY3Rpb25RdWV1ZS5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBcInNob3dIdHRwUHJvbXB0XCIsXG4gICAgICAgICAgYXJnczogYXJndW1lbnRzLFxuICAgICAgICAgIHByb21pc2VSZXNvbHZlcjogcmVzb2x2ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgd2luZG93Lk9uZVNpZ25hbC5wdXNoKCgpID0+IHtcbiAgICAgICAgd2luZG93Lk9uZVNpZ25hbC5zaG93SHR0cFByb21wdChvcHRpb25zKVxuICAgICAgICAgIC50aGVuKCh2YWx1ZTogUHJvbWlzZTx2b2lkPikgPT4gcmVzb2x2ZSh2YWx1ZSkpXG4gICAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmVnaXN0ZXJGb3JQdXNoTm90aWZpY2F0aW9ucyhvcHRpb25zPzogUmVnaXN0ZXJPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghdGhpcy5kb2VzT25lU2lnbmFsRXhpc3QoKSkge1xuICAgICAgICB0aGlzLm5nT25lU2lnbmFsRnVuY3Rpb25RdWV1ZS5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBcInJlZ2lzdGVyRm9yUHVzaE5vdGlmaWNhdGlvbnNcIixcbiAgICAgICAgICBhcmdzOiBhcmd1bWVudHMsXG4gICAgICAgICAgcHJvbWlzZVJlc29sdmVyOiByZXNvbHZlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cuT25lU2lnbmFsLnB1c2goKCkgPT4ge1xuICAgICAgICB3aW5kb3cuT25lU2lnbmFsLnJlZ2lzdGVyRm9yUHVzaE5vdGlmaWNhdGlvbnMob3B0aW9ucylcbiAgICAgICAgICAudGhlbigodmFsdWU6IFByb21pc2U8dm9pZD4pID0+IHJlc29sdmUodmFsdWUpKVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiByZWplY3QoZXJyb3IpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHNldERlZmF1bHROb3RpZmljYXRpb25VcmwodXJsOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmRvZXNPbmVTaWduYWxFeGlzdCgpKSB7XG4gICAgICAgIHRoaXMubmdPbmVTaWduYWxGdW5jdGlvblF1ZXVlLnB1c2goe1xuICAgICAgICAgIG5hbWU6IFwic2V0RGVmYXVsdE5vdGlmaWNhdGlvblVybFwiLFxuICAgICAgICAgIGFyZ3M6IGFyZ3VtZW50cyxcbiAgICAgICAgICBwcm9taXNlUmVzb2x2ZXI6IHJlc29sdmUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5PbmVTaWduYWwucHVzaCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5PbmVTaWduYWwuc2V0RGVmYXVsdE5vdGlmaWNhdGlvblVybCh1cmwpXG4gICAgICAgICAgLnRoZW4oKHZhbHVlOiBQcm9taXNlPHZvaWQ+KSA9PiByZXNvbHZlKHZhbHVlKSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBzZXREZWZhdWx0VGl0bGUodGl0bGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIXRoaXMuZG9lc09uZVNpZ25hbEV4aXN0KCkpIHtcbiAgICAgICAgdGhpcy5uZ09uZVNpZ25hbEZ1bmN0aW9uUXVldWUucHVzaCh7XG4gICAgICAgICAgbmFtZTogXCJzZXREZWZhdWx0VGl0bGVcIixcbiAgICAgICAgICBhcmdzOiBhcmd1bWVudHMsXG4gICAgICAgICAgcHJvbWlzZVJlc29sdmVyOiByZXNvbHZlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cuT25lU2lnbmFsLnB1c2goKCkgPT4ge1xuICAgICAgICB3aW5kb3cuT25lU2lnbmFsLnNldERlZmF1bHRUaXRsZSh0aXRsZSlcbiAgICAgICAgICAudGhlbigodmFsdWU6IFByb21pc2U8dm9pZD4pID0+IHJlc29sdmUodmFsdWUpKVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiByZWplY3QoZXJyb3IpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGdldFRhZ3MoY2FsbGJhY2s/OiBBY3Rpb248YW55Pik6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIXRoaXMuZG9lc09uZVNpZ25hbEV4aXN0KCkpIHtcbiAgICAgICAgdGhpcy5uZ09uZVNpZ25hbEZ1bmN0aW9uUXVldWUucHVzaCh7XG4gICAgICAgICAgbmFtZTogXCJnZXRUYWdzXCIsXG4gICAgICAgICAgYXJnczogYXJndW1lbnRzLFxuICAgICAgICAgIHByb21pc2VSZXNvbHZlcjogcmVzb2x2ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgd2luZG93Lk9uZVNpZ25hbC5wdXNoKCgpID0+IHtcbiAgICAgICAgd2luZG93Lk9uZVNpZ25hbC5nZXRUYWdzKGNhbGxiYWNrKVxuICAgICAgICAgIC50aGVuKCh2YWx1ZTogUHJvbWlzZTx2b2lkPikgPT4gcmVzb2x2ZSh2YWx1ZSkpXG4gICAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgc2VuZFRhZyhrZXk6IHN0cmluZywgdmFsdWU6IGFueSwgY2FsbGJhY2s/OiBBY3Rpb248T2JqZWN0Pik6IFByb21pc2U8T2JqZWN0IHwgbnVsbD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIXRoaXMuZG9lc09uZVNpZ25hbEV4aXN0KCkpIHtcbiAgICAgICAgdGhpcy5uZ09uZVNpZ25hbEZ1bmN0aW9uUXVldWUucHVzaCh7XG4gICAgICAgICAgbmFtZTogXCJzZW5kVGFnXCIsXG4gICAgICAgICAgYXJnczogYXJndW1lbnRzLFxuICAgICAgICAgIHByb21pc2VSZXNvbHZlcjogcmVzb2x2ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgd2luZG93Lk9uZVNpZ25hbC5wdXNoKCgpID0+IHtcbiAgICAgICAgd2luZG93Lk9uZVNpZ25hbC5zZW5kVGFnKGtleSwgdmFsdWUsIGNhbGxiYWNrKVxuICAgICAgICAgIC50aGVuKCh2YWx1ZTogUHJvbWlzZTxPYmplY3QgfCBudWxsPikgPT4gcmVzb2x2ZSh2YWx1ZSkpXG4gICAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgc2VuZFRhZ3ModGFnczogVGFnc09iamVjdDxhbnk+LCBjYWxsYmFjaz86IEFjdGlvbjxPYmplY3Q+KTogUHJvbWlzZTxPYmplY3QgfCBudWxsPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghdGhpcy5kb2VzT25lU2lnbmFsRXhpc3QoKSkge1xuICAgICAgICB0aGlzLm5nT25lU2lnbmFsRnVuY3Rpb25RdWV1ZS5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBcInNlbmRUYWdzXCIsXG4gICAgICAgICAgYXJnczogYXJndW1lbnRzLFxuICAgICAgICAgIHByb21pc2VSZXNvbHZlcjogcmVzb2x2ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgd2luZG93Lk9uZVNpZ25hbC5wdXNoKCgpID0+IHtcbiAgICAgICAgd2luZG93Lk9uZVNpZ25hbC5zZW5kVGFncyh0YWdzLCBjYWxsYmFjaylcbiAgICAgICAgICAudGhlbigodmFsdWU6IFByb21pc2U8T2JqZWN0IHwgbnVsbD4pID0+IHJlc29sdmUodmFsdWUpKVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiByZWplY3QoZXJyb3IpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGRlbGV0ZVRhZyh0YWc6IHN0cmluZyk6IFByb21pc2U8QXJyYXk8c3RyaW5nPj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIXRoaXMuZG9lc09uZVNpZ25hbEV4aXN0KCkpIHtcbiAgICAgICAgdGhpcy5uZ09uZVNpZ25hbEZ1bmN0aW9uUXVldWUucHVzaCh7XG4gICAgICAgICAgbmFtZTogXCJkZWxldGVUYWdcIixcbiAgICAgICAgICBhcmdzOiBhcmd1bWVudHMsXG4gICAgICAgICAgcHJvbWlzZVJlc29sdmVyOiByZXNvbHZlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cuT25lU2lnbmFsLnB1c2goKCkgPT4ge1xuICAgICAgICB3aW5kb3cuT25lU2lnbmFsLmRlbGV0ZVRhZyh0YWcpXG4gICAgICAgICAgLnRoZW4oKHZhbHVlOiBQcm9taXNlPEFycmF5PHN0cmluZz4+KSA9PiByZXNvbHZlKHZhbHVlKSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBkZWxldGVUYWdzKHRhZ3M6IEFycmF5PHN0cmluZz4sIGNhbGxiYWNrPzogQWN0aW9uPEFycmF5PHN0cmluZz4+KTogUHJvbWlzZTxBcnJheTxzdHJpbmc+PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghdGhpcy5kb2VzT25lU2lnbmFsRXhpc3QoKSkge1xuICAgICAgICB0aGlzLm5nT25lU2lnbmFsRnVuY3Rpb25RdWV1ZS5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBcImRlbGV0ZVRhZ3NcIixcbiAgICAgICAgICBhcmdzOiBhcmd1bWVudHMsXG4gICAgICAgICAgcHJvbWlzZVJlc29sdmVyOiByZXNvbHZlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cuT25lU2lnbmFsLnB1c2goKCkgPT4ge1xuICAgICAgICB3aW5kb3cuT25lU2lnbmFsLmRlbGV0ZVRhZ3ModGFncywgY2FsbGJhY2spXG4gICAgICAgICAgLnRoZW4oKHZhbHVlOiBQcm9taXNlPEFycmF5PHN0cmluZz4+KSA9PiByZXNvbHZlKHZhbHVlKSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBhZGRMaXN0ZW5lckZvck5vdGlmaWNhdGlvbk9wZW5lZChjYWxsYmFjaz86IEFjdGlvbjxOb3RpZmljYXRpb24+KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghdGhpcy5kb2VzT25lU2lnbmFsRXhpc3QoKSkge1xuICAgICAgICB0aGlzLm5nT25lU2lnbmFsRnVuY3Rpb25RdWV1ZS5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBcImFkZExpc3RlbmVyRm9yTm90aWZpY2F0aW9uT3BlbmVkXCIsXG4gICAgICAgICAgYXJnczogYXJndW1lbnRzLFxuICAgICAgICAgIHByb21pc2VSZXNvbHZlcjogcmVzb2x2ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgd2luZG93Lk9uZVNpZ25hbC5wdXNoKCgpID0+IHtcbiAgICAgICAgd2luZG93Lk9uZVNpZ25hbC5hZGRMaXN0ZW5lckZvck5vdGlmaWNhdGlvbk9wZW5lZChjYWxsYmFjaylcbiAgICAgICAgICAudGhlbigodmFsdWU6IFByb21pc2U8dm9pZD4pID0+IHJlc29sdmUodmFsdWUpKVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiByZWplY3QoZXJyb3IpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHNldFN1YnNjcmlwdGlvbihuZXdTdWJzY3JpcHRpb246IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmRvZXNPbmVTaWduYWxFeGlzdCgpKSB7XG4gICAgICAgIHRoaXMubmdPbmVTaWduYWxGdW5jdGlvblF1ZXVlLnB1c2goe1xuICAgICAgICAgIG5hbWU6IFwic2V0U3Vic2NyaXB0aW9uXCIsXG4gICAgICAgICAgYXJnczogYXJndW1lbnRzLFxuICAgICAgICAgIHByb21pc2VSZXNvbHZlcjogcmVzb2x2ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgd2luZG93Lk9uZVNpZ25hbC5wdXNoKCgpID0+IHtcbiAgICAgICAgd2luZG93Lk9uZVNpZ25hbC5zZXRTdWJzY3JpcHRpb24obmV3U3Vic2NyaXB0aW9uKVxuICAgICAgICAgIC50aGVuKCh2YWx1ZTogUHJvbWlzZTx2b2lkPikgPT4gcmVzb2x2ZSh2YWx1ZSkpXG4gICAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgc2hvd0h0dHBQZXJtaXNzaW9uUmVxdWVzdChvcHRpb25zPzogQXV0b1Byb21wdE9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIXRoaXMuZG9lc09uZVNpZ25hbEV4aXN0KCkpIHtcbiAgICAgICAgdGhpcy5uZ09uZVNpZ25hbEZ1bmN0aW9uUXVldWUucHVzaCh7XG4gICAgICAgICAgbmFtZTogXCJzaG93SHR0cFBlcm1pc3Npb25SZXF1ZXN0XCIsXG4gICAgICAgICAgYXJnczogYXJndW1lbnRzLFxuICAgICAgICAgIHByb21pc2VSZXNvbHZlcjogcmVzb2x2ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgd2luZG93Lk9uZVNpZ25hbC5wdXNoKCgpID0+IHtcbiAgICAgICAgd2luZG93Lk9uZVNpZ25hbC5zaG93SHR0cFBlcm1pc3Npb25SZXF1ZXN0KG9wdGlvbnMpXG4gICAgICAgICAgLnRoZW4oKHZhbHVlOiBQcm9taXNlPGFueT4pID0+IHJlc29sdmUodmFsdWUpKVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiByZWplY3QoZXJyb3IpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHNob3dOYXRpdmVQcm9tcHQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghdGhpcy5kb2VzT25lU2lnbmFsRXhpc3QoKSkge1xuICAgICAgICB0aGlzLm5nT25lU2lnbmFsRnVuY3Rpb25RdWV1ZS5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBcInNob3dOYXRpdmVQcm9tcHRcIixcbiAgICAgICAgICBhcmdzOiBhcmd1bWVudHMsXG4gICAgICAgICAgcHJvbWlzZVJlc29sdmVyOiByZXNvbHZlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cuT25lU2lnbmFsLnB1c2goKCkgPT4ge1xuICAgICAgICB3aW5kb3cuT25lU2lnbmFsLnNob3dOYXRpdmVQcm9tcHQoKVxuICAgICAgICAgIC50aGVuKCh2YWx1ZTogUHJvbWlzZTx2b2lkPikgPT4gcmVzb2x2ZSh2YWx1ZSkpXG4gICAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgc2hvd1NsaWRlZG93blByb21wdChvcHRpb25zPzogQXV0b1Byb21wdE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmRvZXNPbmVTaWduYWxFeGlzdCgpKSB7XG4gICAgICAgIHRoaXMubmdPbmVTaWduYWxGdW5jdGlvblF1ZXVlLnB1c2goe1xuICAgICAgICAgIG5hbWU6IFwic2hvd1NsaWRlZG93blByb21wdFwiLFxuICAgICAgICAgIGFyZ3M6IGFyZ3VtZW50cyxcbiAgICAgICAgICBwcm9taXNlUmVzb2x2ZXI6IHJlc29sdmUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5PbmVTaWduYWwucHVzaCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5PbmVTaWduYWwuc2hvd1NsaWRlZG93blByb21wdChvcHRpb25zKVxuICAgICAgICAgIC50aGVuKCh2YWx1ZTogUHJvbWlzZTx2b2lkPikgPT4gcmVzb2x2ZSh2YWx1ZSkpXG4gICAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgc2hvd0NhdGVnb3J5U2xpZGVkb3duKG9wdGlvbnM/OiBBdXRvUHJvbXB0T3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIXRoaXMuZG9lc09uZVNpZ25hbEV4aXN0KCkpIHtcbiAgICAgICAgdGhpcy5uZ09uZVNpZ25hbEZ1bmN0aW9uUXVldWUucHVzaCh7XG4gICAgICAgICAgbmFtZTogXCJzaG93Q2F0ZWdvcnlTbGlkZWRvd25cIixcbiAgICAgICAgICBhcmdzOiBhcmd1bWVudHMsXG4gICAgICAgICAgcHJvbWlzZVJlc29sdmVyOiByZXNvbHZlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cuT25lU2lnbmFsLnB1c2goKCkgPT4ge1xuICAgICAgICB3aW5kb3cuT25lU2lnbmFsLnNob3dDYXRlZ29yeVNsaWRlZG93bihvcHRpb25zKVxuICAgICAgICAgIC50aGVuKCh2YWx1ZTogUHJvbWlzZTx2b2lkPikgPT4gcmVzb2x2ZSh2YWx1ZSkpXG4gICAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgc2hvd1Ntc1NsaWRlZG93bihvcHRpb25zPzogQXV0b1Byb21wdE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmRvZXNPbmVTaWduYWxFeGlzdCgpKSB7XG4gICAgICAgIHRoaXMubmdPbmVTaWduYWxGdW5jdGlvblF1ZXVlLnB1c2goe1xuICAgICAgICAgIG5hbWU6IFwic2hvd1Ntc1NsaWRlZG93blwiLFxuICAgICAgICAgIGFyZ3M6IGFyZ3VtZW50cyxcbiAgICAgICAgICBwcm9taXNlUmVzb2x2ZXI6IHJlc29sdmUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5PbmVTaWduYWwucHVzaCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5PbmVTaWduYWwuc2hvd1Ntc1NsaWRlZG93bihvcHRpb25zKVxuICAgICAgICAgIC50aGVuKCh2YWx1ZTogUHJvbWlzZTx2b2lkPikgPT4gcmVzb2x2ZSh2YWx1ZSkpXG4gICAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgc2hvd0VtYWlsU2xpZGVkb3duKG9wdGlvbnM/OiBBdXRvUHJvbXB0T3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIXRoaXMuZG9lc09uZVNpZ25hbEV4aXN0KCkpIHtcbiAgICAgICAgdGhpcy5uZ09uZVNpZ25hbEZ1bmN0aW9uUXVldWUucHVzaCh7XG4gICAgICAgICAgbmFtZTogXCJzaG93RW1haWxTbGlkZWRvd25cIixcbiAgICAgICAgICBhcmdzOiBhcmd1bWVudHMsXG4gICAgICAgICAgcHJvbWlzZVJlc29sdmVyOiByZXNvbHZlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cuT25lU2lnbmFsLnB1c2goKCkgPT4ge1xuICAgICAgICB3aW5kb3cuT25lU2lnbmFsLnNob3dFbWFpbFNsaWRlZG93bihvcHRpb25zKVxuICAgICAgICAgIC50aGVuKCh2YWx1ZTogUHJvbWlzZTx2b2lkPikgPT4gcmVzb2x2ZSh2YWx1ZSkpXG4gICAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgc2hvd1Ntc0FuZEVtYWlsU2xpZGVkb3duKG9wdGlvbnM/OiBBdXRvUHJvbXB0T3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIXRoaXMuZG9lc09uZVNpZ25hbEV4aXN0KCkpIHtcbiAgICAgICAgdGhpcy5uZ09uZVNpZ25hbEZ1bmN0aW9uUXVldWUucHVzaCh7XG4gICAgICAgICAgbmFtZTogXCJzaG93U21zQW5kRW1haWxTbGlkZWRvd25cIixcbiAgICAgICAgICBhcmdzOiBhcmd1bWVudHMsXG4gICAgICAgICAgcHJvbWlzZVJlc29sdmVyOiByZXNvbHZlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cuT25lU2lnbmFsLnB1c2goKCkgPT4ge1xuICAgICAgICB3aW5kb3cuT25lU2lnbmFsLnNob3dTbXNBbmRFbWFpbFNsaWRlZG93bihvcHRpb25zKVxuICAgICAgICAgIC50aGVuKCh2YWx1ZTogUHJvbWlzZTx2b2lkPikgPT4gcmVzb2x2ZSh2YWx1ZSkpXG4gICAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgZ2V0Tm90aWZpY2F0aW9uUGVybWlzc2lvbihvbkNvbXBsZXRlPzogRnVuY3Rpb24pOiBQcm9taXNlPE5vdGlmaWNhdGlvblBlcm1pc3Npb24+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmRvZXNPbmVTaWduYWxFeGlzdCgpKSB7XG4gICAgICAgIHRoaXMubmdPbmVTaWduYWxGdW5jdGlvblF1ZXVlLnB1c2goe1xuICAgICAgICAgIG5hbWU6IFwiZ2V0Tm90aWZpY2F0aW9uUGVybWlzc2lvblwiLFxuICAgICAgICAgIGFyZ3M6IGFyZ3VtZW50cyxcbiAgICAgICAgICBwcm9taXNlUmVzb2x2ZXI6IHJlc29sdmUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5PbmVTaWduYWwucHVzaCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5PbmVTaWduYWwuZ2V0Tm90aWZpY2F0aW9uUGVybWlzc2lvbihvbkNvbXBsZXRlKVxuICAgICAgICAgIC50aGVuKCh2YWx1ZTogUHJvbWlzZTxOb3RpZmljYXRpb25QZXJtaXNzaW9uPikgPT4gcmVzb2x2ZSh2YWx1ZSkpXG4gICAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgZ2V0VXNlcklkKGNhbGxiYWNrPzogQWN0aW9uPHN0cmluZyB8IHVuZGVmaW5lZCB8IG51bGw+KTogUHJvbWlzZTxzdHJpbmcgfCB1bmRlZmluZWQgfCBudWxsPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghdGhpcy5kb2VzT25lU2lnbmFsRXhpc3QoKSkge1xuICAgICAgICB0aGlzLm5nT25lU2lnbmFsRnVuY3Rpb25RdWV1ZS5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBcImdldFVzZXJJZFwiLFxuICAgICAgICAgIGFyZ3M6IGFyZ3VtZW50cyxcbiAgICAgICAgICBwcm9taXNlUmVzb2x2ZXI6IHJlc29sdmUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5PbmVTaWduYWwucHVzaCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5PbmVTaWduYWwuZ2V0VXNlcklkKGNhbGxiYWNrKVxuICAgICAgICAgIC50aGVuKCh2YWx1ZTogUHJvbWlzZTxzdHJpbmcgfCB1bmRlZmluZWQgfCBudWxsPikgPT4gcmVzb2x2ZSh2YWx1ZSkpXG4gICAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgZ2V0U3Vic2NyaXB0aW9uKGNhbGxiYWNrPzogQWN0aW9uPGJvb2xlYW4+KTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghdGhpcy5kb2VzT25lU2lnbmFsRXhpc3QoKSkge1xuICAgICAgICB0aGlzLm5nT25lU2lnbmFsRnVuY3Rpb25RdWV1ZS5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBcImdldFN1YnNjcmlwdGlvblwiLFxuICAgICAgICAgIGFyZ3M6IGFyZ3VtZW50cyxcbiAgICAgICAgICBwcm9taXNlUmVzb2x2ZXI6IHJlc29sdmUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5PbmVTaWduYWwucHVzaCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5PbmVTaWduYWwuZ2V0U3Vic2NyaXB0aW9uKGNhbGxiYWNrKVxuICAgICAgICAgIC50aGVuKCh2YWx1ZTogUHJvbWlzZTxib29sZWFuPikgPT4gcmVzb2x2ZSh2YWx1ZSkpXG4gICAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgc2V0RW1haWwoZW1haWw6IHN0cmluZywgb3B0aW9ucz86IFNldEVtYWlsT3B0aW9ucyk6IFByb21pc2U8c3RyaW5nfG51bGw+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmRvZXNPbmVTaWduYWxFeGlzdCgpKSB7XG4gICAgICAgIHRoaXMubmdPbmVTaWduYWxGdW5jdGlvblF1ZXVlLnB1c2goe1xuICAgICAgICAgIG5hbWU6IFwic2V0RW1haWxcIixcbiAgICAgICAgICBhcmdzOiBhcmd1bWVudHMsXG4gICAgICAgICAgcHJvbWlzZVJlc29sdmVyOiByZXNvbHZlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cuT25lU2lnbmFsLnB1c2goKCkgPT4ge1xuICAgICAgICB3aW5kb3cuT25lU2lnbmFsLnNldEVtYWlsKGVtYWlsLCBvcHRpb25zKVxuICAgICAgICAgIC50aGVuKCh2YWx1ZTogUHJvbWlzZTxzdHJpbmd8bnVsbD4pID0+IHJlc29sdmUodmFsdWUpKVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiByZWplY3QoZXJyb3IpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHNldFNNU051bWJlcihzbXNOdW1iZXI6IHN0cmluZywgb3B0aW9ucz86IFNldFNNU09wdGlvbnMpOiBQcm9taXNlPHN0cmluZyB8IG51bGw+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmRvZXNPbmVTaWduYWxFeGlzdCgpKSB7XG4gICAgICAgIHRoaXMubmdPbmVTaWduYWxGdW5jdGlvblF1ZXVlLnB1c2goe1xuICAgICAgICAgIG5hbWU6IFwic2V0U01TTnVtYmVyXCIsXG4gICAgICAgICAgYXJnczogYXJndW1lbnRzLFxuICAgICAgICAgIHByb21pc2VSZXNvbHZlcjogcmVzb2x2ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgd2luZG93Lk9uZVNpZ25hbC5wdXNoKCgpID0+IHtcbiAgICAgICAgd2luZG93Lk9uZVNpZ25hbC5zZXRTTVNOdW1iZXIoc21zTnVtYmVyLCBvcHRpb25zKVxuICAgICAgICAgIC50aGVuKCh2YWx1ZTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPikgPT4gcmVzb2x2ZSh2YWx1ZSkpXG4gICAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgbG9nb3V0RW1haWwoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghdGhpcy5kb2VzT25lU2lnbmFsRXhpc3QoKSkge1xuICAgICAgICB0aGlzLm5nT25lU2lnbmFsRnVuY3Rpb25RdWV1ZS5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBcImxvZ291dEVtYWlsXCIsXG4gICAgICAgICAgYXJnczogYXJndW1lbnRzLFxuICAgICAgICAgIHByb21pc2VSZXNvbHZlcjogcmVzb2x2ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgd2luZG93Lk9uZVNpZ25hbC5wdXNoKCgpID0+IHtcbiAgICAgICAgd2luZG93Lk9uZVNpZ25hbC5sb2dvdXRFbWFpbCgpXG4gICAgICAgICAgLnRoZW4oKHZhbHVlOiBQcm9taXNlPHZvaWQ+KSA9PiByZXNvbHZlKHZhbHVlKSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBsb2dvdXRTTVMoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghdGhpcy5kb2VzT25lU2lnbmFsRXhpc3QoKSkge1xuICAgICAgICB0aGlzLm5nT25lU2lnbmFsRnVuY3Rpb25RdWV1ZS5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBcImxvZ291dFNNU1wiLFxuICAgICAgICAgIGFyZ3M6IGFyZ3VtZW50cyxcbiAgICAgICAgICBwcm9taXNlUmVzb2x2ZXI6IHJlc29sdmUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5PbmVTaWduYWwucHVzaCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5PbmVTaWduYWwubG9nb3V0U01TKClcbiAgICAgICAgICAudGhlbigodmFsdWU6IFByb21pc2U8dm9pZD4pID0+IHJlc29sdmUodmFsdWUpKVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiByZWplY3QoZXJyb3IpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHNldEV4dGVybmFsVXNlcklkKGV4dGVybmFsVXNlcklkOiBzdHJpbmcgfCB1bmRlZmluZWQgfCBudWxsLCBhdXRoSGFzaD86IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIXRoaXMuZG9lc09uZVNpZ25hbEV4aXN0KCkpIHtcbiAgICAgICAgdGhpcy5uZ09uZVNpZ25hbEZ1bmN0aW9uUXVldWUucHVzaCh7XG4gICAgICAgICAgbmFtZTogXCJzZXRFeHRlcm5hbFVzZXJJZFwiLFxuICAgICAgICAgIGFyZ3M6IGFyZ3VtZW50cyxcbiAgICAgICAgICBwcm9taXNlUmVzb2x2ZXI6IHJlc29sdmUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5PbmVTaWduYWwucHVzaCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5PbmVTaWduYWwuc2V0RXh0ZXJuYWxVc2VySWQoZXh0ZXJuYWxVc2VySWQsIGF1dGhIYXNoKVxuICAgICAgICAgIC50aGVuKCh2YWx1ZTogUHJvbWlzZTx2b2lkPikgPT4gcmVzb2x2ZSh2YWx1ZSkpXG4gICAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmVtb3ZlRXh0ZXJuYWxVc2VySWQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghdGhpcy5kb2VzT25lU2lnbmFsRXhpc3QoKSkge1xuICAgICAgICB0aGlzLm5nT25lU2lnbmFsRnVuY3Rpb25RdWV1ZS5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBcInJlbW92ZUV4dGVybmFsVXNlcklkXCIsXG4gICAgICAgICAgYXJnczogYXJndW1lbnRzLFxuICAgICAgICAgIHByb21pc2VSZXNvbHZlcjogcmVzb2x2ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgd2luZG93Lk9uZVNpZ25hbC5wdXNoKCgpID0+IHtcbiAgICAgICAgd2luZG93Lk9uZVNpZ25hbC5yZW1vdmVFeHRlcm5hbFVzZXJJZCgpXG4gICAgICAgICAgLnRoZW4oKHZhbHVlOiBQcm9taXNlPHZvaWQ+KSA9PiByZXNvbHZlKHZhbHVlKSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBnZXRFeHRlcm5hbFVzZXJJZCgpOiBQcm9taXNlPHN0cmluZyB8IHVuZGVmaW5lZCB8IG51bGw+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmRvZXNPbmVTaWduYWxFeGlzdCgpKSB7XG4gICAgICAgIHRoaXMubmdPbmVTaWduYWxGdW5jdGlvblF1ZXVlLnB1c2goe1xuICAgICAgICAgIG5hbWU6IFwiZ2V0RXh0ZXJuYWxVc2VySWRcIixcbiAgICAgICAgICBhcmdzOiBhcmd1bWVudHMsXG4gICAgICAgICAgcHJvbWlzZVJlc29sdmVyOiByZXNvbHZlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cuT25lU2lnbmFsLnB1c2goKCkgPT4ge1xuICAgICAgICB3aW5kb3cuT25lU2lnbmFsLmdldEV4dGVybmFsVXNlcklkKClcbiAgICAgICAgICAudGhlbigodmFsdWU6IFByb21pc2U8c3RyaW5nIHwgdW5kZWZpbmVkIHwgbnVsbD4pID0+IHJlc29sdmUodmFsdWUpKVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiByZWplY3QoZXJyb3IpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHByb3ZpZGVVc2VyQ29uc2VudChjb25zZW50OiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghdGhpcy5kb2VzT25lU2lnbmFsRXhpc3QoKSkge1xuICAgICAgICB0aGlzLm5nT25lU2lnbmFsRnVuY3Rpb25RdWV1ZS5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBcInByb3ZpZGVVc2VyQ29uc2VudFwiLFxuICAgICAgICAgIGFyZ3M6IGFyZ3VtZW50cyxcbiAgICAgICAgICBwcm9taXNlUmVzb2x2ZXI6IHJlc29sdmUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5PbmVTaWduYWwucHVzaCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5PbmVTaWduYWwucHJvdmlkZVVzZXJDb25zZW50KGNvbnNlbnQpXG4gICAgICAgICAgLnRoZW4oKHZhbHVlOiBQcm9taXNlPHZvaWQ+KSA9PiByZXNvbHZlKHZhbHVlKSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBnZXRFbWFpbElkKGNhbGxiYWNrPzogQWN0aW9uPHN0cmluZyB8IHVuZGVmaW5lZD4pOiBQcm9taXNlPHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmRvZXNPbmVTaWduYWxFeGlzdCgpKSB7XG4gICAgICAgIHRoaXMubmdPbmVTaWduYWxGdW5jdGlvblF1ZXVlLnB1c2goe1xuICAgICAgICAgIG5hbWU6IFwiZ2V0RW1haWxJZFwiLFxuICAgICAgICAgIGFyZ3M6IGFyZ3VtZW50cyxcbiAgICAgICAgICBwcm9taXNlUmVzb2x2ZXI6IHJlc29sdmUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5PbmVTaWduYWwucHVzaCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5PbmVTaWduYWwuZ2V0RW1haWxJZChjYWxsYmFjaylcbiAgICAgICAgICAudGhlbigodmFsdWU6IFByb21pc2U8c3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZD4pID0+IHJlc29sdmUodmFsdWUpKVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiByZWplY3QoZXJyb3IpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGdldFNNU0lkKGNhbGxiYWNrPzogQWN0aW9uPHN0cmluZyB8IHVuZGVmaW5lZD4pOiBQcm9taXNlPHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmRvZXNPbmVTaWduYWxFeGlzdCgpKSB7XG4gICAgICAgIHRoaXMubmdPbmVTaWduYWxGdW5jdGlvblF1ZXVlLnB1c2goe1xuICAgICAgICAgIG5hbWU6IFwiZ2V0U01TSWRcIixcbiAgICAgICAgICBhcmdzOiBhcmd1bWVudHMsXG4gICAgICAgICAgcHJvbWlzZVJlc29sdmVyOiByZXNvbHZlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cuT25lU2lnbmFsLnB1c2goKCkgPT4ge1xuICAgICAgICB3aW5kb3cuT25lU2lnbmFsLmdldFNNU0lkKGNhbGxiYWNrKVxuICAgICAgICAgIC50aGVuKCh2YWx1ZTogUHJvbWlzZTxzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkPikgPT4gcmVzb2x2ZSh2YWx1ZSkpXG4gICAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgc2VuZE91dGNvbWUob3V0Y29tZU5hbWU6IHN0cmluZywgb3V0Y29tZVdlaWdodD86IG51bWJlciB8IHVuZGVmaW5lZCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIXRoaXMuZG9lc09uZVNpZ25hbEV4aXN0KCkpIHtcbiAgICAgICAgdGhpcy5uZ09uZVNpZ25hbEZ1bmN0aW9uUXVldWUucHVzaCh7XG4gICAgICAgICAgbmFtZTogXCJzZW5kT3V0Y29tZVwiLFxuICAgICAgICAgIGFyZ3M6IGFyZ3VtZW50cyxcbiAgICAgICAgICBwcm9taXNlUmVzb2x2ZXI6IHJlc29sdmUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5PbmVTaWduYWwucHVzaCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5PbmVTaWduYWwuc2VuZE91dGNvbWUob3V0Y29tZU5hbWUsIG91dGNvbWVXZWlnaHQpXG4gICAgICAgICAgLnRoZW4oKHZhbHVlOiBQcm9taXNlPHZvaWQ+KSA9PiByZXNvbHZlKHZhbHVlKSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcbn1cbiJdfQ==