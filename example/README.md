# OneSignal Angular SDK Example

This example project demonstrates how to use the OneSignal Angular SDK to test all available API methods including `addTag`, `login`, `trackEvent`, and more.

## Features

- 🏷️ **User Tags Management** - Add, remove, and manage user tags
- 👤 **User Aliases** - Handle user aliases and external IDs
- 📧 **Email & SMS** - Add and remove email addresses and SMS numbers
- 🔐 **Authentication** - Login and logout functionality
- 🌐 **Language Settings** - Set user language preferences
- 📊 **Event Tracking** - Track custom events with properties
- 📈 **Session Outcomes** - Send unique outcomes for analytics
- ✅ **Consent Management** - Handle user consent and permissions
- 🔔 **Notifications** - Request permissions and show prompts

## Quick Start

### 1. Install Dependencies

```bash
cd example
npm install
```

### 2. Configure OneSignal

1. Replace `YOUR_ONESIGNAL_APP_ID` in `src/app/app.component.ts` with your actual OneSignal App ID
2. The service worker is already configured to use the CDN version. If you need a local copy, download from [OneSignal releases](https://github.com/OneSignal/OneSignal-Website-SDK/releases) and replace `src/OneSignalSDKWorker.js`

### 3. Run the Example

```bash
npm start
```

Open [https://localhost:4001](https://localhost:4001) in your browser.

**Note:** The example runs on HTTPS (port 4001) which is required for OneSignal push notifications to work properly.

## API Methods Tested

### User Tags

- `addTag(key, value)` - Add a single tag
- `addTags(tags)` - Add multiple tags
- `removeTag(key)` - Remove a single tag
- `removeTags(keys)` - Remove multiple tags
- `getTags()` - Get all current tags

### User Aliases

- `addAlias(label, id)` - Add a single alias
- `addAliases(aliases)` - Add multiple aliases
- `removeAlias(label)` - Remove a single alias
- `removeAliases(labels)` - Remove multiple aliases

### Email & SMS

- `addEmail(email)` - Add email address
- `removeEmail(email)` - Remove email address
- `addSms(smsNumber)` - Add SMS number
- `removeSms(smsNumber)` - Remove SMS number

### Authentication

- `login(externalId, jwtToken?)` - Login with external ID
- `logout()` - Logout user

### Language & Events

- `setLanguage(language)` - Set user language
- `trackEvent(name, properties?)` - Track custom events

### Session & Outcomes

- `sendUniqueOutcome(outcomeName)` - Send unique outcome

### Consent & Permissions

- `setConsentGiven(consent)` - Set consent status
- `setConsentRequired(required)` - Set consent requirement
- `requestPermission()` - Request notification permission

## Project Structure

```
example/
├── src/
│   ├── app/
│   │   ├── api-test/           # API testing component
│   │   │   ├── api-test.component.ts
│   │   │   ├── api-test.component.html
│   │   │   └── api-test.component.css
│   │   ├── app.component.ts    # Main app component
│   │   ├── app.component.html
│   │   ├── app.component.css
│   │   └── app.routes.ts
│   ├── main.ts                 # App bootstrap
│   ├── index.html
│   └── styles.css
├── OneSignalSDKWorker.js       # OneSignal service worker
├── package.json
├── angular.json
└── README.md
```

## Development

### Build for Production

```bash
npm run build
```

### Run Tests

```bash
npm test
```

## Troubleshooting

### Service Worker Issues

- Ensure `OneSignalSDKWorker.js` is accessible at your domain root
- Check browser console for service worker errors
- Verify HTTPS is enabled (required for push notifications)

### Permission Issues

- Make sure your domain is configured in OneSignal dashboard
- Check that the App ID is correct
- Ensure the service worker is properly loaded

### API Errors

- Check the test results section for detailed error messages
- Verify all required parameters are provided
- Check browser console for additional error details

## Contributing

Feel free to submit issues and enhancement requests!

## License

This example project is part of the OneSignal Angular SDK and follows the same MIT license.
