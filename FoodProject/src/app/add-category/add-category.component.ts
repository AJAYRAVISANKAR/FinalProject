import { Component, OnInit } from '@angular/core';
//import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit{
  category:Category = new Category(0," ");
  categoryList:any;
  message:any;
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    console.log("inside OnInit")
    this.getCategoryList();
  }

  private getCategoryList() {
    let res = this.categoryService.getAllCategory();
    res.subscribe((data:any) => this.categoryList = data);
  }
 
  addCategory() {
    console.log("addController");
    this.categoryService.registerCategory(this.category).subscribe
    ((data:any)=>{console.log("added Seccessfully"),
    this.getCategoryList();},
    error=>{console.log("Failed to Add category"),
    this.message = "Unable to add Category, Please Try Again"}
    )}
  }
  

