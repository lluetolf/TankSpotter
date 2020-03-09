import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { SpotReport } from '../model/spotreport';
import { SpotReportService } from '../services/spot-report.service';


@Component({
  selector: 'app-add-spot-report-dialog',
  templateUrl: './add-spot-report-dialog.component.html',
  styleUrls: ['./add-spot-report-dialog.component.scss']
})
export class AddSpotReportDialogComponent implements OnInit {

  public report: SpotReport;
  public isMapVisible: boolean;

  constructor(private dialogRef: MatDialogRef<AddSpotReportDialogComponent>, private service: SpotReportService) { }

  ngOnInit(): void {
    this.report = new SpotReport();
    this.report.created = new Date();
    this.report.spotTime = new Date();
    this.report.spotLocation = { accuracy: 1, longitude: 0, latitude: 0 };
  }

  onMapClicked(event: google.maps.MouseEvent): void {
    console.log(event);
    let location = event.latLng;
    this.report.spotLocation.latitude = location.lat();
    this.report.spotLocation.longitude = location.lng();
    this.isMapVisible = false;
  }

  useCurrentLocation() {
    if (!navigator.geolocation) {
      return;
    }

    navigator.geolocation.getCurrentPosition(location => {
      this.report.spotLocation.latitude = location.coords.latitude;
      this.report.spotLocation.longitude = location.coords.longitude;
      this.report.spotLocation.accuracy = location.coords.accuracy;
    });
  }

  save() {

    this.service.addSpotReport(this.report).subscribe(result => {
      console.log('Create:' + JSON.stringify(result));

      this.dialogRef.close(result);
    });
  }

  dismiss() {
    this.dialogRef.close();
  }

  showMap() {
    this.isMapVisible = true;
  }

}
