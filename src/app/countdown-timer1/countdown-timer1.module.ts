import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownTimer1Component } from './countdown-timer1.component';
import { Router, RouterModule } from '@angular/router';
import { CountdownTimerViewComponent } from './countdown-timer-view/countdown-timer-view.component';
import { CountdownTimerSettingComponent } from './countdown-timer-setting/countdown-timer-setting.component';
import { CountdownTimerLogsComponent } from './countdown-timer-logs/countdown-timer-logs.component';
import { CountdownTimerClickLogsComponent } from './countdown-timer-click-logs/countdown-timer-click-logs.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CountdownTimer1Component,
    CountdownTimerViewComponent, 
    CountdownTimerSettingComponent, 
    CountdownTimerLogsComponent, 
    CountdownTimerClickLogsComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{path: '', component: CountdownTimer1Component}])
  ]
})
export class CountdownTimer1Module { }
