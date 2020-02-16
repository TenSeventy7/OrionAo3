import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardSliderComponent } from './card-slider.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [CardSliderComponent],
  exports: [CardSliderComponent]
})
export class CardSliderComponentModule {}
