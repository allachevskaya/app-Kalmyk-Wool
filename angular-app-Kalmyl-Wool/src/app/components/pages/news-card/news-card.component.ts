import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {

  cards:{
      img:string;
      title:string;
      dectiption:string;
      date:string;
      link:string;
  }[] | undefined;


  ngOnInit(): void {
    this.cards = [
      {
        'img': 'assets/images/news/news1.png',
        'title': 'Вести Калмыкия',
        'dectiption': '20 тонн калмыцкой овечьей шерсти отправилось в Индию',
        'date': '19.10.21',
        'link':'https://vesti-kalmykia.ru/news/20-tonn-kalmyckoj-ovechej-shersti-otpravilos-v-indiyu',
      },
      {
        'img': 'assets/images/news/news2.png',
        'title': 'Калмыцкая шерсть ',
        'dectiption': 'Калмыцкая шерсть укрепляет позиции на международном рынке',
        'date': '10.11.22',
        'link':'https://youtu.be/FsDewIDrwfQ',
      },
      {
        'img': 'assets/images/news/news3.png',
        'title': 'В Калмыкии открылся Центр по подготовке и сортировке шерсти',
        'dectiption': 'Компания Калмык Вул является единственной организацией в Республике Калмыкия, которая экспортирует шерсть в 5 стран мира!',
        'date': '27.17.22',
        'link':'https://www.youtube.com/watch?v=QSFhE7N3KlI',
      },
      {
        'img': 'assets/images/news/news4.png',
        'title': 'Отгрузка шерсти в Индию ',
        'dectiption': '20 тонн калмыцкой шерсти отправилось в Индию',
        'date': '19.10.22',
        'link':'https://www.youtube.com/watch?v=kU1vmT6EhfQ',
      },
      {
        'img': 'assets/images/news/news5.png',
        'title': 'Компания «КАЛМЫК ВУЛ» расширяет географию экспорта шерсти',
        'dectiption': '«Калмык Вул» – ведущий экспортер региона, занимающийся первичной переработкой и продажей шерсти.',
        'date': '30.08.22',
        'link':'https://riakalm.ru/news2/34907-kompaniya-kalmyk-vul-rasshiryaet-geografiyu-eksporta-shersti',
      },
      {
        'img': 'assets/images/news/news6.png',
        'title': 'Предприятие «Kalmyk Wool» расширит географию экспорта',
        'dectiption': '«Калмык Вул» – ведущий экспортер региона, занимающийся первичной переработкой и продажей шерсти.',
        'date': '26.06.22',
        'link':'https://youtu.be/Fhz4E21DnLs',
      },
      
  
    ];

  }


  

  
}
