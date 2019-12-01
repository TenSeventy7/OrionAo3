import { Component, OnInit } from '@angular/core';
import { defaultTheme, darkTheme } from '../../../providers/theme-switcher.service';
import { ToggleThemes } from 'ionic-angular-theme-switch';
import { ScrollDetail } from '@ionic/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

	hideToolbar = true;
  constructor() { }

  ngOnInit() {
  }

  public themes: ToggleThemes = {
    default: {},
    alternative: darkTheme
  };
  
	onScroll($event: CustomEvent<ScrollDetail>) {
	if ($event && $event.detail && $event.detail.scrollTop) {
	const scrollTop = $event.detail.scrollTop;
	this.hideToolbar = scrollTop < 30;
	}
	}
}
