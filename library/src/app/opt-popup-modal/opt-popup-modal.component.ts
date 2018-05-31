import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {ModalContentComponent} from "../modal-content/modal-content.component";

@Component({
  selector: 'app-opt-popup-modal',
  templateUrl: './opt-popup-modal.component.html',
  styleUrls: ['./opt-popup-modal.component.scss']
})
export class OptPopupModalComponent implements OnInit {

  constructor(
    public  matDialogRef: MatDialogRef<ModalContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }




  public close(){
    this.matDialogRef.close();
  }

  ngOnInit() {
  }

}
