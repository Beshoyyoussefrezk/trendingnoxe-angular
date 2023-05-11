import { Component } from '@angular/core';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  someMovies:any = [];
  someTv:any = [];
  imgSrc = `https://image.tmdb.org/t/p/w500`;
  constructor(private _TrendingService: TrendingService) {
    this._TrendingService.getTrending("movie", "day").subscribe(
      data => {
        this.someMovies = data.results.slice(0, 10);
      }
    );

    this._TrendingService.getTrending("tv", "day").subscribe(
      data => {
        this.someTv = data.results.slice(0, 10);
      }
    )
  }
  
}
