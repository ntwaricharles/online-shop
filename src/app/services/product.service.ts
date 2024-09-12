import { Injectable } from '@angular/core';
// eslint-disable-next-line import/no-unresolved
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }
}
