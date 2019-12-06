import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ArionDiscoverTab } from './discover.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: ArionDiscoverTab }])
  ],
  declarations: [ArionDiscoverTab]
})
export class ArionDiscoverTabPageModule {}
