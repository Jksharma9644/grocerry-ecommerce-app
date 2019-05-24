import { Component, OnInit } from '@angular/core';
import {SharedService} from '../services/shared.service';
@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.css']
})
export class TopHeaderComponent implements OnInit {

  constructor(public sharedService:SharedService) { }

  ngOnInit() {
  }

}
