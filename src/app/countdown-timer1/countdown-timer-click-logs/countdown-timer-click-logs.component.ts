import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-timer-click-logs',
  templateUrl: './countdown-timer-click-logs.component.html',
  styleUrls: ['./countdown-timer-click-logs.component.css']
})
export class CountdownTimerClickLogsComponent implements OnInit {
  @Input() startedCounter: number;
  @Input() pausedCounter: number;

  constructor() { 
    this.startedCounter = 0;
    this.pausedCounter = 0;
  }

  ngOnInit(): void {
  }

}
