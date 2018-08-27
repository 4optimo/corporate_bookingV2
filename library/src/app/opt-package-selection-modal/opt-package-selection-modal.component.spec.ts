import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptPackageSelectionModalComponent } from './opt-package-selection-modal.component';

describe('OptPackageSelectionModalComponent', () => {
  let component: OptPackageSelectionModalComponent;
  let fixture: ComponentFixture<OptPackageSelectionModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptPackageSelectionModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptPackageSelectionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
