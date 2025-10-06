import { Component } from '@angular/core';
import {UserService} from '../services/user.service';
import {NgFor, NgIf} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {UserModel} from '../../models/user.model';
import {Router, RouterLink} from '@angular/router';
import {Loading} from '../loading/loading';
import {UtilsService} from '../services/utils.service';
import {MatTableModule} from '@angular/material/table';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import {MovieModel} from '../../models/movie.model';
import {MovieService} from '../services/movie.service';
import {FavoriteList} from '../favorite-list/favorite-list';

@Component({

    selector: 'app-user',
    imports: [NgFor, NgIf, MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, FormsModule, MatSelectModule, Loading, MatTableModule, RouterLink, MatAccordion, MatExpansionModule, FavoriteList],
    templateUrl: './user.html',
    styleUrl: './user.css'
})
export class User {

    public displayedColumns: string[] = ['id', 'destination', 'flightNumber', 'airline', 'count', 'price', 'total', 'status', 'rank' , 'actions'];
    public user: UserModel | null = UserService.getActiveUser();
    public userCopy: UserModel | null = null

    public movies: MovieModel[] | null = null;

    public oldPasswordValue = ''
    public newPasswordValue = ''
    public repeatPasswordValue = ''

    constructor(private router:Router, public utils:UtilsService){
        if(!UserService.getActiveUser()){
            // Korisnik nije ulogovan
            // Vrati korisnika na homepage
            router.navigate(['/home']);
            alert('You must be logged in to access this page');
            return;
        }
        this.user = UserService.getActiveUser();
        this.userCopy = UserService.getActiveUser()

        MovieService.getMovies(0,4).
        then(response => {
            console.log("Response data check: ", response.data);
            this.movies = response.data})
    }

    protected readonly service = UserService;

    public doChangePassword() {
        if (this.oldPasswordValue == '' || this.newPasswordValue == null) {
            alert('Password cant be empty')
            return
        }

        if (this.newPasswordValue !== this.repeatPasswordValue) {
            alert('Password dont match')
            return
        }

        if (this.oldPasswordValue !== this.user?.password) {
            alert('Password dont match')
            return
        }

        alert(
            UserService.changePassword(this.newPasswordValue) ?
                'Password has been changed' : 'Failed to change password'
        )

        this.oldPasswordValue = ''
        this.newPasswordValue = ''
        this.repeatPasswordValue = ''
    }

    public doUpdateUser() {
        if (this.userCopy == null) {
            alert('User not defined')
            return
        }

        UserService.updateUser(this.userCopy)
        this.user = UserService.getActiveUser()
        alert('User was updated')
    }

    public doLogout(){
        localStorage.removeItem('active');
        this.router.navigate(['/home']);
    }

}
