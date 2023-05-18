import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  isError:boolean = false;
  constructor(private _AuthService:AuthService , private _Router:Router){}
  signupForm:FormGroup = new FormGroup({
    first_name:new FormControl(null , [Validators.required , Validators.minLength(3) , Validators.maxLength(10)]),
    last_name:new FormControl(null , [Validators.required , Validators.minLength(3) , Validators.maxLength(10)]),
    age:new FormControl(null , [Validators.required , Validators.pattern("^[1-7][0-9]$|80$")]),
    email:new FormControl(null , [Validators.required ,Validators.email]),
    password:new FormControl(null , [Validators.required ,Validators.pattern("^[a-zA-Z0-9]{3,15}$")])
  });

  signUp(signForm:FormGroup){
    this._AuthService.signup(signForm.value).subscribe(
      response => {
        (response.message == "success")? this._Router.navigate(['/login']): 
        this.isError = true;
      }
    )

  }
}
