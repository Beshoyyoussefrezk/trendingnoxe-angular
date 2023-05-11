import { Component } from '@angular/core';
import { TrendingService } from '../trending.service';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent {
  allPeople:any = [];
  imgSrc = `https://image.tmdb.org/t/p/w500`;
  constructor(private _TrendingService: TrendingService) {
    this._TrendingService.getTrending("person", "day").subscribe(
      data => {
        this.allPeople = data.results;
      }
    )
  }
}
