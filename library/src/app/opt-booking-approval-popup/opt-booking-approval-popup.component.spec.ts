import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptBookingApprovalPopupComponent } from './opt-booking-approval-popup.component';

describe('OptBookingApprovalPopupComponent', () => {
  let component: OptBookingApprovalPopupComponent;
  let fixture: ComponentFixture<OptBookingApprovalPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptBookingApprovalPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptBookingApprovalPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
