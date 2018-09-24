import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptDocumentPopoverComponent } from './opt-document-popover.component';

describe('OptDocumentPopoverComponent', () => {
  let component: OptDocumentPopoverComponent;
  let fixture: ComponentFixture<OptDocumentPopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptDocumentPopoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptDocumentPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
