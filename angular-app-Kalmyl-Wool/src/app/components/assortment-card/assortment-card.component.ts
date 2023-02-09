


import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';


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




export class AssortmentCardComponent implements OnInit, OnChanges {
  @Input() currentLang = ''; // тут мы получили язык от родительского класса (assortiment component)

  response: any;
  assortment: DataAssortment[] | null = null;
  imgUrl?: string;

  constructor(private assortmentRepo: GeneralService) { }


  ngOnChanges(changes: SimpleChanges): void {
    this.fetchAssortment();
  }

  ngOnInit(): void {
    this.imgUrl = 'http://188.225.75.102:1337';
  }


  private async fetchAssortment() {

    if (this.currentLang == 'en') {
      this.assortment = await this.assortmentRepo.renderAssortment_en();
    } else if (this.currentLang == 'ch') {
      this.assortment = await this.assortmentRepo.renderAssortment_ch();
    }
    else {
      this.assortment = await this.assortmentRepo.renderAssortment();
    }
  }




}