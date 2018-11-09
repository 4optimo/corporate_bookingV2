import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptMessageDialogComponent } from './opt-message-dialog.component';

describe('OptMessageDialogComponent', () => {
  let component: OptMessageDialogComponent;
  let fixture: ComponentFixture<OptMessageDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptMessageDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptMessageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
