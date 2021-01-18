import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-add-buyer',
  templateUrl: './add-buyer.component.html',
  styleUrls: ['./add-buyer.component.scss']
})
export class AddBuyerComponent implements OnInit {
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
  }
  
  addBuyer(){
    /// save buyer Data 
    this.product.addBuyer(this.BuyerModel).subscribe(data => {
      debugger;
      console.log(data);
      
      setTimeout(() => {
        this.activeModal.close(data);//return buyer id
      }, 2000);
    },
      err => {
        console.log(err);
      });

  }
}
