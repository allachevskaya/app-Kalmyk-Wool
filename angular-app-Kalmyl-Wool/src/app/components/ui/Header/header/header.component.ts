import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  toggleMenu: boolean | undefined;
  lang?: any;

  @Output() myOutput = new EventEmitter<any>(); // тут мы отправляем какой язык выбрали


  ngOnInit(): void {
    toggleMenu: false;
    this.lang = 'ru' || localStorage.getItem('lang');
   
  }

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('ru');
  }

  openMenu() {
    this.toggleMenu = !this.toggleMenu
  }

  changeLang(lang: any) {
    localStorage.setItem('lang', lang.value);
    this.translate.use(lang.value);
    //console.log(lang.value) // хочу отправить это значение
    this.sendLang(lang.value)
  }

  sendLang(lang:any){ // это функция которая используется чтобы эмитить событие в декоратор 
    console.log(lang)
    this.myOutput.emit(lang);  
  }
}
