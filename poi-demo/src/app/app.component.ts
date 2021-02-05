import { Component } from '@angular/core';
import {LocationService} from "./poi/services/LocationService";
import {UserService} from "./poi/services/UserService";
import {AuthenticationService} from "./poi/services/AuthenticationService";
import {HistoryService} from "./poi/services/HistoryService";
import {GeolocationService} from "./poi/services/GeolocationService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LocationService, UserService, AuthenticationService, HistoryService, GeolocationService]
})
export class AppComponent {
  title = 'poi-demo';
}
