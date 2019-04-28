import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBannerCategoryComponent } from './product-banner-category.component';

describe('ProductBannerCategoryComponent', () => {
  let component: ProductBannerCategoryComponent;
  let fixture: ComponentFixture<ProductBannerCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductBannerCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductBannerCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
