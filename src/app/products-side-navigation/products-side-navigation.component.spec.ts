import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsSideNavigationComponent } from './products-side-navigation.component';

describe('ProductsSideNavigationComponent', () => {
  let component: ProductsSideNavigationComponent;
  let fixture: ComponentFixture<ProductsSideNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsSideNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsSideNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
