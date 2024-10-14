import { Component, OnInit } from '@angular/core';
import { FetchingService } from '../services/fetching.service';
import { Product } from '../models/Products';

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrl: './product-manager.component.css'
})
export class ProductManagerComponent implements OnInit {

  productslist:Product[]=[];
  filteredlist:Product[]=[];
  


  constructor(private dataservice:FetchingService ){}

  ngOnInit(): void {
   this.dataservice.fetchdata().subscribe({
    next : data =>{
      this.productslist=data;
      this.filteredlist=data;
    },
    error(err) {
      alert("There's some error while fetching data from server");
    },
   });  
  }

  filter(searchedItem:string)
  { 
    if(searchedItem!=="")
    {
        this.filteredlist=this.filteredlist.filter(x=>x.pname?.toUpperCase().startsWith(searchedItem.toUpperCase()));
    }
    else
    { 
        this.filteredlist=this.productslist;
    }
    
    
  }

  
}
