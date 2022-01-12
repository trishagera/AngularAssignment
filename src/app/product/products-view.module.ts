import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: ProductComponent}])
  ]
})
export class ProductsViewModule { }
