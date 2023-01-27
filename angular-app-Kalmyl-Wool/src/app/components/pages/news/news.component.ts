import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements  OnChanges {

  @Input() toggleAdmin: boolean = false; 





  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.toggleAdmin);
    

  }

  



  

}
