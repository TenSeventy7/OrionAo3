import { Component, OnInit } from '@angular/core';
import { defaultTheme, darkTheme } from '../../../providers/theme-switcher.service';
import { ToggleThemes } from 'ionic-angular-theme-switch';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public themes: ToggleThemes = {
    default: {},
    alternative: darkTheme
  };
}
