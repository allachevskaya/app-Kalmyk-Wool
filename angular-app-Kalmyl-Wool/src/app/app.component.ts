import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  lang = 'ru'

  ngOnInit(): void {
    if (localStorage.getItem('lang') === null) {
      localStorage.setItem('lang','ru');
    }
   
  }
  title = 'KALMYK WOOL';

 
}
