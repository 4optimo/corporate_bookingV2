import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-opt-toast-message',
  templateUrl: './opt-toast-message.component.html',
  styleUrls: ['./opt-toast-message.component.scss']
})
export class OptToastMessageComponent implements OnInit {

  constructor(public snackBar: MatSnackBar) {}
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'end'
    });
  }

  ngOnInit() {
  }

}
