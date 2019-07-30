import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackQueryComponent } from './feedback-query.component';

describe('FeedbackQueryComponent', () => {
  let component: FeedbackQueryComponent;
  let fixture: ComponentFixture<FeedbackQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
