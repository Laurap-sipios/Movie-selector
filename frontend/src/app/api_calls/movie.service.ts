import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Movie } from "../types";

@Injectable({
  providedIn: "root",
})
export class MovieService {
  private baseUrl = "http://localhost:8080";

  constructor(private http: HttpClient) {}

  getPopularMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.baseUrl}/film`);
  }

  postNewMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(`${this.baseUrl}/film`, movie);
  }
}
