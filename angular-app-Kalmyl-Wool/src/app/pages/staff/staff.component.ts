import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent {
//   currentLang  = 'ru' || localStorage.getItem('lang');;

//   GetLang(data:any){   // тут получили язык из дочернего компонента
//     console.log('данные из хедера которые изменилиы получили в staff', data);
//     this.currentLang = data  // тут мы присвоили значение языка и отправили данные в карточку 
//  } 
 currentLang = localStorage.getItem('lang');

 GetLang(data:any){   // тут получили язык из дочернего компонента
   this.currentLang = data  // тут мы присвоили значение языка и отправили данные в карточку 
} 
}
