import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
@Component({
  selector: 'app-checkoutpage',
  templateUrl: './checkoutpage.component.html',
  styleUrls: ['./checkoutpage.component.css'],
  providers: [SharedService]
})
export class CheckoutpageComponent implements OnInit {

  checkoutObject: any;

  constructor(public sharedService: SharedService) { }

  ngOnInit() {
    var cartDetails = localStorage.getItem("cart-details");

    if (this.sharedService.checkoutObject != null) {
      this.checkoutObject = this.sharedService.checkoutObject;
    } else {
      if (cartDetails) {
        this.checkoutObject = JSON.parse(cartDetails)
      }
    }
    console.log(this.checkoutObject)
  }

  remove(index) {
    localStorage.removeItem("cart-details")

    if (this.checkoutObject.list.length > 1) {
      this.checkoutObject.list.splice(index, 1);
      this.checkoutObject.totalAmount = this.checkoutObject.list.reduce((a, b) => a + (b["NET_AMOUNT"] || 0), 0)
      localStorage.setItem("cart-details", JSON.stringify(this.checkoutObject));

    } else {
      if (this.checkoutObject.list.length == 0) {
        this.checkoutObject = null;
      }

    }
    this.checkoutObject.totalAmount=  this.checkoutObject.list.reduce((a,b)=> a + (b["NET_AMOUNT"] || 0), 0)
    localStorage.setItem("cart-details",JSON.stringify(this.checkoutObject))


  }
  deQty(index) {
    localStorage.removeItem("cart-details")
    if (this.checkoutObject.list[index].NET_QTY > 1)
      this.checkoutObject.list[index].NET_QTY -= 1
    else
      this.checkoutObject.list[index].NET_QTY = 0;
    this.checkoutObject.list[index].NET_AMOUNT = this.checkoutObject.list[index].NET_QTY * this.checkoutObject.list[index].NETPRICE;
    this.checkoutObject.totalAmount=  this.checkoutObject.list.reduce((a,b)=> a + (b["NET_AMOUNT"] || 0), 0)

    localStorage.setItem("cart-details",JSON.stringify(this.checkoutObject))

  }
  inQty(index) {
    localStorage.removeItem("cart-details")
    this.checkoutObject.list[index].NET_QTY += 1
    this.checkoutObject.list[index].NET_AMOUNT = this.checkoutObject.list[index].NET_QTY * this.checkoutObject.list[index].NETPRICE;
    this.checkoutObject.totalAmount=  this.checkoutObject.list.reduce((a,b)=> a + (b["NET_AMOUNT"] || 0), 0)

    localStorage.setItem("cart-details",JSON.stringify(this.checkoutObject))

  }
}
