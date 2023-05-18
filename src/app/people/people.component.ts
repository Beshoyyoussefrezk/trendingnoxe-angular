import { Component } from '@angular/core';
import { TrendingService } from '../trending.service';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent {
  allPeople: any = [];
  timing: string = "";
  term:string = ""
  imgSrc = `https://image.tmdb.org/t/p/w500`;
  constructor(private _TrendingService: TrendingService) {
    this._TrendingService.currentTiming.subscribe(
      data => {
        if (this._TrendingService.currentTiming.getValue() == "Day") {
          this.timing = "day";
        } else {
          this.timing = "week";
        }
        this._TrendingService.getTrending("person", this.timing).subscribe(
          data => {
            this.allPeople = data.results;
          }
        )
      }
    )
    this._TrendingService.currentTerm.subscribe(
      data => {
        this.term = data;
      }
    )
  }
}
