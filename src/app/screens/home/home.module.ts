import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { LoginComponent } from '../../components/login/login.component';
import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';

@NgModule({
  entryComponents: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuperTabsModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, LoginComponent]
})
export class HomePageModule {}
