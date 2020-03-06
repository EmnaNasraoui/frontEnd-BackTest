import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user;
  constructor(private http: HttpClient, private cookieService: CookieService) {
    if (this.isLoggedIn()) {
      this.user = this.getUser();
    }

  }
  registerUser(user) {
    return this.http.post('http://localhost:3000/auth/register', user);
  }
  loginrUser(user) {
    return this.http.post('http://localhost:3000/auth/login', user);
  }
  isLoggedIn() {
    return this.cookieService.check('token');
  }
  getUser() {
    const helper = new JwtHelperService();
    return helper.decodeToken(this.cookieService.get('token')).data;
  }
  setToken(token, isRemembered) {
    this.cookieService.set('token', token, 0);
    this.user = this.getUser();
  }


}
