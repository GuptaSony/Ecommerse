import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/shared/models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-add-edit',
  templateUrl: './product-add-edit.component.html',
  styleUrls: ['./product-add-edit.component.scss']
})
export class ProductAddEditComponent implements OnInit {
  categoryList: any;
  @Input() productData: any;
  ProductModel = new Product(0, 16, '', '', '', 0, 0, 0, '');

  constructor(public activeModal: NgbActiveModal, private product: ProductService,) {
  }

  ngOnInit(): void {
    if (this.productData) {
      debugger;
      this.ProductModel = this.productData;
    }

    this.getCategoryList();
  }

  getCategoryList() {
    this.product.productCategoryList().subscribe(data => {
      debugger;
      console.log(data);
      this.categoryList = data;
    },
      err => {
        console.log(err);
      });
  }
  getSelectedCategory(event: any) {
    debugger;
    let selectedOptions = event.target['options'];
    let selectedIndex = selectedOptions.selectedIndex;
    let selectElementText = selectedOptions[selectedIndex].text;
    this.ProductModel.category=selectElementText;
    console.log(selectElementText);
  }
  saveAddEditProduct() {
    debugger;
    this.product.ProductAddEdit(this.ProductModel).subscribe(data => {
      debugger;
      console.log(data);
      setTimeout(() => {
        this.activeModal.close(data);
      }, 2000);
    },
      err => {
        console.log(err);
      });

  }
}
