import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {UserInfoService} from '../services/user-info.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

    data: any[];
    marker = {
        lat: 0,
        lng: 0
    };
    workLabel = './assets/icons/label.png';

    constructor(db: AngularFireDatabase, public userService: UserInfoService) {
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
        this.userService.addData(user);
    }

    ngOnInit() {
        this.getCurrentLocation();
    }


}
