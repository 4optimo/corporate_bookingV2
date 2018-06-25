import { Component, OnInit } from '@angular/core';
import {ModalContentComponent} from "../modal-content/modal-content.component";
import {MatDialog} from "@angular/material";
import {OptPopupModalComponent} from "../opt-popup-modal/opt-popup-modal.component";
import {OptPopupQuestionnaireComponent} from "../opt-popup-questionnaire/opt-popup-questionnaire.component";


@Component({
  selector: 'app-opt-popup-window',
  templateUrl: './opt-popup-window.component.html',
  styleUrls: ['./opt-popup-window.component.scss']
})

export class OptPopupWindowComponent implements OnInit {


  constructor(public dialog: MatDialog) {}


  public  openModal(){
    this.dialog.open(OptPopupModalComponent,{
      data: {name:'sass test component'},
      panelClass:'custom-dialog-container'

    });

  }

  public  openQuestionnaire(){
    this.dialog.open(OptPopupQuestionnaireComponent,{
      data: {name:'Questionnaire'},
      panelClass:'custom-dialog-container',
      width : '1088px',
      height : 'auto',
    });

  }
  ngOnInit() {
  }

}
