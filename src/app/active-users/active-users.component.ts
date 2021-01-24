import { Component, Input } from '@angular/core';
import { UserStatusServiceService } from '../user-status-service.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  @Input() users: string[];
  @Input() count: number;
  // @Output() userSetToInactive = new EventEmitter<number>();

  constructor(private userStatusService: UserStatusServiceService) {}

  onSetToInactive(id: number) {
    // this.userSetToInactive.emit(id);
    this.userStatusService.onSetToInactive(id);
    // console.log('active ', this.count);
  }
}
