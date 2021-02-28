import { Component } from '@angular/core';
import {LocationService} from "./poi/services/LocationService";
import {ProductService} from "./poi/services/ProductService";
import {UserService} from "./poi/services/UserService";
import {AuthenticationService} from "./poi/services/AuthenticationService";
import {HistoryService} from "./poi/services/HistoryService";
import {GeolocationService} from "./poi/services/GeolocationService";
import {ChatService} from "./poi/services/ChatService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LocationService, ProductService, UserService, AuthenticationService, HistoryService, GeolocationService, ChatService]
})
export class AppComponent {
  title = 'poi-demo';
}
