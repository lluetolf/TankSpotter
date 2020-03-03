import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SpotReportListComponent } from './spot-report-list/spot-report-list.component';
import { SpotReportDetailComponent } from './spot-report-detail/spot-report-detail.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemSpotReportService } from './services/in-mem-spot-report.service';

const appRoutes: Routes = [
  { path: 'reports', component: SpotReportListComponent },
  { path: 'reports/:id', component: SpotReportDetailComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SpotReportListComponent,
    PageNotFoundComponent,
    SpotReportDetailComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemSpotReportService),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
