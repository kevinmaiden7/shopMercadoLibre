import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ApiAccessService } from '../services/api-access.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {

  sub: Subscription;
  product: any;
  productImage: any;
  sellerNickname: String;
  discount: number;

  constructor(
    private route: ActivatedRoute,
    private apiAccess: ApiAccessService,
  ) {
    this.product = {};
    this.sellerNickname = "";
    this.productImage = "";
    this.discount = 0;
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.apiAccess.getProduct(id).subscribe((product: any) => {
          if (product){
            this.product = product;

            if (product.pictures.length > 1){
              this.productImage = product.pictures[1].url;
            }else{
              this.productImage = product.pictures[0].url;
            }

            if (product.original_price){
              this.discount = Number((100 - (product.price * 100 / product.original_price)).toFixed());
            }else{
              this.discount = 0;
            }
            this.getSellerNickname(this.product.seller_id);
          }else{
            console.log("Product not found")
          }
        });
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getSellerNickname(seller_id){
    this.apiAccess.getSeller(seller_id).subscribe((seller: any) => {
      if (seller){
        this.sellerNickname = seller.nickname;
      }
    });
  }

}
