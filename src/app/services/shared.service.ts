import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private subject = new Subject<any>();


  constructor() { }
  checkoutObject:any;

  senrefreshCardList(list) {
    this.subject.next(list);
  }

  clearMessage() {
    this.subject.next();
  }

  getList(): Observable<any> {
    return this.subject.asObservable();
  }
}
