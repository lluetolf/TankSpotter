import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InMemSpotReportService implements InMemoryDbService {

  createDb() {

      const reports = [
        {
            id: 1,
            created: "2020-03-03T09:22:39+00:00",
            sensor: "Keller",
            sender: "Keller",
            status: "Open",
            recipient: "All",
            observerLocation: {
                latitude: 0,
                longitude: 0,
                accuracy: 0
            },
            spotLocation: {
                latitude: 46.755425,
                longitude: 7.608383,
                accuracy: 1
            },
            spotTime: "2020-03-03T09:22:39+00:00",
            tankType: "leo2"
        },
        {
          id: 2,
          created: "2020-03-03T09:22:39+00:00",
          sensor: "Luetolf",
          sender: "Luetolf",
          status: "Open",
          recipient: "All",
          observerLocation: {
              latitude: 0,
              longitude: 0,
              accuracy: 0
          },
          spotLocation: {
              latitude: 0,
              longitude: 0,
              accuracy: 0
          },
          spotTime: "2020-03-03T09:22:39+00:00",
          tankType: "abraham"
      }
      ];

      return { reports };
  }

  constructor() { }
}
