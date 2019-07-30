import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { SharedService} from '../services/shared.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-mainscreen',
  templateUrl: './mainscreen.component.html',
  styleUrls: ['./mainscreen.component.css']
})
export class MainscreenComponent implements OnInit {

  constructor(private productService: ProductService,public sharedService:SharedService,public router:Router) { }

  productList = [];
  cartList=[];


  ngOnInit() {
    this.getAllProductList();
  }


  getAllProductList() {
    this.productService._getAllProducts().subscribe(res => {

      if (res["status"]) {
        var product = res["data"];
        this.productList = product.map(a => {
          if (a.images) {
            if (a.images.length > 0) {
              a.imageurl = a.images[0].url
            }

            else {
              a.imageurl = "https://firebasestorage.googleapis.com/v0/b/oms-auat.appspot.com/o/uploads%2Fno-product-image.png?alt=media&token=60ee4be2-1f93-441d-baf4-f0f47f559d32";

            }
          }
          else {
            a.imageurl = "https://firebasestorage.googleapis.com/v0/b/oms-auat.appspot.com/o/uploads%2Fno-product-image.png?alt=media&token=60ee4be2-1f93-441d-baf4-f0f47f559d32";
          }
          return a;
        })
        // console.log(this.productList);

      }
    })

  }
  addToCart(item){
   var list =  sessionStorage.getItem("cart-details")
   if(list!=null){
     var cartdetails=JSON.parse(list);
     this.cartList=cartdetails.list;
   }else{
    this.cartList=[];
   }
    var index=this.cartList.findIndex(a=>a.PRODUCT_ID==item.PRODUCT_ID);
    if(index==-1){
      this.cartList.push(item);
      var object={
        list: this.cartList,
        totalAmount:item.NETPRICE
      }
      // this.cartList.push(object);

      // console.log(   this.cartList);
      // this.router.navigate["/checkout"]
      this.sharedService.senrefreshCardList( object.list);
      sessionStorage.setItem("cart-details",JSON.stringify(object));

    }else{
      alert("item already in cart")
    }
   
  
  }
}
