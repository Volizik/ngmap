import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cab-owner',
  templateUrl: './cab-owner.component.html',
  styleUrls: ['./cab-owner.component.css']
})
export class CabOwnerComponent implements OnInit {

  user;
  constructor() { }

  getUser(user) {
    this.user = user;
    console.log(user);
  }

  ngOnInit() {
  }

}
