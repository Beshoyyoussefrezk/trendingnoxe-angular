import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { TvshowComponent } from './tvshow/tvshow.component';
import { PeopleComponent } from './people/people.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { GetMovieDetailsComponent } from './get-movie-details/get-movie-details.component';
import { GetTvshowDetailsComponent } from './get-tvshow-details/get-tvshow-details.component';
import { GetPeopleDetailsComponent } from './get-people-details/get-people-details.component';

const routes: Routes = [
  {path : "home" , component : HomeComponent , title : "Home"},
  {path : "" , redirectTo : "home" , pathMatch : "full"} , 
  {path : "movies" , component : MoviesComponent , title : "Movies"},
  {path : "tvshow" , component : TvshowComponent , title : "Tv Show"},
  {path : "people" , component : PeopleComponent , title : "People"},
  {path : "moviedetails/:id" , component : GetMovieDetailsComponent , title : "Movie Details"},
  {path : "tvshowdetails/:id" , component : GetTvshowDetailsComponent , title : "TV Details"},
  {path : "personDetails/:id" , component : GetPeopleDetailsComponent , title : "People Details"},
  {path : "**" , component : NotfoundComponent , title : "404 page"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
