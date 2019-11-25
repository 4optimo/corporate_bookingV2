import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptBookingApprovalStatusPopupComponent } from './opt-booking-approval-status-popup.component';

describe('OptBookingApprovalStatusPopupComponent', () => {
  let component: OptBookingApprovalStatusPopupComponent;
  let fixture: ComponentFixture<OptBookingApprovalStatusPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptBookingApprovalStatusPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptBookingApprovalStatusPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
