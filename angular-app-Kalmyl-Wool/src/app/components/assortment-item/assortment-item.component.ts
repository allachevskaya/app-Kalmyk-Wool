import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assortment-item',
  templateUrl: './assortment-item.component.html',
  styleUrls: ['./assortment-item.component.scss']
})
export class AssortmentItemComponent implements OnInit {

  assortmentDetailed: {
                        title: string;
                        img: string[];
                        Brand: string;
                        PlaceOfOrigin: string;
                        Weight: string;
                        UnitType: string;
                        FOBPrice: string;
                        MOQ: string;
                        ProcessingTime: string;
                        Port: string;
                        PackagingDetails: string;
                        Amount: string; 
                        Unit: string; 
                        Time: string; 
                      }[] | undefined; 
  flag?:boolean;
  titleBtn?:string;

  ngOnInit(): void {
    this.assortmentDetailed = [
      {
        'title': 'Greasy sheep wool',
        'img': ['assets/images/assortiment/item1-2.png', 'assets/images/assortiment/item1-1.png','assets/images/assortiment/item1-2.png', 'assets/images/assortiment/item1-1.png','assets/images/assortiment/item1-2.png', 'assets/images/assortiment/item1-1.png'],
        'Brand': 'Kalmyk Wool',
        'PlaceOfOrigin': 'Elista, Russian Federation',
        'Weight': '1 kg',
        'UnitType': '1 kg',
        'FOBPrice': '1 to 6',
        'MOQ': '20000',
        'ProcessingTime': '2',
        'Port': 'Novorossiysk',
        'PackagingDetails': 'Bale',
        'Amount': '20-100',
        'Unit': 'tonne',
        'Time': 'month',
  
      },
      {
        'title': 'Scoured sheep wool',
        'img': ['assets/images/assortiment/item2-2.png', 'assets/images/assortiment/item2-1.png','assets/images/assortiment/item2-2.png', 'assets/images/assortiment/item2-1.png','assets/images/assortiment/item2-2.png', 'assets/images/assortiment/item2-1.png'],
        'Brand': 'Kalmyk Wool',
        'PlaceOfOrigin': 'Elista, Russian Federation',
        'Weight': '1 kg',
        'UnitType': '1 kg',
        'FOBPrice': '3 to 10',
        'MOQ': '20000',
        'ProcessingTime': '2',
        'Port': 'Novorossiysk',
        'PackagingDetails': 'Bale',
        'Amount': '20-100',
        'Unit': 'tonne',
        'Time': 'month',
  
      },
      {
        'title': 'Coarse wool tops',
        'img': ['assets/images/assortiment/item3-1.png', 'assets/images/assortiment/item3-1.png','assets/images/assortiment/item3-1.png', 'assets/images/assortiment/item3-1.png','assets/images/assortiment/item3-1.png', 'assets/images/assortiment/item3-1.png'],
        'Brand': 'Kalmyk Wool',
        'PlaceOfOrigin': 'Elista, Russian Federation',
        'Weight': '1 kg',
        'UnitType': '1 kg',
        'FOBPrice': '10 to 20',
        'MOQ': '5',
        'ProcessingTime': '2',
        'Port': 'Novorossiysk',
        'PackagingDetails': 'Bale',
        'Amount': '20',
        'Unit': 'tonne',
        'Time': 'month',
  
      },
      {
        'title': 'Color wool tops',
        'img': ['assets/images/assortiment/item4-1.png', 'assets/images/assortiment/item4-2.png', 'assets/images/assortiment/item4-3.png', 'assets/images/assortiment/item4-4.png', 'assets/images/assortiment/item4-5.png'],
        'Brand': 'Kalmyk Wool',
        'PlaceOfOrigin': 'Elista, Russian Federation',
        'Weight': '1 kg',
        'UnitType': '1 kg',
        'FOBPrice': '10 to 20',
        'MOQ': '5',
        'ProcessingTime': '2',
        'Port': 'Novorossiysk',
        'PackagingDetails': 'Bale',
        'Amount': '20-100',
        'Unit': 'tonne',
        'Time': 'month',
  
      },
      {
        'title': '100% wool fake fur ',
        'img': ['assets/images/assortiment/item5-1.png', 'assets/images/assortiment/item5-1.png','assets/images/assortiment/item5-1.png', 'assets/images/assortiment/item5-1.png','assets/images/assortiment/item5-1.png', 'assets/images/assortiment/item5-1.png'],
        'Brand': 'Kalmyk Wool',
        'PlaceOfOrigin': 'Elista, Russian Federation',
        'Weight': '1 square meter',
        'UnitType': '1 square meter',
        'FOBPrice': '6 to 10',
        'MOQ': '30',
        'ProcessingTime': '2',
        'Port': 'Novorossiysk',
        'PackagingDetails': 'ROLL',
        'Amount': '20000',
        'Unit': 'METER',
        'Time': 'month',
  
      },
      {
        'title': '100% wool fake fur ',
        'img': ['assets/images/assortiment/item6-1.png', 'assets/images/assortiment/item6-2.png', 'assets/images/assortiment/item6-3.png','assets/images/assortiment/item6-1.png', 'assets/images/assortiment/item6-2.png', 'assets/images/assortiment/item6-3.png'],
        'Brand': 'Kalmyk Wool',
        'PlaceOfOrigin': 'Elista, Russian Federation',
        'Weight': '1 kg',
        'UnitType': '1 kg',
        'FOBPrice': '5 to 20',
        'MOQ': '1000',
        'ProcessingTime': '2',
        'Port': 'Novorossiysk',
        'PackagingDetails': 'Bale',
        'Amount': '10',
        'Unit': 'tonne',
        'Time': 'month',
  
      },
      {
        'title': '100% wool fake fur ',
        'img': ['assets/images/assortiment/item7-1.png', 'assets/images/assortiment/item7-2.png','assets/images/assortiment/item7-1.png', 'assets/images/assortiment/item7-2.png'],
        'Brand': 'Kalmyk Wool',
        'PlaceOfOrigin': 'Elista, Russian Federation',
        'Weight': '1 kg',
        'UnitType': '1 kg',
        'FOBPrice': '20 to 40',
        'MOQ': '500',
        'ProcessingTime': '2',
        'Port': 'Novorossiysk',
        'PackagingDetails': 'Bale',
        'Amount': '3',
        'Unit': 'tonne',
        'Time': 'month',
  
      },
      {
        'title': 'Sheep fur hair ',
        'img': ['assets/images/assortiment/item8-1.png', 'assets/images/assortiment/item8-1.png','assets/images/assortiment/item8-1.png', 'assets/images/assortiment/item8-1.png'],
        'Brand': 'Kalmyk Wool',
        'PlaceOfOrigin': 'Elista, Russian Federation',
        'Weight': '1 square meter',
        'UnitType': '1 square meter',
        'FOBPrice': '5 to 10',
        'MOQ': '1000',
        'ProcessingTime': '2',
        'Port': 'Novorossiysk',
        'PackagingDetails': 'Bale',
        'Amount': '5',
        'Unit': 'tonne',
        'Time': 'month',
  
      },
      {
        'title': 'Fine goat underhair ',
        'img': ['assets/images/assortiment/item9-1.png', 'assets/images/assortiment/item9-2.png','assets/images/assortiment/item9-1.png', 'assets/images/assortiment/item9-2.png'],
        'Brand': 'Kalmyk Wool',
        'PlaceOfOrigin': 'Elista, Russian Federation',
        'Weight': '1 meter',
        'UnitType': '1 meter',
        'FOBPrice': '10 to 20',
        'MOQ': '30',
        'ProcessingTime': '2',
        'Port': 'Novorossiysk',
        'PackagingDetails': 'Roll',
        'Amount': '1000-20000',
        'Unit': 'meter',
        'Time': 'month',
  
      },
      {
        'title': 'Sheep wool insulation (clothes) ',
        'img': ['assets/images/assortiment/item10-1.png', 'assets/images/assortiment/item10-2.png','assets/images/assortiment/item10-1.png', 'assets/images/assortiment/item10-2.png','assets/images/assortiment/item10-1.png', 'assets/images/assortiment/item10-2.png'],
        'Brand': 'Kalmyk Wool',
        'PlaceOfOrigin': 'Elista, Russian Federation',
        'Weight': '1 meter',
        'UnitType': '1 meter',
        'FOBPrice': '5 to 10',
        'MOQ': '30',
        'ProcessingTime': '2',
        'Port': 'Novorossiysk',
        'PackagingDetails': 'Roll',
        'Amount': '5000-10000',
        'Unit': 'meter',
        'Time': 'month',
  
      },
      {
        'title': 'Felting wool',
        'img': ['assets/images/assortiment/item11-1.png', 'assets/images/assortiment/item11-2.png', 'assets/images/assortiment/item11-3.png','assets/images/assortiment/item11-.png', 'assets/images/assortiment/item11-2.png', 'assets/images/assortiment/item11-3.png'],
        'Brand': 'Kalmyk Wool',
        'PlaceOfOrigin': 'Elista, Russian Federation',
        'Weight': '1 kg',
        'UnitType': '1 kg',
        'FOBPrice': '10 to 100',
        'MOQ': '5',
        'ProcessingTime': '2',
        'Port': 'Novorossiysk',
        'PackagingDetails': 'Bale',
        'Amount': '1 & 5',
        'Unit': 'tonne',
        'Time': 'month',
  
      },
      {
        'title': 'Noil combing wool',
        'img': ['assets/images/assortiment/item12-1.png', 'assets/images/assortiment/item12-2.png', 'assets/images/assortiment/item12-1.png','assets/images/assortiment/item12-1.png', 'assets/images/assortiment/item12-2.png', 'assets/images/assortiment/item12-1.png'],
        'Brand': 'Kalmyk Wool',
        'PlaceOfOrigin': 'Elista, Russian Federation',
        'Weight': '1 meter',
        'UnitType': '1 meter',
        'FOBPrice': '10 to 100',
        'MOQ': '10000',
        'ProcessingTime': '2',
        'Port': 'Novorossiysk',
        'PackagingDetails': 'Bale',
        'Amount': '10',
        'Unit': 'tonne',
        'Time': 'month',
  
      },
      {
        'title': 'Carded wool',
        'img': ['assets/images/assortiment/item13-1.png', 'assets/images/assortiment/item13-2.png', 'assets/images/assortiment/item13-1.png','assets/images/assortiment/item13-1.png', 'assets/images/assortiment/item13-2.png', 'assets/images/assortiment/item13-1.png'],
        'Brand': 'Kalmyk Wool',
        'PlaceOfOrigin': 'Elista, Russian Federation',
        'Weight': '1 kg',
        'UnitType': '1 kg',
        'FOBPrice': '5 to 8',
        'MOQ': '1000',
        'ProcessingTime': '2',
        'Port': 'Novorossiysk',
        'PackagingDetails': 'Box',
        'Amount': '10',
        'Unit': 'tonne',
        'Time': 'month',
  
      },
  
    ];
    this.flag = true;
    this.titleBtn = 'Посмотреть больше';
  }

 

  
  

  openIMG() {

    this.flag = !this.flag;

    if (this.flag === true) {
      this.titleBtn = 'Посмотреть больше';
    }
    else this.titleBtn = 'Посмотреть меньше';
  }
}
