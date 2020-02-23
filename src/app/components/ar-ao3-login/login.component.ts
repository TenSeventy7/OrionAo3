import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private modalCtrl: ModalController,
    private translate: TranslateService) { }

  ngOnInit() {
  	     if (!window.history.state.modal) {
        const modalState = { modal: true };
        history.pushState(modalState, null);
      }
  }

  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
}
