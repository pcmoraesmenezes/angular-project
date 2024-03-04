import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MainService } from '../../services/services';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.less'
})
export class FooterComponent{
  constructor(private mainService: MainService) { }
  contact = 
    {
      email: 'paulo@email.com',
      photo: ''
    }

  ngOnInit() {
    this.mainService.get_photo();
}
