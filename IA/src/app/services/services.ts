import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  constructor(private http: HttpClient) {}
  getPhoto(): any {
    return this.http.get('https://jsonplaceholder.typicode.com/photos');
  }
}
