import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptDoubleToggleComponent } from './opt-double-toggle.component';

describe('OptDoubleToggleComponent', () => {
  let component: OptDoubleToggleComponent;
  let fixture: ComponentFixture<OptDoubleToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptDoubleToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptDoubleToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
