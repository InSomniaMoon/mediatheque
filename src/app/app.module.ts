import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PretsService } from './services/prets.service';
import { SettingsPage } from './pages/SettingsPage/SettingsPage.page';

@NgModule({
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PretsService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  declarations: [
    AppComponent
    ],
  bootstrap: [AppComponent]
})
export class AppModule {}
