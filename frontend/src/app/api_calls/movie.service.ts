import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private baseUrl = 'http://localhost:8080/movie';
  constructor(private http: HttpClient) {}

  getPopularMovies(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/popular`);
  }
}
