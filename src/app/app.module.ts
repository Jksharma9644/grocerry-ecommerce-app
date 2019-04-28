import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsSideNavigationComponent } from './products-side-navigation/products-side-navigation.component';
import { FeedbackQueryComponent } from './feedback-query/feedback-query.component';
import { ProductBannerWidgetComponent } from './product-banner-widget/product-banner-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    FooterComponent,
    ProductsSideNavigationComponent,
    FeedbackQueryComponent,
    ProductBannerWidgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
