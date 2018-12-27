import {Component, Input, OnInit, } from '@angular/core';
import {OmdbapiService} from '../services/omdbapi.service';



@Component({
  selector: 'app-seek',
  templateUrl: './seek.component.html',
  styleUrls: ['./seek.component.css']
})

export class SeekComponent implements OnInit {
  @Input() movieTitle: string;

  constructor(private omdbapi: OmdbapiService) {

  }

  ngOnInit() {
  }


  onSearch() {
this.omdbapi.searchMovie(this.movieTitle);
  }
}
