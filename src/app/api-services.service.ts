import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ApiServicesService {
  constructor(private http: HttpClient) {}
  get_table_data() {
    return this.http.get('https://reqres.in/api/users');
  }
  edit_data(edit_data: any) {
    return this.http.post('https://reqres.in/api/users/', edit_data);
  }
  create_user(edit_data: any) {
    return this.http.post('https://reqres.in/api/register', edit_data);
  }
  delete_user(id: any) {
    return this.http.delete('https://reqres.in/api/register', id);
  }
}
