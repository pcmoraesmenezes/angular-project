import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.less'
})
export class FooterComponent implements OnInit{

  contact = 
    {
      email: 'paulo@email.com',
      photo: ''
    }


  constructor(private http: HttpClient) { }

   ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/photos')
    .subscribe((response:any) => {
      this.contact.photo = response[0].url;
    })
}
}
