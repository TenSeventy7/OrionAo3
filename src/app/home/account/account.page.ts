import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginComponent } from '../../components/login/login.component';
import { ScrollDetail } from '@ionic/core';


@Component({
  selector: 'app-account',
  templateUrl: 'account.page.html',
  styleUrls: ['account.page.scss']
})
export class ArionAccountTab implements OnInit {

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
  }

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
