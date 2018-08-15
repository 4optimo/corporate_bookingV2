import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptAddNoteComponent } from './opt-add-note.component';

describe('OptAddNoteComponent', () => {
  let component: OptAddNoteComponent;
  let fixture: ComponentFixture<OptAddNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptAddNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptAddNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
