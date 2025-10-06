import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import {NgFor, NgIf} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {Router, RouterLink} from '@angular/router';
import {MovieModel} from '../../models/movie.model';
import {UserModel} from '../../models/user.model';
import {UserService} from '../services/user.service';
import {UtilsService} from '../services/utils.service';
import {MovieService} from '../services/movie.service';

@Component({
  selector: 'app-favorite-list',
  imports: [NgFor, NgIf, MatTableModule, RouterLink, MatAccordion, MatExpansionModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, FormsModule, MatSelectModule],
  templateUrl: './favorite-list.html',
  styleUrl: './favorite-list.css'
})
export class FavoriteList {
    public user: UserModel | null = UserService.getActiveUser();
    public movies: MovieModel[] | null = null;

    constructor(private router:Router, public utils:UtilsService){
        if(!UserService.getActiveUser()){
            // Korisnik nije ulogovan
            // Vrati korisnika na homepage
            router.navigate(['/home']);
            alert('You must be logged in to access this page');
            return;
        }
        this.user = UserService.getActiveUser();

        MovieService.getMovies(0,4).
        then(response => {
            console.log("Response data check: ", response.data);
            this.movies = response.data})
    }

}
