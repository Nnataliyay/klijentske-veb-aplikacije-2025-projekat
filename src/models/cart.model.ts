import {MovieModel} from './movie.model';

export interface CartModel{
    movieId: number;
    userId: string;
    movie: MovieModel[];
    projectionDate: string;
    ticketCount: number;
    status: 'reserved' | 'completed' | 'cancelled';
    rating: null | "1" | "2" | "3" | "4" | "5";
}
