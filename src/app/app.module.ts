import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { MapComponent } from './map/map.component';
import { MainComponent } from './main/main.component';
import { CabOwnerComponent } from './cab-owner/cab-owner.component';
import { CabUserComponent } from './cab-user/cab-user.component';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

const appRoutes: Routes = [
    { path: '', component: MainComponent },
    { path: 'cab-owner/:id', component: CabOwnerComponent },
    { path: 'cab-user', component: CabUserComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MainComponent,
    CabOwnerComponent,
    CabUserComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyDUwlWB9Er-VPvtmNPD4h05GPUW840ngJ4'
    }),
    AgmSnazzyInfoWindowModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    RouterModule.forRoot(appRoutes),
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
