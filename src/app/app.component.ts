import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  eventValue: number;

  getEventValue(data: {value: number}) {
    this.eventValue = data.value;
  }

}
