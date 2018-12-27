import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {token} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OmdbapiService {

  constructor(private http: HttpClient) { }

searchMovie(searchValue: string) {
  this.http.get(`http://www.omdbapi.com/?t=${searchValue}&apikey=${token.apiKey}` );
}
}
