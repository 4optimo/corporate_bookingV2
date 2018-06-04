import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptBookingListExpandComponent } from './opt-booking-list-expand.component';

describe('OptBookingListExpandComponent', () => {
  let component: OptBookingListExpandComponent;
  let fixture: ComponentFixture<OptBookingListExpandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptBookingListExpandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptBookingListExpandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
