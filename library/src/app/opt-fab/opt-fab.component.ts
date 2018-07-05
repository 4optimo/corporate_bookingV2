import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-opt-fab',
  templateUrl: './opt-fab.component.html',
  styleUrls: ['./opt-fab.component.scss']
})
export class OptFabComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  showMenu() {
    console.log("hello");
  }
  isSelected = false;
}
