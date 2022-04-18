<h1 align="center">welcome to onesignal-ngx 👋</h1>

[![npm version](https://img.shields.io/npm/v/onesignal-ngx.svg)](https://www.npmjs.com/package/onesignal-ngx) [![npm downloads](https://img.shields.io/npm/dm/onesignal-ngx.svg)](https://www.npmjs.com/package/onesignal-ngx)

Angular OneSignal Plugin: Make it easy to integrate OneSignal with your Angular website!

This is a JavaScript module that can be used to easily include [OneSignal](https://onesignal.com/) code in a website that uses Angular for its front-end codebase.

OneSignal is the world's leader for Mobile Push Notifications, Web Push, and In-App Messaging. It is trusted by 1,300,000+ businesses to send 5 billion Push Notifications per day.

You can find more information on OneSignal [here](https://onesignal.com/).

* 🏠 [Homepage](https://onesignal.com)
* 🖤 [npm](https://www.npmjs.com/package/onesignal-ngx)

## Contents
- [Install](#install)
- [Usage](#usage)
- [API](#onesignal-api)
- [Advanced Usage](#advanced-usage)

---
## Install

### Yarn

```bash
yarn add onesignal-ngx
```

### npm

```bash
npm install --save onesignal-ngx
```

---
## Library setup
```js
import { OneSignal } from 'onesignal-ngx';
```

Initialize OneSignal with your `appId` via the `options` parameter:

```js
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-example-app';

  constructor(private oneSignal: OneSignal) {
    this.oneSignal.init({
      appId: "8e7fe838-fbcd-4152-980d-32565a2dcf03",
    });
  }
}
```

The `init` function returns a promise that resolves when OneSignal is loaded.

**Examples**
```js
await this.oneSignal.init({ appId: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' });
// do other stuff
```

```js
this.oneSignal.init({ appId: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' }).then(() => {
  // do other stuff
});
```

### Init Options
You can pass other options to the `init` function. Use these options to configure personalized prompt options, auto-resubscribe, and more ([full list of initialization options](https://documentation.onesignal.com/docs/web-push-sdk#init)).

#### Service Worker Params
You can customize the location and filenames of service worker assets. You are also able to specify the specific scope that your service worker should control. You can read more [here](https://documentation.onesignal.com/docs/onesignal-service-worker-faq#sdk-parameter-reference-for-service-workers).

In this distribution, you can specify the parameters via the following:

| Field                      | Details                                                                                                                |
|----------------------------|------------------------------------------------------------------------------------------------------------------------|
| `serviceWorkerParam`       | Use to specify the scope, or the path the service worker has control of.  Example:  `{ scope: "/js/push/onesignal/" }` |
| `serviceWorkerPath`        | The path to the service worker file.                                                                                   |

**Example**:
```js
this.oneSignal.init({
   appId: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
   serviceWorkerParam: {
     scope: '<path scope>'
   },
   serviceWorkerPath: '<path>'
});
```

### Service Worker File
If you haven't done so already, you will need to add the [OneSignal Service Worker file](https://github.com/OneSignal/OneSignal-Website-SDK/files/7585231/OneSignal-Web-SDK-HTTPS-Integration-Files.zip) to your site ([learn more](https://documentation.onesignal.com/docs/web-push-quickstart#step-6-upload-files)).

The OneSignal SDK file must be publicly accessible. You can put it in your top-level root or a subdirectory. However, if you are placing the file not on top-level root make sure to specify the path via the service worker params in the init options (see section above).

**Tip:**
Visit `https://yoursite.com/OneSignalSDKWorker.js` in the address bar to make sure the file is being served successfully.

**Troubleshooting:**
If you uploaded the file but you cannot access it via your browser search bar, make sure you have told Angular about it via the `assets` param in your `angular.json` file.

---
## OneSignal API
### Typescript
This package includes Typescript support.

```ts
class OneSignal {
  init(options: IInitObject): Promise<void>;
  on(event: string, listener: () => void): void;
  off(event: string, listener: () => void): void;
  once(event: string, listener: () => void): void;
  isPushNotificationsEnabled(callback?: Action<boolean>): Promise<boolean>;
  showHttpPrompt(options?: AutoPromptOptions): Promise<void>;
  registerForPushNotifications(options?: RegisterOptions): Promise<void>;
  setDefaultNotificationUrl(url: string): Promise<void>;
  setDefaultTitle(title: string): Promise<void>;
  getTags(callback?: Action<any>): Promise<void>;
  sendTag(key: string, value: any, callback?: Action<Object>): Promise<Object | null>;
  sendTags(tags: TagsObject<any>, callback?: Action<Object>): Promise<Object | null>;
  deleteTag(tag: string): Promise<Array<string>>;
  deleteTags(tags: Array<string>, callback?: Action<Array<string>>): Promise<Array<string>>;
  addListenerForNotificationOpened(callback?: Action<Notification>): Promise<void>;
  setSubscription(newSubscription: boolean): Promise<void>;
  showHttpPermissionRequest(options?: AutoPromptOptions): Promise<any>;
  showNativePrompt(): Promise<void>;
  showSlidedownPrompt(options?: AutoPromptOptions): Promise<void>;
  showCategorySlidedown(options?: AutoPromptOptions): Promise<void>;
  showSmsSlidedown(options?: AutoPromptOptions): Promise<void>;
  showEmailSlidedown(options?: AutoPromptOptions): Promise<void>;
  showSmsAndEmailSlidedown(options?: AutoPromptOptions): Promise<void>;
  getNotificationPermission(onComplete?: Function): Promise<NotificationPermission>;
  getUserId(callback?: Action<string | undefined | null>): Promise<string | undefined | null>;
  getSubscription(callback?: Action<boolean>): Promise<boolean>;
  setEmail(email: string, options?: SetEmailOptions): Promise<string | null>;
  setSMSNumber(smsNumber: string, options?: SetSMSOptions): Promise<string | null>;
  logoutEmail(): Promise<void>;
  logoutSMS(): Promise<void>;
  setExternalUserId(externalUserId: string | undefined | null, authHash?: string): Promise<void>;
  removeExternalUserId(): Promise<void>;
  getExternalUserId(): Promise<string | undefined | null>;
  provideUserConsent(consent: boolean): Promise<void>;
  getEmailId(callback?: Action<string | undefined>): Promise<string | null | undefined>;
  getSMSId(callback?: Action<string | undefined>): Promise<string | null | undefined>;
  sendOutcome(outcomeName: string, outcomeWeight?: number | undefined): Promise<void>;
}
```

### OneSignal API
See the official [OneSignal WebSDK reference](https://documentation.onesignal.com/docs/web-push-sdk) for information on all available SDK functions.

---
## Advanced Usage
### Events and Event Listeners
Use listeners to react to OneSignal-related events:

* `subscriptionChange`
* `permissionPromptDisplay`
* `notificationPermissionChange`
* `popoverShown`
* `customPromptClick`
* `notificationDisplay`
* `notificationDismiss`

**Example**
```js
this.oneSignal.on('subscriptionChange', function(isSubscribed) {
  console.log("The user's subscription state is now:", isSubscribed);
});
```

See the [OneSignal WebSDK Reference](https://documentation.onesignal.com/docs/web-push-sdk) for more info on the available event listeners.

## Troubleshooting

### Service Worker Issues
#### Check the `serviceWorker` flag
In your `angular.json`, see if the `serviceWorker` flag is set to `true`. The flag is used to cause the production build to include some extra service worker files that will conflict with the OneSignal worker if they use the same scope. If your web app depends on this flag being true and hence the Angular service worker (`ngsw-worker.js`) like in PWA setups, you should customize your OneSignal service worker integration to use a different scope than the Angular service worker. Otherwise, they will conflict. This can be done using the service worker OneSignal initialization params documented above. [Click for further details](https://documentation.onesignal.com/docs/troubleshooting-web-push#pwa-or-multiple-service-workers).

---

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/OneSignal/onesignal-ngx/issues).

## Show your support

Give a ⭐️ if this project helped you!

## OneSignal

* [Website](https://onesignal.com)
* Twitter: [@onesignal](https://twitter.com/onesignal)
* Github: [@OneSignal](https://github.com/OneSignal)
* LinkedIn: [@onesignal](https://linkedin.com/company/onesignal)

## Discord
Reach out to us via our [Discord server](https://discord.com/invite/EP7gf6Uz7G)!

## 📝 License

Copyright © 2021 [OneSignal](https://github.com/OneSignal).<br />
This project is [MIT](https://github.com/OneSignal/onesignal-ngx/blob/main/LICENSE) licensed.


Enjoy!
