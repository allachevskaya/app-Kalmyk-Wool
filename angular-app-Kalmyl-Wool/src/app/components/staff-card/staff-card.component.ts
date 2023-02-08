import { Component, OnInit } from '@angular/core';
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
export class StaffCardComponent implements OnInit {

  response: any;
  staff: DataStaff[] | null = null;
  imgUrl?: string;



  constructor(private staffRepo: GeneralService) { }

  ngOnInit(): void {
    this.fetchStaff();
    this.imgUrl = 'http://188.225.75.102:1337';

  }

  private async fetchStaff() {
    this.staff = await this.staffRepo.renderStaff()
  }


}
