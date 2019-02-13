import { Component, OnInit } from '@angular/core';
import { Options, LabelType } from 'ng5-slider';
@Component({
  selector: 'app-opt-item-modal-popovers',
  templateUrl: './opt-item-modal-popovers.component.html',
  styleUrls: ['./opt-item-modal-popovers.component.scss']
})
export class OptItemModalPopoversComponent implements OnInit {
  dateRange: Date[] = this.createDateRange();
  value: number = this.dateRange[0].getTime();
  
  minValue: number = 1;
  maxValue: number = 10;
  options: Options = {
    floor: 0,
    ceil: 100,
    step: 2,
    minRange: 1,
    maxRange: 1,
    pushRange: true,
    stepsArray: this.dateRange.map((date: Date) => {
      return { value: date.getTime() };
    }),
    translate: (value: number, label: LabelType): string => {
      return new Date(value).toDateString();
    }
  };
  createDateRange(): Date[] {
    const dates: Date[] = [];
    for (let i: number = 1; i <= 31; i++) {
      dates.push(new Date(2018, 5, i));
    }
    return dates;
  }

 

  constructor() { 
    
  }

  ngOnInit() {
    
  }

}
