import { Component } from '@angular/core';
import { TrendingService } from '../trending.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-tvshow-details',
  templateUrl: './get-tvshow-details.component.html',
  styleUrls: ['./get-tvshow-details.component.scss']
})
export class GetTvshowDetailsComponent {
  details:any = {};
  imgSrc = `https://image.tmdb.org/t/p/w500`;
  constructor(private _TrendingService:TrendingService , private _ActivatedRoute:ActivatedRoute ){
    let id = this._ActivatedRoute.snapshot.params["id"] ;
    this._TrendingService.getDetails("tv",id).subscribe(
      data =>{ this.details = data; } );
  }
}
