import { AuthGuard } from './guards/auth.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenupageComponent } from './pages/menupage/menupage.component';
import { RestaurantpageComponent } from './pages/restaurantpage/restaurantpage.component';
import { DishespageComponent } from './pages/dishespage/dishespage.component';
import { ContactpageComponent } from './pages/contactpage/contactpage.component';

const routes: Routes = [
  {path:"", redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomepageComponent},
  {path:"menu",component:MenupageComponent},
  {path:"restaurant",component:RestaurantpageComponent},
  {path:"dishes",component:DishespageComponent},
  {path:"contact",component:ContactpageComponent},
  {path:"login",component:LoginpageComponent},
  {path:"dashboard",component:DashboardComponent, canActivate:[AuthGuard]},
  {path:"**", redirectTo:"home",pathMatch:"full"}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
