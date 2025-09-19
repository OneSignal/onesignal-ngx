import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OneSignal } from 'onesignal-ngx';

interface TestResult {
  method: string;
  success: boolean;
  message: string;
  timestamp: Date;
}

@Component({
  selector: 'app-api-test',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './api-test.component.html',
  styleUrls: ['./api-test.component.css']
})
export class ApiTestComponent implements OnInit {
  testResults: TestResult[] = [];
  
  // Form data for different API methods
  tagKey = '';
  tagValue = '';
  tagsObject = '{"key1": "value1", "key2": "value2"}';
  aliasLabel = '';
  aliasId = '';
  aliasesObject = '{"label1": "id1", "label2": "id2"}';
  email = '';
  smsNumber = '';
  externalId = '';
  jwtToken = '';
  eventName = '';
  eventProperties = '{"property1": "value1", "property2": 123}';
  language = 'en';
  outcomeName = '';
  
  // User info
  userInfo: any = {};
  tags: { [key: string]: string } = {};
  
  constructor(private oneSignal: OneSignal) {}

  ngOnInit() {
    this.loadUserInfo();
    this.setupEventListeners();
  }

  private async loadUserInfo() {
    try {
      this.userInfo = {
        onesignalId: this.oneSignal.User.onesignalId,
        externalId: this.oneSignal.User.externalId,
        language: this.oneSignal.User.getLanguage(),
        tags: this.oneSignal.User.getTags()
      };
      this.tags = this.userInfo.tags || {};
    } catch (error) {
      this.addTestResult('loadUserInfo', false, `Error loading user info: ${(error as Error).message}`);
    }
  }

  private setupEventListeners() {
    // User change events
    this.oneSignal.User.addEventListener('change', (change) => {
      console.log('User changed:', change);
      this.loadUserInfo();
    });

    // Notification events
    this.oneSignal.Notifications.addEventListener('click', (event) => {
      console.log('Notification clicked:', event);
      this.addTestResult('notificationClick', true, 'Notification was clicked');
    });

    this.oneSignal.Notifications.addEventListener('foregroundWillDisplay', (event) => {
      console.log('Notification will display:', event);
      this.addTestResult('notificationForeground', true, 'Notification will display in foreground');
    });

    this.oneSignal.Notifications.addEventListener('permissionChange', (permission) => {
      console.log('Permission changed:', permission);
      this.addTestResult('permissionChange', true, `Permission changed to: ${permission}`);
    });

    // Slidedown events
    this.oneSignal.Slidedown.addEventListener('slidedownShown', (shown) => {
      console.log('Slidedown shown:', shown);
      this.addTestResult('slidedownShown', true, `Slidedown shown: ${shown}`);
    });

    // Push subscription events
    this.oneSignal.User.PushSubscription.addEventListener('change', (change) => {
      console.log('Push subscription changed:', change);
      this.addTestResult('pushSubscriptionChange', true, 'Push subscription changed');
    });
  }

  private addTestResult(method: string, success: boolean, message: string) {
    this.testResults.unshift({
      method,
      success,
      message,
      timestamp: new Date()
    });
  }

  // User Tag Methods
  addTag() {
    try {
      this.oneSignal.User.addTag(this.tagKey, this.tagValue);
      this.addTestResult('addTag', true, `Added tag: ${this.tagKey} = ${this.tagValue}`);
      this.loadUserInfo();
    } catch (error) {
      this.addTestResult('addTag', false, `Error adding tag: ${(error as Error).message}`);
    }
  }

  addTags() {
    try {
      const tags = JSON.parse(this.tagsObject);
      this.oneSignal.User.addTags(tags);
      this.addTestResult('addTags', true, `Added tags: ${JSON.stringify(tags)}`);
      this.loadUserInfo();
    } catch (error) {
      this.addTestResult('addTags', false, `Error adding tags: ${(error as Error).message}`);
    }
  }

  removeTag() {
    try {
      this.oneSignal.User.removeTag(this.tagKey);
      this.addTestResult('removeTag', true, `Removed tag: ${this.tagKey}`);
      this.loadUserInfo();
    } catch (error) {
      this.addTestResult('removeTag', false, `Error removing tag: ${(error as Error).message}`);
    }
  }

  removeTags() {
    try {
      const keys = this.tagKey.split(',').map(k => k.trim());
      this.oneSignal.User.removeTags(keys);
      this.addTestResult('removeTags', true, `Removed tags: ${keys.join(', ')}`);
      this.loadUserInfo();
    } catch (error) {
      this.addTestResult('removeTags', false, `Error removing tags: ${(error as Error).message}`);
    }
  }

  // User Alias Methods
  addAlias() {
    try {
      this.oneSignal.User.addAlias(this.aliasLabel, this.aliasId);
      this.addTestResult('addAlias', true, `Added alias: ${this.aliasLabel} = ${this.aliasId}`);
      this.loadUserInfo();
    } catch (error) {
      this.addTestResult('addAlias', false, `Error adding alias: ${(error as Error).message}`);
    }
  }

  addAliases() {
    try {
      const aliases = JSON.parse(this.aliasesObject);
      this.oneSignal.User.addAliases(aliases);
      this.addTestResult('addAliases', true, `Added aliases: ${JSON.stringify(aliases)}`);
      this.loadUserInfo();
    } catch (error) {
      this.addTestResult('addAliases', false, `Error adding aliases: ${(error as Error).message}`);
    }
  }

