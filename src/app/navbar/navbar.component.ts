import { Component } from '@angular/core';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  // term:string = "";
  // constructor(private _TrendingService:TrendingService){
  //   localStorage.setItem("currentTerm",  this.term);
  //   this._TrendingService.getTerm().subscribe()
  // }
}
