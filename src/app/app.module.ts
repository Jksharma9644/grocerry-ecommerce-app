import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,} from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsSideNavigationComponent } from './products-side-navigation/products-side-navigation.component';
import { FeedbackQueryComponent } from './feedback-query/feedback-query.component';
import { ProductBannerWidgetComponent } from './product-banner-widget/product-banner-widget.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { MainscreenComponent } from './mainscreen/mainscreen.component';
import { ProductBycategoryComponent } from './ProductPages/product-bycategory/product-bycategory.component';
import { ProductDetailComponent } from './ProductPages/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    FooterComponent,
    ProductsSideNavigationComponent,
    FeedbackQueryComponent,
    ProductBannerWidgetComponent,
    BreadcrumbsComponent,
    MainscreenComponent,
    ProductBycategoryComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
