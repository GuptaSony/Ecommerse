import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ProductService } from '../../services/product.service';
import { AddBuyerComponent } from '../../Modals/add-buyer/add-buyer.component';
import { OrderComponent } from 'src/app/Modals/order/order.component';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product_id:any;
  productDetails:any;
  constructor(private actRoute: ActivatedRoute,private product: ProductService,private modalService: NgbModal) {
    this.product_id = this.actRoute.snapshot.params.prdId;
    console.log(this.product_id);

  }

  ngOnInit(): void {
    this.getproductDetails();
  }

  getproductDetails(){
    let theUserId = localStorage.getItem('returnValue');
    this.product.productDetails(this.product_id,theUserId).subscribe(data => {
      debugger;
      this.productDetails=data.result;
      console.log(this.productDetails)
    },
      err => {
        console.log(err);
      });
  }

  addbuyerbtn(){
    let buyerData = this.modalService.open(AddBuyerComponent, { size: 'lg', backdrop: 'static' });
    // buyerData.componentInstance.buyerData = product;
    buyerData.result.then((result) => {
      if (result) {
        // store buyer id in localstorage and show itemdata
        // this.customLoader = true;
        alert(result.result.return_message);
        console.log(result);
        debugger
        sessionStorage.setItem('buyerId', result.result.return_value);
        
        // this.customLoader = false;
      }
    }, (reason) => {
      console.log(reason);
      // this.customLoader = false;
    });

  }
  orderNow(details:any){
    let buyerData = this.modalService.open(OrderComponent, { size: 'lg', backdrop: 'static' });
    buyerData.componentInstance.orderData = details;
    buyerData.result.then((result) => {
      if (result) {

        console.log(result);
      }
    }, (reason) => {
      console.log(reason);
    });
    
      
  }
}
