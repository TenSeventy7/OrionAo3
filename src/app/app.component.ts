import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, Platform, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import { Plugins, StatusBarStyle } from '@capacitor/core';

import { UserData } from './providers/user-data';

const { StatusBar } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private router: Router,
    private storage: Storage,
    private userData: UserData,
    private toastCtrl: ToastController,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    isStatusBarLight = true
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();

      Plugins.StatusBar.setStyle({
      style: StatusBarStyle.Light });
      StatusBar.setBackgroundColor({ color: `#fefefe` });
      
      this.splashScreen.hide();
    });
  }

  openTutorial() {
    this.storage.set('ion_did_tutorial', false);
    this.router.navigateByUrl('/tutorial');
  }
}
