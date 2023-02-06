


import { Component, OnInit } from '@angular/core';
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




export class AssortmentCardComponent implements OnInit {


  response: any;
  assortment: DataAssortment[] | null = null;
  imgUrl?: string;

  constructor(private assortmentRepo: AssortmentRepository) { }

  ngOnInit(): void {

    this.fetchAssortment();
    this.imgUrl = 'http://188.225.75.102:1337';
    

  }


  private async fetchAssortment() {
    this.assortment = await this.assortmentRepo.renderAssortment();
    
  }




}