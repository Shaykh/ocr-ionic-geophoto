import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { IonicStorageModule } from '@ionic/storage';

import { AgmCoreModule } from '@agm/core';

import { NatureViewService } from './../services/natureView.service';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NewViewPage } from '../pages/new-view/new-view';
import { SingleViewPage } from '../pages/single-view/single-view';
import { SetCoordinatesPage } from '../pages/set-coordinates/set-coordinates';
import { from } from 'rxjs/observable/from';

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
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
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
    Geolocation,
    Camera,
    File,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
