import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptDocumentPopupsComponent } from './opt-document-popups.component';

describe('OptDocumentPopupsComponent', () => {
  let component: OptDocumentPopupsComponent;
  let fixture: ComponentFixture<OptDocumentPopupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptDocumentPopupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptDocumentPopupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
