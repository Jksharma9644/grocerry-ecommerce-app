import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainscreenComponent } from './mainscreen/mainscreen.component';
import { ProductBycategoryComponent } from './ProductPages/product-bycategory/product-bycategory.component';
import { ProductDetailComponent } from './ProductPages/product-detail/product-detail.component';
const routes: Routes = [
  {
    path:'',
    component:MainscreenComponent
  },
  {
    path:"product/:item",
    component:ProductBycategoryComponent
  },
  {
    path:"details/:id",
    component:ProductBycategoryComponent
  },
  {
    path:"*",
    redirectTo:""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
