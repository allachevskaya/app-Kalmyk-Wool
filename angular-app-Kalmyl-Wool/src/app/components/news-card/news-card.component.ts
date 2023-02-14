import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';



interface Card {

  img: any;
  title: string;
  description: string;
  date: string;
  link: string;

}

interface Data {
  id: number;
  attributes: Card;
}


@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})


export class NewsCardComponent implements OnInit, OnChanges {

  @Input() currentLang = localStorage.getItem('lang'); 


  response: any;
  cards: Data[] | null = null;
  imgUrl?:string;
  _openCard!: boolean;

  constructor(private cardRepo: GeneralService) { }



  ngOnChanges(changes: SimpleChanges): void {
    this.fetchCard();
  }

  ngOnInit(): void {
    // this.imgUrl = 'http://188.225.75.102:1337';
    this.imgUrl ='https://admin.kalmykwool.com';
    localStorage.getItem('lang');
    this._openCard = false
  }

  private async fetchCard() {
    
    if (this.currentLang == 'en') {
      this.cards = await this.cardRepo.renderCard_en();
    } else if (this.currentLang == 'ch') {
      this.cards = await this.cardRepo.renderCard_ch();
    }
    else {
      this.cards = await this.cardRepo.renderCard();
    }
    
  }

  openCard() {
   this._openCard = !this._openCard
  }
}
