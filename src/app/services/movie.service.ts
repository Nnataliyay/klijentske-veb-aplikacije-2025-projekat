import axios from 'axios';

const client = axios.create({
    baseURL: 'https://movie.pequla.com/api',
    headers: {
        'Accept': 'application/json',
        'X-Client-Name': 'KVA/2025'
    },
    validateStatus: (status: number) => {
        return status === 200; // Vraca response samo ako je status 200, inace baca izuzetak
    }
})

export class MovieService {
    static async getMovies(page: number = 0, size: number = 10) {
        return client.request({
            url: '/movie',
            method: 'GET',
            params: {
                'page': page,
                'size': size,
                'sort': 'movieId,asc',
                'type': 'movie'
            }
        });
    };

    static async getMovieById(id: number) {
        return client.get(`/movie/${id}`);
    };


    static async getGenreById(id: number) {
        return client.get(`/movie/${id}`);
    };
}
