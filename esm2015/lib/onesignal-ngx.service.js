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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25lc2lnbmFsLW5neC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvb25lc2lnbmFsLW5neC9zcmMvbGliL29uZXNpZ25hbC1uZ3guc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQkEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFDM0MsTUFBTSxnQkFBZ0IsR0FBRyxlQUFlLENBQUM7QUFDekMsTUFBTSxxQkFBcUIsR0FBRyxnREFBZ0QsQ0FBQztBQUMvRSxNQUFNLHlCQUF5QixHQUFHLG1DQUFtQyxDQUFDO0FBQ3RFLE1BQU0sV0FBVyxHQUFHLEVBQUUsQ0FBQztBQXFCdkIsTUFBTSxPQUFPLFNBQVM7SUFJcEI7UUFIUSwyQkFBc0IsR0FBRyxLQUFLLENBQUM7UUFDL0IsNkJBQXdCLEdBQTZCLEVBQUUsQ0FBQztRQUloRSxtQkFBbUI7UUFFWCxpQkFBWSxHQUFHLEdBQUcsRUFBRTtZQUMxQixNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2hELE1BQU0sQ0FBQyxFQUFFLEdBQUcsZ0JBQWdCLENBQUM7WUFDN0IsTUFBTSxDQUFDLEdBQUcsR0FBRyxxQkFBcUIsQ0FBQztZQUNuQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUNwQixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUE7UUFFTyx1QkFBa0IsR0FBRyxHQUFHLEVBQUU7WUFDaEMsSUFBSSxNQUFNLENBQUMsU0FBUyxFQUFFO2dCQUNwQixPQUFPLElBQUksQ0FBQzthQUNiO1lBQ0QsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDLENBQUE7UUFFTyxvQ0FBK0IsR0FBRyxHQUFHLEVBQUU7WUFDN0MsSUFBSSxDQUFDLHdCQUF3QixDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDOUMsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLEdBQUcsT0FBTyxDQUFDO2dCQUVoRCxJQUFJLENBQUMsQ0FBQyxlQUFlLEVBQUU7b0JBQ3BCLElBQW1CLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFXLEVBQUUsRUFBRTt3QkFDdkQsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUMxQixDQUFDLENBQUMsQ0FBQztpQkFDSjtxQkFBTTtvQkFDTCxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7aUJBQ2pDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUE7UUFFTyw0QkFBdUIsR0FBRyxHQUFHLEVBQUU7WUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFO2dCQUM5QixNQUFNLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDO2FBQzNDO1FBQ0gsQ0FBQyxDQUFBO0lBckNlLENBQUM7SUF1Q2pCLGlCQUFpQjtJQUVqQixJQUFJLENBQUMsT0FBb0I7UUFDdkIsT0FBTyxJQUFJLE9BQU8sQ0FBTyxPQUFPLENBQUMsRUFBRTtZQUNqQyxJQUFJLElBQUksQ0FBQyxzQkFBc0IsRUFBRTtnQkFDL0IsT0FBTzthQUNSO1lBRUQsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1lBQy9CLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDekIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDakMsQ0FBQyxDQUFDLENBQUM7WUFFSCxNQUFNLE9BQU8sR0FBRyxVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUM5QixPQUFPLENBQUMsS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7WUFDM0MsQ0FBQyxFQUFFLFdBQVcsR0FBRyxJQUFLLENBQUMsQ0FBQztZQUV4QixNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ3pCLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDdEIsSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQztnQkFDbkMsSUFBSSxDQUFDLCtCQUErQixFQUFFLENBQUM7Z0JBQ3ZDLE9BQU8sRUFBRSxDQUFDO1lBQ1osQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFHRCxFQUFFLENBQUMsS0FBYSxFQUFFLFFBQW1DO1FBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsRUFBRTtZQUM5QixJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDO2dCQUNqQyxJQUFJLEVBQUUsSUFBSTtnQkFDVixJQUFJLEVBQUUsU0FBUzthQUNoQixDQUFDLENBQUM7WUFDSCxPQUFPO1NBQ1I7UUFFRCxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDekIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELEdBQUcsQ0FBQyxLQUFhLEVBQUUsUUFBbUM7UUFDcEQsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFO1lBQzlCLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pDLElBQUksRUFBRSxLQUFLO2dCQUNYLElBQUksRUFBRSxTQUFTO2FBQ2hCLENBQUMsQ0FBQztZQUNILE9BQU87U0FDUjtRQUVELE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUN6QixNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsSUFBSSxDQUFDLEtBQWEsRUFBRSxRQUFtQztRQUNyRCxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEVBQUU7WUFDOUIsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQztnQkFDakMsSUFBSSxFQUFFLE1BQU07Z0JBQ1osSUFBSSxFQUFFLFNBQVM7YUFDaEIsQ0FBQyxDQUFDO1lBQ0gsT0FBTztTQUNSO1FBRUQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ3pCLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztRQUN6QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCwwQkFBMEIsQ0FBQyxRQUEwQjtRQUNuRCxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsRUFBRTtnQkFDOUIsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQztvQkFDakMsSUFBSSxFQUFFLDRCQUE0QjtvQkFDbEMsSUFBSSxFQUFFLFNBQVM7b0JBQ2YsZUFBZSxFQUFFLE9BQU87aUJBQ3pCLENBQUMsQ0FBQztnQkFDSCxPQUFPO2FBQ1I7WUFFRCxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ3pCLE1BQU0sQ0FBQyxTQUFTLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDO3FCQUNsRCxJQUFJLENBQUMsQ0FBQyxLQUF1QixFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7cUJBQ2pELEtBQUssQ0FBQyxDQUFDLEtBQVksRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDNUMsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxjQUFjLENBQUMsT0FBMkI7UUFDeEMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUM7b0JBQ2pDLElBQUksRUFBRSxnQkFBZ0I7b0JBQ3RCLElBQUksRUFBRSxTQUFTO29CQUNmLGVBQWUsRUFBRSxPQUFPO2lCQUN6QixDQUFDLENBQUM7Z0JBQ0gsT0FBTzthQUNSO1lBRUQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUN6QixNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUM7cUJBQ3JDLElBQUksQ0FBQyxDQUFDLEtBQW9CLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDOUMsS0FBSyxDQUFDLENBQUMsS0FBWSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUM1QyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDRCQUE0QixDQUFDLE9BQXlCO1FBQ3BELE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFO2dCQUM5QixJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDO29CQUNqQyxJQUFJLEVBQUUsOEJBQThCO29CQUNwQyxJQUFJLEVBQUUsU0FBUztvQkFDZixlQUFlLEVBQUUsT0FBTztpQkFDekIsQ0FBQyxDQUFDO2dCQUNILE9BQU87YUFDUjtZQUVELE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDekIsTUFBTSxDQUFDLFNBQVMsQ0FBQyw0QkFBNEIsQ0FBQyxPQUFPLENBQUM7cUJBQ25ELElBQUksQ0FBQyxDQUFDLEtBQW9CLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDOUMsS0FBSyxDQUFDLENBQUMsS0FBWSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUM1QyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHlCQUF5QixDQUFDLEdBQVc7UUFDbkMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUM7b0JBQ2pDLElBQUksRUFBRSwyQkFBMkI7b0JBQ2pDLElBQUksRUFBRSxTQUFTO29CQUNmLGVBQWUsRUFBRSxPQUFPO2lCQUN6QixDQUFDLENBQUM7Z0JBQ0gsT0FBTzthQUNSO1lBRUQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUN6QixNQUFNLENBQUMsU0FBUyxDQUFDLHlCQUF5QixDQUFDLEdBQUcsQ0FBQztxQkFDNUMsSUFBSSxDQUFDLENBQUMsS0FBb0IsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUM5QyxLQUFLLENBQUMsQ0FBQyxLQUFZLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzVDLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsZUFBZSxDQUFDLEtBQWE7UUFDM0IsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUM7b0JBQ2pDLElBQUksRUFBRSxpQkFBaUI7b0JBQ3ZCLElBQUksRUFBRSxTQUFTO29CQUNmLGVBQWUsRUFBRSxPQUFPO2lCQUN6QixDQUFDLENBQUM7Z0JBQ0gsT0FBTzthQUNSO1lBRUQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUN6QixNQUFNLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUM7cUJBQ3BDLElBQUksQ0FBQyxDQUFDLEtBQW9CLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDOUMsS0FBSyxDQUFDLENBQUMsS0FBWSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUM1QyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELE9BQU8sQ0FBQyxRQUFzQjtRQUM1QixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsRUFBRTtnQkFDOUIsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQztvQkFDakMsSUFBSSxFQUFFLFNBQVM7b0JBQ2YsSUFBSSxFQUFFLFNBQVM7b0JBQ2YsZUFBZSxFQUFFLE9BQU87aUJBQ3pCLENBQUMsQ0FBQztnQkFDSCxPQUFPO2FBQ1I7WUFFRCxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ3pCLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztxQkFDL0IsSUFBSSxDQUFDLENBQUMsS0FBb0IsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUM5QyxLQUFLLENBQUMsQ0FBQyxLQUFZLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzVDLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsT0FBTyxDQUFDLEdBQVcsRUFBRSxLQUFVLEVBQUUsUUFBeUI7UUFDeEQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUM7b0JBQ2pDLElBQUksRUFBRSxTQUFTO29CQUNmLElBQUksRUFBRSxTQUFTO29CQUNmLGVBQWUsRUFBRSxPQUFPO2lCQUN6QixDQUFDLENBQUM7Z0JBQ0gsT0FBTzthQUNSO1lBRUQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUN6QixNQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQztxQkFDM0MsSUFBSSxDQUFDLENBQUMsS0FBNkIsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUN2RCxLQUFLLENBQUMsQ0FBQyxLQUFZLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzVDLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsUUFBUSxDQUFDLElBQXFCLEVBQUUsUUFBeUI7UUFDdkQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUM7b0JBQ2pDLElBQUksRUFBRSxVQUFVO29CQUNoQixJQUFJLEVBQUUsU0FBUztvQkFDZixlQUFlLEVBQUUsT0FBTztpQkFDekIsQ0FBQyxDQUFDO2dCQUNILE9BQU87YUFDUjtZQUVELE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDekIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQztxQkFDdEMsSUFBSSxDQUFDLENBQUMsS0FBNkIsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUN2RCxLQUFLLENBQUMsQ0FBQyxLQUFZLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzVDLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsU0FBUyxDQUFDLEdBQVc7UUFDbkIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUM7b0JBQ2pDLElBQUksRUFBRSxXQUFXO29CQUNqQixJQUFJLEVBQUUsU0FBUztvQkFDZixlQUFlLEVBQUUsT0FBTztpQkFDekIsQ0FBQyxDQUFDO2dCQUNILE9BQU87YUFDUjtZQUVELE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDekIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDO3FCQUM1QixJQUFJLENBQUMsQ0FBQyxLQUE2QixFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7cUJBQ3ZELEtBQUssQ0FBQyxDQUFDLEtBQVksRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDNUMsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxVQUFVLENBQUMsSUFBbUIsRUFBRSxRQUFnQztRQUM5RCxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsRUFBRTtnQkFDOUIsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQztvQkFDakMsSUFBSSxFQUFFLFlBQVk7b0JBQ2xCLElBQUksRUFBRSxTQUFTO29CQUNmLGVBQWUsRUFBRSxPQUFPO2lCQUN6QixDQUFDLENBQUM7Z0JBQ0gsT0FBTzthQUNSO1lBRUQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUN6QixNQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDO3FCQUN4QyxJQUFJLENBQUMsQ0FBQyxLQUE2QixFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7cUJBQ3ZELEtBQUssQ0FBQyxDQUFDLEtBQVksRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDNUMsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxnQ0FBZ0MsQ0FBQyxRQUErQjtRQUM5RCxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsRUFBRTtnQkFDOUIsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQztvQkFDakMsSUFBSSxFQUFFLGtDQUFrQztvQkFDeEMsSUFBSSxFQUFFLFNBQVM7b0JBQ2YsZUFBZSxFQUFFLE9BQU87aUJBQ3pCLENBQUMsQ0FBQztnQkFDSCxPQUFPO2FBQ1I7WUFFRCxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ3pCLE1BQU0sQ0FBQyxTQUFTLENBQUMsZ0NBQWdDLENBQUMsUUFBUSxDQUFDO3FCQUN4RCxJQUFJLENBQUMsQ0FBQyxLQUFvQixFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7cUJBQzlDLEtBQUssQ0FBQyxDQUFDLEtBQVksRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDNUMsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxlQUFlLENBQUMsZUFBd0I7UUFDdEMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUM7b0JBQ2pDLElBQUksRUFBRSxpQkFBaUI7b0JBQ3ZCLElBQUksRUFBRSxTQUFTO29CQUNmLGVBQWUsRUFBRSxPQUFPO2lCQUN6QixDQUFDLENBQUM7Z0JBQ0gsT0FBTzthQUNSO1lBRUQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUN6QixNQUFNLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUM7cUJBQzlDLElBQUksQ0FBQyxDQUFDLEtBQW9CLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDOUMsS0FBSyxDQUFDLENBQUMsS0FBWSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUM1QyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHlCQUF5QixDQUFDLE9BQTJCO1FBQ25ELE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFO2dCQUM5QixJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDO29CQUNqQyxJQUFJLEVBQUUsMkJBQTJCO29CQUNqQyxJQUFJLEVBQUUsU0FBUztvQkFDZixlQUFlLEVBQUUsT0FBTztpQkFDekIsQ0FBQyxDQUFDO2dCQUNILE9BQU87YUFDUjtZQUVELE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDekIsTUFBTSxDQUFDLFNBQVMsQ0FBQyx5QkFBeUIsQ0FBQyxPQUFPLENBQUM7cUJBQ2hELElBQUksQ0FBQyxDQUFDLEtBQW1CLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDN0MsS0FBSyxDQUFDLENBQUMsS0FBWSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUM1QyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGdCQUFnQjtRQUNkLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFO2dCQUM5QixJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDO29CQUNqQyxJQUFJLEVBQUUsa0JBQWtCO29CQUN4QixJQUFJLEVBQUUsU0FBUztvQkFDZixlQUFlLEVBQUUsT0FBTztpQkFDekIsQ0FBQyxDQUFDO2dCQUNILE9BQU87YUFDUjtZQUVELE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDekIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRTtxQkFDaEMsSUFBSSxDQUFDLENBQUMsS0FBb0IsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUM5QyxLQUFLLENBQUMsQ0FBQyxLQUFZLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzVDLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsbUJBQW1CLENBQUMsT0FBMkI7UUFDN0MsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUM7b0JBQ2pDLElBQUksRUFBRSxxQkFBcUI7b0JBQzNCLElBQUksRUFBRSxTQUFTO29CQUNmLGVBQWUsRUFBRSxPQUFPO2lCQUN6QixDQUFDLENBQUM7Z0JBQ0gsT0FBTzthQUNSO1lBRUQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUN6QixNQUFNLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQztxQkFDMUMsSUFBSSxDQUFDLENBQUMsS0FBb0IsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUM5QyxLQUFLLENBQUMsQ0FBQyxLQUFZLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzVDLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQscUJBQXFCLENBQUMsT0FBMkI7UUFDL0MsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUM7b0JBQ2pDLElBQUksRUFBRSx1QkFBdUI7b0JBQzdCLElBQUksRUFBRSxTQUFTO29CQUNmLGVBQWUsRUFBRSxPQUFPO2lCQUN6QixDQUFDLENBQUM7Z0JBQ0gsT0FBTzthQUNSO1lBRUQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUN6QixNQUFNLENBQUMsU0FBUyxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQztxQkFDNUMsSUFBSSxDQUFDLENBQUMsS0FBb0IsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUM5QyxLQUFLLENBQUMsQ0FBQyxLQUFZLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzVDLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsT0FBMkI7UUFDMUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUM7b0JBQ2pDLElBQUksRUFBRSxrQkFBa0I7b0JBQ3hCLElBQUksRUFBRSxTQUFTO29CQUNmLGVBQWUsRUFBRSxPQUFPO2lCQUN6QixDQUFDLENBQUM7Z0JBQ0gsT0FBTzthQUNSO1lBRUQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUN6QixNQUFNLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQztxQkFDdkMsSUFBSSxDQUFDLENBQUMsS0FBb0IsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUM5QyxLQUFLLENBQUMsQ0FBQyxLQUFZLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzVDLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsa0JBQWtCLENBQUMsT0FBMkI7UUFDNUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUM7b0JBQ2pDLElBQUksRUFBRSxvQkFBb0I7b0JBQzFCLElBQUksRUFBRSxTQUFTO29CQUNmLGVBQWUsRUFBRSxPQUFPO2lCQUN6QixDQUFDLENBQUM7Z0JBQ0gsT0FBTzthQUNSO1lBRUQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUN6QixNQUFNLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQztxQkFDekMsSUFBSSxDQUFDLENBQUMsS0FBb0IsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUM5QyxLQUFLLENBQUMsQ0FBQyxLQUFZLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzVDLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsd0JBQXdCLENBQUMsT0FBMkI7UUFDbEQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUM7b0JBQ2pDLElBQUksRUFBRSwwQkFBMEI7b0JBQ2hDLElBQUksRUFBRSxTQUFTO29CQUNmLGVBQWUsRUFBRSxPQUFPO2lCQUN6QixDQUFDLENBQUM7Z0JBQ0gsT0FBTzthQUNSO1lBRUQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUN6QixNQUFNLENBQUMsU0FBUyxDQUFDLHdCQUF3QixDQUFDLE9BQU8sQ0FBQztxQkFDL0MsSUFBSSxDQUFDLENBQUMsS0FBb0IsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUM5QyxLQUFLLENBQUMsQ0FBQyxLQUFZLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzVDLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQseUJBQXlCLENBQUMsVUFBMkM7UUFDbkUsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUM7b0JBQ2pDLElBQUksRUFBRSwyQkFBMkI7b0JBQ2pDLElBQUksRUFBRSxTQUFTO29CQUNmLGVBQWUsRUFBRSxPQUFPO2lCQUN6QixDQUFDLENBQUM7Z0JBQ0gsT0FBTzthQUNSO1lBRUQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUN6QixNQUFNLENBQUMsU0FBUyxDQUFDLHlCQUF5QixDQUFDLFVBQVUsQ0FBQztxQkFDbkQsSUFBSSxDQUFDLENBQUMsS0FBc0MsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUNoRSxLQUFLLENBQUMsQ0FBQyxLQUFZLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzVDLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsU0FBUyxDQUFDLFFBQTRDO1FBQ3BELE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFO2dCQUM5QixJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDO29CQUNqQyxJQUFJLEVBQUUsV0FBVztvQkFDakIsSUFBSSxFQUFFLFNBQVM7b0JBQ2YsZUFBZSxFQUFFLE9BQU87aUJBQ3pCLENBQUMsQ0FBQztnQkFDSCxPQUFPO2FBQ1I7WUFFRCxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ3pCLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztxQkFDakMsSUFBSSxDQUFDLENBQUMsS0FBeUMsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUNuRSxLQUFLLENBQUMsQ0FBQyxLQUFZLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzVDLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsZUFBZSxDQUFDLFFBQTBCO1FBQ3hDLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFO2dCQUM5QixJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDO29CQUNqQyxJQUFJLEVBQUUsaUJBQWlCO29CQUN2QixJQUFJLEVBQUUsU0FBUztvQkFDZixlQUFlLEVBQUUsT0FBTztpQkFDekIsQ0FBQyxDQUFDO2dCQUNILE9BQU87YUFDUjtZQUVELE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDekIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDO3FCQUN2QyxJQUFJLENBQUMsQ0FBQyxLQUF1QixFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7cUJBQ2pELEtBQUssQ0FBQyxDQUFDLEtBQVksRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDNUMsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxRQUFRLENBQUMsS0FBYSxFQUFFLE9BQXlCO1FBQy9DLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFO2dCQUM5QixJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDO29CQUNqQyxJQUFJLEVBQUUsVUFBVTtvQkFDaEIsSUFBSSxFQUFFLFNBQVM7b0JBQ2YsZUFBZSxFQUFFLE9BQU87aUJBQ3pCLENBQUMsQ0FBQztnQkFDSCxPQUFPO2FBQ1I7WUFFRCxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ3pCLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUM7cUJBQ3RDLElBQUksQ0FBQyxDQUFDLEtBQTJCLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDckQsS0FBSyxDQUFDLENBQUMsS0FBWSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUM1QyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFlBQVksQ0FBQyxTQUFpQixFQUFFLE9BQXVCO1FBQ3JELE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFO2dCQUM5QixJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDO29CQUNqQyxJQUFJLEVBQUUsY0FBYztvQkFDcEIsSUFBSSxFQUFFLFNBQVM7b0JBQ2YsZUFBZSxFQUFFLE9BQU87aUJBQ3pCLENBQUMsQ0FBQztnQkFDSCxPQUFPO2FBQ1I7WUFFRCxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ3pCLE1BQU0sQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUM7cUJBQzlDLElBQUksQ0FBQyxDQUFDLEtBQTZCLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDdkQsS0FBSyxDQUFDLENBQUMsS0FBWSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUM1QyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVc7UUFDVCxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsRUFBRTtnQkFDOUIsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQztvQkFDakMsSUFBSSxFQUFFLGFBQWE7b0JBQ25CLElBQUksRUFBRSxTQUFTO29CQUNmLGVBQWUsRUFBRSxPQUFPO2lCQUN6QixDQUFDLENBQUM7Z0JBQ0gsT0FBTzthQUNSO1lBRUQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUN6QixNQUFNLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRTtxQkFDM0IsSUFBSSxDQUFDLENBQUMsS0FBb0IsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUM5QyxLQUFLLENBQUMsQ0FBQyxLQUFZLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzVDLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsU0FBUztRQUNQLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFO2dCQUM5QixJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDO29CQUNqQyxJQUFJLEVBQUUsV0FBVztvQkFDakIsSUFBSSxFQUFFLFNBQVM7b0JBQ2YsZUFBZSxFQUFFLE9BQU87aUJBQ3pCLENBQUMsQ0FBQztnQkFDSCxPQUFPO2FBQ1I7WUFFRCxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ3pCLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFO3FCQUN6QixJQUFJLENBQUMsQ0FBQyxLQUFvQixFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7cUJBQzlDLEtBQUssQ0FBQyxDQUFDLEtBQVksRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDNUMsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxjQUF5QyxFQUFFLFFBQWlCO1FBQzVFLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFO2dCQUM5QixJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDO29CQUNqQyxJQUFJLEVBQUUsbUJBQW1CO29CQUN6QixJQUFJLEVBQUUsU0FBUztvQkFDZixlQUFlLEVBQUUsT0FBTztpQkFDekIsQ0FBQyxDQUFDO2dCQUNILE9BQU87YUFDUjtZQUVELE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDekIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLEVBQUUsUUFBUSxDQUFDO3FCQUN6RCxJQUFJLENBQUMsQ0FBQyxLQUFvQixFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7cUJBQzlDLEtBQUssQ0FBQyxDQUFDLEtBQVksRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDNUMsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxvQkFBb0I7UUFDbEIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUM7b0JBQ2pDLElBQUksRUFBRSxzQkFBc0I7b0JBQzVCLElBQUksRUFBRSxTQUFTO29CQUNmLGVBQWUsRUFBRSxPQUFPO2lCQUN6QixDQUFDLENBQUM7Z0JBQ0gsT0FBTzthQUNSO1lBRUQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUN6QixNQUFNLENBQUMsU0FBUyxDQUFDLG9CQUFvQixFQUFFO3FCQUNwQyxJQUFJLENBQUMsQ0FBQyxLQUFvQixFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7cUJBQzlDLEtBQUssQ0FBQyxDQUFDLEtBQVksRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDNUMsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxpQkFBaUI7UUFDZixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsRUFBRTtnQkFDOUIsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQztvQkFDakMsSUFBSSxFQUFFLG1CQUFtQjtvQkFDekIsSUFBSSxFQUFFLFNBQVM7b0JBQ2YsZUFBZSxFQUFFLE9BQU87aUJBQ3pCLENBQUMsQ0FBQztnQkFDSCxPQUFPO2FBQ1I7WUFFRCxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ3pCLE1BQU0sQ0FBQyxTQUFTLENBQUMsaUJBQWlCLEVBQUU7cUJBQ2pDLElBQUksQ0FBQyxDQUFDLEtBQXlDLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDbkUsS0FBSyxDQUFDLENBQUMsS0FBWSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUM1QyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGtCQUFrQixDQUFDLE9BQWdCO1FBQ2pDLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFO2dCQUM5QixJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDO29CQUNqQyxJQUFJLEVBQUUsb0JBQW9CO29CQUMxQixJQUFJLEVBQUUsU0FBUztvQkFDZixlQUFlLEVBQUUsT0FBTztpQkFDekIsQ0FBQyxDQUFDO2dCQUNILE9BQU87YUFDUjtZQUVELE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDekIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUM7cUJBQ3pDLElBQUksQ0FBQyxDQUFDLEtBQW9CLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDOUMsS0FBSyxDQUFDLENBQUMsS0FBWSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUM1QyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFVBQVUsQ0FBQyxRQUFxQztRQUM5QyxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsRUFBRTtnQkFDOUIsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQztvQkFDakMsSUFBSSxFQUFFLFlBQVk7b0JBQ2xCLElBQUksRUFBRSxTQUFTO29CQUNmLGVBQWUsRUFBRSxPQUFPO2lCQUN6QixDQUFDLENBQUM7Z0JBQ0gsT0FBTzthQUNSO1lBRUQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUN6QixNQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7cUJBQ2xDLElBQUksQ0FBQyxDQUFDLEtBQXlDLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDbkUsS0FBSyxDQUFDLENBQUMsS0FBWSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUM1QyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFFBQVEsQ0FBQyxRQUFxQztRQUM1QyxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsRUFBRTtnQkFDOUIsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQztvQkFDakMsSUFBSSxFQUFFLFVBQVU7b0JBQ2hCLElBQUksRUFBRSxTQUFTO29CQUNmLGVBQWUsRUFBRSxPQUFPO2lCQUN6QixDQUFDLENBQUM7Z0JBQ0gsT0FBTzthQUNSO1lBRUQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUN6QixNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7cUJBQ2hDLElBQUksQ0FBQyxDQUFDLEtBQXlDLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDbkUsS0FBSyxDQUFDLENBQUMsS0FBWSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUM1QyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVcsQ0FBQyxXQUFtQixFQUFFLGFBQWtDO1FBQ2pFLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFO2dCQUM5QixJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDO29CQUNqQyxJQUFJLEVBQUUsYUFBYTtvQkFDbkIsSUFBSSxFQUFFLFNBQVM7b0JBQ2YsZUFBZSxFQUFFLE9BQU87aUJBQ3pCLENBQUMsQ0FBQztnQkFDSCxPQUFPO2FBQ1I7WUFFRCxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ3pCLE1BQU0sQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxhQUFhLENBQUM7cUJBQ3JELElBQUksQ0FBQyxDQUFDLEtBQW9CLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDOUMsS0FBSyxDQUFDLENBQUMsS0FBWSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUM1QyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztZQXJ1QkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsidHlwZSBBY3Rpb248VD4gPSAoaXRlbTogVCkgPT4gdm9pZDtcbmludGVyZmFjZSBBdXRvUHJvbXB0T3B0aW9ucyB7IGZvcmNlPzogYm9vbGVhbjsgZm9yY2VTbGlkZWRvd25PdmVyTmF0aXZlPzogYm9vbGVhbjsgc2xpZGVkb3duUHJvbXB0T3B0aW9ucz86IElPbmVTaWduYWxBdXRvUHJvbXB0T3B0aW9uczsgfVxuaW50ZXJmYWNlIFJlZ2lzdGVyT3B0aW9ucyB7IG1vZGFsUHJvbXB0PzogYm9vbGVhbjsgaHR0cFBlcm1pc3Npb25SZXF1ZXN0PzogYm9vbGVhbjsgc2xpZGVkb3duPzogYm9vbGVhbjsgYXV0b0FjY2VwdD86IGJvb2xlYW4gfVxuaW50ZXJmYWNlIFNldFNNU09wdGlvbnMgeyBpZGVudGlmaWVyQXV0aEhhc2g/OiBzdHJpbmc7IH1cbmludGVyZmFjZSBTZXRFbWFpbE9wdGlvbnMgeyBpZGVudGlmaWVyQXV0aEhhc2g/OiBzdHJpbmc7IGVtYWlsQXV0aEhhc2g/OiBzdHJpbmc7IH1cbmludGVyZmFjZSBUYWdzT2JqZWN0PFQ+IHsgW2tleTogc3RyaW5nXTogVDsgfVxuaW50ZXJmYWNlIElPbmVTaWduYWxBdXRvUHJvbXB0T3B0aW9ucyB7IGZvcmNlPzogYm9vbGVhbjsgZm9yY2VTbGlkZWRvd25PdmVyTmF0aXZlPzogYm9vbGVhbjsgaXNJblVwZGF0ZU1vZGU/OiBib29sZWFuOyBjYXRlZ29yeU9wdGlvbnM/OiBJT25lU2lnbmFsQ2F0ZWdvcmllczsgfVxuaW50ZXJmYWNlIElPbmVTaWduYWxDYXRlZ29yaWVzIHsgcG9zaXRpdmVVcGRhdGVCdXR0b246IHN0cmluZzsgbmVnYXRpdmVVcGRhdGVCdXR0b246IHN0cmluZzsgc2F2aW5nQnV0dG9uVGV4dDogc3RyaW5nOyBlcnJvckJ1dHRvblRleHQ6IHN0cmluZzsgdXBkYXRlTWVzc2FnZTogc3RyaW5nOyB0YWdzOiBJT25lU2lnbmFsVGFnQ2F0ZWdvcnlbXTsgfVxuaW50ZXJmYWNlIElPbmVTaWduYWxUYWdDYXRlZ29yeSB7IHRhZzogc3RyaW5nOyBsYWJlbDogc3RyaW5nOyBjaGVja2VkPzogYm9vbGVhbjsgfVxuXG5pbnRlcmZhY2UgSUluaXRPYmplY3Qge1xuICBhcHBJZDogc3RyaW5nO1xuICBzdWJkb21haW5OYW1lPzogc3RyaW5nO1xuICByZXF1aXJlc1VzZXJQcml2YWN5Q29uc2VudD86IGJvb2xlYW47XG4gIHByb21wdE9wdGlvbnM/OiBvYmplY3Q7XG4gIHdlbGNvbWVOb3RpZmljYXRpb24/OiBvYmplY3Q7XG4gIG5vdGlmeUJ1dHRvbj86IG9iamVjdDtcbiAgcGVyc2lzdE5vdGlmaWNhdGlvbj86IGJvb2xlYW47XG4gIHdlYmhvb2tzPzogb2JqZWN0O1xuICBhdXRvUmVzdWJzY3JpYmU/OiBib29sZWFuO1xuICBhdXRvUmVnaXN0ZXI/OiBib29sZWFuO1xuICBub3RpZmljYXRpb25DbGlja0hhbmRsZXJNYXRjaD86IHN0cmluZztcbiAgbm90aWZpY2F0aW9uQ2xpY2tIYW5kbGVyQWN0aW9uPzogc3RyaW5nO1xuICBzZXJ2aWNlV29ya2VyUGFyYW0/OiB7IHNjb3BlOiBzdHJpbmcgfTtcbiAgc2VydmljZVdvcmtlclBhdGg/OiBzdHJpbmc7XG4gIHNlcnZpY2VXb3JrZXJVcGRhdGVyUGF0aD86IHN0cmluZztcbiAgcGF0aD86IHN0cmluZztcbiAgYWxsb3dMb2NhbGhvc3RBc1NlY3VyZU9yaWdpbj86IGJvb2xlYW47XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuY29uc3QgT05FU0lHTkFMX1NES19JRCA9ICdvbmVzaWduYWwtc2RrJztcbmNvbnN0IE9ORV9TSUdOQUxfU0NSSVBUX1NSQyA9ICdodHRwczovL2Nkbi5vbmVzaWduYWwuY29tL3Nka3MvT25lU2lnbmFsU0RLLmpzJztcbmNvbnN0IE9ORVNJR05BTF9OT1RfU0VUVVBfRVJST1IgPSAnT25lU2lnbmFsIGlzIG5vdCBzZXR1cCBjb3JyZWN0bHkuJztcbmNvbnN0IE1BWF9USU1FT1VUID0gMzA7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgT25lU2lnbmFsOiBhbnk7XG4gIH1cbn1cblxuaW50ZXJmYWNlIElPbmVTaWduYWxGdW5jdGlvbkNhbGwge1xuICBuYW1lOiBzdHJpbmc7XG4gIGFyZ3M6IElBcmd1bWVudHM7XG4gIHByb21pc2VSZXNvbHZlcj86IEZ1bmN0aW9uO1xufVxuXG5pbnRlcmZhY2UgSU9uZVNpZ25hbCB7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgT25lU2lnbmFsIGltcGxlbWVudHMgSU9uZVNpZ25hbCB7XG4gIHByaXZhdGUgaXNPbmVTaWduYWxJbml0aWFsaXplZCA9IGZhbHNlO1xuICBwcml2YXRlIG5nT25lU2lnbmFsRnVuY3Rpb25RdWV1ZTogSU9uZVNpZ25hbEZ1bmN0aW9uQ2FsbFtdID0gW107XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICAvKiBIIEUgTCBQIEUgUiBTICovXG5cbiAgcHJpdmF0ZSBpbmplY3RTY3JpcHQgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgc2NyaXB0LmlkID0gT05FU0lHTkFMX1NES19JRDtcbiAgICBzY3JpcHQuc3JjID0gT05FX1NJR05BTF9TQ1JJUFRfU1JDO1xuICAgIHNjcmlwdC5hc3luYyA9IHRydWU7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICB9XG5cbiAgcHJpdmF0ZSBkb2VzT25lU2lnbmFsRXhpc3QgPSAoKSA9PiB7XG4gICAgaWYgKHdpbmRvdy5PbmVTaWduYWwpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIHByb2Nlc3NRdWV1ZWRPbmVTaWduYWxGdW5jdGlvbnMgPSAoKSA9PiB7XG4gICAgdGhpcy5uZ09uZVNpZ25hbEZ1bmN0aW9uUXVldWUuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIGNvbnN0IHsgbmFtZSwgYXJncywgcHJvbWlzZVJlc29sdmVyIH0gPSBlbGVtZW50O1xuXG4gICAgICBpZiAoISFwcm9taXNlUmVzb2x2ZXIpIHtcbiAgICAgICAgKHRoaXMgYXMgSU9uZVNpZ25hbClbbmFtZV0oLi4uYXJncykudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgICAgICBwcm9taXNlUmVzb2x2ZXIocmVzdWx0KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cuT25lU2lnbmFsW25hbWVdKC4uLmFyZ3MpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXR1cE9uZVNpZ25hbElmTWlzc2luZyA9ICgpID0+IHtcbiAgICBpZiAoIXRoaXMuZG9lc09uZVNpZ25hbEV4aXN0KCkpIHtcbiAgICAgIHdpbmRvdy5PbmVTaWduYWwgPSB3aW5kb3cuT25lU2lnbmFsIHx8IFtdO1xuICAgIH1cbiAgfVxuXG4gIC8qIFAgVSBCIEwgSSBDICovXG5cbiAgaW5pdChvcHRpb25zOiBJSW5pdE9iamVjdCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPihyZXNvbHZlID0+IHtcbiAgICAgIGlmICh0aGlzLmlzT25lU2lnbmFsSW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmluamVjdFNjcmlwdCgpO1xuICAgICAgdGhpcy5zZXR1cE9uZVNpZ25hbElmTWlzc2luZygpO1xuICAgICAgd2luZG93Lk9uZVNpZ25hbC5wdXNoKCgpID0+IHtcbiAgICAgICAgd2luZG93Lk9uZVNpZ25hbC5pbml0KG9wdGlvbnMpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihPTkVTSUdOQUxfTk9UX1NFVFVQX0VSUk9SKTtcbiAgICAgIH0sIE1BWF9USU1FT1VUICogMV8wMDApO1xuXG4gICAgICB3aW5kb3cuT25lU2lnbmFsLnB1c2goKCkgPT4ge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgIHRoaXMuaXNPbmVTaWduYWxJbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgIHRoaXMucHJvY2Vzc1F1ZXVlZE9uZVNpZ25hbEZ1bmN0aW9ucygpO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG5cbiAgb24oZXZlbnQ6IHN0cmluZywgbGlzdGVuZXI6IChldmVudERhdGE/OiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZG9lc09uZVNpZ25hbEV4aXN0KCkpIHtcbiAgICAgIHRoaXMubmdPbmVTaWduYWxGdW5jdGlvblF1ZXVlLnB1c2goe1xuICAgICAgICBuYW1lOiAnb24nLFxuICAgICAgICBhcmdzOiBhcmd1bWVudHMsXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aW5kb3cuT25lU2lnbmFsLnB1c2goKCkgPT4ge1xuICAgICAgd2luZG93Lk9uZVNpZ25hbC5vbihldmVudCwgbGlzdGVuZXIpO1xuICAgIH0pO1xuICB9XG5cbiAgb2ZmKGV2ZW50OiBzdHJpbmcsIGxpc3RlbmVyOiAoZXZlbnREYXRhPzogYW55KSA9PiB2b2lkKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmRvZXNPbmVTaWduYWxFeGlzdCgpKSB7XG4gICAgICB0aGlzLm5nT25lU2lnbmFsRnVuY3Rpb25RdWV1ZS5wdXNoKHtcbiAgICAgICAgbmFtZTogJ29mZicsXG4gICAgICAgIGFyZ3M6IGFyZ3VtZW50cyxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5PbmVTaWduYWwucHVzaCgoKSA9PiB7XG4gICAgICB3aW5kb3cuT25lU2lnbmFsLm9mZihldmVudCwgbGlzdGVuZXIpO1xuICAgIH0pO1xuICB9XG5cbiAgb25jZShldmVudDogc3RyaW5nLCBsaXN0ZW5lcjogKGV2ZW50RGF0YT86IGFueSkgPT4gdm9pZCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5kb2VzT25lU2lnbmFsRXhpc3QoKSkge1xuICAgICAgdGhpcy5uZ09uZVNpZ25hbEZ1bmN0aW9uUXVldWUucHVzaCh7XG4gICAgICAgIG5hbWU6ICdvbmNlJyxcbiAgICAgICAgYXJnczogYXJndW1lbnRzLFxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93Lk9uZVNpZ25hbC5wdXNoKCgpID0+IHtcbiAgICAgIHdpbmRvdy5PbmVTaWduYWwub25jZShldmVudCwgbGlzdGVuZXIpO1xuICAgIH0pO1xuICB9XG5cbiAgaXNQdXNoTm90aWZpY2F0aW9uc0VuYWJsZWQoY2FsbGJhY2s/OiBBY3Rpb248Ym9vbGVhbj4pOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmRvZXNPbmVTaWduYWxFeGlzdCgpKSB7XG4gICAgICAgIHRoaXMubmdPbmVTaWduYWxGdW5jdGlvblF1ZXVlLnB1c2goe1xuICAgICAgICAgIG5hbWU6ICdpc1B1c2hOb3RpZmljYXRpb25zRW5hYmxlZCcsXG4gICAgICAgICAgYXJnczogYXJndW1lbnRzLFxuICAgICAgICAgIHByb21pc2VSZXNvbHZlcjogcmVzb2x2ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgd2luZG93Lk9uZVNpZ25hbC5wdXNoKCgpID0+IHtcbiAgICAgICAgd2luZG93Lk9uZVNpZ25hbC5pc1B1c2hOb3RpZmljYXRpb25zRW5hYmxlZChjYWxsYmFjaylcbiAgICAgICAgICAudGhlbigodmFsdWU6IFByb21pc2U8Ym9vbGVhbj4pID0+IHJlc29sdmUodmFsdWUpKVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiByZWplY3QoZXJyb3IpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgc2hvd0h0dHBQcm9tcHQob3B0aW9ucz86IEF1dG9Qcm9tcHRPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghdGhpcy5kb2VzT25lU2lnbmFsRXhpc3QoKSkge1xuICAgICAgICB0aGlzLm5nT25lU2lnbmFsRnVuY3Rpb25RdWV1ZS5wdXNoKHtcbiAgICAgICAgICBuYW1lOiAnc2hvd0h0dHBQcm9tcHQnLFxuICAgICAgICAgIGFyZ3M6IGFyZ3VtZW50cyxcbiAgICAgICAgICBwcm9taXNlUmVzb2x2ZXI6IHJlc29sdmUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5PbmVTaWduYWwucHVzaCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5PbmVTaWduYWwuc2hvd0h0dHBQcm9tcHQob3B0aW9ucylcbiAgICAgICAgICAudGhlbigodmFsdWU6IFByb21pc2U8dm9pZD4pID0+IHJlc29sdmUodmFsdWUpKVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiByZWplY3QoZXJyb3IpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmVnaXN0ZXJGb3JQdXNoTm90aWZpY2F0aW9ucyhvcHRpb25zPzogUmVnaXN0ZXJPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghdGhpcy5kb2VzT25lU2lnbmFsRXhpc3QoKSkge1xuICAgICAgICB0aGlzLm5nT25lU2lnbmFsRnVuY3Rpb25RdWV1ZS5wdXNoKHtcbiAgICAgICAgICBuYW1lOiAncmVnaXN0ZXJGb3JQdXNoTm90aWZpY2F0aW9ucycsXG4gICAgICAgICAgYXJnczogYXJndW1lbnRzLFxuICAgICAgICAgIHByb21pc2VSZXNvbHZlcjogcmVzb2x2ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgd2luZG93Lk9uZVNpZ25hbC5wdXNoKCgpID0+IHtcbiAgICAgICAgd2luZG93Lk9uZVNpZ25hbC5yZWdpc3RlckZvclB1c2hOb3RpZmljYXRpb25zKG9wdGlvbnMpXG4gICAgICAgICAgLnRoZW4oKHZhbHVlOiBQcm9taXNlPHZvaWQ+KSA9PiByZXNvbHZlKHZhbHVlKSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldERlZmF1bHROb3RpZmljYXRpb25VcmwodXJsOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmRvZXNPbmVTaWduYWxFeGlzdCgpKSB7XG4gICAgICAgIHRoaXMubmdPbmVTaWduYWxGdW5jdGlvblF1ZXVlLnB1c2goe1xuICAgICAgICAgIG5hbWU6ICdzZXREZWZhdWx0Tm90aWZpY2F0aW9uVXJsJyxcbiAgICAgICAgICBhcmdzOiBhcmd1bWVudHMsXG4gICAgICAgICAgcHJvbWlzZVJlc29sdmVyOiByZXNvbHZlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cuT25lU2lnbmFsLnB1c2goKCkgPT4ge1xuICAgICAgICB3aW5kb3cuT25lU2lnbmFsLnNldERlZmF1bHROb3RpZmljYXRpb25VcmwodXJsKVxuICAgICAgICAgIC50aGVuKCh2YWx1ZTogUHJvbWlzZTx2b2lkPikgPT4gcmVzb2x2ZSh2YWx1ZSkpXG4gICAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBzZXREZWZhdWx0VGl0bGUodGl0bGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIXRoaXMuZG9lc09uZVNpZ25hbEV4aXN0KCkpIHtcbiAgICAgICAgdGhpcy5uZ09uZVNpZ25hbEZ1bmN0aW9uUXVldWUucHVzaCh7XG4gICAgICAgICAgbmFtZTogJ3NldERlZmF1bHRUaXRsZScsXG4gICAgICAgICAgYXJnczogYXJndW1lbnRzLFxuICAgICAgICAgIHByb21pc2VSZXNvbHZlcjogcmVzb2x2ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgd2luZG93Lk9uZVNpZ25hbC5wdXNoKCgpID0+IHtcbiAgICAgICAgd2luZG93Lk9uZVNpZ25hbC5zZXREZWZhdWx0VGl0bGUodGl0bGUpXG4gICAgICAgICAgLnRoZW4oKHZhbHVlOiBQcm9taXNlPHZvaWQ+KSA9PiByZXNvbHZlKHZhbHVlKSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldFRhZ3MoY2FsbGJhY2s/OiBBY3Rpb248YW55Pik6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIXRoaXMuZG9lc09uZVNpZ25hbEV4aXN0KCkpIHtcbiAgICAgICAgdGhpcy5uZ09uZVNpZ25hbEZ1bmN0aW9uUXVldWUucHVzaCh7XG4gICAgICAgICAgbmFtZTogJ2dldFRhZ3MnLFxuICAgICAgICAgIGFyZ3M6IGFyZ3VtZW50cyxcbiAgICAgICAgICBwcm9taXNlUmVzb2x2ZXI6IHJlc29sdmUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5PbmVTaWduYWwucHVzaCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5PbmVTaWduYWwuZ2V0VGFncyhjYWxsYmFjaylcbiAgICAgICAgICAudGhlbigodmFsdWU6IFByb21pc2U8dm9pZD4pID0+IHJlc29sdmUodmFsdWUpKVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiByZWplY3QoZXJyb3IpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgc2VuZFRhZyhrZXk6IHN0cmluZywgdmFsdWU6IGFueSwgY2FsbGJhY2s/OiBBY3Rpb248T2JqZWN0Pik6IFByb21pc2U8T2JqZWN0IHwgbnVsbD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIXRoaXMuZG9lc09uZVNpZ25hbEV4aXN0KCkpIHtcbiAgICAgICAgdGhpcy5uZ09uZVNpZ25hbEZ1bmN0aW9uUXVldWUucHVzaCh7XG4gICAgICAgICAgbmFtZTogJ3NlbmRUYWcnLFxuICAgICAgICAgIGFyZ3M6IGFyZ3VtZW50cyxcbiAgICAgICAgICBwcm9taXNlUmVzb2x2ZXI6IHJlc29sdmUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5PbmVTaWduYWwucHVzaCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5PbmVTaWduYWwuc2VuZFRhZyhrZXksIHZhbHVlLCBjYWxsYmFjaylcbiAgICAgICAgICAudGhlbigodmFsdWU6IFByb21pc2U8T2JqZWN0IHwgbnVsbD4pID0+IHJlc29sdmUodmFsdWUpKVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiByZWplY3QoZXJyb3IpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgc2VuZFRhZ3ModGFnczogVGFnc09iamVjdDxhbnk+LCBjYWxsYmFjaz86IEFjdGlvbjxPYmplY3Q+KTogUHJvbWlzZTxPYmplY3QgfCBudWxsPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghdGhpcy5kb2VzT25lU2lnbmFsRXhpc3QoKSkge1xuICAgICAgICB0aGlzLm5nT25lU2lnbmFsRnVuY3Rpb25RdWV1ZS5wdXNoKHtcbiAgICAgICAgICBuYW1lOiAnc2VuZFRhZ3MnLFxuICAgICAgICAgIGFyZ3M6IGFyZ3VtZW50cyxcbiAgICAgICAgICBwcm9taXNlUmVzb2x2ZXI6IHJlc29sdmUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5PbmVTaWduYWwucHVzaCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5PbmVTaWduYWwuc2VuZFRhZ3ModGFncywgY2FsbGJhY2spXG4gICAgICAgICAgLnRoZW4oKHZhbHVlOiBQcm9taXNlPE9iamVjdCB8IG51bGw+KSA9PiByZXNvbHZlKHZhbHVlKSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGRlbGV0ZVRhZyh0YWc6IHN0cmluZyk6IFByb21pc2U8QXJyYXk8c3RyaW5nPj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIXRoaXMuZG9lc09uZVNpZ25hbEV4aXN0KCkpIHtcbiAgICAgICAgdGhpcy5uZ09uZVNpZ25hbEZ1bmN0aW9uUXVldWUucHVzaCh7XG4gICAgICAgICAgbmFtZTogJ2RlbGV0ZVRhZycsXG4gICAgICAgICAgYXJnczogYXJndW1lbnRzLFxuICAgICAgICAgIHByb21pc2VSZXNvbHZlcjogcmVzb2x2ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgd2luZG93Lk9uZVNpZ25hbC5wdXNoKCgpID0+IHtcbiAgICAgICAgd2luZG93Lk9uZVNpZ25hbC5kZWxldGVUYWcodGFnKVxuICAgICAgICAgIC50aGVuKCh2YWx1ZTogUHJvbWlzZTxBcnJheTxzdHJpbmc+PikgPT4gcmVzb2x2ZSh2YWx1ZSkpXG4gICAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBkZWxldGVUYWdzKHRhZ3M6IEFycmF5PHN0cmluZz4sIGNhbGxiYWNrPzogQWN0aW9uPEFycmF5PHN0cmluZz4+KTogUHJvbWlzZTxBcnJheTxzdHJpbmc+PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghdGhpcy5kb2VzT25lU2lnbmFsRXhpc3QoKSkge1xuICAgICAgICB0aGlzLm5nT25lU2lnbmFsRnVuY3Rpb25RdWV1ZS5wdXNoKHtcbiAgICAgICAgICBuYW1lOiAnZGVsZXRlVGFncycsXG4gICAgICAgICAgYXJnczogYXJndW1lbnRzLFxuICAgICAgICAgIHByb21pc2VSZXNvbHZlcjogcmVzb2x2ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgd2luZG93Lk9uZVNpZ25hbC5wdXNoKCgpID0+IHtcbiAgICAgICAgd2luZG93Lk9uZVNpZ25hbC5kZWxldGVUYWdzKHRhZ3MsIGNhbGxiYWNrKVxuICAgICAgICAgIC50aGVuKCh2YWx1ZTogUHJvbWlzZTxBcnJheTxzdHJpbmc+PikgPT4gcmVzb2x2ZSh2YWx1ZSkpXG4gICAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRMaXN0ZW5lckZvck5vdGlmaWNhdGlvbk9wZW5lZChjYWxsYmFjaz86IEFjdGlvbjxOb3RpZmljYXRpb24+KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghdGhpcy5kb2VzT25lU2lnbmFsRXhpc3QoKSkge1xuICAgICAgICB0aGlzLm5nT25lU2lnbmFsRnVuY3Rpb25RdWV1ZS5wdXNoKHtcbiAgICAgICAgICBuYW1lOiAnYWRkTGlzdGVuZXJGb3JOb3RpZmljYXRpb25PcGVuZWQnLFxuICAgICAgICAgIGFyZ3M6IGFyZ3VtZW50cyxcbiAgICAgICAgICBwcm9taXNlUmVzb2x2ZXI6IHJlc29sdmUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5PbmVTaWduYWwucHVzaCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5PbmVTaWduYWwuYWRkTGlzdGVuZXJGb3JOb3RpZmljYXRpb25PcGVuZWQoY2FsbGJhY2spXG4gICAgICAgICAgLnRoZW4oKHZhbHVlOiBQcm9taXNlPHZvaWQ+KSA9PiByZXNvbHZlKHZhbHVlKSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldFN1YnNjcmlwdGlvbihuZXdTdWJzY3JpcHRpb246IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmRvZXNPbmVTaWduYWxFeGlzdCgpKSB7XG4gICAgICAgIHRoaXMubmdPbmVTaWduYWxGdW5jdGlvblF1ZXVlLnB1c2goe1xuICAgICAgICAgIG5hbWU6ICdzZXRTdWJzY3JpcHRpb24nLFxuICAgICAgICAgIGFyZ3M6IGFyZ3VtZW50cyxcbiAgICAgICAgICBwcm9taXNlUmVzb2x2ZXI6IHJlc29sdmUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5PbmVTaWduYWwucHVzaCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5PbmVTaWduYWwuc2V0U3Vic2NyaXB0aW9uKG5ld1N1YnNjcmlwdGlvbilcbiAgICAgICAgICAudGhlbigodmFsdWU6IFByb21pc2U8dm9pZD4pID0+IHJlc29sdmUodmFsdWUpKVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiByZWplY3QoZXJyb3IpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgc2hvd0h0dHBQZXJtaXNzaW9uUmVxdWVzdChvcHRpb25zPzogQXV0b1Byb21wdE9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIXRoaXMuZG9lc09uZVNpZ25hbEV4aXN0KCkpIHtcbiAgICAgICAgdGhpcy5uZ09uZVNpZ25hbEZ1bmN0aW9uUXVldWUucHVzaCh7XG4gICAgICAgICAgbmFtZTogJ3Nob3dIdHRwUGVybWlzc2lvblJlcXVlc3QnLFxuICAgICAgICAgIGFyZ3M6IGFyZ3VtZW50cyxcbiAgICAgICAgICBwcm9taXNlUmVzb2x2ZXI6IHJlc29sdmUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5PbmVTaWduYWwucHVzaCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5PbmVTaWduYWwuc2hvd0h0dHBQZXJtaXNzaW9uUmVxdWVzdChvcHRpb25zKVxuICAgICAgICAgIC50aGVuKCh2YWx1ZTogUHJvbWlzZTxhbnk+KSA9PiByZXNvbHZlKHZhbHVlKSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHNob3dOYXRpdmVQcm9tcHQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghdGhpcy5kb2VzT25lU2lnbmFsRXhpc3QoKSkge1xuICAgICAgICB0aGlzLm5nT25lU2lnbmFsRnVuY3Rpb25RdWV1ZS5wdXNoKHtcbiAgICAgICAgICBuYW1lOiAnc2hvd05hdGl2ZVByb21wdCcsXG4gICAgICAgICAgYXJnczogYXJndW1lbnRzLFxuICAgICAgICAgIHByb21pc2VSZXNvbHZlcjogcmVzb2x2ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgd2luZG93Lk9uZVNpZ25hbC5wdXNoKCgpID0+IHtcbiAgICAgICAgd2luZG93Lk9uZVNpZ25hbC5zaG93TmF0aXZlUHJvbXB0KClcbiAgICAgICAgICAudGhlbigodmFsdWU6IFByb21pc2U8dm9pZD4pID0+IHJlc29sdmUodmFsdWUpKVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiByZWplY3QoZXJyb3IpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgc2hvd1NsaWRlZG93blByb21wdChvcHRpb25zPzogQXV0b1Byb21wdE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmRvZXNPbmVTaWduYWxFeGlzdCgpKSB7XG4gICAgICAgIHRoaXMubmdPbmVTaWduYWxGdW5jdGlvblF1ZXVlLnB1c2goe1xuICAgICAgICAgIG5hbWU6ICdzaG93U2xpZGVkb3duUHJvbXB0JyxcbiAgICAgICAgICBhcmdzOiBhcmd1bWVudHMsXG4gICAgICAgICAgcHJvbWlzZVJlc29sdmVyOiByZXNvbHZlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cuT25lU2lnbmFsLnB1c2goKCkgPT4ge1xuICAgICAgICB3aW5kb3cuT25lU2lnbmFsLnNob3dTbGlkZWRvd25Qcm9tcHQob3B0aW9ucylcbiAgICAgICAgICAudGhlbigodmFsdWU6IFByb21pc2U8dm9pZD4pID0+IHJlc29sdmUodmFsdWUpKVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiByZWplY3QoZXJyb3IpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgc2hvd0NhdGVnb3J5U2xpZGVkb3duKG9wdGlvbnM/OiBBdXRvUHJvbXB0T3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIXRoaXMuZG9lc09uZVNpZ25hbEV4aXN0KCkpIHtcbiAgICAgICAgdGhpcy5uZ09uZVNpZ25hbEZ1bmN0aW9uUXVldWUucHVzaCh7XG4gICAgICAgICAgbmFtZTogJ3Nob3dDYXRlZ29yeVNsaWRlZG93bicsXG4gICAgICAgICAgYXJnczogYXJndW1lbnRzLFxuICAgICAgICAgIHByb21pc2VSZXNvbHZlcjogcmVzb2x2ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgd2luZG93Lk9uZVNpZ25hbC5wdXNoKCgpID0+IHtcbiAgICAgICAgd2luZG93Lk9uZVNpZ25hbC5zaG93Q2F0ZWdvcnlTbGlkZWRvd24ob3B0aW9ucylcbiAgICAgICAgICAudGhlbigodmFsdWU6IFByb21pc2U8dm9pZD4pID0+IHJlc29sdmUodmFsdWUpKVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiByZWplY3QoZXJyb3IpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgc2hvd1Ntc1NsaWRlZG93bihvcHRpb25zPzogQXV0b1Byb21wdE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmRvZXNPbmVTaWduYWxFeGlzdCgpKSB7XG4gICAgICAgIHRoaXMubmdPbmVTaWduYWxGdW5jdGlvblF1ZXVlLnB1c2goe1xuICAgICAgICAgIG5hbWU6ICdzaG93U21zU2xpZGVkb3duJyxcbiAgICAgICAgICBhcmdzOiBhcmd1bWVudHMsXG4gICAgICAgICAgcHJvbWlzZVJlc29sdmVyOiByZXNvbHZlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cuT25lU2lnbmFsLnB1c2goKCkgPT4ge1xuICAgICAgICB3aW5kb3cuT25lU2lnbmFsLnNob3dTbXNTbGlkZWRvd24ob3B0aW9ucylcbiAgICAgICAgICAudGhlbigodmFsdWU6IFByb21pc2U8dm9pZD4pID0+IHJlc29sdmUodmFsdWUpKVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiByZWplY3QoZXJyb3IpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgc2hvd0VtYWlsU2xpZGVkb3duKG9wdGlvbnM/OiBBdXRvUHJvbXB0T3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIXRoaXMuZG9lc09uZVNpZ25hbEV4aXN0KCkpIHtcbiAgICAgICAgdGhpcy5uZ09uZVNpZ25hbEZ1bmN0aW9uUXVldWUucHVzaCh7XG4gICAgICAgICAgbmFtZTogJ3Nob3dFbWFpbFNsaWRlZG93bicsXG4gICAgICAgICAgYXJnczogYXJndW1lbnRzLFxuICAgICAgICAgIHByb21pc2VSZXNvbHZlcjogcmVzb2x2ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgd2luZG93Lk9uZVNpZ25hbC5wdXNoKCgpID0+IHtcbiAgICAgICAgd2luZG93Lk9uZVNpZ25hbC5zaG93RW1haWxTbGlkZWRvd24ob3B0aW9ucylcbiAgICAgICAgICAudGhlbigodmFsdWU6IFByb21pc2U8dm9pZD4pID0+IHJlc29sdmUodmFsdWUpKVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiByZWplY3QoZXJyb3IpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgc2hvd1Ntc0FuZEVtYWlsU2xpZGVkb3duKG9wdGlvbnM/OiBBdXRvUHJvbXB0T3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIXRoaXMuZG9lc09uZVNpZ25hbEV4aXN0KCkpIHtcbiAgICAgICAgdGhpcy5uZ09uZVNpZ25hbEZ1bmN0aW9uUXVldWUucHVzaCh7XG4gICAgICAgICAgbmFtZTogJ3Nob3dTbXNBbmRFbWFpbFNsaWRlZG93bicsXG4gICAgICAgICAgYXJnczogYXJndW1lbnRzLFxuICAgICAgICAgIHByb21pc2VSZXNvbHZlcjogcmVzb2x2ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgd2luZG93Lk9uZVNpZ25hbC5wdXNoKCgpID0+IHtcbiAgICAgICAgd2luZG93Lk9uZVNpZ25hbC5zaG93U21zQW5kRW1haWxTbGlkZWRvd24ob3B0aW9ucylcbiAgICAgICAgICAudGhlbigodmFsdWU6IFByb21pc2U8dm9pZD4pID0+IHJlc29sdmUodmFsdWUpKVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiByZWplY3QoZXJyb3IpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0Tm90aWZpY2F0aW9uUGVybWlzc2lvbihvbkNvbXBsZXRlPzogQWN0aW9uPE5vdGlmaWNhdGlvblBlcm1pc3Npb24+KTogUHJvbWlzZTxOb3RpZmljYXRpb25QZXJtaXNzaW9uPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghdGhpcy5kb2VzT25lU2lnbmFsRXhpc3QoKSkge1xuICAgICAgICB0aGlzLm5nT25lU2lnbmFsRnVuY3Rpb25RdWV1ZS5wdXNoKHtcbiAgICAgICAgICBuYW1lOiAnZ2V0Tm90aWZpY2F0aW9uUGVybWlzc2lvbicsXG4gICAgICAgICAgYXJnczogYXJndW1lbnRzLFxuICAgICAgICAgIHByb21pc2VSZXNvbHZlcjogcmVzb2x2ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgd2luZG93Lk9uZVNpZ25hbC5wdXNoKCgpID0+IHtcbiAgICAgICAgd2luZG93Lk9uZVNpZ25hbC5nZXROb3RpZmljYXRpb25QZXJtaXNzaW9uKG9uQ29tcGxldGUpXG4gICAgICAgICAgLnRoZW4oKHZhbHVlOiBQcm9taXNlPE5vdGlmaWNhdGlvblBlcm1pc3Npb24+KSA9PiByZXNvbHZlKHZhbHVlKSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldFVzZXJJZChjYWxsYmFjaz86IEFjdGlvbjxzdHJpbmcgfCB1bmRlZmluZWQgfCBudWxsPik6IFByb21pc2U8c3RyaW5nIHwgdW5kZWZpbmVkIHwgbnVsbD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIXRoaXMuZG9lc09uZVNpZ25hbEV4aXN0KCkpIHtcbiAgICAgICAgdGhpcy5uZ09uZVNpZ25hbEZ1bmN0aW9uUXVldWUucHVzaCh7XG4gICAgICAgICAgbmFtZTogJ2dldFVzZXJJZCcsXG4gICAgICAgICAgYXJnczogYXJndW1lbnRzLFxuICAgICAgICAgIHByb21pc2VSZXNvbHZlcjogcmVzb2x2ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgd2luZG93Lk9uZVNpZ25hbC5wdXNoKCgpID0+IHtcbiAgICAgICAgd2luZG93Lk9uZVNpZ25hbC5nZXRVc2VySWQoY2FsbGJhY2spXG4gICAgICAgICAgLnRoZW4oKHZhbHVlOiBQcm9taXNlPHN0cmluZyB8IHVuZGVmaW5lZCB8IG51bGw+KSA9PiByZXNvbHZlKHZhbHVlKSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldFN1YnNjcmlwdGlvbihjYWxsYmFjaz86IEFjdGlvbjxib29sZWFuPik6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIXRoaXMuZG9lc09uZVNpZ25hbEV4aXN0KCkpIHtcbiAgICAgICAgdGhpcy5uZ09uZVNpZ25hbEZ1bmN0aW9uUXVldWUucHVzaCh7XG4gICAgICAgICAgbmFtZTogJ2dldFN1YnNjcmlwdGlvbicsXG4gICAgICAgICAgYXJnczogYXJndW1lbnRzLFxuICAgICAgICAgIHByb21pc2VSZXNvbHZlcjogcmVzb2x2ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgd2luZG93Lk9uZVNpZ25hbC5wdXNoKCgpID0+IHtcbiAgICAgICAgd2luZG93Lk9uZVNpZ25hbC5nZXRTdWJzY3JpcHRpb24oY2FsbGJhY2spXG4gICAgICAgICAgLnRoZW4oKHZhbHVlOiBQcm9taXNlPGJvb2xlYW4+KSA9PiByZXNvbHZlKHZhbHVlKSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldEVtYWlsKGVtYWlsOiBzdHJpbmcsIG9wdGlvbnM/OiBTZXRFbWFpbE9wdGlvbnMpOiBQcm9taXNlPHN0cmluZ3xudWxsPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghdGhpcy5kb2VzT25lU2lnbmFsRXhpc3QoKSkge1xuICAgICAgICB0aGlzLm5nT25lU2lnbmFsRnVuY3Rpb25RdWV1ZS5wdXNoKHtcbiAgICAgICAgICBuYW1lOiAnc2V0RW1haWwnLFxuICAgICAgICAgIGFyZ3M6IGFyZ3VtZW50cyxcbiAgICAgICAgICBwcm9taXNlUmVzb2x2ZXI6IHJlc29sdmUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5PbmVTaWduYWwucHVzaCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5PbmVTaWduYWwuc2V0RW1haWwoZW1haWwsIG9wdGlvbnMpXG4gICAgICAgICAgLnRoZW4oKHZhbHVlOiBQcm9taXNlPHN0cmluZ3xudWxsPikgPT4gcmVzb2x2ZSh2YWx1ZSkpXG4gICAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBzZXRTTVNOdW1iZXIoc21zTnVtYmVyOiBzdHJpbmcsIG9wdGlvbnM/OiBTZXRTTVNPcHRpb25zKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghdGhpcy5kb2VzT25lU2lnbmFsRXhpc3QoKSkge1xuICAgICAgICB0aGlzLm5nT25lU2lnbmFsRnVuY3Rpb25RdWV1ZS5wdXNoKHtcbiAgICAgICAgICBuYW1lOiAnc2V0U01TTnVtYmVyJyxcbiAgICAgICAgICBhcmdzOiBhcmd1bWVudHMsXG4gICAgICAgICAgcHJvbWlzZVJlc29sdmVyOiByZXNvbHZlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cuT25lU2lnbmFsLnB1c2goKCkgPT4ge1xuICAgICAgICB3aW5kb3cuT25lU2lnbmFsLnNldFNNU051bWJlcihzbXNOdW1iZXIsIG9wdGlvbnMpXG4gICAgICAgICAgLnRoZW4oKHZhbHVlOiBQcm9taXNlPHN0cmluZyB8IG51bGw+KSA9PiByZXNvbHZlKHZhbHVlKSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGxvZ291dEVtYWlsKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIXRoaXMuZG9lc09uZVNpZ25hbEV4aXN0KCkpIHtcbiAgICAgICAgdGhpcy5uZ09uZVNpZ25hbEZ1bmN0aW9uUXVldWUucHVzaCh7XG4gICAgICAgICAgbmFtZTogJ2xvZ291dEVtYWlsJyxcbiAgICAgICAgICBhcmdzOiBhcmd1bWVudHMsXG4gICAgICAgICAgcHJvbWlzZVJlc29sdmVyOiByZXNvbHZlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cuT25lU2lnbmFsLnB1c2goKCkgPT4ge1xuICAgICAgICB3aW5kb3cuT25lU2lnbmFsLmxvZ291dEVtYWlsKClcbiAgICAgICAgICAudGhlbigodmFsdWU6IFByb21pc2U8dm9pZD4pID0+IHJlc29sdmUodmFsdWUpKVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiByZWplY3QoZXJyb3IpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgbG9nb3V0U01TKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIXRoaXMuZG9lc09uZVNpZ25hbEV4aXN0KCkpIHtcbiAgICAgICAgdGhpcy5uZ09uZVNpZ25hbEZ1bmN0aW9uUXVldWUucHVzaCh7XG4gICAgICAgICAgbmFtZTogJ2xvZ291dFNNUycsXG4gICAgICAgICAgYXJnczogYXJndW1lbnRzLFxuICAgICAgICAgIHByb21pc2VSZXNvbHZlcjogcmVzb2x2ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgd2luZG93Lk9uZVNpZ25hbC5wdXNoKCgpID0+IHtcbiAgICAgICAgd2luZG93Lk9uZVNpZ25hbC5sb2dvdXRTTVMoKVxuICAgICAgICAgIC50aGVuKCh2YWx1ZTogUHJvbWlzZTx2b2lkPikgPT4gcmVzb2x2ZSh2YWx1ZSkpXG4gICAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBzZXRFeHRlcm5hbFVzZXJJZChleHRlcm5hbFVzZXJJZDogc3RyaW5nIHwgdW5kZWZpbmVkIHwgbnVsbCwgYXV0aEhhc2g/OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmRvZXNPbmVTaWduYWxFeGlzdCgpKSB7XG4gICAgICAgIHRoaXMubmdPbmVTaWduYWxGdW5jdGlvblF1ZXVlLnB1c2goe1xuICAgICAgICAgIG5hbWU6ICdzZXRFeHRlcm5hbFVzZXJJZCcsXG4gICAgICAgICAgYXJnczogYXJndW1lbnRzLFxuICAgICAgICAgIHByb21pc2VSZXNvbHZlcjogcmVzb2x2ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgd2luZG93Lk9uZVNpZ25hbC5wdXNoKCgpID0+IHtcbiAgICAgICAgd2luZG93Lk9uZVNpZ25hbC5zZXRFeHRlcm5hbFVzZXJJZChleHRlcm5hbFVzZXJJZCwgYXV0aEhhc2gpXG4gICAgICAgICAgLnRoZW4oKHZhbHVlOiBQcm9taXNlPHZvaWQ+KSA9PiByZXNvbHZlKHZhbHVlKSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZUV4dGVybmFsVXNlcklkKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIXRoaXMuZG9lc09uZVNpZ25hbEV4aXN0KCkpIHtcbiAgICAgICAgdGhpcy5uZ09uZVNpZ25hbEZ1bmN0aW9uUXVldWUucHVzaCh7XG4gICAgICAgICAgbmFtZTogJ3JlbW92ZUV4dGVybmFsVXNlcklkJyxcbiAgICAgICAgICBhcmdzOiBhcmd1bWVudHMsXG4gICAgICAgICAgcHJvbWlzZVJlc29sdmVyOiByZXNvbHZlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cuT25lU2lnbmFsLnB1c2goKCkgPT4ge1xuICAgICAgICB3aW5kb3cuT25lU2lnbmFsLnJlbW92ZUV4dGVybmFsVXNlcklkKClcbiAgICAgICAgICAudGhlbigodmFsdWU6IFByb21pc2U8dm9pZD4pID0+IHJlc29sdmUodmFsdWUpKVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiByZWplY3QoZXJyb3IpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0RXh0ZXJuYWxVc2VySWQoKTogUHJvbWlzZTxzdHJpbmcgfCB1bmRlZmluZWQgfCBudWxsPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghdGhpcy5kb2VzT25lU2lnbmFsRXhpc3QoKSkge1xuICAgICAgICB0aGlzLm5nT25lU2lnbmFsRnVuY3Rpb25RdWV1ZS5wdXNoKHtcbiAgICAgICAgICBuYW1lOiAnZ2V0RXh0ZXJuYWxVc2VySWQnLFxuICAgICAgICAgIGFyZ3M6IGFyZ3VtZW50cyxcbiAgICAgICAgICBwcm9taXNlUmVzb2x2ZXI6IHJlc29sdmUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5PbmVTaWduYWwucHVzaCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5PbmVTaWduYWwuZ2V0RXh0ZXJuYWxVc2VySWQoKVxuICAgICAgICAgIC50aGVuKCh2YWx1ZTogUHJvbWlzZTxzdHJpbmcgfCB1bmRlZmluZWQgfCBudWxsPikgPT4gcmVzb2x2ZSh2YWx1ZSkpXG4gICAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwcm92aWRlVXNlckNvbnNlbnQoY29uc2VudDogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIXRoaXMuZG9lc09uZVNpZ25hbEV4aXN0KCkpIHtcbiAgICAgICAgdGhpcy5uZ09uZVNpZ25hbEZ1bmN0aW9uUXVldWUucHVzaCh7XG4gICAgICAgICAgbmFtZTogJ3Byb3ZpZGVVc2VyQ29uc2VudCcsXG4gICAgICAgICAgYXJnczogYXJndW1lbnRzLFxuICAgICAgICAgIHByb21pc2VSZXNvbHZlcjogcmVzb2x2ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgd2luZG93Lk9uZVNpZ25hbC5wdXNoKCgpID0+IHtcbiAgICAgICAgd2luZG93Lk9uZVNpZ25hbC5wcm92aWRlVXNlckNvbnNlbnQoY29uc2VudClcbiAgICAgICAgICAudGhlbigodmFsdWU6IFByb21pc2U8dm9pZD4pID0+IHJlc29sdmUodmFsdWUpKVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiByZWplY3QoZXJyb3IpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0RW1haWxJZChjYWxsYmFjaz86IEFjdGlvbjxzdHJpbmcgfCB1bmRlZmluZWQ+KTogUHJvbWlzZTxzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghdGhpcy5kb2VzT25lU2lnbmFsRXhpc3QoKSkge1xuICAgICAgICB0aGlzLm5nT25lU2lnbmFsRnVuY3Rpb25RdWV1ZS5wdXNoKHtcbiAgICAgICAgICBuYW1lOiAnZ2V0RW1haWxJZCcsXG4gICAgICAgICAgYXJnczogYXJndW1lbnRzLFxuICAgICAgICAgIHByb21pc2VSZXNvbHZlcjogcmVzb2x2ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgd2luZG93Lk9uZVNpZ25hbC5wdXNoKCgpID0+IHtcbiAgICAgICAgd2luZG93Lk9uZVNpZ25hbC5nZXRFbWFpbElkKGNhbGxiYWNrKVxuICAgICAgICAgIC50aGVuKCh2YWx1ZTogUHJvbWlzZTxzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkPikgPT4gcmVzb2x2ZSh2YWx1ZSkpXG4gICAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRTTVNJZChjYWxsYmFjaz86IEFjdGlvbjxzdHJpbmcgfCB1bmRlZmluZWQ+KTogUHJvbWlzZTxzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghdGhpcy5kb2VzT25lU2lnbmFsRXhpc3QoKSkge1xuICAgICAgICB0aGlzLm5nT25lU2lnbmFsRnVuY3Rpb25RdWV1ZS5wdXNoKHtcbiAgICAgICAgICBuYW1lOiAnZ2V0U01TSWQnLFxuICAgICAgICAgIGFyZ3M6IGFyZ3VtZW50cyxcbiAgICAgICAgICBwcm9taXNlUmVzb2x2ZXI6IHJlc29sdmUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5PbmVTaWduYWwucHVzaCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5PbmVTaWduYWwuZ2V0U01TSWQoY2FsbGJhY2spXG4gICAgICAgICAgLnRoZW4oKHZhbHVlOiBQcm9taXNlPHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQ+KSA9PiByZXNvbHZlKHZhbHVlKSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHNlbmRPdXRjb21lKG91dGNvbWVOYW1lOiBzdHJpbmcsIG91dGNvbWVXZWlnaHQ/OiBudW1iZXIgfCB1bmRlZmluZWQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmRvZXNPbmVTaWduYWxFeGlzdCgpKSB7XG4gICAgICAgIHRoaXMubmdPbmVTaWduYWxGdW5jdGlvblF1ZXVlLnB1c2goe1xuICAgICAgICAgIG5hbWU6ICdzZW5kT3V0Y29tZScsXG4gICAgICAgICAgYXJnczogYXJndW1lbnRzLFxuICAgICAgICAgIHByb21pc2VSZXNvbHZlcjogcmVzb2x2ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgd2luZG93Lk9uZVNpZ25hbC5wdXNoKCgpID0+IHtcbiAgICAgICAgd2luZG93Lk9uZVNpZ25hbC5zZW5kT3V0Y29tZShvdXRjb21lTmFtZSwgb3V0Y29tZVdlaWdodClcbiAgICAgICAgICAudGhlbigodmFsdWU6IFByb21pc2U8dm9pZD4pID0+IHJlc29sdmUodmFsdWUpKVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiByZWplY3QoZXJyb3IpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=