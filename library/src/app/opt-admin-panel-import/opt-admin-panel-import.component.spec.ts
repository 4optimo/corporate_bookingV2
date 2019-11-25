import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptAdminPanelImportComponent } from './opt-admin-panel-import.component';

describe('OptAdminPanelImportComponent', () => {
  let component: OptAdminPanelImportComponent;
  let fixture: ComponentFixture<OptAdminPanelImportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptAdminPanelImportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptAdminPanelImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
