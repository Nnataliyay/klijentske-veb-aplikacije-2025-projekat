import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {UtilsService} from '../services/utils.service';
import {UserService} from '../services/user.service';
import {MatTable, MatTableModule} from '@angular/material/table';
import {NgFor, NgIf} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {Loading} from '../loading/loading';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MovieModel} from '../../models/movie.model';
import {MovieService} from '../services/movie.service';
import {UserModel} from '../../models/user.model';
import {CartModel} from '../../models/cart.model';
import {ProjectionModel} from '../../models/projection.model';
import {ProjectionService} from '../services/projection.service';

@Component({
  selector: 'app-cart',
    imports: [MatTableModule, NgIf, NgFor, MatSelectModule, MatButtonModule, Loading, RouterLink, MatCardModule, MatFormFieldModule, MatInputModule, FormsModule],
    templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {
    displayedColumns: string[] = ['movieTitle', 'status','projectionDate', 'pricePerTicket', 'rating', 'ticketCount', 'totalPrice', 'actions'];

    public dataSource: CartModel[] = [];
    public activeUser: UserModel | null = UserService.getActiveUser();
    movies: MovieModel[] | null = null;
    projections: ProjectionModel[] | null = null;

    constructor(private router:Router, public utils:UtilsService) {
        if (!UserService.getActiveUser()) {
            // Korisnik nije ulogovan
            // Vrati korisnika na homepage
            router.navigate(['/home']);
            alert('You must be logged in to access this page');
            return;
        }

        MovieService.getMovies(0,4).
        then(response => {
            this.movies = response.data})

        this.activeUser = UserService.getActiveUser();
        this.dataSource = UserService.getActiveUser()!.cart;
        console.log("MJAUUUUUUUUUUUUU" + this.activeUser!.cart);
        console.log("Cart DataSource Loaded:", this.dataSource);

        this.projections = ProjectionService.getProjections();
        console.log("MPROJECTIONSSS   " +this.projections);

    }

}
