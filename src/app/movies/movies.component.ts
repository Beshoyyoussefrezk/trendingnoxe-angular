import { Component } from '@angular/core';
import { TrendingService } from '../trending.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})

export class MoviesComponent {
  allMovies:any = [];
  imgSrc = `https://image.tmdb.org/t/p/w500`;
  constructor(private _TrendingService: TrendingService) {
    this._TrendingService.getTrending("movie", "day").subscribe(
      data => {
        this.allMovies = data.results;
      }
    )
  }
}
