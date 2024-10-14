import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../services/orders.service';
import { Order } from '../models/Order';
import { Router } from '@angular/router';
import { LoginCheckService } from '../services/login-check.service';

@Component({
  selector: 'app-admin-order-view',
  templateUrl: './admin-order-view.component.html',
  styleUrl: './admin-order-view.component.css'
})
export class AdminOrderViewComponent implements OnInit {
  orders?:Order[];

fetchdata(){
  this.fetchorder.getallOrders().subscribe({
    next:data=>{
      this.orders=data;
    },
    error:err=>{
      alert("Error while fetching Orders from server");
    }
  })
}

  ngOnInit(): void {
    
    this.fetchdata();
  
}
constructor(private fetchorder:OrdersService,private routerservice:Router,private logoutservice:LoginCheckService){
  
}




delivered(id?:number){

  this.fetchorder.deleteorder(id).subscribe({
    next:data=>{
      alert("Delivery Completed");
      this.fetchdata();
    
    },
    error:err=>{
      alert("delivery Pending");
    }

  })

}
adminlogout(){

  this.routerservice.navigateByUrl("products");
  this.logoutservice.logout();


}

}
