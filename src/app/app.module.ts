import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core'

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule } from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SpotReportListComponent } from './spot-report-list/spot-report-list.component';
import { SpotReportDetailComponent } from './spot-report-detail/spot-report-detail.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { GoogleMapsModule } from '@angular/google-maps';

import { InMemSpotReportService } from './services/in-mem-spot-report.service';
import { AddSpotReportDialogComponent } from './add-spot-report-dialog/add-spot-report-dialog.component';
import { SelectLocationDialogComponent } from './select-location-dialog/select-location-dialog.component';

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
    SpotReportDetailComponent,
    AddSpotReportDialogComponent,
    SelectLocationDialogComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    MatSidenavModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule,
    GoogleMapsModule,
    //HttpClientInMemoryWebApiModule.forRoot(InMemSpotReportService),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
