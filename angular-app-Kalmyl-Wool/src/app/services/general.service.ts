import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  api = 'https://admin.kalmykwool.com';
  //https://admin.kalmykwool.com/api/news-cards?populate=*&locale=ru&sort[0]=date%3Adesc

  constructor() { }

  async renderStaff() {
    const responseStaff = await fetch(this.api +'/api/staffs?populate=*&locale=ru&sort[0]=updatedAt%3Aasc');
    const respDataStaff = await responseStaff.json();
    const { data } = respDataStaff;
    return data;
  }
  async renderStaff_en() {
    const responseStaff = await fetch(this.api + '/api/staffs?populate=*&locale=en&sort[0]=updatedAt%3Aasc');
    const respDataStaff = await responseStaff.json();
    const { data } = respDataStaff;
    return data;
  }
  async renderStaff_ch() {
    const responseStaff = await fetch(this.api + '/api/staffs?populate=*&locale=zh&sort[0]=updatedAt%3Aasc');
    const respDataStaff = await responseStaff.json();
    const { data } = respDataStaff;
    return data;
  }

  async renderName() {
    const responseName = await fetch( this.api +'/api/names?populate=*&locale=ru');
    const respDataName = await responseName.json();
    const { data } = respDataName;
    return data;
  }
  async renderName_en() {
    const responseName = await fetch( this.api +'/api/names?populate=*&locale=en');
    const respDataName = await responseName.json();
    const { data } = respDataName;
    return data;
  }
  async renderName_ch() {
    const responseName = await fetch(this.api + '/api/names?populate=*&locale=zh');
    const respDataName = await responseName.json();
    const { data } = respDataName;
    return data;
  }

  async renderAssortment() {
    const responseAssortment = await fetch(this.api + '/api/assortiments?populate=*&locale=ru&sort[0]=updatedAt%3Aasc');
    const respDataAssortment = await responseAssortment.json();
    const { data } = respDataAssortment;
    return data;
  }
  async renderAssortment_en() {
    const responseAssortment = await fetch(this.api +'/api/assortiments?populate=*&locale=en&sort[0]=updatedAt%3Aasc');
    const respDataAssortment = await responseAssortment.json();
    const { data } = respDataAssortment;
    return data;
  }
  async renderAssortment_ch() {
    const responseAssortment = await fetch(this.api +'/api/assortiments?populate=*&locale=zh&sort[0]=updatedAt%3Aasc');
    const respDataAssortment = await responseAssortment.json();
    const { data } = respDataAssortment;
    return data;
  }

  async renderDetailed() {
    const response = await fetch(this.api +'/api/detaileds?populate=*&locale=ru&sort[0]=updatedAt%3Aasc');
    // const response = await fetch ('pagination[page]=1&pagination[pageSize]=10')
    const respData = await response.json();
    const { data } = respData;
    return data;
  }

  async renderDetailed_en() {
    const response = await fetch(this.api +'/api/detaileds?populate=*&locale=en&sort[0]=updatedAt%3Aasc');
    const respData = await response.json();
    const { data } = respData;
    return data;
  }
  async renderDetailed_ch() {
    const response = await fetch(this.api +'/api/detaileds?populate=*&locale=zh&sort[0]=updatedAt%3Aasc');
    const respData = await response.json();
    const { data } = respData;
    return data;
  }

  async renderCard() {
    const response = await fetch(this.api +'/api/news-cards?populate=*&locale=ru&sort[0]=date%3Adesc');///////////
    const respData = await response.json();
    const { data } = respData;
    return data;
  }
  async renderCard_en() {
    const response = await fetch(this.api +'/api/news-cards?populate=*&locale=en&sort[0]=date%3Adesc');
    const respData = await response.json();
    const { data } = respData;
    return data;
  }
  async renderCard_ch() {
    const response = await fetch(this.api +'/api/news-cards?populate=*&locale=zh&sort[0]=date%3Adesc');
    const respData = await response.json();
    const { data } = respData;
    return data;
  }
}

