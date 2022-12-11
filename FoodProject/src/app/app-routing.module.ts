import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewUserComponent } from './new-user/new-user.component';
import { CategoryControllerComponent } from './category-controller/category-controller.component';
import { FoodControllerComponent } from './food-controller/food-controller.component';
import { CartControllerComponent } from './cart-controller/cart-controller.component';
import { OrderControllerComponent } from './order-controller/order-controller.component';
import { AdminControllerComponent } from './admin-controller/admin-controller.component';
import { WelcomeControllerComponent } from './welcome-controller/welcome-controller.component';
import { ViewCategoryComponent } from './view-category/view-category.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ViewFoodComponent } from './view-food/view-food.component';
import { UpdateFoodComponent } from './update-food/update-food.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserFoodComponent } from './user-food/user-food.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';

const routes: Routes = [ {path:"", component:WelcomeControllerComponent},
  
{path:"register", component:NewUserComponent},
{path:"add", component:CategoryControllerComponent},
{path: "viewcategory", component:ViewCategoryComponent},
{path: "addCategory", component:AddCategoryComponent},
{ path: 'register', component: AdminControllerComponent},
{ path: 'adminLogin', component: AdminControllerComponent},
{ path: 'adminhome', component: AdminHomeComponent},
{path: 'userDetails', component:UserDetailsComponent},
{path: 'foodController/:categoryId', component:FoodControllerComponent},
{path: 'viewFood', component:ViewFoodComponent},
{path:'updateFood/:foodId', component:UpdateFoodComponent},
{path:'userLogin',component:UserLoginComponent}, 
{path:'userhome/:userEmailId',component:UserHomeComponent},
{path:'welcomepage',component:WelcomeControllerComponent},
{path:'userfood/:categoryId/:userEmailId',component:UserFoodComponent},
{path:'cartcontroller/:foodId/:userEmailId',component:CartControllerComponent },
{path:'cartdetails/:userEmailId',component:CartDetailsComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
