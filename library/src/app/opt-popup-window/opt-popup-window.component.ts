import { Component, OnInit } from '@angular/core';
import {ModalContentComponent} from "../modal-content/modal-content.component";
import {MatDialog} from "@angular/material";
import {OptPopupModalComponent} from "../opt-popup-modal/opt-popup-modal.component";
import {OptCorporateClientPopupComponent} from "../opt-corporate-client-popup/opt-corporate-client-popup.component";
import {OptClientPopupComponent} from "../opt-client-popup/opt-client-popup.component";
import {OptIndividualClientPopupComponent} from "../opt-individual-client-popup/opt-individual-client-popup.component";
import {OptItemPopupComponent} from "../opt-item-popup/opt-item-popup.component";
import {OptCollectionDispatchPopupComponent} from "../opt-collection-dispatch-popup/opt-collection-dispatch-popup.component";
import {OptPaymentModalComponent} from "../opt-payment-modal/opt-payment-modal.component";
import {OptEmailDocumentPopupComponent} from "../opt-email-document-popup/opt-email-document-popup.component";
import {OptTicketScanPopupComponent} from "../opt-ticket-scan-popup/opt-ticket-scan-popup.component";
import {OptPackagePopupComponent} from "../opt-package-popup/opt-package-popup.component";
import {OptHostAddPopupComponent} from "../opt-host-add-popup/opt-host-add-popup.component";
import { OptAddNoteComponent } from '../opt-add-note/opt-add-note.component';
import {OptReprintPopupComponent} from "../opt-reprint-popup/opt-reprint-popup.component";

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
      height: 'auto',
      width: '90%'

    });

  }


  public openCollectionDispatchPopup(){
    this.dialog.open(OptCollectionDispatchPopupComponent,{
      data: {name:'Collection/Dispatch'},
      panelClass:'custom-dialog-container',
      height: 'auto',
      width: '80%'
      // DialogPosition : top

    });

  }

  public openPaymentsPopup(){
    this.dialog.open(OptPaymentModalComponent,{
      data: {name:'Payment'},
      panelClass:'payment_modal',
      height: '80%',
      width: '80%'
      // DialogPosition : top

    });

  }
  public openEmailDocumentPopup(){
    this.dialog.open(OptEmailDocumentPopupComponent,{
      data: {name:'Email Document'},
      panelClass:'custom-dialog-container',
      height: 'auto',
      width: '80%'
      // DialogPosition : top

    });

  }
  public openTicketScanPopup(){
    this.dialog.open(OptTicketScanPopupComponent,{
      data: {name:'Ticket Scan'},
      panelClass:'custom-dialog-container',
      height: 'auto',
      width: '80%'
      // DialogPosition : top

    });

  }

  public openPackagePopup(){
    this.dialog.open(OptPackagePopupComponent,{
      data: {name:'Package Search'},
      panelClass:'custom-dialog-container',
      height: 'auto',
      width: '80%'
      // DialogPosition : top

    });

  }

  public openItemPopup(){
    this.dialog.open(OptItemPopupComponent,{
      data: {name:'Item Search'},
      panelClass:'custom-dialog-container',
      height: 'auto',
      width: '80%'
      // DialogPosition : top

    });

  }

  public  openDialog(){
    this.dialog.open(OptHostAddPopupComponent,{
      panelClass:'custom-dialog-container',
      height: 'auto',
      width: '60%'
    });

  }
  public  openAddNotePopup(){
    this.dialog.open(OptAddNoteComponent,{
      data: {name:'Notes'},
      panelClass:'custom-dialog-container',
      height: 'auto',
      width: '60%'
    });

  }
  public  openReprintPopup(){
    this.dialog.open(OptReprintPopupComponent,{
      data: {name:'Reprint Tickets/Badges/Passes'},
      panelClass:'custom-dialog-container',
      height: 'auto',
      width: '60%'
    });

  }
  ngOnInit() {
  }

}
