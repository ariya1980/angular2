import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  
  @Input() rating: number;

  private starWidth: number;

  constructor() { }

  ngOnChanges(){
    this.starWidth = (this.rating * 86) / 5;
  }

}