  removeAlias() {
    try {
      this.oneSignal.User.removeAlias(this.aliasLabel);
      this.addTestResult('removeAlias', true, `Removed alias: ${this.aliasLabel}`);
      this.loadUserInfo();
    } catch (error) {
      this.addTestResult('removeAlias', false, `Error removing alias: ${(error as Error).message}`);
    }
  }

  removeAliases() {
    try {
      const labels = this.aliasLabel.split(',').map(l => l.trim());
      this.oneSignal.User.removeAliases(labels);
      this.addTestResult('removeAliases', true, `Removed aliases: ${labels.join(', ')}`);
      this.loadUserInfo();
    } catch (error) {
      this.addTestResult('removeAliases', false, `Error removing aliases: ${(error as Error).message}`);
    }
  }

  // Email Methods
  addEmail() {
    try {
      this.oneSignal.User.addEmail(this.email);
      this.addTestResult('addEmail', true, `Added email: ${this.email}`);
      this.loadUserInfo();
    } catch (error) {
      this.addTestResult('addEmail', false, `Error adding email: ${(error as Error).message}`);
    }
  }

  removeEmail() {
    try {
      this.oneSignal.User.removeEmail(this.email);
      this.addTestResult('removeEmail', true, `Removed email: ${this.email}`);
      this.loadUserInfo();
    } catch (error) {
      this.addTestResult('removeEmail', false, `Error removing email: ${(error as Error).message}`);
    }
  }

  // SMS Methods
  addSms() {
    try {
      this.oneSignal.User.addSms(this.smsNumber);
      this.addTestResult('addSms', true, `Added SMS: ${this.smsNumber}`);
      this.loadUserInfo();
    } catch (error) {
      this.addTestResult('addSms', false, `Error adding SMS: ${(error as Error).message}`);
    }
  }

  removeSms() {
    try {
      this.oneSignal.User.removeSms(this.smsNumber);
      this.addTestResult('removeSms', true, `Removed SMS: ${this.smsNumber}`);
      this.loadUserInfo();
    } catch (error) {
      this.addTestResult('removeSms', false, `Error removing SMS: ${(error as Error).message}`);
    }
  }

  // Authentication Methods
  async login() {
    try {
      await this.oneSignal.login(this.externalId, this.jwtToken || undefined);
      this.addTestResult('login', true, `Logged in with external ID: ${this.externalId}`);
      this.loadUserInfo();
    } catch (error) {
      this.addTestResult('login', false, `Error logging in: ${(error as Error).message}`);
    }
  }

  async logout() {
    try {
      await this.oneSignal.logout();
      this.addTestResult('logout', true, 'Logged out successfully');
      this.loadUserInfo();
    } catch (error) {
      this.addTestResult('logout', false, `Error logging out: ${(error as Error).message}`);
    }
  }

  // Language Methods
  setLanguage() {
    try {
      this.oneSignal.User.setLanguage(this.language);
      this.addTestResult('setLanguage', true, `Set language to: ${this.language}`);
      this.loadUserInfo();
    } catch (error) {
      this.addTestResult('setLanguage', false, `Error setting language: ${(error as Error).message}`);
    }
  }

  // Event Tracking
  trackEvent() {
    try {
      const properties = this.eventProperties ? JSON.parse(this.eventProperties) : undefined;
      this.oneSignal.User.trackEvent(this.eventName, properties);
      this.addTestResult('trackEvent', true, `Tracked event: ${this.eventName} with properties: ${JSON.stringify(properties)}`);
    } catch (error) {
      this.addTestResult('trackEvent', false, `Error tracking event: ${(error as Error).message}`);
    }
  }

  // Session Methods
  async sendUniqueOutcome() {
    try {
      await this.oneSignal.Session.sendUniqueOutcome(this.outcomeName);
      this.addTestResult('sendUniqueOutcome', true, `Sent unique outcome: ${this.outcomeName}`);
    } catch (error) {
      this.addTestResult('sendUniqueOutcome', false, `Error sending unique outcome: ${(error as Error).message}`);
    }
  }

  // Consent Methods
  async setConsentGiven() {
    try {
      await this.oneSignal.setConsentGiven(true);
      this.addTestResult('setConsentGiven', true, 'Consent given');
    } catch (error) {
      this.addTestResult('setConsentGiven', false, `Error setting consent: ${(error as Error).message}`);
    }
  }

  async setConsentRequired() {
    try {
      await this.oneSignal.setConsentRequired(true);
      this.addTestResult('setConsentRequired', true, 'Consent required set to true');
    } catch (error) {
      this.addTestResult('setConsentRequired', false, `Error setting consent required: ${(error as Error).message}`);
    }
  }

  // Notification Methods
  async requestPermission() {
    try {
      const permission = await this.oneSignal.Notifications.requestPermission();
      this.addTestResult('requestPermission', true, `Permission requested: ${permission}`);
    } catch (error) {
      this.addTestResult('requestPermission', false, `Error requesting permission: ${(error as Error).message}`);
    }
  }

  // Slidedown Methods
  async showSlidedownPrompt() {
    try {
      await this.oneSignal.Slidedown.promptPush();
      this.addTestResult('showSlidedownPrompt', true, 'Slidedown prompt shown');
    } catch (error) {
      this.addTestResult('showSlidedownPrompt', false, `Error showing slidedown: ${(error as Error).message}`);
    }
  }

  // Utility Methods
  clearResults() {
    this.testResults = [];
  }

  refreshUserInfo() {
    this.loadUserInfo();
  }
}
