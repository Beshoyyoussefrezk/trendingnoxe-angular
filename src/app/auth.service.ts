import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser = new BehaviorSubject(null);

  constructor(private _HttpClient:HttpClient , private _Router:Router) { 
    if(localStorage.getItem("currentUser")) this.saveCurrentUser()
  }

  signup(signupFormVal:any):Observable<any>
  {
    return this._HttpClient.post(`https://sticky-note-fe.vercel.app/signup`, signupFormVal);
  }

  login(loginFormVal:any):Observable<any>
  {
    return this._HttpClient.post(`https://sticky-note-fe.vercel.app/signin` , loginFormVal)
  }

  saveCurrentUser(){
    let token:any = localStorage.getItem("currentUser");
    let tokenDecode:any = jwtDecode(token);
    this.currentUser.next(tokenDecode);
  }
  
  logout(){
    localStorage.removeItem("currentUser");
    this.currentUser.next(null);
    this._Router.navigate(['/login'])
  }
}
