import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

import { DetailComponent } from './components/detail/detail.component';
import { ListComponent } from './components/list/list.component';
const routes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' },
  { path: 'component/:type', component: ListComponent, pathMatch: 'full' },
  { path: 'component/:type/:id', component: DetailComponent, pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
