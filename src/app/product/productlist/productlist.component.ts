import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Product } from 'src/app/shared/models/product.model';
import { ProductAddEditComponent } from '../../Modals/product-add-edit/product-add-edit.component';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {

  constructor(private product: ProductService, private modalService: NgbModal) { }
  public productList: any;

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList() {
    let theUserId = localStorage.getItem('returnValue');
    this.product.productList(theUserId).subscribe(data => {
      debugger;
      console.log(data);
      this.productList=data.result;
    },
      err => {
        console.log(err);
      });
  }

  addProduct(product:any) {
    debugger;
    let productData = this.modalService.open(ProductAddEditComponent, { size: 'lg', backdrop: 'static' });
    productData.componentInstance.productData = product;

    productData.result.then((result) => {
      if (result) {
        // this.customLoader = true;
        console.log(result);
        alert(result.result.return_message);
        this.getProductList();
        // this.customLoader = false;
      }
    }, (reason) => {
      console.log(reason);
      // this.customLoader = false;
    });
  }

  deleteProduct(product_id:any){
    this.product.delProduct(product_id).subscribe(data=>{
      console.log(data);
    })
  }
}
