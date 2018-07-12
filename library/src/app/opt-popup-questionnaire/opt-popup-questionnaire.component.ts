import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef ,MatExpansionPanel} from "@angular/material";
import {ModalContentComponent} from "../modal-content/modal-content.component";
import {FormControl, Validators} from '@angular/forms';



@Component({
  selector: 'app-opt-popup-modal',
  templateUrl: './opt-popup-questionnaire.component.html',
  styleUrls: ['./opt-popup-questionnaire.component.scss']
})


export class OptPopupQuestionnaireComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  ngOnInit() {
  }


}

