import { Injectable, EventEmitter } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable({ providedIn: 'root' })
export class AccountsService {
  constructor(private loggingService: LoggingService) { }

  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  serverStatus = new EventEmitter<string>();

  addAccount(newAccount: { name: string, status: string }) {
    this.accounts.push(newAccount);
    this.loggingService.logStatus(newAccount.status);
  }

  updateStatus(updateInfo: { id: number, status: string }) {
    this.accounts[updateInfo.id].status = updateInfo.status;
    this.loggingService.logStatus(updateInfo.status);
  }

  getAccounts() {
    return this.accounts;
  }

}