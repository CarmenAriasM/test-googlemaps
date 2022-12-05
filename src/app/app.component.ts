import { Component, OnInit, ViewChild } from '@angular/core';
import { MapGeocoder } from '@angular/google-maps';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isTracking!: boolean;
  currentLat: any;
  currentLong: any;
  map: any;
  marker: any;
  constructor() {

}
ngOnInit(): void {}
findMe() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      this.showPosition(position);
    });
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}
trackMe() {
  if (navigator.geolocation) {
    this.isTracking = true;
    navigator.geolocation.watchPosition((position) => {
      this.showTrackingPosition(position);
    });
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

showPosition(position: GeolocationPosition) {
  this.currentLat = position.coords.latitude;
  this.currentLong = position.coords.longitude;

  let location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

  if (!this.marker) {
    this.marker = new google.maps.Marker({
      position: location,
      map: this.map,
      title: 'Got you!'
    });
  }
  else {
    this.marker.setPosition(location);
  }
  console.log(location)
}
showTrackingPosition(position: GeolocationPosition) {
  console.log(`tracking postion:  ${position.coords.latitude} - ${position.coords.longitude}`);
  this.currentLat = position.coords.latitude;
  this.currentLong = position.coords.longitude;

  let location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

  if (!this.marker) {
    this.marker = new google.maps.Marker({
      position: location,
      map: this.map,
      title: 'Got you!'
    });
  }
  else {
    this.marker.setPosition(location);
  }
}
}