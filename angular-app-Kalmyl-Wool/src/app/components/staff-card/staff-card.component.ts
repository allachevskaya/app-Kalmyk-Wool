import { Component } from '@angular/core';

@Component({
  selector: 'app-staff-card',
  templateUrl: './staff-card.component.html',
  styleUrls: ['./staff-card.component.scss']
})
export class StaffCardComponent {

  staff = [
   
    {
      'img': 'assets/images/staff/Даваев Джиргал Николаевич.jpg',
      'name': 'Даваев Джиргал Николаевич',
      'position': 'Исполнительный директор'

    },
    {
      'img': 'assets/images/staff/Гахаев Юрий Лиджиевич.png',
      'name': 'Гахаев Юрий Лиджиевич',
      'position': 'Главный бухгалтер'
    },
  ]
}
