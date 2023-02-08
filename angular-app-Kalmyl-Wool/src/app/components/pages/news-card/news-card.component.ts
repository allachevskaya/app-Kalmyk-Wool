import { Component, OnInit } from '@angular/core';
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


export class NewsCardComponent implements OnInit {

  response: any;
  cards: Data[] | null = null;
  imgUrl?:string;

  constructor(private cardRepo: GeneralService) { }


  ngOnInit(): void {
    this.fetchUser();
    this.imgUrl = 'http://188.225.75.102:1337';
  }


  private async fetchUser() {
    this.cards = await this.cardRepo.random();
  }


}
