import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpotReport } from '../model/spotreport';

@Injectable({
  providedIn: 'root'
})
export class SpotReportService {

  constructor(private client: HttpClient) {
  }

  getReports(): Observable<SpotReport[]> {
    return this.client.get<SpotReport[]>("/api/reports");
  }

  addSpotReport(report: SpotReport): Observable<SpotReport> {
    return this.client.post<SpotReport>("/api/reports", report);
  }
}
