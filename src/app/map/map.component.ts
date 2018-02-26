import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

    email: string;
    password: string;
    marker = {
        lat: 0,
        lng: 0
    };
    workLabel = './assets/icons/label.png';
    authModalIsVisible = false;
    emailFormControl = new FormControl('', [
        Validators.email
    ]);

    constructor(public authService: AuthService) {}

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

    authModalToggle() {
        this.authModalIsVisible = !this.authModalIsVisible;
    }

    signup() {
        this.authService.signup(this.email, this.password);
        this.email = this.password = '';
    }

    login() {
        this.authService.login(this.email, this.password);
        this.email = this.password = '';
    }

    logout() {
        this.authService.logout();
    }

    ngOnInit() {
        this.getCurrentLocation();
    }


}
