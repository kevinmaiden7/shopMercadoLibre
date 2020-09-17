import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiAccessService {

  public API = 'https://api.mercadolibre.com';
  public API_LIST = this.API + '/sites/MCO/search?q=';
  public API_PRODUCT = this.API + 'items/';

  constructor(
    private http: HttpClient
  ) { }

  getList(product: string, offset: number): Observable<any> {
    return this.http.get(this.API_LIST + product + '&offset=' + offset);
  }

  getProduct(id: string){
    return this.http.get(this.API_PRODUCT + id);
  }

}
