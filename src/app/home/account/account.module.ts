import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ArionAccountTab } from './account.page';
import { LoginComponent } from '../../components/login/login.component';

@NgModule({
  entryComponents: [LoginComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: ArionAccountTab }])
  ],
  declarations: [ArionAccountTab, LoginComponent]
})
export class ArionAccountTabPageModule {}
