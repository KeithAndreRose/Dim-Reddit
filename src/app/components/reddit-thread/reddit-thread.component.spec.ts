import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditThreadComponent } from './reddit-thread.component';

describe('RedditThreadComponent', () => {
  let component: RedditThreadComponent;
  let fixture: ComponentFixture<RedditThreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedditThreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedditThreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
