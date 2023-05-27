import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './component/overview/overview.component';
import { ContactComponent } from './modules/contact/component/contact/contact.component';

const routes: Routes = [
  { path: 'overview', component: OverviewComponent },
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
  {
    path: 'nav',
    loadChildren: () =>
      import('./modules/nav/nav.module').then((navModel) => navModel.NavModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./modules/contact/contact.module').then((contact) => contact.ContactModule),
  },
  { path: 'contact-overview', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
