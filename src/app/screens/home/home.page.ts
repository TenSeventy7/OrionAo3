import { Component, ViewChildren, QueryList, OnInit } from '@angular/core';
import { Events, MenuController, Platform, IonRouterOutlet, ActionSheetController, PopoverController, ModalController, ToastController } from '@ionic/angular';
import { Router, NavigationStart } from '@angular/router';
import { Toast } from '@ionic-native/toast/ngx';
import { SuperTabsConfig } from 'node_modules/@ionic-super-tabs/core/dist/types/interface';

import { LoginComponent } from '../../components/login/login.component';
import { ScrollDetail } from '@ionic/core';

import { Plugins, StatusBarStyle } from '@capacitor/core';
const { SplashScreen } = Plugins;
const { StatusBar } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
    constructor(
    private platform: Platform,
    private router:Router,
    private menu: MenuController,
    public toastCtrl: ToastController,
    private actionSheetCtrl: ActionSheetController,
    private popoverCtrl: PopoverController,
    public modalCtrl: ModalController,
    private toast: Toast
    ) {}

  ngOnInit() {
     SplashScreen.hide();
  }
  
    config: SuperTabsConfig = {
      allowElementScroll: true,
      shortSwipeDuration: 0,
      avoidElements: true,
      sideMenuThreshold: 999,
      sideMenu: "both",
  };


  hideToolbar = true;
  onScroll($event: CustomEvent<ScrollDetail>) {
  if ($event && $event.detail && $event.detail.scrollTop) {
  const scrollTop = $event.detail.scrollTop;
  this.hideToolbar = scrollTop < 75;
  }
  }

  async openLoginModal(): Promise<void> {
  const accountListModal = await this.modalCtrl.create({
    component: LoginComponent,
  });
  return await accountListModal.present();
}
}