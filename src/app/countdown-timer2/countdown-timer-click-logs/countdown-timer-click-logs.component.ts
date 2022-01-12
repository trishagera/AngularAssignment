import { Component, OnInit } from '@angular/core';
import { countInterface } from '../countdown.interface';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-countdown-timer-click-logs',
  templateUrl: './countdown-timer-click-logs.component.html',
  styleUrls: ['./countdown-timer-click-logs.component.css']
})
export class CountdownTimerClickLogsComponent implements OnInit {
  startedCounter: number;
  pausedCounter: number;

  constructor(private timerService: TimerService) { 
    this.startedCounter = 0;
    this.pausedCounter = 0;
  }

  ngOnInit(): void {
    this.timerService.getStartPauseCount().subscribe( (counterVal: countInterface) => {
      this.startedCounter = counterVal.started;
      this.pausedCounter = counterVal.paused;
    })
  }

}
