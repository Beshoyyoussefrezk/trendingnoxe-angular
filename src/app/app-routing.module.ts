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
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path : "home" ,canActivate:[AuthGuard] ,component : HomeComponent , title : "Home"},
  {path : "movies" ,canActivate:[AuthGuard]  , component : MoviesComponent , title : "Movies"},
  {path : "tvshow" ,canActivate:[AuthGuard]  , component : TvshowComponent , title : "Tv Show"},
  {path : "people" ,canActivate:[AuthGuard]  , component : PeopleComponent , title : "People"},
  {path : "moviedetails/:id" ,canActivate:[AuthGuard]  , component : GetMovieDetailsComponent , title : "Movie Details"},
  {path : "tvshowdetails/:id" ,canActivate:[AuthGuard]  , component : GetTvshowDetailsComponent , title : "TV Details"},
  {path : "personDetails/:id" ,canActivate:[AuthGuard]  , component : GetPeopleDetailsComponent , title : "People Details"},
  {path : "signup" , component : SignupComponent , title : "Sign up"},
  {path : "login" , component : LoginComponent , title : "Login"},
  {path : "" , redirectTo : "login" , pathMatch : "full"} , 
  {path : "**" ,canActivate:[AuthGuard]  ,  component : NotfoundComponent , title : "404 page"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash : true})  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
