import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './component/overview/overview.component';

const routes: Routes = [
  { path: 'overview', component: OverviewComponent },
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
  {
    path: 'nav',
    loadChildren: () =>
      import('./modules/nav/nav.module').then((navModel) => navModel.NavModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
