import { Component, OnInit } from '@angular/core';
import { ScrollDetail } from '@ionic/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
	hideToolbar = true;

  constructor() { }

  ngOnInit() {
  }

	onScroll($event: CustomEvent<ScrollDetail>) {
	if ($event && $event.detail && $event.detail.scrollTop) {
	const scrollTop = $event.detail.scrollTop;
	this.hideToolbar = scrollTop < 30;
	}
}
}
