import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpotReport } from '../model/spotreport';

@Injectable({
  providedIn: 'root'
})
export class SpotReportService {

  private serviceUrl: string = "https://tankspotterapi.herokuapp.com/spottings";

  constructor(private client: HttpClient) {
  }

  getReports(): Observable<SpotReport[]> {
    const headers = { headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
     }
    };
    return this.client.get<SpotReport[]>(this.serviceUrl, headers);
  }

  addSpotReport(report: SpotReport): Observable<SpotReport> {
    return this.client.post<SpotReport>(this.serviceUrl
    , report);
  }
}
