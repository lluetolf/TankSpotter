import { Component, OnInit } from '@angular/core';
import { SpotReport } from '../model/spotreport';
import { MatTableDataSource } from '@angular/material/table';
import { SpotReportService } from '../services/spot-report.service';

@Component({
  selector: 'app-spot-report-list',
  templateUrl: './spot-report-list.component.html',
  styleUrls: ['./spot-report-list.component.scss']
})
export class SpotReportListComponent implements OnInit {

  public displayedColumns: string[] = ["id", "tankType", "spotLocation" ];
  public spotReports: MatTableDataSource<SpotReport> = new MatTableDataSource();

  constructor(private service: SpotReportService) { }

  ngOnInit(): void {
    this.service.getReports().subscribe(data =>
      this.spotReports.data = data
    );
  }

}
