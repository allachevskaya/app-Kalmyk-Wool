import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';


interface Detailed {

  title: string;
  img: any;
  Brand: string;
  PlaceOfOrigin: string;
  Weight: string;
  UnitType: string;
  FOBPrice: string;
  MOQ: string;
  ProcessingTime: string;
  Port: string;
  PackagingDetails: string;
  Amount: string; 
  Unit: string; 
  Time: string; 

}

interface DataDetailed {
  id: number;
  attributes: Detailed;
}



@Component({
  selector: 'app-assortment-item',
  templateUrl: './assortment-item.component.html',
  styleUrls: ['./assortment-item.component.scss']
})
export class AssortmentItemComponent implements OnInit, OnChanges {

  response: any;
  flag?:boolean;
  titleBtn?:string;
  imgUrl?: string;
  assortmentDetailed: DataDetailed[] | null = null;


  @Input() currentLang = localStorage.getItem('lang'); // тут мы получили язык от родительского класса (assortiment detailed component)


  constructor(private detailedRepo: GeneralService) { }

  // ngOnInit(): void {
   
   
  //   this.imgUrl = 'http://188.225.75.102:1337';
  //   this.flag = true;
  //   this.titleBtn = 'Посмотреть больше';
  // }
  // ngOnChanges(changes: SimpleChanges): void {
  //   this.fetchDetailed();
  // }
  ngOnChanges(changes: SimpleChanges): void {
    this.fetchDetailed();
  }

  ngOnInit(): void {
    this.imgUrl = 'http://188.225.75.102:1337';


    localStorage.getItem('lang')
    // console.log( localStorage.getItem('lang'))

  }

  private async fetchDetailed() {
    
    if (this.currentLang == 'en') {
      this.assortmentDetailed = await this.detailedRepo.renderDetailed_en();
    } else if (this.currentLang == 'ch') {
      this.assortmentDetailed = await this.detailedRepo.renderDetailed_ch();
    }
    else {
      this.assortmentDetailed = await this.detailedRepo.renderDetailed();
    }
    
  }

  openIMG() {

    this.flag = !this.flag;

    // if (this.flag === true) {
    //   this.titleBtn = 'Посмотреть больше';
    // }
    // else this.titleBtn = 'Посмотреть меньше';
  }
}
