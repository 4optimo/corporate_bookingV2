import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptTabbedPopoverComponent } from './opt-tabbed-popover.component';

describe('OptTabbedPopoverComponent', () => {
  let component: OptTabbedPopoverComponent;
  let fixture: ComponentFixture<OptTabbedPopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptTabbedPopoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptTabbedPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
