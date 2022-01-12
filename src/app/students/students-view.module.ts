import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StudentsComponent } from './students.component';



@NgModule({
  declarations: [StudentsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: StudentsComponent}])
  ]
})
export class StudentsViewModule { }
