import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptNormalSearchComponent } from './opt-normal-search.component';

describe('OptNormalSearchComponent', () => {
  let component: OptNormalSearchComponent;
  let fixture: ComponentFixture<OptNormalSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptNormalSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptNormalSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
