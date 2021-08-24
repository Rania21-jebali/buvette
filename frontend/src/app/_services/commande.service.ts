import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Commande } from '../models/commande.model';

const baseUrl = 'http://localhost:3000/api/commande';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  
  constructor(private http: HttpClient) { }

  getAll(): Observable<Commande[]> {
    return this.http.get<Commande[]>(baseUrl);
  }

  get(id: any): Observable<Commande> {
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
