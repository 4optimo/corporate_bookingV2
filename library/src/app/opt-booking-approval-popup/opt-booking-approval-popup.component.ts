import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {ModalContentComponent} from "../modal-content/modal-content.component";

@Component({
  selector: 'app-opt-booking-approval-popup',
  templateUrl: './opt-booking-approval-popup.component.html',
  styleUrls: ['./opt-booking-approval-popup.component.scss']
})
export class OptBookingApprovalPopupComponent implements OnInit {

  constructor(
    public  matDialogRef: MatDialogRef<ModalContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  public close(){
    this.matDialogRef.close();
  }

  ngOnInit() {
  }

}
