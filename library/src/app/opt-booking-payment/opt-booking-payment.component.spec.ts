import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptBookingPaymentComponent } from './opt-booking-payment.component';

describe('OptBookingPaymentComponent', () => {
  let component: OptBookingPaymentComponent;
  let fixture: ComponentFixture<OptBookingPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptBookingPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptBookingPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
