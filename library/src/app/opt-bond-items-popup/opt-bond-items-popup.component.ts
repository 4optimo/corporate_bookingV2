import { Component,Inject, OnInit } from '@angular/core';
import {ModalContentComponent} from "../modal-content/modal-content.component";
import {MatDialogRef, MAT_DIALOG_DATA, MatExpansionPanel, MatDialog} from "@angular/material";

@Component({
  selector: 'app-opt-bond-items-popup',
  templateUrl: './opt-bond-items-popup.component.html',
  styleUrls: ['./opt-bond-items-popup.component.scss']
})
export class OptBondItemsPopupComponent implements OnInit {

  constructor(

    public  matDialogRef: MatDialogRef<ModalContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
