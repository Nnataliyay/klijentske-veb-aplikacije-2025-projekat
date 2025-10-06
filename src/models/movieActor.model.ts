import {ActorModel} from './actor.model';

export interface MovieActorModel {
    movieActorId: number;
    movieId: number;
    actor: ActorModel;
}
