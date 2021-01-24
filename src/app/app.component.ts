import { Component } from '@angular/core';
import { UserStatusServiceService } from './user-status-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeUsers = [];
  inactiveUsers = [];
  activeCount:number;
  inactiveCount:number;

  constructor(private userStatusService: UserStatusServiceService) {}

  ngOnInit() {
    this.activeUsers = this.userStatusService.activeUsers;
    this.inactiveUsers = this.userStatusService.inactiveUsers;
    this.activeCount = this.userStatusService.activeCount;
    this.inactiveCount = this.userStatusService.inactiveCount;
  }
}
