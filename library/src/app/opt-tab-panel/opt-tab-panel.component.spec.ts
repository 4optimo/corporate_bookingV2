import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptTabPanelComponent } from './opt-tab-panel.component';

describe('OptTabPanelComponent', () => {
  let component: OptTabPanelComponent;
  let fixture: ComponentFixture<OptTabPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptTabPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptTabPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
