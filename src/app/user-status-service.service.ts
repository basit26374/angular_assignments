import { Injectable, EventEmitter } from '@angular/core';
import { StatusCountService } from './status-count.service';

@Injectable({
  providedIn: 'root'
})
export class UserStatusServiceService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  activeCount:number = 0;
  inactiveCount:number = 0;

  constructor(private statusCountService: StatusCountService) { }

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.inactiveCount = this.statusCountService.countInactive();
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.activeCount = this.statusCountService.countActive();
  }
}
