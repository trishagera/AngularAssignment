import { NgModule, ViewChild } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'rotatingBanner',
    loadChildren: () => import('./rotating-banner/rotating-banner.module').then(m => m.RotatingBannerModule)
  },
  {
    path: 'productsView',
    loadChildren: () => import('./product/products-view.module').then(m => m.ProductsViewModule)
  },
  {
    path: 'countdownTimer1',
    loadChildren: () => import('./countdown-timer1/countdown-timer1.module').then( m=> m.CountdownTimer1Module)
  },
  {
    path: 'countdownTimer2',
    loadChildren: () => import('./countdown-timer2/countdown-timer2.module').then(m => m.CountdownTimer2Module)
  },
  {
    path: 'studentsView',
    loadChildren: () => import('./students/students-view.module').then(m => m.StudentsViewModule)
  },
  {
    path: 'infiniteScroll',
    loadChildren: () => import('./dynamic-screen/infinite-scroll.module').then(m=> m.InfiniteScrollModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
