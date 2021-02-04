import { Component, OnInit } from '@angular/core';
import {LocationService} from "../services/LocationService";
import {Location} from "../models/location.model";
import {Locations} from "../models/locations.model";

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  locations: Location[] = [];

  constructor(private locationService: LocationService) {
  }

  ngOnInit(): void {
    this.loadLocations();
  }

  loadLocations() {
    this.locationService.getAllLocations()
        .subscribe(
            (data: Locations) => {
                this.locations = data.value;
            },
            (error) => console.log(error)
        );
  }

  reset() {
    this.loadLocations();
  }

}
