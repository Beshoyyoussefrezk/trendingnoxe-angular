import { Component } from '@angular/core';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  timing: string = "";
  term:string = "";
  someMovies: any = [];
  someTv: any = [];
  imgSrc = `https://image.tmdb.org/t/p/w500`;
  constructor(private _TrendingService: TrendingService) {
    this._TrendingService.currentTiming.subscribe(
      data => {
        if (this._TrendingService.currentTiming.getValue() == "Day") {
          this.timing = "day";
        } else {
          this.timing = "week";
        }
        this._TrendingService.getTrending("movie", this.timing).subscribe(
          data => {
            this.someMovies = data.results.slice(0, 10);
          }
        );

        this._TrendingService.getTrending("tv", this.timing).subscribe(
          data => {
            this.someTv = data.results.slice(0, 10);
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
