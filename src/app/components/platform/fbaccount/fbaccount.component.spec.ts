import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbaccountComponent } from './fbaccount.component';

describe('FbaccountComponent', () => {
  let component: FbaccountComponent;
  let fixture: ComponentFixture<FbaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
