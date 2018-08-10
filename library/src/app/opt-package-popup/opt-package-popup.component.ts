import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material";
import {ModalContentComponent} from "../modal-content/modal-content.component";
import {MatDialogRef, MAT_DIALOG_DATA, MatExpansionPanel} from "@angular/material";
import {OptIndividualClientPopupComponent} from "../opt-individual-client-popup/opt-individual-client-popup.component";
import {OptPackageCartComponent} from "../opt-package-cart/opt-package-cart.component";

@Component({
  selector: 'app-opt-package-popup',
  templateUrl: './opt-package-popup.component.html',
  styleUrls: ['./opt-package-popup.component.scss']
})
export class OptPackagePopupComponent implements OnInit {

  packageListArray = new Array(10);

  constructor(

  public  matDialogRef: MatDialogRef<ModalContentComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any) { }

  public close(){
    this.matDialogRef.close();
  }
  @ViewChild('myPanel') myPanel: MatExpansionPanel;
  matIcon = 'keyboard_arrow_down' || 'keyboard_arrow_up';

  ngOnInit() {
    this.myPanel.expandedChange.subscribe((data) => {
      this.matIcon = data ? 'keyboard_arrow_up' : 'keyboard_arrow_down';
    });

  }
  expandPannel() {
    this.myPanel.expanded = !this.myPanel.expanded;
    // alert("1");
  }

}
