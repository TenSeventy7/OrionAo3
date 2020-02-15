import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { SplashScreen } = Plugins;

@Component({
  selector: 'app-tab',
  templateUrl: 'tab.page.html',
  styleUrls: ['tab.page.scss']
})
export class TabPage {

  constructor() {}
 
  ngOnInit() {
  	SplashScreen.hide();
  }

  HomesliderOptions = {
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
