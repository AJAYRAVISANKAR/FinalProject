import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Food } from '../food';
import { FoodService } from '../food.service';
@Component({
  selector: 'app-user-food',
  templateUrl: './user-food.component.html',
  styleUrls: ['./user-food.component.css']
})
export class UserFoodComponent implements OnInit{

  food:Food = new Food(0,"",0,0);
  foodList:any;
  categoryId:number = 0;
  userEmailId:string ="";
  constructor(private foodService:FoodService, private avtivatedroute: ActivatedRoute ,private router:Router){

  }
  ngOnInit(): void {
    this.categoryId=this.avtivatedroute.snapshot.params["categoryId"];
    this.userEmailId=this.avtivatedroute.snapshot.params["userEmailId"];
    console.log("inside oninit")
    let res = this.foodService.getFoodByCategoryId(this.categoryId);
    res.subscribe((data:any)=>this.foodList=data );


  }
  public addToCart(foodId:number){
    this.router.navigate(['/cartcontroller',foodId,this.userEmailId])
    
  }

}
