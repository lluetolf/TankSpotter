import { DataSource } from '@angular/cdk/table';
import { SpotReport } from './model/spotreport';
import { BehaviorSubject, Observable } from 'rxjs';
import { SpotReportService } from './services/spot-report.service';
import { CollectionViewer } from '@angular/cdk/collections';

export class SpotReportTableDataSource implements DataSource<SpotReport> {

    private spottingsSubject = new BehaviorSubject<SpotReport[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();
    public data$ = this.spottingsSubject.asObservable();

    constructor(private coursesService: SpotReportService) {}

    connect(collectionViewer: CollectionViewer): Observable<SpotReport[]> {
        return this.spottingsSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.spottingsSubject.complete();
        this.loadingSubject.complete();
    }

    loadSpottings(pageIndex = 0, pageSize = 3) {

        this.loadingSubject.next(true);
        this.coursesService.getReports()
          .subscribe(spottings => {
            this.loadingSubject.next(false);
            this.spottingsSubject.next(spottings.slice(pageIndex * pageSize, pageIndex * pageSize + pageSize));
          });
    }

    addItem(report: SpotReport) {
      this.spottingsSubject.next([...this.spottingsSubject.value, report]);
    }
}
