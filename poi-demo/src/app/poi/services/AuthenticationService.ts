import { Inject, Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { AuthResponse } from '../models/authresponse.model';
import { UserService } from './UserService';
import * as jwt from 'jsonwebtoken'

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    constructor(private userService: UserService) {
    }

    public getToken(): string {
        //return this.storage.getItem('heureux666-token');
        return "dummy";
      }
    
      public saveToken(token: string): void {
        //this.storage.setItem('heureux666-token', token);
      }

    public login(user: User): Promise<any> {
        return this.userService.login(user)
          .then((authResp: AuthResponse) => this.saveToken(authResp.token));
    }

    public register(user: User): Promise<any> {
        return this.userService.register(user)
          .then((authResp: AuthResponse) => this.saveToken(authResp.token));
    }

    public logout(): void {
        //this.storage.removeItem('heureux666-token');
    }

    public isLoggedIn(): boolean {
        const token: string = this.getToken();
        if (token) {
            //const payload = JSON.parse(atob(token.split('.')[1]));
            //return payload.exp > (Date.now() / 1000);
            return false;
        } else {
            return false;
        }
    }

    public getCurrentUser(): User {
        if (this.isLoggedIn()) {
            //const token: string = this.getToken();
            //const { email, name } = JSON.parse(atob(token.split('.')[1]));
            //return { email, name } as User;
            return null;
        }
    }

    public generateJwt(user: User): any {
        const expiry = new Date();
        expiry.setDate(expiry.getDate() + 7);
        return jwt.sign({
            email: user.email,
            name: user.name,
            exp: parseInt((expiry.getTime() / 1000).toString(), 10),
        }, "process.env.JWT_SECRET");
    }
}