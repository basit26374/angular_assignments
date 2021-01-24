import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatusCountService {
  numOfActiveCount = 0;
  numOfInactiveCount = 0;

  constructor() { }

  countActive() {
    this.numOfActiveCount++;
    console.log("Active counts : ", this.numOfActiveCount);
  }

  countInactive() {
    this.numOfInactiveCount++;
    console.log("Inactive counts : ", this.numOfInactiveCount)
  }
}
