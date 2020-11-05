import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptChangeQuantityPopupComponent } from './opt-change-quantity-popup.component';

describe('OptChangeQuantityPopupComponent', () => {
  let component: OptChangeQuantityPopupComponent;
  let fixture: ComponentFixture<OptChangeQuantityPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptChangeQuantityPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptChangeQuantityPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
