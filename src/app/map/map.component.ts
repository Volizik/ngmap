import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

    @Output() outputData = new EventEmitter();
    data: any[];
    marker = {
        lat: 0,
        lng: 0
    };
    workLabel = './assets/icons/label.png';

    constructor(db: AngularFireDatabase) {
        db.list('/users').valueChanges()
            .subscribe(data => {
                this.data = data;
            });
    }

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

    showUserInfo(user) {
        this.outputData.emit(user);
    }


    ngOnInit() {
        this.getCurrentLocation();
    }


}
