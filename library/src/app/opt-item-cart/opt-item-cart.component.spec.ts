import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptItemCartComponent } from './opt-item-cart.component';

describe('OptItemCartComponent', () => {
  let component: OptItemCartComponent;
  let fixture: ComponentFixture<OptItemCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptItemCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptItemCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
