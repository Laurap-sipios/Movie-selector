package com.movieselector3000.api;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;

@Controller
@AllArgsConstructor
public class FilmController {
    private final FilmService filmService;

}
