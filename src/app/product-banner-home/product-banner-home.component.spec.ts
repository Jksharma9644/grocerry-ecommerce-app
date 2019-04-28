import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBannerHomeComponent } from './product-banner-home.component';

describe('ProductBannerHomeComponent', () => {
  let component: ProductBannerHomeComponent;
  let fixture: ComponentFixture<ProductBannerHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductBannerHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductBannerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
