import { Injectable } from '@angular/core';


@Injectable()
export class DetailedRepository {

  async renderDetailed() {
    const response = await fetch('http://188.225.75.102:1337/api/detaileds?populate=*');
    const respData = await response.json();
    const { data } = respData;
    return data;
  }
}