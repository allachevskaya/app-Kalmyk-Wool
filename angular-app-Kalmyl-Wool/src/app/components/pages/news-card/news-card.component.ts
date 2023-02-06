import { Component, Input, OnInit } from '@angular/core';
import { CardRepository } from 'src/app/repository/card';



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

  constructor(private cardRepo: CardRepository) { }


  ngOnInit(): void {
    this.fetchUser();
    this.imgUrl = 'http://188.225.75.102:1337';
  }


  private async fetchUser() {
    this.cards = await this.cardRepo.random();
  }


}
