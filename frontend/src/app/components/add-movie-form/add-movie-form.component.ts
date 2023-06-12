import { Component, NgModule } from "@angular/core";
import { Movie } from "src/app/types";

import { FormsModule, NgModel } from "@angular/forms";
import { MovieService } from "src/app/api_calls/movie.service";

@Component({
  selector: "app-add-movie-form",
  templateUrl: "./add-movie-form.component.html",
  styleUrls: ["./add-movie-form.component.css"],
  imports: [FormsModule],
  standalone: true,
})
export class AddMovieFormComponent {
  formData: Movie = {
    id: null,
    name: null,
  };

  constructor(private movieService: MovieService) {}

  submitForm() {
    this.movieService.postNewMovie(this.formData).subscribe(
      () => {
        this.formData = {
          id: null,
          name: null,
        };
      },
      (error) => {
        console.error("Error submitting movie:", error);
      }
    );
  }
}
