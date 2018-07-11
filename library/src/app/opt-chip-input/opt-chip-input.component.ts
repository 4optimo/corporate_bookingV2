import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opt-chip-input',
  templateUrl: './opt-chip-input.component.html',
  styleUrls: ['./opt-chip-input.component.scss']
})
export class OptChipInputComponent implements OnInit {

  constructor() { }
  hideComponent: string;

  isOpen() {
    this.hideComponent = "hideChip";
    console.log("button clicked");
  }

  ngOnInit() {
  }

}
