import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptBookingEditLayoutComponent } from './opt-booking-edit-layout.component';

describe('OptBookingEditLayoutComponent', () => {
  let component: OptBookingEditLayoutComponent;
  let fixture: ComponentFixture<OptBookingEditLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptBookingEditLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptBookingEditLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
