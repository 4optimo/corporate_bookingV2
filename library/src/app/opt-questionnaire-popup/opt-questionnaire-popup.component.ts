import {NgModule, Component, Inject, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {ModalContentComponent} from "../modal-content/modal-content.component";
import { OptSliderComponent } from '../opt-slider/opt-slider.component';

@Component({
  selector: 'app-opt-questionnaire-popup',
  templateUrl: './opt-questionnaire-popup.component.html',
  styleUrls: ['./opt-questionnaire-popup.component.scss']
})
export class OptQuestionnairePopupComponent implements OnInit {

  constructor(
    public  matDialogRef: MatDialogRef<ModalContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  public close(){
    this.matDialogRef.close();
  }
  ngOnInit() {
  }

}
