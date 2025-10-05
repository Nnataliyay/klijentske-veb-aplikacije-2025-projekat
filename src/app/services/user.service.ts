import {UserModel} from '../../models/user.model';
import {CartModel} from '../../models/cart.model';
import {MovieModel} from '../../models/movie.model';
import {MovieService} from './movie.service';


export class UserService {

    static retrieveUsers(): UserModel[]{
        if(!localStorage.getItem('users')){

            const arr: UserModel[] = [{
                    email: "user@example.com",
                    password: "user123",
                    firstName: "exampleName",
                    lastName: "exampleLastname",
                    phoneNumber: "061 1234567",
                    address: "exampleAddress 123",
                    favoriteMoviesIds: [],
                    watchedMoviesIds: [],
                    cart: []
                }
            ];

            localStorage.setItem('users', JSON.stringify(arr));
        }

        return JSON.parse(localStorage.getItem('users')!); // ovaj uzvicnik obeelzava da je nemoguce da dobijemo null kao povratnu vrednost funkcije (mozemo to koristiti jer smo gore proverili vec)
    }

    static login(email:string, password:string):boolean{

        const users = this.retrieveUsers();

        console.log('Attempting Login, Input:', { email, password });
        console.log('Available Users:', users);


        for(let user of this.retrieveUsers()){
            if(user.email == email && user.password == password){
                localStorage.setItem('active', user.email);
                return true;
            }
        }
        return false;
    }

    static getActiveUser():UserModel | null{
        if(!localStorage.getItem('active')){
            return null;
        }
        for(let user of this.retrieveUsers()){
            if(user.email == localStorage.getItem('active')){
                return user;
            }
        }
        return null;
    }

    static addToCart(cartItem:CartModel):boolean{
        const arr = this.retrieveUsers();
        for(let user of arr){
            if(user.email == localStorage.getItem('active')){
                user.cart.push(cartItem);
                localStorage.setItem('users', JSON.stringify(arr));
                return true;
            }
        }
        return false;
    }

    static changePassword(newPassword:string): boolean{

        const arr = this.retrieveUsers();
        for(let user of arr){
            if(user.email == localStorage.getItem('active')){
                user.password = newPassword;
                localStorage.setItem('users', JSON.stringify(arr));
                return true;
            }
        }
        return false;
    }

    constructor() { }

}
