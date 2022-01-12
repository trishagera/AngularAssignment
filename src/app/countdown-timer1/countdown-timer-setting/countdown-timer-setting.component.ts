import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { log } from '../countdown.interface';

@Component({
  selector: 'app-countdown-timer-setting',
  templateUrl: './countdown-timer-setting.component.html',
  styleUrls: ['./countdown-timer-setting.component.css']
})
export class CountdownTimerSettingComponent implements OnInit {
  @Output() sendTimerLimit = new EventEmitter<number>();
  @Output() sendTimerRunningNotification = new EventEmitter<boolean>();
  @Output() logsEmitter = new EventEmitter<log[]>();
  public timerLimit: number;
  isTimerRunning: boolean;
  logs: log[];

  constructor() { 
    this.timerLimit = 0;
    this.isTimerRunning = false;
    this.logs = [];
  }

  ngOnInit(): void {
  }

  setTimerLimit() {
    this.sendTimerLimit.emit(this.timerLimit);
    this.onReset();
  }

  onStartOrPause() {
    this.isTimerRunning = !this.isTimerRunning;
    this.sendTimerRunningNotification.emit(this.isTimerRunning);
    this.setStartPauseLogs();
  }

  setStartPauseLogs() {
    const log: log = {
      event: this.isTimerRunning ? 'Started' : 'Paused',
      timeStamp: new Date()
    }
    this.logs.push(log);
    this.logsEmitter.emit(this.logs);
  }

  onResetClicked() {
    this.timerLimit = 0;
    this.sendTimerLimit.emit(this.timerLimit);
    this.onReset();
  }

  onReset() {
    this.isTimerRunning = false;
    this.logs = [];
    this.sendTimerRunningNotification.emit(this.isTimerRunning);
    this.logsEmitter.emit(this.logs);
  }

}
