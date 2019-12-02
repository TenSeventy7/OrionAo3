import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, Platform, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Storage } from '@ionic/storage';
import { Plugins, StatusBarStyle } from '@capacitor/core';
import { NavigationBarPlugin } from 'capacitor-navigationbar';
import { UserData } from './providers/user-data';
import { IonicAngularThemeSwitchService } from 'ionic-angular-theme-switch';
import { defaultTheme, darkTheme } from './providers/theme-switcher.service';

const { StatusBar } = Plugins;
const NavigationBar = Plugins.NavigationBar as NavigationBarPlugin;

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
    private toastCtrl: ToastController,
    private splashScreen: SplashScreen
  ) {
    this.initializeApp();
  }

  setAppTheme() {
    // Use matchMedia to check the user preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)');

    toggleDarkTheme(prefersDark.matches);
    toggleLightTheme(prefersLight.matches);

    // Listen for changes to the prefers-color-scheme media query
    prefersDark.addListener((mediaQuery) => toggleDarkTheme(mediaQuery.matches));
    prefersLight.addListener((mediaQuery) => toggleLightTheme(mediaQuery.matches));

    function toggleDarkTheme(shouldAdd) {
     Plugins.StatusBar.setStyle({
       style: StatusBarStyle.Dark
     });
     StatusBar.setBackgroundColor({ color: `#121212` });
     NavigationBar.setBackgroundColor({color: '#FF121212'});
    }

    function toggleLightTheme(shouldAdd) {
     Plugins.StatusBar.setStyle({
       style: StatusBarStyle.Dark
     });
     StatusBar.setBackgroundColor({ color: `#fefefe` });
     NavigationBar.setBackgroundColor({color: '#FFFEFEFE'});
    }

  }

  initializeApp() {
    this.platform.ready().then(() => {
     Plugins.StatusBar.setStyle({
       style: StatusBarStyle.Dark
     });
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
