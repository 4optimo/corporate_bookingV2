import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MatDialogRef, MatExpansionPanel, MAT_DIALOG_DATA} from "@angular/material";
import {ModalContentComponent} from "../modal-content/modal-content.component";

@Component({
  selector: 'app-opt-package-cart',
  templateUrl: './opt-package-cart.component.html',
  styleUrls: ['./opt-package-cart.component.scss']
})
export class OptPackageCartComponent implements OnInit {


  packageCartListArray = new Array(4);

  @ViewChild('myPanel') myPanel: MatExpansionPanel;
  matIcon = 'keyboard_arrow_down' || 'keyboard_arrow_up';

  ngOnInit() {
    this.myPanel.expandedChange.subscribe((data) => {
      this.matIcon = data ? 'keyboard_arrow_up' : 'keyboard_arrow_down';
    });

  }
  constructor() {}

  expandPannel() {
    this.myPanel.expanded = !this.myPanel.expanded;
    // alert("1");
  }

}
