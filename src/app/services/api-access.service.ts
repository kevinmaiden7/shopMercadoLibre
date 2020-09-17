import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiAccessService {

  public API = 'https://api.mercadolibre.com/sites/MCO/search?q=';

  constructor(
    private http: HttpClient
  ) { }

  getList(product: string, offset: number): Observable<any> {
    console.log(this.API + product + '&offset=' + offset);
    return this.http.get(this.API + product + '&offset=' + offset);
  }

}
