import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit{
  category: Category = new Category(0," ");
  categoryList:any;
  message:any;
  userEmailId:string="";
  constructor(private categoryService: CategoryService, private router: Router,private activatedRoute:ActivatedRoute) { }
  ngOnInit(): void {
    console.log("inside OnInit")
    this.getCategoryList();
    this.userEmailId=this.activatedRoute.snapshot.params["userEmailId"];

  }
  private getCategoryList() {
    let res = this.categoryService.getAllCategory();
    res.subscribe((data:any) => this.categoryList = data);
  }
  
viewFood(categoryId:number) {
/*console.log("FoodController");
this.categoryService.getAllFood(categoryId).subscribe
((data:any)=>{console.log("Food"),
this.categoryList();},*/

this.router.navigate(['/userfood',categoryId,this.userEmailId])

}
}