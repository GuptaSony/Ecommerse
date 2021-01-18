//Module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule,FormsModule} from '@angular/forms';
import {HttpClientModule,HTTP_INTERCEPTORS} from "@angular/common/http";
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

//Component
import { AppComponent } from './app.component';
import {LoginComponent} from './login/login.component';
import { ProductComponent } from './product/product.component';
import { ProductlistComponent } from './product/productlist/productlist.component';
import {ProductAddEditComponent} from "./Modals/product-add-edit/product-add-edit.component";




//services
import { UserService} from './services/user.service';
import {TokenInterceptor } from './services/httpResponse.interceptor';
import { AuthCodeService } from './services/authCode.service';
import { ApiService } from './services/api.service';
import { ssService } from './services/sessionStorage.service';
import { TokenService } from './services/token.service';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { AddBuyerComponent } from './Modals/add-buyer/add-buyer.component';
import { OrderComponent } from './Modals/order/order.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    LoginComponent,
    ProductlistComponent,
    ProductAddEditComponent,
    ProductDetailsComponent,
    AddBuyerComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  entryComponents: [
    ProductAddEditComponent,
    AddBuyerComponent,
    OrderComponent
 ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
    ,UserService,AuthCodeService,
    ApiService,ssService,TokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
