import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Layout80Component } from './layout80.component';

describe('Layout80Component', () => {
  let component: Layout80Component;
  let fixture: ComponentFixture<Layout80Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Layout80Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Layout80Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
