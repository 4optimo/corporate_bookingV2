import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptTripleToggleComponent } from './opt-triple-toggle.component';

describe('OptTripleToggleComponent', () => {
  let component: OptTripleToggleComponent;
  let fixture: ComponentFixture<OptTripleToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptTripleToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptTripleToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
