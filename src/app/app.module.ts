import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,} from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsSideNavigationComponent } from './products-side-navigation/products-side-navigation.component';
import { FeedbackQueryComponent } from './feedback-query/feedback-query.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { MainscreenComponent } from './mainscreen/mainscreen.component';
import { ProductBycategoryComponent } from './ProductPages/product-bycategory/product-bycategory.component';
import { ProductDetailComponent } from './ProductPages/product-detail/product-detail.component';
import { LayoutFullComponent } from './layout/layout-full/layout-full.component';
import { Layout80Component } from './layout/layout80/layout80.component';
import { ProductBannerHomeComponent } from './product-banner-home/product-banner-home.component';
import { ProductBannerCategoryComponent } from './product-banner-category/product-banner-category.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    FooterComponent,
    ProductsSideNavigationComponent,
    FeedbackQueryComponent,
    BreadcrumbsComponent,
    MainscreenComponent,
    ProductBycategoryComponent,
    ProductDetailComponent,
    LayoutFullComponent,
    Layout80Component,
    ProductBannerHomeComponent,
    ProductBannerCategoryComponent,
    ContactUsComponent,
    LoginComponent
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
