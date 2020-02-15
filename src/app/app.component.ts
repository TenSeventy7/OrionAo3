import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Plugins, StatusBarStyle } from '@capacitor/core';
import { Platform } from '@ionic/angular';

import * as PluginsLibrary from '@jeepq/capacitor';
import { Storage } from '@ionic/storage';

const { Device, StatusBar, SplashScreen, CapacitorDataStorageSqlite } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
   _storage: any;

  constructor(
    private platform: Platform,
    private router: Router,
    private storage: Storage
  ) {
    this.initializeApp();
  }

  async ngAfterViewInit() {
    const info = await Device.getInfo();
      if (info.platform === "ios" || info.platform === "android") {
       this._storage = CapacitorDataStorageSqlite;
     } else {
       this._storage = PluginsLibrary.CapacitorDataStorageSqlite
     }

   }

  initializeApp() {
    this.platform.ready().then(() => {
    });
  }
}
