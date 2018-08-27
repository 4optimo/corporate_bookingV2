import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {ModalContentComponent} from "../modal-content/modal-content.component";

@Component({
  selector: 'app-opt-invoice-generator',
  templateUrl: './opt-invoice-generator.component.html',
  styleUrls: ['./opt-invoice-generator.component.scss']
})
export class OptInvoiceGeneratorComponent implements OnInit {

  constructor(public  matDialogRef: MatDialogRef<ModalContentComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }
  public close(){
    this.matDialogRef.close();
  }
  ngOnInit() {
  }

}
