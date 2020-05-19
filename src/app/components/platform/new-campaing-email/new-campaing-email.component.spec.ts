import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCampaingEmailComponent } from './new-campaing-email.component';

describe('NewCampaingEmailComponent', () => {
  let component: NewCampaingEmailComponent;
  let fixture: ComponentFixture<NewCampaingEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCampaingEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCampaingEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
