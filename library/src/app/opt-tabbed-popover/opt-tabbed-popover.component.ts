import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {ModalContentComponent} from "../modal-content/modal-content.component";

@Component({
  selector: 'app-opt-tabbed-popover',
  templateUrl: './opt-tabbed-popover.component.html',
  styleUrls: ['./opt-tabbed-popover.component.scss']
})
export class OptTabbedPopoverComponent implements OnInit {

  constructor(public  matDialogRef: MatDialogRef<ModalContentComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }
  public close(){
    this.matDialogRef.close();
  }
  ngOnInit() {
  }

}
