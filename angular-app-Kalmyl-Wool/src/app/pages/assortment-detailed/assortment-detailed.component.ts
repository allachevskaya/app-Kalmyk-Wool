import { Component } from '@angular/core';

@Component({
  selector: 'app-assortment-detailed',
  templateUrl: './assortment-detailed.component.html',
  styleUrls: ['./assortment-detailed.component.scss']
})
export class AssortmentDetailedComponent {
  currentLang = 'ru';

  GetLang(data:any){   // тут получили язык из дочернего компонента
    // console.log('данные из хедера которые изменилиы в ассортимент detailed', data);
    this.currentLang = data  // тут мы присвоили значение языка и отправили данные в карточку 
 } 
}
