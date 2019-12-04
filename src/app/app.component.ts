import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, Platform, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Plugins, StatusBarStyle } from '@capacitor/core';
import { NavigationBarPlugin } from 'capacitor-navigationbar';
import { UserData } from './providers/user-data';
import { IonicAngularThemeSwitchService } from 'ionic-angular-theme-switch';
import { defaultTheme, darkTheme } from './providers/theme-switcher.service';

const { StatusBar } = Plugins;
const NavigationBar = Plugins.NavigationBar as NavigationBarPlugin;
const { SplashScreen } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private themeSwitchService: IonicAngularThemeSwitchService,
    private platform: Platform,
    private router: Router,
    private storage: Storage,
    private userData: UserData,
    private toastCtrl: ToastController
  ) {
    this.initializeApp();
    this.setAppTheme();
  }

  setAppTheme() {
    this.storage.get('IonicAngularThemeSwitch_ThemeName').then((val) => {
      if (val === 'alternative') {
       Plugins.StatusBar.setStyle({
         style: StatusBarStyle.Dark
       });
       StatusBar.setBackgroundColor({ color: `#121212` });
       NavigationBar.setBackgroundColor({color: '#FF1E1E1E'});
        } else {
       Plugins.StatusBar.setStyle({
         style: StatusBarStyle.Light
       });
       StatusBar.setBackgroundColor({ color: `#fefefe` });
       NavigationBar.setBackgroundColor({color: '#A30A0B'});
        }
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
     Plugins.StatusBar.setStyle({
       style: StatusBarStyle.Light
     });
     StatusBar.setBackgroundColor({ color: `#fefefe` });
     NavigationBar.setBackgroundColor({color: '#FFFEFEFE'});
     SplashScreen.hide();
    });
  }

  openTutorial() {
    this.storage.set('ion_did_tutorial', false);
    this.router.navigateByUrl('/tutorial');
  }
}
