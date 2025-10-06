import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInput, MatLabel} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {UserService} from '../services/user.service';
import {MovieModel} from '../../models/movie.model';
import {ActivatedRoute, Router} from '@angular/router';
import {UtilsService} from '../services/utils.service';
import {MovieService} from '../services/movie.service';
import {UserModel} from '../../models/user.model';
import {ProjectionModel} from '../../models/projection.model';
import {Loading} from '../loading/loading';
import {ProjectionService} from '../services/projection.service';
import {NgFor, NgIf} from '@angular/common';

@Component({
  selector: 'app-purchase',
    imports: [ NgFor, NgIf,MatCardModule, MatButtonModule, MatListModule, MatFormFieldModule, MatInput, MatLabel, FormsModule, ReactiveFormsModule, MatSelectModule, Loading],
  templateUrl: './purchase.html',
  styleUrl: './purchase.css'
})
export class Purchase {
    public movie:MovieModel | null = null;
    public selectedTicketCount: number = 1;
    public selectedPrice: number = 150;
    public user: UserModel | null = UserService.getActiveUser();
    public projection: ProjectionModel | null = null;
    public projectionId: number | null = null;

    public constructor(private route: ActivatedRoute, public utils:UtilsService, private router:Router) {

        route.params.subscribe(params =>{
            //console.log("Params: ", params);
            MovieService.getMovieById(params['movieId']).
            then(response => {
                //console.log("Response data check: ", response.data);
                this.movie = response.data});
        });
        this.projection = ProjectionService.getProjections()[0];
        console.log("MJAUUUUUUUUUUUUU" +this.projection);
        console.log("MJAUUUUUUUUUUUUU2222222" +this.movie?.movieId);

        route.params.subscribe(params =>{
            //console.log("Params: ", params);
            this.projectionId = (params['projectionId']);
        });
        this.projection = ProjectionService.getProjections()[this.projectionId!];

        if(!UserService.getActiveUser()){
            // Korisnik nije ulogovan
            // Vrati korisnika na homepage
            router.navigate(['/home']);
            alert('You must be logged in to access this page');
            return;
        }

        this.user = UserService.getActiveUser();
    }


    doAddToCart() {
        const result = UserService.addToCart({
            movieId: this.movie!.movieId,
            userId: this.user!.email,
            pojectionId: this.projection!.projectionId,
            ticketCount: this.selectedTicketCount,
            status: "reserved",
            rating: null,
        });

        result ? this.router.navigate(['/user']) : alert('Failed to order');
    }
}
