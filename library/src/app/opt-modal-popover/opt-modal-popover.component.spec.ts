import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptModalPopoverComponent } from './opt-modal-popover.component';

describe('OptModalPopoverComponent', () => {
  let component: OptModalPopoverComponent;
  let fixture: ComponentFixture<OptModalPopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptModalPopoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptModalPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
