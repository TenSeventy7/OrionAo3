import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabPage } from './tab.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { LoginComponent } from '../../components/ar-ao3-login/login.component';

@NgModule({
  entryComponents: [LoginComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: TabPage }])
  ],
  declarations: [TabPage, LoginComponent]
})
export class TabPageModule {}
