import { Component, OnInit } from '@angular/core';
import { defaultTheme, darkTheme } from '../../../providers/theme-switcher.service';
import { ToggleThemes } from 'ionic-angular-theme-switch';
import { ScrollDetail } from '@ionic/core';
import { Storage } from '@ionic/storage';
import { Plugins, StatusBarStyle } from '@capacitor/core';
import { NavigationBarPlugin } from 'capacitor-navigationbar';

const { StatusBar } = Plugins;
const NavigationBar = Plugins.NavigationBar as NavigationBarPlugin;

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor(
    private storage: Storage,
    ) { }

  ngOnInit() {
  }

  public themes: ToggleThemes = {
    default: {},
    alternative: darkTheme
  };

  setAppTheme() {
    this.storage.get('IonicAngularThemeSwitch_ThemeName').then((val) => {
      if (val === 'alternative') {
       Plugins.StatusBar.setStyle({
         style: StatusBarStyle.Dark
       });
       StatusBar.setBackgroundColor({ color: `#121212` });
       NavigationBar.setBackgroundColor({color: '#FF121212'});
        } else {
       Plugins.StatusBar.setStyle({
         style: StatusBarStyle.Light
       });
       StatusBar.setBackgroundColor({ color: `#fefefe` });
       NavigationBar.setBackgroundColor({color: '#A30A0B'});
        }
    });
  }
}
