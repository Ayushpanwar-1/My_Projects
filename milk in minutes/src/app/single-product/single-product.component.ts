import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Products';
import { FetchingService } from '../services/fetching.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Order } from '../models/Order';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css'
})
export class SingleProductComponent implements OnInit {
    product:Product={}
    userForm:any;
    id?:number;
    order:Order={};
    canexitcomponent:boolean=false;
    constructor(private productservice:FetchingService,private activatedRservice:ActivatedRoute,private fb:FormBuilder, private orderservice:OrdersService,private routingserv:Router ){

    
    }

    

    ngOnInit(): void {
      this.activatedRservice.paramMap.subscribe(x=>{
        this.id= Number(x.get("id")); 
      })
      this.productservice.fetchProduct(this.id).subscribe({
        next: data=>{ 
          this.product=data;
        },
        error:err=>{
          alert("There was some error while retriving data");
        }
      })
    
     }
     
  canDeactivate1() {
    if (!this.canexitcomponent && this.orderform.dirty) {
        let response = confirm("Do you want to leave the page? Changes won't be saved.");
        return response;
    } else {  
        return true;
    }
}
  orderform=this.fb.group({
    Name:['',[Validators.required,Validators.minLength(3)]],
    Mno:['',[Validators.required,Validators.pattern(/^[789]\d{9}$/)]],
    address:['',[Validators.required]],
    quantity:['',[Validators.required,Validators.max(10)]],
    email:['',[Validators.required,Validators.pattern(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/)]],
   })
                       
  onSubmit(){
    
    this.order.orderedItem=this.product.pname;
    this.order.orderedItemCost=this.product.pcost;
    this.order.orderurl=this.product.purl;
    this.orderservice.sendOrder(this.order).subscribe({
      next: data=>{
        alert("Order Placed Successfully");
        this.orderform.reset();
        this.canexitcomponent=true;
        this.routingserv.navigateByUrl('products');

      },
      error:err=>
      {
        alert("Error occured while connecting to server");
      }
    
      
    });
    
  }
  

}
