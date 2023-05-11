import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable , BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class TrendingService {

  currentTerm = new BehaviorSubject("");
  constructor(private _HttpClient:HttpClient) { }
  getTrending(type:string , time:string):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${type}/${time}?api_key=e175d5aebf920a255d7cc659bbe3f9a6`);
  }

  getDetails(type:string , id:string):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=e175d5aebf920a255d7cc659bbe3f9a6&language=en-US`)
  }
  


}
