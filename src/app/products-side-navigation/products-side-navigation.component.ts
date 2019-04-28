import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-side-navigation',
  templateUrl: './products-side-navigation.component.html',
  styleUrls: ['./products-side-navigation.component.css']
})
export class ProductsSideNavigationComponent implements OnInit {

  public navList:any;
  constructor() { }

  ngOnInit() {

    this.navList = [{
      name: "Branded Foods",
      url: "branded",
    },
    {
      name: "Households",
      url: "huseholds",

    },
    {
      name: "Veggies & Fruits",
      submenu: [{
        name: "Vegetables",
        url: "vegies",
      },
      {
        name: "Fruits",
        url: "fruits",
      }]

    }]
  }

}
