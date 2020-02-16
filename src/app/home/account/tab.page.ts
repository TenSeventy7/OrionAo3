import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IonRouterOutlet } from '@ionic/angular';

import { LoginComponent } from '../../components/ar-ao3-login/login.component';

@Component({
  selector: 'app-tab',
  templateUrl: 'tab.page.html',
  styleUrls: ['tab.page.scss']
})
export class TabPage {

  constructor(
  	private modalCtrl: ModalController,
  	private routerOutlet: IonRouterOutlet
  	) {}
  
  async openLoginModal(): Promise<void> {
    const accountListModal = await this.modalCtrl.create({
      component: LoginComponent,
      mode: "ios",
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl
    });
    return await accountListModal.present();
  }
}
