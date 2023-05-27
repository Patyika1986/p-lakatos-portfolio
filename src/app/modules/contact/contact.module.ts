import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './component/contact/contact.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'to-contact', component: ContactComponent}
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
export class ContactModule { }
