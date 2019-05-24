import { Component, OnInit,Output,EventEmitter} from '@angular/core';
import {SharedService} from '../services/shared.service';
import { Subject, Observable,Subscription } from 'rxjs';
import {Router} from '@angular/router'

@Component({
  selector: 'app-minicart',
  templateUrl: './minicart.component.html',
  styleUrls: ['./minicart.component.css']
})
export class MinicartComponent implements OnInit {

// @Output() gotocheckout =new EventEmitter();
  subscription: Subscription;
  cartObject={
    list:[],
    totalAmount:0
  }
  isOpen=false;

  constructor(public sharedService:SharedService,public router:Router) { 
    this.subscription = this.sharedService.getList().subscribe(list => { 
      // document.getElementById("PPMiniCart").style.display="block";
      // localStorage.removeItem("cart-details");
      // console.log(list)

      this.cartObject.list=list.map(a=>{
        if(!a.NET_QTY)
        {
          a.NET_QTY=a.QTY;
        }
        if(!a.NET_AMOUNT){
          a.NET_AMOUNT=a.NETPRICE;
        }
      
       
        return a;
      })
      this.cartObject.totalAmount= this.cartObject.list.reduce((a,b)=> a + (b["NET_AMOUNT"] || 0), 0)
     
      this.sharedService.isMinicartOpen=true;
    
      localStorage.setItem("cart-details",JSON.stringify(this.cartObject));

    
    });

  }

  ngOnInit() {


  }
  qtyChange(index,event){
    localStorage.removeItem("cart-details");
    this.cartObject.list[index].NET_QTY=event;
    this.cartObject.list[index].NET_AMOUNT= this.cartObject.list[index].NET_QTY*this.cartObject.list[index].NETPRICE;
    this.cartObject.totalAmount=  this.cartObject.list.reduce((a,b)=> a + (b["NET_AMOUNT"] || 0), 0)
    localStorage.setItem("cart-details",JSON.stringify(this.cartObject));
  }
  remove(index){
    localStorage.removeItem("cart-details");
    if(this.cartObject.list.length>1){
      this.cartObject.list.splice(index,1);
      this.cartObject.totalAmount=  this.cartObject.list.reduce((a,b)=> a + (b["NET_AMOUNT"] || 0), 0)
      localStorage.setItem("cart-details",JSON.stringify(this.cartObject));

    }else{
      if(this.cartObject.list.length==0){
        this.cartObject=null;
      }
    }
   
  }
  checkout(){

    this.sharedService.checkoutObject=this.cartObject;
    this.sharedService.isMinicartOpen=false;
    // this.gotocheckout.emit("true");
    localStorage.setItem("cart-details",JSON.stringify(this.cartObject));

    this.router.navigateByUrl("/checkout")

    }



}
