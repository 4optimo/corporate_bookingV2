///<reference path="../../../node_modules/@angular/core/testing/src/test_bed.d.ts"/>
import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {inject} from "@angular/core/testing";






@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.scss']
})
export class ModalContentComponent  {

  // constructor(private matDialogRef: MatDialogRef<ModalContentComponent>,
  //             @inject(MAT_DIALOG_DATA) public data: any){ }

  constructor(

    public  matDialogRef: MatDialogRef<ModalContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }




  public close(){
    this.matDialogRef.close();
  }




}
