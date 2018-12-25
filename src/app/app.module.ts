import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { NatureViewService } from './../services/natureView.service';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NewViewPage } from '../pages/new-view/new-view';
import { SingleViewPage } from '../pages/single-view/single-view';
import { SetCoordinatesPage } from '../pages/set-coordinates/set-coordinates';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewViewPage,
    SingleViewPage,
    SetCoordinatesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewViewPage,
    SingleViewPage,
    SetCoordinatesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NatureViewService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
