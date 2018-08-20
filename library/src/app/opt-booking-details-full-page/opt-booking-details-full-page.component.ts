import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-opt-booking-details-full-page',
  templateUrl: './opt-booking-details-full-page.component.html',
  styleUrls: ['./opt-booking-details-full-page.component.scss']
})
export class OptBookingDetailsFullPageComponent implements OnInit {

  public onShown(): void {
    console.log('can be seen')
  }
  public onHidden(): void {
    console.log("can not be seen")
  }
  public html: string = '<span class="btn btn-danger">Your HTML here</span>';

  constructor() { }

  ngOnInit() {
  }

}
