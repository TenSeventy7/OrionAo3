import { Component, OnInit } from '@angular/core';
import { ScrollDetail } from '@ionic/core';

@Component({
  selector: 'app-discover',
  templateUrl: 'discover.page.html',
  styleUrls: ['discover.page.scss']
})
export class ArionDiscoverTab implements OnInit {
 
  constructor() { }
 
  ngOnInit() { }
 
	hideToolbar = true;
	onScroll($event: CustomEvent<ScrollDetail>) {
	if ($event && $event.detail && $event.detail.scrollTop) {
	const scrollTop = $event.detail.scrollTop;
	this.hideToolbar = scrollTop < 30;
	}
	}
}