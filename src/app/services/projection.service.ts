import {ProjectionModel} from '../../models/projection.model';
import {UserModel} from '../../models/user.model';

export class ProjectionService {

    static getProjections(): ProjectionModel[] {
        if (!localStorage.getItem('projections')) {

            const arr: ProjectionModel[] = [{
                projectionId: 1,
                date: "06/10/2025 14:30",
                type: "3D",
                price: 800,
            }, {
                projectionId: 2,
                date: "07/10/2025 16:45",
                type: "2D",
                price: 600,
            }, {
                projectionId: 3,
                date: "08/10/2025 19:00",
                type: "4D",
                price: 1000,
            }, {
                projectionId: 4,
                date: "09/10/2025 21:15",
                type: "IMAX",
                price: 1200,
            }, {
                projectionId: 5,
                date: "10/10/2025 15:30",
                type: "2D",
                price: 600,
            }, {
                projectionId: 6,
                date: "11/10/2025 17:45",
                type: "4D",
                price: 1000,
            }, {
                projectionId: 7,
                date: "12/10/2025 20:00",
                type: "IMAX",
                price: 1200,
            }, {
                projectionId: 8,
                date: "13/10/2025 14:15",
                type: "2D",
                price: 600,
            }, {
                projectionId: 9,
                date: "14/10/2025 18:30",
                type: "4D",
                price: 1000,
            }, {
                projectionId: 10,
                date: "15/10/2025 22:00",
                type: "IMAX",
                price: 1200,
            }];

            localStorage.setItem('projections', JSON.stringify(arr));
        }

        return JSON.parse(localStorage.getItem('projections')!); // ovaj uzvicnik obeelzava da je nemoguce da dobijemo null kao povratnu vrednost funkcije (mozemo to koristiti jer smo gore proverili vec)
    }

    static getProjectionById(id: number) {
        return this.getProjections().find(projection=>projection.projectionId === id)
    }



}
