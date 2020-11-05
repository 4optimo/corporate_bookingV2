import {Component, Inject, OnInit} from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";
import {ModalContentComponent} from "../modal-content/modal-content.component";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-opt-recurring-popup',
  templateUrl: './opt-recurring-popup.component.html',
  styleUrls: ['./opt-recurring-popup.component.scss']
})
export class OptRecurringPopupComponent implements OnInit {

  constructor(
    public  matDialogRef: MatDialogRef<ModalContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  public close(){
    this.matDialogRef.close();
  }
  ngOnInit() {
  }
  
}
