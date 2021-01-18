import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlConstants } from "../constants/urlConstants";
import { map } from 'rxjs/operators';
import { ApiService } from "./api.service";
import {Router} from "@angular/router";
import {Product} from '../shared/models/product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private apiService:ApiService) { }

  productCategoryList(): Observable<any>{
    debugger;
    return this.apiService.get(UrlConstants.BaseUrl+UrlConstants.Product.Get.productCategoryList).pipe(map(
        data => {
            debugger;
            return data.result;
        }
    ));
} 

  productList(theUserId:any): Observable<any>{
    debugger;
    return this.apiService.get(UrlConstants.BaseUrl+UrlConstants.Product.Get.PorductList+'?theUserId='+theUserId).pipe(map(
        data => {
            debugger;
            if (data.result.token){
                debugger;
                localStorage.setItem('returnValue',data.result.return_value);
            }
            return data;
        }
    ));
}

ProductAddEdit(objproduct:Product): Observable<any>{
  debugger;
  return this.apiService.post(UrlConstants.BaseUrl+UrlConstants.Product.Post.ProductAddEdit,objproduct).pipe(map(
      data => {
          debugger;
          if (data.result.token){
              debugger;
              localStorage.setItem('returnValue',data.result.return_value);
          }
          return data;
      }
  ));
}

productDetails(productId:any,theUserId:any):Observable<any>{
    debugger;
    // theProductId=7&theUserId=16
    return this.apiService.get(UrlConstants.BaseUrl+UrlConstants.Product.Get.ProductById+'?theProductId='+productId +'&theUserId='+theUserId).pipe(map(
        data => {
            debugger;
            return data;
        }
    ));
}

delProduct(product_id:any){
    return this.apiService.delete(UrlConstants.BaseUrl+UrlConstants.Product.Get.DeleteProduct ).pipe(map(
        data => {
            console.log(data)
            return data;
        }
    ));
}

addBuyer(buyer:any):Observable<any>{
    debugger;
    // theProductId=7&theUserId=16
    return this.apiService.post(UrlConstants.BaseUrl+UrlConstants.Product.Post.BuyerAdd,buyer).pipe(map(
        data => {
            debugger;
            return data;
        }
    ));
}
addOrder(buyer:any):Observable<any>{
    debugger;
    // theProductId=7&theUserId=16
    return this.apiService.post(UrlConstants.BaseUrl+UrlConstants.Product.Post.OrderAdd,buyer).pipe(map(
        data => {
            debugger;
            return data;
        }
    ));
}
}
