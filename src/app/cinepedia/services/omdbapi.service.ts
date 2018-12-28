import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {token} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Movie} from '../shared/models/movie.models';
import {OmdbapiModels} from '../shared/models/omdbapi.models';

@Injectable({
  providedIn: 'root'
})

export class OmdbapiService {

  constructor(private http: HttpClient) { }

searchMovie(searchValue: string): Observable<OmdbapiModels> {
  return this.http.get<OmdbapiModels>(`http://www.omdbapi.com/?t=${searchValue}&apikey=${token.apiKey}` )
   ;
}
}
