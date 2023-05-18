import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { TrendingService } from '../trending.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isLogin: boolean = false;
  term:string=""
  constructor(private _AuthService: AuthService, private _TrendingService: TrendingService) {
    this._AuthService.currentUser.subscribe(
      data => {
        (this._AuthService.currentUser.getValue()) ? this.isLogin = true : this.isLogin = false;
      }
    )
  }
  logout() {
    this._AuthService.logout();
  }

  getTiming(e: any) {
    let getValue: string = e.target.innerHTML;
    if (getValue == "Day") {
      getValue = "Week";
      e.target.innerHTML = getValue;
    } else {
      getValue = "Day";
      e.target.innerHTML = getValue;
    }
    localStorage.setItem("currentTiming", getValue);
    this._TrendingService.saveCurrentTiming();
  }

  getSearchTerm(e:any){
    let getValue:string = e.target.value;
    localStorage.setItem("searchTerm" , getValue);
    this._TrendingService.saveCurrentTerm();
  }
}
