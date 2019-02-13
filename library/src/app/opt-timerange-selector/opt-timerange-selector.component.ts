import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opt-timerange-selector',
  templateUrl: './opt-timerange-selector.component.html',
  styleUrls: ['./opt-timerange-selector.component.scss']
})
export class OptTimerangeSelectorComponent implements OnInit {
  slots:any[]=[];
  constructor() { }

  ngOnInit() {
    this.slots = [
      {
          start: 2.25,
          end: 3.75,
      },
      {
          start: 13.00,
          end: 15.00,
      },
      {
          start: 18.00,
          end: 19.75,
      },
   ]
  }

}
