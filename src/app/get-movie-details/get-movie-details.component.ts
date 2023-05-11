import { Component } from '@angular/core';
import { TrendingService } from '../trending.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-get-movie-details',
  templateUrl: './get-movie-details.component.html',
  styleUrls: ['./get-movie-details.component.scss']
})
export class GetMovieDetailsComponent {
  details:any = {};
  imgSrc = `https://image.tmdb.org/t/p/w500`;
  constructor(private _TrendingService:TrendingService , private _ActivatedRoute:ActivatedRoute ){
    let id = this._ActivatedRoute.snapshot.params["id"] ;
    this._TrendingService.getDetails("movie",id).subscribe(
      data =>{ this.details = data; } );
  }
}
