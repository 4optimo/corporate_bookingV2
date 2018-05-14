import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptBookingDetailsComponent } from './opt-booking-details.component';

describe('OptBookingDetailsComponent', () => {
  let component: OptBookingDetailsComponent;
  let fixture: ComponentFixture<OptBookingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptBookingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptBookingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
