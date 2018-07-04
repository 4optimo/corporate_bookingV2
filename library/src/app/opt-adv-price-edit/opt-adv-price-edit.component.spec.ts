import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptAdvPriceEditComponent } from './opt-adv-price-edit.component';

describe('OptAdvPriceEditComponent', () => {
  let component: OptAdvPriceEditComponent;
  let fixture: ComponentFixture<OptAdvPriceEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptAdvPriceEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptAdvPriceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
