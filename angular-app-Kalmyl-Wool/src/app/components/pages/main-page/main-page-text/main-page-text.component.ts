import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-page-text',
  templateUrl: './main-page-text.component.html',
  styleUrls: ['./main-page-text.component.scss']
})
export class MainPageTextComponent {
  @Input() currentLang = localStorage.getItem('lang');; 
  // localStorage.getItem('lang');
}
