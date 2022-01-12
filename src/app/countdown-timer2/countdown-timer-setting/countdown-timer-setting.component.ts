import { Component, OnInit } from '@angular/core';
import { log } from '../countdown.interface';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-countdown-timer-setting',
  templateUrl: './countdown-timer-setting.component.html',
  styleUrls: ['./countdown-timer-setting.component.css']
})
export class CountdownTimerSettingComponent implements OnInit {
  public timerLimit: number;
  public isTimerRunning: boolean;
  public logs: log[];

  constructor(private timerService: TimerService) { 
    this.timerLimit = 0;
    this.isTimerRunning = false;
    this.logs = [];
  }

  ngOnInit(): void {
  }

  setTimerLimit() {
    this.timerService.setTimerLimit(this.timerLimit);;
    this.onReset();
  }

  onStartOrPause() {
    this.isTimerRunning = !this.isTimerRunning;
    this.timerService.setIsTimerRunning(this.isTimerRunning);
    this.setStartPauseLogs();
  }

  setStartPauseLogs() {
    const log: log = {
      event: this.isTimerRunning ? 'Started' : 'Paused',
      timeStamp: new Date()
    }
    this.logs.push(log);
    this.timerService.setStartPauseLogs(this.logs);
  }

  onResetClicked() {
    this.timerLimit = 0;
    this.timerService.setTimerLimit(this.timerLimit);;
    this.onReset();
  }

  onReset() {
    this.isTimerRunning = false;
    this.logs = [];
    this.timerService.setIsTimerRunning(this.isTimerRunning);
    this.timerService.setStartPauseLogs(this.logs);
  }

}
