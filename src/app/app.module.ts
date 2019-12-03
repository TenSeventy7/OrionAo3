import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { Toast } from '@ionic-native/toast/ngx';
import { HttpClientModule } from '@angular/common/http';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { defineCustomElements } from '@teamhive/lottie-player/loader';
import { IonicAngularThemeSwitchService, IonicAngularThemeSwitchToggleModule } from 'ionic-angular-theme-switch';
import { MaterialModule } from './modules/angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SuperTabsModule } from '@ionic-super-tabs/angular';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
  BrowserModule,
  MaterialModule,
  ReactiveFormsModule,
  SuperTabsModule.forRoot(),
  IonicStorageModule.forRoot(),
  IonicAngularThemeSwitchToggleModule.forRoot(),
  IonicModule.forRoot({
    mode: 'md'
  }), 
  AppRoutingModule,
  BrowserAnimationsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    IonicAngularThemeSwitchService,
    Toast,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AppModule {}

