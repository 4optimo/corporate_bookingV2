import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingProjectComponent } from './routing-project.component';

describe('RoutingProjectComponent', () => {
  let component: RoutingProjectComponent;
  let fixture: ComponentFixture<RoutingProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
