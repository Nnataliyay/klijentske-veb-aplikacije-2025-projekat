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

@Component({
  selector: 'app-cart',
    imports: [MatTableModule, NgIf, NgFor, MatSelectModule, MatButtonModule, Loading, RouterLink, MatCardModule, MatFormFieldModule, MatInputModule, FormsModule],
    templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {
    displayedColumns: string[] = ['movieId', 'title', 'startDate', 'actions'];

    dataSource: CartModel[] | null = null;
    activeUser: UserModel | null = UserService.getActiveUser();

    constructor(private router:Router, public utils:UtilsService) {
        if (!UserService.getActiveUser()) {
            // Korisnik nije ulogovan
            // Vrati korisnika na homepage
            router.navigate(['/home']);
            alert('You must be logged in to access this page');
            return;
        }

        this.activeUser = UserService.getActiveUser();
    }

}
