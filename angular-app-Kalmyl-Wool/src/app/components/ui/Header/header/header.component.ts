import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  toggleMenu:boolean | undefined;
  lang?:any;
  
  ngOnInit(): void {
    toggleMenu:false;
    this.lang =  'ru' || localStorage.getItem('lang');
  }
  
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('ru');
}

  openMenu(){
    this.toggleMenu = !this.toggleMenu
  }

  changeLang(lang: any){
    localStorage.setItem('lang',lang.value);
    this.translate.use(lang.value);
    
  }
}
