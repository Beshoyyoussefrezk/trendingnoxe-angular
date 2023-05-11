import { Component } from '@angular/core';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.scss']
})
export class TvshowComponent {
  term:string = "";
  allTv:any = [];
  imgSrc = `https://image.tmdb.org/t/p/w500`;
  constructor(private _TrendingService: TrendingService) {
    this._TrendingService.getTrending("tv", "day").subscribe(
      data => {
        this.allTv = data.results;
      }
    )
  }
  
}
