import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {NgFor, NgIf} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {UtilsService} from '../services/utils.service';
import {Loading} from '../loading/loading';
import {RouterLink} from '@angular/router';
import {MovieModel} from '../../models/movie.model';
import {MovieService} from '../services/movie.service';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {GenreModel} from '../../models/genre.model';
import {MovieGenreModel} from  '../../models/movieGenre.model'
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-search',
    imports: [MatTableModule, NgIf, NgFor, MatSelectModule, MatButtonModule, Loading, RouterLink, MatCardModule, MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search {
    displayedColumns: string[] = ['movieId', 'title', 'startDate', 'actions'];

    dataSource: MovieModel[] | null = null;
    allData: MovieModel[] | null = null;

    genreList: string[] = [];
    directorList: string[] = [];
    actorList: string[] = [];
    selectedGenre: string | null = null;
    selectedDirector: string | null = null;
    selectedActor: string | null = null;
    userInput: string = '';
    selectedDate: string | null = null;

    public constructor(public utils:UtilsService){
        MovieService.getMovies(0,10)
            .then(response => {
                this.dataSource = response.data;
                this.allData = response.data;
                this.generateSearchCriteria(response.data)});
    }

    public generateSearchCriteria(source: MovieModel[]) {
        this.genreList = source
            .flatMap(movie => movie.movieGenres.map(genre => genre.genre.name))
            .filter((genreName, index, self) => self.indexOf(genreName) === index);

        this.directorList = source
            .map(movie => movie.director.name)
            .filter((directorName, index, self) => self.indexOf(directorName) === index);

        this.actorList = source
            .flatMap(movie => movie.movieActors.map(actor => actor.actor.name))
            .filter((actorName, index, self) => self.indexOf(actorName) === index);
}

    public doReset() {
        this.userInput = ''
        this.selectedGenre = null
        this.selectedDirector = null
        this.selectedActor = null
        this.dataSource = this.allData
        this.generateSearchCriteria(this.allData!)
    }

    public doFilterChain() {
        if (this.allData == null) return;

        this.dataSource = this.allData
            .filter(obj => {
                if (this.userInput === '') return true;

                const searchTerm = this.userInput.toLowerCase();

                return obj.title.toLowerCase().includes(searchTerm) ||
                    obj.movieId.toString().includes(searchTerm) ||
                    obj.corporateId.toLowerCase().includes(searchTerm);
            })
            .filter(obj => {
                if (this.selectedGenre == null) return true;
                return obj.movieGenres.some(genre => genre.genre.name === this.selectedGenre);
            })
            .filter(obj => {
                if (this.selectedDirector == null) return true;
                return obj.director.name === this.selectedDirector;
            })
            .filter(obj => {
                if (this.selectedActor == null) return true;

                return obj.movieActors.some(actor => actor.actor.name === this.selectedActor);
            });

        this.generateSearchCriteria(this.dataSource || []);
    }

}
