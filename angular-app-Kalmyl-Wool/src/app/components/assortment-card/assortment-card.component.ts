


import { Component, Input, OnInit } from '@angular/core';
import { AssortmentRepository } from 'src/app/repository/assortment';


interface Assortment {

  image: any;
  title: string;
  description: string;

}

interface DataAssortment {
  id: number;
  attributes: Assortment;
}

@Component({
  selector: 'app-assortment-card',
  templateUrl: './assortment-card.component.html',
  styleUrls: ['./assortment-card.component.scss']
})




export class AssortmentCardComponent {


  response: any;
  assortment: DataAssortment[] | null = null;
  imgUrl?: string;

  constructor(private assortmentRepo: AssortmentRepository) { }


  ngOnInit(): void {

    this.fetchUser();
    this.imgUrl = 'http://188.225.75.102:1337';
    

  }


  private async fetchUser() {
    this.assortment = await this.assortmentRepo.random();
    
  }




}