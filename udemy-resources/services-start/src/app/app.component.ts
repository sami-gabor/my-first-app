import { Component } from '@angular/core';
import { AccountsService } from './accounts.service';
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private accountService: AccountsService) { }

  accounts: { name: string, status: string }[] = this.accountService.getAccounts();
  
}
