import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptEmailDocumentPopupComponent } from './opt-email-document-popup.component';

describe('OptEmailDocumentPopupComponent', () => {
  let component: OptEmailDocumentPopupComponent;
  let fixture: ComponentFixture<OptEmailDocumentPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptEmailDocumentPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptEmailDocumentPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
