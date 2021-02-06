import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Location, LocationReview } from '../models/location.model';
import { User } from '../models/user.model';
import { AuthResponse } from '../models/authresponse.model';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private registerUrl = "/api/users";
    private loginUrl = "/api/users/validate";

    constructor(private http: HttpClient) {
    }

    private handleError(error: any): Promise<any> {
        console.error('Something has gone wrong', error);
        return Promise.reject(error.message || error);
    }

    public login(user: User): Promise<AuthResponse> {
        return this.http
            .post(this.loginUrl, user)
            .toPromise()
            .then(response => response as AuthResponse)
            .catch(this.handleError);
      }
    
    public register(user: User): Promise<AuthResponse> {
        return this.http
            .post(this.registerUrl, user)
            .toPromise()
            .then(response => response as AuthResponse)
            .catch(this.handleError);
    }
}