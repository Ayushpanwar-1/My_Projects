import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginCheckService } from '../services/login-check.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
username:string="ayush@admin"
password:string="ayush123";

constructor(private fb:FormBuilder,private sb:MatSnackBar,private loginservice:LoginCheckService,private routing:Router){}
adminlogin=this.fb.group({
  Username:['',Validators.required],
  Password:['',Validators.required]
})

onSubmit(){
  if(this.adminlogin.controls.Password.value===this.password && this.adminlogin.controls.Username.value===this.username)
  {
    this.sb.open("Login Successful",'',{duration:1000,});
    this.loginservice.login();
    this.routing.navigateByUrl('adminorder');

    
   }
   else{
    this.sb.open("Invalid Username or Password",'',{duration:1000});


   }
  }
}
