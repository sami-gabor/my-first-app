import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class UsersService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  setToActive(userId: number) {
    this.activeUsers.push(this.inactiveUsers[userId]);
    this.inactiveUsers.splice(userId, 1);
  }

  setToInactive(userId: number) {
    this.inactiveUsers.push(this.activeUsers[userId]);
    this.activeUsers.splice(userId, 1);
  }

}
