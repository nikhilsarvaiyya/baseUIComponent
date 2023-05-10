import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

import { DetailComponent } from './components/detail/detail.component';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'component/page/:pageId', component: DashboardComponent, pathMatch: 'full' },
  { path: 'component/list/:listId', component: ListComponent, pathMatch: 'full' },
  { path: 'component/list/:listId/:subListId', component: ListComponent, pathMatch: 'full' },
  { path: 'component/detail/:listId/:detailId', component: DetailComponent, pathMatch: 'full' },
  { path: 'component/detail/:listId/:subListId/:detailId', component: DetailComponent, pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
