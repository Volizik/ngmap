import { Injectable } from '@angular/core';

@Injectable()
export class UserInfoService {

  data;

  constructor() {}

  addData(data) {
    this.data = data;
  }

  getData() {
    return this.data;
  }

}
