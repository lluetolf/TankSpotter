import { Component, OnInit } from '@angular/core';
import { SpotReportService } from '../services/spot-report.service';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-spot-report-map',
  templateUrl: './spot-report-map.component.html',
  styleUrls: ['./spot-report-map.component.scss']
})
export class SpotReportMapComponent implements OnInit {

  public mapCenter: google.maps.LatLngLiteral;
  public markers: Subject<any[]> = new Subject();

  constructor(private service: SpotReportService) { }

  ngOnInit(): void {
    this.research();
  }

  public research() {
    this.service.getReports().subscribe(reports => {
      const entries = reports.map(r => {
        return {
          position: {
            lat: r.spotLocation.latitude,
            lng: r.spotLocation.longitude,
          },
          label: {
            color: this.getColor(r.status),
            text: r.sender + ': ' + r.tankType,
          },
          title: r.tankType,
          options: { }
        };
      });
      this.markers.next(entries);
    });
  }

  getColor(status: string): string {
    switch (status) {
      case 'Open': return 'white';
      case 'Verified': return 'green';
      case 'Rejected': return 'red';
      default: return 'blue';
    }
  }

}
