import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {ModalContentComponent} from "../modal-content/modal-content.component";

@Component({
  selector: 'app-opt-data-table',
  templateUrl: './opt-data-table.component.html',
  styleUrls: ['./opt-data-table.component.scss']
})
export class OptDataTableComponent implements OnInit {

  constructor(
    public  matDialogRef: MatDialogRef<ModalContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }


  public close(){
    this.matDialogRef.close();
  }
  ngOnInit() {
  }

}
