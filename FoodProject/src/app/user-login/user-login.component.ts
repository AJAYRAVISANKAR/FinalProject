import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  user = new User("","","","","","","","","","");
 userList:any;
  message = ""
  userEmailId:String="";
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    
  }
userLogin() 
  {
    this.userService.userLoginService(this.user).subscribe 
    (
      data => {console.log("Login Success",this.userEmailId=this.user.emailID),
      this.router.navigate(['/userhome',this.user.emailID])
    },
    error => {console.log("Login Failed"), console.log(error),
    this.message="login failed.enter valid email and password"
  }
  )
}
back()
{
  this.router.navigate(['/welcomePage'])
}
}