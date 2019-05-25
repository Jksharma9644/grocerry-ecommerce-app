import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import { Router,NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-emailverification',
  templateUrl: './emailverification.component.html',
  styleUrls: ['./emailverification.component.css']
})
export class EmailverificationComponent implements OnInit {
  public currentUrl:any;
  loginenabled:any=null;
  public message:any="please wait while we getting verification status...";

  constructor(public authService:AuthService,public router:Router) { 
    this.router.events.subscribe((res) => { 
      this.currentUrl=this.router.url.split("/")[3];
      console.log(this.currentUrl,"Current URL");
     });
  }

  ngOnInit() {
    if( this.currentUrl){
      var req={
        token:this.currentUrl
      }
      this.authService.AuthenticateUrl(req).subscribe(res => {
       if(res["status"]){
         this.message=res["message"];
         this.loginenabled=true;
       }else{
        this.loginenabled=false;
       }
      })
    }
  }
  ngOnDestroy(){
    this.currentUrl=null;
    this.message="";
    
  }
  resend(){
    alert("resend");
  }

}
