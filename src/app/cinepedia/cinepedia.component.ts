import { Component, OnInit } from '@angular/core';
import {Movie} from './shared/models/movie.models';

@Component({
  selector: 'app-cinepedia',
  templateUrl: './cinepedia.component.html',
  styleUrls: ['./cinepedia.component.css']
})
export class CinepediaComponent implements OnInit {
public movie: Movie;
  constructor() {
this.movie = new Movie();
  }

  ngOnInit() {
  }

}
