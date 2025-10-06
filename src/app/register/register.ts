import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardActions, MatCardContent, MatCardHeader} from "@angular/material/card";
import {MatFormField} from "@angular/material/form-field";
import {MatInput, MatLabel} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {UserService} from '../services/user.service';
import {CartModel} from '../../models/cart.model';

@Component({
  selector: 'app-register',
    imports: [
        MatButton,
        MatCard,
        MatCardActions,
        MatCardContent,
        MatCardHeader,
        MatFormField,
        MatInput,
        MatLabel,
        ReactiveFormsModule,
        RouterLink,
        FormsModule
    ],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

    public email:string = '';
    public password:string = '';
    public repeatPassword = '';
    public firstName = '';
    public lastName = '';
    public phoneNumber = '';
    public address = '';
    favoriteMoviesIds = [];
    watchedMoviesIds = [];
    cart = [];

    constructor(private router:Router){
        if(UserService.getActiveUser()){
            router.navigate(['/user']);
            return;
        }
    }

    public doRegister(){
        if (this.email == '' || this.password == '') {
            alert('Email and password are required fields')
            return
        }

        if (this.password !== this.repeatPassword) {
            alert('Passwords dont match')
            return
        }

        const result = UserService.register({
            email: this.email,
            password: this.password,
            firstName: this.firstName,
            lastName: this.lastName,
            phoneNumber: this.phoneNumber,
            address: this.address,
            favoriteMoviesIds: this.favoriteMoviesIds,
            watchedMoviesIds: this.watchedMoviesIds,
            cart: this.cart,
        })

        result ? this.router.navigate(['/login']) : alert('Email is already taken')
    }

}
