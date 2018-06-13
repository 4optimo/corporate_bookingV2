import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptClientListComponent } from './opt-client-list.component';

describe('OptClientListComponent', () => {
  let component: OptClientListComponent;
  let fixture: ComponentFixture<OptClientListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptClientListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptClientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
