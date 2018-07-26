import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {ModalContentComponent} from "../modal-content/modal-content.component";

@Component({
  selector: 'app-opt-client-popup',
  templateUrl: './opt-client-popup.component.html',
  styleUrls: ['./opt-client-popup.component.scss']
})
export class OptClientPopupComponent implements OnInit {

  openClientPopup(){

  }
  constructor(
    public  matDialogRef: MatDialogRef<ModalContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }


  public close(){
    this.matDialogRef.close();
  }

  ngOnInit() {
  }

}
