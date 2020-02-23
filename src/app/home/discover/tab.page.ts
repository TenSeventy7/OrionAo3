import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Plugins } from '@capacitor/core';

const { SplashScreen } = Plugins;

@Component({
  selector: 'app-tab',
  templateUrl: 'tab.page.html',
  styleUrls: ['tab.page.scss']
})
export class TabPage {

  constructor(translate: TranslateService)  {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');
    translate.use('en');
  }
 
  ngOnInit() {
  	SplashScreen.hide();
  }

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
