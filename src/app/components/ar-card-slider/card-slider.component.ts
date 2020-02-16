import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ar-card-slider',
  templateUrl: './card-slider.component.html',
  styleUrls: ['./card-slider.component.scss'],
})
export class CardSliderComponent implements OnInit {
  @Input() name: string;

  constructor() { }

  ngOnInit() {}

}
