import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptPackagePopupComponent } from './opt-package-popup.component';

describe('OptPackagePopupComponent', () => {
  let component: OptPackagePopupComponent;
  let fixture: ComponentFixture<OptPackagePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptPackagePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptPackagePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
