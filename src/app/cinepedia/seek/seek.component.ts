import {Component, Input, OnInit, } from '@angular/core';
import {OmdbapiService} from '../services/omdbapi.service';
import {Movie} from '../shared/models/movie.models';
import {Subscription} from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';
import {HttpErrorResponse} from '@angular/common/http';


@Component({
  selector: 'app-seek',
  templateUrl: './seek.component.html',
  styleUrls: ['./seek.component.css']
})

export class SeekComponent implements OnInit {
  @Input() movieTitle: string;
  @Input() movie: Movie;
  constructor(private omdbapi: OmdbapiService, private snackbar: MatSnackBar) {

  }

  ngOnInit() {
  }


  onSearch(): Subscription {
return this.omdbapi.searchMovie(this.movieTitle).subscribe((apiMovie: Movie) => {

  this.movie.Title = apiMovie.Title;
  this.movie.Actors = apiMovie.Actors;
   this.movie.Awards = apiMovie.Awards;
   this.movie.Director = apiMovie.Director;
   this.movie.Genre = apiMovie.Genre;
   this.movie.Plot = apiMovie.Plot;
   this.movie.Year = apiMovie.Year;
   this.movie.Poster = apiMovie.Poster;

 },
  (error: HttpErrorResponse) => {this.snackbar.open(`Sorry we can't find this movie ${this.movieTitle}`, `Retry`
  ).onAction().subscribe(() => this.onSearch());
}
);

  }
}
