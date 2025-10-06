import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {UtilsService} from '../services/utils.service';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {

    constructor(private router:Router, public utils:UtilsService) {
        if (!UserService.getActiveUser()) {
            // Korisnik nije ulogovan
            // Vrati korisnika na homepage
            router.navigate(['/home']);
            alert('You must be logged in to access this page');
            return;
        }
    }

}
