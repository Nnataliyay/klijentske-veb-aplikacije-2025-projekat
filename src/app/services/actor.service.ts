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

export class ActorService {


    constructor() { }

    static async getActorById(id: number) {
        return client.get(`/actor/${id}`);
    };

}
