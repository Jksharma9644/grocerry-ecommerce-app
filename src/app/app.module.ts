import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,} from '@angular/core';
import { FormsModule ,ReactiveFormsModule}   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
// services

import {ProductService} from './services/product.service';
import {SharedService} from './services/shared.service';
import {AuthService} from './services/auth.service';
import {AuthguardService} from './services/authguard.service';
import { JwtModule } from '@auth0/angular-jwt';
export function tokenGetter() {
  return localStorage.getItem('token');
}


import { CheckoutpageComponent } from './checkoutpage/checkoutpage.component';
import { MinicartComponent } from './minicart/minicart.component';
import { PaymentComponent } from './payment/payment.component';
import { FormLayoutComponent } from './layout/form-layout/form-layout.component';
import { EmailverificationComponent } from './emailverification/emailverification.component';
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
    LoginComponent,
    CheckoutpageComponent,
    MinicartComponent,
    PaymentComponent,
    FormLayoutComponent,
    EmailverificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({})
  ],
  providers: [ProductService,SharedService,AuthService,AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
