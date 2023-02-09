import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor() { }

  async renderStaff() {
    const responseStaff = await fetch('http://188.225.75.102:1337/api/staffs?populate=*&locale=ru&sort[0]=updatedAt%3Aasc%3Adesc');
    const respDataStaff = await responseStaff.json();
    const { data } = respDataStaff;
    return data;
  }
  async renderStaff_en() {
    const responseStaff = await fetch('http://188.225.75.102:1337/api/staffs?populate=*&locale=en&sort[0]=updatedAt%3Aasc%3Adesc');
    const respDataStaff = await responseStaff.json();
    const { data } = respDataStaff;
    return data;
  }
  async renderStaff_ch() {
    const responseStaff = await fetch('http://188.225.75.102:1337/api/staffs?populate=*&locale=zh&sort[0]=updatedAt%3Aasc%3Adesc');
    const respDataStaff = await responseStaff.json();
    const { data } = respDataStaff;
    return data;
  }

  async renderName() {
    const responseName = await fetch('http://188.225.75.102:1337/api/names?populate=*&locale=ru');
    const respDataName = await responseName.json();
    const { data } = respDataName;
    return data;
  }
  async renderName_en() {
    const responseName = await fetch('http://188.225.75.102:1337/api/names?populate=*&locale=en');
    const respDataName = await responseName.json();
    const { data } = respDataName;
    return data;
  }
  async renderName_ch() {
    const responseName = await fetch('http://188.225.75.102:1337/api/names?populate=*&locale=zh');
    const respDataName = await responseName.json();
    const { data } = respDataName;
    return data;
  }

  async renderAssortment() {
    const responseAssortment = await fetch('http://188.225.75.102:1337/api/assortiments?populate=*&locale=ru&sort[0]=updatedAt%3Aasc%3Adesc');
    const respDataAssortment = await responseAssortment.json();
    const { data } = respDataAssortment;
    return data;
  }
  async renderAssortment_en() {
    const responseAssortment = await fetch('http://188.225.75.102:1337/api/assortiments?populate=*&locale=en&sort[0]=updatedAt%3Aasc%3Adesc');
    const respDataAssortment = await responseAssortment.json();
    const { data } = respDataAssortment;
    return data;
  }
  async renderAssortment_ch() {
    const responseAssortment = await fetch('http://188.225.75.102:1337/api/assortiments?populate=*&locale=zh&sort[0]=updatedAt%3Aasc%3Adesc');
    const respDataAssortment = await responseAssortment.json();
    const { data } = respDataAssortment;
    return data;
  }

  async renderDetailed() {
    const response = await fetch('http://188.225.75.102:1337/api/detaileds?populate=*&locale=ru&sort[0]=updatedAt%3Aasc%3Adesc');
    const respData = await response.json();
    const { data } = respData;
    return data;
  }

  async renderDetailed_en() {
    const response = await fetch('http://188.225.75.102:1337/api/detaileds?populate=*&locale=en&sort[0]=updatedAt%3Aasc%3Adesc');
    const respData = await response.json();
    const { data } = respData;
    return data;
  }
  async renderDetailed_ch() {
    const response = await fetch('http://188.225.75.102:1337/api/detaileds?populate=*&locale=zh&sort[0]=updatedAt%3Aasc%3Adesc');
    const respData = await response.json();
    const { data } = respData;
    return data;
  }

  async renderCard() {
    const response = await fetch('http://188.225.75.102:1337/api/news-cards?populate=*&locale=ru&sort[0]=updatedAt%3Aasc%3Adesc');
    const respData = await response.json();
    const { data } = respData;
    return data;
  }
  async renderCard_en() {
    const response = await fetch('http://188.225.75.102:1337/api/news-cards?populate=*&locale=en&sort[0]=updatedAt%3Aasc%3Adesc');
    const respData = await response.json();
    const { data } = respData;
    return data;
  }
  async renderCard_ch() {
    const response = await fetch('http://188.225.75.102:1337/api/news-cards?populate=*&locale=zh&sort[0]=updatedAt%3Aasc%3Adesc');
    const respData = await response.json();
    const { data } = respData;
    return data;
  }
}

