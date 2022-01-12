import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownTimer2Component } from './countdown-timer2.component';
import { RouterModule } from '@angular/router';
import { CountdownTimerViewComponent } from './countdown-timer-view/countdown-timer-view.component';
import { CountdownTimerSettingComponent } from './countdown-timer-setting/countdown-timer-setting.component';
import { CountdownTimerLogsComponent } from './countdown-timer-logs/countdown-timer-logs.component';
import { CountdownTimerClickLogsComponent } from './countdown-timer-click-logs/countdown-timer-click-logs.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ 
    CountdownTimer2Component, 
    CountdownTimerViewComponent, 
    CountdownTimerSettingComponent, 
    CountdownTimerLogsComponent, 
    CountdownTimerClickLogsComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{path: '', component: CountdownTimer2Component}])
  ],
})
export class CountdownTimer2Module { }
