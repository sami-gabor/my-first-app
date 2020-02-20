import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-five',
  templateUrl: './section-five.component.html',
  styleUrls: ['./section-five.component.css']
})
export class SectionFiveComponent implements OnInit {
  serverElements = [
    {
      type: 'test',
      name: 'test',
      content: 'test'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
