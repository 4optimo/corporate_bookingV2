import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptCollectionDispatchListComponent } from './opt-collection-dispatch-list.component';

describe('OptCollectionDispatchListComponent', () => {
  let component: OptCollectionDispatchListComponent;
  let fixture: ComponentFixture<OptCollectionDispatchListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptCollectionDispatchListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptCollectionDispatchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
