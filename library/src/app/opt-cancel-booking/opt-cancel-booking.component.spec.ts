import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptCancelBookingComponent } from './opt-cancel-booking.component';

describe('OptCancelBookingComponent', () => {
  let component: OptCancelBookingComponent;
  let fixture: ComponentFixture<OptCancelBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptCancelBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptCancelBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
