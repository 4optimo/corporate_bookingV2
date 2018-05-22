import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptSectionHeadingComponent } from './opt-section-heading.component';

describe('OptSectionHeadingComponent', () => {
  let component: OptSectionHeadingComponent;
  let fixture: ComponentFixture<OptSectionHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptSectionHeadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptSectionHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
