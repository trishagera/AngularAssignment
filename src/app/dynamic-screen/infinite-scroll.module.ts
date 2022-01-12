import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicScreenComponent } from './dynamic-screen.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ DynamicScreenComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: DynamicScreenComponent}])
  ]
})
export class InfiniteScrollModule { }
