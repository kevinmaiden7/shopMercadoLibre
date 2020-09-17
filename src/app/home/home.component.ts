import { Component, OnInit } from '@angular/core';
import { ApiAccessService } from '../services/api-access.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  products: Array<any>;
  productsPerPage: number;
  totalProducts: number;
  page;

  constructor(
    private apiAccess: ApiAccessService,
  ) { 
      this.productsPerPage = 50;
      this.totalProducts = 0;
      this.page = 1;
  }

  ngOnInit() {
  }

  search(input){
    this.apiAccess.getList(input, (this.page - 1) * this.productsPerPage).subscribe(data => {
      this.totalProducts = data.paging.total;
      this.products = data.results;
    });
  }
 
}
