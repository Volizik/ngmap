import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: any[];
  marker = {
    lat: 0,
    lng: 0
  };
  constructor(db: AngularFireDatabase) {
  db.list('/users').valueChanges()
      .subscribe(data => {
        this.data = data;
          console.log(this.data);
      });

  }
  workLabel = './assets/icons/label.png';
  getCurrentLocation() {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((response) => {
              this.setPosition(response);
          }, function () {
              alert('Unable to get the GPS location');
          }, { maximumAge: 60000, timeout: 5000, enableHighAccuracy: true });
      }
  }
  setPosition(position: Position) {
      this.marker.lat = position.coords.latitude;
      this.marker.lng = position.coords.longitude;
  }
    placeMarker(event) {
      console.log(event.coords  );
    }
  ngOnInit() {
      this.getCurrentLocation();
  }
}
