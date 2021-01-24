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
    // console.log("Active counts : ", this.numOfActiveCount);
    return 4;
  }

  countInactive() {
    this.numOfInactiveCount++;
    return this.numOfInactiveCount
  }
}
