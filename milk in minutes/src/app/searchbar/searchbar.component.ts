import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css'
})
export class SearchbarComponent {

  searchtext:string='';
  @Output() customevent:EventEmitter<string>=new EventEmitter<string>();

  senddata()
  {
    this.customevent.emit(this.searchtext);
    this.searchtext="";
  }

}
