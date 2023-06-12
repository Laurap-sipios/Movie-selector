import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MovieNavbarComponent } from "./components/movie-navbar/movie-navbar.component";
import { MovieCardComponent } from "./components/movie-card/movie-card.component";

import { HttpClientModule } from "@angular/common/http";
import { AddMovieFormComponent } from "./components/add-movie-form/add-movie-form.component";

@NgModule({
  declarations: [AppComponent, MovieNavbarComponent, MovieCardComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AddMovieFormComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
