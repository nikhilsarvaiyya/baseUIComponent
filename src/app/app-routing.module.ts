import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CommanComponent } from './comman/comman.component';
import { DetailComponent } from './detail/detail.component';
const routes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' },
  { path: 'component/:type', component: CommanComponent, pathMatch: 'full' },
  { path: 'component/:type/:id', component: DetailComponent, pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
