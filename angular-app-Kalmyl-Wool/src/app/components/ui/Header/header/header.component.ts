import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  toggleMenu: boolean | undefined;
  lang = 'ru' || localStorage.getItem('lang') as string;

  @Output() myOutput = new EventEmitter<any>(); // тут мы отправляем какой язык выбрали


  ngOnInit(): void {
    toggleMenu: false;

  }

  constructor(private translate: TranslateService) {
    translate.setDefaultLang( this.lang);
  }

  openMenu() {
    this.toggleMenu = !this.toggleMenu
  }

  changeLang(lang: any) {
    localStorage.setItem('lang', lang.value);
    this.translate.use(lang.value);
    this.sendLang(lang.value)
  }

  sendLang(lang:any){ // это функция которая используется чтобы эмитить событие в декоратор 
    this.myOutput.emit(lang);  
  }
}
