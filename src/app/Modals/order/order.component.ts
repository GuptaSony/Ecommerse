import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  @Input() orderData:any;
  BuyerModel:any;
  constructor(public activeModal: NgbActiveModal, private product: ProductService) {
    this.BuyerModel={
      name:"",
      mobile:"",
      email:"",
      Address:"",

    }
  }


  ngOnInit(): void {
    console.log(this.orderData);
  }
  
  saveOrder(){
    debugger
    let obj = {
        "order_id": 0,
        "buyer_id": sessionStorage.getItem('buyerId'),
        "tax_amount": this.orderData.tax_rate,
        "total_amount": (this.orderData.price * this.orderData.qty) + this.orderData.tax_rate,
        "orer_items": [
          {
            "product_id": this.orderData.product_id,
            "price": this.orderData.price,
            "tax": this.orderData.tax_rate,
            "qty": this.orderData.qty,
            "tax_amount": this.orderData.tax_rate,
            "amount": (this.orderData.price * this.orderData.qty) + this.orderData.tax_rate,
          }
        ]
    };
    this.product.addOrder(obj).subscribe(data => {
      debugger;
      console.log(data);
      alert(data.result.return_message);
      setTimeout(() => {
        this.activeModal.close(data);//return buyer id
      }, 2000);
    },
      err => {
        console.log(err);
      });

  }
}
