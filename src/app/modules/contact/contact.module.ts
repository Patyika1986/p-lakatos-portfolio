import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './component/contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { LocationComponent } from './component/location/location.component';

const routes: Routes = [
  { path: 'to-contact', component: ContactComponent},
  { path: '', component: LocationComponent},
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
