import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() generator = new EventEmitter<{value: number}>();
  value:number = 1;
  game:any;

  constructor() { }

  ngOnInit(): void {
  }

  onStart() {
    this.game = setInterval(() => { this.generateEvent() }, 2000);
  }

  onStop() {
    clearInterval(this.game);
  }

  generateEvent() {
    this.value = this.value+1;
    this.generator.emit({value: this.value});
    console.log("Event Sent")
  }

}
