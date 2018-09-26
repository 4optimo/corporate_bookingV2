import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptDocumentSelectPopupComponent } from './opt-document-select-popup.component';

describe('OptDocumentSelectPopupComponent', () => {
  let component: OptDocumentSelectPopupComponent;
  let fixture: ComponentFixture<OptDocumentSelectPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptDocumentSelectPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptDocumentSelectPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
