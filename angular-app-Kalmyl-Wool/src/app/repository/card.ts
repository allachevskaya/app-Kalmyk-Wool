import { Injectable } from '@angular/core';


@Injectable()
export class CardRepository {

  async random() {
    const response = await fetch('http://188.225.75.102:1337/api/news-cards?populate=*');
    const respData = await response.json();
    const { data } = respData;
    return data;
  }
}