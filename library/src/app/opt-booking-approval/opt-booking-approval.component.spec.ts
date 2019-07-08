import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptBookingApprovalComponent } from './opt-booking-approval.component';

describe('OptBookingApprovalComponent', () => {
  let component: OptBookingApprovalComponent;
  let fixture: ComponentFixture<OptBookingApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptBookingApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptBookingApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
