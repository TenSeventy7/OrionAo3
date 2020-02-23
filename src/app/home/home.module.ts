import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeTabsPageRoutingModule } from './home-routing.module';

import { TranslateModule } from '@ngx-translate/core';

import { HomeTabsPage } from './home.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    TranslateModule.forChild(),
    FormsModule,
    HomeTabsPageRoutingModule
  ],
  declarations: [HomeTabsPage]
})
export class HomeTabsPageModule {}
