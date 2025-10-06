import { Component } from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {NgFor, NgIf} from '@angular/common';
import {UtilsService} from '../services/utils.service';
import {Loading} from '../loading/loading';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MovieModel} from '../../models/movie.model';
import {MovieService} from '../services/movie.service';
import {MatChipsModule} from '@angular/material/chips';
import {ActorModel} from '../../models/actor.model';

import {ActorService} from '../services/actor.service';
import {ProjectionModel} from '../../models/projection.model';
import {ProjectionService} from '../services/projection.service';
import {CommentModel} from '../../models/comment.model';
import {CommentService} from '../services/comment.service';


@Component({
  selector: 'app-details',
    imports: [ NgIf, NgFor, Loading, MatCardModule, MatButtonModule, MatListModule,MatChipsModule, RouterLink],
  templateUrl: './details.html',
  styleUrl: './details.css'
})
export class Details {
    public actors: ActorModel[] | null = null; // fali get Actors by id
    public projections: ProjectionModel[] | null = null;
    public movie: MovieModel | null = null;
    public comments: CommentModel[] | null = null;

    public constructor(private route: ActivatedRoute, public utils: UtilsService) {
        route.params.subscribe(params => {
            MovieService.getMovieById(params['movieId']).then(response => this.movie = response.data);
        });
        route.params.subscribe(params => {
            ActorService.getActorById(params['movieActors.movieActorId']).then(response => this.actors = response.data);
        });
        this.projections = ProjectionService.getProjections();
        console.log("MJAUUUUUUUUUUUUU" +this.projections);
        this.comments = CommentService.getComments();

    }


}

