import { TranslateModule } from '@ngx-translate/core';
import { AppRoutingModule } from './../app-routing.module';
import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { MenupageComponent } from './menupage/menupage.component';
import { RestaurantpageComponent } from './restaurantpage/restaurantpage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { DishespageComponent } from './dishespage/dishespage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    HomepageComponent,
    MenupageComponent,
    RestaurantpageComponent,
    ContactpageComponent,
    DishespageComponent,
    LoginpageComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    AppRoutingModule,
    TranslateModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
