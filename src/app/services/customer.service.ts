import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICustomer, ICustomers } from '../interfaces/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private httpClient: HttpClient) {}
  getCustomers(): Observable<ICustomers> {
    return this.httpClient.get<ICustomers>(
      'https://jsonplaceholder.typicode.com/users'
    );
  }

  createCustomer(data: ICustomer): Observable<ICustomers> {
    return this.httpClient.post<ICustomers>(
      'https://jsonplaceholder.typicode.com/users',
      data
    );
  }

  editCustomer(data: ICustomer): Observable<any> {
    return this.httpClient.put<ICustomers>(
      `https://jsonplaceholder.typicode.com/users/${data.id}`,
      data
    );
  }

  deleteCustomer(id: Number): Observable<ICustomers> {
    return this.httpClient.delete<ICustomers>(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
  }
}
