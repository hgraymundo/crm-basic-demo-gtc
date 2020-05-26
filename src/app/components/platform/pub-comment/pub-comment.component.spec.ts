import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PubCommentComponent } from './pub-comment.component';

describe('PubCommentComponent', () => {
  let component: PubCommentComponent;
  let fixture: ComponentFixture<PubCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PubCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PubCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
