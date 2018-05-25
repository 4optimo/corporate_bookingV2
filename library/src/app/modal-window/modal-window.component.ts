import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
 import {ModalContentComponent} from "../modal-content/modal-content.component";


@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})


export class ModalWindowComponent implements OnInit {

  constructor(public dialog: MatDialog) {}


  public  openModal(){
    this.dialog.open(ModalContentComponent,{data: {name:'mohan test component'}});

  }


  ngOnInit() {
  }

}
