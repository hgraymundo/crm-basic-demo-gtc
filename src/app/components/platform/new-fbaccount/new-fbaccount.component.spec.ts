import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFbaccountComponent } from './new-fbaccount.component';

describe('NewFbaccountComponent', () => {
  let component: NewFbaccountComponent;
  let fixture: ComponentFixture<NewFbaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFbaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFbaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
