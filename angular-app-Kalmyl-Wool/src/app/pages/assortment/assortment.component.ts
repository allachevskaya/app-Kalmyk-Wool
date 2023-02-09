import { Component } from '@angular/core';

@Component({
  selector: 'app-assortment',
  templateUrl: './assortment.component.html',
  styleUrls: ['./assortment.component.scss']
})
export class AssortmentComponent {
  currentLang = 'ru';

  GetLang(data:any){   // тут получили язык из дочернего компонента
    console.log('данные из хедера которые изменилиы в ассортимент', data);
    this.currentLang = data  // тут мы присвоили значение языка и отправили данные в карточку 
 } 
}
