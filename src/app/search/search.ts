import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {NgIf} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {UtilsService} from '../services/utils.service';
import {Loading} from '../loading/loading';
import {RouterLink} from '@angular/router';
import {MovieModel} from '../../models/movie.model';
import {MovieService} from '../services/movie.service';

@Component({
  selector: 'app-search',
    imports: [MatTableModule, NgIf, MatButtonModule, Loading, RouterLink],
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search {
    displayedColumns: string[] = ['movieId', 'title', 'startDate', 'actions'];
    dataSource: MovieModel[] | null = null;

    public constructor(public utils:UtilsService){
        MovieService.getMovies(0,13)
            .then(response => {
                this.dataSource = response.data});

    }
}
