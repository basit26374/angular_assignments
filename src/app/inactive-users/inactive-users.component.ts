import { Component, Input } from '@angular/core';
import { UserStatusServiceService } from '../user-status-service.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() users: string[];
  @Input() count: number;
  // @Output() userSetToActive = new EventEmitter<number>();

  constructor(private userStatusService: UserStatusServiceService) {}

  onSetToActive(id: number) {
    // this.userSetToActive.emit(id);
    this.userStatusService.onSetToActive(id);
  }
}
