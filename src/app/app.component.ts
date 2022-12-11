import { Component, OnInit, ViewChild } from '@angular/core';
import { MapGeocoder } from '@angular/google-maps';
import { DataDTO } from './models/dataDTO';
import { GooglemapsService } from './services/googlemaps.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isTracking!: boolean;
  currentLat: any;
  currentLong: any;
  currentTime: any;
  map: any;
  marker: any;
  externalDiv: any;
  dataObject: DataDTO;
  datas: any = [];
  showInfo: boolean = false;
  clearId: any;
  constructor(public googlemapsService: GooglemapsService) {
    this.dataObject = new DataDTO( 1, 1, new Date);
}
ngOnInit(): void {}
trackMe() {
  if (navigator.geolocation) {
    this.isTracking = true;
    this.clearId = navigator.geolocation.watchPosition((position) => {
      this.showTrackingPosition(position);
    }, error => {
      console.log(error), {
        enableHighAccuracy: true
      }
    });
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}
showTrackingPosition(position: GeolocationPosition) {
  this.showInfo = true;
  console.log(`tracking postion:  ${position.coords.latitude} , ${position.coords.longitude}, ${new Date()}`);
  this.currentLat = position.coords.latitude;
  this.currentLong = position.coords.longitude;
  this.currentTime = new Date();

/*   let location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 */
  this.dataObject.latitude = position.coords.latitude;
  this.dataObject.longitude = position.coords.longitude;
  this.dataObject.created_at = new Date();

  this.datas.push({latitude: position.coords.latitude, longitude: position.coords.longitude, created_at: new Date()})
console.log(this.datas)
 /*   this.googlemapsService.storeData(this.dataObject).subscribe(() => {
    console.log('Se ha creado correctamente')
    console.log(this.dataObject)
    this.showInfo = true;
  },
  (error) => {
    console.log(error.error);
  });  */
}
stop() {
  navigator.geolocation.clearWatch(this.clearId);
  console.log('Stopped tracking successfully')
}
}