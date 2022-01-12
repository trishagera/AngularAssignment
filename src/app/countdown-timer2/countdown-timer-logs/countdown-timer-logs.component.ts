import { Component, OnInit } from '@angular/core';
import { log } from '../countdown.interface';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-countdown-timer-logs',
  templateUrl: './countdown-timer-logs.component.html',
  styleUrls: ['./countdown-timer-logs.component.css']
})
export class CountdownTimerLogsComponent implements OnInit {
  logs: log[];
  constructor(private timerService: TimerService) { 
    this.logs = [];
  }

  ngOnInit(): void {
    this.timerService.getStartPauseLogs().subscribe( (logs: log[]) => {
      this.logs = logs;
    })
  }

}
