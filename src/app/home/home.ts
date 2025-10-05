import { Component } from '@angular/core';
import {NgFor, NgIf} from '@angular/common';
import {AxiosError} from 'axios';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {UtilsService} from '../services/utils.service';
import {Loading} from '../loading/loading';
import {RouterLink} from '@angular/router';
import {Movies} from '../movies/movies';

@Component({
    selector: 'app-home',
    imports: [NgIf, NgFor, MatCardModule, MatButtonModule, Loading, RouterLink, Movies],
    templateUrl: './home.html',
    styleUrl: './home.css'
})
export class Home {
    constructor(public utils:UtilsService) {}
}
