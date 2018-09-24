import {Component, Inject, OnInit, Input} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {ModalContentComponent} from "../modal-content/modal-content.component";
import {MatExpansionModule, MatExpansionPanel} from '@angular/material/expansion';

@Component({
  selector: 'app-opt-reprint-popup',
  templateUrl: './opt-reprint-popup.component.html',
  styleUrls: ['./opt-reprint-popup.component.scss']
})
export class OptReprintPopupComponent implements OnInit {
   @Input() collapsedHeight= "55px";
   @Input() expandedHeight: "55px";
   panel: MatExpansionPanel

  constructor(
    public  matDialogRef: MatDialogRef<ModalContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  public close(){
    this.matDialogRef.close();
  }
  ngOnInit() {
  }

}
