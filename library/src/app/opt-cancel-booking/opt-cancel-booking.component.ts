import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {ModalContentComponent} from "../modal-content/modal-content.component";

@Component({
  selector: 'app-opt-cancel-booking',
  templateUrl: './opt-cancel-booking.component.html',
  styleUrls: ['./opt-cancel-booking.component.scss']
})
export class OptCancelBookingComponent implements OnInit {

  constructor(
    public  matDialogRef: MatDialogRef<ModalContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }


  public close(){
    this.matDialogRef.close();
  }
  ngOnInit() {
  }
}
