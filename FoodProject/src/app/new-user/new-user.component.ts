import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit{

  user: User = new User("","","","","","","","","","");
  userList:any;
  message:any;
  constructor(private userService: UserService,private router :Router) {}
  ngOnInit(): void {
    console.log("inside OnInit")
    let res = this.userService.getAllUser();
   res.subscribe((data:any) => this.userList = data );
   }
    public registerUser() {
    console.log("buttonclick");
    console.log(this.user);
    let res=this.userService.registerUser(this.user).subscribe
    (
      data =>{console.log("Register success"),
    this.router.navigate(['userhome'])},
    error =>{console.log("Register Failed"),console.log(error),
  
    this.message="Register failed.enter valid email and password"}
    ) 
   }

}
