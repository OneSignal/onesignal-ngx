import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { OneSignal } from "onesignal-ngx";
import { ApiTestComponent } from "./api-test/api-test.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, ApiTestComponent],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "OneSignal Angular SDK Example";
  oneSignalInitialized = false;
  oneSignalError: string | null = null;

  constructor(private oneSignal: OneSignal) {}

  async ngOnInit() {
    try {
      // Initialize OneSignal with your app ID
      // Replace with your actual OneSignal App ID
      await this.oneSignal.init({
        appId: "77e32082-ea27-42e3-a898-c72e141824ef",
        allowLocalhostAsSecureOrigin: true,
      });

      this.oneSignalInitialized = true;
      console.log("OneSignal initialized successfully");
    } catch (error) {
      this.oneSignalError =
        "Failed to initialize OneSignal: " + (error as Error).message;
      console.error("OneSignal initialization error:", error);
    }
  }
}
