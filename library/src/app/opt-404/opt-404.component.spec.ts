import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Opt404Component } from './opt-404.component';

describe('Opt404Component', () => {
  let component: Opt404Component;
  let fixture: ComponentFixture<Opt404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Opt404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Opt404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
