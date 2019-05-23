import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient,HttpParams,HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public headers: any;
  public baseURl: any;

  constructor(public http: HttpClient) {
    this.baseURl = environment.apiUrl;
  }

  _getAllProducts() {
    const headers = new HttpHeaders()
            .set("Content-Type", "application/json");
    return this.http.get(this.baseURl + 'productlist/admin',{headers})

  } 
}
