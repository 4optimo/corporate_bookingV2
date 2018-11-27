import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { ModalContentComponent } from "../modal-content/modal-content.component";

@Component({
  selector: 'app-opt-discount-search',
  templateUrl: './opt-discount-search.component.html',
  styleUrls: ['./opt-discount-search.component.scss']
})
export class OptDiscountSearchComponent implements OnInit {

  constructor(public matDialogRef: MatDialogRef<ModalContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  public maximize() {
    alert('efaea');
  }

  selectedIndex = 0;

  selectTab(index: number): void {
    this.selectedIndex = index;
  }

  public close() {
    this.matDialogRef.close();
  }
  ngOnInit() {
  }

}
