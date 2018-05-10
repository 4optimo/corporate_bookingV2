import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptBookingListComponent } from './opt-booking-list.component';

describe('OptBookingListComponent', () => {
  let component: OptBookingListComponent;
  let fixture: ComponentFixture<OptBookingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptBookingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptBookingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
