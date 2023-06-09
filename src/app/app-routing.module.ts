import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { PagenotfoundComponent } from './comman/pagenotfound/pagenotfound.component';

import { DetailComponent } from './pages/design-ui/detail/detail.component';
import { ListComponent } from './pages/design-ui/list/list.component';
import { TableComponent } from './pages/table-components/table/table.component';
import { FormCardComponent } from './admin/components/designui/form-card/form-card.component';
import { FormCardListComponent } from './admin/components/designui/form-card-list/form-card-list.component';
import { FormCardDetailComponent } from './admin/components/designui/form-card-detail/form-card-detail.component';
import { ProductComponent } from './admin/components/designui/product/product.component';
import { ProductDetailComponent } from './admin/components/designui/product-detail/product-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'design/ui/page/:pageId', component: DashboardComponent, pathMatch: 'full' },
  { path: 'design/ui/list/:listId', component: ListComponent, pathMatch: 'full' },
  { path: 'design/ui/list/:listId/:subListId', component: ListComponent, pathMatch: 'full' },
  { path: 'design/ui/detail/:listId/:detailId', component: DetailComponent, pathMatch: 'full' },
  { path: 'design/ui/detail/:listId/:subListId/:detailId', component: DetailComponent, pathMatch: 'full' },
  { path: 'design/table/list/:tableId', component: TableComponent, pathMatch: 'full' },
  { path: 'design/table/page/:tableId', component: DashboardComponent, pathMatch: 'full' },
  { path: 'admin/component/designui/form-card', component: FormCardListComponent, pathMatch: 'full' },
  { path: 'admin/component/designui/form-card-detail', component: FormCardDetailComponent, pathMatch: 'full' },
  { path: 'admin/component/designui/product', component: ProductComponent, pathMatch: 'full' },
  { path: 'admin/component/designui/product/:productId', component: ProductDetailComponent, pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
