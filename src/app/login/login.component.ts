import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  error:boolean = false;
  constructor(private _AuthService:AuthService , private _Router:Router){}
  loginForm:FormGroup = new FormGroup({
    email:new FormControl(null , [Validators.required ,Validators.email]),
    password:new FormControl(null , [Validators.required ,Validators.pattern("^[a-zA-Z0-9]{3,15}$")])
  });
  
  logIn(loginForm:FormGroup){
    this._AuthService.login(loginForm.value).subscribe(
      response => {
        if(response.message == "success"){
          localStorage.setItem("currentUser" , response.token);
          this._AuthService.saveCurrentUser();
          this._Router.navigate(['/home']);
        }else{
          this.error = response.message;
        }
      }
    )
  }
}
