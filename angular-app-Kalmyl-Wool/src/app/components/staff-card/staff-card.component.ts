import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';


interface Staff {
  image: any;
  title: string;
  subtitle: string;
}

interface DataStaff {
  id: number;
  attributes: Staff;
}


@Component({
  selector: 'app-staff-card',
  templateUrl: './staff-card.component.html',
  styleUrls: ['./staff-card.component.scss']
})
export class StaffCardComponent implements OnInit, OnChanges {

  @Input() currentLang = ''; // тут мы получили язык от родительского класса (стафф)

  response: any;
  staff: DataStaff[] | null = null;
  imgUrl?: string;



  constructor(private staffRepo: GeneralService) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.currentLang)
    console.log('staff card :', this.currentLang)
    this.fetchStaff();
  }

  ngOnInit(): void {
    this.fetchStaff();
    this.imgUrl = 'http://188.225.75.102:1337';

  }

  private async fetchStaff() {
    if (this.currentLang == 'en') {
      this.staff = await this.staffRepo.renderStaff_en()
    } else if (this.currentLang == 'ch') {
      this.staff = await this.staffRepo.renderStaff_ch();
    }
    else { 
      this.staff = await this.staffRepo.renderStaff(); 
    }

  }




}
