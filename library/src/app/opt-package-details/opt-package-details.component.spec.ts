import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptPackageDetailsComponent } from './opt-package-details.component';

describe('OptPackageDetailsComponent', () => {
  let component: OptPackageDetailsComponent;
  let fixture: ComponentFixture<OptPackageDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptPackageDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptPackageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
