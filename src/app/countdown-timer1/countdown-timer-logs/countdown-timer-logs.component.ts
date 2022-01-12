import { Component, Input, OnInit } from '@angular/core';
import { log } from '../countdown.interface';

@Component({
  selector: 'app-countdown-timer-logs',
  templateUrl: './countdown-timer-logs.component.html',
  styleUrls: ['./countdown-timer-logs.component.css']
})
export class CountdownTimerLogsComponent implements OnInit { 
  @Input() logs: log[];

  constructor() {
    this.logs = [];
   }

  ngOnInit(): void {
  }

}
