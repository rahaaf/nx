import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CustomerService {

    constructor(private http: HttpClient) {}

    getCustomers() {
        return this.http.get('https://randomuser.me/api/?results=200&exc=login');
    }
};
