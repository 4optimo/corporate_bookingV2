import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptBookingBatchApprovalPopupComponent } from './opt-booking-batch-approval-popup.component';

describe('OptBookingBatchApprovalPopupComponent', () => {
  let component: OptBookingBatchApprovalPopupComponent;
  let fixture: ComponentFixture<OptBookingBatchApprovalPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptBookingBatchApprovalPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptBookingBatchApprovalPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
