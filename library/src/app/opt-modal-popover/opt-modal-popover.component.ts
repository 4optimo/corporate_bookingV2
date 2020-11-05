import { Component, OnInit } from '@angular/core';
import {OptTaskPopupComponent} from "../opt-task-popup/opt-task-popup.component";
import {MatDialog} from "@angular/material";
import {OptDocumentPopoverComponent} from "../opt-document-popover/opt-document-popover.component";
import {OptTabbedPopoverComponent} from "../opt-tabbed-popover/opt-tabbed-popover.component";
import {OptChangeQuantityPopupComponent} from "../opt-change-quantity-popup/opt-change-quantity-popup.component"

@Component({
  selector: 'app-opt-modal-popover',
  templateUrl: './opt-modal-popover.component.html',
  styleUrls: ['./opt-modal-popover.component.scss']
})
export class OptModalPopoverComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  public  openDocumentPopup(){
    this.dialog.open(OptDocumentPopoverComponent,{
      data: {name:'Modal Popover'},
      panelClass:'custom-dialog-container',
      height: 'auto',
      width: '40%'
    });
  }
  public  openTabbedPopup() {
    this.dialog.open(OptTabbedPopoverComponent, {
      data: {name: 'Modal Popover'},
      panelClass: 'custom-dialog-container',
      height: 'auto',
      width: '40%'
    });
  }
  public  changeQuantity() {
    this.dialog.open(OptChangeQuantityPopupComponent, {
      data: {name: 'Modal Popover'},
      panelClass: 'custom-dialog-container',
      height: 'auto',
      width: '40%'
    });
  }
  
  ngOnInit() {
  }

}
