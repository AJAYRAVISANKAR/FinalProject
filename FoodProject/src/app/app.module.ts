import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewUserComponent } from './new-user/new-user.component';
import { UserService } from './user.service';
import { CategoryControllerComponent } from './category-controller/category-controller.component';
//import { CategoryService } from './category.service';
import { FoodControllerComponent } from './food-controller/food-controller.component';
//import { FoodService } from './food.service';
import { WelcomeControllerComponent } from './welcome-controller/welcome-controller.component';
import { CartControllerComponent } from './cart-controller/cart-controller.component';
import { OrderControllerComponent } from './order-controller/order-controller.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminControllerComponent } from './admin-controller/admin-controller.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { ViewCategoryComponent } from './view-category/view-category.component';
//import { UserLoginComponent } from './user-login/user-login.component';
import { ViewFoodComponent } from './view-food/view-food.component';
//import { UpdateFoodComponent } from './update-food/update-food.component';
import { UpdateFoodComponent } from './update-food/update-food.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserFoodComponent } from './user-food/user-food.component';


@NgModule({
  declarations: [
    AppComponent,
    NewUserComponent,
    CategoryControllerComponent,
    FoodControllerComponent,
    WelcomeControllerComponent,
    CartControllerComponent,
    OrderControllerComponent,
    UserLoginComponent,
    AdminControllerComponent,
    AdminHomeComponent,
    AddCategoryComponent,
    UserDetailsComponent,
    CartDetailsComponent,
    ViewCategoryComponent,
    UserLoginComponent,
    ViewFoodComponent,
    UpdateFoodComponent,
    UserHomeComponent,
    UserFoodComponent,
    //UpdateFoodComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
  //providers: [CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
