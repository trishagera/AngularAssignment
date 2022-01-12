import { Component, OnInit } from '@angular/core';
import { log } from './countdown.interface';

@Component({
  selector: 'app-countdown-timer1',
  templateUrl: './countdown-timer1.component.html',
  styleUrls: ['./countdown-timer1.component.css']
})
export class CountdownTimer1Component implements OnInit {
  public timeLimit: number;
  public isTimerRunning: boolean;
  logs: log[];
  pausedCounter: number;
  startedCounter: number;

  constructor() {
    this.timeLimit = 0;
    this.isTimerRunning = false;
    this.logs = [];
    this.startedCounter = 0;
    this.pausedCounter = 0;
   }

  ngOnInit(): void {
  }

  setTimerLimit(timeLimit: number) {
    this.timeLimit = timeLimit ? timeLimit : 0;
  }

  setIsTimerRunning(isTimerRunning: boolean) {
    this.isTimerRunning = isTimerRunning;
  }

  setLogs(logs: log[]) {
    this.logs = logs;
    this.setStartPauseCounters();
  }

  setStartPauseCounters() {
    this.startedCounter = this.logs.filter((item => item.event === 'Started')).length;
    this.pausedCounter = this.logs.length - this.startedCounter;
  }

}
