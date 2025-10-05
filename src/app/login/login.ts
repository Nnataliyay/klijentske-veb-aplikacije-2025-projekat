import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {Router, RouterLink} from '@angular/router';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-login',
    imports: [FormsModule, MatFormFieldModule, MatInputModule, MatCardModule, MatButtonModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

    public email:string = '';
    public password:string = '';

    constructor(private router:Router){
        if(UserService.getActiveUser()){
            router.navigate(['/user']);
            return;
        }
    }

    public doLogin(){
        if(UserService.login(this.email, this.password)){
            this.router.navigate(['/user']);
            return;
        }

        alert('Invalid credentials');
    }
}
