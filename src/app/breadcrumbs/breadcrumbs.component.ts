import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Route,Router} from '@angular/router'


@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {
  breadcrumbs$ :any;


  constructor(public currentRoute:ActivatedRoute,public router:Router) { 
    this.router.events.subscribe((router:any)=>{
             console.log(router)
    })

  }

  ngOnInit() {
  }

}
