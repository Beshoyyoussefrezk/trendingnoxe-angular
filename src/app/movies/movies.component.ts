import { Component } from '@angular/core';
import { TrendingService } from '../trending.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})

export class MoviesComponent {
  timing: string = "";
  term: string = ""
  allMovies: any = [];
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
            this.allMovies = data.results;
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
