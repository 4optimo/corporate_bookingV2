import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {ModalContentComponent} from "../modal-content/modal-content.component";

@Component({
  selector: 'app-opt-document-popover',
  templateUrl: './opt-document-popover.component.html',
  styleUrls: ['./opt-document-popover.component.scss']
})
export class OptDocumentPopoverComponent implements OnInit {

  constructor(public  matDialogRef: MatDialogRef<ModalContentComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }
  public close(){
    this.matDialogRef.close();
  }
  ngOnInit() {
  }

}
