import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RotatingBannerComponent } from './rotating-banner.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [RotatingBannerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: RotatingBannerComponent }])
  ]
})
export class RotatingBannerModule { }
