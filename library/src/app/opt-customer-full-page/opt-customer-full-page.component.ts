import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opt-customer-full-page',
  templateUrl: './opt-customer-full-page.component.html',
  styleUrls: ['./opt-customer-full-page.component.scss']
})
export class OptCustomerFullPageComponent implements OnInit {

  customerListArray = new Array(18);

  constructor() { }

  ngOnInit() {
  }

}
