import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptBondItemCartComponent } from './opt-bond-item-cart.component';

describe('OptBondItemCartComponent', () => {
  let component: OptBondItemCartComponent;
  let fixture: ComponentFixture<OptBondItemCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptBondItemCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptBondItemCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
