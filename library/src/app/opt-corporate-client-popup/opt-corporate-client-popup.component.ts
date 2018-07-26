import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";
import {ModalContentComponent} from "../modal-content/modal-content.component";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-opt-corporate-client-popup',
  templateUrl: './opt-corporate-client-popup.component.html',
  styleUrls: ['./opt-corporate-client-popup.component.scss']
})
export class OptCorporateClientPopupComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = ['Sean.Page', 'One', 'Two', 'Three'];

  constructor(
    public  matDialogRef: MatDialogRef<ModalContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  public close(){
    this.matDialogRef.close();
  }
  ngOnInit() {
  }


}
