import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";



@Component({
  selector: 'app-opt-host-add-popup',
  templateUrl: './opt-host-add-popup.component.html',
  styleUrls: ['./opt-host-add-popup.component.scss']


})

export class OptHostAddPopupComponent implements OnInit {

  constructor(
    public  matDialogRef: MatDialogRef<OptHostAddPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  public close(){
    this.matDialogRef.close();
  }
  ngOnInit() {
  }

}
