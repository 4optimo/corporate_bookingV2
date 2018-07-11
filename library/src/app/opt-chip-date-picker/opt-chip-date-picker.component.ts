import {Component, Inject, OnInit} from '@angular/core';
import {ModalContentComponent} from "../modal-content/modal-content.component";
import {MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-opt-chip-date-picker',
  templateUrl: './opt-chip-date-picker.component.html',
  styleUrls: ['./opt-chip-date-picker.component.scss']
})
export class OptChipDatePickerComponent implements OnInit {

  constructor() {
  }
  hideComponent: string;

  isOpen() {
    this.hideComponent = "hideChip";
    console.log("button clicked");
  }

  ngOnInit() {

  }
}
