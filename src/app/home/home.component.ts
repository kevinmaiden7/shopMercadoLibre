import { Component, OnInit } from '@angular/core';
import { ApiAccessService } from '../services/api-access.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  products: Array<any>;

  constructor(
    private apiAccess: ApiAccessService,
  ) { 
  }

  ngOnInit() {
  }

  search(input){
    console.log(input);
    this.apiAccess.getList(input).subscribe(data => {
      this.products = data.results;
      console.log(this.products);
    }); 
  }
  /*
  console.log(this.products[0].id);
  console.log(this.products[0].title);
  console.log(this.products[0].price);
  console.log(this.products[0].thumbnail);
  */
 
}
