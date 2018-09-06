import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptItemModalPopoversComponent } from './opt-item-modal-popovers.component';

describe('OptItemModalPopoversComponent', () => {
  let component: OptItemModalPopoversComponent;
  let fixture: ComponentFixture<OptItemModalPopoversComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptItemModalPopoversComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptItemModalPopoversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
