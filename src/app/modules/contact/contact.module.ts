import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './component/contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { LocationComponent } from './component/location/location.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'to-contact', component: ContactComponent },
  { path: '', component: LocationComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [RouterModule],
})
export class ContactModule {}
