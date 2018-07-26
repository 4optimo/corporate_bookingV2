import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptTooltipComponent } from './opt-tooltip.component';

describe('OptTooltipComponent', () => {
  let component: OptTooltipComponent;
  let fixture: ComponentFixture<OptTooltipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptTooltipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
