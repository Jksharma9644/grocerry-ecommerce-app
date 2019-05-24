import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainscreenComponent } from './mainscreen/mainscreen.component';
import { ProductBycategoryComponent } from './ProductPages/product-bycategory/product-bycategory.component';
import { ProductDetailComponent } from './ProductPages/product-detail/product-detail.component';
import { LayoutFullComponent } from './layout/layout-full/layout-full.component';
import { Layout80Component } from './layout/layout80/layout80.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { CheckoutpageComponent } from './checkoutpage/checkoutpage.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutFullComponent,
    children: [
      { path: '', component: MainscreenComponent, pathMatch: 'full' },
    ]
  },
  {
    path: "",
    component: Layout80Component,
    children: [
      { path: 'product/:item', component: ProductBycategoryComponent },
      { path: 'details/:id', component: ProductDetailComponent },
      { path: 'contact', component: ContactUsComponent },
      { path: 'checkout', component: CheckoutpageComponent },
      { path: 'payment', component: PaymentComponent },
      { path: 'login', component: LoginComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
