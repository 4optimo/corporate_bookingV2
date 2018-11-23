import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptDiscountCartComponent } from './opt-discount-cart.component';

describe('OptDiscountCartComponent', () => {
  let component: OptDiscountCartComponent;
  let fixture: ComponentFixture<OptDiscountCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptDiscountCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptDiscountCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
