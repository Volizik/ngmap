import { Component, OnInit } from '@angular/core';
import {UserInfoService} from '../services/user-info.service';

@Component({
  selector: 'app-cab-owner',
  templateUrl: './cab-owner.component.html',
  styleUrls: ['./cab-owner.component.css']
})
export class CabOwnerComponent implements OnInit {

  user;
  constructor(infoService: UserInfoService) {
      this.user = infoService.getData();
  }

  ngOnInit() {}

}
