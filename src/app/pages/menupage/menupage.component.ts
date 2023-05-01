/*import { FoodService } from './../../services/food.service';
import { Component, NgIterable, OnInit } from '@angular/core';



@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit{
  menu!:any ;
  Object = Object;
  categories = Object.keys(this.menu);
  keysArray = Object.keys(this.menu?.someProperty);

  
  
  constructor(private menuService:FoodService){}
  ngOnInit(): void {
    this.menuService.getMenu().subscribe(
      (res) => {
        this.menu = res;
        console.log(this.menu);
      }
    )
  }
}*/
import { FoodService } from './../../services/food.service';
import { Component, NgIterable, OnInit } from '@angular/core';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {
  
  constructor(private menuService:FoodService) {}
  menu1: any;
  category!: any;
  
 
  ngOnInit(): void {
    this.menuService.getMenu().subscribe(
      (res) => {
        this.menu1 = res;
        console.log(this.menu1);
      }
    )
  }
}
