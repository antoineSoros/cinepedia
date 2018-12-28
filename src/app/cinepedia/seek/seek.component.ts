import {Component, Input, OnInit, } from '@angular/core';
import {OmdbapiService} from '../services/omdbapi.service';
import {Movie} from '../shared/models/movie.models';
import {Subscription} from 'rxjs';
import {OmdbapiModels} from '../shared/models/omdbapi.models';
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
return this.omdbapi.searchMovie(this.movieTitle).subscribe((omdbapiModels: OmdbapiModels) => {
  this.movie.title = omdbapiModels.movie.title;
  this.movie.actors = omdbapiModels.movie.actors;
  this.movie.awards = omdbapiModels.movie.awards;
  this.movie.director = omdbapiModels.movie.director;
  this.movie.genre = omdbapiModels.movie.genre;
  this.movie.plot = omdbapiModels.movie.plot;
  this.movie.year = omdbapiModels.movie.year;
  this.movie.poster = omdbapiModels.movie.poster;
},
  (error: HttpErrorResponse) => {this.snackbar.open(`Sorry we can't find this movie ${this.movieTitle}`, `Retry`
  ).onAction().subscribe();
}
);

  }
}
