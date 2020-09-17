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

  constructor(
    private route: ActivatedRoute,
    private apiAccess: ApiAccessService,
  ) {
    this.product = {};
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        console.log(id);
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
