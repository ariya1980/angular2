import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  
  @Input() rating: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  private starWidth: number;

  constructor() { }

  ngOnChanges(){
    this.starWidth = (this.rating * 86) / 5;
  }
  onClick(){
    this.ratingClicked.emit('Rating is ' + this.rating);
  }

}
