import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor() { }

  async renderStaff() {
    const responseStaff = await fetch('http://188.225.75.102:1337/api/staffs?populate=*');
    const respDataStaff = await responseStaff.json();
    const { data } = respDataStaff;
    return data;
  }

  async renderName() {
    const responseName = await fetch('http://188.225.75.102:1337/api/names?populate=*');
    const respDataName = await responseName.json();
    const { data } = respDataName;
    return data;
  }

  async renderAssortment() {
    const responseAssortment = await fetch('http://188.225.75.102:1337/api/assortiments?populate=*');
    const respDataAssortment = await responseAssortment.json();
    const { data } = respDataAssortment;
    return data;
  }

  async renderDetailed() {
    const response = await fetch('http://188.225.75.102:1337/api/detaileds?populate=*');
    const respData = await response.json();
    const { data } = respData;
    return data;
  }

  async random() {
    const response = await fetch('http://188.225.75.102:1337/api/news-cards?populate=*');
    const respData = await response.json();
    const { data } = respData;
    return data;
  }
}

