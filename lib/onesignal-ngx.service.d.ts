declare type Action<T> = (item: T) => void;
interface AutoPromptOptions {
    force?: boolean;
    forceSlidedownOverNative?: boolean;
    slidedownPromptOptions?: IOneSignalAutoPromptOptions;
}
interface IOneSignalAutoPromptOptions {
    force?: boolean;
    forceSlidedownOverNative?: boolean;
    isInUpdateMode?: boolean;
    categoryOptions?: IOneSignalCategories;
}
interface IOneSignalCategories {
    positiveUpdateButton: string;
    negativeUpdateButton: string;
    savingButtonText: string;
    errorButtonText: string;
    updateMessage: string;
    tags: IOneSignalTagCategory[];
}
interface IOneSignalTagCategory {
    tag: string;
    label: string;
    checked?: boolean;
}
declare type PushSubscriptionNamespaceProperties = {
    id: string | null | undefined;
    token: string | null | undefined;
    optedIn: boolean;
};
declare type SubscriptionChangeEvent = {
    previous: PushSubscriptionNamespaceProperties;
    current: PushSubscriptionNamespaceProperties;
};
declare type NotificationEventName = 'click' | 'willDisplay' | 'dismiss' | 'permissionChange' | 'permissionPromptDisplay';
declare type SlidedownEventName = 'slidedownShown';
declare type OneSignalDeferredLoadedCallback = (onesignal: IOneSignalOneSignal) => void;
interface IInitObject {
    appId: string;
    subdomainName?: string;
    requiresUserPrivacyConsent?: boolean;
    promptOptions?: object;
    welcomeNotification?: object;
    notifyButton?: object;
    persistNotification?: boolean;
    webhooks?: object;
    autoResubscribe?: boolean;
    autoRegister?: boolean;
    notificationClickHandlerMatch?: string;
    notificationClickHandlerAction?: string;
    serviceWorkerParam?: {
        scope: string;
    };
    serviceWorkerPath?: string;
    serviceWorkerUpdaterPath?: string;
    path?: string;
    allowLocalhostAsSecureOrigin?: boolean;
    [key: string]: any;
}
interface IOneSignalOneSignal {
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
interface IOneSignalNotifications {
    setDefaultUrl(url: string): Promise<void>;
    setDefaultTitle(title: string): Promise<void>;
    isPushSupported(): boolean;
    getPermissionStatus(onComplete: Action<NotificationPermission>): Promise<NotificationPermission>;
    requestPermission(): Promise<void>;
    addEventListener(event: NotificationEventName, listener: (obj: any) => void): void;
    removeEventListener(event: NotificationEventName, listener: (obj: any) => void): void;
}
interface IOneSignalSlidedown {
    promptPush(options?: AutoPromptOptions): Promise<void>;
    promptPushCategories(options?: AutoPromptOptions): Promise<void>;
    promptSms(options?: AutoPromptOptions): Promise<void>;
    promptEmail(options?: AutoPromptOptions): Promise<void>;
    promptSmsAndEmail(options?: AutoPromptOptions): Promise<void>;
    addEventListener(event: SlidedownEventName, listener: (wasShown: boolean) => void): void;
    removeEventListener(event: SlidedownEventName, listener: (wasShown: boolean) => void): void;
}
interface IOneSignalDebug {
    setLogLevel(logLevel: string): void;
}
interface IOneSignalSession {
    sendOutcome(outcomeName: string, outcomeWeight?: number): Promise<void>;
    sendUniqueOutcome(outcomeName: string): Promise<void>;
}
interface IOneSignalUser {
    PushSubscription: IOneSignalPushSubscription;
    addAlias(label: string, id: string): void;
    addAliases(aliases: {
        [key: string]: string;
    }): void;
    removeAlias(label: string): void;
    removeAliases(labels: string[]): void;
    addEmail(email: string): void;
    removeEmail(email: string): void;
    addSms(smsNumber: string): void;
    removeSms(smsNumber: string): void;
    addTag(key: string, value: string): void;
    addTags(tags: {
        [key: string]: string;
    }): void;
    removeTag(key: string): void;
    removeTags(keys: string[]): void;
}
interface IOneSignalPushSubscription {
    id: string | null | undefined;
    token: string | null | undefined;
    optedIn: boolean | undefined;
    optIn(): Promise<void>;
    optOut(): Promise<void>;
    addEventListener(event: 'subscriptionChange', listener: (change: SubscriptionChangeEvent) => void): void;
    removeEventListener(event: 'subscriptionChange', listener: (change: SubscriptionChangeEvent) => void): void;
}
declare function oneSignalLogin(externalId: string, jwtToken?: string): Promise<void>;
declare function oneSignalLogout(): Promise<void>;
declare function oneSignalSetConsentGiven(consent: boolean): Promise<void>;
declare function oneSignalSetConsentRequired(requiresConsent: boolean): Promise<void>;
declare global {
    interface Window {
        OneSignalDeferred?: OneSignalDeferredLoadedCallback[];
        OneSignal?: IOneSignalOneSignal;
        safari?: {
            pushNotification: any;
        };
    }
}
interface IOneSignalOneSignal {
    [key: string]: any;
}
export declare class OneSignal implements IOneSignalOneSignal {
    [key: string]: any;
    constructor();
    /**
     * @PublicApi
     */
    init(options: IInitObject): Promise<void>;
    User: IOneSignalUser;
    Session: IOneSignalSession;
    Debug: IOneSignalDebug;
    Slidedown: IOneSignalSlidedown;
    Notifications: IOneSignalNotifications;
    login: typeof oneSignalLogin;
    logout: typeof oneSignalLogout;
    setConsentGiven: typeof oneSignalSetConsentGiven;
    setConsentRequired: typeof oneSignalSetConsentRequired;
}
export {};
