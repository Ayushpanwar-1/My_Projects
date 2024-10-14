import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginCheckService {

  loggedin:boolean=false;

  constructor() {
    
   }

  
  login(){
    this.loggedin=true;
  }
  logout(){
    this.loggedin=false;
  }
}
