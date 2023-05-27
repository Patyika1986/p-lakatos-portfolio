import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcComponent } from './component/cvc/cvc.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: CvcComponent },

]

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    RouterModule
  ]
})
export class CvcModule { }
