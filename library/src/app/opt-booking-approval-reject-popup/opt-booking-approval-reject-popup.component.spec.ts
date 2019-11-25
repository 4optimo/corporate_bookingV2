import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptBookingApprovalRejectPopupComponent } from './opt-booking-approval-reject-popup.component';

describe('OptBookingApprovalRejectPopupComponent', () => {
  let component: OptBookingApprovalRejectPopupComponent;
  let fixture: ComponentFixture<OptBookingApprovalRejectPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptBookingApprovalRejectPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptBookingApprovalRejectPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
