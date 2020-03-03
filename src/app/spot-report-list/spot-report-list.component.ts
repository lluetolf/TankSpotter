import { Component, OnInit } from '@angular/core';
import { SpotReport } from '../model/spotreport';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { SpotReportService } from '../services/spot-report.service';
import { AddSpotReportDialogComponent } from '../add-spot-report-dialog/add-spot-report-dialog.component';

@Component({
  selector: 'app-spot-report-list',
  templateUrl: './spot-report-list.component.html',
  styleUrls: ['./spot-report-list.component.scss']
})
export class SpotReportListComponent implements OnInit {

  public displayedColumns: string[] = ["id", "tankType", "spotLocation", "action" ];
  public spotReports: MatTableDataSource<SpotReport> = new MatTableDataSource();

  public mapCenter: google.maps.LatLngLiteral;
  public markers: any[];

  constructor(private service: SpotReportService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.service.getReports().subscribe(data => {
      this.spotReports.data = data;

      if (data && data.length > 0) {
        this.mapCenter = {
          lat: data[0].spotLocation.latitude,
          lng: data[0].spotLocation.longitude
        };
      }

      this.setMarkers(data);
    });
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
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed: ' + result);
      this.spotReports.data = this.spotReports.data.concat(result)  ;
      this.setMarkers(this.spotReports.data);
      this.centerAround(result);
    });
  }

}
