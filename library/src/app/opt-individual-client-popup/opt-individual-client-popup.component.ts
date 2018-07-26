import {Component, Inject, OnInit} from '@angular/core';
import {ModalContentComponent} from "../modal-content/modal-content.component";
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-opt-individual-client-popup',
  templateUrl: './opt-individual-client-popup.component.html',
  styleUrls: ['./opt-individual-client-popup.component.scss']


})

export class OptIndividualClientPopupComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = ['Sean.Page', 'One', 'Two', 'Three'];

  constructor(
    public  matDialogRef: MatDialogRef<ModalContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  public close(){
    this.matDialogRef.close();
  }
  ngOnInit() {
  }

}
