import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })

export class MainService {
    constructor(private http: HttpClient) { }

    public get_photo: any;

    getPhoto (): void {
        this.get_photo = this.http.get('https://jsonplaceholder.typicode.com/photos');
        
      }
}
