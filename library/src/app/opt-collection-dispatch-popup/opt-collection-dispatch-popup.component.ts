import {Component, Inject, OnInit} from '@angular/core';
import {ModalContentComponent} from "../modal-content/modal-content.component";
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-opt-collection-dispatch',
  templateUrl: './opt-collection-dispatch-popup.component.html',
  styleUrls: ['./opt-collection-dispatch-popup.component.scss']
})
export class OptCollectionDispatchPopupComponent implements OnInit {

  constructor(
    public  matDialogRef: MatDialogRef<ModalContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  public close(){
    this.matDialogRef.close();
  }
  ngOnInit() {
  }

}
