import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { TvshowComponent } from './tvshow/tvshow.component';
import { PeopleComponent } from './people/people.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VoteAveragePipe } from './vote-average.pipe';
import { SearchPipe } from './search.pipe';
import { GetMovieDetailsComponent } from './get-movie-details/get-movie-details.component';
import { GetTvshowDetailsComponent } from './get-tvshow-details/get-tvshow-details.component';
import { GetPeopleDetailsComponent } from './get-people-details/get-people-details.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MoviesComponent,
    TvshowComponent,
    PeopleComponent,
    NotfoundComponent,
    VoteAveragePipe,
    SearchPipe,
    GetMovieDetailsComponent,
    GetTvshowDetailsComponent,
    GetPeopleDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
