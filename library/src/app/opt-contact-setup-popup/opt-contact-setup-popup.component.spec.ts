import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptContactSetupPopupComponent } from './opt-contact-setup-popup.component';

describe('OptContactSetupPopupComponent', () => {
  let component: OptContactSetupPopupComponent;
  let fixture: ComponentFixture<OptContactSetupPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptContactSetupPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptContactSetupPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
