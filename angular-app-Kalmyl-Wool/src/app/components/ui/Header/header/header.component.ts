import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  toggleMenu:boolean | undefined;

  ngOnInit(): void {
    toggleMenu:false;
  }
  

  openMenu(){
    this.toggleMenu = !this.toggleMenu
  }
}
