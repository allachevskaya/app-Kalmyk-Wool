import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {  GeneralService } from 'src/app/services/general.service';


interface Name {
  name: string;
}

interface DataName {
  id: number;
  attributes: Name;
}



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnChanges {

  currentLang = localStorage.getItem('lang');

  response: any;
  name: DataName[] | null = null;


  constructor(private nameRepo: GeneralService) { }

  ngOnInit(): void {
    this.fetchStaff();
    
    localStorage.getItem('lang');
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.fetchStaff();
    console.log(this.currentLang  )
  }

  private async fetchStaff() {
   
    if (this.currentLang == 'en') {
      this.name = await this.nameRepo.renderName_en();
    } else if (this.currentLang == 'ch') {
      this.name = await this.nameRepo.renderName_ch();
    }
    else {
      this.name = await this.nameRepo.renderName()
    }
  }
  

}
