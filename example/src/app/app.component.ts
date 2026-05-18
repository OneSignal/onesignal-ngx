import { Component, OnInit } from '@angular/core';
import { OneSignal } from 'onesignal-ngx';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(private readonly oneSignal: OneSignal) {}

  ngOnInit(): void {
    this.oneSignal
      .init({
        appId: '<YOUR_APP_ID>',
        allowLocalhostAsSecureOrigin: true,
      })
      .then(() => {
        this.oneSignal.Debug.setLogLevel('trace');
      });
  }
}
