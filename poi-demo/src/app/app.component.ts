import { Component } from '@angular/core';
import {LocationService} from "./poi/services/LocationService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LocationService]
})
export class AppComponent {
  title = 'poi-demo';
}
