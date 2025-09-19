import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { OneSignal } from "onesignal-ngx";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "OneSignal Angular SDK Example";
  oneSignalInitialized = false;
  oneSignalError: string | null = null;
  userInfo: any = {};

  // Getter for template access to Object.keys
  get tagCount() {
    return Object.keys(this.userInfo.tags || {}).length;
  }

  constructor(private oneSignal: OneSignal) {}

  async ngOnInit() {
    try {
      // Initialize OneSignal with your app ID
      // Replace with your actual OneSignal App ID
      await this.oneSignal.init({
        appId: "77e32082-ea27-42e3-a898-c72e141824ef", // Replace with your actual App ID
        allowLocalhostAsSecureOrigin: true, // For development
        autoRegister: true,
        autoResubscribe: true,
      });

      this.oneSignalInitialized = true;
      this.loadUserInfo();
      console.log("OneSignal initialized successfully");
    } catch (error) {
      this.oneSignalError =
        "Failed to initialize OneSignal: " + (error as Error).message;
      console.error("OneSignal initialization error:", error);
    }
  }

  loadUserInfo() {
    try {
      this.userInfo = {
        onesignalId: this.oneSignal.User.onesignalId,
        externalId: this.oneSignal.User.externalId,
        language: this.oneSignal.User.getLanguage(),
        tags: this.oneSignal.User.getTags(),
      };
    } catch (error) {
      console.error("Error loading user info:", error);
    }
  }

  // Example API methods
  async login() {
    try {
      await this.oneSignal.login("user123");
      this.loadUserInfo();
      console.log("User logged in");
    } catch (error) {
      console.error("Login error:", error);
    }
  }

  addTag() {
    try {
      this.oneSignal.User.addTag("example", "test");
      this.loadUserInfo();
      console.log("Tag added");
    } catch (error) {
      console.error("Add tag error:", error);
    }
  }

  trackEvent() {
    try {
      this.oneSignal.User.trackEvent("button_click", { source: "example" });
      console.log("Event tracked");
    } catch (error) {
      console.error("Track event error:", error);
    }
  }
}
