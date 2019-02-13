import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptTimerangeSelectorComponent } from './opt-timerange-selector.component';

describe('OptTimerangeSelectorComponent', () => {
  let component: OptTimerangeSelectorComponent;
  let fixture: ComponentFixture<OptTimerangeSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptTimerangeSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptTimerangeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
