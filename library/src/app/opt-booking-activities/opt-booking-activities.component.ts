import { Component} from '@angular/core';

@Component({
  selector: 'app-opt-booking-activities',
  templateUrl: './opt-booking-activities.component.html',
  styleUrls: ['./opt-booking-activities.component.scss']
})
export class OptBookingActivitiesComponent {
  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
}
