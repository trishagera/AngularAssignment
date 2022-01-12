import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { log, countInterface } from './countdown.interface';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private timerLimit = new BehaviorSubject<number>(0); 
  private logs = new BehaviorSubject<log[]>([]);
  private IsTimerRunning = new BehaviorSubject<boolean>(false);
  private startPauseCount = new BehaviorSubject<countInterface>({started: 0, paused: 0 })


  constructor() { }

  setTimerLimit(timerLimit: number) {
    this.timerLimit.next(timerLimit)
  }

  getTimerLimit(): BehaviorSubject<number> {
    return this.timerLimit;
  }

  setIsTimerRunning(IsTimerRunning: boolean) {
    this.IsTimerRunning.next(IsTimerRunning);
  }

  getIsTimerRunning(): BehaviorSubject<boolean> {
    return this.IsTimerRunning;
  }

  setStartPauseLogs(logs: log[]) {
    this.logs.next(logs);
    this.setStartPauseCount(logs);
  }

  private setStartPauseCount(logs: log[]) {
    this.logs.next(logs);
    // let startedCounter = 0;
    // let pausedCounter = 0;
    // let counterObj: countInterface = {started: 0,paused : 0 };
    // this.logs.subscribe( logs => {
    const startedCounter = logs.filter((item => item.event === 'Started')).length;
    const pausedCounter = logs.length - startedCounter;
    const counterObj: countInterface = {
      started: startedCounter,
      paused: pausedCounter
    };
    this.startPauseCount.next(counterObj);
    // });    
  }

  getStartPauseCount(): BehaviorSubject<countInterface> {
    return this.startPauseCount;

  }

  getStartPauseLogs() : BehaviorSubject<log[]> {
    return this.logs;
  }
}
