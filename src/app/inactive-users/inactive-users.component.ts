import { Component, Input, OnInit } from '@angular/core';
import { UserStatusServiceService } from '../user-status-service.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];

  constructor(private userStatusService: UserStatusServiceService) {}

  ngOnInit() {
    this.users = this.userStatusService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.userStatusService.onSetToActive(id);
  }
}
