import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {MapComponent} from './map/map.component';
import {environment} from '../environments/environment';
import {AuthService} from './services/auth.service';

import {AgmCoreModule} from '@agm/core';
import {AgmSnazzyInfoWindowModule} from '@agm/snazzy-info-window';

import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';

import {MatCardModule, MatButtonModule, MatIconModule, MatInputModule} from '@angular/material';





@NgModule({
    declarations: [
        AppComponent,
        MapComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDUwlWB9Er-VPvtmNPD4h05GPUW840ngJ4'
        }),
        AgmSnazzyInfoWindowModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule
    ],
    providers: [AuthService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
