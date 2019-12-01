import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, Platform, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Storage } from '@ionic/storage';
import { Plugins, StatusBarStyle } from '@capacitor/core';
import { NavigationBarPlugin } from 'capacitor-navigationbar';
import { UserData } from './providers/user-data';

const { StatusBar } = Plugins;
const NavigationBar = Plugins.NavigationBar as NavigationBarPlugin;

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
    private splashScreen: SplashScreen
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {

      Plugins.StatusBar.setStyle({
      style: StatusBarStyle.Light });
      StatusBar.setBackgroundColor({ color: `#fefefe` });
      NavigationBar.setBackgroundColor({color: '#FFFEFEFE'});

      this.splashScreen.hide();
    });
  }

  openTutorial() {
    this.storage.set('ion_did_tutorial', false);
    this.router.navigateByUrl('/tutorial');
  }
}
