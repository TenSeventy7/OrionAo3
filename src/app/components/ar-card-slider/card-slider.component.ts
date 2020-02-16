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

  SliderOptions = {
  	slidesPerView: 1.15,
  	freeMode: false,
	coverflowEffect: {
	rotate: 50,
	stretch: 100,
	depth: 0,
	modifier: 1,
	slideShadows: false,
	    }
	}
}
