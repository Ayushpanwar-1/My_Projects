import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/Products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchingService {

  constructor(private hc:HttpClient) { }
  url:string="http://localhost:3000/Products";

  fetchdata():Observable<Product[]>
  {
    return this.hc.get<Product[]>(this.url);
  }
  
  fetchProduct(id?:number):Observable<Product>
  {
    return this.hc.get<Product>(this.url+"/"+id);
  }
  
}
