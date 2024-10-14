import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { AdminComponent } from './adminlogin/admin.component';
import { AdminOrderViewComponent } from './admin-order-view/admin-order-view.component';
import { NotfoundPageComponent } from './notfound-page/notfound-page.component';
import { authGuardGuard } from './Guards/auth-guard.guard';
import { deactivateGuard } from './Guards/deactivate.guard';
import { ContactUsComponent } from './contact-us/contact-us.component';


const routes: Routes = [
  
  
  {path:"products",component:ProductManagerComponent},

  {path:"",redirectTo:"/products",pathMatch:"full"},
  
  {path:"products/:id",component:SingleProductComponent,canDeactivate:[deactivateGuard]},
  
  {path:"adminlogin",component:AdminComponent},

  {path:"adminorder", component:AdminOrderViewComponent, canActivate:[authGuardGuard]},

  {path:"contactus",component:ContactUsComponent},

  {path:"**",component:NotfoundPageComponent}
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
