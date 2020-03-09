import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { SpotReport } from '../model/spotreport';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

import { SpotReportService } from '../services/spot-report.service';
import { AddSpotReportDialogComponent } from '../add-spot-report-dialog/add-spot-report-dialog.component';
import { SpotReportTableDataSource } from '../spot-report-table-data-source';

@Component({
  selector: 'app-spot-report-list',
  templateUrl: './spot-report-list.component.html',
  styleUrls: ['./spot-report-list.component.scss']
})
export class SpotReportListComponent implements OnInit, AfterViewInit {

  public displayedColumns: string[] = ["id", "tankType", "spotTime", "spotLocation", "status", "action" ];
  public spotReports: SpotReportTableDataSource;

  public mapCenter: google.maps.LatLngLiteral;
  public markers: any[];

  @ViewChild(MatPaginator, {static: true})
  public paginator: MatPaginator;

  constructor(private service: SpotReportService, private dialog: MatDialog) { }

  ngOnInit(): void {

    this.spotReports = new SpotReportTableDataSource(this.service);
    this.spotReports.loadSpottings(0, 5);
  }

  ngAfterViewInit() {
    this.paginator.page.subscribe(() => {
      this.spotReports.loadSpottings(this.paginator.pageIndex, this.paginator.pageSize);
    });

    this.spotReports.data$.subscribe(d => this.setMarkers(d));
  }

  private setMarkers(data: SpotReport[]): void {

    this.markers = [];

    for (let item of data) {
      this.markers.push({
        position: {
          lat: item.spotLocation.latitude,
          lng: item.spotLocation.longitude,
        },
        label: {
          color: 'red',
          text: item.sender + ': ' + item.tankType,
        },
        title: item.tankType,
        options: { },
      });
    }
  }

  public centerAround(report: SpotReport): void {
    this.mapCenter = {
      lat: report.spotLocation.latitude,
      lng: report.spotLocation.longitude
    };
  }

  public addReport(): void {
    const dialogRef = this.dialog.open(AddSpotReportDialogComponent, {
      width: '800px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }
      this.spotReports.addItem(result);
    });
  }

}
