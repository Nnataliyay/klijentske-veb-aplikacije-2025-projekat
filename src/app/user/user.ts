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

@Component({
  selector: 'app-user',
    imports: [NgFor, NgIf, MatButtonModule, MatCardModule, Loading, MatTableModule, RouterLink],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {

    public displayedColumns: string[] = ['id', 'destination', 'flightNumber', 'airline', 'count', 'price', 'total', 'status', 'rank' , 'actions'];
    public user: UserModel | null = UserService.getActiveUser();

    constructor(private router:Router, public utils:UtilsService){
        if(!UserService.getActiveUser()){
            // Korisnik nije ulogovan
            // Vrati korisnika na homepage
            router.navigate(['/home']);
            alert('You must be logged in to access this page');
            return;
        }

        this.user = UserService.getActiveUser();
    }

    protected readonly service = UserService;

    public doChangePassword(){
        const newPassword = prompt('Enter new password');
        if(newPassword == null || newPassword == ''){
            return alert('Password cannot be empty');
        }
        if(UserService.changePassword(newPassword!)){
            alert('Password changed');
        }else{
            alert('Failed to change password');
        }
    }
}
