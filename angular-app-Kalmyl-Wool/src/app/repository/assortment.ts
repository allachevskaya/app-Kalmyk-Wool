import { Injectable } from '@angular/core';


@Injectable()
export class AssortmentRepository {

  async renderAssortment() {
    const responseAssortment = await fetch('http://188.225.75.102:1337/api/assortiments?populate=*');
    const respDataAssortment = await responseAssortment.json();
    const { data } = respDataAssortment;
    return data;
  }
}