import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptBookingApprovalSuccessPopupComponent } from './opt-booking-approval-success-popup.component';

describe('OptBookingApprovalSuccessPopupComponent', () => {
  let component: OptBookingApprovalSuccessPopupComponent;
  let fixture: ComponentFixture<OptBookingApprovalSuccessPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptBookingApprovalSuccessPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptBookingApprovalSuccessPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
