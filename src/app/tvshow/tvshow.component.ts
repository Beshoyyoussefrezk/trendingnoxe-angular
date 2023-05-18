import { Component } from '@angular/core';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.scss']
})
export class TvshowComponent {
  timing:string = "";
  term:string = "";
  allTv:any = [];
  imgSrc = `https://image.tmdb.org/t/p/w500`;
  constructor(private _TrendingService: TrendingService) {
    this._TrendingService.currentTiming.subscribe(
      data => {
        if (this._TrendingService.currentTiming.getValue() == "Day") {
          this.timing = "day";
        } else {
          this.timing = "week";
        }
        this._TrendingService.getTrending("tv", this.timing).subscribe(
          data => {
            this.allTv = data.results;
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
