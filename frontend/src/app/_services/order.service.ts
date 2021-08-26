import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
const baseUrl = 'http://localhost:3000/api/commande';

@Injectable({
  providedIn: 'root'
})

export class OrderService {
  products: ProductResponseModel[] = [];
  
  constructor(private http: HttpClient) {
  }


  getSingleOrder(orderId: Number) {
    return this.http.get<ProductResponseModel[]>(baseUrl).toPromise();
  }
}

interface ProductResponseModel {
  id: Number;
  title: String;
  description: String;
  prix: Number;
}