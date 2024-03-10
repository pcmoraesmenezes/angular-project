import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.less',
})
export class FooterComponent {
  @Input() photo: any;

  contact: { email: string; photo: string } = {
    email: '',
    photo: '',
  };

  ngOnInit() {
    console.log(this.photo);
    this.contact.photo = this.photo;
  }
}
