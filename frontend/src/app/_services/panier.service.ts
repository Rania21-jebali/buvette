import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../models/article.model';
import { Panier } from '../models/panier.model';

const baseUrl = 'http://localhost:3000/api/panier';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  
  constructor(private http: HttpClient) { }
 // get all 
  getAll(): Observable<Panier[]> {
    return this.http.get<Panier[]>(baseUrl);
  }

  get(id: any): Observable<Panier> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  
}
