import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabPage } from './tab.page';
import { CardSliderComponentModule } from '../../components/ar-card-slider/card-slider.module';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TranslateModule.forChild(),
    CardSliderComponentModule,
    RouterModule.forChild([{ path: '', component: TabPage }])
  ],
  declarations: [TabPage]
})
export class TabPageModule {}
