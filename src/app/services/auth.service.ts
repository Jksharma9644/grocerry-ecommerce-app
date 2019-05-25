import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public headers: any;
  public baseURl: any;

  constructor(public jwtHelper: JwtHelperService, public http: HttpClient) {
    this.baseURl = environment.apiUrl;
  }



  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');

    return !this.jwtHelper.isTokenExpired(token);

  }
  SignUpwithAPI(req) {
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json");
    return this.http.post(this.baseURl + 'auth/register',req, { headers })
  }

  LoginwithAPI(req) {
    const headers = new HttpHeaders()
    .set("Content-Type", "application/json");
    return this.http.post(this.baseURl + 'auth/sign_in', req, { headers })

  }
  AuthenticateUrl(req) {
    const headers = new HttpHeaders()
    .set("Content-Type", "application/json");
    return this.http.post(this.baseURl + 'auth/confirmation',req, { headers });
  }

  logout(){

  }

}
