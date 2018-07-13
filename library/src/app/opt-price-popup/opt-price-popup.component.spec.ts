import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptPricePopupComponent } from './opt-price-popup.component';

describe('OptPricePopupComponent', () => {
  let component: OptPricePopupComponent;
  let fixture: ComponentFixture<OptPricePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptPricePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptPricePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
