import { Component, OnInit } from '@angular/core';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-opt-chip-select',
  templateUrl: './opt-chip-select.component.html',
  styleUrls: ['./opt-chip-select.component.scss']
})
export class OptChipSelectComponent  {
  hideComponent: string;

  isOpen() {
    this.hideComponent = "hideChip";
    console.log("button clicked");
  }


  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

}
