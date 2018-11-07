import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {OptErrorMessageComponent} from '../opt-error-message/opt-error-message.component';
import {OptWarningMessageComponent} from '../opt-warning-message/opt-warning-message.component';
import {OptSuccessMessageComponent} from '../opt-success-message/opt-success-message.component';

@Component({
  selector: 'app-opt-toast-message',
  templateUrl: './opt-toast-message.component.html',
  styleUrls: ['./opt-toast-message.component.scss']
})

export class OptToastMessageComponent implements OnInit {

  constructor(public snackBar: MatSnackBar) {}
  openSnackBarError() {
    this.snackBar.openFromComponent(OptErrorMessageComponent, {
      duration: 4000,
      verticalPosition: 'top',
    });
  }
  openSnackBarWarning() {
    this.snackBar.openFromComponent(OptWarningMessageComponent, {
      duration: 4000,
      verticalPosition: 'top',
    });
  }
  openSnackBarSuccess() {
    this.snackBar.openFromComponent(OptSuccessMessageComponent, {
      duration: 4000,
      verticalPosition: 'top',
    });
  }
  ngOnInit() {
  }

}
