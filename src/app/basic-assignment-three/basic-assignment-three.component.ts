import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-assignment-three',
  templateUrl: './basic-assignment-three.component.html',
  styleUrls: ['./basic-assignment-three.component.css']
})
export class BasicAssignmentThreeComponent implements OnInit {
  detailsStatus = true;
  logs = [];
  constructor() { }

  ngOnInit(): void {
  }

  toggleDetails() {
    this.detailsStatus = !this.detailsStatus;
    const date = new Date();
    const log = date.toString().split(' GMT')[0]
    this.logs.push(log);
  }
}
