import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptBondRefundPopupComponent } from './opt-bond-refund-popup.component';

describe('OptBondRefundPopupComponent', () => {
  let component: OptBondRefundPopupComponent;
  let fixture: ComponentFixture<OptBondRefundPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptBondRefundPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptBondRefundPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
