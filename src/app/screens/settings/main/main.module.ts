import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToggleThemes } from 'ionic-angular-theme-switch';
import { defaultTheme, darkTheme } from '../../../providers/theme-switcher.service';
import { IonicModule } from '@ionic/angular';

import { IonicAngularThemeSwitchToggleModule } from 'ionic-angular-theme-switch';
import { MainPageRoutingModule } from './main-routing.module';

import { MainPage } from './main.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainPageRoutingModule,
    IonicAngularThemeSwitchToggleModule
  ],
  declarations: [MainPage]
})
export class MainPageModule {
}
