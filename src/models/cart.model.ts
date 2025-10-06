import {MovieModel} from './movie.model';
import {ProjectionModel} from './projection.model';

export interface CartModel{
    movieId: number;
    userId: string;
    pojectionId: number,
    ticketCount: number;
    status: 'reserved' | 'completed' | 'cancelled';
    rating: null | "1" | "2" | "3" | "4" | "5";
}
