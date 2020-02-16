import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

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
