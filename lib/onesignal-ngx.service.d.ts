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
interface NotificationButtonData {
    action?: string;
    title?: string;
    icon?: string;
    url?: string;
}
interface StructuredNotification {
    id: string;
    content: string;
    heading?: string;
    url?: string;
    data?: object;
    rr?: string;
    icon?: string;
    image?: string;
    tag?: string;
    badge?: string;
    vibrate?: string;
    buttons?: NotificationButtonData[];
}
declare type SlidedownEventName = 'slidedownShown';
declare type NotificationCallbackType = ((obj: StructuredNotification) => void) | ((obj: {
    to: NotificationPermission;
}) => void) | ((obj: (arg: any) => void) => void);
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
declare global {
    interface Window {
        OneSignalDeferred: any;
        safari?: {
            pushNotificationPermission: (permissionData: any) => void;
            pushNotification: any;
        };
    }
}
interface IOneSignal {
    [key: string]: any;
}
export declare class OneSignal implements IOneSignal {
    private isOneSignalInitialized;
    private ngOneSignalFunctionQueue;
    constructor();
    private doesOneSignalExist;
    private handleOnLoad;
    private handleOnError;
    private processQueuedOneSignalFunctions;
    /**
     * @PublicApi
     */
    init(options: IInitObject): Promise<void>;
    /**
     * @PublicApi
     */
    isPushSupported(): boolean;
    login(externalId: string, token?: string): Promise<void>;
    logout(): Promise<void>;
    setConsentGiven(consent: boolean): Promise<void>;
    setConsentRequired(requiresConsent: boolean): Promise<void>;
    setDefaultUrl(url: string): Promise<void>;
    setDefaultTitle(title: string): Promise<void>;
    getPermissionStatus(onComplete: Action<NotificationPermission>): Promise<NotificationPermission>;
    requestPermission(): Promise<void>;
    addNotificationsEventListener(event: NotificationEventName, listener: NotificationCallbackType): void;
    removeNotificationsEventListener(event: NotificationEventName, listener: NotificationCallbackType): void;
    promptPush(options?: AutoPromptOptions): Promise<void>;
    promptPushCategories(options?: AutoPromptOptions): Promise<void>;
    promptSms(options?: AutoPromptOptions): Promise<void>;
    promptEmail(options?: AutoPromptOptions): Promise<void>;
    promptSmsAndEmail(options?: AutoPromptOptions): Promise<void>;
    addSlidedownEventListener(event: SlidedownEventName, listener: (wasShown: boolean) => void): void;
    removeSlidedownEventListener(event: SlidedownEventName, listener: (wasShown: boolean) => void): void;
    setLogLevel(logLevel: string): void;
    sendOutcome(outcomeName: string, outcomeWeight?: number): Promise<void>;
    sendUniqueOutcome(outcomeName: string): Promise<void>;
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
    optIn(): Promise<void>;
    optOut(): Promise<void>;
    addPushSubscriptionEventListener(event: string, listener: (change: SubscriptionChangeEvent) => void): void;
    removePushSubscriptionEventListener(event: string, listener: (change: SubscriptionChangeEvent) => void): void;
}
export {};
