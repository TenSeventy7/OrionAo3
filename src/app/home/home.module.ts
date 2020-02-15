import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeTabsPageRoutingModule } from './home-routing.module';

import { HomeTabsPage } from './home.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HomeTabsPageRoutingModule
  ],
  declarations: [HomeTabsPage]
})
export class HomeTabsPageModule {}
