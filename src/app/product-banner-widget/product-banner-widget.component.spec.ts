import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBannerWidgetComponent } from './product-banner-widget.component';

describe('ProductBannerWidgetComponent', () => {
  let component: ProductBannerWidgetComponent;
  let fixture: ComponentFixture<ProductBannerWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductBannerWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductBannerWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
