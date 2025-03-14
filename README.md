<h1 align="center">welcome to onesignal-ngx 👋</h1>

<p>
  <a href="https://www.npmjs.com/package/onesignal-ngx" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/onesignal-ngx.svg">
  </a>
  <a href="https://github.com/OneSignal/onesignal-ngx#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/OneSignal/onesignal-ngx/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://twitter.com/onesignal" target="_blank">
    <img alt="Twitter: onesignal" src="https://img.shields.io/twitter/follow/onesignal.svg?style=social" />
  </a>
</p>

> This is a JavaScript module that can be used to easily include [OneSignal](https://onesignal.com/) code in a website that uses Angular for its front-end codebase.

* 🏠 [Homepage](https://onesignal.com)
* 🖤 [npm](https://www.npmjs.com/package/onesignal-ngx)

OneSignal is the world's leader for Mobile Push Notifications, Web Push, and In-App Messaging. It is trusted by 2 million+ businesses to send 9 billion Push Notifications per day.

You can find more information on OneSignal [here](https://onesignal.com/).

> Upgrading from Version 1?
See our [migration guide](./MigrationGuide.md) to get started.

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
You can pass other options to the `init` function. Use these options to configure personalized prompt options, auto-resubscribe, and more ([full list of initialization options](https://documentation.onesignal.com/v11.0/docs/web-sdk#init)).

<details>
  <summary>Expand to see more options</summary>

  | Property Name               | Type                  | Description                                        |
| ---------------------------| --------------------- | -------------------------------------------------- |
| `appId`                     | `string`              | The ID of your OneSignal app.                      |
| `autoRegister`              | `boolean` (optional)  | Whether or not to automatically register the user. |
| `autoResubscribe`           | `boolean` (optional)  | Whether or not to automatically resubscribe the user. |
| `path`                      | `string` (optional)   | The path to the OneSignal service worker file.     |
| `serviceWorkerPath`         | `string` (optional)   | The path to the OneSignal service worker script.   |
| `serviceWorkerUpdaterPath`  | `string` (optional)   | The path to the OneSignal service worker updater script. |
| `subdomainName`             | `string` (optional)   | The subdomain of your OneSignal app.               |
| `allowLocalhostAsSecureOrigin` | `boolean` (optional) | Whether or not to allow localhost as a secure origin. |
| `requiresUserPrivacyConsent`| `boolean` (optional)  | Whether or not the user's consent is required.     |
| `persistNotification`       | `boolean` (optional)  | Whether or not notifications should persist.       |
| `notificationClickHandlerMatch`| `string` (optional) | The URL match pattern for notification clicks.     |
| `notificationClickHandlerAction`| `string` (optional)| The action to perform when a notification is clicked. |
| `welcomeNotification`       | `object` (optional)   | The welcome notification configuration.            |
| `notifyButton`              | `object` (optional)   | The notify button configuration.                   |
| `promptOptions`             | `object` (optional)   | Additional options for the subscription prompt.    |
| `webhooks`                  | `object` (optional)   | The webhook configuration.                         |
| `[key: string]`             | `any`                 | Additional properties can be added as needed.      |

**Service Worker Params**
You can customize the location and filenames of service worker assets. You are also able to specify the specific scope that your service worker should control. You can read more [here](https://documentation.onesignal.com/docs/onesignal-service-worker-faq#sdk-parameter-reference-for-service-workers).

In this distribution, you can specify the parameters via the following:

| Field                      | Details                                                                                                                |
|----------------------------|------------------------------------------------------------------------------------------------------------------------|
| `serviceWorkerParam`       | Use to specify the scope, or the path the service worker has control of.  Example:  `{ scope: "/js/push/onesignal/" }` |
| `serviceWorkerPath`        | The path to the service worker file.                                                                                   |

</details>

---

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
### Typescript
This package includes Typescript support.

```ts
class OneSignal {
	Slidedown: IOneSignalSlidedown;
	Notifications: IOneSignalNotifications;
	Session: IOneSignalSession;
	User: IOneSignalUser;
	Debug: IOneSignalDebug;
	login(externalId: string, jwtToken?: string): Promise<void>;
	logout(): Promise<void>;
	init(options: IInitObject): Promise<void>;
	setConsentGiven(consent: boolean): Promise<void>;
	setConsentRequired(requiresConsent: boolean): Promise<void>;
}
```

### OneSignal API
See the official [OneSignal WebSDK reference](https://documentation.onesignal.com/v11.0/docs/web-sdk) for information on all available SDK functions.

---
## Advanced Usage
### Events and Event Listeners
Use listeners to react to OneSignal-related events:

### Notifications Namespace
| Event Name | Callback Argument Type |
|-|-|
|'click'      | NotificationClickEvent|
|'foregroundWillDisplay'| NotificationForegroundWillDisplayEvent
| 'dismiss'| NotificationDismissEvent|
|'permissionChange'| boolean|
|'permissionPromptDisplay'| void|

### Slidedown Namespace
| Event Name | Callback Argument Type |
|-|-|
|'slidedownShown'      | boolean |

### Push Subscription Namespace
| Event Name | Callback Argument Type |
|-|-|
|'change'      | boolean |

**Example**
```js
this.oneSignal.Notifications.addEventListener('click', (event) => {
  console.log("The notification was clicked!", event);
});
```

See the [OneSignal WebSDK Reference](https://documentation.onesignal.com/v11.0/docs/web-sdk) for more info on the available event listeners.

## Troubleshooting

### Service Worker Issues
#### Check the `serviceWorker` flag
In your `angular.json`, see if the `serviceWorker` flag is set to `true`. The flag is used to cause the production build to include some extra service worker files that will conflict with the OneSignal worker if they use the same scope. If your web app depends on this flag being true and hence the Angular service worker (`ngsw-worker.js`) like in PWA setups, you should customize your OneSignal service worker integration to use a different scope than the Angular service worker. Otherwise, they will conflict. This can be done using the service worker OneSignal initialization params documented above. [Click for further details](https://documentation.onesignal.com/docs/troubleshooting-web-push#pwa-or-multiple-service-workers).

---

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br/>Feel free to check [issues page](https://github.com/OneSignal/onesignal-ngx/issues).

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

Copyright © 2023 [OneSignal](https://github.com/OneSignal).<br />
This project is [MIT](https://github.com/OneSignal/onesignal-ngx/blob/main/LICENSE) licensed.


Enjoy!
