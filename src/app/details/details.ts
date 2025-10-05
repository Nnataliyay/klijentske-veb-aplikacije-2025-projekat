import { Component } from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {JsonPipe, NgIf} from '@angular/common';
import {UtilsService} from '../services/utils.service';
import {Loading} from '../loading/loading';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {SafePipe} from '../safe-pipe';
import {MovieModel} from '../../models/movie.model';
import {MovieActorModel} from '../../models/movieActor.model';
import {MovieService} from '../services/movie.service';
import {MatChipsModule} from '@angular/material/chips';
import {ActorModel} from '../../models/actor.model';
import {GenreModel} from '../../models/genre.model';
import {ActorService} from '../services/actor.service';


@Component({
  selector: 'app-details',
    imports: [JsonPipe, NgIf, Loading, MatCardModule, MatButtonModule, MatListModule,MatChipsModule, SafePipe, RouterLink],
  templateUrl: './details.html',
  styleUrl: './details.css'
})
export class Details {
    public actors: ActorModel[] | null = null; // fali get Actors by id
    public genres: GenreModel[] | null = null;
    public movie: MovieModel | null = null;

    public constructor(private route: ActivatedRoute, public utils: UtilsService) {
        route.params.subscribe(params => {
            MovieService.getMovieById(params['movieId']).then(response => this.movie = response.data);
        });
        route.params.subscribe(params => {
            ActorService.getActorById(params['movieActords.movieActorId']).then(response => this.actors = response.data);
        });
        console.log(this.actors);
    }
}

