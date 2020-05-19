import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCampaingComponent } from './new-campaing.component';

describe('NewCampaingComponent', () => {
  let component: NewCampaingComponent;
  let fixture: ComponentFixture<NewCampaingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCampaingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCampaingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
