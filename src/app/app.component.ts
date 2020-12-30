import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  toggle:boolean = false
  click_times:number = 0
  logs:number[] = []

  constructor() {
  }

  ontoggle() {
    this.toggle = !this.toggle
    this.click_times = this.click_times + 1
    console.log(this.click_times)
    this.logs.push(this.click_times)
  }

  getColor(value) {
    if (value >= 5) {
      return 'lightblue'
    }
  }
}
