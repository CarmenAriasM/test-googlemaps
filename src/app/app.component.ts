import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  map: any;
  marker: any;
  externalDiv: any;
  datas: any = [];
  showInfo: boolean = false;
  clearId: any;
  constructor() {}
  ngOnInit(): void {}
  trackMe() {
    if (navigator.geolocation) {
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
    this.datas.push({latitude: position.coords.latitude, longitude: position.coords.longitude, created_at: new Date()})
    console.log(this.datas)
    const csvString = [
      [
        "Latitude",
        "Longitude",
        "Created_at"
      ],
      ...this.datas.map((item: { latitude: any; longitude: any; created_at: any; }) => [
        item.latitude,
        item.longitude,
        item.created_at
      ])
    ]
    .map(e => e.join(",")) 
    .join("\n");
  
    console.log(csvString);
  }
  stop() {
    navigator.geolocation.clearWatch(this.clearId);
    console.log('Stopped tracking successfully')
  }
}