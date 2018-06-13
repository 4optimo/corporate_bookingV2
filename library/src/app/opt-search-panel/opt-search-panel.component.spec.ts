import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptSearchPanelComponent } from './opt-search-panel.component';

describe('OptSearchPanelComponent', () => {
  let component: OptSearchPanelComponent;
  let fixture: ComponentFixture<OptSearchPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptSearchPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptSearchPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
