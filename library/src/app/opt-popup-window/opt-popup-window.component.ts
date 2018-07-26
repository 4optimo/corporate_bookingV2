import { Component, OnInit } from '@angular/core';
import {ModalContentComponent} from "../modal-content/modal-content.component";
import {MatDialog} from "@angular/material";
import {OptPopupModalComponent} from "../opt-popup-modal/opt-popup-modal.component";
import {OptCorporateClientPopupComponent} from "../opt-corporate-client-popup/opt-corporate-client-popup.component";
import {OptClientPopupComponent} from "../opt-client-popup/opt-client-popup.component";
import {OptIndividualClientPopupComponent} from "../opt-individual-client-popup/opt-individual-client-popup.component";
import {OptItemPopupComponent} from "../opt-item-popup/opt-item-popup.component";

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

  public openCorporateClientPopup(){
    this.dialog.open(OptCorporateClientPopupComponent,{
      data: {name:'New Corporate Client'},
      panelClass:'custom-dialog-container',
      height: 'auto',
      width: '80%'
      // DialogPosition : top

    });

  }

  public  openClientPopup(){
    this.dialog.open(OptClientPopupComponent,{
      data: {name:'Client Search'},
      panelClass:'custom-dialog-container',
      height: '90%',
      width: '90%'

    });

  }

  public  openIndividualClientPopup(){
    this.dialog.open(OptIndividualClientPopupComponent,{
      data: {name:'New Individual Client'},
      panelClass:'custom-dialog-container',
      height: '90%',
      width: '90%'

    });

  }

  public  openItemPopup(){
    this.dialog.open(OptItemPopupComponent,{
      data: {name:'Item Search'},
      panelClass:'custom-dialog-container',
      height: '90%',
      width: '90%'

    });

  }

  ngOnInit() {
  }

}
