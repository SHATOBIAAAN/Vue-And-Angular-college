import { Injectable } from '@angular/core';
import { ProductItemResponse } from './types/product.types';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private baseUrl = 'https://fakestoreapi.com'
  public productList: ProductItemResponse[] = [] 

  constructor(private httpClient: HttpClient) {}

  // public getProducts(): Observable<ProductItemResponse[]>{
  //   return this.httpClient.get<ProductItemResponse[]>(this.baseUrl + '/products')
  // }

  // Метод меняет массив в сервисе (1 случай)
  public getProducts(): void{
    this.httpClient.get<ProductItemResponse[]>(this.baseUrl + '/products')
      .subscribe((data) => {
        this.productList = data
      })
  }

  // Метод будет менять переменную в компоненте! (2 случай)
  public getProductById(id: number | string): Observable<ProductItemResponse>{
    return this.httpClient.get<ProductItemResponse>(this.baseUrl + `/products/${id}`)
  }

}
