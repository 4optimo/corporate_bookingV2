import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptBookingPackageConvertPopupComponent } from './opt-booking-package-convert-popup.component';

describe('OptBookingPackageConvertPopupComponent', () => {
  let component: OptBookingPackageConvertPopupComponent;
  let fixture: ComponentFixture<OptBookingPackageConvertPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptBookingPackageConvertPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptBookingPackageConvertPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
