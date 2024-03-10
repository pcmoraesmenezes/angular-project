import { Component, OnInit } from '@angular/core';
import { MainService } from './services/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent implements OnInit {
  title = 'IA';
  photo = '';

  constructor(private mainService: MainService) {}

  ngOnInit(): void {
    this.mainService.getPhoto().subscribe((response: any) => {
      this.photo = response[0].url;
    });
  }
}
