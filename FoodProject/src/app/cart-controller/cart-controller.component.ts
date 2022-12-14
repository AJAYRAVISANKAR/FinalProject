import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Cart } from '../cart';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-cart-controller',
  templateUrl: './cart-controller.component.html',
  styleUrls: ['./cart-controller.component.css']
})
export class CartControllerComponent implements OnInit{

  cart: Cart = new Cart (0,0,0);
  cartList:any;
   foodId:number=0;
   userEmailId:string="";
   constructor(private cartService: CartService, private activatedroute:ActivatedRoute,private router:Router) {}
   ngOnInit(): void {
     this.foodId = this.activatedroute.snapshot.params["foodId"];
     this.userEmailId=this.activatedroute.snapshot.params["userEmailId"];
    // console.log("inside OnInit")
    // let res = this.cartService.getAllcart();
   // res.subscribe((data:any) => this.cartList = data );
    }
   public addCart() {
    console.log("buttonclick");
    console.log(this.cart);
    let res=this.cartService.addCart(this.cart,this.foodId,this.userEmailId).subscribe((data:any)=> {console.log ("added")});
    console.log(res);
  
    this.router.navigate(['/cartdetails',this.userEmailId]);
  }
  }
