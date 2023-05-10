import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {CommonModule} from '@angular/common'; 
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HeaderComponent } from './layout/header/header.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { PagenotfoundComponent } from './comman/pagenotfound/pagenotfound.component';


import { DetailComponent } from './pages/design-ui/detail/detail.component';
import { ListComponent } from './pages/design-ui/list/list.component';
import { SanitizeHtmlPipe } from './pipe/sanitize-html.pipe';
import { SubHeaderComponent } from './layout/sub-header/sub-header.component';
import { HomeComponent } from './layout/home/home.component';
import { LoadingComponent } from './comman/loading/loading.component';
import { CardComponent } from './comman/card/card.component';
import { TableComponent } from './pages/table-components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    DashboardComponent,
    PagenotfoundComponent,
    DetailComponent,
    ListComponent,
    SanitizeHtmlPipe,
    SubHeaderComponent,
    HomeComponent,
    LoadingComponent,
    CardComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    CommonModule,
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
