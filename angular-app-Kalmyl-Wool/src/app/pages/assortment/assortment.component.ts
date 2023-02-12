import { Component } from '@angular/core';

@Component({
  selector: 'app-assortment',
  templateUrl: './assortment.component.html',
  styleUrls: ['./assortment.component.scss']
})
export class AssortmentComponent {
  currentLang = localStorage.getItem('lang');

  GetLang(data:any){   
    this.currentLang = data  
 } 
}
