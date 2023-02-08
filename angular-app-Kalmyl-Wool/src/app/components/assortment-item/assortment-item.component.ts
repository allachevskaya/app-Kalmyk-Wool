import { Component, OnInit } from '@angular/core';
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
export class AssortmentItemComponent implements OnInit {

  response: any;
  flag?:boolean;
  titleBtn?:string;
  imgUrl?: string;
  assortmentDetailed: DataDetailed[] | null = null;


  constructor(private detailedRepo: GeneralService) { }

  ngOnInit(): void {
   
    this.fetchDetailed();
    this.imgUrl = 'http://188.225.75.102:1337';
    this.flag = true;
    this.titleBtn = 'Посмотреть больше';
  }

  private async fetchDetailed() {
    this.assortmentDetailed = await this.detailedRepo.renderDetailed();
    
  }

 

  
  

  openIMG() {

    this.flag = !this.flag;

    if (this.flag === true) {
      this.titleBtn = 'Посмотреть больше';
    }
    else this.titleBtn = 'Посмотреть меньше';
  }
}
