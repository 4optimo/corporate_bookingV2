import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptBookingActivitiesComponent } from './opt-booking-activities.component';

describe('OptBookingActivitiesComponent', () => {
  let component: OptBookingActivitiesComponent;
  let fixture: ComponentFixture<OptBookingActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptBookingActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptBookingActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
