import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router, CanActivate } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public headers: any;
  public baseURl: any;
  public authenticatedUser: any = {
    user_id: "",
    token: "",
    name: "",
    email: "",
  };

  constructor(public jwtHelper: JwtHelperService, public http: HttpClient, private router: Router) {
    this.baseURl = environment.apiUrl;
  }




  isAuthenticated(): boolean {
    if (localStorage.getItem('token')) {
      // logged in so return true
      return true;
    }

    return false;


  }
  SignUpwithAPI(req) {
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json");
    return this.http.post(this.baseURl + 'auth/register', req, { headers })
  }

  LoginwithAPI(req) {
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json");
    return this.http.post(this.baseURl + 'auth/sign_in', req, { headers })

  }
  AuthenticateUrl(req) {
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json");
    return this.http.post(this.baseURl + 'auth/confirmation', req, { headers });
  }
  sendVerificationOTP(req) {
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json");
    return this.http.post(this.baseURl + 'auth/sendOTP', req, { headers });
  }

  verifyOTP(req) {
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json");
    return this.http.post(this.baseURl + 'auth/verifyOTP', req, { headers });
  }

  logout() {
    localStorage.removeItem("token");
  }

}
