import { Component, OnInit } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { e } from '@angular/core/src/render3';

@Component({
  selector: 'page-set-coordinates',
  templateUrl: 'set-coordinates.html',
})
export class SetCoordinatesPage implements OnInit {

  latitude: number;
  longitude: number;
  marker: {
    latitude: number,
    longitude: number,
    draggable: true
  };

  constructor(private viewCtrl: ViewController, private navParams: NavParams) {
  }

  ngOnInit() {
    let receivedLatitude = this.navParams.get('latitude');
    let receivedLongitude = this.navParams.get('longitude');
    if (receivedLatitude) {
      this.latitude = receivedLatitude;
      this.longitude = receivedLongitude;
      this.marker = {
        latitude: receivedLatitude,
        longitude: receivedLongitude,
        draggable: true
      }
    } else {
      this.latitude = 5.434182; //57.28, -2.58
      this.longitude = -4.022306;
    }
  }

  onMapClicked($event) {
    this.marker = {
      latitude: $event.coords.lat,
      longitude: $event.coords.long,
      draggable: true
    }
  }

  onSave() {
    this.viewCtrl.dismiss({
      latitude: this.marker.latitude,
      longitude: this.marker.longitude
    });
  }

  onCancel() {
    this.viewCtrl.dismiss();
  }
}
