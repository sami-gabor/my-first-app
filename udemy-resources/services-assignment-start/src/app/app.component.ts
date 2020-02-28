import { Component, OnChanges, DoCheck } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  counter: number;

  constructor(private counterService: CounterService) {
  }
  
  ngDoCheck() {
    this.counter = this.counterService.counter;
  }

}
