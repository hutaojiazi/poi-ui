import {Subject} from "rxjs/internal/Subject";
import {HttpClient} from '@angular/common/http';
import {Injectable} from "@angular/core";
import {Product, Products} from "../models/product.model";

@Injectable()
export class ProductService {
    private url = "/api/products";

    constructor(private http: HttpClient) {
    }

    getAll(): Promise<Products> {
        return this.http
            .get(this.url)
            .toPromise()
            .then(response => response as Products)
            .catch(this.handleError);
    }

    getById(id: string): Promise<Product> {
        const url: string = `${this.url}/${id}`;
        return this.http
            .get(url)
            .toPromise()
            .then(response => response as Product)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('Something has gone wrong', error);
        return Promise.reject(error.message || error);
    }
}