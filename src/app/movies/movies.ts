import { Component } from '@angular/core';
import {Loading} from '../loading/loading';
import {MatButton} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {NgForOf, NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';
import {AxiosError} from 'axios';
import {MovieService} from '../services/movie.service';
import {UtilsService} from '../services/utils.service';
import {MovieModel} from '../../models/movie.model';

@Component({
  selector: 'app-movies',
    imports: [
        Loading,
        MatButton,
        MatCardModule,
        NgForOf,
        NgIf,
        RouterLink
    ],
  templateUrl: './movies.html',
  styleUrl: './movies.css'
})
export class Movies {
    movies: MovieModel[] | null = null;
    error: string | null = null;

    constructor(public utils:UtilsService) {
        MovieService.getMovies(0,4).
        then(response => {
            console.log("Response data check: ", response.data);
            this.movies = response.data})
            .catch((error:AxiosError) => this.error = `${error.code}: ${error.message}`); // mini error handling

    }

}
