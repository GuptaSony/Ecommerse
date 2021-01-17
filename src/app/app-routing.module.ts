import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ProductComponent} from './product/product.component';
import {ProductDetailsComponent} from './product/product-details/product-details.component';
const routes: Routes = [{
  path:'',
  component:LoginComponent,
},
{
  path:'login',
  component:LoginComponent
},
{
  path:'product',
  component:ProductComponent
},
{
  path:'product/product-Details/:prdId',
  component:ProductDetailsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
