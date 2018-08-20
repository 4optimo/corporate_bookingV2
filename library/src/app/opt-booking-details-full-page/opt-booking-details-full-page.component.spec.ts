import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptBookingDetailsFullPageComponent } from './opt-booking-details-full-page.component';

describe('OptBookingDetailsFullPageComponent', () => {
  let component: OptBookingDetailsFullPageComponent;
  let fixture: ComponentFixture<OptBookingDetailsFullPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptBookingDetailsFullPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptBookingDetailsFullPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
