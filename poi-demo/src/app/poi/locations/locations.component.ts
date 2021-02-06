import { Component, OnInit } from '@angular/core';
import {LocationService} from "../services/LocationService";
import { GeolocationService } from '../services/GeolocationService';
import {Location} from "../models/location.model";
import {Locations} from "../models/locations.model";

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  constructor(
    private locationService: LocationService,
    private geoLocationService: GeolocationService) {
  }

  public locations: Location[];

  public message: string;

  ngOnInit(): void {
    //this.getPosition();
    this.getLocations({
      "coords": {
        "latitude": 73.56735,
        "longitude": 45.52155
      }
    });
  }

  public pageContent = {
    header: {
      title: 'Wonder Lands',
      strapline: 'Find places to work with wifi near you!'
    },
    sidebar: 'Looking for wifi and a seat? Wonder Lands helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you\'re looking for.'
  }

  private getPosition(): void {
    this.message = 'Getting your location...';
    this.geoLocationService.getPosition(
      this.getLocations.bind(this),
      this.showError.bind(this),
      this.noGeo.bind(this));
  }

  private getLocations(position: any): void {
    this.message = 'Searching for nearby places';
    const lat: number = position.coords.latitude;
    const lng: number = position.coords.longitude;
    console.log("lat->" + lat + ', lng->' + lng);
    this.locationService.getAllLocations()
        .then(
            (data: Locations) => {
              this.message = data.value.length > 0 ? '' : 'No locations found';
              this.locations = data.value;
            },
            (error) => console.log(error)
        );
  }

  private noGeo(): void {
    console.log("noGeo...");
    this.message = 'Geolocation not supported by this browser';
  }

  private showError(error: any): void {
    console.log("showError..." + error);
    this.message = error.message;
  }

}
