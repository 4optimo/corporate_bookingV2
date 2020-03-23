import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptPriceModalComponent } from './opt-price-modal.component';

describe('OptPriceModalComponent', () => {
  let component: OptPriceModalComponent;
  let fixture: ComponentFixture<OptPriceModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptPriceModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptPriceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
