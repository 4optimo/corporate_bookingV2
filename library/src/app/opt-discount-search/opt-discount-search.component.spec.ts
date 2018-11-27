import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptDiscountSearchComponent } from './opt-discount-search.component';

describe('OptDiscountSearchComponent', () => {
  let component: OptDiscountSearchComponent;
  let fixture: ComponentFixture<OptDiscountSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptDiscountSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptDiscountSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
