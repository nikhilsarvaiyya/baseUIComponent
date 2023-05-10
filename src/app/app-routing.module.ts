import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { PagenotfoundComponent } from './comman/pagenotfound/pagenotfound.component';

import { DetailComponent } from './pages/design-ui/detail/detail.component';
import { ListComponent } from './pages/design-ui/list/list.component';
import { TableComponent } from './pages/table-components/table/table.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'design/ui/page/:pageId', component: DashboardComponent, pathMatch: 'full' },
  { path: 'design/ui/list/:listId', component: ListComponent, pathMatch: 'full' },
  { path: 'design/ui/list/:listId/:subListId', component: ListComponent, pathMatch: 'full' },
  { path: 'design/ui/detail/:listId/:detailId', component: DetailComponent, pathMatch: 'full' },
  { path: 'design/ui/detail/:listId/:subListId/:detailId', component: DetailComponent, pathMatch: 'full' },
  { path: 'design/table/list/:tableId', component: TableComponent, pathMatch: 'full' },
  { path: 'design/table/page/:tableId', component: DashboardComponent, pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
