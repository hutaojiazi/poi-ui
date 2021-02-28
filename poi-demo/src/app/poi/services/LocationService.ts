import {Subject} from "rxjs/internal/Subject";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable, Inject} from "@angular/core";
import { Locations } from "../models/locations.model";
import { Location, LocationReview } from "../models/location.model";
import { BROWSER_STORAGE } from '../storage/storage';

@Injectable()
export class LocationService {
    private locationsUrl = "/api/locations";

    constructor(
        private http: HttpClient,
        @Inject(BROWSER_STORAGE) private storage: Storage) {
    }

    getAllLocations(): Promise<Locations> {
        return this.http
            .get(this.locationsUrl)
            .toPromise()
            .then(response => response as Locations)
            .catch(this.handleError);
    }

    getLocationById(locationId: string): Promise<Location> {
        const url: string = `${this.locationsUrl}/${locationId}`;
        return this.http
            .get(url)
            .toPromise()
            .then(response => response as Location)
            .catch(this.handleError);
    }

    addReviewByLocationId(locationId: string, formData: LocationReview): Promise<LocationReview> {
        const url: string = `${this.locationsUrl}/${locationId}/reviews`;
        const httpOptions = {
          headers: new HttpHeaders({
            'Authorization': `Bearer ${this.storage.getItem('heureux666-token')}`
          })
        };
        return this.http
          .post(url, formData, httpOptions)
          .toPromise()
          .then(response => response as LocationReview)
          .catch(this.handleError);
      }

    private handleError(error: any): Promise<any> {
        console.error('Something has gone wrong', error);
        return Promise.reject(error.message || error);
    }
}