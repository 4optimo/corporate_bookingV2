import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptPackageCartComponent } from './opt-package-cart.component';

describe('OptPackageCartComponent', () => {
  let component: OptPackageCartComponent;
  let fixture: ComponentFixture<OptPackageCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptPackageCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptPackageCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
