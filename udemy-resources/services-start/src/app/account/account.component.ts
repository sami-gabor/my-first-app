import { Component, Input } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: { name: string, status: string };
  @Input() id: number;

  constructor(private loggingService: LoggingService, private accountService: AccountsService) { }

  onSetTo(status: string) {
    // this.loggingService.logStatus(status);
    this.accountService.updateStatus({ id: this.id, status: status });
    this.accountService.serverStatus.emit(status);
  }

}
