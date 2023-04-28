import { Component, OnInit } from '@angular/core';
import { FoodService } from './../../services/food.service';

@Component({
  selector: 'app-dishespage',
  templateUrl: './dishespage.component.html',
  styleUrls: ['./dishespage.component.css']
})
export class DishespageComponent implements OnInit{
  dishes:any
  constructor(private menuService:FoodService){}
  ngOnInit(): void {
    this.menuService.getDishes().subscribe(
      (res) => {
        this.dishes = res;
        console.log(this.dishes);
      }
    )
  }

}
