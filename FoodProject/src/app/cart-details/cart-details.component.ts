import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { Cart } from '../cart';
import { CartService } from '../cart.service';
//import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {
  cart: Cart = new Cart (0,0,0);
  cartList:any;
  message:any;
  userEmailId:string="";
   constructor(private cartService: CartService, private router:Router,private activatedRouter:ActivatedRoute) {}
   ngOnInit(): void {
    this.userEmailId=this.activatedRouter.snapshot.params["userEmailId"];
      
    console.log("inside OnInit")
    this.getCartListbyEmailId();

  }
  private getCartListbyEmailId() {
    let res = this.cartService.getAllcartbyUserEmailId(this.userEmailId);
    res.subscribe((data:any) =>{console.log(data), this.cartList = data},
   error=>{console.log(error)}
    );
  }

  removeFromCart(cartId:number) {
      console.log("deleteFood");
      this.cartService.delete(cartId).subscribe
      ((data:any)=>{console.log("deleted Seccessfully"),
      this.cartList();},
      error=>{console.log ("delete failed"),
      this.message = "Unable to delete, Please Try Again"}
      )}
  }