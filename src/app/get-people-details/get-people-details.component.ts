import { Component } from '@angular/core';
import { TrendingService } from '../trending.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-people-details',
  templateUrl: './get-people-details.component.html',
  styleUrls: ['./get-people-details.component.scss']
})
export class GetPeopleDetailsComponent {
  details:any = {};
  kn:any[] = [];
  imgSrc = `https://image.tmdb.org/t/p/w500`;
  constructor(private _TrendingService:TrendingService , private _ActivatedRoute:ActivatedRoute ){
    let id = this._ActivatedRoute.snapshot.params["id"] ;
    this._TrendingService.getDetails("person",id).subscribe(
      data =>{ 
        this.details = data;
        // this.kn = data.
       } );
  }
}
