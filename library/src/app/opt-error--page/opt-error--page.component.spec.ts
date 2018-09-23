import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptErrorPageComponent } from './opt-error--page.component';

describe('OptErrorPageComponent', () => {
  let component: OptErrorPageComponent;
  let fixture: ComponentFixture<OptErrorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptErrorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptErrorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
