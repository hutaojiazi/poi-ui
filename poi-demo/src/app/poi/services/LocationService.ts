import {Subject} from "rxjs/internal/Subject";
import {HttpClient} from '@angular/common/http';
import {Injectable} from "@angular/core";

@Injectable()
export class LocationService {
    private locationsUrl = "/api/locations";
}