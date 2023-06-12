import { Component, OnInit } from "@angular/core";
import { AppModule } from "./app.module";
import { MovieService } from "./api_calls/movie.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "movie-theatre";
  //movies = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  movies: any[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movieService.getPopularMovies().subscribe((data) => {
      this.movies.push(...data);
      console.log(this.movies);
    });
  }
}
