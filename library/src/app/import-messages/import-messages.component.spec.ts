import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportMessagesComponent } from './import-messages.component';

describe('ImportMessagesComponent', () => {
  let component: ImportMessagesComponent;
  let fixture: ComponentFixture<ImportMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
