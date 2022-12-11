import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-controller',
  templateUrl: './welcome-controller.component.html',
  styleUrls: ['./welcome-controller.component.css']
})
export class WelcomeControllerComponent implements OnInit {

  constructor(private route :Router) { }

  ngOnInit(): void {
  }
  userRegister()
{
  this.route.navigate(['/register'])
}
adminLogin()
{
  this.route.navigate(['/adminLogin'])
}
userLogin()
{
  this.route.navigate(['/userLogin'])
}
}
