import {OrderModel} from './order.model';
import {MovieModel} from './movie.model';
import {CartModel} from './cart.model';

export interface UserModel {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    address: string;
    favoriteMoviesIds: [];
    watchedMoviesIds: [];
    cart: CartModel[];
}
