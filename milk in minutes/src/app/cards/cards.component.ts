import { Component, Input } from '@angular/core';
import { Product } from '../models/Products';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {

  @Input() filteredlist:Product[]=[];
  
}
