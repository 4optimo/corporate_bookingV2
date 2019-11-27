import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material";
import {ImportMessagesComponent} from "../import-messages/import-messages.component";
@Component({
  selector: 'app-opt-admin-panel-import',
  templateUrl: './opt-admin-panel-import.component.html',
  styleUrls: ['./opt-admin-panel-import.component.scss']
})
export class OptAdminPanelImportComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  public  openMessage(){
    this.dialog.open(ImportMessagesComponent,{
      data: {name:'Modal Popover'},
      panelClass:'admin-import-messagebox',
      height: 'auto',
      width: '30%'
    });
  }
  ngOnInit() {
  }

}
