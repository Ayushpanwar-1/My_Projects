import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginCheckService } from '../services/login-check.service';

export const authGuardGuard: CanActivateFn = (route, state) => {

  let loginservice=inject(LoginCheckService);
  let routingservice=inject(Router);
  if(loginservice.loggedin)
  {
    return true;  
  }
  else{
    alert("You need to login as admin to view Orders");
  routingservice.navigateByUrl("adminlogin");
  return false;
  }
};  
 