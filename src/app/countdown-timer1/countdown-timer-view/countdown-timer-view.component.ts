import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-timer-view',
  templateUrl: './countdown-timer-view.component.html',
  styleUrls: ['./countdown-timer-view.component.css']
})
export class CountdownTimerViewComponent implements OnInit {
  @Input() public countdown:number;
  @Input() public timer: any;
  isTimerRunning: boolean;

  @Input() public set runTimer(val: boolean) {
    this.isTimerRunning = val;
    this.isTimerRunning ?  this.startTimer() : this.pauseTimer();
  }

  constructor() {
    this.countdown = 0;
    this.isTimerRunning = false;
   }

  ngOnInit(): void {
    if(this.countdown > 0 && this.isTimerRunning === true) {
      this.startTimer();
    } 
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
