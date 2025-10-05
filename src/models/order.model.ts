

export interface OrderModel {

    flightId: number;
    flightNumber: string;
    destination: string;
    airline: string;
    count: number;
    pricePerItem: number;
    status: 'ordered' | 'paid' | 'cancelled';
    rating: null | boolean;

}
