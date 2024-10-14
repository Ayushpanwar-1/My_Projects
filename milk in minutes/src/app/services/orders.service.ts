import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../models/Order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private hc:HttpClient) { }
  url:string="http://localhost:4000/Orders";

  sendOrder(order:any):Observable<Order>
  {
    return this.hc.post<Order>(this.url,order);
  }

  getallOrders():Observable<Order[]>
  {
    return this.hc.get<Order[]>(this.url);
  }
  deleteorder(id?:number)
  {
    return this.hc.delete(this.url+"/"+id);
  }


}
