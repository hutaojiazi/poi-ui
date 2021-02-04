export class LocationOpeningTime {
    days: string;
    opening: string;
    closing: string;
    closed: boolean;

    constructor(days: string, opening: string, closing: string, closed: boolean) {
        this.days = days;
        this.opening = opening;
        this.closing = closing;
        this.closed = closed;
    }
}

export class LocationReview {
    id: string;
    author: string;
    rating: number;
    createdOn: Date;

    constructor(id: string, author: string, rating: number, createdOn: Date) {
        this.id = id;
        this.author = author;
        this.rating = rating;
        this.createdOn = createdOn;
    }
}

export class Location {
    id: string;
    name: string;
    address: string;
    rating: number;
    facilities: string[];
    coords: number[];
    openingTimes: LocationOpeningTime[];
    reviews: LocationReview[];

    constructor(id: string, name: string, address: string, rating: number, facilities: string[], coords: number[], openingTimes: LocationOpeningTime[], reviews: LocationReview[]) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.rating = rating;
        this.facilities = facilities;
        this.coords = coords;
        this.openingTimes = openingTimes;
        this.reviews = reviews;
    }
}