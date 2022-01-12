import { Component, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-countdown-timer-view',
  templateUrl: './countdown-timer-view.component.html',
  styleUrls: ['./countdown-timer-view.component.css']
})
export class CountdownTimerViewComponent implements OnInit {
  countdown: number;
  isTimerRunning: boolean;
  timer: any;

  constructor(private timerService: TimerService) { 
    this.countdown = 0;
    this.isTimerRunning = false;
  }

  ngOnInit(): void {
    this.timerService.getTimerLimit().subscribe( timerLimit => {
      this.countdown = timerLimit;
    });
    this.timerService.getIsTimerRunning().subscribe( isTimerRunning => {
      this.isTimerRunning = isTimerRunning;
      if(this.isTimerRunning === false) {
        this.pauseTimer();
      }
      else if(this.countdown > 0 && this.isTimerRunning === true) {
        this.startTimer();
      } 
    })

  }

  startTimer() {
    this.timer = setInterval( () => {
      if(this.countdown > 0) {
        this.countdown--;
      }
    }, 1000)
  }

  pauseTimer() {
    clearInterval(this.timer)
  }

}
