import { Routes } from '@angular/router';
import { Home } from './home/home';
import {Search} from './search/search';
import {Details} from './details/details';
import {Login} from './login/login';
import {User} from './user/user';
import {Movies} from './movies/movies';
import {Cart} from './cart/cart';
import {Purchase} from './purchase/purchase';
import {FavoriteList} from './favorite-list/favorite-list';
import {Register} from './register/register';

export const routes: Routes = [
    { path: '', component: Home},
    { path: 'movies', component: Movies},
    { path: 'cart', component: Cart},
    { path: 'search', component: Search},
    { path: 'details/:movieId', component: Details},
    { path: 'details/:movieId/purchase/:projectionId', component: Purchase},
    { path: 'login', component: Login},
    { path: 'register', component: Register},
    { path: 'user', component: User},
    { path: 'user/favorites/:id', component: FavoriteList},


    { path: '**', redirectTo: ''} // svi pathovi moraju biti definisani iznad ovog jer on mapira bilo sta dalje na home komponentu
];
