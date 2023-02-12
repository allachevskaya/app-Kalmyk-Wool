import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent    {

  @Input() toggleAdmin: boolean = false; 
  
 
  currentLang = localStorage.getItem('lang');

  GetLang(data:any){   // тут получили язык из дочернего компонента
    this.currentLang = data  // тут мы присвоили значение языка и отправили данные в карточку 
 } 




 

  



  

}
