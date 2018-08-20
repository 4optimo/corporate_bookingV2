import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptSuccessComponent } from './opt-success.component';

describe('OptSuccessComponent', () => {
  let component: OptSuccessComponent;
  let fixture: ComponentFixture<OptSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
