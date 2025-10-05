import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import {Search} from './search/search';
import {Details} from './details/details';
import {Login} from './login/login';
import {User} from './user/user';
import {Movies} from './movies/movies';
import {Cart} from './cart/cart';
import {Purchase} from './purchase/purchase';

export const routes: Routes = [
    { path: '', component: Home},
    { path: 'movies', component: Movies},
    { path: 'cart', component: Cart},
    { path: 'about', component: About},
    { path: 'search', component: Search},
    { path: 'details/:movieId', component: Details},
    { path: 'details/:movieId/purchase', component: Purchase},
    { path: 'login', component: Login},
    { path: 'user', component: User},


    { path: '**', redirectTo: ''} // svi pathovi moraju biti definisani iznad ovog jer on mapira bilo sta dalje na home komponentu
];
