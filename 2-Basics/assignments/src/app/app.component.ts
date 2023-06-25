import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data1 = 'Data from app.component.ts using String Interpolation';
  data2 = 'Data from app.component.ts using Property Binding';
  data3 = '';
  username = '';
  details = false;
  items = [];


  print() {
    console.log('Data from Template (app.component.html) using Event Binding');
  }

  update(event: Event) {
    console.log(event);
    //this.data3 = (<HTMLLinkElement>event.target).value;
    this.data3 = (event.target as HTMLInputElement).value;
  }

  usernameIsEmpty() : boolean {
    return this.username === '';
  }


  updateUsername() {
    this.username = '';
  }

  display() {
    this.details = !this.details;
    this.items.push(new Date());
  }


}
