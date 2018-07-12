import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptBookingFullPageComponent } from './opt-booking-full-page.component';

describe('OptBookingFullPageComponent', () => {
  let component: OptBookingFullPageComponent;
  let fixture: ComponentFixture<OptBookingFullPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptBookingFullPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptBookingFullPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
