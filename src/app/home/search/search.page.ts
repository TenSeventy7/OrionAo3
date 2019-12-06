import { Component, OnInit } from '@angular/core';
import { ScrollDetail } from '@ionic/core';

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss']
})
export class ArionSearchTab implements OnInit {
 
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